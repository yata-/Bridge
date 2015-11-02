// @source String.js

(function () {
    var enumMethods = {
        nameEquals: function(n1, n2) {
            return (n1.charAt(0).toLowerCase() + n1.slice(1)) === (n2.charAt(0).toLowerCase() + n2.slice(1));
        },

        parse: function(enumType, s) {
            var values = enumType;
            if (!enumType.prototype.flags) {
                for (var f in values) {
                    if (enumMethods.nameEquals(f,s)) {
                        return values[f];
                    }
                }
            }
            else {
                var parts = s.split('|');
                var value = 0;
                var parsed = true;

                for (var i = parts.length - 1; i >= 0; i--) {
                    var part = parts[i].trim();
                    var found = false;

                    for (var f in values) {
                        if (enumMethods.nameEquals(f,part)) {
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
            throw new Bridge.ArgumentException('Invalid Enumeration Value');
        },

        toString: function(enumType, value) {
            var values = enumType;
            if (!enumType.prototype.flags || (value === 0)) {
                for (var i in values) {
                    if (values[i] === value) {
                        return i.charAt(0).toUpperCase() + i.slice(1);
                    }
                }
                throw new Bridge.ArgumentException('Invalid Enumeration Value');
            }
            else {
                var parts = [];
                for (var i in values) {
                    if (values[i] & value) {
                        parts.push(i.charAt(0).toUpperCase() + i.slice(1));
                    }
                }
                if (!parts.length) {
                    throw new Bridge.ArgumentException('Invalid Enumeration Value');
                }
                return parts.join(' | ');
            }
        },

        getValues: function(enumType) {
            var parts = [];
            var values = enumType;
            for (var i in values) {
                if (values.hasOwnProperty(i) && i.indexOf("$") < 0)
                    parts.push(values[i]);
            }
            return parts;
        }
    };

    Bridge.Enum = enumMethods;
})();
