// @source Convert.js

var convert = {
    typeNames: {
        Bool : "Boolean",
        Char : "Char",
        SByte : "SByte",
        Byte : "Byte",
        Int16 : "Int16",
        UInt16 : "UInt16",
        Int32 : "Int32",
        UInt32 : "UInt32",
        Int64 : "Int64",
        UInt64 : "UInt64",
        Single : "Single",
        Double : "Double",
        Decimal: "Decimal",
        DateTime: "DateTime"
    },

    toBoolean: function (value, formatProvider) {
        var type = typeof (value);
        switch (type) {
            case "boolean":
                return value;

            case "number":
                return value !== 0; // non-zero int/float value is always converted to True;

            case "string":
                var lowCaseVal = value.toLowerCase().trim();
                if (lowCaseVal === "true") {
                    return true;
                }
                else if (lowCaseVal === "false") {
                    return false;
                }
                else {
                    throw new Bridge.FormatException("String was not recognized as a valid Boolean.");
                }

            case "object":
                if (value == null) {
                    return false;
                }
                break;
        }

        // try converting using IConvertible
        return this.convertToType(this.typeNames.Bool, value, formatProvider);
    },

    toChar: function (value, formatProvider, treatNullAsString, isFloatingType) {
        var type = typeof (value);
        if (treatNullAsString && value == null) {
            type = "string";
        }

        switch (type) {
            case "boolean":
                this.throwInvalidCastEx(this.typeNames.Bool, this.typeNames.Char);

            case "number":
                if (isFloatingType || value % 1 !== 0) {
                    this.throwInvalidCastEx("floating point type", this.typeNames.Char);
                }
                if (value < 0 || value > 65535) {
                    throw new Bridge.OverflowException("Value was either too large or too small for a character.");
                }
                return value;

            case "string":
                if (value == null) {
                    throw new Bridge.ArgumentNullException("value");
                }
                if (value.length !== 1) {
                    throw new Bridge.FormatException("String must be exactly one character long.");
                }
                return value.charCodeAt(0);

            case "object":
                if (value == null) {
                    return 0;
                }
                if (Bridge.isDate(value)) {
                    this.throwInvalidCastEx(this.typeNames.DateTime, this.typeNames.Char);
                }
                break;
        }

        // try converting using IConvertible
        return this.convertToType(this.typeNames.Char, value, formatProvider);
    },

    toNumber: function (value, formatProvider, minValue, maxValue, typeName) {
        var type = typeof (value);
        var isFloating = typeName === this.typeNames.Single || typeName === this.typeNames.Double || typeName === this.typeNames.Decimal;

        switch (type) {
            case "boolean":
                return value ? 1 : 0;

            case "number":
                if (!isFloating && (value % 1 !== 0)) {
                    value = this.roundToInt(value, minValue, maxValue, typeName);
                }
                if (value < minValue || value > maxValue) {
                    throw new Bridge.OverflowException("Value was either too large or too small for '" + typeName + "'.");
                }
                return value;

            case "string":
                if (isFloating) {
                    if (typeName !== this.typeNames.Decimal) {
                        // TODO: implement infinity
                        // TODO: implement exponential notation
                    }
                    // TODO: implement culture-specific params: decimal symbol, digit grouping symbol
                    if (!/^[+-]?[0-9]+[.,]?[0-9]$/.test(value)) {
                        throw new Bridge.FormatException("Input string was not in a correct format.");
                    }
                    value = parseFloat(value);

                } else {
                    if (!/^[+-]?[0-9]+$/.test(value)) {
                        throw new Bridge.FormatException("Input string was not in a correct format.");
                    }
                    value = parseInt(value, 10);
                }
                
                if (isNaN(result)) {
                    throw new Bridge.FormatException("Input string was not in a correct format.");
                }

                if (value < minValue || value > maxValue) {
                    throw new Bridge.OverflowException("Value was either too large or too small for '" + typeName + "'.");
                }
                return value;

            case "object":
                if (value == null) {
                    return 0;
                }
                if (Bridge.isDate(value)) {
                    this.throwInvalidCastEx(this.typeNames.DateTime, typeName);
                }
                break;
        }

        // try converting using IConvertible
        return this.convertToType(typeName, value, formatProvider);
    },

    toSByte: function (value, formatProvider) {
        var result = this.toNumber(value, formatProvider, -128, 127, this.typeNames.SByte);
        return result;
    },

    toByte: function (value, formatProvider) {
        var result = this.toNumber(value, formatProvider, 0, 255, this.typeNames.Byte);
        return result;
    },

    toInt16: function (value, formatProvider) {
        var result = this.toNumber(value, formatProvider, -32768, 32767, this.typeNames.Int16);
        return result;
    },

    toUInt16: function (value, formatProvider) {
        var result = this.toNumber(value, formatProvider, 0, 65535, this.typeNames.UInt16);
        return result;
    },

    toInt32: function (value, formatProvider) {
        var result = this.toNumber(value, formatProvider, -2147483648, 2147483647, this.typeNames.Int32);
        return result;
    },

    toUInt32: function (value, formatProvider) {
        var result = this.toNumber(value, formatProvider, 0, 4294967295, this.typeNames.UInt32);
        return result;
    },

    toInt64: function (value, formatProvider) {
        var result = this.toNumber(value, formatProvider, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, this.typeNames.Int64);
        return result;
    },

    toUInt64: function (value, formatProvider) {
        var result = this.toNumber(value, formatProvider, 0, Number.MAX_SAFE_INTEGER, this.typeNames.UInt64);
        return result;
    },

    toSingle: function (value, formatProvider) {
        var result = this.toNumber(value, formatProvider, -3.402823e+38, 3.402823e+38, this.typeNames.Single);
        return result;
    },

    toDouble: function (value, formatProvider) {
        var result = this.toNumber(value, formatProvider, -1.7976931348623157e+308, 1.7976931348623157e+308, this.typeNames.Double);
        return result;
    },

    toDecimal: function (value, formatProvider) {
        var result = this.toNumber(value, formatProvider, -79228162514264337593543950335, 79228162514264337593543950335, this.typeNames.Decimal);
        return result;
    },

    toDateTime: function (value, formatProvider) {
        var type = typeof (value);

        switch (type) {
            case "boolean":
                throwInvalidCastEx(this.typeNames.Bool, this.typeNames.DateTime);

            case "number":
                if ((value % 1) === 0) {
                    throwInvalidCastEx(this.typeNames.Int32, this.typeNames.DateTime);
                } 
                throwInvalidCastEx(this.typeNames.Double, this.typeNames.DateTime);

            case "string":
                value = Date.parse(value); // TODO: check this
                return value;

            case "object":
                if (value == null) {
                    return this.getDateTimeMinValue();
                }
                if (Bridge.isDate(value)) {
                    return value;
                }
                break;
        }

        // try converting using IConvertible
        return this.convertToType(this.typeNames.DateTime, value, formatProvider);
    },

    convertToType: function (typeName, value, formatProvider) {
        //TODO: IConvertible 
        throw new Bridge.NotSupportedException("IConvertible interface is not supported.");
    },

    roundToInt: function (value, minValue, maxValue, typeName) {
        if (value % 1 === 0) {
            return value;
        }

        var intPart = value | 0;
        var floatPart = value - intPart;

        if (value >= 0.0) {
            if (value < (maxValue + 0.5)) {
                if (floatPart > 0.5 || floatPart === 0.5 && (intPart & 1) !== 0) {
                    ++intPart;
                }
                return intPart;
            }
        }
        else if (value >= (minValue - 0.5)) {
            if (floatPart < -0.5 || floatPart === -0.5 && (intPart & 1) !== 0) {
                --intPart;
            }
            return intPart;
        }

        throw new Bridge.OverflowException("Value was either too large or too small for an '" + typeName + "'.");
    },

    getDateTimeMinValue: function() {
        var date = new Date(0);
        date.setFullYear(1);
        return date;
    },

    throwInvalidCastEx: function (fromType, toType) {
        throw new Bridge.InvalidCastException("Invalid cast from '" + fromType + "' to '" + toType + "'.");
    }
};

Bridge.Convert = convert;
