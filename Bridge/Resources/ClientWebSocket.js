    // @source ClientWebSocket.js

    Bridge.define("Bridge.Net.WebSockets.ClientWebSocket", {
        inherits: [Bridge.IDisposable],
        constructor: function() {
            this.messageBuffer = [];
            this.state = "none";
            this.options = new Bridge.Net.WebSockets.ClientWebSocketOptions();
            this.disposed = false;
            this.closeStatus = null;
        },

        getCloseStatus: function() {
            return this.closeStatus;
        },

        getState: function() {
            return this.state;
        },

        connectAsync: function(uri, cancellationToken) {
            if (this.state !== "none") {
                throw new Bridge.InvalidOperationException("Socket is not in initial state");
            }
            this.options.setToReadOnly();
            this.state = "connecting";
            var tcs = new Bridge.TaskCompletionSource(),
                self = this;
            try {
                this.socket = new WebSocket(uri.getAbsoluteUri(), this.options.requestedSubProtocols);
                this.socket.binaryType = "arraybuffer";
                this.socket.onopen = function() {
                    self.state = "open";
                    tcs.setResult(null);
                };
                this.socket.onmessage = function(e) {
                    var data = e.data,
                        message = {},
                        i;
                    message.bytes = [];
                    if (typeof (data) === "string") {
                        for (i = 0; i < data.length; ++i) {
                            message.bytes.push(data.charCodeAt(i));
                        }
                        message.messageType = "text";
                        self.messageBuffer.push(message);
                        return;
                    }
                    if (data instanceof ArrayBuffer) {
                        var dataView = new Uint8Array(data);
                        for (i = 0; i < dataView.length; i++) {
                            message.bytes.push(dataView[i]);
                        }
                        message.messageType = "binary";
                        self.messageBuffer.push(message);
                        return;
                    }
                    throw new Bridge.ArgumentException("Invalid message type.");
                }
            } catch (e) {
                tcs.setException(Bridge.Exception.create(e));
            }
            return tcs.task;
        },

        sendAsync: function(buffer, messageType, endOfMessage, cancellationToken) {
            this.throwIfNotConnected();
            var tcs = new Bridge.TaskCompletionSource();
            try {
                var array = buffer.getArray(),
                    data;
                switch (messageType) {
                case "binary":
                    data = new ArrayBuffer(array.length);
                    var dataView = new Int8Array(data);
                    for (var i = 0; i < array.length; i++) {
                        dataView[i] = array[i];
                    }
                    break;
                case "text":
                    data = String.fromCharCode.apply(null, array);
                    break;
                }
                if (messageType === "close") {
                    this.socket.close();
                } else {
                    this.socket.send(data);
                }
                tcs.setResult(null);
            } catch (e) {
                tcs.setException(Bridge.Exception.create(e));
            }
            return tcs.task;
        },

        receiveAsync: function(buffer, cancellationToken) {
            this.throwIfNotConnected();
            var task,
                tcs = new Bridge.TaskCompletionSource(),
                self = this,
                asyncBody = Bridge.fn.bind(this, function() {
                    try {
                        if (cancellationToken.getIsCancellationRequested()) {
                            tcs.setException(new Bridge.TaskCanceledException("Receive has been cancelled.", tcs.task));
                            return;
                        }
                        if (self.messageBuffer.length === 0) {
                            task = Bridge.Task.delay(0);
                            task.continueWith(asyncBody);
                            return;
                        }
                        var message = self.messageBuffer[0],
                            array = buffer.getArray(),
                            resultBytes,
                            endOfMessage;
                        if (message.bytes.length <= array.length) {
                            self.messageBuffer.shift();
                            resultBytes = message.bytes;
                            endOfMessage = true;
                        } else {
                            resultBytes = message.bytes.slice(0, array.length);
                            message.bytes = message.bytes.slice(array.length, message.bytes.length);
                            endOfMessage = false;
                        }
                        for (var i = 0; i < resultBytes.length; i++) {
                            array[i] = resultBytes[i];
                        }
                        tcs.setResult(new Bridge.Net.WebSockets.WebSocketReceiveResult(
                            resultBytes.length, message.messageType, endOfMessage));
                    } catch (e) {
                        tcs.setException(Bridge.Exception.create(e));
                    }
                }, arguments);

            asyncBody();
            return tcs.task;
        },

        abort: function() {
            this.dispose();
        },

        dispose: function() {
            if (this.disposed) {
                return;
            }
            this.disposed = true;
            this.messageBuffer = [];
            if (state === "open") {
                this.state = "closesent";
                this.socket.close();
            }
        },

        throwIfNotConnected: function() {
            if (this.disposed) {
                throw new Bridge.InvalidOperationException("Socket is disposed.");
            }
            if (this.socket.readyState !== 1) {
                throw new Bridge.InvalidOperationException("Socket is not connected.");
            }
        }
    });

    Bridge.define("Bridge.Net.WebSockets.ClientWebSocketOptions", {
        constructor: function() {
            this.isReadOnly = false;
            this.requestedSubProtocols = [];
        },

        setToReadOnly: function() {
            if (this.isReadOnly) {
                throw new Bridge.InvalidOperationException("Options are already readonly.");
            }
            this.isReadOnly = true;
        },

        addSubProtocol: function(subProtocol) {
            if (this.isReadOnly) {
                throw new Bridge.InvalidOperationException("Socket already started.");
            }
            if (this.requestedSubProtocols.indexOf(subProtocol) > -1) {
                throw new Bridge.ArgumentException("Socket cannot have duplicate sub-protocols.", "subProtocol");
            }
            this.requestedSubProtocols.push(subProtocol);
        }
    });

    Bridge.define("Bridge.Net.WebSockets.WebSocketReceiveResult", {
        constructor: function(count, messageType, endOfMessage, closeStatus, closeStatusDescription) {
            this.count = count;
            this.messageType = messageType;
            this.endOfMessage = endOfMessage;
            this.closeStatus = closeStatus;
            this.closeStatusDescription = closeStatusDescription;
        },

        getCount: function() {
            return this.count;
        },

        getMessageType: function() {
            return this.messageType;
        },

        getEndOfMessage: function() {
            return this.endOfMessage;
        },

        getCloseStatus: function() {
            return this.closeStatus;
        },

        getCloseStatusDescription: function() {
            return this.closeStatusDescription;
        }
    });
