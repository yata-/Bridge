// @source Text/RegularExpressions/RegexReplacement.js

Bridge.define("Bridge.Text.RegularExpressions.RegexReplacement", {
    statics: {
        replace: function (evaluator, regex, input, count, startat) {
            return ""; //TODO: Implement
        },

        split: function (regex, input, count, startat) {
            return []; //TODO: Implement
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