    // @source ClientWebSocket.js

    Bridge.define("Bridge.Net.WebSockets.ClientWebSocket", {
        constructor: function() {
            this.state = "none";
        },

        getState: function() {
            return this.state;
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
