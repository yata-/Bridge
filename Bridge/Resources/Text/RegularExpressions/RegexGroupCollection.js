// @source Text/RegularExpressions/RegexGroupCollection.js


Bridge.define("Bridge.Text.RegularExpressions.GroupCollection", {
    inherits: function () {
        return [Bridge.ICollection];
    },

    _match: null,
    _captureMap: null,
    _groups: null,

    constructor: function (match, caps) {
        this._match = match;
        this._captureMap = caps;
    },

    _getGroupImpl: function (groupnum) {
        if (groupnum === 0) {
            return this._match;
        }

        // Construct all the Group objects the first time GetGroup is called
        if (this._groups == null) {
            var groups = [];
            groups.length = this._match._matchCount.length - 1;

            for (var i = 0; i < groups.length; i++) {
                var matchText = this._match._text;
                var matchCaps = this._match._matches[i + 1];
                var matchCapcount = this._match._matchcount[i + 1];
                groups[i] = new Bridge.Text.RegularExpressions.Group(matchText, matchCaps, matchCapcount);
            }
            this._groups = groups;
        }

        return this._groups[groupnum - 1];
    },

    _getGroup: function (groupnum) {
        var group;

        if (this._captureMap != null) {
            var num = this._captureMap[groupnum];
            if (num == null) {
                group = Bridge.Text.RegularExpressions.Group.getEmpty();
            } else {
                group = this._getGroupImpl(num);
            }
        }
        else {
            if (groupnum >= this._match._matchCount.length || groupnum < 0) {
                group = Bridge.Text.RegularExpressions.Group.getEmpty();
            } else {
                group = this._getGroupImpl(groupnum);
            }
        }

        return group;
    },

    getSyncRoot: function () {
        return this._match;
    },

    getIsSynchronized: function () {
        return false;
    },

    getIsReadOnly: function () {
        return true;
    },

    getCount: function () {
        return this._match._matchCount.length;
    },

    get: function (groupnum) {
        return this._getGroup(groupnum);
    },

    copyTo: function (array, arrayIndex) {
        //TODO: check
        if (array == null) {
            throw new Bridge.ArgumentNullException("array");
        }

        var count = this._getCount();
        for (var i = arrayIndex, j = 0; j < count; i++, j++) {
            var group = this._getGroup(j);
            Bridge.Array.set(array, group, [i]);
        }
    },

    getEnumerator: function () {
        //TODO: check
        return new Bridge.ArrayEnumerator(this);
    }
});