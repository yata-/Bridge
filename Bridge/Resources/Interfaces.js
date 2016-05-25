    // @source Interfaces.js

    Bridge.define("System.IFormattable", {
        statics: {
            $is: function (obj) {
                if (Bridge.isNumber(obj)) {
                    return true;
                }

                if (Bridge.isDate(obj)) {
                    return true;
                }

                return Bridge.is(obj, System.IFormattable, true);
            }
        }
    });

    Bridge.define("System.IComparable");

    Bridge.define("System.IFormatProvider");

    Bridge.define("System.ICloneable");

    Bridge.define('System.IComparable$1', function (T) { return {}; });

    Bridge.define('System.IEquatable$1', function (T) { return {}; });

    Bridge.define("Bridge.IPromise");

    Bridge.define("System.IDisposable");
