    // @source Uri.js

    Bridge.define("Bridge.Uri", {
        constructor: function(uriString) {
            this.absoluteUri = uriString;
        },

        getAbsoluteUri: function() {
            return this.absoluteUri;
        }
    });
