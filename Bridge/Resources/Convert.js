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

        var inArrayLength = inArray.length;
        if (offset > (inArrayLength - length)) {
            throw new Bridge.ArgumentOutOfRangeException("offset", "Offset and length must refer to a position in the string.");
        }
        if (inArrayLength === 0) {
            return "";
        }

        var insertLineBreaks = (options === 1);
        var strArrayLen = this.internal.toBase64_CalculateAndValidateOutputLength(length, insertLineBreaks);

        var strArray = [];
        strArray.length = strArrayLen;

        this.internal.convertToBase64Array(strArray, inArray, offset, length, insertLineBreaks);
        var str = strArray.join("");
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
        var inArrayLength = inArray.length;
        if (offsetIn > inArrayLength - length) {
            throw new Bridge.ArgumentOutOfRangeException("offsetIn", "Offset and length must refer to a position in the string.");
        }
        if (inArrayLength === 0) {
            return 0;
        }

        var insertLineBreaks = options === 1;
        var outArrayLength = outArray.length;   //This is the maximally required length that must be available in the char array

        // Length of the char buffer required
        var numElementsToCopy = this.internal.toBase64_CalculateAndValidateOutputLength(length, insertLineBreaks);

        if (offsetOut > (outArrayLength - numElementsToCopy)) {
            throw new Bridge.ArgumentOutOfRangeException("offsetOut", "Either offset did not refer to a position in the string, or there is an insufficient length of destination character array.");
        }

        var strArray = [];
        var strArrayLength = this.internal.convertToBase64Array(strArray, inArray, offsetIn, length, insertLineBreaks);

        for (var i = 0; i < strArrayLength; i++) {
            outArray[i] = strArray[i].charCodeAt(0);
        }

        return strArrayLength;
    },

    fromBase64String: function(s) {
        // "s" is an unfortunate parameter name, but we need to keep it for backward compat.

        if (s == null) {
            throw new Bridge.ArgumentNullException("s");
        }

        var sChars = s.split("");
        var bytes = this.internal.fromBase64CharPtr(sChars, 0, sChars.length);
        return bytes;
    },

    fromBase64CharArray: function (inArray, offset, length) {
        if (inArray == null) {
            throw new Bridge.ArgumentNullException("inArray");
        }
        if (length < 0) {
            throw new Bridge.ArgumentOutOfRangeException("length", "Index was out of range. Must be non-negative and less than the size of the collection.");
        }
        if (offset < 0) {
            throw new Bridge.ArgumentOutOfRangeException("offset", "Value must be positive.");
        }
        if (offset > (inArray.length - length)) {
            throw new Bridge.ArgumentOutOfRangeException("offset", "Offset and length must refer to a position in the string.");
        }

        var chars = [];
        for (var i = 0; i < inArray.length; i++) {
            var code = inArray[i];
            chars[i] = String.fromCharCode(code);
        }

        var bytes = this.internal.fromBase64CharPtr(chars, offset, length);
        return bytes;
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
            var outlen = ~~(inputLength / 3) * 4;               // the base length - we want integer division here. 
            outlen += ((inputLength % 3) !== 0) ? 4 : 0;    // at most 4 more chars for the remainder

            if (outlen === 0) {
                return 0;
            }

            if (insertLineBreaks) {
                var newLines = ~~(outlen / this.base64LineBreakPosition);
                if ((outlen % this.base64LineBreakPosition) === 0) {
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
        
        convertToBase64Array: function(outChars, inData, offset, length, insertLineBreaks) {
            var lengthmod3 = length % 3;
            var calcLength = offset + (length - lengthmod3);
            var charCount = 0;
            var j = 0;

            // Convert three bytes at a time to base64 notation.  This will consume 4 chars.
            var i;
            for (i = offset; i < calcLength; i += 3) {
                if (insertLineBreaks) {
                    if (charCount === this.base64LineBreakPosition) {
                        outChars[j++] = "\r";
                        outChars[j++] = "\n";
                        charCount = 0;
                    }
                    charCount += 4;
                }
                outChars[j] = this.base64Table[(inData[i] & 0xfc) >> 2];
                outChars[j + 1] = this.base64Table[((inData[i] & 0x03) << 4) | ((inData[i + 1] & 0xf0) >> 4)];
                outChars[j + 2] = this.base64Table[((inData[i + 1] & 0x0f) << 2) | ((inData[i + 2] & 0xc0) >> 6)];
                outChars[j + 3] = this.base64Table[(inData[i + 2] & 0x3f)];
                j += 4;
            }

            //Where we left off before
            i = calcLength;

            if (insertLineBreaks && (lengthmod3 !== 0) && (charCount === this.base64LineBreakPosition)) {
                outChars[j++] = "\r";
                outChars[j++] = "\n";
            }

            switch (lengthmod3) {
                case 2: //One character padding needed
                    outChars[j] = this.base64Table[(inData[i] & 0xfc) >> 2];
                    outChars[j + 1] = this.base64Table[((inData[i] & 0x03) << 4) | ((inData[i + 1] & 0xf0) >> 4)];
                    outChars[j + 2] = this.base64Table[(inData[i + 1] & 0x0f) << 2];
                    outChars[j + 3] = this.base64Table[64]; //Pad
                    j += 4;
                    break;

                case 1: // Two character padding needed
                    outChars[j] = this.base64Table[(inData[i] & 0xfc) >> 2];
                    outChars[j + 1] = this.base64Table[(inData[i] & 0x03) << 4];
                    outChars[j + 2] = this.base64Table[64]; //Pad
                    outChars[j + 3] = this.base64Table[64]; //Pad
                    j += 4;
                    break;
            }

            return j;
        },

        fromBase64CharPtr: function (input, offset, inputLength) {
            if (inputLength < 0) {
                throw new Bridge.ArgumentOutOfRangeException("inputLength", "Index was out of range. Must be non-negative and less than the size of the collection.");
            }
            if (offset < 0) {
                throw new Bridge.ArgumentOutOfRangeException("offset", "Value must be positive.");
            }

            // We need to get rid of any trailing white spaces.
            // Otherwise we would be rejecting input such as "abc= ":
            while (inputLength > 0)
            {
                var lastChar = input[offset + inputLength - 1];
                if (lastChar !== " " && lastChar !== "\n" && lastChar !== "\r" && lastChar !== "\t") {
                    break;
                }

                inputLength--;
            }

            // Compute the output length:
            var resultLength = this.fromBase64_ComputeResultLength(input, offset, inputLength);
            if (0 > resultLength) {
                throw new Bridge.InvalidOperationException("Contract voilation: 0 <= resultLength.");
            }

            // resultLength can be zero. We will still enter FromBase64_Decode and process the input.
            // It may either simply write no bytes (e.g. input = " ") or throw (e.g. input = "ab").
            
            // Create result byte blob:
            var decodedBytes = [];
            decodedBytes.length = resultLength;

            // Convert Base64 chars into bytes:
            this.fromBase64_Decode(input, offset, inputLength, decodedBytes, 0, resultLength);

            // We are done:
            return decodedBytes;
        },

        fromBase64_Decode(input, inputIndex, inputLength, dest, destIndex, destLength) {
            var startDestIndex = destIndex;

            // You may find this method weird to look at. Its written for performance, not aesthetics.
            // You will find unrolled loops label jumps and bit manipulations.

            var intA = "A".charCodeAt(0);
            var inta = "a".charCodeAt(0);
            var int0 = "0".charCodeAt(0);
            var intEq = "=".charCodeAt(0);
            var intPlus = "+".charCodeAt(0);
            var intSlash = "/".charCodeAt(0);
            var intSpace = " ".charCodeAt(0);
            var intTab = "\t".charCodeAt(0);
            var intNLn = "\n".charCodeAt(0);
            var intCRt = "\r".charCodeAt(0);
            var intAtoZ = ("Z".charCodeAt(0) - "A".charCodeAt(0));  // = ('z' - 'a')
            var int0To9 = ("9".charCodeAt(0) - "0".charCodeAt(0));

            var endInputIndex = inputIndex + inputLength;
            var endDestIndex = destIndex + destLength;

            // Current char code/value:
            var currCode;
             
            // This 4-byte integer will contain the 4 codes of the current 4-char group.
            // Eeach char codes for 6 bits = 24 bits.
            // The remaining byte will be FF, we use it as a marker when 4 chars have been processed.            
            var currBlockCodes = 0x000000FF;

            var allInputConsumed = false;
            var equalityCharEncountered = false;
                          
            while (true) {

                // break when done:
                if (inputIndex >= endInputIndex) {
                    allInputConsumed = true;
                    break;
                }

                // Get current char:
                currCode = input[inputIndex].charCodeAt(0);
                inputIndex++;

                // Determine current char code (unsigned Int comparison):
                if (((currCode - intA) >>> 0) <= intAtoZ) {
                    currCode -= intA;
                } else if (((currCode - inta) >>> 0) <= intAtoZ) {
                    currCode -= (inta - 26);
                } else if (((currCode - int0) >>> 0) <= int0To9) {
                    currCode -= (int0 - 52);
                } else {
                    // Use the slower switch for less common cases:
                    switch(currCode) {
                        // Significant chars:
                        case intPlus:  
                            currCode = 62;
                            break;

                        case intSlash: 
                            currCode = 63;
                            break;

                        // Legal no-value chars (we ignore these):
                        case intCRt:
                        case intNLn:
                        case intSpace:
                        case intTab:
                            continue;

                        // The equality char is only legal at the end of the input.
                        // Jump after the loop to make it easier for the JIT register predictor to do a good job for the loop itself:
                        case intEq:
                            equalityCharEncountered = true;
                            break;

                        // Other chars are illegal:
                        default:
                            throw new Bridge.FormatException("The input is not a valid Base-64 string as it contains a non-base 64 character, more than two padding characters, or an illegal character among the padding characters.");
                    }
                }

                if (equalityCharEncountered) {
                    break;
                }

                // Ok, we got the code. Save it:
                currBlockCodes = (currBlockCodes << 6) | currCode;

                // Last bit in currBlockCodes will be on after in shifted right 4 times:
                if ((currBlockCodes & 0x80000000) !== 0) {

                    if ((endDestIndex - destIndex) < 3) {
                        return -1;
                    }

                    dest[destIndex] = 0xFF & (currBlockCodes >> 16);
                    dest[destIndex + 1] = 0xFF & (currBlockCodes >> 8);
                    dest[destIndex + 2] = 0xFF & (currBlockCodes);
                    destIndex += 3;

                    currBlockCodes = 0x000000FF;
                }

            } // end of while

            if (!allInputConsumed && !equalityCharEncountered) {
                throw new Bridge.InvalidOperationException("Contract violation: should never get here.");
            }

            if (equalityCharEncountered) {
                if (currCode !== intEq) {
                    throw new Bridge.InvalidOperationException("Contract violation: currCode == intEq.");
                }

                // Recall that inputIndex is now one position past where '=' was read.
                // '=' can only be at the last input pos:
                if (inputIndex === endInputIndex) {

                    // Code is zero for trailing '=':
                    currBlockCodes <<= 6;

                    // The '=' did not complete a 4-group. The input must be bad:
                    if ((currBlockCodes & 0x80000000) === 0) {
                        throw new Bridge.FormatException("Invalid length for a Base-64 char array or string.");
                    }

                    if ((endDestIndex - destIndex) < 2) {
                        // Autch! We underestimated the output length!
                        return -1;
                    }

                    // We are good, store bytes form this past group. We had a single "=", so we take two bytes:
                    dest[destIndex] = 0xFF & (currBlockCodes >> 16);
                    dest[destIndex+1] = 0xFF & (currBlockCodes >> 8);
                    destIndex += 2;

                    currBlockCodes = 0x000000FF;

                } else { // '=' can also be at the pre-last position iff the last is also a '=' excluding the white spaces:
				
                    // We need to get rid of any intermediate white spaces.
                    // Otherwise we would be rejecting input such as "abc= =":
                    while (inputIndex < (endInputIndex - 1)) {
                        var lastChar = input[inputIndex];
                        if (lastChar !== " " && lastChar !== "\n" && lastChar !== "\r" && lastChar !== "\t") {
                            break;
                        }
                        inputIndex++;
                    }

                    if (inputIndex === (endInputIndex - 1) && input[inputIndex] === "=") {

                        // Code is zero for each of the two '=':
                        currBlockCodes <<= 12;

                        // The '=' did not complete a 4-group. The input must be bad:
                        if ((currBlockCodes & 0x80000000) === 0) {
                            throw new Bridge.FormatException("Invalid length for a Base-64 char array or string.");
                        }

                        if ((endDestIndex - destIndex) < 1) {
                            // Autch! We underestimated the output length!
                            return -1;
                        }

                        // We are good, store bytes form this past group. We had a "==", so we take only one byte:
                        dest[destIndex] = 0xFF & (currBlockCodes >> 16);
                        destIndex ++;

                        currBlockCodes = 0x000000FF;

                    } else {
                        // '=' is not ok at places other than the end:
                        throw new FormatException("The input is not a valid Base-64 string as it contains a non-base 64 character, more than two padding characters, or an illegal character among the padding characters.");
                    }
                }
                
            } 
            
            // We get here either from above or by jumping out of the loop:
            // The last block of chars has less than 4 items
            if (currBlockCodes !== 0x000000FF) {
                throw new Bridge.FormatException("Invalid length for a Base-64 char array or string.");
            }

            // Return how many bytes were actually recovered:
            return (destIndex - startDestIndex);
            
        },

        fromBase64_ComputeResultLength: function(input, startIndex, inputLength) {
            var intEq = "=";
            var intSpace = " ";

            if (inputLength < 0) {
                throw new Bridge.ArgumentOutOfRangeException("inputLength", "Index was out of range. Must be non-negative and less than the size of the collection.");
            }

            var endIndex = startIndex + inputLength;
            var usefulInputLength = inputLength;
            var padding = 0;

            while (startIndex < endIndex) {

                var c = input[startIndex];
                startIndex++;

                // We want to be as fast as possible and filter out spaces with as few comparisons as possible.
                // We end up accepting a number of illegal chars as legal white-space chars.
                // This is ok: as soon as we hit them during actual decode we will recognise them as illegal and throw.
                if (c <= intSpace) {
                    usefulInputLength--;
                } else if (c === intEq) {
                    usefulInputLength--;
                    padding++;
                }
            }

            if(0 > usefulInputLength) {
                throw new Bridge.InvalidOperationException("Contract violation: 0 <= usefulInputLength.");
            }
            if (0 > padding) {
                // For legal input, we can assume that 0 <= padding < 3. But it may be more for illegal input.
                // We will notice it at decode when we see a '=' at the wrong place.
                throw new Bridge.InvalidOperationException("Contract violation: 0 <= padding.");
            }

            // Perf: reuse the variable that stored the number of '=' to store the number of bytes encoded by the
            // last group that contains the '=':
            if (padding !== 0) {

                if (padding === 1) {
                    padding = 2;
                } else if (padding === 2) {
                    padding = 1;
                } else {
                    throw new FormatException("The input is not a valid Base-64 string as it contains a non-base 64 character, more than two padding characters, or an illegal character among the padding characters.");
                }  
            }

            // Done:
            return ~~(usefulInputLength / 4) * 3 + padding;
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
