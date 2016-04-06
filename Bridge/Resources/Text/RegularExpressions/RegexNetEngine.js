// @source Text/RegularExpressions/RegexNetEngine.js

Bridge.define("Bridge.Text.RegularExpressions.RegexNetEngine", {
    statics: {
        jsRegex: function (text, textStart, pattern, isMultiLine, isCaseInsensitive, returnAllMatches, re) {
            if (text == null) {
                throw new Bridge.ArgumentNullException("text");
            }
            if (textStart != null && (textStart < 0 || textStart > text.length)) {
                throw new Bridge.ArgumentOutOfRangeException("textStart", "Start index cannot be less than 0 or greater than input length.");
            }
            if (pattern == null) {
                throw new Bridge.ArgumentNullException("pattern");
            }

            var modifiers = "g"; // use "global" modifier by default to allow TextStart configuration
            if (isMultiLine) {
                modifiers += "m";
            }
            if (isCaseInsensitive) {
                modifiers += "i";
            }

            var jsRegExp = new RegExp(pattern, modifiers);
            if (textStart != null) {
                jsRegExp.lastIndex = textStart;
            }

            var match = jsRegExp.exec(text);
            if (match == null || match.length === 0) {
                return null;
            }

            if (returnAllMatches) {
                var matches = [];

                do {
                    matches.push(match);
                    match = jsRegExp.exec(text);
                    if (match != null && re) {
                        re._checkTimeout();
                    }
                } while (match != null)

                return matches;
            } 

            return match;
        },

        parsePatternGroups: function (pattern) {
            var group;
            var groups = [];
            var nestedGroups = [];

            var sBracketLvl = 0;
            var isEscape = false;

            for (var i = 0; i < pattern.length; i++) {
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
                    if (sBracketLvl === 0) {
                        var parent = nestedGroups.length > 0 ? nestedGroups[nestedGroups.length - 1] : null;

                        group = {
                            exprIndex: i,
                            exprLength: 0,
                            parentGroup: parent,
                            innerGroups: []
                        };

                        groups.push(group);
                        nestedGroups.push(group);

                        if (parent != null) {
                            parent.innerGroups.push(group);
                        }

                        group.constructs = Bridge.Text.RegularExpressions.RegexNetEngine._getGroupConstructs(pattern, i + 1);
                        i += group.constructs.exprLength; // Skip group Constructs in the pattern
                    }
                    continue;
                }
                if (ch === ")") {
                    if (sBracketLvl === 0 && nestedGroups.length > 0) {
                        group = nestedGroups.pop();
                        group.exprLength = 1 + i - group.exprIndex;
                        Bridge.Text.RegularExpressions.RegexNetEngine._fillPatternGroupInfo(group, pattern);
                    }
                    continue;
                }
            }

            var groupId = 1;
            for (var j = 0; j < groups.length; j++) {
                if (groups[j].constructs.name1 != null) {
                    //TODO: check balancing case: name1-name2
                    groups[j].name = groups[j].constructs.name1;
                    groups[j].hasName = true;
                } else if (!groups[j].constructs.isNonCapturing) {
                    groups[j].hasName = false;
                    groups[j].name = groupId.toString();
                    ++groupId;
                }
            }

            return groups;
        },

        _getGroupConstructs: function (pattern, i) {
            // ?<name1>
            // ?'name1'
            // ?<name1-name2>
            // ?'name1-name2'
            // ?:
            // ?imnsx-imnsx
            // ?=
            // ?!
            // ?<=
            // ?<!
            // ?>
            var constructs = {
                name1: null,
                name2: null,

                isNonCapturing: false,

                isIgnoreCase: null,
                isMultiline: null,
                isExplicitCapture: null,
                isSingleLine: null,
                isIgnoreWhitespace: null,

                isPositiveLookahead: false,
                isNegativeLookahead: false,
                isPositiveLookbehind: false,
                isNegativeLookbehind: false,

                isNonbacktracking: false,

                exprLength: 0
            };

            if (i+1 >= pattern.length) {
                return constructs;
            }

            if (pattern[i] !== "?") {
                return constructs;
            }

            ++i;
            var sfx2 = pattern.slice(i, i + 2);
            if (sfx2.length === 2) {
                if (sfx2 === "<=") {
                    constructs.isPositiveLookbehind = true;
                    constructs.exprLength = 3;
                    return constructs;
                }
                if (sfx2 === "<!") {
                    constructs.isNegativeLookbehind = true;
                    constructs.exprLength = 3;
                    return constructs;
                }
            }
            var ch = pattern[i];
            if (ch === ":") {
                constructs.isNonCapturing = true;
                constructs.exprLength = 2;
                return constructs;
            }
            if (ch === "=") {
                constructs.isPositiveLookahead = true;
                constructs.exprLength = 2;
                return constructs;
            }
            if (ch === "!") {
                constructs.isNegativeLookahead = true;
                constructs.exprLength = 2;
                return constructs;
            }
            if (ch === ">") {
                constructs.isNonbacktracking = true;
                constructs.exprLength = 2;
                return constructs;
            }
            if (ch === "<" || ch === "'") {
                var endBracket = ch === "<" ? ">" : "'";
                var name1Match = Bridge.Text.RegularExpressions.RegexNetEngine._matchUntil(pattern, i + 1, pattern.length, ["-", endBracket]);
                constructs.name1 = name1Match.matched;
                constructs.exprLength = name1Match.lastIndex - i + 2;
                                                                    
                if (name1Match.lastCh === "-") {
                    var name2Match = Bridge.Text.RegularExpressions.RegexNetEngine._matchUntil(pattern, name1Match.lastIndex + 1, pattern.length, [endBracket]);
                    constructs.name2 = name2Match.matched;
                    constructs.exprLength = name2Match.lastIndex - i + 2;
                }
                return constructs;
            }

            var imnsx = ["i", "m", "n", "s", "x"];
            var imnsx1Match = Bridge.Text.RegularExpressions.RegexNetEngine._matchAllowedChars(pattern, i + 1, pattern.length, imnsx);
            if (imnsx1Match.lastCh === "-" || imnsx1Match.lastCh === ":") {
                Bridge.Text.RegularExpressions.RegexNetEngine._parseImnsx(constructs, imnsx1Match.matched, true);

                if (imnsx1Match.lastCh === "-") {
                    var imnsx2Match = Bridge.Text.RegularExpressions.RegexNetEngine._matchAllowedChars(pattern, imnsx1Match.lastCh + 1, pattern.length, imnsx);
                    Bridge.Text.RegularExpressions.RegexNetEngine._parseImnsx(constructs, imnsx2Match.matched, false);
                    constructs.exprLength = imnsx2Match.lastIndex - i + 2;
                } else {
                    constructs.exprLength = imnsx1Match.lastIndex - i + 2;
                }
            }

            return constructs;
        },

        _parseImnsx: function(prefix, imnsxString, value) {
            for (var i = 0; i < imnsxString.length; i++) {
                var ch = imnsxString[i];
                if (ch === "i") {
                    prefix.isIgnoreCase = value;
                }
                else if (ch === "m") {
                    prefix.isMultiline = value;
                }
                else if (ch === "n") {
                    prefix.isExplicitCapture = value;
                }
                else if (ch === "s") {
                    prefix.isSingleLine = value;
                }
                else if (ch === "x") {
                    prefix.isIgnoreWhitespace = value;
                }
            }
        },

        _fillPatternGroupInfo: function (group, pattern) {
            var quantifier = "";
            var basicQuantifiers = ["+", "*", "?"];
            var digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

            var outerCh;
            var hasQuantifier = false;
            var outerIndex = group.exprIndex + group.exprLength;
            if (outerIndex < pattern.length) {
                var res = Bridge.Text.RegularExpressions.RegexNetEngine._matchAllowedChars(pattern, outerIndex, outerIndex + 1, basicQuantifiers);

                if (res.matched.length === 1) { // ["+", "*", "?"]
                    quantifier = res.matched;
                    outerIndex++;
                    hasQuantifier = true;
                } else {
                    outerCh = pattern[outerIndex];
                    outerIndex++;

                    if (outerCh === "{") {
                        var nRes = Bridge.Text.RegularExpressions.RegexNetEngine._matchAllowedChars(pattern, outerIndex, pattern.length, digits);
                        if (nRes.matched.length > 0) {
                            if (nRes.lastCh === "}") {
                                quantifier = "{" + nRes.matched + "}";
                                hasQuantifier = true;
                                outerIndex = nRes.lastIndex + 1;
                            }
                            else if (nRes.lastCh === ",") {
                                var mRes = Bridge.Text.RegularExpressions.RegexNetEngine._matchAllowedChars(pattern, nRes.lastIndex + 1, pattern.length, digits);
                                if (mRes.lastCh === "}") {
                                    quantifier = "{" + nRes.matched + "," + mRes.matched + "}";
                                    hasQuantifier = true;
                                    outerIndex = mRes.lastIndex + 1;
                                }
                            }
                        }
                    }
                }

                if (hasQuantifier && outerIndex < pattern.length) {
                    outerCh = pattern[outerIndex];
                    if (outerCh === "?") {
                        quantifier += "?";
                    }
                }
            }

            group.quantifier = quantifier;
            group.expr = pattern.slice(group.exprIndex, group.exprIndex + group.exprLength);
            group.exprFull = group.expr + group.quantifier;
        },

        _matchAllowedChars: function (str, index, endIndex, allowedChars) {
            var res = {
                matched: "",
                lastCh: "",
                lastIndex: 0
            };

            while (index < endIndex) {

                var ch = str[index];
                var isAllowed = false;
                for (var i = 0; i < allowedChars.length; i++) {
                    if (ch === allowedChars[i]) {
                        isAllowed = true;
                        break;
                    }
                }

                if (isAllowed) {
                    res.matched += ch;
                } else {
                    res.lastCh = ch;
                    res.lastIndex = index;
                    break;
                }

                index++;
            }

            return res;
        },

        _matchUntil: function(str, index, endIndex, unallowedChars) {
            var res = {
                matched: "",
                lastCh: "",
                lastIndex: 0
            };

            while (index < endIndex) {

                var ch = str[index];
                for (var i = 0; i < unallowedChars.length; i++) {
                    if (ch === unallowedChars[i]) {
                        res.lastCh = ch;
                        res.lastIndex = index;
                        return res;
                    }
                }

                res.matched += ch;
                index++;
            }

            return res;
        }
    },

    _pattern: "",
    _isMultiLine: false,
    _isCaseInsensitive: false,
    _text: "",
    _textStart: 0,
    _groupDescriptors: null,
    _timeoutMs: -1,
    _timeoutTime: -1,

    constructor: function (pattern, isMultiLine, isCaseInsensitive, timeoutMs) {
        if (pattern == null) {
            throw new Bridge.ArgumentNullException("pattern");
        }

        this._pattern = pattern;
        this._isMultiLine = isMultiLine;
        this._isCaseInsensitive = isCaseInsensitive;
        this._timeoutMs = timeoutMs;
        this._timeoutTime = timeoutMs > 0 ? new Date().getTime() + Bridge.Convert.toInt32(timeoutMs + 0.5) : -1;
    },

    match: function (text, textStart) {
        if (text == null) {
            throw new Bridge.ArgumentNullException("text");
        }
        if (textStart != null && (textStart < 0 || textStart > text.length)) {
            throw new Bridge.ArgumentOutOfRangeException("textStart", "Start index cannot be less than 0 or greater than input length.");
        }

        this._text = text;
        this._textStart = textStart;

        var match = {
            capIndex: 0,       // start index of total capture
            capLength: 0,      // length of total capture
            success: false,
            value: "",
            groups: [],
            captures: []
        };

        // Get group descriptors (+ remove group name before any processing);
        var groupDescs = this._getGroupDescriptors();

        this._checkTimeout();

        // The 1st run (to know the total capture):
        var total = Bridge.Text.RegularExpressions.RegexNetEngine.jsRegex(this._text, this._textStart, this._pattern, this._isMultiLine, this._isCaseInsensitive, false, this);
        if (total == null) {
            return match;
        }

        match.capIndex = total.index;
        match.capLength = total[0].length;
        match.success = true;

        // Add total capture both to groups and captures:
        match.captures.push({
            capIndex: total.index,
            capLength: total[0].length,
            value: total[0]
        });

        match.groups.push({
            capIndex: total.index,
            capLength: total[0].length,
            value: total[0],
            success: true,
            captures: [match.captures[0]]
        });

        // Get more details about groups and captures (if any):
        if (total.length > 1) {
            var descToGroupMap = {};
            var globalCtx = {
                text: this._text,
                textOffset: this._textStart,
                pattern: this._pattern,
                patternStart: 0,
                patternEnd: this._pattern.length
            };

            var nonCapturingCount = 0;
            for (var i = 1; i < total.length + nonCapturingCount; i++) {
                this._checkTimeout();

                var groupDesc = groupDescs[i - 1];
                if (groupDesc.constructs.isNonCapturing) {
                    nonCapturingCount++;
                }

                var group = {
                    descriptor: groupDesc,
                    capIndex: 0,
                    capLength: 0,
                    value: "",
                    valueFull: "",
                    success: false,
                    captures: [],
                    ctx: null
                };
                descToGroupMap[groupDesc.exprIndex] = group;

                var parentGroupDesc = groupDesc.parentGroup;
                if (parentGroupDesc == null) { 
                    // Match a root group using the global context:
                    this._matchGroup(globalCtx, group, 0);

                    // Match the group's captures:
                    if (group.success) {
                        this._matchCaptures(group);
                    }
                } else {
                    // Use the parent group's context.
                    // However, don't match the group if the parent has not been matched successfully.
                    var parentGroup = descToGroupMap[parentGroupDesc.exprIndex];
                    if (parentGroup.success === true) {
                        // Match the group in every single parent capture:
                        for (var j = 0; j < parentGroup.captures.length; j++) {
                            this._checkTimeout();

                            var parentCapture = parentGroup.captures[j];
                            this._matchGroup(parentCapture.ctx, group, parentCapture.capIndex);

                            // Match the group's captures:
                            if (group.success) {
                                this._matchCaptures(group);
                            }
                        }
                    }
                }

                if (group.captures.length > 0) {
                    var lastCapture = group.captures[group.captures.length - 1];
                    group.capIndex = lastCapture.capIndex;
                    group.capLength = lastCapture.capLength;
                    group.value = lastCapture.value;
                }

                if (!groupDesc.constructs.isNonCapturing) {
                    match.groups.push(group);
                }
            }

            // Remove internal fields:
            for (var k = 0; k < match.groups.length; k++) {
                var gr = match.groups[k];
                delete gr.ctx;
                for (var m = 0; m < gr.captures.length; m++) {
                    delete gr.captures[m].ctx;
                }
            }
        }

        return match;
    },

    _matchGroup: function (ctx, group, parentGroupTextOffset) {
        var groupDesc = group.descriptor;
        var groupStart = groupDesc.exprIndex;
        var groupEnd = groupDesc.exprIndex + groupDesc.exprLength;
        var groupEndFull = groupDesc.exprIndex + groupDesc.exprFull.length;

        // Use RegExp to determine the capture length for the subexpression to the left of the Group expression.
        if (groupDesc.exprIndex > ctx.patternStart) {
            var leftRes = this._matchSubExpr(ctx.text, ctx.textOffset, ctx.pattern, ctx.patternStart, ctx.patternEnd, ctx.patternStart, groupStart);
            if (leftRes != null) {
                ctx.textOffset = leftRes.capIndex + leftRes.capLength;
            }
        }

        // Use RegExp to determine length and location of the captured Group
        var groupRes = this._matchSubExpr(ctx.text, ctx.textOffset, ctx.pattern, ctx.patternStart, ctx.patternEnd, groupStart, groupEndFull);
        if (groupRes != null && groupRes.captureGroup != null) {
            ctx.textOffset = groupRes.capIndex + groupRes.capLength;

            group.value = groupRes.captureGroup;
            group.valueFull = groupRes.capture;
            group.capIndex = groupRes.capIndex + parentGroupTextOffset;
            group.capLength = groupRes.capLength;
            group.success = true;

            // Save the current group conext for its children:
            var groupStartStep = groupDesc.constructs.isNonCapturing ? 3 : 1;
            if (groupDesc.innerGroups.length > 0) {
                group.ctx = {
                    text: group.valueFull, //TODO: FULL OR NOT?
                    textOffset: 0,

                    pattern: ctx.pattern,
                    patternStart: groupStart + groupStartStep,  // start index of the group content without the opening bracket
                    patternEnd: groupEnd - 1                    // end index of the group content without the closing bracket
                };
            }
        }

        ctx.patternStart = groupEndFull;
    },

    _matchCaptures: function (group) {
        var groupDesc = group.descriptor;

        if (groupDesc.quantifier == null || groupDesc.quantifier.length === 0 || groupDesc.quantifier === "?" || group.valueFull == null || group.valueFull.length === 0) {
            // For non-repeating groups - only 1 capture exists (the same as the group).
            group.captures.push({
                capIndex: group.capIndex,
                capLength: group.capLength,
                value: group.valueFull
            });

        } else {
            // For repeating groups - find all captures:
            var qCh = groupDesc.quantifier[0];
            if (qCh === "*" || qCh === "+" || qCh === "{") {
                var capMatches = Bridge.Text.RegularExpressions.RegexNetEngine.jsRegex(group.valueFull, 0, groupDesc.expr, this._isMultiLine, this._isCaseInsensitive, true, this);
                if (capMatches == null) {
                    throw new Bridge.InvalidOperationException("Can't identify captures for the already matched group.");
                }

                for (var i = 0; i < capMatches.length; i++) {
                    var capMatch = capMatches[i];
                    group.captures.push({
                        capIndex: capMatch.index + group.capIndex,
                        capLength: capMatch[0].length,
                        value: capMatch[0]
                    });
                }
            }
        }

        // Deep copy group context to the each capture:
        if (group.ctx != null) {
            for (var j = 0; j < group.captures.length; j++) {
                group.captures[j].ctx = {
                    text: group.captures[j].value,
                    textOffset: 0,
                    pattern: group.ctx.pattern,
                    patternStart: group.ctx.patternStart,
                    patternEnd: group.ctx.patternEnd
                };
            }
        }
    },

    _matchSubExpr: function (text, textOffset, pattern, patternStartIndex, patternEndIndex, subExprStartIndex, subExprEndIndex) {
        // transforms the pattern to: "<subexpression>(?=<everything else>)"

        if (textOffset < 0 || textOffset > text.length) {
            throw new Bridge.ArgumentOutOfRangeException("textOffset");
        }
        if (patternStartIndex < 0 || patternStartIndex >= pattern.length) {
            throw new Bridge.ArgumentOutOfRangeException("patternStartIndex");
        }
        if (patternEndIndex < patternStartIndex || patternEndIndex > pattern.length) {
            throw new Bridge.ArgumentOutOfRangeException("patternEndIndex");
        }
        if (subExprStartIndex < patternStartIndex || subExprStartIndex >= patternEndIndex) {
            throw new Bridge.ArgumentOutOfRangeException("subExprStartIndex");
        }
        if (subExprEndIndex < subExprStartIndex || subExprEndIndex > patternEndIndex) {
            throw new Bridge.ArgumentOutOfRangeException("subExprEndIndex");
        }

        if (textOffset === text.length) {
            return null; // end of search;
        }

        var subExpr = pattern.slice(subExprStartIndex, subExprEndIndex);
        var restExpr = pattern.slice(subExprEndIndex, patternEndIndex);
        var transformedPattern = subExpr + "(?=" + restExpr + ")";

        var subExpRes = Bridge.Text.RegularExpressions.RegexNetEngine.jsRegex(text, textOffset, transformedPattern, this._isMultiLine, this._isCaseInsensitive, false, this);
        if (subExpRes != null) {
            return {
                capture: subExpRes[0],
                captureGroup: subExpRes.length > 1 ? subExpRes[1] : null,
                capIndex: subExpRes.index,
                capLength: subExpRes[0].length
            };
        }
        return null;
    },

    _getGroupDescriptors: function () {
        if (this._groupDescriptors == null) {
            this._groupDescriptors = Bridge.Text.RegularExpressions.RegexNetEngine.parsePatternGroups(this._pattern);
            this._removeGroupNamesFromPattern();
        }
        return this._groupDescriptors;
    },

    _removeGroupNamesFromPattern: function() {
        // Remove group names (JS RegExp does not support them):

        var updatedPattern = this._pattern;
        for (var i = 0; i < this._groupDescriptors.length; i++) {
            var gr = this._groupDescriptors[i];
            if (gr.hasName) {
                // Remove name from the group:
                var name = gr.constructs.name1;
                var nameConstrLen = 3 + name.length;
                gr.expr = this._removeSubstring(gr.expr, 1, nameConstrLen);
                gr.exprFull = gr.expr + gr.quantifier;
                gr.exprLength -= nameConstrLen;

                // Update parent groups (remove name from their templates as well)
                var parent = gr.parentGroup;
                while (parent != null) {
                    parent.exprLength -= nameConstrLen;
                    parent.expr = this._removeSubstring(parent.expr, gr.exprIndex + 1 - parent.exprIndex, nameConstrLen);
                    parent.exprFull = parent.expr + parent.quantifier;
                    parent = parent.parentGroup;
                }

                // Update all consequent groups (shift their indexes according to the length of the removed group name)
                updatedPattern = this._removeSubstring(updatedPattern, gr.exprIndex + 1, nameConstrLen);
                for (var j = i + 1; j < this._groupDescriptors.length; j++) {
                    var nextGr = this._groupDescriptors[j];
                    nextGr.exprIndex -= nameConstrLen;
                }
            }
        }
        this._pattern = updatedPattern;
    },

    _removeSubstring: function(str, index, length) {
        var result = str.slice(0, index) + str.slice(index + length, str.length);
        return result;
    },

    _checkTimeout: function () {
        if (this._timeoutTime < 0) {
            return;
        }

        var time = new Date().getTime();
        if (time >= this._timeoutTime) {
            throw new Bridge.RegexMatchTimeoutException(this._text, this._pattern, Bridge.TimeSpan.fromMilliseconds(this._timeoutMs));
        }
    }
});