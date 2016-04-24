// @source Text/RegularExpressions/RegexNetEngineParser.js

Bridge.define("Bridge.Text.RegularExpressions.RegexNetEngineParser", {
    statics: {
        _hexSymbols: "0123456789abcdefABCDEF",
        _octSymbols: "01234567",
        _decSymbols: "0123456789",

        _escapedChars: "abtrvfnexcu",
        _escapedCharClasses: "pPwWsSdD",
        _escapedAnchors: "AZzGbB",
        _escapedSpecialSymbols: ".$^{}[]()|*+?\\ ",

        _whiteSpaceChars: " \r\n\t\v\f\u00A0\uFEFF",    //TODO: This is short version of .NET WhiteSpace category.
        _unicodeCategories: ["Lu", "Ll", "Lt", "Lm", "Lo", "L", "Mn", "Mc", "Me", "M", "Nd", "Nl", "No", "N", "Pc", "Pd", "Ps", "Pe", "Pi", "Pf", "Po", "P", "Sm", "Sc", "Sk", "So", "S", "Zs", "Zl", "Zp", "Z", "Cc", "Cf", "Cs", "Co", "Cn", "C"],
        _namedCharBlocks: ["IsBasicLatin", "IsLatin-1Supplement", "IsLatinExtended-A", "IsLatinExtended-B", "IsIPAExtensions", "IsSpacingModifierLetters", "IsCombiningDiacriticalMarks", "IsGreek", "IsGreekandCoptic", "IsCyrillic", "IsCyrillicSupplement", "IsArmenian", "IsHebrew", "IsArabic", "IsSyriac", "IsThaana", "IsDevanagari", "IsBengali", "IsGurmukhi", "IsGujarati", "IsOriya", "IsTamil", "IsTelugu", "IsKannada", "IsMalayalam", "IsSinhala", "IsThai", "IsLao", "IsTibetan", "IsMyanmar", "IsGeorgian", "IsHangulJamo", "IsEthiopic", "IsCherokee", "IsUnifiedCanadianAboriginalSyllabics", "IsOgham", "IsRunic", "IsTagalog", "IsHanunoo", "IsBuhid", "IsTagbanwa", "IsKhmer", "IsMongolian", "IsLimbu", "IsTaiLe", "IsKhmerSymbols", "IsPhoneticExtensions", "IsLatinExtendedAdditional", "IsGreekExtended", "IsGeneralPunctuation", "IsSuperscriptsandSubscripts", "IsCurrencySymbols", "IsCombiningDiacriticalMarksforSymbols", "IsCombiningMarksforSymbols", "IsLetterlikeSymbols", "IsNumberForms", "IsArrows", "IsMathematicalOperators", "IsMiscellaneousTechnical", "IsControlPictures", "IsOpticalCharacterRecognition", "IsEnclosedAlphanumerics", "IsBoxDrawing", "IsBlockElements", "IsGeometricShapes", "IsMiscellaneousSymbols", "IsDingbats", "IsMiscellaneousMathematicalSymbols-A", "IsSupplementalArrows-A", "IsBraillePatterns", "IsSupplementalArrows-B", "IsMiscellaneousMathematicalSymbols-B", "IsSupplementalMathematicalOperators", "IsMiscellaneousSymbolsandArrows", "IsCJKRadicalsSupplement", "IsKangxiRadicals", "IsIdeographicDescriptionCharacters", "IsCJKSymbolsandPunctuation", "IsHiragana", "IsKatakana", "IsBopomofo", "IsHangulCompatibilityJamo", "IsKanbun", "IsBopomofoExtended", "IsKatakanaPhoneticExtensions", "IsEnclosedCJKLettersandMonths", "IsCJKCompatibility", "IsCJKUnifiedIdeographsExtensionA", "IsYijingHexagramSymbols", "IsCJKUnifiedIdeographs", "IsYiSyllables", "IsYiRadicals", "IsHangulSyllables", "IsHighSurrogates", "IsHighPrivateUseSurrogates", "IsLowSurrogates", "IsPrivateUse or IsPrivateUseArea", "IsCJKCompatibilityIdeographs", "IsAlphabeticPresentationForms", "IsArabicPresentationForms-A", "IsVariationSelectors", "IsCombiningHalfMarks", "IsCJKCompatibilityForms", "IsSmallFormVariants", "IsArabicPresentationForms-B", "IsHalfwidthandFullwidthForms", "IsSpecials"],

        tokenTypes: {
            literal: 0,

            escChar: 110,
            escCharOctal: 111,
            escCharHex: 112,
            escCharCtrl: 113,
            escCharUnicode: 114,
            escCharOther: 115,

            escCharClass: 120,
            escCharClassCategory: 121,
            escCharClassBlock: 122,

            escAnchor: 130,

            escBackrefNumber: 140,
            escBackrefName: 141,

            charGroup: 200,

            anchor: 300,

            group: 400,
            groupConstruct: 401,
            groupConstructName: 402,
            groupConstructImnsx: 403,

            quantifier: 500,
            quantifierN: 501,
            quantifierNM: 502,

            alternation: 600,
            alternationGroup: 601,
            alternationGroupExpr: 602,

            commentInline: 700,
            commentXMode: 701
        },

        parsePattern: function (pattern, isIgnoreWhitespaceMode) {
            var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
            var settings = {
                ignoreWhitespace: isIgnoreWhitespaceMode
            };

            // Parse tokens in the original pattern:
            var tokens = scope._parsePatternImpl(pattern, settings, 0, pattern.length);

            // Collect and fill group descriptors into Group tokens.
            // We need do it before any token modification.
            var groups = [];
            var orderedGroups = [];
            var sparseMap = {};
            var sparseSettings = { isSparse: false };
            scope._fillGroupDescriptors(tokens, groups, orderedGroups, sparseMap, sparseSettings);

            // Transform tokens for usage in JS RegExp:
            scope._preTransformBackrefTokens(pattern, tokens, sparseMap);
            scope._transformTokensForJsPattern(tokens, orderedGroups, sparseMap, 0);

            // Update group descriptors as tokens have been transformed (at least indexes were changed):
            scope._updateGroupDescriptors(tokens);

            // Create pattern supported by JS RegExp:
            var jsPattern = scope._constructPattern(tokens);

            var result = {
                originalPattern: pattern,
                jsPattern: jsPattern,
                groups: groups,
                orderedGroups: orderedGroups,
                isSparse: false
            };

            if (sparseSettings.isSparse) {
                result.isSparse = true;
                result.sparseMap = sparseMap;
            }

            return result;
        },

        _fillGroupDescriptors: function (tokens, groups, orderedGroups, sparseIndexMap, sparseSettings) {
            var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
            var group;
            var groupNumber;
            var i;

            // Fill group structure:
            scope._fillGroupStructure(groups, tokens, null);

            // Assign name or id:
            var groupId = 1;
            for (i = 0; i < groups.length; i++) {
                group = groups[i];

                if (group.constructs.name1 != null) {
                    group.name = group.constructs.name1;
                    group.hasName = true;
                } else {
                    group.hasName = false;
                    group.name = groupId.toString();
                    ++groupId;
                }
            }

            var sparseKeys = [];
            var sparseMap = {};
            for (i = 0; i < groups.length; i++) {
                group = groups[i];
                if (group.constructs.isNumberName1) {
                    groupNumber = parseInt(group.constructs.name1);
                    group.number = groupNumber;
                    sparseMap[groupNumber] = group;
                    sparseKeys.push(groupNumber);
                }
            }
            var sortNum = function (a, b) {
                return a - b;
            };
            sparseKeys.sort(sortNum);

            // Add group without names first:
            for (i = 0; i < groups.length; i++) {
                group = groups[i];
                groupNumber = orderedGroups.length + 1;

                if (!group.hasName && !group.constructs.isNonCapturing && !group.constructs.isNumberName1) {

                    if (sparseMap[groupNumber] != null) {
                        sparseMap[groupNumber] = null;
                    }

                    group.number = groupNumber;
                    orderedGroups.push(group);
                }
            }

            // Then add named groups:
            for (i = 0; i < groups.length; i++) {
                group = groups[i];
                groupNumber = orderedGroups.length + 1;
                
                if (sparseMap[groupNumber] != null) {
                    orderedGroups.push(sparseMap[groupNumber]);
                    sparseMap[groupNumber] = null;
                    continue;
                }

                if (group.hasName && !group.constructs.isNumberName1) {
                    group.number = groupNumber;
                    orderedGroups.push(group);
                }
            }

            // Then add sparse groups:
            var sparseKey;
            for (i = 0; i < sparseKeys.length; i++) {
                sparseKey = sparseKeys[i];
                group = sparseMap[sparseKey];
                if (group != null) {
                    orderedGroups.push(group);
                }
            }

            if (sparseKeys.length > 0) {
                sparseSettings.isSparse = true;
            }

            sparseIndexMap[0] = 0;
            for (i = 0; i < orderedGroups.length; i++) {
                group = orderedGroups[i];
                sparseIndexMap[group.number] = i + 1;
            }
        },

        _fillGroupStructure: function (groups, tokens, parentGroup) {
            var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
            var tokenTypes = scope.tokenTypes;
            var group;
            var token;
            var constructCandidateToken;
            var hasChildren;
            var i;

            for (i = 0; i < tokens.length; i++) {
                token = tokens[i];
                hasChildren = token.children && token.children.length;

                if (token.type === tokenTypes.group) {
                    group = {
                        rawIndex: groups.length + 1,
                        number: -1,
    
                        parentGroup: null,
                        innerGroups: [],

                        name: null,
                        hasName: false,

                        constructs: null,
                        quantifier: null,

                        exprIndex: -1,
                        exprLength: 0,
                        expr: null,
                        exprFull: null
                    };

                    token.group = group;
                    groups.push(group);

                    if (parentGroup != null) {
                        token.group.parentGroup = parentGroup;
                        parentGroup.innerGroups.push(group);
                    }

                    // fill group constructs:
                    constructCandidateToken = hasChildren ? token.children[0] : null;
                    group.constructs = scope._fillGroupConstructs(constructCandidateToken);
                }

                // fill group descriptors for inner tokens:
                if (hasChildren) {
                    scope._fillGroupStructure(groups, token.children, token.group);
                }
            }
        },

        _fillGroupConstructs: function (childToken) {
            var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
            var tokenTypes = scope.tokenTypes;
            var constructs = {
                name1: null,
                name2: null,
                
                isNumberName1: false,
                isNumberName2: false,

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

                isNonbacktracking: false
            };

            if (childToken == null) {
                return constructs;
            }

            if (childToken.type === tokenTypes.groupConstruct) {
                // ?:
                // ?=
                // ?!
                // ?<=
                // ?<!
                // ?>

                switch (childToken.value) {
                    case "?:":
                        constructs.isNonCapturing = true;
                        break;

                    case "?=":
                        constructs.isPositiveLookahead = true;
                        break;

                    case "?!":
                        constructs.isNegativeLookahead = true;
                        break;

                    case "?>":
                        constructs.isNonbacktracking = true;
                        break;

                    case "?<=":
                        constructs.isPositiveLookbehind = true;
                        break;

                    case "?<!":
                        constructs.isNegativeLookbehind = true;
                        break;

                    default:
                        throw new Bridge.ArgumentException("Unrecognized grouping construct.");
                }

            } else if (childToken.type === tokenTypes.groupConstructName) {
                // ?<name1>
                // ?'name1'
                // ?<name1-name2>
                // ?'name1-name2'

                var nameExpr = childToken.value.slice(2, childToken.length - 1);
                var groupNames = nameExpr.split("-");
                if (groupNames.length === 0 || groupNames.length > 2) {
                    throw new Bridge.ArgumentException("Invalid group name.");
                }

                constructs.name1 = groupNames[0];
                var nameRes1 = scope._validateGroupName(groupNames[0]);
                if (nameRes1.isNumberName) {
                    constructs.isNumberName1 = true;
                }
                
                
                if (groupNames.length === 2) {
                    constructs.name2 = groupNames[1];
                    var nameRes2 = scope._validateGroupName(groupNames[1]);
                    if (nameRes2.isNumberName) {
                        constructs.isNumberName2 = true;
                    }
                }

            } else if (childToken.type === tokenTypes.groupConstructImnsx) {
                // ?imnsx-imnsx

                var imnsxExprLen = childToken.length - 2;
                var imnsxVal = true;
                var ch;
                var i;

                for (i = 1; i < imnsxExprLen; i++) {
                    ch = childToken.value[i];

                    if (ch === "-") {
                        imnsxVal = false;
                    } else if (ch === "i") {
                        constructs.isIgnoreCase = imnsxVal;
                    } else if (ch === "m") {
                        constructs.isMultiline = imnsxVal;
                    } else if (ch === "n") {
                        constructs.isExplicitCapture = imnsxVal;
                    } else if (ch === "s") {
                        constructs.isSingleLine = imnsxVal;
                    } else if (ch === "x") {
                        constructs.isIgnoreWhitespace = imnsxVal;
                    }
                }
            }

            return constructs;
        },

        _validateGroupName: function(name) {
            if (!name || !name.length) {
                throw new Bridge.ArgumentException("Invalid group name: Group names must begin with a word character.");
            }

            var isDigit = name[0] >= "0" && name[0] <= "9";
            if (isDigit) {
                var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
                var res = scope._matchChars(name, 0, name.length, scope._decSymbols);
                if (res.matchLength !== name.length) {
                    throw new Bridge.ArgumentException("Invalid group name: Group names must begin with a word character.");
                }
            }

            return {
                isNumberName: isDigit
            };
        },

        _preTransformBackrefTokens: function (pattern, tokens, sparseMap) {
            var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
            var tokenTypes = scope.tokenTypes;

            var groupNumberStr;
            var groupNumber;
            var octalCharToken;
            var extraLength;
            var literalToken;
            var token;
            var i;

            for (i = 0; i < tokens.length; i++) {
                token = tokens[i];
                if (token.type === tokenTypes.escBackrefNumber) {
                    groupNumberStr = token.value.slice(1);
                    groupNumber = parseInt(groupNumberStr, 10);

                    if (groupNumber >= 1 && sparseMap[groupNumber] != null) {
                        // Expressions from \10 and greater are considered backreferences 
                        // if there is a backreference corresponding to that number; 
                        // otherwise, they are interpreted as octal codes.
                        continue; // validated
                    }

                    if (groupNumberStr.length === 1) {
                        // The expressions \1 through \9 are always interpreted as backreferences, and not as octal codes.
                        throw new Bridge.ArgumentException("Reference to undefined group number " + groupNumberStr + ".");
                    }

                    // Otherwise, transform the token to OctalNumber:
                    octalCharToken = scope._parseOctalCharToken(token.value, 0, token.length);
                    if (octalCharToken == null) {
                        throw new Bridge.ArgumentException("Unrecognized escape sequence " + token.value.slice(0, 2) + ".");
                    }

                    extraLength = token.length - octalCharToken.length;
                    scope._modifyPatternToken(token, pattern, tokenTypes.escCharOctal, null, octalCharToken.length);

                    if (extraLength > 0) {
                        literalToken = scope._createPatternToken(pattern, tokenTypes.literal, token.index + token.length, extraLength);
                        tokens.splice(i + 1, 0, literalToken);
                    }
                }

                if (token.children && token.children.length) {
                    scope._preTransformBackrefTokens(pattern, token.children, sparseMap);
                }
            }
        },

        _transformTokensForJsPattern: function (tokens, orderedGroups, sparseMap, parentIndex) {
            var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
            var tokenTypes = scope.tokenTypes;
            var childUpdated;
            var updated = false;
            var token;
            var value;
            var group;
            var groupNumber;
            var matchRes;
            var childrenValue;
            var childrenIndex;
            var i;
            var j;

            // Transform/adjust tokens collection to work with JS RegExp:
            var index = parentIndex || 0;
            for (i = 0; i < tokens.length; i++) {
                token = tokens[i];
                token.index = index;

                if (token.type === tokenTypes.groupConstructName) {

                    tokens.splice(i, 1);
                    updated = true;
                    --i;
                    continue;

                } else if (token.type === tokenTypes.escBackrefNumber) {

                    value = token.value.slice(1);
                    groupNumber = parseInt(value, 10);
                    if (sparseMap[groupNumber] == null) {
                        throw new Bridge.ArgumentException("Reference to undefined group number " + value + ".");
                    }

                    // Replace the group number with RawIndex as JavaScript does not change the ordering
                    group = orderedGroups[sparseMap[groupNumber] - 1];
                    if (group.rawIndex !== groupNumber) {
                        value = "\\" + group.rawIndex.toString();
                        scope._updatePatternToken(token, token.type, token.index, value.length, value);
                        updated = true;
                    }

                } else if (token.type === tokenTypes.escBackrefName) {

                    value = token.value.slice(3, token.length-1);
                    group = null;
                    for (j = 0; j < orderedGroups.length; j++) {
                        if (orderedGroups[j].name === value) {
                            group = orderedGroups[j];
                            break;
                        }
                    }

                    if (group == null) {
                        // If the name is number, treat the backreference as a numbered:
                        matchRes = scope._matchChars(value, 0, value.length, scope._decSymbols);
                        if (matchRes.matchLength === value.length) {
                            value = "\\" + value;
                            scope._updatePatternToken(token, tokenTypes.escBackrefNumber, token.index, value.length, value);
                            updated = true;
                            --i; // process the token again
                            continue;
                        }
                        throw new Bridge.ArgumentException("Reference to undefined group name " + value + ".");
                    }

                    // Replace the group number with RawIndex as JavaScript does not change the ordering
                    value = "\\" + group.rawIndex.toString();
                    scope._updatePatternToken(token, tokenTypes.escBackrefNumber, token.index, value.length, value);
                    updated = true;
                }

                // Update children token and indexes:
                if (token.children && token.children.length) {
                    childrenIndex = token.childrenPostfix.length;
                    childUpdated = scope._transformTokensForJsPattern(token.children, orderedGroups, sparseMap, index + childrenIndex);

                    // Update parent value if children have been changed:
                    if (childUpdated) {
                        childrenValue = scope._constructPattern(token.children);
                        token.value = token.childrenPrefix + childrenValue + token.childrenPostfix;
                        token.length = token.value.length;
                        updated = true;
                    }
                }

                index += token.length;
            }

            return updated;
        },

        _updateGroupDescriptors: function(tokens) {
            var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
            var tokenTypes = scope.tokenTypes;
            var group;
            var token;
            var quantCandidateToken;
            var i;

            for (i = 0; i < tokens.length; i++) {
                token = tokens[i];

                if (token.type === tokenTypes.group) {
                    group = token.group;
                    group.exprIndex = token.index;
                    group.exprLength = token.length;

                    if (i + 1 < tokens.length) {
                        quantCandidateToken = tokens[i + 1];
                        if (quantCandidateToken.type === tokenTypes.quantifier ||
                            quantCandidateToken.type === tokenTypes.quantifierN ||
                            quantCandidateToken.type === tokenTypes.quantifierNM) {

                            group.quantifier = quantCandidateToken.value;
                        }
                    }

                    group.expr = token.value;
                    group.exprFull = group.expr + (group.quantifier != null ? group.quantifier : "");

                    // Remove unnecessary fields:
                    delete token.group;
                }

                if (token.children && token.children.length) {
                    scope._updateGroupDescriptors(token.children);
                }
            }
        },

        _constructPattern: function(tokens) {
            var pattern = "";
            var token;
            var i;

            for (i = 0; i < tokens.length; i++) {
                token = tokens[i];
                pattern += token.value;
            }

            return pattern;
        },

        _parsePatternImpl: function (pattern, settings, startIndex, endIndex) {
            if (pattern == null) {
                throw new Bridge.ArgumentNullException("pattern");
            }
            if (startIndex < 0 || startIndex > pattern.length) {
                throw new Bridge.ArgumentOutOfRangeException("startIndex");
            }
            if (endIndex < startIndex || endIndex > pattern.length) {
                throw new Bridge.ArgumentOutOfRangeException("endIndex");
            }

            var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
            var tokenTypes = scope.tokenTypes;
            var tokens = [];
            var prevToken = null;
            var token;
            var ch;
            var i;

            i = startIndex;
            while (i < endIndex) {
                ch = pattern[i];

                // Ignore whitespaces (if it was requested):
                if (settings.ignoreWhitespace && scope._whiteSpaceChars.indexOf(ch) >= 0) {
                    continue; 
                }

                if (ch === "\\") {
                    token = scope._parseEscapeToken(pattern, i, endIndex);
                } else if (ch === "[") {
                    token = scope._parseCharRangeToken(pattern, i, endIndex);
                } else if (ch === "^" || ch === "$") {
                    token = scope._parseAnchorToken(pattern, i);
                } else if (ch === "(") {
                    token = scope._parseGroupToken(pattern, settings, i, endIndex);
                } else if (ch === "|") {
                    token = scope._parseAlternationToken(pattern, i);
                } else if (ch === "#" && settings.ignoreWhitespace) {
                    token = scope._parseXModeCommentToken(pattern, i, endIndex);
                } else {
                    token = scope._parseQuantifierToken(pattern, i, endIndex);
                }

                if (token == null) {
                    if (prevToken != null && prevToken.type === tokenTypes.literal) {
                        prevToken.value += ch;
                        prevToken.length++;
                        i++;
                        continue;
                    }

                    token = scope._createPatternToken(pattern, tokenTypes.literal, i, 1);
                }

                if (token != null) {
                    tokens.push(token);
                    prevToken = token;
                    i += token.length;
                }
            }

            return tokens;
        },

        _parseEscapeToken: function (pattern, i, endIndex) {
            var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
            var tokenTypes = scope.tokenTypes;

            var ch = pattern[i];
            if (ch !== "\\") {
                return null;
            }
            if (i + 1 >= endIndex) {
                throw new Bridge.ArgumentException("Illegal \\ at end of pattern.");
            }

            ch = pattern[i + 1];

            // Parse a sequence for a numbered reference ("Backreference Constructs")
            if (ch >= "1" && ch <= "9") {
                // check if the number is a group backreference
                var groupDigits = scope._matchChars(pattern, i + 1, endIndex, scope._decSymbols, 3); // assume: there are not more than 999 groups
                return scope._createPatternToken(pattern, tokenTypes.escBackrefNumber, i, 1 + groupDigits.matchLength); // "\nnn"
            }

            // Parse a sequence for "Character Escapes" or "Character Classes"
            var escapedCharToken = scope._parseEscapedChar(pattern, i, endIndex);
            if (escapedCharToken != null) {
                return escapedCharToken;
            }

            // Parse a sequence for "Anchors"
            if (scope._escapedAnchors.indexOf(ch) >= 0) {
                return scope._createPatternToken(pattern, tokenTypes.escAnchor, i, 2); // "\A" or "\Z" or "\z" or "\G" or "\b" or "\B"
            }

            // Parse a sequence for a named backreference ("Backreference Constructs")
            if (ch === "k") {
                if (i + 2 < endIndex) {
                    var nameQuoteCh = pattern[i + 2];
                    if (nameQuoteCh === "'" || nameQuoteCh === "<") {
                        var closingCh = nameQuoteCh === "<" ? ">" : "'";
                        var refNameChars = scope._matchUntil(pattern, i + 3, endIndex, closingCh);
                        if (refNameChars.unmatchLength === 1 && refNameChars.matchLength > 0) {
                            return scope._createPatternToken(pattern, tokenTypes.escBackrefName, i, 3 + refNameChars.matchLength + 1); // "\k<Name>" or "\k'Name'"
                        }
                    }
                }

                throw new Bridge.ArgumentException("Malformed \\k<...> named back reference.");
            }

            // Unrecognized escape sequence:
            throw new Bridge.ArgumentException("Unrecognized escape sequence \\" + ch + ".");
        },

        _parseOctalCharToken: function(pattern, i, endIndex) {
            var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
            var tokenTypes = scope.tokenTypes;

            var ch = pattern[i];
            if (ch === "\\" && i + 1 < endIndex) {
                
                ch = pattern[i + 1];
                
                if (ch >= "0" && ch <= "7") {
                    var octalDigits = scope._matchChars(pattern, i + 1, endIndex, scope._octSymbols, 3);
                    return scope._createPatternToken(pattern, tokenTypes.escCharOctal, i, 1 + octalDigits.matchLength); // "\0" or "\nn" or "\nnn"
                }
            }

            return null;
        },

        _parseEscapedChar: function (pattern, i, endIndex) {
            var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
            var tokenTypes = scope.tokenTypes;

            var ch = pattern[i];
            if (ch !== "\\" || i + 1 >= endIndex) {
                return null;
            }

            ch = pattern[i + 1];

            // Parse a sequence for "Character Escapes"
            if (scope._escapedChars.indexOf(ch) >= 0) {
                if (ch === "x") {
                    var hexDigits = scope._matchChars(pattern, i + 2, endIndex, scope._hexSymbols, 2);
                    if (hexDigits.matchLength !== 2) {
                        throw new Bridge.ArgumentException("Insufficient hexadecimal digits.");
                    }

                    return scope._createPatternToken(pattern, tokenTypes.escCharHex, i, 4); // "\xnn"
                } else if (ch === "c") {
                    if (i + 2 >= endIndex) {
                        throw new Bridge.ArgumentException("Missing control character.");
                    }

                    var ctrlCh = pattern[i + 2];
                    if ((ctrlCh >= "a" && ctrlCh <= "z") || (ctrlCh >= "A" && ctrlCh <= "Z")) {
                        return scope._createPatternToken(pattern, tokenTypes.escCharCtrl, i, 3); // "\cx" or "\cX"
                    }

                    throw new Bridge.ArgumentException("Unrecognized control character.");
                } else if (ch === "u") {
                    var ucodeDigits = scope._matchChars(pattern, i + 2, endIndex, scope._hexSymbols, 4);
                    if (ucodeDigits.matchLength !== 4) {
                        throw new Bridge.ArgumentException("Insufficient hexadecimal digits.");
                    }

                    return scope._createPatternToken(pattern, tokenTypes.escCharUnicode, i, 6); // "\unnnn"
                }

                return scope._createPatternToken(pattern, tokenTypes.escChar, i, 2); // "\a" or "\b" or "\t" or "\r" or "\v" or "f" or "n" or "e"

            }

            // Parse a sequence for an octal character("Character Escapes")
            if (ch >= "0" && ch <= "7") {
                var octalCharToken = scope._parseOctalCharToken(pattern, i, endIndex);
                return octalCharToken;
            }

            // Parse a sequence for "Character Classes"
            if (scope._escapedCharClasses.indexOf(ch) >= 0) {
                if (ch === "p" || ch === "P") {
                    var catNameChars = scope._matchUntil(pattern, i + 2, endIndex, "}"); // the longest category name is 37 + 2 brackets, but .NET does not limit the value on this step
                    if (catNameChars.matchLength < 3 || catNameChars.match[0] !== "{" || catNameChars.unmatchLength !== 1) {
                        throw new Bridge.ArgumentException("Incomplete \p{X} character escape.");
                    }

                    var catName = catNameChars.slice(1);

                    if (scope._unicodeCategories.indexOf(catName) >= 0) {
                        return scope._createPatternToken(pattern, tokenTypes.escCharClassCategory, i, 2 + catNameChars.matchLength + 1); // "\p{Name}" or "\P{Name}"
                    }

                    if (scope._namedCharBlocks.indexOf(catName) >= 0) {
                        return scope._createPatternToken(pattern, tokenTypes.escCharClassBlock, i, 2 + catNameChars.matchLength + 1); // "\p{Name}" or "\P{Name}"
                    }

                    throw new Bridge.ArgumentException("Unknown property '" + catName + "'.");
                }

                return scope._createPatternToken(pattern, tokenTypes.escCharClass, i, 2); // "\w" or "\W" or "\s" or "\S" or "\d" or "\D"
            }

            // Some other literal
            if (scope._escapedSpecialSymbols.indexOf(ch) >= 0) {
                return scope._createPatternToken(pattern, tokenTypes.escCharOther, i, 2); // "\." or "\$" or ... "\\"
            }

            return null;
        },

        _parseCharRangeToken: function (pattern, i, endIndex) {
            var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
            var tokenTypes = scope.tokenTypes;
            var tokens = [];

            var ch = pattern[i];
            if (ch !== "[") {
                return null;
            }

            var index = i + 1;
            var escapeToken;
            var literalToken;
            var closeBracketIndex = -1;

            while (index < endIndex) {
                ch = pattern[index];

                if (ch === "\\") {
                    escapeToken = scope._parseEscapedChar(pattern, index, endIndex);
                    if (escapeToken == null) {
                        throw new Bridge.ArgumentException("Unrecognized escape sequence \\" + ch + ".");
                    }
                    tokens.push(escapeToken);
                    index += escapeToken.length;
                    continue;

                }

                if (ch === "]") {
                    closeBracketIndex = index;
                    break;
                }

                literalToken = scope._createPatternToken(pattern, tokenTypes.literal, index, 1);
                tokens.push(literalToken);
                ++index;
            }

            if (closeBracketIndex < 0 || tokens.length < 1) {
                throw new Bridge.ArgumentException("Unterminated [] set.");
            }

            var groupToken = scope._createPatternToken(pattern, tokenTypes.charGroup, i, 1 + closeBracketIndex - i, tokens, "[", "]");
            return groupToken;
        },

        _parseAnchorToken: function (pattern, i) {
            var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
            var tokenTypes = scope.tokenTypes;

            var ch = pattern[i];
            if (ch !== "^" && ch !== "$") {
                return null;
            }

            return scope._createPatternToken(pattern, tokenTypes.anchor, i, 1);
        },

        _parseGroupToken: function (pattern, settings, i, endIndex) {
            var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
            var tokenTypes = scope.tokenTypes;

            var ch = pattern[i];
            if (ch !== "(") {
                return null;
            }

            var bracketLvl = 1;
            var bodyIndex = i + 1;
            var closeBracketIndex = -1;

            var isComment = false;
            var isAlternation = false;

            // Parse the Group construct, if any:
            var constructToken = scope._parseGroupConstructToken(pattern, settings, i + 1, endIndex);
            if (constructToken != null) {
                bodyIndex += constructToken.length;
                if (constructToken.type === tokenTypes.commentInline) {
                    isComment = true;
                } else if (constructToken.type === tokenTypes.alternationGroupExpr) {
                    isAlternation = true;
                }
            }

            // Find the closing bracket of the group:
            var index = bodyIndex;
            while (index < endIndex) {
                ch = pattern[index];
                if (ch === "(" && !isComment) {
                    ++ bracketLvl;
                } else if (ch === ")") {
                    -- bracketLvl;
                }

                if (bracketLvl === 0) {
                    closeBracketIndex = index;
                    break;
                }

                ++ index;
            }

            if (isComment) {
                if (closeBracketIndex < 0) {
                    throw new Bridge.ArgumentException("Unterminated (?#...) comment.");
                }
                return scope._createPatternToken(pattern, tokenTypes.commentInline, i, 1 + closeBracketIndex - i);
            }
            
            if (closeBracketIndex < 0) {
                throw new Bridge.ArgumentException("Not enough )'s.");
            }

            // Parse the "Body" of the group
            var innerTokens = scope._parsePatternImpl(pattern, settings, bodyIndex, closeBracketIndex);
            if (constructToken != null) {
                innerTokens.splice(0, 0, constructToken);
            }

            // If there is an Alternation expression, treat the group as Alternation group
            if (isAlternation) {
                var innerTokensLen = innerTokens.length;
                var innerToken;
                var j;

                // Check that there is only 1 alternation symbol:
                var altCount = 0;
                for (j = 0; j < innerTokensLen; j++) {
                    innerToken = innerTokens[j];
                    if (innerToken.type === tokenTypes.alternation) {
                        ++altCount;
                        if (altCount > 1) {
                            throw new Bridge.ArgumentException("Too many | in (?()|).");
                        }
                    }
                }

                var altGroupToken = scope._createPatternToken(pattern, tokenTypes.alternationGroup, i, 1 + closeBracketIndex - i, innerTokens, "(", ")");
                return altGroupToken;
            }

            // Create Group token:
            var groupToken = scope._createPatternToken(pattern, tokenTypes.group, i, 1 + closeBracketIndex - i, innerTokens, "(", ")");
            return groupToken;
        },

        _parseGroupConstructToken: function (pattern, settings, i, endIndex) {
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
            // ?#

            var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
            var tokenTypes = scope.tokenTypes;

            var ch = pattern[i];
            if (ch !== "?" || i + 1 >= endIndex) {
                return null;
            }

            ch = pattern[i + 1];
            if (ch === ":" || ch === "=" || ch === "!" || ch === ">") {
                return scope._createPatternToken(pattern, tokenTypes.groupConstruct, i, 2);
            }

            if (ch === "#") {
                return scope._createPatternToken(pattern, tokenTypes.commentInline, i, 2);
            }

            if (ch === "(") {
                return scope._parseAlternationGroupExprToken(pattern, settings, i, endIndex);
            }

            if (ch === "<" && i + 2 < endIndex) {
                var ch3 = pattern[i + 2];
                if (ch3 === "=" || ch3 === "!") {
                    return scope._createPatternToken(pattern, tokenTypes.groupConstruct, i, 3);
                }
            }

            if (ch === "<" || ch === "'") {
                var closingCh = ch === "<" ? ">" : ch;
                var nameChars = scope._matchUntil(pattern, i + 2, endIndex, closingCh);
                if (nameChars.unmatchLength !== 1 || nameChars.matchLength === 0) {
                    throw new Bridge.ArgumentException("Unrecognized grouping construct.");
                }

                var nameFirstCh = nameChars.match.slice(0, 1);
                if ("`~@#$%^&*()-+{}[]|\\/|'\";:,.?".indexOf(nameFirstCh) >= 0) {
                    // TODO: replace the "black list" of wrong characters with char class check:
                    // According to UTS#18 Unicode Regular Expressions (http://www.unicode.org/reports/tr18/)
                    // RL 1.4 Simple Word Boundaries  The class of <word_character> includes all Alphabetic
                    // values from the Unicode character database, from UnicodeData.txt [UData], plus the U+200C
                    // ZERO WIDTH NON-JOINER and U+200D ZERO WIDTH JOINER.
                    throw new Bridge.ArgumentException("Invalid group name: Group names must begin with a word character.");
                }

                return scope._createPatternToken(pattern, tokenTypes.groupConstructName, i, 2 + nameChars.matchLength + 1);
            }

            var imnsxChars = scope._matchChars(pattern, i + 1, endIndex, "imnsx-");
            if (imnsxChars.matchLength > 0 && imnsxChars.unmatchCh === ":") {
                return scope._createPatternToken(pattern, tokenTypes.groupConstructImnsx, i, 1 + imnsxChars.matchLength + 1);
            }

            throw new Bridge.ArgumentException("Unrecognized grouping construct.");
        },

        _parseQuantifierToken: function(pattern, i, endIndex) {
            var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
            var tokenTypes = scope.tokenTypes;

            var ch = pattern[i];

            if (ch === "*" || ch === "+" || ch === "?") {
                return scope._createPatternToken(pattern, tokenTypes.quantifier, i, 1);
            }

            if (ch !== "{") {
                return null;
            }

            var dec1Chars = scope._matchChars(pattern, i + 1, endIndex, scope._decSymbols);
            if (dec1Chars.matchLength === 0) {
                return null;
            }

            if (dec1Chars.unmatchCh === "}") {
                return scope._createPatternToken(pattern, tokenTypes.quantifierN, i, 1 + dec1Chars.matchLength + 1);
            }

            if (dec1Chars.unmatchCh !== ",") {
                return null;
            }

            var dec2Chars = scope._matchChars(pattern, dec1Chars.unmatchIndex + 1, endIndex, scope._decSymbols);
            if (dec2Chars.matchLength === 0 || dec2Chars.unmatchCh !== "}") {
                return null;
            }

            return scope._createPatternToken(pattern, tokenTypes.quantifierNM, i, 1 + dec1Chars.matchLength + 1 + dec2Chars.matchLength + 1);
        },

        _parseAlternationToken: function (pattern, i) {
            var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
            var tokenTypes = scope.tokenTypes;

            var ch = pattern[i];
            if (ch !== "|") {
                return null;
            }

            return scope._createPatternToken(pattern, tokenTypes.alternation, i, 1);
        },

        _parseAlternationGroupExprToken: function (pattern, settings, i, endIndex) {
            var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
            var tokenTypes = scope.tokenTypes;

            var ch = pattern[i];
            if (ch !== "?" || i + 1 >= endIndex || pattern[i + 1] !== "(") {
                return null;
            }

            // Parse Alternation expression as a group:
            var expr = scope._parseGroupToken(pattern, settings, i + 1, endIndex);
            if (expr == null) {
                return null;
            }

            if (expr.children && expr.children.length) {
                //TODO: .NET Regex allows some of these. Need to be clarified:
                switch (expr.children[0].type) {
                    case tokenTypes.groupConstruct:
                    case tokenTypes.groupConstructName:
                    case tokenTypes.groupConstructImnsx:
                        throw new Bridge.NotSupportedException("Group constructs are not supported for Alternation expressions.");
                }
            }

            // Transform Group token to Alternation expression token:
            return scope._createPatternToken(pattern, tokenTypes.alternationGroupExpr, expr.index - 1, 1 + expr.length, expr.children, "?(", ")");
        },

        _parseXModeCommentToken: function(pattern, i, endIndex) {
            var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
            var tokenTypes = scope.tokenTypes;

            var ch = pattern[i];
            if (ch !== "#") {
                return null;
            }

            var index = i + 1;
            while (index < endIndex) {
                ch = pattern[index];
                ++ index;   // index should be changed before breaking

                if (ch === "\n") {
                    break;
                }
            }

            return scope._createPatternToken(pattern, tokenTypes.commentXMode, i, index - i);
        },

        _createPatternToken: function (pattern, type, i, len, innerTokens, innerTokensPrefix, innerTokensPostfix) {
            var token = {
                type: type,
                index: i,
                length: len,
                value: pattern.slice(i, i + len)
            };

            if (innerTokens != null && innerTokens.length > 0) {
                token.children = innerTokens;
                token.childrenPrefix = innerTokensPrefix;
                token.childrenPostfix = innerTokensPostfix;
            }

            return token;
        },

        _modifyPatternToken: function(token, pattern, type, i, len) {
            if (type != null) {
                token.type = type;
            }
            
            if (i != null || len != null) {
                if (i != null) {
                    token.index = i;
                }
                if (len != null) {
                    token.length = len;
                }

                token.value = pattern.slice(token.index, token.index + token.length);
            }
        },

        _updatePatternToken: function (token, type, i, len, value) {
            token.type = type;
            token.index = i;
            token.length = len;
            token.value = value;
        },

        _matchChars: function (str, startIndex, endIndex, allowedChars, maxLength) {
            var res = {
                match: "",
                matchIndex: -1,
                matchLength: 0,
                unmatchCh: "",
                unmatchIndex: -1,
                unmatchLength: 0
            };

            var index = startIndex;
            var ch;

            if (maxLength != null && maxLength >= 0) {
                endIndex = startIndex + maxLength;
            }

            while (index < endIndex) {
                ch = str[index];

                if (allowedChars.indexOf(ch) < 0) {
                    res.unmatchCh = ch;
                    res.unmatchIndex = index;
                    res.unmatchLength = 1;
                    break;
                }

                index++;
            }

            if (index > startIndex) {
                res.match = str.slice(startIndex, index);
                res.matchIndex = startIndex;
                res.matchLength = index - startIndex;
            }

            return res;
        },

        _matchUntil: function (str, startIndex, endIndex, unallowedChars, maxLength) {
            var res = {
                match: "",
                matchIndex: -1,
                matchLength: 0,
                unmatchCh: "",
                unmatchIndex: -1,
                unmatchLength: 0
            };

            var index = startIndex;
            var ch;

            if (maxLength != null && maxLength >= 0) {
                endIndex = startIndex + maxLength;
            }

            while (index < endIndex) {
                ch = str[index];

                if (unallowedChars.indexOf(ch) >= 0) {
                    res.unmatchCh = ch;
                    res.unmatchIndex = index;
                    res.unmatchLength = 1;
                    break;
                }

                index++;
            }

            if (index > startIndex) {
                res.match = str.slice(startIndex, index);
                res.matchIndex = startIndex;
                res.matchLength = index - startIndex;
            }

            return res;
        }
    }
});