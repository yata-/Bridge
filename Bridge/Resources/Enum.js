    var enumMethods = {
        nameEquals: function (n1, n2, ignoreCase) {
            if (ignoreCase) {
                return n1.toLowerCase() === n2.toLowerCase();
            }

            return (n1.charAt(0).toLowerCase() + n1.slice(1)) === (n2.charAt(0).toLowerCase() + n2.slice(1));
        },

        checkEnumType: function (enumType) {
            if (!enumType) {
                throw new System.ArgumentNullException("enumType");
            }

            if (enumType.prototype && enumType.$kind !== "enum") {
                throw new System.ArgumentException("", "enumType");
            }
        },

        getUnderlyingType: function (type) {
            System.Enum.checkEnumType(type);
            return type.prototype.$utype || System.Int32;
        },

        toName: function (name) {
            if (name === "$Name") {
                return "Name";
            }
            return name;
        },

        parse: function (enumType, s, ignoreCase, silent) {
            System.Enum.checkEnumType(enumType);

            var intValue = {};

            if (System.Int32.tryParse(s, intValue)) {
                return intValue.v;
            }

            var values = enumType;

            if (!enumType.prototype || !enumType.prototype.$flags) {
                for (var f in values) {
                    if (enumMethods.nameEquals(f, s, ignoreCase)) {
                        return values[f];
                    }
                }
            } else {
                var parts = s.split(','),
                    value = 0,
                    parsed = true;

                for (var i = parts.length - 1; i >= 0; i--) {
                    var part = parts[i].trim(),
                        found = false;

                    for (var f in values) {
                        if (enumMethods.nameEquals(f, part, ignoreCase)) {
                            value |= values[f];
                            found = true;

                            break;
                        }
                    }

                    if (!found) {
                        parsed = false;

                        break;
                    }
                }

                if (parsed) {
                    return value;
                }
            }

            if (silent !== true) {
                throw new System.ArgumentException('Invalid Enumeration Value');
            }

            return null;
        },

        toString: function (enumType, value, forceFlags) {
            if (enumType === Number) {
                return value.toString();
            }

            System.Enum.checkEnumType(enumType);

            var values = enumType,
                isLong = System.Int64.is64Bit(value);

            if (((!enumType.prototype || !enumType.prototype.$flags) && forceFlags !== true) || (value === 0)) {
                for (var i in values) {
                    if (isLong && System.Int64.is64Bit(values[i]) ? (values[i].eq(value)) : (values[i] === value)) {
                        return enumMethods.toName(i);
                    }
                }

                //throw new System.ArgumentException('Invalid Enumeration Value');
                return value.toString();
            } else {
                var parts = [];

                for (var i in values) {
                    if (isLong && System.Int64.is64Bit(values[i]) ? (!values[i].and(value).isZero()) : (values[i] & value)) {
                        parts.push(enumMethods.toName(i));
                    }
                }

                if (!parts.length) {
                    //throw new System.ArgumentException('Invalid Enumeration Value');
                    return value.toString();
                }

                return parts.join(', ');
            }
        },

        getValues: function (enumType) {
            System.Enum.checkEnumType(enumType);

            var parts = [],
                values = enumType;

            for (var i in values) {
                if ((i === "$Name") || (values.hasOwnProperty(i) && i.indexOf("$") < 0 && typeof values[i] !== "function")) {
                    parts.push(values[i]);
                }
            }

            return parts.sort(function (i1, i2) {
                return i1 - i2;
            });
        },

        format: function (enumType, value, format) {
            System.Enum.checkEnumType(enumType);

            var name;

            if (!Bridge.hasValue(value) && (name = "value") || !Bridge.hasValue(format) && (name = "format")) {
                throw new System.ArgumentNullException(name);
            }

            switch (format) {
                case "G":
                case "g":
                    return System.Enum.toString(enumType, value);
                case "x":
                case "X":
                    return value.toString(16);
                case "d":
                case "D":
                    return value.toString();
                case "f":
                case "F":
                    return System.Enum.toString(enumType, value, true);
                default:
                    throw new System.FormatException();
            }
        },

        getNames: function (enumType) {
            System.Enum.checkEnumType(enumType);

            var parts = [],
                values = enumType;

            for (var i in values) {
                if (i === "$Name") {
                    parts.push(["Name", values[i]]);
                } else if ((values.hasOwnProperty(i) && i.indexOf("$") < 0 && typeof values[i] !== "function")) {
                    parts.push([enumMethods.toName(i), values[i]]);
                }
            }

            return parts.sort(function (i1, i2) {
                return i1[1] - i2[1];
            }).map(function (i) {
                return i[0];
            });
        },

        getName: function (enumType, value) {
            if (value == null) {
                throw new System.ArgumentNullException("value");
            }

            if (!(typeof (value) === "number" && Math.floor(value, 0) === value)) {
                throw new System.ArgumentException("Argument must be integer", "value");
            }

            System.Enum.checkEnumType(enumType);

            var values = enumType;

            for (var i in values) {
                if (values[i] === value) {
                    if (i === "$Name") {
                        return "Name";
                    }
                    return i;
                }
            }

            return null;
        },

        hasFlag: function (value, flag) {
            return !!(value & flag);
        },

        isDefined: function (enumType, value) {
            System.Enum.checkEnumType(enumType);

            var values = enumType,
                isString = Bridge.isString(value);

            for (var i in values) {
                if (isString ? enumMethods.nameEquals(i, value, false) : values[i] === value) {
                    return true;
                }
            }

            return false;
        },

        tryParse: function (enumType, value, result, ignoreCase) {
            result.v = 0;
            result.v = enumMethods.parse(enumType, value, ignoreCase, true);

            if (result.v == null) {
                return false;
            }

            return true;
        }
    };

    System.Enum = enumMethods;
