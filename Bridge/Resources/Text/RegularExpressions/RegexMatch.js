// @source Text/RegularExpressions/RegexMatch.js

Bridge.define("Bridge.Text.RegularExpressions.Match", {
    inherits: function () {
        return [Bridge.Text.RegularExpressions.Group];
    },

    statics: {
        config: {
            init: function () {
                var empty = new Bridge.Text.RegularExpressions.Match(null, 1, "", 0, 0, 0);
                this.getEmpty = function () {
                    return empty;
                }
            }
        },

        synchronized: function (match) {
            if (match == null) {
                throw new Bridge.ArgumentNullException("match");
            }

            // Populate all groups by looking at each one
            var groups = match.getGroups();
            var groupsCount = groups.getCount();
            var groupStatics = Bridge.get(Bridge.Text.RegularExpressions.Group);

            for (var i = 0; i < groupsCount; i++) {
                var group = groups.get(i);
                groupStatics.synchronized(group);
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
        var scope = Bridge.Text.RegularExpressions;

        var caps = [0, 0];
        scope.Group.prototype.$constructor.call(this, text, caps, 0);

        this._regex = regex;

        this._matchcount = [];
        this._matchcount.length = capcount;
        for (var i = 0; i < capcount; i++) {
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

    _addMatch: function (cap, start, len) {
        if (this._matches[cap] == null) {
            this._matches[cap] = new Array(2);
        }

        var capcount = this._matchcount[cap];

        if (capcount * 2 + 2 > this._matches[cap].length) {
            var oldmatches = this._matches[cap];
            var newmatches = new Array(capcount * 8);

            for (var j = 0; j < capcount * 2; j++) {
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
            for (var cap = 0; cap < this._matchcount.length; cap++) {

                var limit = this._matchcount[cap] * 2;
                var matcharray = this._matches[cap];

                var i;
                var j;

                for (i = 0; i < limit; i++) {
                    if (matcharray[i] < 0) {
                        break;
                    }
                }

                for (j = i; i < limit; i++) {
                    if (matcharray[i] < 0) {
                        // skip negative values
                        j--;
                    }
                    else {
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

    getGroups: function () {
        if (this._groupColl == null) {
            this._groupColl = new Bridge.Text.RegularExpressions.GroupCollection(this, null);
        }
        return this._groupColl;
    },

    nextMatch: function () {
        if (this._regex == null) {
            return this;
        }

        return this._regex._runner.run(this._regex, false, this._length, this._text, this._textbeg, this._textend - this._textbeg, this._textpos);
    },

    result: function (replacement) {
        //TODO: implement
        return replacement;
    }
});