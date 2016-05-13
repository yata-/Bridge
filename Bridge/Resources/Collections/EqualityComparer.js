// @source /Collections/Comparer.js

Bridge.define('Bridge.EqualityComparer$1', function (T) {
    return {
        inherits: [Bridge.IEqualityComparer$1(T)],

        equals2: function (x, y) {
            if (!Bridge.isDefined(x, true)) {
                return !Bridge.isDefined(y, true);
            } else if (Bridge.isDefined(y, true)) {
                var isBridge = x && x.$$name;

                if (!isBridge) {
                    return Bridge.equals(x, y);
                }
                else if (Bridge.isFunction(x.equalsT)) {
                    return Bridge.equalsT(x, y);
                }
                else if (Bridge.isFunction(x.equals)) {
                    return Bridge.equals(x, y);
                }

                return x === y;
            }

            return false;
        },

        getHashCode2: function (obj) {
            return Bridge.isDefined(obj, true) ? Bridge.getHashCode(obj) : 0;
        }
    };
});

Bridge.EqualityComparer$1.$default = new Bridge.EqualityComparer$1(Object)();
