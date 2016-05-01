// @source Text/RegularExpressions/RegexGroup.js

Bridge.define("Bridge.Text.RegularExpressions.Group", {
    inherits: function () {
        return [Bridge.Text.RegularExpressions.Capture];
    },

    statics: {
        config: {
            init: function () {
                var empty = new Bridge.Text.RegularExpressions.Group("", [], 0);

                this.getEmpty = function () {
                    return empty;
                }
            }
        },

        synchronized: function (group) {
            if (group == null) {
                throw new Bridge.ArgumentNullException("group");
            }

            // force Captures to be computed.
            var captures = group.getCaptures();

            if (captures.getCount() > 0) {
                captures.get(0);
            }

            return group;
        }
    },

    _caps: null,
    _capcount: 0,
    _capColl: null,

    constructor: function (text, caps, capcount) {
        var scope = Bridge.Text.RegularExpressions;
        var index = capcount === 0 ? 0 : caps[(capcount - 1) * 2];
        var length = capcount === 0 ? 0 : caps[(capcount * 2) - 1];

        scope.Capture.prototype.$constructor.call(this, text, index, length);

        this._caps = caps;
        this._capcount = capcount;
    },

    getSuccess: function () {
        return this._capcount !== 0;
    },

    getCaptures: function () {
        if (this._capColl == null) {
            this._capColl = new Bridge.Text.RegularExpressions.CaptureCollection(this);
        }

        return this._capColl;
    }
});
