    // @source Interfaces.js

    Bridge.define("Bridge.IFormattable", {
        statics: {
            $is: function (obj) {
                if (Bridge.isNumber(obj)) {
                    return true;
                }

                if (Bridge.isDate(obj)) {
                    return true;
                }

                return Bridge.is(obj, Bridge.IFormattable, true);
            }
        }
    });

    Bridge.define("Bridge.IComparable");

    Bridge.define("Bridge.IFormatProvider");

    Bridge.define("Bridge.ICloneable");

    Bridge.define('Bridge.IComparable$1', function (T) { return {}; });

    Bridge.define('Bridge.IEquatable$1', function (T) { return {}; });

    Bridge.define("Bridge.IPromise");

    Bridge.define("Bridge.IDisposable");
