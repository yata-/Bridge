// @source Text/RegularExpressions/RegexNetEngine.js

Bridge.define("Bridge.Text.RegularExpressions.RegexNetEngine", {
    statics: {
        jsRegex: function(text, textStart, pattern, isMultiLine, isCaseInsensitive, returnAllMatches, re) {
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
        }
    },

    _pattern: "",
    _originalPattern: "",
    _patternInfo: null,

    _isCaseInsensitive: false,
    _isMultiLine: false,
    _isSingleline: false,
    _isIgnoreWhitespace: false,
    _text: "",
    _textStart: 0,
    _timeoutMs: -1,
    _timeoutTime: -1,

    constructor: function (pattern, isCaseInsensitive, isMultiLine, isSingleline, isIgnoreWhitespace, timeoutMs) {
        if (pattern == null) {
            throw new Bridge.ArgumentNullException("pattern");
        }

        this._pattern = pattern;
        this._originalPattern = pattern;
        this._isCaseInsensitive = isCaseInsensitive;
        this._isMultiLine = isMultiLine;
        this._isSingleline = isSingleline;
        this._isIgnoreWhitespace = isIgnoreWhitespace;
        this._timeoutMs = timeoutMs;
    },

    match: function (text, textStart, prevLength) {
        if (text == null) {
            throw new Bridge.ArgumentNullException("text");
        }
        if (textStart != null && (textStart < 0 || textStart > text.length)) {
            throw new Bridge.ArgumentOutOfRangeException("textStart", "Start index cannot be less than 0 or greater than input length.");
        }

        this._text = text;
        this._textStart = textStart;
        this._timeoutTime = this._timeoutMs > 0 ? new Date().getTime() + Bridge.Convert.toInt32(this._timeoutMs + 0.5) : -1;

        var match = {
            capIndex: 0,       // start index of total capture
            capLength: 0,      // length of total capture
            success: false,
            value: "",
            groups: [],
            captures: []
        };

        // Get group descriptors (+ remove group name before any processing);
        var patternInfo = this.parsePattern();
        if (patternInfo.shouldFail) {
            return match;
        }

        var groupDescs = patternInfo.groups;

        this._checkTimeout();

        // The 1st run (to know the total capture):
        var total = Bridge.Text.RegularExpressions.RegexNetEngine.jsRegex(this._text, this._textStart, this._pattern, this._isMultiLine, this._isCaseInsensitive, false, this);
        if (total == null) {
            return match;
        }

        if (prevLength >= 0 && patternInfo.isContiguous && total.index !== this._textStart) {
            return match; // Contiguous requirement was not met
        }

        if (total.index !== 0 && patternInfo.mustCaptureFirstCh) {
            return match; // "\A" token requires that capture starts from the very beginning
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
            var groupMap = {}; // <Name, Group>
            var group;
            var groupDesc;
            var parentGroupDesc;
            var existingGroup;
            var parentCapture;
            var lastCapture;
            var i;
            var j;

            for (i = 1; i < total.length + nonCapturingCount; i++) {
                this._checkTimeout();

                groupDesc = groupDescs[i - 1];
                if (groupDesc.constructs.isNonCapturing) {
                    nonCapturingCount++;
                }

                group = {
                    descriptor: groupDesc,
                    capIndex: 0,
                    capLength: 0,
                    value: "",
                    valueFull: "",  //TODO: Remove?
                    success: false,
                    captures: [],
                    ctx: null
                };
                descToGroupMap[groupDesc.exprIndex] = group;

                parentGroupDesc = groupDesc.parentGroup;
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
                        for (j = 0; j < parentGroup.captures.length; j++) {
                            this._checkTimeout();

                            parentCapture = parentGroup.captures[j];
                            this._matchGroup(parentCapture.ctx, group, parentCapture.capIndex);

                            // Match the group's captures:
                            if (group.success) {
                                this._matchCaptures(group);
                            }
                        }
                    }
                }

                if (group.captures.length > 0) {
                    lastCapture = group.captures[group.captures.length - 1];
                    group.capIndex = lastCapture.capIndex;
                    group.capLength = lastCapture.capLength;
                    group.value = lastCapture.value;
                }

                if (!groupDesc.constructs.isNonCapturing) {
                    existingGroup = groupMap[groupDesc.name];

                    if (existingGroup) {
                        // Merge group results for the same named groups:
                        existingGroup.capIndex = group.capIndex;
                        existingGroup.capLength = group.capLength;
                        existingGroup.value = group.value;
                        existingGroup.success = group.success;
                        existingGroup.captures = existingGroup.captures.concat(group.captures);

                    } else {
                        // Add a new group record for the uniquely named group:
                        match.groups.push(group);
                        groupMap[groupDesc.name] = group;
                    }
                }
            }

            // Remove internal fields:
            var k;
            var gr;
            var m;

            for (k = 0; k < match.groups.length; k++) {
                gr = match.groups[k];
                delete gr.ctx;
                for (m = 0; m < gr.captures.length; m++) {
                    delete gr.captures[m].ctx;
                }
            }
        }

        return match;
    },

    parsePattern: function() {
        if (this._patternInfo == null) {
            var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
            var patternInfo = scope.parsePattern(this._pattern, this._isCaseInsensitive, this._isMultiLine, this._isSingleline, this._isIgnoreWhitespace);

            this._patternInfo = patternInfo;
            this._pattern = patternInfo.jsPattern;
        }
        return this._patternInfo;
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

                var capMatch;
                var i;

                for (i = 0; i < capMatches.length; i++) {
                    capMatch = capMatches[i];
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
            var j;
            for (j = 0; j < group.captures.length; j++) {
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