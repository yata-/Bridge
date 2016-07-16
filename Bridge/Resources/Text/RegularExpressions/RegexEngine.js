// @source Text/RegularExpressions/RegexEngine.js

Bridge.define("System.Text.RegularExpressions.RegexEngine", {
    _pattern: "",
    _patternInfo: null,

    _text: "",
    _textStart: 0,
    _timeoutMs: -1,
    _timeoutTime: -1,
    _settings: null,

    _branchType: {
        base: 0,
        offset: 1,
        lazy: 2,
        greedy: 3,
        or: 4
    },

    _branchResultKind: {
        ok: 1,
        endPass: 2,
        nextPass: 3,
        nextBranch: 4
    },


    // ============================================================================================
    // Public functions
    // ============================================================================================
    constructor: function (pattern, isCaseInsensitive, isMultiLine, isSingleline, isIgnoreWhitespace, timeoutMs) {
        if (pattern == null) {
            throw new System.ArgumentNullException("pattern");
        }

        this._pattern = pattern;
        this._timeoutMs = timeoutMs;
        this._settings = {
            ignoreCase: isCaseInsensitive,
            multiline: isMultiLine,
            singleline: isSingleline,
            ignoreWhitespace: isIgnoreWhitespace
        };

    },

    match: function (text, textStart) {
        if (text == null) {
            throw new System.ArgumentNullException("text");
        }

        if (textStart != null && (textStart < 0 || textStart > text.length)) {
            throw new System.ArgumentOutOfRangeException("textStart", "Start index cannot be less than 0 or greater than input length.");
        }

        this._text = text;
        this._textStart = textStart;
        this._timeoutTime = this._timeoutMs > 0 ? new Date().getTime() + System.Convert.toInt32(this._timeoutMs + 0.5) : -1;

        // Get group descriptors
        var patternInfo = this.parsePattern();
        if (patternInfo.shouldFail) {
            return this._getEmptyMatch();
        }

        this._checkTimeout();

        var scanRes = this._scan(text, textStart, patternInfo.tokens, false, null);
        return scanRes;
    },

    parsePattern: function () {
        if (this._patternInfo == null) {
            var parser = System.Text.RegularExpressions.RegexEngineParser;
            var patternInfo = parser.parsePattern(this._pattern, this._cloneSettings(this._settings));
            this._patternInfo = patternInfo;
        }
        return this._patternInfo;
    },


    // ============================================================================================
    // Engine main logic
    // ============================================================================================
    _scan: function (text, textPos, tokens, noOffset, desiredLen) {
        var resKind = this._branchResultKind;
        var branches = [];
        branches.grCaptureCache = {};

        var branch = null;
        var res = null;

        // Empty pattern case:
        if (tokens.length === 0) {
            var match = this._getEmptyMatch();

            if (textPos <= text.length) {
                this._fillMatch(match, text, textPos, 0);
            }

            return match;
        }

        // Init base branch:
        var baseBranchType = noOffset ? this._branchType.base : this._branchType.offset;

        var endPos = this._patternInfo.isContiguous ? textPos : text.length;
        var baseBranch = new System.Text.RegularExpressions.RegexEngineBranch(baseBranchType, textPos, textPos, endPos);
        baseBranch.pushPass(0, tokens, this._cloneSettings(this._settings));
        baseBranch.started = true;
        baseBranch.state.txtIndex = textPos;
        branches.push(baseBranch);

        while (branches.length) {
            branch = branches[branches.length - 1];

            res = this._scanBranch(text, branches, branch);
            if (res === resKind.ok && (desiredLen == null || branch.state.capLength === desiredLen)) {
                break;
            }

            //if (!this.branchLimit) {
            //    this.branchLimit = 1;
            //} else {
            //    this.branchLimit++;
            //    if (this.branchLimit > 200000) {
            //        alert("Too many branches :(");
            //        break;
            //    }
            //}

            this._advanceToNextBranch(branches, branch);
            this._checkTimeout();
        }

        return this._collectScanResults(res, branch, text, textPos);
    },

    _scanBranch: function (text, branches, branch) {
        var resKind = this._branchResultKind;
        var pass;
        var res;

        while (branch.hasPass()) {
            pass = branch.peekPass();

            if (pass.tokens == null || pass.tokens.length === 0) {
                res = resKind.endPass;

            } else {
                // Add alternation branches before scanning:
                if (this._addAlternationBranches(branches, branch, pass) === resKind.nextBranch) {
                    return resKind.nextBranch;
                }

                // Scan:
                res = this._scanPass(text, branches, branch, pass);
            }

            switch (res) {
                case resKind.nextBranch:
                    // Move to the next branch:
                    return res;

                case resKind.nextPass:
                    // switch to the recently added pass
                    continue;   

                case resKind.endPass:
                case resKind.ok:
                    // End of pass has been reached:
                    branch.popPass();
                    break;

                default:
                    throw new System.InvalidOperationException("Unexpected branch result.");
            }
        }

        return resKind.ok;
    },

    _scanPass: function (text, branches, branch, pass) {
        var resKind = this._branchResultKind;
        var passEndIndex = pass.tokens.length;
        var token;
        var probe;
        var res;



        while (pass.index < passEndIndex) {
            token = pass.tokens[pass.index];
            probe = pass.probe;

            // Add probing:
            if (probe == null) {
                if (this._addBranchBeforeProbing(branches, branch, pass, token)) {
                    return resKind.nextBranch;
                }
            } else {
                if (probe.value < probe.min || probe.forced) {
                    res = this._scanToken(text, branches, branch, pass, token);
                    if (res !== resKind.ok) {
                        return res;
                    }
                    probe.value += 1;
                    probe.forced = false;
                    continue;
                }

                this._addBranchAfterProbing(branches, branch, pass, probe);
                if (probe.forced) {
                    continue;
                }

                pass.probe = null;
                pass.index ++;
                continue;
            }

            // Process the token:
            res = this._scanToken(text, branches, branch, pass, token);

            // Process the result of the token scan:
            switch (res) {
                case resKind.nextBranch:
                case resKind.nextPass:
                case resKind.endPass:
                    return res;

                case resKind.ok:
                    // Advance to the next token within the current pass:
                    pass.index++;
                    break;

                default:
                    throw new System.InvalidOperationException("Unexpected branch-pass result.");
            }
        }

        return resKind.ok;
    },

    _addAlternationBranches: function (branches, branch, pass) {

        var tokenTypes = System.Text.RegularExpressions.RegexEngineParser.tokenTypes;
        var branchTypes = this._branchType;
        var passEndIndex = pass.tokens.length;
        var resKind = this._branchResultKind;
        var orIndexes;
        var newBranch;
        var newPass;
        var token;
        var i;

        // TODO: cache?
        // Scan potential alternations:
        if (!pass.alternationHandled && branch.type !== branchTypes.or) {
            orIndexes = [-1];
            for (i = 0; i < passEndIndex; i++) {
                token = pass.tokens[i];
                if (token.type === tokenTypes.alternation) {
                    orIndexes.push(i);
                }
            }

            if (orIndexes.length > 1) {

                for (i = 0; i < orIndexes.length; i++) {
                    newBranch = new System.Text.RegularExpressions.RegexEngineBranch(branchTypes.or, i, 0, orIndexes.length, branch.state);
                    newBranch.isNotFailing = true;
                    newPass = newBranch.peekPass();
                    newPass.alternationHandled = true;
                    newPass.index = orIndexes[i] + 1;
                    branches.splice(branches.length - i, 0, newBranch);
                }

                // The last branch must fail:
                branches[branches.length - orIndexes.length].isNotFailing = false;

                // The parent branch must be ended up immediately:
                pass.index = pass.tokens.length + 1;

                pass.alternationHandled = true;
                return resKind.nextBranch;
            }
        }

        return resKind.ok;
    },

    _addBranchBeforeProbing: function (branches, branch, pass, token) {
        // Add +, *, ? branches:
        var probe = this._tryGetTokenProbe(token);
        if (probe == null) {
            return false;
        }

        pass.probe = probe;

        var branchType = probe.isLazy ? this._branchType.lazy : this._branchType.greedy;
        var newBranch = new System.Text.RegularExpressions.RegexEngineBranch(branchType, probe.value, probe.min, probe.max, branch.state);
        branches.push(newBranch);
        return true;
    },

    _addBranchAfterProbing: function (branches, branch, pass, probe) {
        if (probe.isLazy) {
            if (probe.value + 1 <= probe.max) {
                var lazyBranch = branch.clone();
                var lazyProbe = lazyBranch.peekPass().probe;
                lazyBranch.value += 1;
                lazyProbe.forced = true;

                // add to the left from the current branch
                branches.splice(branches.length - 1, 0, lazyBranch);
                branch.isNotFailing = true;
            }
        } else {
            if (probe.value + 1 <= probe.max) {
                var greedyBranch = branch.clone();
                greedyBranch.started = true;
                greedyBranch.peekPass().probe = null;
                greedyBranch.peekPass().index++;
                branches.splice(branches.length - 1, 0, greedyBranch);

                probe.forced = true;
                branch.value += 1;
                branch.isNotFailing = true;
            }
        }
    },

    _tryGetTokenProbe: function (token) {
        var qtoken = token.qtoken;
        if (qtoken == null) {
            return null;
        }

        var tokenTypes = System.Text.RegularExpressions.RegexEngineParser.tokenTypes;
        var min;
        var max;

        if (qtoken.type === tokenTypes.quantifier) {
            switch (qtoken.value) {
                case "*":
                case "*?":
                    min = 0;
                    max = 2147483647;
                    break;

                case "+":
                case "+?":
                    min = 1;
                    max = 2147483647;
                    break;

                case "?":
                case "??":
                    min = 0;
                    max = 1;
                    break;

                default:
                    throw new System.InvalidOperationException("Unexpected quantifier value.");
            }
        } else if (qtoken.type === tokenTypes.quantifierN) {
            min = qtoken.data.n;
            max = qtoken.data.n;
        } else if (qtoken.type === tokenTypes.quantifierNM) {
            min = qtoken.data.n;
            max = qtoken.data.m != null ? qtoken.data.m : 2147483647;
        } else {
            return null;
        }

        var probe = new System.Text.RegularExpressions.RegexEngineProbe(min, max, 0, qtoken.data.isLazy);
        return probe;
    },

    _advanceToNextBranch: function (branches, branch) {
        if (branches.length === 0) {
            return;
        }

        var lastBranch = branches[branches.length - 1];
        if (!lastBranch.started) {
            lastBranch.started = true;
            return;
        }

        if (branch !== lastBranch) {
            throw new System.InvalidOperationException("Current branch is supposed to be the last one.");
        }


        if (branches.length === 1 && branch.type === this._branchType.offset) {
            branch.value++;
            branch.state.txtIndex = branch.value;

            // clear state:
            branch.state.capIndex = null;
            branch.state.capLength = 0;
            branch.state.groups.length = 0;
            branch.state.passes.length = 1;
            branch.state.passes[0].clearState(this._cloneSettings(this._settings));

            if (branch.value > branch.max) {
                branches.pop();
            }

        } else {
            branches.pop();

            if (!branch.isNotFailing) {
                lastBranch = branches[branches.length - 1];
                this._advanceToNextBranch(branches, lastBranch);
                return;
            }
        }
    },

    _collectScanResults: function (scanRes, branch, text, textPos) {
        var resKind = this._branchResultKind;
        var capGroups = branch.state.groups;
        var groupDescs = this._patternInfo.groups;
        var processedGroupNames = {};
        var capGroup;
        var groupsMap = {};
        var groupDesc;
        var capture;
        var group;
        var i;

        // Create Empty match object:
        var match = this._getEmptyMatch();

        if (scanRes === resKind.ok) {
            // For successful match fill Match object:
            this._fillMatch(match, text, branch.state.capIndex, branch.state.capLength, textPos);

            // Fill group captures:
            for (i = 0; i < capGroups.length; i++) {
                capGroup = capGroups[i];
                groupDesc = groupDescs[capGroup.rawIndex - 1];
                if (groupDesc.constructs.isNonCapturing) {
                    continue;
                }

                capture = {
                    capIndex: capGroup.capIndex,
                    capLength: capGroup.capLength,
                    value: text.slice(capGroup.capIndex, capGroup.capIndex + capGroup.capLength)
                };

                group = groupsMap[groupDesc.name];
                if (group == null) {
                    group = {
                        capIndex: 0,
                        capLength: 0,
                        value: "",
                        success: false,
                        captures: [capture]
                    };

                    groupsMap[groupDesc.name] = group;
                } else {
                    group.captures.push(capture);
                }
            }

            // Add groups to Match in the required order:
            for (i = 0; i < groupDescs.length; i++) {
                groupDesc = groupDescs[i];
                if (groupDesc.constructs.isNonCapturing) {
                    continue;
                }

                if (processedGroupNames[groupDesc.name] === true) {
                    continue;
                }

                group = groupsMap[groupDesc.name];
                if (group == null) {
                    group = {
                        capIndex: 0,
                        capLength: 0,
                        value: "",
                        success: false,
                        captures: []
                    };
                } else {
                    // Update group values with the last capture info:
                    if (group.captures.length > 0) {
                        capture = group.captures[group.captures.length - 1];

                        group.capIndex = capture.capIndex;
                        group.capLength = capture.capLength;
                        group.value = capture.value;
                        group.success = true;
                    }
                }

                processedGroupNames[groupDesc.name] = true;
                group.descriptor = groupDesc; // TODO: check if we can get rid of this
                match.groups.push(group);
            }
        }

        return match;
    },


    // ============================================================================================
    // Token processing
    // ============================================================================================
    _scanToken: function (text, branches, branch, pass, token) {
        var tokenTypes = System.Text.RegularExpressions.RegexEngineParser.tokenTypes;
        var resKind = this._branchResultKind;

        switch (token.type) {
            case tokenTypes.group:
            case tokenTypes.groupImnsx:
                return this._scanGroupToken(text, branches, branch, pass, token);

            case tokenTypes.groupImnsxMisc:
                return this._scanGroupImnsxToken(text, branches, branch, pass, token);

            case tokenTypes.charGroup:
                return this._scanCharGroupToken(text, branches, branch, pass, token);

            case tokenTypes.escChar:
            case tokenTypes.escCharOctal:
            case tokenTypes.escCharHex:
            case tokenTypes.escCharCtrl:
            case tokenTypes.escCharUnicode:
            case tokenTypes.escCharOther:
            case tokenTypes.escCharClass:
            case tokenTypes.escCharClassCategory:
            case tokenTypes.escCharClassBlock:
                return this._scanEscapeToken(text, branches, branch, pass, token);

            case tokenTypes.escCharClassDot:
                return this._scanDotToken(text, branches, branch, pass);

            case tokenTypes.escBackrefNumber:
                return this._scanBackrefNumberToken(text, branches, branch, pass, token);

            case tokenTypes.escBackrefName:
                return this._scanBackrefNameToken(text, branches, branch, pass, token);


            case tokenTypes.anchor:
            case tokenTypes.escAnchor:
                return this._scanAnchorToken(text, branches, branch, pass, token);

            case tokenTypes.groupConstruct:
            case tokenTypes.groupConstructName:
            case tokenTypes.groupConstructImnsx:
            case tokenTypes.groupConstructImnsxMisc:
                return resKind.ok;

            case tokenTypes.alternation:
                return resKind.endPass;

            case tokenTypes.commentInline:
            case tokenTypes.commentXMode:
                return resKind.ok;

            default:
                return this._scanLiteral(text, branches, branch, pass, token.value);
        }
    },

    _scanGroupToken: function (text, branches, branch, pass, token) {
        var tokenTypes = System.Text.RegularExpressions.RegexEngineParser.tokenTypes;
        var resKind = this._branchResultKind;
        var textIndex = branch.state.txtIndex;

        if (pass.onHold) {

            if (token.type === tokenTypes.group) {

                var rawIndex = token.group.rawIndex;
                var capIndex = pass.onHoldTextIndex;
                var capLength = textIndex - capIndex;

                // TODO: Check this cache? 
                var tokenCache = branches.grCaptureCache[rawIndex];
                if (tokenCache == null) {
                    tokenCache = {};
                    branches.grCaptureCache[rawIndex] = tokenCache;
                }

                var key = capIndex.toString() + "_" + capLength.toString();
                if (tokenCache[key] == null) {
                    tokenCache[key] = true;
                } else {
                    return resKind.nextBranch;
                }

                branch.state.logCaptureGroup(text, token.group, capIndex, capLength);
            }

            pass.onHold = false;
            pass.onHoldTextIndex = -1;
            return resKind.ok;
        }

        this._scanGroupImnsxToken(text, branches, branch, pass, token);

        var scanLookRes = this._scanLook(text, textIndex, token);
        if (scanLookRes != null) {
            return scanLookRes;
        }

        pass.onHoldTextIndex = textIndex;
        pass.onHold = true;

        var settingsClone =
        {
            ignoreCase: pass.settings.ignoreCase,
            multiline: pass.settings.multiline,
            singleline: pass.settings.singleline,
            ignoreWhitespace: pass.settings.ignoreWhitespace
        };

        branch.pushPass(0, token.children, settingsClone);
        return resKind.nextPass;
    },

    _scanGroupImnsxToken: function (text, branches, branch, pass, token) {
        var resKind = this._branchResultKind;
        var constructs = token.group.constructs;

        if (constructs.isIgnoreCase != null) {
            pass.settings.ignoreCase = constructs.isIgnoreCase;
        }

        if (constructs.isMultiline != null) {
            pass.settings.multiline = constructs.isMultiline;
        }

        if (constructs.isSingleLine != null) {
            pass.settings.singleline = constructs.isSingleLine;
        }

        if (constructs.isIgnoreWhitespace != null) {
            pass.settings.ignoreWhitespace = constructs.isIgnoreWhitespace;
        }

        return resKind.ok;
    },

    _scanLook: function (text, textIndex, token) {
        var constructs = token.group.constructs;
        var resKind = this._branchResultKind;
        var children = token.children;
        var expectedRes;
        var actualRes;

        var isLookahead = constructs.isPositiveLookahead || constructs.isNegativeLookahead;
        var isLookbehind = constructs.isPositiveLookbehind || constructs.isNegativeLookbehind;


        if (isLookahead || isLookbehind) {
            children = children.slice(1, children.length); // remove constructs

            expectedRes = constructs.isPositiveLookahead || constructs.isPositiveLookbehind;
            if (isLookahead) {
                actualRes = this._scanLookAhead(text, textIndex, children);
            } else {
                actualRes = this._scanLookBehind(text, textIndex, children);
            }

            if (expectedRes === actualRes) {
                return resKind.ok;
            } else {
                return resKind.nextBranch;
            }
        }


        return null;
    },

    _scanLookAhead: function (text, textPos, tokens) {
        var res = this._scan(text, textPos, tokens, true);

        //TODO: combine group results somehow
        return res;
    },

    _scanLookBehind: function (text, textPos, tokens) {

        var index = textPos;
        var strLen;
        var str;
        var res;

        while (index >= 0) {
            str = text.slice(index, textPos); //TODO: [PERFORMANCE] use endIndex instead of slice
            strLen = textPos - index;

            res = this._scan(str, 0, tokens, true, strLen);
            if (res) {
                //TODO: combine group results somehow
                return res;
            }

            --index;
        }

        return false;
    },

    _scanLiteral: function (text, branches, branch, pass, literal) {
        var resKind = this._branchResultKind;
        var index = branch.state.txtIndex;

        if (index + literal.length > text.length) {
            return resKind.nextBranch;
        }

        var i;
        if (pass.settings.ignoreCase) {
            for (i = 0; i < literal.length; i++) {
                if (text[index + i].toLowerCase() !== literal[i].toLowerCase()) {
                    return resKind.nextBranch;
                }
            }

        } else {
            for (i = 0; i < literal.length; i++) {
                if (text[index + i] !== literal[i]) {
                    return resKind.nextBranch;
                }
            }
        }

        branch.state.logCapture(literal.length);
        return resKind.ok;
    },

    _scanWithJsRegex: function(text, branches, branch, pass, token) {
        var resKind = this._branchResultKind;
        var index = branch.state.txtIndex;
        var ch = text[index];
        if (ch == null) {
            ch = "";
        }

        var options = pass.settings.ignoreCase ? "i" : "";

        var rgx = token.rgx;
        if (rgx == null) {
            rgx = new RegExp(token.value, options);
            token.rgx = rgx;
        }

        if (rgx.test(ch)) {
            branch.state.logCapture(ch.length);
            return resKind.ok;
        }

        return resKind.nextBranch;
    },

    _scanWithJsRegex2: function(text, textIndex, pattern) {
        var resKind = this._branchResultKind;
        var ch = text[textIndex];
        if (ch == null) {
            ch = "";
        }

        var rgx = new RegExp(pattern, "");
        if (rgx.test(ch)) {
            return resKind.ok;
        }

        return resKind.nextBranch;
    },

    _scanCharGroupToken: function (text, branches, branch, pass, token) {
        return this._scanWithJsRegex(text, branches, branch, pass, token);
    },

    _scanEscapeToken: function (text, branches, branch, pass, token) {
        return this._scanWithJsRegex(text, branches, branch, pass, token);
    },

    _scanDotToken: function (text, branches, branch, pass) {
        var resKind = this._branchResultKind;
        var index = branch.state.txtIndex;

        if (pass.settings.singleline) {
            if (index < text.length) {
                branch.state.logCapture(1);
                return resKind.ok;
            }
        } else {
            if (index < text.length && text[index] !== "\n") {
                branch.state.logCapture(1);
                return resKind.ok;
            }
        }

        return resKind.nextBranch;
    },

    _scanBackrefNumberToken: function (text, branches, branch, pass, token) {
        var resKind = this._branchResultKind;

        var grCapture = branch.state.resolveBackref(token.data.number);
        if (grCapture == null) {
            return resKind.nextBranch;
        }

        var grCaptureTxt = text.slice(grCapture.capIndex, grCapture.capIndex + grCapture.capLength);
        return this._scanLiteral(text, branches, branch, pass, grCaptureTxt);
    },

    _scanBackrefNameToken: function (text, branches, branch, pass, token) {
        var resKind = this._branchResultKind;

        var group = this._patternInfo.sparseSettings.getSingleGroupByName(token.data.name);
        if (group == null) {
            throw new System.ArgumentException("Reference to undefined group name '" + value + "'.");
        }

        var grCapture = branch.state.resolveBackref(group.rawIndex);
        if (grCapture == null) {
            return resKind.nextBranch;
        }

        var grCaptureTxt = text.slice(grCapture.capIndex, grCapture.capIndex + grCapture.capLength);
        return this._scanLiteral(text, branches, branch, pass, grCaptureTxt);
    },

    _scanAnchorToken: function (text, branches, branch, pass, token) {
        var resKind = this._branchResultKind;
        var index = branch.state.txtIndex;

        if (token.value === "\\b" || token.value === "\\B") {
            var prevIsWord = index > 0 && this._scanWithJsRegex2(text, index - 1, "\\w") === resKind.ok;
            var currIsWord = this._scanWithJsRegex2(text, index, "\\w") === resKind.ok;
            if ((prevIsWord === currIsWord) === (token.value === "\\B")) {
                return resKind.ok;
            }
        } else if (token.value === "^") {
            if (index === 0) {
                return resKind.ok;
            }
            if (pass.settings.multiline && text[index-1] === "\n") {
                return resKind.ok;
            }
        } else if (token.value === "$") {
            if (index === text.length) {
                return resKind.ok;
            }
            if (pass.settings.multiline && text[index] === "\n") {
                return resKind.ok;
            }
        } else if (token.value === "\\A") {
            if (index === 0) {
                return resKind.ok;
            }
        } else if (token.value === "\\z") {
            if (index === text.length) {
                return resKind.ok;
            }
        } else if (token.value === "\\Z") {
            if (index === text.length) {
                return resKind.ok;
            }
            if (index === text.length - 1 && text[index] === "\n") {
                return resKind.ok;
            }
        } else if (token.value === "\\G") {
            return resKind.ok;
        }

        return resKind.nextBranch;
    },


    // ============================================================================================
    // Auxiliary functions
    // ============================================================================================
    _cloneSettings: function (settings) {
        var cloned = {
            ignoreCase: settings.ignoreCase,
            multiline: settings.multiline,
            singleline: settings.singleline,
            ignoreWhitespace: settings.ignoreWhitespace
        };
        return cloned;
    },

    _getEmptyMatch: function () {
        var match = {
            capIndex: 0,    // start index of total capture
            capLength: 0,   // length of total capture
            success: false,
            value: "",
            groups: [],
            captures: []
        };

        return match;
    },

    _fillMatch: function (match, text, capIndex, capLength, textPos) {
        if (capIndex == null) {
            capIndex = textPos;
        }

        match.capIndex = capIndex;
        match.capLength = capLength;
        match.success = true;
        match.value = text.slice(capIndex, capIndex + capLength);

        match.groups.push({
            capIndex: capIndex,
            capLength: capLength,
            value: match.value,
            success: true,
            captures: [
                {
                    capIndex: capIndex,
                    capLength: capLength,
                    value: match.value
                }
            ]
        });

        match.captures.push(match.groups[0].captures[0]);
    },

    _checkTimeout: function () {
        if (this._timeoutTime < 0) {
            return;
        }

        var time = new Date().getTime();

        if (time >= this._timeoutTime) {
            throw new System.RegexMatchTimeoutException(this._text, this._pattern, System.TimeSpan.fromMilliseconds(this._timeoutMs));
        }
    }
});