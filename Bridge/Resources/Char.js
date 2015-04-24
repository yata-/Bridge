// @source Char.js

(function () {
    var char = {
        isWhiteSpace: function (value) {
            if (arguments.length == 2) {
                return /\s/.test(value.charAt(arguments[1]));
            }

            return /\s/.test(String.fromCharCode(value));
        },

        isDigit: function (value) {
            var c = (arguments.length == 2) ? value.charCodeAt(arguments[1]) : value;

            if (c < 256) {
                return (c >= 48 && c <= 57);
            }
            else {
                return new RegExp("[0-9\u0660-\u0669\u06F0-\u06F9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE7-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29]").test(String.fromCharCode(c));
            }
        }
    };

    Bridge.Char = char;
})();