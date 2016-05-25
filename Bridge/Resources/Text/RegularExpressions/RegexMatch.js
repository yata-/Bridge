// @source Text/RegularExpressions/RegexMatch.js

Bridge.define("System.Text.RegularExpressions.Match", {
    inherits: function () {
        return [System.Text.RegularExpressions.Group];
    },

    statics: {
        config: {
            init: function () {
                var empty = new System.Text.RegularExpressions.Match(null, 1, "", 0, 0, 0);

                this.getEmpty = function () {
                    return empty;
                }
            }
        },

        synchronized: function (match) {
            if (match == null) {
                throw new System.ArgumentNullException("match");
            }

            // Populate all groups by looking at each one
            var groups = match.getGroups();
            var groupsCount = groups.getCount();
            var group;
            var i;

            for (i = 0; i < groupsCount; i++) {
                group = groups.get(i);
                System.Text.RegularExpressions.Group.synchronized(group);
            }

            return match;
        }
    },

    _regex: null,
    _matchcount: null,
    _matches: null,
    _textbeg: 0,
    _textend: 0,
    _textstart: 0,
    _balancing: false,
    _groupColl: null,
    _textpos: 0,

    constructor: function (regex, capcount, text, begpos, len, startpos) {
        var scope = System.Text.RegularExpressions;
        var caps = [0, 0];

        scope.Group.prototype.$constructor.call(this, text, caps, 0);

        this._regex = regex;

        this._matchcount = [];
        this._matchcount.length = capcount;

        var i;
        for (i = 0; i < capcount; i++) {
            this._matchcount[i] = 0;
        }

        this._matches = [];
        this._matches.length = capcount;
        this._matches[0] = caps;

        this._textbeg = begpos;
        this._textend = begpos + len;
        this._textstart = startpos;
        this._balancing = false;
    },

    getGroups: function () {
        if (this._groupColl == null) {
            this._groupColl = new System.Text.RegularExpressions.GroupCollection(this, null);
        }

        return this._groupColl;
    },

    nextMatch: function () {
        if (this._regex == null) {
            return this;
        }

        return this._regex._runner.run(false, this._length, this._text, this._textbeg, this._textend - this._textbeg, this._textpos);
    },

    result: function (replacement) {
        if (replacement == null) {
            throw new System.ArgumentNullException("replacement");
        }

        if (this._regex == null) {
            throw new System.NotSupportedException("Result cannot be called on a failed Match.");
        }

        var repl = System.Text.RegularExpressions.RegexParser.parseReplacement(replacement, this._regex._caps, this._regex._capsize, this._regex._capnames, this._regex._options);
        //TODO: cache

        return repl.replacement(this);
    },

    _isMatched: function (cap) {
        return cap < this._matchcount.length && this._matchcount[cap] > 0 && this._matches[cap][this._matchcount[cap] * 2 - 1] !== (-3 + 1);
    },

    _addMatch: function (cap, start, len) {
        if (this._matches[cap] == null) {
            this._matches[cap] = new Array(2);
        }

        var capcount = this._matchcount[cap];

        if (capcount * 2 + 2 > this._matches[cap].length) {
            var oldmatches = this._matches[cap];
            var newmatches = new Array(capcount * 8);
            var j;

            for (j = 0; j < capcount * 2; j++) {
                newmatches[j] = oldmatches[j];
            }

            this._matches[cap] = newmatches;
        }

        this._matches[cap][capcount * 2] = start;
        this._matches[cap][capcount * 2 + 1] = len;
        this._matchcount[cap] = capcount + 1;
    },

    _tidy: function (textpos) {
        var interval = this._matches[0];
        this._index = interval[0];
        this._length = interval[1];
        this._textpos = textpos;
        this._capcount = this._matchcount[0];

        if (this._balancing) {

            //TODO: balancing

            // The idea here is that we want to compact all of our unbalanced captures.  To do that we
            // use j basically as a count of how many unbalanced captures we have at any given time 
            // (really j is an index, but j/2 is the count).  First we skip past all of the real captures
            // until we find a balance captures.  Then we check each subsequent entry.  If it's a balance
            // capture (it's negative), we decrement j.  If it's a real capture, we increment j and copy 
            // it down to the last free position. 
            var cap;
            var i;
            var j;

            for (cap = 0; cap < this._matchcount.length; cap++) {

                var limit = this._matchcount[cap] * 2;
                var matcharray = this._matches[cap];

                for (i = 0; i < limit; i++) {
                    if (matcharray[i] < 0) {
                        break;
                    }
                }

                for (j = i; i < limit; i++) {
                    if (matcharray[i] < 0) {
                        // skip negative values
                        j--;
                    } else {
                        // but if we find something positive (an actual capture), copy it back to the last 
                        // unbalanced position. 
                        if (i !== j) {
                            matcharray[j] = matcharray[i];
                        }
                        j++;
                    }
                }

                this._matchcount[cap] = j / 2;
            }

            this._balancing = false;
        }
    },

    _groupToStringImpl: function (groupnum) {
        var c = this._matchcount[groupnum];

        if (c === 0) {
            return "";
        }

        var matches = this._matches[groupnum];
        var capIndex = matches[(c - 1) * 2];
        var capLength = matches[(c * 2) - 1];

        return this._text.slice(capIndex, capIndex + capLength);
    },

    _lastGroupToStringImpl: function () {
        return this._groupToStringImpl(this._matchcount.length - 1);
    }
});

Bridge.define("System.Text.RegularExpressions.MatchSparse", {
    inherits: function () {
        return [System.Text.RegularExpressions.Match];
    },

    _caps: null,

    constructor: function (regex, caps, capcount, text, begpos, len, startpos) {
        var scope = System.Text.RegularExpressions;
        scope.Match.prototype.$constructor.call(this, regex, capcount, text, begpos, len, startpos);

        this._caps = caps;
    },

    getGroups: function () {
        if (this._groupColl == null) {
            this._groupColl = new System.Text.RegularExpressions.GroupCollection(this, this._caps);
        }
        return this._groupColl;
    },

});