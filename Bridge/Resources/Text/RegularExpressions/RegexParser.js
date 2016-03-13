// @source Text/RegularExpressions/RegexParser.js

Bridge.define("Bridge.Text.RegularExpressions.RegexParser", {
    statics: {
        escape: function (input) {
            return ""; //TODO: Implement
        },

        unescape: function (input) {
            return ""; //TODO: Implement
        },

        _parseReplacement: function (rep, caps, capsize, capnames, op) {
            var culture = Bridge.get(Bridge.CultureInfo).getCurrentCulture(); // TODO: InvariantCulture
            var p = new Bridge.Text.RegularExpressions.RegexParser(culture);
            p._options = op;
            p.noteCaptures(caps, capsize, capnames);
            p.setPattern(rep);

            var root = p.ScanReplacement();
            return new Bridge.Text.RegularExpressions.RegexReplacement(rep, root, caps);
        }
    },

    _caps: null,
    _capsize: 0,
    _capnames: null,
    _pattern: "",
    _currentPos: 0,

    config: {
        init: function () {
            this._options = Bridge.Text.RegularExpressions.RegexOptions.None;
        }
    },

    constructor: function (culture) {
        //TODO: Implement
    },

    scanReplacement: function () {
        //TODO: Implement
    },

    noteCaptures: function (caps, capsize, capnames) {
        this._caps = caps;
        this._capsize = capsize;
        this._capnames = capnames;
    },

    setPattern: function (pattern) {
        if (pattern == null) {
            pattern = "";
        }

        this._pattern = pattern || "";
        this._currentPos = 0;
    }
});