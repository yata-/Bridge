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
                if (lowCaseVal === "true")
                    return true;
                else if (lowCaseVal === "false")
                    return false;
                else {
                    throw new Bridge.FormatException("String was not recognized as a valid Boolean.");
                }

            case "object":
                if (value == null)
                    return false;
                break;
        }

        //TODO: IConvertible 
        throw new Bridge.NotSupportedException("IConvertible interface is not supported.");
    }
};

Bridge.Convert = convert;
