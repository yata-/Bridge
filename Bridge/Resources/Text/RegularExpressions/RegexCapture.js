// @source Text/RegularExpressions/RegexCapture.js

Bridge.define("Bridge.Text.RegularExpressions.Capture", {
    _text: "",
    _index: 0,
    _length: 0,

    constructor: function (text, i, l) {
        this._text = text;
        this._index = i;
        this._length = l;
    },

    getIndex: function () {
        return this._index;
    },

    getLength: function () {
        return this._length;
    },

    getValue: function () {
        return this._text.substr(this._index, this._length);
    },

    toString: function () {
        return this.getValue();
    }
});
