// @source Text/RegularExpressions/RegexMatchCollection.js

Bridge.define("Bridge.Text.RegularExpressions.MatchCollection", {
    inherits: function () {
        return [Bridge.ICollection];
    },

    _regex: null,
    _input: null,
    _beginning: 0,
    _length: 0,
    _startat: 0,
    _prevlen: 0,
    _matches: null,
    _done: false,

    constructor: function (regex, input, beginning, length, startat) {
        if (startat < 0 || startat > input.Length) {
            throw new Bridge.ArgumentOutOfRangeException("startat");
        }

        this._regex = regex;
        this._input = input;
        this._beginning = beginning;
        this._length = length;
        this._startat = startat;
        this._prevlen = -1;
        this._matches = [];


    },

    _getMatch: function (i) {
        if (i < 0) {
            return null;
        }
        if (this._matches.length > i) {
            return this._matches[i];
        }
        if (this._done) {
            return null;
        }

        var match;

        do {
            //TODO: implement RUN: match = _regex.Run(false, _prevlen, _input, _beginning, _length, _startat);

            if (!match.getSuccess()) {
                this._done = true;
                return null;
            }

            this._matches.push(match);

            this._prevLen = match._length;//TODO: access
            this._startAt = match._textpos;//TODO: access

        } while (this._matches.length <= i);

        return match;
    },

    getCount: function () {
        if (!this._done) {
            this._getMatch(0x7FFFFFFF);
        }

        return this._matches.length;
    },

    getSyncRoot: function () {
        return this;
    },

    getIsSynchronized: function () {
        return false;
    },

    getIsReadOnly: function () {
        return true;
    },

    get: function (i) {
        var match = this._getMatch(i);
        if (match == null) {
            throw new Bridge.ArgumentOutOfRangeException("i");
        }
        return match;
    },

    copyTo: function (array, arrayIndex) {
        //TODO: check
        if (array == null) {
            throw new Bridge.ArgumentNullException("array");
        }
        this._matches.copyTo$1(array, arrayIndex);
    },

    getEnumerator: function () {
        //TODO: check
        return new Bridge.ArrayEnumerator(this);
    }
});