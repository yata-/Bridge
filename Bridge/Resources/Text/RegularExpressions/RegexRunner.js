// @source Text/RegularExpressions/RegexRunner.js


Bridge.define("Bridge.Text.RegularExpressions.RegexRunner", {
    statics: {

    },

    _runregex: null,
    _runtext: "", // text to search
    _runtextpos: 0, // current position in text

    _runtextbeg: 0, // beginning of text to search
    _runtextend: 0, // end of text to search
    _runtextstart: 0, // starting point for search

    constructor: function () {
    },

    run: function (regex, quick, prevlen, input, beginning, length, startat) {
        if (startat < 0 || startat > input.Length) {
            throw new Bridge.ArgumentOutOfRangeException("start", "Start index cannot be less than 0 or greater than input length.");
        }

        if (length < 0 || length > input.Length) {
            throw new ArgumentOutOfRangeException("length", "Length cannot be less than 0 or exceed input length.");
        }

        // Do the scan starting at the requested position            
        var match = this.scan(regex, input, beginning, beginning + length, startat, prevlen, quick, null /*internalMatchTimeout*/); //TODO: internalMatchTimeout
        return match;
    },

    scan: function (regex, text, textbeg, textend, textstart, prevlen, quick, timeout) {
        this._runregex = regex;
        this._runtext = text;
        this._runtextbeg = textbeg;
        this._runtextend = textend;
        this._runtextstart = textstart;

        var netEngine = new Bridge.Text.RegularExpressions.RegexNetEngine(regex._pattern);
        var jsMatch = netEngine.match(text, textstart);
        if (!jsMatch.success) {
            if (quick) {
                var matchClass = Bridge.get(Bridge.Text.RegularExpressions.Match);
                return matchClass.getEmpty();
            }
            return null;
        }

        var match = new Bridge.Text.RegularExpressions.Match(this._runregex, jsMatch.groups.length, text, 0, text.length, this._runtextstart);
        //match._addMatch(0, jsMatch.capIndex, jsMatch.capLength);

        for (var i = 0; i < jsMatch.groups.length; i++) {
            var jsGroup = jsMatch.groups[i];
            for (var j = 0; j < jsGroup.captures.length; j++) {
                var jsCapture = jsGroup.captures[j];
                match._addMatch(i, jsCapture.capIndex, jsCapture.capLength);
            }
        }

        return this._tidyMatch(match, quick, jsMatch.capIndex + jsMatch.capLength);
    },

    

    _tidyMatch: function (match, quick, textEndPos) {
        if (!quick) {
            // TODO: runmatch to be set to NULL
            match._tidy(textEndPos);
            return match;
        } else {
            // in quick mode, a successful match returns null
            return null;
        }
    }
});

Bridge.define("Bridge.Text.RegularExpressions.RegexReplacement", {
    statics: {
        replace: function (evaluator, regex, input, count, startat) {
            return ""; //TODO: Implement
        },

        split: function (regex, input, count, startat) {
            return []; //TODO: Implement
        }
    },

    _rep: "",

    constructor: function (rep, concat, caps) {
        this._rep = rep;
    },

    getPattern: function () {
        return _rep;
    },

    getSpecials: function () {
        return 4;
    },

    getLeftPortion: function () {
        return -1;
    },

    getRightPortion: function () {
        return -2;
    },

    getLastGroup: function () {
        return -3;
    },

    getWholeString: function () {
        return -4;
    },

    replacement: function (match) {
        return ""; //TODO: Implement
    },

    replace: function (regex, input, count, startat) {
        return ""; //TODO: Implement
    }
});

Bridge.define("Bridge.Text.RegularExpressions.RegexParser", {
    statics: {
        escape: function (input) {
            return ""; //TODO: Implement
        },

        unescape: function (input) {
            return ""; //TODO: Implement
        }
    },

    constructor: function (culture) {
        //TODO: Implement
    }
});