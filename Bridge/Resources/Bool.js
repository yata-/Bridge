    // @source Bool.js

    var _boolean = {
        trueString: "True",
        falseString: "False",

        is: function (obj, type) {
            if (type === Bridge.IComparable ||
                type.$$name === "Bridge.IEquatable$1$Boolean" ||
                type.$$name === "Bridge.IComparable$1$Boolean") {
                return true;
            }

            return false;
        },

        instanceOf: function (instance) {
            return typeof (instance) === "boolean";
        },

        getDefaultValue: function () {
            return false;
        },

        toString: function (v) {
            return v ? Bridge.Boolean.trueString : Bridge.Boolean.falseString;
        },

        parse: function (value) {
            if (!Bridge.hasValue(value)) {
                throw new Bridge.ArgumentNullException("value");
            }

            var result = { v: false };
            if (!Bridge.Boolean.tryParse(value, result)) {
                throw new Bridge.FormatException("Bad format for Boolean value");
            }

            return result.v;
        },

        tryParse: function (value, result) {
            result.v = false;
            if (!Bridge.hasValue(value)) {
                return false;
            }

            if (Bridge.String.equals(Bridge.Boolean.trueString, value, 5)) {
                result.v = true;
                return true;
            }
            if (Bridge.String.equals(Bridge.Boolean.falseString, value, 5)) {
                result.v = false;
                return true;
            }

            var start = 0,
                end = value.length-1;
 
            while (start < value.length) {
                if (!Bridge.Char.isWhiteSpace(value[start]) && !Bridge.Char.isNull(value.charCodeAt(start))) {
                    break;
                }
                start++;
            }
 
            while (end >= start) {
                if (!Bridge.Char.isWhiteSpace(value[end]) && !Bridge.Char.isNull(value.charCodeAt(end))) {
                    break;
                }
                end--;            
            }
 
            value = value.substr(start, end - start + 1);

            if (Bridge.String.equals(Bridge.Boolean.trueString, value, 5)) {
                result.v = true;
                return true;
            }
            if (Bridge.String.equals(Bridge.Boolean.falseString, value, 5)) {
                result.v = false;
                return true;
            }

            return false;
        }
    };

    Bridge.Boolean = _boolean;
