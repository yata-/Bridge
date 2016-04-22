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
            var settings = {
                ignoreWhitespace: isIgnoreWhitespaceMode
            };

            var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
            return scope._parsePatternImpl(pattern, settings, 0, pattern.length);
        },

        _parsePatternImpl: function (pattern, settings, startIndex, endIndex) {
            if (pattern == null) {
                throw new Bridge.ArgumentNullException("pattern");
            }
            if (startIndex < 0 || startIndex >= pattern.length) {
                throw new Bridge.ArgumentOutOfRangeException("startIndex");
            }
            if (endIndex <= startIndex || endIndex > pattern.length) {
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
                token = null;

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
                        prevToken.length ++;
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

            scope._prepareRawTokens(pattern, tokens);
            return tokens;
        },

        _prepareRawTokens: function(pattern, tokens) {
            var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
            var backrefNumberTokenType = scope.tokenTypes.escBackrefNumber;
            var octalNumberTokenType = scope.tokenTypes.escCharOctal;
            var groupTokenType = scope.tokenTypes.group;
           
            var groupsCount = scope._getGroupsTokenCount(tokens);
            var groupNumberTokenValue;
            var groupNumberStr;
            var groupNumber;
            var octalCharToken;
            var extraLength;
            var literalToken;
            var token;
            var i;

            for (i = 0; i < tokens.length; i++) {
                token = tokens[i];
                if (token.type === backrefNumberTokenType) {
                    groupNumberTokenValue = pattern.slice(token.index, token.index + token.length);
                    groupNumberStr = groupNumberTokenValue.slice(1);
                    groupNumber = parseInt(groupNumberStr, 10);

                    if (groupNumber >= 1 && groupNumber <= groupsCount) {
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
                    octalCharToken = scope._parseOctalCharToken(groupNumberTokenValue, 0, groupNumberTokenValue.length);
                    if (octalCharToken == null) {
                        throw new Bridge.ArgumentException("Unrecognized escape sequence " + groupNumberTokenValue.slice(0, 2) + ".");
                    }

                    extraLength = token.length - octalCharToken.length;
                    token.type = octalNumberTokenType;
                    token.length = octalCharToken.length;

                    if (extraLength > 0) {
                        literalToken = scope._createPatternToken(pattern, tokenTypes.literal, token.index + token.length, extraLength);
                        tokens.splice(i + 1, 0, literalToken);
                    }
                } else if (token.type === groupTokenType && token.children && token.children.length > 0) {
                    scope._prepareRawTokens(pattern, token.children);
                }
            }
        },

        _getGroupsTokenCount: function(tokens) {
            var scope = Bridge.Text.RegularExpressions.RegexNetEngineParser;
            var groupTokenType = scope.tokenTypes.group;
            var tokensLen = tokens.length;
            var token;
            var i;

            var groupsCount = 0;
            var childGroupsCount;

            for (i = 0; i < tokensLen; i++) {
                token = tokens[i];
                if (token.type === groupTokenType) {
                    ++ groupsCount;

                    childGroupsCount = scope._getGroupsTokenCount(token.children);
                    groupsCount += childGroupsCount;
                }
            }

            return groupsCount;
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
                        var refNameChars = scope._matchUntil(pattern, i + 3, endIndex, nameQuoteCh);
                        if (refNameChars.unmatchLength === 1 && refNameChars.matchLength > 0) {
                            var refName = refNameChars.slice(1);
                            if (refName.length > 0) {
                                return scope._createPatternToken(pattern, tokenTypes.escBackrefName, i, 3 + refName.length + 1); // "\k<Name>" or "\k'Name'"
                            }
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

            var groupToken = scope._createPatternToken(pattern, tokenTypes.charGroup, i, 1 + closeBracketIndex - i, tokens);
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
            var index = i + 1;
            var closeBracketIndex = -1;

            var isComment = false;
            var isAlternation = false;

            // Parse the Group construct, if any:
            var constructToken = scope._parseGroupConstructToken(pattern, settings, i + 1, endIndex);
            if (constructToken != null) {
                index += constructToken.length;
                if (constructToken.type === tokenTypes.commentInline) {
                    isComment = true;
                } else if (constructToken.type === tokenTypes.alternationGroupExpr) {
                    isAlternation = true;
                }
            }

            // Find the closing bracket of the group:
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
            var innerTokens = scope._parsePatternImpl(pattern, settings, i + 1, closeBracketIndex);
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

                var altGroupToken = scope._createPatternToken(pattern, tokenTypes.alternationGroup, i, 1 + closeBracketIndex - i, innerTokens);
                return altGroupToken;
            }

            // Create Group token:
            var groupToken = scope._createPatternToken(pattern, tokenTypes.group, i, 1 + closeBracketIndex - i, innerTokens);
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
                var nameChars = scope._matchUntil(pattern, i + 2, endIndex, ch);
                if (nameChars.unmatchLength !== 1 || nameChars.matchLength === 0) {
                    throw new Bridge.ArgumentException("Unrecognized grouping construct.");
                }

                var nameFirstCh = nameChars.match.slice(0, 1);
                if ("`~@#$%^&*()-+{}[]|\\/|'\";:,.?".indexOf(nameFirstCh)) {
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
            return scope._createPatternToken(pattern, tokenTypes.alternationGroupExpr, expr.index - 1, 1 + expr.length, expr.children);
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

        _createPatternToken: function (pattern, type, i, len, innerTokens) {
            var token = {
                type: type,
                index: i,
                length: len
            };

            if (innerTokens != null && innerTokens.length > 0) {
                token.children = innerTokens;
            }

            return token;
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