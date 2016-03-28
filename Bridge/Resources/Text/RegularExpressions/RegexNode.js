// @source Text/RegularExpressions/RegexNode.js

Bridge.define("Bridge.Text.RegularExpressions.RegexNode", {
    statics: {
        One: 9,         // char     a
        Multi: 12,      // string   abcdef
        Ref: 13,        // index    \1
        Empty: 23,      //          ()
        Concatenate: 25 //          ab
    },

    _type: 0,
    _str: null,
    _children: null,
    _next: null,
    _m: 0,

    config: {
        init: function () {
            this._options = Bridge.Text.RegularExpressions.RegexOptions.None;
        }
    },

    constructor: function (type, options, arg) {
        var scope = Bridge.Text.RegularExpressions;
        var statics = Bridge.get(scope.RegexNode);

        this._type = type;
        this._options = options;

        if (type === statics.Ref) {
            this._m = arg;
        } else {
            this._str = arg || null;
        }
    },

    addChild: function (newChild) {
        if (this._children == null) {
            this._children = [];
        }

        var reducedChild = newChild._reduce();
        this._children.push(reducedChild);
        reducedChild._next = this;
    },

    childCount: function() {
        return this._children == null ? 0 : this._children.length;
    },

    child: function (i) {
        return this._children[i];
    },

    _reduce: function() {
        // Warning: current implementation is just partial (for Replacement servicing)

        var scope = Bridge.Text.RegularExpressions;
        var statics = Bridge.get(scope.RegexNode);

        var n;
        switch (this._type) {
            case statics.Concatenate:
                n = this._reduceConcatenation();
                break;
 
            default:
                n = this;
                break;
        }
        return n;
    },

    _reduceConcatenation: function() {
        var scope = Bridge.Text.RegularExpressions;
        var statics = Bridge.get(scope.RegexNode);

        var wasLastString = false;
        var optionsLast = 0;
        var optionsAt;
        var i;
        var j;
 
        if (this._children == null) {
            return new scope.RegexNode(statics.Empty, this._options);
        }

        for (i = 0, j = 0; i < this._children.length; i++, j++) {
            var at;
            var prev;
 
            at = this._children[i];
 
            if (j < i) {
                this._children[j] = at;
            }

            if (at._type === statics.Concatenate && at._isRightToLeft()) {
                for (var k = 0; k < at._children.length; k++) {
                    at._children[k]._next = this;
                }

                this._children.splice.apply(this._children, [i + 1, 0].concat(at._children)); // _children.InsertRange(i + 1, at._children);
                j--;

            } else if (at._type === statics.Multi || at._type === statics.One) {

                // Cannot merge strings if L or I options differ
                optionsAt = at._options & (scope.RegexOptions.RightToLeft | scope.RegexOptions.IgnoreCase);

                if (!wasLastString || optionsLast !== optionsAt) {
                    wasLastString = true;
                    optionsLast = optionsAt;
                    continue;
                }

                prev = this._children[--j];

                if (prev._type === statics.One) {
                    prev._type = statics.Multi;
                    prev._str = prev._str;
                }

                if ((optionsAt & scope.RegexOptions.RightToLeft) === 0) {
                    prev._str += at._str;
                } else {
                    prev._str = at._str + prev._str;
                }

            } else if (at._type === statics.Empty) {
                j--;
            } else {
                wasLastString = false;
            }
        }
 
        if (j < i) {
            this._children.splice(j, i - j);
        }
 
        return this._stripEnation(statics.Empty);
    },

    _stripEnation: function(emptyType) {
        switch (this.childCount()) {
            case 0:
                return new scope.RegexNode(emptyType, this._options);
            case 1:
                return this.child(0);
            default:
                return this;
        }
    },

    _isRightToLeft: function () {
        if ((this._options & Bridge.Text.RegularExpressions.RegexOptions.RightToLeft) > 0) {
            return true;
        }
        return false;
    },
});