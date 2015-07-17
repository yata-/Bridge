// @source Text/Regex.js

(function () {
    specials = [
            // order matters for these
                "-"
            , "["
            , "]"
            // order doesn't matter for any of these
            , "/"
            , "{"
            , "}"
            , "("
            , ")"
            , "*"
            , "+"
            , "?"
            , "."
            , "\\"
            , "^"
            , "$"
            , "|"
    ],

    regex = RegExp('[' + specials.join('\\') + ']', 'g');

    var regexpEscape = function (s) {
        return s.replace(regex, "\\$&");
    };

    Bridge.regexpEscape = regexpEscape;
})();