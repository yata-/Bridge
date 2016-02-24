// @source Text/RegexCoreFx.js

Bridge.define("Bridge.RegexOptions", {
    statics: {
        None: 0x0000,
        IgnoreCase: 0x0001,
        Multiline: 0x0002,
        ExplicitCapture: 0x0004,
        Compiled: 0x0008,
        Singleline: 0x0010,
        IgnorePatternWhitespace: 0x0020,
        RightToLeft: 0x0040,
        ECMAScript: 0x0100,
        CultureInvariant: 0x0200
    }
});

Bridge.define("Bridge.RegexCoreFx", {
    statics: {

    },

    _pattern: "",
    _options: Bridge.RegexOptions.None,
    _matchTimeout: Bridge.TimeSpan.fromMilliseconds(-1),

    constructor: function (pattern) {
        this._pattern = pattern;
    },

    constructor$1: function (pattern, options) {
        this._pattern = pattern;
        this._options = options;
    },

    constructor$2: function (pattern, options, matchTimeout) {
        this._pattern = pattern;
        this._options = options;
        this._matchTimeout = matchTimeout;
    },

    getMatchTimeout: function () {
        return this._matchTimeout;
    },

    getOptions: function () {
        return this._options;
    },

    getRightToLeft: function () {
        return (this._options & Bridge.RegexOptions.RightToLeft) !== 0;
    },

    isMatch: function (input) {
        var jsRegExp = new RegExp(this._pattern);
        var res = jsRegExp.test(input);
        return res;
    },

    isMatch$1: function (input, startat) {
        var jsRegExp = new RegExp(this._pattern, "g");
        jsRegExp.lastIndex = startat;
        var res = jsRegExp.test(input);
        return res;
    },
});


