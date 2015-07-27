// @source Array.js

(function () {
    var array = {
        toIndex: function (arr, indices) {
            if (indices.length != (arr.$s ? arr.$s.length : 1)) {
                throw new Bridge.ArgumentException("Invalid number of indices");
            }

            if (indices[0] < 0 || indices[0] >= (arr.$s ? arr.$s[0] : arr.length)) {
                throw new Bridge.ArgumentException("Index 0 out of range");
            }

            var idx = indices[0],
                i;

            if (arr.$s) {
                for (i = 1; i < arr.$s.length; i++) {
                    if (indices[i] < 0 || indices[i] >= arr.$s[i]) {
                        throw new Bridge.ArgumentException("Index " + i + " out of range");
                    }

                    idx = idx * arr.$s[i] + indices[i];
                }
            }

            return idx;
        },

        $get: function (indices) {
            var r = this[Bridge.Array.toIndex(this, indices)];

            return typeof r !== "undefined" ? r : this.$v;
        },

        get: function (arr, indices) {
            var r = arr[Bridge.Array.toIndex(arr, indices)];

            return typeof r !== "undefined" ? r : arr.$v;
        },

        $set: function (indices, value) {
            this[Bridge.Array.toIndex(this, indices)] = value;
        },

        set: function (arr, indices, value) {
            arr[Bridge.Array.toIndex(arr, indices)] = value;
        },

        getLength: function (arr, dimension) {
            if (dimension >= (arr.$s ? arr.$s.length : 1)) {
                throw new Bridge.ArgumentException("Invalid dimension");
            }

            return arr.$s ? arr.$s[dimension] : arr.length;
        },

        getRank: function (arr) {
            return arr.$s ? arr.$s.length : 1;
        },

        getLower: function (arr, d) {
            return 0;
        },

        create: function (defvalue, initValues, sizes) {
            var arr = [],
                length = arguments.length > 2 ? 1 : 0,
                i, s, v,
                idx,
                indices,
                flatIdx;

            arr.$v = defvalue;
            arr.$s = [];
            arr.get = Bridge.Array.$get;
            arr.set = Bridge.Array.$set;

            for (i = 2; i < arguments.length; i++) {
                length *= arguments[i];
                arr.$s[i - 2] = arguments[i];
            }

            arr.length = length;

            if (initValues) {
                for (i = 0; i < arr.length; i++) {
                    indices = [];
                    flatIdx = i;

                    for (s = arr.$s.length - 1; s >= 0; s--) {
                        idx = flatIdx % arr.$s[s];
                        indices.unshift(idx);
                        flatIdx = Bridge.Int.div(flatIdx - idx, arr.$s[s]);
                    }

                    v = initValues;

                    for (idx = 0; idx < indices.length; idx++) {
                        v = v[indices[idx]];
                    }

                    arr[i] = v;
                }
            }

            return arr;
        },

        toEnumerable: function(array) {
            return new Bridge.ArrayEnumerable(array);
        },

        toEnumerator: function(array) {
            return new Bridge.ArrayEnumerator(array);
        },

        is: function (obj, type) {
            if (!Bridge.isArray(obj)) {
                return false;
            }

            if ((obj.constructor == type) || (obj instanceof type)) {
                return true;
            }

            if (type == Bridge.IEnumerable ||
                type == Bridge.ICollection ||
                type == Bridge.ICloneable ||
                type.$$name && Bridge.String.startsWith(type.$$name, "Bridge.IEnumerable$1") ||
                type.$$name && Bridge.String.startsWith(type.$$name, "Bridge.ICollection$1") ||
                type.$$name && Bridge.String.startsWith(type.$$name, "Bridge.IList$1")) {
                return true;
            }

            return false;
        },

        clone: function(arr) {
            if (arr.length === 1) {
                return [arr[0]];
            }
            else {
                return arr.slice(0);
            }
        },

        getCount: function(obj) {
            if (Bridge.isArray(obj)) {
                return obj.length;
            }
            else if (Bridge.isFunction(obj.getCount)) {
                return obj.getCount();
            }

            return 0;
        },

        add: function (obj, item) {
            if (Bridge.isArray(obj)) {
                obj.push(item);
            }
            else if (Bridge.isFunction(obj.add)) {
                obj.add(item);
            }
        },

        clear: function (obj) {
            if (Bridge.isArray(obj)) {
                obj.length = 0;
            }
            else if (Bridge.isFunction(obj.clear)) {
                obj.clear();
            }
        },

        indexOf: function(arr, item) {
            var i, ln;
            for (i = 0, ln = arr.length; i < ln; i++) {
                if (arr[i] === item) {
                    return i;
                }
            }

            return -1;
        },

        contains: function (obj, item) {
            if (Bridge.isArray(obj)) {
                return Bridge.Array.indexOf(obj, item) > -1;
            }
            else if (Bridge.isFunction(obj.contains)) {
                return obj.contains(item);
            }

            return false;
        },

        remove: function (obj, item) {
            if (Bridge.isArray(obj)) {
                var index = Bridge.Array.indexOf(obj, item);
                if (index > -1) {
                    obj.splice(index, 1);
                    return true;
                }
            }
            else if (Bridge.isFunction(obj.remove)) {
                return obj.remove(item);
            }

            return false;
        },

        insert: function (obj, index, item) {
            if (Bridge.isArray(obj)) {
                obj.splice(index, 0, item);
            }
            else if (Bridge.isFunction(obj.insert)) {
                 obj.insert(index, item);
            }
        },

        removeAt: function (obj, index) {
            if (Bridge.isArray(obj)) {
                obj.splice(index, 1);
            }
            else if (Bridge.isFunction(obj.removeAt)) {
                obj.removeAt(index);
            }
        }
    };

    Bridge.Array = array;
})();
