// @source Convert.js

var convert = {
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

        //TODO: IConvertible 
        throw new Bridge.NotSupportedException("IConvertible interface is not supported.");
    },

    toChar: function (value, formatProvider, treatNullAsString, isFloatingType) {
        var type = typeof (value);
        if (treatNullAsString && value == null) {
            type = "string";
        }

        switch (type) {
            case "boolean":
                throw new Bridge.InvalidCastException("Invalid cast from 'Boolean' to 'Char'.");

            case "number":
                if (isFloatingType || value % 1 !== 0) {
                    throw new Bridge.InvalidCastException("Invalid cast from 'floating point type' to 'Char'");
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
                    throw new Bridge.InvalidCastException("Invalid cast from 'DateTime' to 'Char'");
                }
                break;
        }

        //TODO: IConvertible 
        throw new Bridge.NotSupportedException("IConvertible interface is not supported.");
    },

    toNumber: function (value, formatProvider, minValue, maxValue, typeName) {
        var type = typeof (value);
        switch (type) {
            case "boolean":
                return value ? 1 : 0;

            case "number":
                if (value % 1 !== 0) {
                    value = this.toInt32(value);
                }
                if (value < minValue || value > maxValue) {
                    throw new Bridge.OverflowException("Value was either too large or too small for '" + typeName + "'.");
                }
                return value;

            case "string":
                value = Bridge.Int.parseInt(value);
                if (value < -128 || value > 127) {
                    throw new Bridge.OverflowException("Value was either too large or too small for '" + typeName + "'.");
                }
                return value;

            case "object":
                if (value == null) {
                    return 0;
                }
                if (Bridge.isDate(value)) {
                    throw new Bridge.InvalidCastException("Invalid cast from 'DateTime' to '" + typeName + "'.");
                }
                break;
        }
        return null;
    },

    toSByte: function (value, formatProvider) {
        var result = this.toNumber(value, formatProvider, -128, 127, "SByte");
        if (result != null) {
            return result;
        }

        //TODO: IConvertible 
        throw new Bridge.NotSupportedException("IConvertible interface is not supported.");
    },

    toInt32: function (value, formatProvider) {
        //TODO: TO BE implemented, only NUMBER types are supported.
        var type = typeof (value);
        switch (type) {
            case "boolean":
                return value ? 1 : 0;

            case "number":
                var intPart = value | 0;
                var floatPart = value - intPart;

                if (value >= 0.0) {
                    if (value < 2147483647.5) {
                        if (floatPart > 0.5 || floatPart === 0.5 && (intPart & 1) !== 0)
                            ++intPart;
                        return intPart;
                    }
                }
                else if (value >= -2147483648.5) {
                    if (floatPart < -0.5 || floatPart === -0.5 && (intPart & 1) !== 0)
                        --intPart;
                    return intPart;
                }

                throw new Bridge.OverflowException("Value was either too large or too small for an Int32.");
        }
    }
};

Bridge.Convert = convert;
