    // @source ClientWebSocket.js

    Bridge.define("Bridge.Net.WebSockets.ClientWebSocket", {
        constructor: function() {
            this.state = "none";
            this.options = new Bridge.Net.WebSockets.ClientWebSocketOptions();
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
                this.socket.onopen = function() {
                    self.state = "open";
                    tcs.setResult(null);
                };
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

        throwIfNotConnected: function() {
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
