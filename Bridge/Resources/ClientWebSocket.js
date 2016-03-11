    // @source ClientWebSocket.js

    Bridge.define("Bridge.Net.WebSockets.ClientWebSocket", {
        constructor: function() {
            this.state = "none";
        },

        getState: function() {
            return this.state;
        }
    });
