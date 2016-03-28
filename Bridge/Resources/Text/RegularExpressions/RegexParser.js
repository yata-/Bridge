// @source Text/RegularExpressions/RegexParser.js

Bridge.define("Bridge.Text.RegularExpressions.RegexParser", {
    statics: {
        escape: function(input) {
            return ""; //TODO: Implement
        },

        unescape: function(input) {
            return ""; //TODO: Implement
        },

        parseReplacement: function(rep, caps, capsize, capnames, op) {
            var culture = Bridge.get(Bridge.CultureInfo).getCurrentCulture(); // TODO: InvariantCulture

            var p = new Bridge.Text.RegularExpressions.RegexParser(culture);
            p._options = op;
            p._noteCaptures(caps, capsize, capnames);
            p._setPattern(rep);

            var root = p._scanReplacement();
            return new Bridge.Text.RegularExpressions.RegexReplacement(rep, root, caps);
        }
    },

    _caps: null,
    _capsize: 0,
    _capnames: null,
    _pattern: "",
    _currentPos: 0,
    _concatenation: null,
    _culture: null,

    config: {
        init: function () {
            this._options = Bridge.Text.RegularExpressions.RegexOptions.None;
        }
    },

    constructor: function (culture) {
        this._culture = culture;
        this._caps = {};
    },

    _noteCaptures: function (caps, capsize, capnames) {
        this._caps = caps;
        this._capsize = capsize;
        this._capnames = capnames;
    },

    _setPattern: function (pattern) {
        if (pattern == null) {
            pattern = "";
        }

        this._pattern = pattern || "";
        this._currentPos = 0;
    },

    _scanReplacement: function () {
        var scope = Bridge.Text.RegularExpressions;
        this._concatenation = new scope.RegexNode(Bridge.get(scope.RegexNode).Concatenate, this._options);

        while (true) {
            var c = this._charsRight();
            if (c === 0) {
                break;
            }

            var startpos = this._textpos();
            while (c > 0 && this._rightChar() !== "$") {
                this._moveRight();
                c--;
            }

            this._addConcatenate(startpos, this._textpos() - startpos);

            if (c > 0) {
                if (this._moveRightGetChar() === "$") {
                    var dollarNode = this._scanDollar();
                    this._concatenation.addChild(dollarNode);
                }
            }
        }

        return this._concatenation;
    },

    _addConcatenate: function(pos, cch/*, bool isReplacement*/) {
        var scope = Bridge.Text.RegularExpressions;
        var nodeStatics = Bridge.get(scope.RegexNode);

        if (cch === 0) {
            return;
        }

        var node;
        if (cch > 1) {
            var str = this._pattern.slice(pos, pos + cch);
            node = new Bridge.Text.RegularExpressions.RegexNode(nodeStatics.Multi, this._options, str);
        } else {
            var ch = this._pattern[pos];
            node = new Bridge.Text.RegularExpressions.RegexNode(nodeStatics.One, this._options, ch);
        }
 
        this._concatenation.addChild(node);
    },

    _useOptionE: function  () {
        return (this._options & Bridge.Text.RegularExpressions.RegexOptions.ECMAScript) !== 0;
    },

    _makeException: function(message) {
        return new Bridge.ArgumentException("Incorrect pattern. " + message);
    },

    _scanDollar: function () {
        var scope = Bridge.Text.RegularExpressions;
        var nodeStatics = Bridge.get(scope.RegexNode);
        var maxValueDiv10 = 214748364;  // Int32.MaxValue / 10;
        var maxValueMod10 = 7;          // Int32.MaxValue % 10;


        if (this._charsRight() === 0) {
            return new scope.RegexNode(nodeStatics.One, this._options, "$");
        }

        var ch = this._rightChar();
        var angled;
        var backpos = this._textpos();
        var lastEndPos = backpos;

        // Note angle
        if (ch === "{" && this._charsRight() > 1) {
            angled = true;
            this._moveRight();
            ch = this._rightChar();
        }
        else {
            angled = false;
        }

        // Try to parse backreference: \1 or \{1} or \{cap}

        var capnum;
        if (ch >= "0" && ch <= "9") {

            if (!angled && this._useOptionE()) {

                capnum = -1;
                var newcapnum = ch - "0";
                this._moveRight();
                if (this._isCaptureSlot(newcapnum)) {
                    capnum = newcapnum;
                    lastEndPos = this._textpos();
                }

                while (this._charsRight() > 0 && (ch = this._rightChar()) >= "0" && ch <= "9") {
                    var digit = ch - "0";
                    if (newcapnum > (maxValueDiv10) || (newcapnum === (maxValueDiv10) && digit > (maxValueMod10))) {
                        throw this._makeException("Capture group is out of range.");
                    }

                    newcapnum = newcapnum * 10 + digit;

                    this._moveRight();
                    if (this._isCaptureSlot(newcapnum)) {
                        capnum = newcapnum;
                        lastEndPos = this._textpos();
                    }
                }
                this._textto(lastEndPos);
                if (capnum >= 0) {
                    return new scope.RegexNode(nodeStatics.Ref, this._options, capnum);
                }
            }
            else {
                capnum = this._scanDecimal();
                if (!angled || this._charsRight() > 0 && this._moveRightGetChar() === "}") {
                    if (this._isCaptureSlot(capnum)) {
                        return new scope.RegexNode(nodeStatics.Ref, this._options, capnum);
                    }
                }
            }
        }
        else if (angled && this._isWordChar(ch)) {
            var capname = this._scanCapname();

            if (this._charsRight() > 0 && this._moveRightGetChar() === "}") {
                if (this._isCaptureName(capname)) {
                    var captureSlot = this._captureSlotFromName(capname);
                    return new scope.RegexNode(nodeStatics.Ref, this._options, captureSlot);
                }
            }
        }
        else if (!angled) {
            capnum = 1;
            var replacementStatics = Bridge.get(Bridge.Text.RegularExpressions.RegexReplacement);

            switch (ch) {
                case "$":
                    this._moveRight();
                    return new scope.RegexNode(nodeStatics.One, this._options, "$");

                case "&":
                    capnum = 0;
                    break;

                case "`":
                    capnum = replacementStatics.LeftPortion;
                    break;

                case "\'":
                    capnum = replacementStatics.RightPortion;
                    break;

                case "+":
                    capnum = replacementStatics.LastGroup;
                    break;

                case "_":
                    capnum = replacementStatics.WholeString;
                    break;
            }

            if (capnum !== 1) {
                this._moveRight();
                return new scope.RegexNode(nodeStatics.Ref, this._options, capnum);
            }
        }

        // unrecognized $: literalize

        this._textto(backpos);
        return new scope.RegexNode(nodeStatics.One, this._options, "$");
    },

    _scanDecimal: function () {
        // Scans any number of decimal digits (pegs value at 2^31-1 if too large)

        var maxValueDiv10 = 214748364;  // Int32.MaxValue / 10;
        var maxValueMod10 = 7;          // Int32.MaxValue % 10;
        var i = 0;

        while (this._charsRight() > 0) {
            var ch = this._rightChar();
            if (ch < "0" || ch > "9") {
                break;
            }

            var d = ch - "0";

            this._moveRight();
            if (i > (maxValueDiv10) || (i === (maxValueDiv10) && d > (maxValueMod10))) {
                throw this._makeException("Capture group is out of range.");
            }

            i *= 10;
            i += d;
        }

        return i;
    },

    _scanCapname: function() {
        var startpos = this._textpos();
 
        while (this._charsRight() > 0) {
            if (!this._isWordChar(this._moveRightGetChar())) {
                this._moveLeft();
                break;
            }
        }
 
        return _pattern.slice(startpos, this._textpos());
    },

    _captureSlotFromName: function (capname) {
        return this._capnames[capname];
    },

    _isCaptureSlot: function (i) {
        if (this._caps != null) {
            return this._caps[i] != null;
        }

        return (i >= 0 && i < this._capsize);
    },

    _isCaptureName: function (capname) {
        if (this._capnames == null) {
            return false;
        }

        return _capnames[capname] != null;
    },

    _isWordChar: function(ch) {
        // Partial implementation, 
        // see the link for more details (http://referencesource.microsoft.com/#System/regex/system/text/regularexpressions/RegexParser.cs,1156)
        return Bridge.Char.isLetter(ch);
    },

    _charsRight: function () {
        return this._pattern.length - this._currentPos;
    },

    _rightChar: function () {
        return this._pattern[this._currentPos];
    },

    _moveRightGetChar: function () {
        return this._pattern[this._currentPos++];
    },

    _moveRight: function () {
        this._currentPos++;
    },

    _textpos: function () {
        return this._currentPos;
    },

    _textto: function (pos) {
        this._currentPos = pos;
    },

    _moveLeft: function () {
        this._currentPos--;
    }
});

