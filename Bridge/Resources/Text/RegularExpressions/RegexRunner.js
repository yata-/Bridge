// @source Text/RegularExpressions/RegexRunner.js

Bridge.define("Bridge.Text.RegularExpressions.RegexRunner", {
    statics: {
    },

    _runregex: null,
    _netEngine: null,

    _runtext: "", // text to search
    _runtextpos: 0, // current position in text

    _runtextbeg: 0, // beginning of text to search
    _runtextend: 0, // end of text to search
    _runtextstart: 0, // starting point for search
    _quick: false, // true value means IsMatch method call
    _prevlen: 0,

    constructor: function (regex) {
        if (regex == null) {
            throw new Bridge.ArgumentNullException("regex");
        }

        this._runregex = regex;

        var options = regex.getOptions();
        var optionsEnum = Bridge.Text.RegularExpressions.RegexOptions;
        var isMultiline = (options & optionsEnum.Multiline) === optionsEnum.Multiline;
        var isCaseInsensitive = (options & optionsEnum.IgnoreCase) === optionsEnum.IgnoreCase;
        var timeoutMs = regex._matchTimeout.getTotalMilliseconds();

        this._netEngine = new Bridge.Text.RegularExpressions.RegexNetEngine(regex._pattern, isMultiline, isCaseInsensitive, timeoutMs);

    },

    run: function (quick, prevlen, input, beginning, length, startat) {
        if (startat < 0 || startat > input.Length) {
            throw new Bridge.ArgumentOutOfRangeException("start", "Start index cannot be less than 0 or greater than input length.");
        }

        if (length < 0 || length > input.Length) {
            throw new ArgumentOutOfRangeException("length", "Length cannot be less than 0 or exceed input length.");
        }

        this._runtext = input;
        this._runtextbeg = beginning;
        this._runtextend = beginning + length;
        this._runtextstart = startat;
        this._quick = quick;
        this._prevlen = prevlen;
        //TODO: internalMatchTimeout

        var stoppos;
        var bump;
        if (this._runregex.getRightToLeft()) {
            stoppos = this._runtextbeg;
            bump = -1;
        } else {
            stoppos = this._runtextend;
            bump = 1;
        }

        if (this._prevlen === 0) {
            if (this._runtextstart === stoppos) {
                return Bridge.Text.RegularExpressions.Match.getEmpty();
            }

            this._runtextstart += bump;
        }

        // Execute Regex:
        var jsMatch = this._netEngine.match(this._runtext, this._runtextstart);

        // Convert the results:
        var result = this._convertNetEngineResults(jsMatch);
        return result;
    },

    parsePattern: function() {
        var result = this._netEngine.parsePattern();
        return result;
    },

    _convertNetEngineResults: function (jsMatch) {
        //TODO: var stopPos = this._runregex.getRightToLeft() ? this._runtextbeg : this._runtextend;

        if (jsMatch.success && this._quick) {
            return null; // in quick mode, a successful match returns null
        }

        if (!jsMatch.success) {
            return Bridge.Text.RegularExpressions.Match.getEmpty();
        }

        var match = new Bridge.Text.RegularExpressions.Match(this._runregex, jsMatch.groups.length, this._runtext, 0, this._runtext.length, this._runtextstart);
        var jsGroup;
        var jsCapture;
        var grOrder;
        var i;
        var j;

        for (i = 0; i < jsMatch.groups.length; i++) {
            jsGroup = jsMatch.groups[i];

            // Paste group index/length according to group ordering:
            grOrder = 0;
            if (jsGroup.descriptor != null) {
                grOrder = this._runregex.groupNumberFromName(jsGroup.descriptor.name);
            }

            for (j = 0; j < jsGroup.captures.length; j++) {
                jsCapture = jsGroup.captures[j];
                match._addMatch(grOrder, jsCapture.capIndex, jsCapture.capLength);
            }
        }

        var textEndPos = jsMatch.capIndex + jsMatch.capLength;
        match._tidy(textEndPos);
        return match;
    }
});