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

        var jsRegExp = new RegExp(regex._pattern, "g");
        jsRegExp.lastIndex = textstart;

        var res = jsRegExp.exec(text);
        if (res == null || res.length === 0) {
            if (quick) {
                var matchClass = Bridge.get(Bridge.Text.RegularExpressions.Match);
                return matchClass.getEmpty();
            }

            return null;
        }

        var capturedText = res[0];
        var textEndPos = jsRegExp.lastIndex;
        var textStartPos = textEndPos - capturedText.length;

        var match = new Bridge.Text.RegularExpressions.Match(this._runregex, res.length, text, 0, text.length, this._runtextstart);
        match._addMatch(0, textStartPos, capturedText.length);
        return this._tidyMatch(match, quick, textEndPos);

        //if (!isGroup && res.length > 1) {
        //    var groupDescs = this._parseGroups(regex._pattern);
        //    for (var i = 1; i < res.length; i++) {
        //        var groupDesc = groupDescs[i - 1];
        //        var groupMatch = this.parseRegex(text, groupDesc.fullCapture, true);
        //        match._addMatch(i, textStartPos + groupMatch._index, groupMatch._length);
        //    }
        //}


        //var groupDescs = this.getGroupDescriptors(regex._pattern);
        //for (var j = 0; j < groupDescs.length; j++) {
        //    var groupDesc = groupDescs[j];

        //    var quantifiers = "";
        //    if (groupDesc.quantifiers != null) {
        //        quantifiers = groupDesc.quantifiers === "+" ? "" : groupDesc.quantifiers;
        //    }

        //    var groupPattern = "(" + groupDesc.expr + ")" + quantifiers;
        //    var group = this.parseRegex(text, groupPattern, isGroup);
        //    arr.push(group);
        //}

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
    },

    _parseGroups: function (pattern) {
        var groups = [];
        this._parseGroupsImpl(groups, pattern, 0, pattern.length);
        return groups;
    },

    _parseGroupsImpl: function (groups, pattern, startIndex, endIndex) {
        var rBracketLvl = 0;
        var sBracketLvl = 0;
        var isEscape = false;
        var group = null;

        for (var i = startIndex; i < endIndex; i++) {
            if (isEscape) {
                isEscape = false;
                continue;
            }

            var ch = pattern[i];
            if (ch === "\\") {
                isEscape = true;
                continue;
            }

            if (ch === "[") {
                sBracketLvl++;
                continue;
            }
            if (ch === "]") {
                if (sBracketLvl > 0) {
                    sBracketLvl--;
                }
                continue;
            }

            if (ch === "(") {
                if (rBracketLvl === 0 && sBracketLvl === 0) {
                    group = { capStart: i, capLength: 0 };
                }
                rBracketLvl++;
                continue;
            }
            if (ch === ")") {
                if (rBracketLvl > 0 && sBracketLvl === 0) {
                    rBracketLvl--;
                    if (rBracketLvl === 0 && group != null) {
                        group.capLength = 1 + i - group.capStart;
                        this._fillGroupInfo(group, pattern, startIndex, endIndex);
                        groups.push(group);

                        // parse inner groups:
                        this._parseGroupsImpl(groups, pattern, group.capStart + 1, i);
                        group = null;
                    }
                }
                continue;
            }
        }
    },

    _fillGroupInfo: function (group, pattern, startIndex, endIndex) {
        var quantifier = "";
        var basicQuantifiers = ["+", "*", "?"];
        var digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

        var outerCh;
        var hasQuantifier = false;
        var outerIndex = group.capStart + group.capLength;
        if (outerIndex < endIndex) {
            var res = this._parseAllowedChars(pattern, outerIndex, outerIndex + 1, basicQuantifiers);

            if (res.parsed.length === 1) {
                quantifier = res.parsed;
                outerIndex++;
                hasQuantifier = true;
            } else {
                outerCh = pattern[outerIndex];
                outerIndex++;

                if (outerCh === "{") {
                    var nRes = this._parseAllowedChars(pattern, outerIndex, endIndex, digits);
                    if (nRes.parsed.length > 0) {
                        if (nRes.lastCh === "}") {
                            quantifier = "{" + nRes.parsed + "}";
                            hasQuantifier = true;
                            outerIndex = nRes.lastIndex + 1;
                        }
                        else if (nRes.lastCh === ",") {
                            var mRes = this._parseAllowedChars(pattern, nRes.lastIndex + 1, endIndex, digits);
                            if (mRes.lastCh === "}") {
                                quantifier = "{" + nRes.parsed + "," + mRes.parsed + "}";
                                hasQuantifier = true;
                                outerIndex = mRes.lastIndex + 1;
                            }
                        }
                    }
                }
            }

            if (hasQuantifier && outerIndex < endIndex) {
                outerCh = pattern[outerIndex];
                if (outerCh === "?") {
                    quantifier += "?";
                }
            }
        }

        group.capture = pattern.slice(group.capStart, group.capStart + group.capLength);
        group.quantifier = quantifier;
        group.fullCapture = group.capture + group.quantifier;
    },

    _parseAllowedChars: function (str, index, endIndex, allowedChars) {
        var res = {
            parsed: "",
            lastCh: "",
            lastIndex: 0
        };

        while (true) {
            if (index >= endIndex) {
                break;
            }

            var ch = str[index];
            var isAllowed = false;
            for (var i = 0; i < allowedChars.length; i++) {
                if (ch === allowedChars[i]) {
                    isAllowed = true;
                    break;
                }
            }

            if (isAllowed) {
                res.parsed += ch;
            } else {
                res.lastCh = ch;
                res.lastIndex = index;
                break;
            }

            index++;
        }

        return res;
    },

    getGroupDescriptors: function (expression) {

        //   \(((?:(?:(?:.*?)(?:\[.*?\])(?:.*?))+?(?:.*))|[^\[\]]*?|[^\[]*?[^\]]*?)\)

        /*
         * == Grouping Constructs ==
         * \\(test)
         * 
         * (test)
         * (?<name>test)
         * (?<name1>test)
         * (?<1name1>test)
         * (?'name'test)
         * (?<name1-name2>test)
         * (A)(B)
         * 
         * == QUINTIFIERS ==
         * bbbb(test)*aaa
         * (test)+
         * (test)?
         * (test){1}
         * (test){2,}
         * (test){3,44}
         * (test)*?
         * (test)+?
         * (test)??
         * (test){1}?
         * (test){22,}?
         * (test){3,4}?
         */

        var groupPattern = "\\((?:\\?(['<]\S+['>]))?(.*?)\\)([*,+,?][?]?|\\{\\d+(?:,(?:\\d+)?)?\\}[?]?)?";
        var regexp = new RegExp(groupPattern, "g");

        var res = [];

        while (true) {
            var group = regexp.exec(expression);
            if (group == null) {
                break;
            }

            var groupDescr = {
                lastIndex: group.lastIndex,
                capture: group[0],
                name: group[1],
                expr: group[2],
                quantifiers: group[3]
            };

            res.push(groupDescr);
        }

        return res;
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