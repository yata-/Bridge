// @source Text/RegularExpressions/RegexReplacement.js

Bridge.define("Bridge.Text.RegularExpressions.RegexReplacement", {
    statics: {
        replace: function (evaluator, regex, input, count, startat) {
            return ""; //TODO: Implement
        },

        split: function (regex, input, count, startat) {
            if (count < 0) {
                throw new Bridge.ArgumentOutOfRangeException("count", "Count can't be less than 0.");
            }
            if (startat < 0 || startat > input.Length) {
                throw new Bridge.ArgumentOutOfRangeException("startat", "Start index cannot be less than 0 or greater than input length.");
            }
                
            var result = [];
            if (count === 1) {
                result.push(input);
                return result;
            }

            --count;
            var match = regex.match$1(input, startat);
            if (!match.getSuccess()) {

                result.push(input);

            } else {

                var i;
                var prevat;
                var matchIndex;
                var matchLength;
                var matchGroups;
                var matchGroupsCount;

                if (!regex.getRightToLeft()) {
                    prevat = 0;

                    for (;;) {
                        matchIndex = match.getIndex();
                        matchLength = match.getLength();
                        matchGroups = match.getGroups();
                        matchGroupsCount = matchGroups.getCount();

                        result.push(input.slice(prevat, matchIndex));
                        prevat = matchIndex + matchLength;

                        // add all matched capture groups to the list.
                        for (i = 1; i < matchGroupsCount; i++) {
                            if (match._isMatched(i)) {
                                result.push(matchGroups.get(i).toString());
                            }
                        }

                        --count;
                        if (count === 0) {
                            break;
                        }

                        match = match.nextMatch();
                        if (!match.getSuccess()) {
                            break;
                        }
                    }

                    result.push(input.slice(prevat, input.length));

                } else {
                    prevat = input.length;

                    for (;;) {
                        matchIndex = match.getIndex();
                        matchLength = match.getLength();
                        matchGroups = match.getGroups();
                        matchGroupsCount = matchGroups.getCount();

                        result.push(input.slice(matchIndex + matchLength, prevat));
                        prevat = matchIndex;

                        // add all matched capture groups to the list.
                        for (i = 1; i < matchGroupsCount; i++) {
                            if (match._isMatched(i)) {
                                result.push(matchGroups.get(i).toString());
                            }
                        }

                        --count;
                        if (count === 0) {
                            break;
                        }

                        match = match.nextMatch();
                        if (!match.getSuccess()) {
                            break;
                        }
                    }

                    result.push(input.slice(0, prevat));
                    result.reverse();
                }
            }

            return result;
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