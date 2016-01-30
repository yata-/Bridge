// @source Convert.js

var convert = {
    typeNames: {
        Bool: "Boolean",
        Char: "Char",
        SByte: "SByte",
        Byte: "Byte",
        Int16: "Int16",
        UInt16: "UInt16",
        Int32: "Int32",
        UInt32: "UInt32",
        Int64: "Int64",
        UInt64: "UInt64",
        Single: "Single",
        Double: "Double",
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

    toBase64String: function(inArray, offset, length, options) {
        offset = offset || 0;
        length = length || inArray.length;
        options = options || 0; // 0 - means "None", 1 - stands for "InsertLineBreaks"

        if (inArray == null) {
            throw new Bridge.ArgumentNullException("inArray");
        }
        if (length < 0) {
            throw new Bridge.ArgumentOutOfRangeException("length", "Index was out of range. Must be non-negative and less than the size of the collection.");
        }
        if (offset < 0) {
            throw new Bridge.ArgumentOutOfRangeException("offset", "Value must be positive.");
        }
        if (options < 0 || options > 1) {
            throw new Bridge.ArgumentException("Illegal enum value.");
        }

        var inArrayLength = inArray.Length;
        if (offset > (inArrayLength - length)) {
            throw new Bridge.ArgumentOutOfRangeException("offset", "Offset and length must refer to a position in the string.");
        }
        if (inArrayLength === 0) {
            return "";
        }

        var insertLineBreaks = (options === 1);
        var strArrayLen = internal.toBase64_CalculateAndValidateOutputLength(length, insertLineBreaks);

        var strArray = [];
        strArray.length = strArrayLen;

        internal.convertToBase64Array(strArray, inArray, offset, length, insertLineBreaks);
        var str = strArray.join();
        return str;
    },

    toBase64CharArray: function(inArray, offsetIn, length, outArray, offsetOut, options) {
        if (inArray == null) {
            throw new Bridge.ArgumentNullException("inArray");
        }
        if (outArray == null) {
            throw new Bridge.ArgumentNullException("outArray");
        }
        if (length < 0) {
            throw new Bridge.ArgumentOutOfRangeException("length", "Index was out of range. Must be non-negative and less than the size of the collection.");
        }
        if (offsetIn < 0) {
            throw new Bridge.ArgumentOutOfRangeException("offsetIn", "Value must be positive.");
        }
        if (offsetOut < 0) {
            throw new Bridge.ArgumentOutOfRangeException("offsetOut", "Value must be positive.");
        }

        options = options || 0;     // 0 - means "None", 1 - stands for "InsertLineBreaks"
        if (options < 0 || options > 1) {
            throw new Bridge.ArgumentException("Illegal enum value.");
        }
        var inArrayLength = inArray.Length;
        if (offsetIn > inArrayLength - length) {
            throw new Bridge.ArgumentOutOfRangeException("offsetIn", "Offset and length must refer to a position in the string.");
        }
        if (inArrayLength === 0) {
            return 0;
        }

        var insertLineBreaks = options === 1;
        var outArrayLength = outArray.Length;   //This is the maximally required length that must be available in the char array

        // Length of the char buffer required
        var numElementsToCopy = internal.toBase64_CalculateAndValidateOutputLength(length, insertLineBreaks);

        if (offsetOut > (outArrayLength - numElementsToCopy)) {
            throw new Bridge.ArgumentOutOfRangeException("offsetOut", "Either offset did not refer to a position in the string, or there is an insufficient length of destination character array.");
        }

        var strArray = [];
        var strArrayLength = internal.convertToBase64Array(strArray, inArray, offsetIn, length, insertLineBreaks);

        for (var i = 0; i < strArrayLength; i++) {
            outArray[i] = strArray[i].charCodeAt(0);
        }

        return strArrayLength;
    },

    internal: {
        base64Table: [
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
            "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d",
            "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
            "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7",
            "8", "9", "+", "/", "="
        ],

        base64LineBreakPosition : 76,

        toBase64_CalculateAndValidateOutputLength: function(inputLength, insertLineBreaks) {
            var outlen = inputLength / 3 * 4;               // the base length - we want integer division here. 
            outlen += ((inputLength % 3) !== 0) ? 4 : 0;    // at most 4 more chars for the remainder

            if (outlen === 0) {
                return 0;
            }

            if (insertLineBreaks) {
                var newLines = outlen / base64LineBreakPosition;
                if ((outlen % base64LineBreakPosition) === 0) {
                    --newLines;    
                }
                outlen += newLines * 2;                     // the number of line break chars we'll add, "\r\n"
            }

            // If we overflow an int then we cannot allocate enough
            // memory to output the value so throw
            if (outlen > 2147483647) {
                throw new Bridge.OutOfMemoryException();
            }

            return outlen;
        },
        
        convertToBase64Array : function(outChars, inData, offset, length, insertLineBreaks) {
            var lengthmod3 = length % 3;
            var calcLength = offset + (length - lengthmod3);
            var charCount = 0;
            var j = 0;

            // Convert three bytes at a time to base64 notation.  This will consume 4 chars.
            var i;
            for (i = offset; i < calcLength; i += 3) {
                if (insertLineBreaks) {
                    if (charCount === base64LineBreakPosition) {
                        outChars[j++] = "\r";
                        outChars[j++] = "\n";
                        charCount = 0;
                    }
                    charCount += 4;
                }
                outChars[j] = base64Table[(inData[i] & 0xfc) >> 2];
                outChars[j + 1] = base64Table[((inData[i] & 0x03) << 4) | ((inData[i + 1] & 0xf0) >> 4)];
                outChars[j + 2] = base64Table[((inData[i + 1] & 0x0f) << 2) | ((inData[i + 2] & 0xc0) >> 6)];
                outChars[j + 3] = base64Table[(inData[i + 2] & 0x3f)];
                j += 4;
            }

            //Where we left off before
            i = calcLength;

            if (insertLineBreaks && (lengthmod3 !== 0) && (charCount === base64LineBreakPosition)) {
                outChars[j++] = "\r";
                outChars[j++] = "\n";
            }

            switch (lengthmod3) {
                case 2: //One character padding needed
                    outChars[j] = base64Table[(inData[i] & 0xfc) >> 2];
                    outChars[j + 1] = base64Table[((inData[i] & 0x03) << 4) | ((inData[i + 1] & 0xf0) >> 4)];
                    outChars[j + 2] = base64Table[(inData[i + 1] & 0x0f) << 2];
                    outChars[j + 3] = base64Table[64]; //Pad
                    j += 4;
                    break;

                case 1: // Two character padding needed
                    outChars[j] = base64Table[(inData[i] & 0xfc) >> 2];
                    outChars[j + 1] = base64Table[(inData[i] & 0x03) << 4];
                    outChars[j + 2] = base64Table[64]; //Pad
                    outChars[j + 3] = base64Table[64]; //Pad
                    j += 4;
                    break;
            }

            return j;
        }
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
