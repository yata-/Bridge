// @source Text/RegularExpressions/RegexCaptureCollection.js

Bridge.define("Bridge.Text.RegularExpressions.CaptureCollection", {
    inherits: function () {
        return [Bridge.ICollection];
    },

    _group: null,
    _capcount: 0,
    _captures: null,

    constructor: function (group) {
        this._group = group;
        this._capcount = group._capcount;
    },

    getSyncRoot: function () {
        return this._group;
    },

    getIsSynchronized: function () {
        return false;
    },

    getIsReadOnly: function () {
        return true;
    },

    getCount: function () {
        return this._capcount;
    },

    get: function (i) {
        if (i === this._capcount - 1 && i >= 0) {
            return this._group;
        }

        if (i >= this._capcount || i < 0) {
            throw new Bridge.ArgumentOutOfRangeException("i");
        }

        this._ensureCapturesInited();
        return this._captures[i];
    },

    copyTo: function (array, arrayIndex) {
        //TODO: check
        if (array == null) {
            throw new Bridge.ArgumentNullException("array");
        }

        for (var i = arrayIndex, j = 0; j < this._capcount; i++, j++) {
            var capture = this.get(j);
            Bridge.Array.set(array, capture, [i]);
        }
    },

    getEnumerator: function () {
        this._ensureCapturesInited();
        return new Bridge.ArrayEnumerator(this._captures);
    },

    _ensureCapturesInited: function () {
        // first time a capture is accessed, compute them all
        if (this._captures == null) {
            var captures = [];
            captures.length = this._capcount;
            for (var j = 0; j < this._capcount - 1; j++) {
                var index = this._group._caps[j * 2];
                var length = this._group._caps[j * 2 + 1];
                captures[j] = new Bridge.Text.RegularExpressions.Capture(this._group._text, index, length);
            }
            this._captures = captures;
        }
    }
});