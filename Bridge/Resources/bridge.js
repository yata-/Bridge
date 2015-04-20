/*
 * @version   : 1.3.0 - Bridge.NET
 * @author    : Object.NET, Inc. http://www.bridge.net/
 * @date      : 2015-04-20
 * @copyright : Copyright (c) 2008-2015, Object.NET, Inc. (http://www.object.net/). All rights reserved.
 * @license   : See license.txt and https://github.com/bridgedotnet/Bridge.NET/blob/master/LICENSE.
 */


// @source Core.js

(function () {
    var core = {
        global: (function () { return this; })(),

        emptyFn: function () { },

        property : function (scope, name, v) {
            scope[name] = v;

            var rs = name.charAt(0) == "$",
                cap = rs ? name.slice(1) : name;

            scope["get" + cap] = (function (name) {
                return function () {
                    return this[name];
                };
            })(name);

            scope["set" + cap] = (function (name) {
                return function (value) {
                    this[name] = value;
                };
            })(name);
        },

        event: function (scope, name, v) {
            scope[name] = v;

            var rs = name.charAt(0) == "$",
                cap = rs ? name.slice(1) : name;

            scope["add" + cap] = (function (name) {
                return function (value) {
                    this[name] = Bridge.fn.combine(this[name], value);
                };
            })(name);

            scope["remove" + cap] = (function (name) {
                return function (value) {
                    this[name] = Bridge.fn.remove(this[name], value);
                };
            })(name);
        },

        copy: function (to, from, keys, toIf) {
            if (typeof keys === 'string') {
                keys = keys.split(/[,;\s]+/);
            }

            for (var name, i = 0, n = keys ? keys.length : 0; i < n; i++) {
                name = keys[i];

                if (toIf !== true || to[name] === undefined) {
                    if (Bridge.is(from[name], Bridge.ICloneable)) {
                        to[name] = from[name].clone();
                    }
                    else {
                        to[name] = from[name];
                    }
                }
            }

            return to;
        },

        ns: function (ns, scope) {
            var nsParts = ns.split('.');

            if (!scope) {
                scope = Bridge.global;
            }

            for (i = 0; i < nsParts.length; i++) {
                if (typeof scope[nsParts[i]] == 'undefined') {
                    scope[nsParts[i]] = { };
                }

                scope = scope[nsParts[i]];
            }

            return scope;
        },

        ready: function (fn) {
            if (typeof Bridge.global.jQuery !== 'undefined') {
                $(fn);
            } else {
                if (document.readyState == "complete" || document.readyState == "loaded") {
                    fn();
                }
                else {
                    Bridge.on('DOMContentLoaded', document, fn);
                }
            }
        },

        on: function (event, elem, fn) {
            var listenHandler = function (e) {
                var ret = fn.apply(this, arguments);

                if (ret === false) {
                    e.stopPropagation();
                    e.preventDefault();
                }

                return(ret);
            }

            var attachHandler = function () {            
                var ret = fn.call(elem, Bridge.global.event);

                if (ret === false) {
                    Bridge.global.event.returnValue = false;
                    Bridge.global.event.cancelBubble = true;
                }

                return (ret);
            }

            if (elem.addEventListener) {
                elem.addEventListener(event, listenHandler, false);
            }
            else {
                elem.attachEvent("on" + event, attachHandler);
            }
        },

        getHashCode: function (value) {
            if (Bridge.isEmpty(value, true)) {
                throw new Bridge.InvalidOperationException('HashCode cannot be calculated for empty value');
            }

            if (Bridge.isFunction(value.getHashCode)) {
                return value.getHashCode();
            }

            if (Bridge.isBoolean(value)) {
                return obj ? 1 : 0;
            }

            if (Bridge.isDate(value)) {
                return value.valueOf() & 0xFFFFFFFF;
            }

            if (Bridge.isNumber(value)) {            
                value = value.toExponential();

                return parseInt(value.substr(0, value.indexOf('e')).replace('.', ''), 10) & 0xFFFFFFFF;
            }        

            if (Bridge.isString(value)) {
                var hash = 0,
                    i;

                for (i = 0; i < value.length; i++) {
                    hash = (((hash << 5) - hash) + value.charCodeAt(i)) & 0xFFFFFFFF;
                }

                return hash;
            }
        
            return value.$$hashCode || (value.$$hashCode = (Math.random() * 0x100000000) | 0);
        },

        getDefaultValue: function (type) {
            if (Bridge.isFunction(type.getDefaultValue)) {
                return type.getDefaultValue();
            }
            else if (type === Boolean) {
                return false;
            }
            else if (type === Date) {
                return new Date(0);
            }
            else if (type === Number) {
                return 0;
            }

            return null;
        },

        getTypeName: function (type) {
            return type.$$name || (type.toString().match(/^\s*function\s*([^\s(]+)/) || [])[1] || "Object";
        },

        is: function (obj, type, ignoreFn) {
	        if (typeof type == "string") {
                type = Bridge.unroll(type);
	        }

            if (obj == null) {
	            return false;
            }

            if (ignoreFn !== true) {
	            if (Bridge.isFunction(type.$is)) {
	                return type.$is(obj);
	            }

	            if (Bridge.isFunction(type.instanceOf)) {
	                return type.instanceOf(obj);
	            }
            }	  

            if ((obj.constructor == type) || (obj instanceof type)) {
	            return true;
            }

            if (Bridge.isArray(obj) && type == Bridge.IEnumerable) {
                return true;
            }

            if (!type.$$inheritors) {
                return false;
            }

            var inheritors = type.$$inheritors;	  

            for (var i = 0; i < inheritors.length; i++) {
                if (Bridge.is(obj, inheritors[i])) {
	                return true;
	            }
            }

            return false;
	    },
	
        as: function (obj, type) {
	        return Bridge.is(obj, type) ? obj : null;
        },
	
        cast: function (obj, type) {
	        var result = Bridge.as(obj, type);

	        if (result == null) {
	            throw new Bridge.InvalidCastException('Unable to cast type ' + Bridge.getTypeName(obj.constructor) + ' to type ' + Bridge.getTypeName(type));
	        }

	        return result;
        },
	
	    apply: function (obj, values) {
	        var names = Bridge.getPropertyNames(values, false);

	        for (var i = 0; i < names.length; i++) {
	            var name = names[i];

	            if (typeof obj[name] == "function" && typeof values[name] != "function") {
	                obj[name](values[name]);
	            }
	            else {
	                obj[name] = values[name];
	            }
	        }

	        return obj;
        },

	    merge: function (to, from) {
	        var object,
                key,
			    i,
                value,
                toValue,
			    fn;

	        if (Bridge.isArray(from) && Bridge.isFunction(to.add || to.push)) {
	            fn = Bridge.isArray(to) ? to.push : to.add;

	            for (i = 0; i < from.length; i++) {
	                fn.apply(to, from[i]);
	            }
	        }
	        else {
	            for (key in from) {
	                value = from[key];

	                if (typeof to[key] == "function" && typeof value != "function") {
	                    if (key.match(/^\s*get[A-Z]/)) {
	                        Bridge.merge(to[key](), value);
	                    }
	                    else {
	                        to[key](value);
	                    }
	                }
	                else {
	                    var setter = "set" + key.charAt(0).toUpperCase() + key.slice(1);

	                    if (typeof to[setter] == "function" && typeof value != "function") {
	                        to[setter](value);
	                    }
	                    else if (value && value.constructor === Object && to[key]) {
	                        toValue = to[key];
	                        Bridge.merge(toValue, value);
	                    }
	                    else {
	                        to[key] = value;
	                    }
	                }
	            }
	        }

	        return to;
	    },

	    getEnumerator: function (obj) {
	        if (obj && obj.getEnumerator) {
	            return obj.getEnumerator();
	        }

	        if ((Object.prototype.toString.call(obj) === '[object Array]') ||
                (obj && Bridge.isDefined(obj.length))) {
	            return new Bridge.ArrayEnumerator(obj);
	        }
	    
	        throw new Bridge.InvalidOperationException('Cannot create enumerator');
	    },

	    getPropertyNames: function (obj, includeFunctions) {
	        var names = [],
	            name;

	        for (name in obj) {
                if (includeFunctions || typeof obj[name] !== 'function') {
                    names.push(name);
                }
	        }

	        return names;
	    },

	    isDefined: function (value, noNull) {
	        return typeof value !== 'undefined' && (noNull ? value != null : true);
	    },

	    isEmpty: function (value, allowEmpty) {
	        return (value == null) || (!allowEmpty ? value === '' : false) || ((!allowEmpty && Bridge.isArray(value)) ? value.length === 0 : false);
	    },

	    toArray: function (ienumerable) {
	        var i,
	            item,
                len,
	            result = [];

	        if (Bridge.isArray(ienumerable)) {
                for (i = 0, len = ienumerable.length; i < len; ++i) {
                    result.push(ienumerable[i]);
                }
	        }
	        else {
                i = Bridge.getEnumerator(ienumerable);

                while (i.moveNext()) {
                    item = i.getCurrent();
                    result.push(item);
                }
	        }

	        return result;
	    },

        isArray: function (obj) {
            return Object.prototype.toString.call(obj) === '[object Array]';
        },

        isFunction: function (obj) {
            return typeof (obj) === 'function';
        },

        isDate: function (obj) {
            return Object.prototype.toString.call(obj) === '[object Date]';
        },

        isNull: function (value) {
            return (value === null) || (value === undefined);
        },

        isBoolean: function (value) {
            return typeof value === 'boolean';
        },

        isNumber: function (value) {
            return typeof value === 'number' && isFinite(value);
        },

        isString: function (value) {
            return typeof value === 'string';
        },

        unroll: function (value) {
            var d = value.split("."),
                o = Bridge.global[d[0]],
                i;

            for (var i = 1; i < d.length; i++) {
                if (!o) {
                    return null;
                }

                o = o[d[i]];
            }

            return o;
        },

        equals: function (a, b) {
            if (a && Bridge.isFunction(a.equals)) {
                return a.equals(b);
            }
            else if (Bridge.isDate(a) && Bridge.isDate(b)) {
                return a.valueOf() === b.valueOf();
            }
            else if (Bridge.isNull(a) && Bridge.isNull(b)) {
                return true;
            }
        
            return a === b;
        },

        compare: function (a, b) {
            if (!Bridge.isDefined(a, true)) {
                throw new Bridge.NullReferenceException();
            }
            else if (Bridge.isNumber(a) || Bridge.isString(a) || Bridge.isBoolean(a)) {
                return a < b ? -1 : (a > b ? 1 : 0);
            }
            else if (Bridge.isDate(a)) {
                return Bridge.compare(a.valueOf(), b.valueOf());
            }

            return a.compareTo(b);
        },

        equalsT: function (a, b) {
            if (!Bridge.isDefined(a, true)) {
                throw new Bridge.NullReferenceException();
            }
            else if (Bridge.isNumber(a) || Bridge.isString(a) || Bridge.isBoolean(a)) {
                return a === b;
            }
            else if (Bridge.isDate(a)) {
                return a.valueOf() === b.valueOf();
            }
        
            return a.equalsT(b);
        },

        format: function (obj, formatString) {
            if (Bridge.isNumber(obj)) {
                return Bridge.Int.format(obj, formatString);
            }
            else if (Bridge.isDate(obj)) {
                return Bridge.Date.format(obj, formatString);
            }

            return obj.format(formatString);
        },

        getType: function (instance) {
            if (!Bridge.isDefined(instance, true)) {
                throw new Bridge.NullReferenceException('instance is null');
            }

            try {
                return instance.constructor;
            } catch (ex) {
                return Object;
            }
        },

        isLower: function isLower(c) {
            var s = String.fromCharCode(c);

            return s === s.toLowerCase() && s !== s.toUpperCase();
        },

        isUpper: function isUpper(c) {
            var s = String.fromCharCode(c);

            return s !== s.toLowerCase() && s === s.toUpperCase();
        },

        fn: {
            call: function (obj, fnName){
                var args = Array.prototype.slice.call(arguments, 2);

                obj = obj || Bridge.global;

                return obj[fnName].apply(obj, args);
            },

            bind: function (obj, method, args, appendArgs) {
                if (method && method.$method == method && method.$scope == obj) {
                    return method;
                }

                var fn = null;

                if (arguments.length === 2) {
                    fn = function () {
                        return method.apply(obj, arguments)
                    };
                }
                else {
                    fn = function () {
                        var callArgs = args || arguments;

                        if (appendArgs === true) {
                            callArgs = Array.prototype.slice.call(arguments, 0);
                            callArgs = callArgs.concat(args);
                        }
                        else if (typeof appendArgs == 'number') {
                            callArgs = Array.prototype.slice.call(arguments, 0);

                            if (appendArgs === 0) {
                                callArgs.unshift.apply(callArgs, args);
                            }
                            else if (appendArgs < callArgs.length) {
                                callArgs.splice.apply(callArgs, [appendArgs, 0].concat(args));
                            }
                            else {
                                callArgs.push.apply(callArgs, args);
                            }
                        }

                        return method.apply(obj, callArgs);
                    };
                }

                fn.$method = method;
                fn.$scope = obj;

                return fn;
            },

            bindScope: function (obj, method) {
                var fn = function () {
                    var callArgs = Array.prototype.slice.call(arguments, 0);

                    callArgs.unshift.apply(callArgs, [obj]);

                    return method.apply(obj, callArgs);
                };

                fn.$method = method;
                fn.$scope = obj;

                return fn;
            },

            $build: function (handlers) {
                var fn = function () {
                    var list = arguments.callee.$invocationList,
                        result,
                        i,
                        handler;

                    for (i = 0; i < list.length; i++) {
                        handler = list[i];
                        result = handler.apply(null, arguments);
                    }

                    return result;
                };

                fn.$invocationList = handlers ? Array.prototype.slice.call(handlers, 0) : [];

                if (fn.$invocationList.length == 0) {
                    return null;
                }

                return fn;
            },

            combine: function (fn1, fn2) {
                if (!fn1 || !fn2) {
                    return fn1 || fn2;
                }

                var list1 = fn1.$invocationList ? fn1.$invocationList : [fn1],
                    list2 = fn2.$invocationList ? fn2.$invocationList : [fn2];

                return Bridge.fn.$build(list1.concat(list2));
            },

            remove: function (fn1, fn2) {
                if (!fn1 || !fn2) {
                    return fn1 || null;
                }

                var list1 = fn1.$invocationList ? fn1.$invocationList : [fn1],
                    list2 = fn2.$invocationList ? fn2.$invocationList : [fn2],
                    result = [],
                    exclude,
                    i, j;

                for (i = list1.length - 1; i >= 0; i--) {
                    exclude = false;

                    for (j = 0; j < list2.length; j++) {
                        if (list1[i] === list2[j] ||
                            ((list1[i].$method && (list1[i].$method === list2[j].$method)) && (list1[i].$scope && (list1[i].$scope === list2[j].$scope)))) {
                            exclude = true;
                            break;
                        }
                    }

                    if (!exclude) {
                        result.push(list1[i]);
                    }
                }

                result.reverse();

                return Bridge.fn.$build(result);
            }
        }
    };

    Bridge = core;
})();

// @source Nullable.js

(function () {
    var nullable = {
        hasValue: function (obj) {
            return (obj !== null) && (obj !== undefined);
        },

        getValue: function (obj) {
            if (!Bridge.Nullable.hasValue(obj)) {
                throw new Bridge.InvalidOperationException("Nullable instance doesn't have a value.");
            }
            return obj;
        },

        getValueOrDefault: function (obj, defValue) {
            return Bridge.Nullable.hasValue(obj) ? obj : defValue;
        },

        add: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) ? a + b : null;
        },

        band: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) ? a & b : null;
        },

        bor: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) ? a | b : null;
        },

        and: function (a, b) {
            if (a === true && b === true) {
                return true;
            }
            else if (a === false || b === false) {
                return false;
            }

            return null;
        },

        or: function (a, b) {
            if (a === true || b === true) {
                return true;
            }
            else if (a === false && b === false) {
                return false;
            }

            return null;
        },

        div: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) ? a / b : null;
        },

        eq: function (a, b) {
            return !Bridge.hasValue(a) ? !Bridge.hasValue(b) : (a === b);
        },

        xor: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) ? a ^ b : null;
        },

        gt: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) && a > b;
        },

        gte: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) && a >= b;
        },

        neq: function (a, b) {
            return !Bridge.hasValue(a) ? Bridge.hasValue(b) : (a !== b);
        },

        lt: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) && a < b;
        },

        lte: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) && a <= b;
        },

        mod: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) ? a % b : null;
        },

        mul: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) ? a * b : null;
        },

        sl: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) ? a << b : null;
        },

        sr: function (a, b) {
            return Bridge.hasValue(a) && Bridge.hasValue(b) ? a >> b : null;
        },

        sub: function (a, b) {
	        return Bridge.hasValue(a) && Bridge.hasValue(b) ? a - b : null;
        },

        bnot: function (a) {
            return Bridge.hasValue(a) ? ~a : null;
        },

        neg: function (a) {
            return Bridge.hasValue(a) ? -a : null;
        },

        not: function (a) {
	        return Bridge.hasValue(a) ? !a : null;
        },    

        pos: function (a) {
	        return Bridge.hasValue(a) ? +a : null;
        },    

        lift: function () {
	        for (var i = 1; i < arguments.length; i++) {
	            if (!Bridge.hasValue(arguments[i])) {
	                return null;
	            }
	        }

	        return arguments[0].apply(null, Array.prototype.slice.call(arguments, 1));
        }
    };

    Bridge.Nullable = nullable;
    Bridge.hasValue = Bridge.Nullable.hasValue;
})();

// @source String.js

(function () {
    var string = {
        isNullOrWhiteSpace: function (value) {
            return value === null || value.match(/^ *$/) !== null;
        },

        isNullOrEmpty: function (value) {
            return Bridge.isEmpty(value, false);
        },

        fromCharCount: function (c, count) {
            if (count >= 0) {
                return String(Array(count + 1).join(String.fromCharCode(c)));
            }
            else {
                throw new Bridge.ArgumentOutOfRangeException("count", "cannot be less than zero");
            }
        },

        format: function (format) {
            var me = this,
                _formatRe = /(\{+)((\d+|[a-zA-Z_$]\w+(?:\.[a-zA-Z_$]\w+|\[\d+\])*)(?:\,(-?\d*))?(?:\:([^\}]*))?)(\}+)|(\{+)|(\}+)/g,
                args = Array.prototype.slice.call(arguments, 1),
                fn = this.decodeBraceSequence;

            return format.replace(_formatRe, function (m, openBrace, elementContent, index, align, format, closeBrace, repeatOpenBrace, repeatCloseBrace) {
                if (repeatOpenBrace) {
                    return fn(repeatOpenBrace);
                }

                if (repeatCloseBrace) {
                    return fn(repeatCloseBrace);
                }

                if (openBrace.length % 2 == 0 || closeBrace.length % 2 == 0) {
                    return fn(openBrace) + elementContent + fn(closeBrace);
                }

                return fn(openBrace, true) + me.handleElement(index, align, format, args) + fn(closeBrace, true);
            });
        },

        handleElement: function (index, alignment, formatStr, args) {
            var value;

            index = parseInt(index, 10)

            if (index > args.length - 1) {
                throw new Bridge.FormatException("Input string was not in a correct format.");
            }

            value = args[index];

            if (value == null)
            {
                value = "";
            }

            if (formatStr && Bridge.is(value, Bridge.IFormattable)) {            
                value = Bridge.format(value, formatStr);
            }
            else {
                value = "" + value;
            }        

            if (alignment) {
                alignment = parseInt(alignment, 10);
                if (!Bridge.isNumber(alignment)) {
                    alignment = null;
                }
            }

            return Bridge.String.alignString(value.toString(), alignment);
        },

        decodeBraceSequence: function (braces, remove) {        
            return braces.substr(0, (braces.length + (remove ? 0 : 1)) / 2);
        },

        alignString: function (str, alignment, pad, dir) {
            if (!alignment) {
                return str;
            }

            if (!pad) {
                pad = " ";
            }

            if (!dir) {
                dir = alignment < 0 ? 1 : 2;
            }

            alignment = Math.abs(alignment);

            if (alignment + 1 >= str.length) {
                switch (dir) {
                    case 2:
                        str = Array(alignment + 1 - str.length).join(pad) + str;
                        break;

                    case 3:
                        var padlen = alignment - str.length,
                            right = Math.ceil(padlen / 2),
                            left = padlen - right;

                        str = Array(left + 1).join(pad) + str + Array(right + 1).join(pad);
                        break;

                    case 1:
                    default:
                        str = str + Array(alignment + 1 - str.length).join(pad);
                        break;
                }
            }

            return str;
        },

        startsWith: function (str, prefix) {
            if (!prefix.length) {
                return true;
            }

            if (prefix.length > str.length) {
                return false;
            }

            return str.match("^" + prefix) !== null;
        },

        endsWith: function (str, suffix) {
            if (!suffix.length) {
                return true;
            }

            if (suffix.length > str.length) {
                return false;
            }

            return str.match(suffix + "$") !== null;
        },

        contains: function (str, value) {
            return str.indexOf(value) > -1;
        },
        
        indexOfAny: function (str, anyOf) {
            if (anyOf == null) {
                throw new Bridge.ArgumentNullException();
            }

            if (str == null || str == "") {
                return -1;
            }

            var startIndex = (arguments.length > 2) ? arguments[2] : 0;

            if (startIndex < 0) {
                throw new Bridge.ArgumentOutOfRangeException("startIndex", "startIndex cannot be less than zero");
            }

            var length = (arguments.length > 3) ? arguments[3] : str.length - startIndex;

            if (length < 0) {
                throw new Bridge.ArgumentOutOfRangeException("length", "must be non-negative");
            }
           
            if (length > str.length - startIndex) {
                throw new Bridge.ArgumentOutOfRangeException("Index and length must refer to a location within the string");
            }

            var s = str.substr(startIndex, length);

            for (var i = 0; i < anyOf.length; i++) {
                var c = String.fromCharCode(anyOf[i]);

                var index = s.indexOf(c);                
                if (index > -1) {
                    return index + startIndex;
                }
            }

            return -1;
        },

        indexOf: function (str, value) {
            if (value == null) {
                throw new Bridge.ArgumentNullException();
            }
            
            if (str == null || str == "") {
                return -1;
            }

            var startIndex = (arguments.length > 2) ? arguments[2] : 0;

            if (startIndex < 0 || startIndex > str.length) {
                throw new Bridge.ArgumentOutOfRangeException("startIndex", "startIndex cannot be less than zero and must refer to a location within the string");
            }
            
            if (value == "") {
                return startIndex;
            }

            var length = (arguments.length > 3) ? arguments[3] : str.length - startIndex;

            if (length < 0) {
                throw new Bridge.ArgumentOutOfRangeException("length", "must be non-negative");
            }

            if (length > str.length - startIndex) {
                throw new Bridge.ArgumentOutOfRangeException("Index and length must refer to a location within the string");
            }

            var s = str.substr(startIndex, length);

            var index = s.indexOf(value);
            if (index > -1) {
                return index + startIndex;
            }

            return -1;
        },

        compare: function (strA, strB) {
            if (strA == null) {
                return (strB == null) ? 0 : -1;
            }

            if (strB == null) {
                return (strA == null) ? 0 : 1;
            }

            if (arguments.length == 3) {
                if (!arguments[2]) {
                    return strA.toLocaleUpperCase().localeCompare(strB.toLocaleUpperCase());
                }
            }

            return strA.localeCompare(strB);
        }
    };

    Bridge.String = string;
})();
// @source Class.js

(function () {
    var initializing = false;

    // The base Class implementation
    var base = {
        cache: { },

        initCtor: function () {
            var value = arguments[0];

            if (this.$multipleCtors && arguments.length > 0 && typeof value == 'string') {
                value = value === "constructor" ? "$constructor" : value;

                if ((value === "$constructor" || Bridge.String.startsWith(value, "constructor\\$")) && Bridge.isFunction(this[value])) {
                    this[value].apply(this, Array.prototype.slice.call(arguments, 1));

                    return;
                }            
            }

            if (this.$constructor) {
                this.$constructor.apply(this, arguments);
            }
        },

        initConfig: function (extend, base, cfg, statics, scope) {                
            scope.$initMembers = function () {
                var name,
                    config;

                config = Bridge.isFunction(cfg) ? cfg() : cfg;

                if (extend && !statics && base.$initMembers) {
                    base.$initMembers.apply(this, arguments);
                }

                if (config.fields) {
                    for (name in config.fields) {
                        this[name] = config.fields[name];
                    }
                }

                if (config.properties) {
                    for (name in config.properties) {
                        Bridge.property(this, name, config.properties[name]);                        
                    }
                }

                if (config.events) {
                    for (name in config.events) {
                        Bridge.event(this, name, config.events[name]);
                    }
                }
                if (config.alias) {
                    for (name in config.alias) {
                        if (this[name]) {
                            this[name] = this[config.alias[name]];
                        }
                    }
                }

                if (config.init) {
                    config.init.apply(this, arguments);
                }
            };
        },

        // Create a new Class that inherits from this class
        define: function (className, gscope, prop) {
            if (!prop) {
                prop = gscope;
                gscope = Bridge.global;
            }

            if (Bridge.isFunction(prop)) {
                fn = function () {
                    var args = Array.prototype.slice.call(arguments),
                        name,
                        obj,
                        c;
                    args.unshift(className);
                    name = Bridge.Class.genericName.apply(null, args),
                    c = Bridge.Class.cache[name]

                    if (c) {
                        return c;
                    }

                    obj = prop.apply(null, args.slice(1));
                    obj.$cacheName = name;
                    c = Bridge.define(name, obj);                    

                    return  c;
                };

                return Bridge.Class.generic(className, gscope, fn);
            }

            prop = prop || {};
            var extend = prop.$inherits || prop.inherits,
                statics = prop.$statics || prop.statics,
                base = extend ? extend[0].prototype : this.prototype,
                cacheName = prop.$cacheName,
                prototype,
                nameParts,
                scope = prop.$scope || Bridge.global,
                i,
                v,
                ctorCounter,
                isCtor,
                name,                
                fn;

            if (Bridge.isFunction(extend)) {
                extend = null;
            }
            else if (prop.$inherits) {
                delete prop.$inherits;
            }
            else {
                delete prop.inherits;
            }

            if (Bridge.isFunction(statics)) {
                statics = null;
            }
            else if (prop.$statics) {
                delete prop.$statics;
            }
            else {
                delete prop.statics;
            }

            if (prop.$cacheName) {
                delete prop.$cacheName;
            }

            // The dummy class constructor
            function Class() {
                if (!(this instanceof Class)) {
                    var args = Array.prototype.slice.call(arguments, 0),
                        object = Object.create(Class.prototype),
                        result = Class.apply(object, args);

                    return typeof result === 'object' ? result : object;
                }

                // All construction is actually done in the init method
                if (!initializing) {
                    if (this.$initMembers) {
                        this.$initMembers.apply(this, arguments);
                    }

                    this.$$initCtor.apply(this, arguments);
                }
            }

            // Instantiate a base class (but only create the instance,
            // don't run the init constructor)
            initializing = true;
            prototype = extend ? new extend[0]() : new Object();
            initializing = false;

            if (statics) {
                var staticsConfig = statics.$config || statics.config;

                if (staticsConfig && !Bridge.isFunction(staticsConfig)) {
                    Bridge.Class.initConfig(extend, base, staticsConfig, true, Class);

                    if (statics.$config) {
                        delete statics.$config;
                    }
                    else {
                        delete statics.config;
                    }
                }
            }        

            var instanceConfig = prop.$config || prop.config;

            if (instanceConfig && !Bridge.isFunction(instanceConfig)) {
                Bridge.Class.initConfig(extend, base, instanceConfig, false, prop);

                if (prop.$config) {
                    delete prop.$config;
                }
                else {
                    delete prop.config;
                }
            }
            else {
                prop.$initMembers = extend ? function () {
                    base.$initMembers.apply(this, arguments);
                } : function () { };
            }

            prop.$$initCtor = Bridge.Class.initCtor;

            // Copy the properties over onto the new prototype
            ctorCounter = 0;

            for (name in prop) {            
                v = prop[name];
                isCtor = name === "constructor";

                if (Bridge.isFunction(v) && (isCtor || Bridge.String.startsWith(name, "constructor\\$"))) {
                    ctorCounter++;
                }

                prototype[isCtor ? "$constructor" : name] = prop[name];
            }

            if (ctorCounter == 0) {
                prototype.$constructor = extend ? function () {
                    base.$constructor();
                } : function () { };
            }

            if (ctorCounter > 1) {
                prototype.$multipleCtors = true;
            }

            prototype.$$name = className;        

            if (cacheName) {
                Bridge.Class.cache[cacheName] = Class;
            }

            // Populate our constructed prototype object
            Class.prototype = prototype;

            // Enforce the constructor to be what we expect
            Class.prototype.constructor = Class;

            Class.$$name = className;

            if (statics) {
                for (name in statics) {
                    Class[name] = statics[name];
                }
            }

            scope = Bridge.Class.set(scope, className, Class);

            if (!extend) {
                extend = [Object];
            }

            Class.$$inherits = extend;

            for (i = 0; i < extend.length; i++) {
                scope = extend[i];

                if (!scope.$$inheritors) {
                    scope.$$inheritors = [];
                }

                scope.$$inheritors.push(Class);
            }

            fn = function () {
                if (Class.$initMembers) {
                    Class.$initMembers.call(Class);
                }

                if (Class.constructor) {
                    Class.constructor.call(Class);
                }
            };

            if (document.readyState == "complete" || document.readyState == "loaded") {
                fn();
            }
            else {
                setTimeout(fn, 0);
            }            

            return Class;
        },


        addExtend: function (cls, extend) {        
            Array.prototype.push.apply(cls.$$inherits, extend);

            for (i = 0; i < extend.length; i++) {
                scope = extend[i];

                if (!scope.$$inheritors) {
                    scope.$$inheritors = [];
                }

                scope.$$inheritors.push(cls);
            }
        },

        set: function (scope, className, cls) {
            var nameParts = className.split('.');

            for (i = 0; i < (nameParts.length - 1) ; i++) {
                if (typeof scope[nameParts[i]] == 'undefined') {
                    scope[nameParts[i]] = { };
                }

                scope = scope[nameParts[i]];
            }

            scope[nameParts[nameParts.length - 1]] = cls;

            return scope;
        },

        genericName: function () {
            var name = arguments[0];

            for (var i = 1; i < arguments.length; i++) {
                name += '$' + Bridge.getTypeName(arguments[i]);
            }

            return name;
        },

        generic: function (className, scope, fn) {
            if (!fn) {
                fn = scope;
                scope = Bridge.global;
            }

            Bridge.Class.set(scope, className, fn);

            return fn;
        }
    };

    Bridge.Class = base;
    Bridge.define = Bridge.Class.define;
})();

// @source Exception.js

Bridge.define('Bridge.Exception', {
    constructor: function (message, innerException) {
        this.message = message;
        this.innerException = innerException;
        this.errorStack = new Error();
        this.data = new Bridge.Dictionary$2(Object, Object)();
    },

    getMessage: function () {
        return this.message;
    },

    getInnerException: function () {
        return this.innerException;
    },

    getStackTrace: function () {
        return this.errorStack.stack;
    },

    getData: function () {
        return this.data;
    },

    toString: function () {
        return this.getMessage();
    },

    statics: {
        create: function (error) {
            if (Bridge.is(error, Bridge.Exception)) {
                return error;
            }

            if (error instanceof TypeError) {                
                return new Bridge.NullReferenceException(error.message, new Bridge.ErrorException(error));
            }
            else if (error instanceof RangeError) {
                return new Bridge.ArgumentOutOfRangeException(null, error.message, new Bridge.ErrorException(error));
            }
            else if (error instanceof Error) {
                return new Bridge.ErrorException(error);
            }
            else {
                return new Bridge.Exception(error ? error.toString() : null);
            }
        }
    }
});

Bridge.define('Bridge.ErrorException', {
    inherits: [Bridge.Exception],

    constructor: function (error) {
        Bridge.Exception.prototype.$constructor.call(this, error.message);
        this.errorStack = error;
        this.error = error;
    },

    getError: function () {
        return this.error;
    }
});

Bridge.define('Bridge.ArgumentException', {
    inherits: [Bridge.Exception],

    constructor: function (message, paramName, innerException) {
        Bridge.Exception.prototype.$constructor.call(this, message || "Value does not fall within the expected range.", innerException);
        this.paramName = paramName;
    },

    getParamName: function () {
        return this.paramName;
    }
});

Bridge.define('Bridge.ArgumentNullException', {
    inherits: [Bridge.ArgumentException],

    constructor: function (paramName, message, innerException) {
        if (!message) {
            message = 'Value cannot be null.';

            if (paramName) {
                message += '\nParameter name: ' + paramName;
            }
        }

        Bridge.ArgumentException.prototype.$constructor.call(this, message, paramName, innerException);
    }
});

Bridge.define('Bridge.ArgumentOutOfRangeException', {
    inherits: [Bridge.ArgumentException],

    constructor: function (paramName, message, innerException, actualValue) {
        if (!message) {
            message = 'Value is out of range.';

            if (paramName) {
                message += '\nParameter name: ' + paramName;
            }
        }

        Bridge.ArgumentException.prototype.$constructor.call(this, message, paramName, innerException);

        this.actualValue = actualValue;
    },

    getActualValue: function () {
        return this.actualValue;
    }
});

Bridge.define('Bridge.CultureNotFoundException', {
    inherits: [Bridge.ArgumentException],

    constructor: function (paramName, invalidCultureName, message, innerException) {
        if (!message) {
            message = 'Culture is not supported.';

            if (paramName) {
                message += '\nParameter name: ' + paramName;
            }

            if (invalidCultureName) {
                message += '\n' + invalidCultureName + ' is an invalid culture identifier.';
            }            
        }

        Bridge.ArgumentException.prototype.$constructor.call(this, message, paramName, innerException);

        this.invalidCultureName = invalidCultureName;
    },

    getInvalidCultureName: function () {
        return this.invalidCultureName;
    }
});

Bridge.define('Bridge.KeyNotFoundException', {
    inherits: [Bridge.Exception],

    constructor: function (message, innerException) {
        Bridge.Exception.prototype.$constructor.call(this, message || "Key not found.", innerException);
    }
});

Bridge.define('Bridge.ArithmeticException', {
    inherits: [Bridge.Exception],

    constructor: function (message, innerException) {
        Bridge.Exception.prototype.$constructor.call(this, message || "Overflow or underflow in the arithmetic operation.", innerException);
    }
});

Bridge.define('Bridge.DivideByZeroException', {
    inherits: [Bridge.ArithmeticException],

    constructor: function (message, innerException) {
        Bridge.ArithmeticException.prototype.$constructor.call(this, message || "Division by 0.", innerException);
    }
});

Bridge.define('Bridge.OverflowException', {
    inherits: [Bridge.ArithmeticException],

    constructor: function (message, innerException) {
        Bridge.ArithmeticException.prototype.$constructor.call(this, message || "Arithmetic operation resulted in an overflow.", innerException);
    }
});

Bridge.define('Bridge.FormatException', {
    inherits: [Bridge.Exception],

    constructor: function (message, innerException) {
        Bridge.Exception.prototype.$constructor.call(this, message || "Invalid format.", innerException);
    }
});

Bridge.define('Bridge.InvalidCastException', {
    inherits: [Bridge.Exception],

    constructor: function (message, innerException) {
        Bridge.Exception.prototype.$constructor.call(this, message || "The cast is not valid.", innerException);
    }
});

Bridge.define('Bridge.InvalidOperationException', {
    inherits: [Bridge.Exception],

    constructor: function (message, innerException) {
        Bridge.Exception.prototype.$constructor.call(this, message || "Operation is not valid due to the current state of the object.", innerException);
    }
});

Bridge.define('Bridge.NotImplementedException', {
    inherits: [Bridge.Exception],

    constructor: function (message, innerException) {
        Bridge.Exception.prototype.$constructor.call(this, message || "The method or operation is not implemented.", innerException);
    }
});

Bridge.define('Bridge.NotSupportedException', {
    inherits: [Bridge.Exception],

    constructor: function (message, innerException) {
        Bridge.Exception.prototype.$constructor.call(this, message || "Specified method is not supported.", innerException);
    }
});

Bridge.define('Bridge.NullReferenceException', {
    inherits: [Bridge.Exception],

    constructor: function (message, innerException) {
        Bridge.Exception.prototype.$constructor.call(this, message || "Object is null.", innerException);
    }
});

// @source Interfaces.js

Bridge.define('Bridge.IFormattable', {
    statics: {
        $is: function (obj) {
            if (Bridge.isNumber(obj)) {
                return true;
            }

            if (Bridge.isDate(obj)) {
                return true;
            }

            return Bridge.is(obj, Bridge.IFormattable, true);
        }
    }
});

Bridge.define('Bridge.IComparable');

Bridge.define('Bridge.IFormatProvider');

Bridge.define('Bridge.ICloneable');

Bridge.Class.generic('Bridge.IComparable$1', function (T) {
    var $$name = Bridge.Class.genericName('Bridge.IComparable$1', T);

    return Bridge.Class.cache[$$name] || (Bridge.Class.cache[$$name] = Bridge.define($$name));
});

Bridge.Class.generic('Bridge.IEquatable$1', function (T) {
    var $$name = Bridge.Class.genericName('Bridge.IEquatable$1', T);

    return Bridge.Class.cache[$$name] || (Bridge.Class.cache[$$name] = Bridge.define($$name));
});

Bridge.define('Bridge.IPromise');
Bridge.define('Bridge.IDisposable');

// @source Globalization.js

Bridge.define("Bridge.DateTimeFormatInfo", {
    inherits: [Bridge.IFormatProvider, Bridge.ICloneable],

    statics: {
        $allStandardFormats: {
            "d": "shortDatePattern",
            "D": "longDatePattern",
            "f": "longDatePattern shortTimePattern",
            "F": "longDatePattern longTimePattern",
            "g": "shortDatePattern shortTimePattern",
            "G": "shortDatePattern longTimePattern",
            "m": "monthDayPattern",
            "M": "monthDayPattern",
            "o": "roundtripFormat",
            "O": "roundtripFormat",
            "r": "rfc1123",
            "R": "rfc1123",
            "s": "sortableDateTimePattern",
            "t": "shortTimePattern",
            "T": "longTimePattern",
            "u": "universalSortableDateTimePattern",
            "U": "longDatePattern longTimePattern",
            "y": "yearMonthPattern",
            "Y": "yearMonthPattern"
        },

        constructor: function () {
            this.invariantInfo = Bridge.merge(new Bridge.DateTimeFormatInfo(), {
                abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                abbreviatedMonthGenitiveNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
                abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
                amDesignator: "AM",
                dateSeparator: "/",
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                firstDayOfWeek: 0,
                fullDateTimePattern: "dddd, MMMM dd, yyyy h:mm:ss tt",
                longDatePattern: "dddd, MMMM dd, yyyy",
                longTimePattern: "h:mm:ss tt",
                monthDayPattern: "MMMM dd",
                monthGenitiveNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
                pmDesignator: "PM",
                rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
                shortDatePattern: "M/d/yyyy",
                shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                shortTimePattern: "h:mm tt",
                sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                timeSeparator: ":",
                universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                yearMonthPattern: "MMMM, yyyy",
                roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
            });
        }
    },

    getFormat: function (type) {
        switch (type) {
            case Bridge.DateTimeFormatInfo:
                return this;
            default:
                return null;
        }
    },

    getAbbreviatedDayName: function (dayofweek) {
        if (dayofweek < 0 || dayofweek > 6) {
            throw new Bridge.ArgumentOutOfRangeException("dayofweek");
        }

        return this.abbreviatedDayNames[dayofweek];
    },

    getAbbreviatedMonthName: function (month) {
        if (month < 1 || month > 13) {
            throw new Bridge.ArgumentOutOfRangeException("month");
        }

        return this.abbreviatedMonthNames[month - 1];
    },

    getAllDateTimePatterns: function (format, returnNull) {
        var f = Bridge.DateTimeFormatInfo.$allStandardFormats,
            formats,
            names,
            pattern,
            i,
            result = [];

        if (format) {
            if (!f[format]) {
                if (returnNull) {
                    return null;
                }

                throw new Bridge.ArgumentException(null, "format");
            }

            formats = { };
            formats[format] = f[format];
        }
        else {
            formats = f;
        }

        for (f in formats) {
            names = formats[f].split(" ");
            pattern = "";

            for (i = 0; i < names.length; i++) {
                pattern = (i == 0 ? "" : (pattern + " ")) + this[names[i]];
            }

            result.push(pattern);
        }

        return result;
    },

    getDayName: function (dayofweek) {
        if (dayofweek < 0 || dayofweek > 6) {
            throw new Bridge.ArgumentOutOfRangeException("dayofweek");
        }
 
        return this.dayNames[dayofweek];
    },

    getMonthName: function (month) {
        if (month < 1 || month > 13) {
            throw new Bridge.ArgumentOutOfRangeException("month");
        }

        return this.monthNames[month-1];
    },

    getShortestDayName: function (dayOfWeek) {
        if (dayOfWeek < 0 || dayOfWeek > 6) {
            throw new Bridge.ArgumentOutOfRangeException("dayOfWeek");
        }

        return this.shortestDayNames[dayOfWeek];
    },

    clone: function () {
        return Bridge.copy(new Bridge.DateTimeFormatInfo(), this, [
            "abbreviatedDayNames",
            "abbreviatedMonthGenitiveNames",
            "abbreviatedMonthNames",
            "amDesignator",
            "dateSeparator",
            "dayNames",
            "firstDayOfWeek",
            "fullDateTimePattern",
            "longDatePattern",
            "longTimePattern",
            "monthDayPattern",
            "monthGenitiveNames",
            "monthNames",
            "pmDesignator",
            "rfc1123",
            "shortDatePattern",
            "shortestDayNames",
            "shortTimePattern",
            "sortableDateTimePattern",
            "timeSeparator",
            "universalSortableDateTimePattern",
            "yearMonthPattern",
            "roundtripFormat"
        ]);
    }
});

Bridge.define("Bridge.NumberFormatInfo", {
    inherits: [Bridge.IFormatProvider, Bridge.ICloneable],

    statics: {
        constructor: function () {
            this.numberNegativePatterns =  ["(n)", "-n", "- n", "n-", "n -"];
            this.currencyNegativePatterns = ["($n)", "-$n", "$-n", "$n-", "(n$)", "-n$", "n-$", "n$-", "-n $", "-$ n", "n $-", "$ n-", "$ -n", "n- $", "($ n)", "(n $)"];
            this.currencyPositivePatterns = ["$n", "n$", "$ n", "n $"];
            this.percentNegativePatterns = ["-n %", "-n%", "-%n", "%-n", "%n-", "n-%", "n%-", "-% n", "n %-", "% n-", "% -n", "n- %"];
            this.percentPositivePatterns = ["n %", "n%", "%n", "% n"];

            this.invariantInfo = Bridge.merge(new Bridge.NumberFormatInfo(), {
                nanSymbol: "NaN",
                negativeSign: "-",
                positiveSign: "+",
                negativeInfinitySymbol: "-Infinity",
                positiveInfinitySymbol: "Infinity",

                percentSymbol: "%",
                percentGroupSizes: [3],
                percentDecimalDigits: 2,
                percentDecimalSeparator: ".",
                percentGroupSeparator: ",",
                percentPositivePattern: 0,
                percentNegativePattern: 0,

                currencySymbol: "$",
                currencyGroupSizes: [3],
                currencyDecimalDigits: 2,
                currencyDecimalSeparator: ".",
                currencyGroupSeparator: ",",
                currencyNegativePattern: 0,
                currencyPositivePattern: 0,

                numberGroupSizes: [3],
                numberDecimalDigits: 2,
                numberDecimalSeparator: ".",
                numberGroupSeparator: ",",
                numberNegativePattern: 0
            });
        }
    },

    getFormat: function (type) {
        switch (type) {
            case Bridge.NumberFormatInfo:
                return this;
            default:
                return null;
        }
    },

    clone: function () {
        return Bridge.copy(new Bridge.NumberFormatInfo(), this, [
            "nanSymbol",
            "negativeSign",
            "positiveSign",
            "negativeInfinitySymbol",
            "positiveInfinitySymbol",
            "percentSymbol",
            "percentGroupSizes",
            "percentDecimalDigits",
            "percentDecimalSeparator",
            "percentGroupSeparator",
            "percentPositivePattern",
            "percentNegativePattern",
            "currencySymbol",
            "currencyGroupSizes",
            "currencyDecimalDigits",
            "currencyDecimalSeparator",
            "currencyGroupSeparator",
            "currencyNegativePattern",
            "currencyPositivePattern",
            "numberGroupSizes",
            "numberDecimalDigits",
            "numberDecimalSeparator",
            "numberGroupSeparator",
            "numberNegativePattern"
        ]);
    }
});

Bridge.define("Bridge.CultureInfo", {
    inherits: [Bridge.IFormatProvider, Bridge.ICloneable],

    statics: {
        constructor: function () {
            this.cultures = { };
            this.invariantCulture = Bridge.merge(new Bridge.CultureInfo("en-US"), {
                englishName: "English (United States)",
                nativeName: "English (United States)",
                numberFormat: Bridge.NumberFormatInfo.invariantInfo, 
                dateTimeFormat: Bridge.DateTimeFormatInfo.invariantInfo
            });
            this.setCurrentCulture(this.invariantCulture);
        },

        getCurrentCulture: function () {
            return this.currentCulture;
        },

        setCurrentCulture: function (culture) {
            this.currentCulture = culture;
            Bridge.DateTimeFormatInfo.currentInfo = culture.dateTimeFormat;
            Bridge.NumberFormatInfo.currentInfo = culture.numberFormat;
        },

        getCultureInfo: function (name) {
            if (!name) {
                throw new Bridge.ArgumentNullException("name");
            }

            return this.cultures[name];
        },

        getCultures: function () {
            var names = Bridge.getPropertyNames(this.cultures),
                result = [],
                i;

            for (i = 0; i < names.length; i++) {
                result.push(this.cultures[names[i]]);
            }

            return result;
        }
    },

    constructor: function (name) {
        this.name = name;
        Bridge.CultureInfo.cultures[name] = this;
    },

    getFormat:  function (type) {
        switch (type) {
            case Bridge.NumberFormatInfo:
                return this.numberFormat;
            case Bridge.DateTimeFormatInfo:
                return this.dateTimeFormat;
            default:
                return null;
        }
    },

    clone: function () {
        return Bridge.copy(new Bridge.CultureInfo(this.name), this, [
            "englishName",
            "nativeName",
            "numberFormat",
            "dateTimeFormat"
        ]);
    }
});

// @source Integer.js

Bridge.define('Bridge.Int', {
    inherits: [Bridge.IComparable, Bridge.IFormattable],
    statics: {
        instanceOf: function (instance) {
            return typeof(instance) === 'number' && isFinite(instance) && Math.round(instance, 0) == instance;
        },

        getDefaultValue: function () {
            return 0;
        },

        format: function (number, format, provider) {            
            var nf = (provider || Bridge.CultureInfo.getCurrentCulture()).getFormat(Bridge.NumberFormatInfo),
                decimalSeparator = nf.numberDecimalSeparator,
                groupSeparator = nf.numberGroupSeparator,
                match,
                precision,
                groups,
                fs;
            
            if (!isFinite(number)) {
                return Number.NEGATIVE_INFINITY == number ? nf.negativeInfinitySymbol : nf.positiveInfinitySymbol;
            }
            
            if (!format) {
                return this.defaultFormat(number, 0, 0, 15, nf, true);
            }
            
            match = format.match(/^([a-zA-Z])(\d*)$/);

            if (match) {
                fs = match[1].toUpperCase();
                precision = parseInt(match[2], 10);
                precision = precision > 15 ? 15 : precision;

                switch (fs) {
                    case "D":
                        return this.defaultFormat(number, isNaN(precision) ? 1 : precision, 0, 0, nf, true);
                    case "F":
                    case "N":
                        if (isNaN(precision)) {
                            precision = nf.numberDecimalDigits;
                        }
                        return this.defaultFormat(number, 1, precision, precision, nf, fs == "F");
                    case "G":
                    case "E":
                        var exponent = 0,
                            coefficient = Math.abs(number),
                            exponentPrefix = match[1],
                            exponentPrecision = 3,
                            minDecimals, 
                            maxDecimals;

                        while (coefficient >= 10) {
                            coefficient /= 10;
                            exponent++;
                        }

                        while (coefficient < 1) {
                            coefficient *= 10;
                            exponent--;
                        }

                        if (fs == "G") {
                            if (exponent > -5 && (!precision || exponent < precision)) {
                                minDecimals = precision ? precision - (exponent > 0 ? exponent + 1 : 1) : 0;
                                maxDecimals = precision ? precision - (exponent > 0 ? exponent + 1 : 1) : 10;
                                return this.defaultFormat(number, 1, minDecimals, maxDecimals, nf, true);
                            }

                            exponentPrefix = exponentPrefix == "G" ? "E" : "e";
                            exponentPrecision = 2;
                            minDecimals = (precision || 1) - 1;
                            maxDecimals = (precision || 11) - 1;
                        } else {
                            minDecimals = maxDecimals = isNaN(precision) ? 6 : precision;
                        }

                        if (exponent >= 0) {
                            exponentPrefix += nf.positiveSign;
                        }
                        else {
                            exponentPrefix += nf.negativeSign;
                            exponent = -exponent;
                        }

                        if (number < 0) {
                            coefficient *= -1;
                        }

                        return this.defaultFormat(coefficient, 1, minDecimals, maxDecimals, nf) + exponentPrefix + this.defaultFormat(exponent, exponentPrecision, 0, 0, nf, true);
                    case "P":
                        if (isNaN(precision)) {
                            precision = nf.percentDecimalDigits;
                        }

                        return this.defaultFormat(number * 100, 1, precision, precision, nf, false, "percent");
                    case "X":
                        var result = Math.round(number).toString(16);

                        if (match[1] == "X") {
                            result = result.toUpperCase();
                        }
                        
                        precision -= result.length;

                        while (precision-- > 0) {
                            result = "0" + result;
                        }

                        return result;
                    case "C":
                        if (isNaN(precision)) {
                            precision = nf.currencyDecimalDigits;
                        }

                        return this.defaultFormat(number, 1, precision, precision, nf, false, "currency");
                    case "R":
                        return "" + number;
                }
            }

            if (format.indexOf(",.") !== -1 || Bridge.String.endsWith(format, ",")) {
                var count = 0,
                    index = format.indexOf(",.");

                if (index == -1) {
                    index = format.length - 1;
                }

                while (index > -1 && format.charAt(index) == ",") {
                    count++;
                    index--;
                }

                number /= Math.pow(1000, count);
            }

            if (format.indexOf("%") !== -1) {
                number *= 100;
            }

            groups = format.split(";");

            if (number < 0 && groups.length > 1) {
                number *= -1;
                format = groups[1];
            } else {
                format = groups[!number && groups.length > 2 ? 2 : 0];
            }

            return this.customFormat(number, format, nf, !format.match(/^[^\.]*[0#],[0#]/));
        },

        defaultFormat: function (number, minIntLen, minDecLen, maxDecLen, provider, noGroup, name) {
            name = name || "number";

            var nf = (provider || Bridge.CultureInfo.getCurrentCulture()).getFormat(Bridge.NumberFormatInfo),
                str,
                decimalIndex,
                negPattern,
                roundingFactor,
                groupIndex,
                groupSize,
                groups = nf[name + "GroupSizes"],
                decimalPart,
                index,
                done,
                startIndex,
                length,
                part,
                sep,
                buffer = "";        
            
            roundingFactor = Math.pow(10, maxDecLen);
            str = "" + (Math.round(Math.abs(number) * roundingFactor) / roundingFactor);

            decimalIndex = str.indexOf(".");

            if (decimalIndex > 0) {
                decimalPart = nf[name + "DecimalSeparator"] + str.substr(decimalIndex + 1);
                str = str.substr(0, decimalIndex);
            }

            if (str.length < minIntLen) {
                str = Array(minIntLen - str.length + 1).join("0") + str;
            }

            if (decimalPart) {
                if ((decimalPart.length - 1) < minDecLen) {
                    decimalPart += Array(minDecLen - decimalPart.length + 2).join("0");
                }

                if (maxDecLen == 0) {
                    decimalPart = null;
                }
                else if ((decimalPart.length - 1) > maxDecLen) {
                    decimalPart = decimalPart.substr(0, maxDecLen + 1);
                }
            }

            groupIndex = 0;
            groupSize = groups[groupIndex];

            if (str.length < groupSize) {
                buffer = str;

                if (decimalPart) {
                    buffer += decimalPart;
                }
            }
            else {
                index = str.length;
                done = false;
                sep = noGroup ? "" : nf[name + "GroupSeparator"];

                while (!done) {
                    length = groupSize;
                    startIndex = index - length;

                    if (startIndex < 0) {
                        groupSize += startIndex;
                        length += startIndex;
                        startIndex = 0;
                        done = true;
                    }

                    if (!length) {
                        break;
                    }

                    part = str.substr(startIndex, length);

                    if (buffer.length) {
                        buffer = part + sep + buffer;
                    }
                    else {
                        buffer = part;
                    }

                    index -= length;

                    if (groupIndex < groups.length - 1) {
                        groupIndex++;
                        groupSize = groups[groupIndex];
                    }
                }

                if (decimalPart) {
                    buffer += decimalPart;
                }
            }            

            if (number < 0) {
                negPattern = Bridge.NumberFormatInfo[name + "NegativePatterns"][nf[name + "NegativePattern"]];                

                return negPattern.replace("-", nf.negativeSign).replace("%", nf.percentSymbol).replace("$", nf.currencySymbol).replace("n", buffer);
            }
            else if (Bridge.NumberFormatInfo[name + "PositivePatterns"]) {
                negPattern = Bridge.NumberFormatInfo[name + "PositivePatterns"][nf[name + "PositivePattern"]];

                return negPattern.replace("%", nf.percentSymbol).replace("$", nf.currencySymbol).replace("n", buffer);
            }
        
            return buffer;
        },

        customFormat: function (number, format, nf, noGroup) {        
            var digits = 0,
                forcedDigits = -1,
                integralDigits = -1,
                decimals = 0,
                forcedDecimals = -1,
                atDecimals = 0,
                unused = 1,
                c, i, f,
                endIndex,
                roundingFactor,
                decimalIndex,
                isNegative = false,
                name,
                groupCfg,
                buffer = "";

            name = "number";

            if (format.indexOf("%") !== -1) {
                name = "percent";
            }
            else if (format.indexOf("$") !== -1) {
                name = "currency";
            }

            for (i = 0; i < format.length; i++) {
                c = format.charAt(i);
            
                if (c == "'" || c == '"') {                
                    i = format.indexOf(c, i + 1);

                    if (i < 0) {
                        break;
                    }
                } else if (c == "\\") {
                    i++;                
                } else {
                    if (c == "0" || c == "#") {
                        decimals += atDecimals;

                        if (c == "0") {                            
                            if (atDecimals) {
                                forcedDecimals = decimals;
                            } else if (forcedDigits < 0) {
                                forcedDigits = digits;
                            }
                        }

                        digits += !atDecimals;
                    }

                    atDecimals = atDecimals || c == ".";
                }
            }
            forcedDigits = forcedDigits < 0 ? 1 : digits - forcedDigits;

            if (number < 0) {
                isNegative = true;
            }

            roundingFactor = Math.pow(10, decimals);
            number = "" + (Math.round(Math.abs(number) * roundingFactor) / roundingFactor);

            decimalIndex = number.indexOf(".");
            integralDigits = decimalIndex < 0 ? number.length : decimalIndex;            
            i = integralDigits - digits;

            groupCfg = {
                groupIndex: Math.max(integralDigits, forcedDigits),
                sep: noGroup ? "" : nf[name + "GroupSeparator"]
            };

            inString = 0;
        
            for (f = 0; f < format.length; f++) {
                c = format.charAt(f);

                if (c == "'" || c == '"') {
                    endIndex = format.indexOf(c, f + 1);
                
                    buffer += format.substring(f + 1, endIndex < 0 ? format.length : endIndex);
                
                    if (endIndex < 0) {
                        break;
                    }

                    f = endIndex;
                } else if (c == "\\") {
                    buffer += format.charAt(f + 1);
                    f++;
                } else if (c == "#" || c == "0") {
                    groupCfg.buffer = buffer;

                    if (i < integralDigits) {
                        if (i >= 0) {
                            if (unused) {
                                this.addGroup(number.substr(0, i), groupCfg);
                            }

                            this.addGroup(number.charAt(i), groupCfg);
                        } else if (i >= integralDigits - forcedDigits) {
                            this.addGroup("0", groupCfg);
                        }
                        unused = 0;
                    } else if (forcedDecimals-- > 0 || i < number.length) {                        
                        this.addGroup(i >= number.length ? "0" : number.charAt(i), groupCfg);
                    }

                    buffer = groupCfg.buffer;

                    i++;
                } else if (c == ".") {
                    if (number.length > ++i || forcedDecimals > 0) {
                        buffer += nf[name + "DecimalSeparator"];
                    }
                } else if (c !== ",") {
                    buffer += c;
                }
            }

            if (isNegative < 0) {
                buffer = "-" + buffer;
            }
        
            return buffer;
        },

        addGroup: function (value, cfg) {
            var buffer = cfg.buffer,
                sep = cfg.sep,
                groupIndex = cfg.groupIndex;

            for (var i = 0, length = value.length; i < length; i++) {
                buffer += value.charAt(i);

                if (sep && groupIndex > 1 && groupIndex-- % 3 == 1) {
                    buffer += sep;
                }
            }

            cfg.buffer = buffer;
            cfg.groupIndex = groupIndex;
        },

        parseFloat: function (str, provider) {
            if (str == null) {
                throw new Bridge.ArgumentNullException("str");
            }

            var nfInfo = (provider || Bridge.CultureInfo.getCurrentCulture()).getFormat(Bridge.NumberFormatInfo),
                result = parseFloat(str.replace(nfInfo.numberDecimalSeparator, '.'));

            if (isNaN(result) && str !== nfInfo.nanSymbol) {
                if (str == nfInfo.negativeInfinitySymbol) {
                    return Number.NEGATIVE_INFINITY;
                }

                if (str == nfInfo.positiveInfinitySymbol) {
                    return Number.POSITIVE_INFINITY;
                }

                throw new Bridge.FormatException("Input string was not in a correct format.");
            }

            return result;
        },

        tryParseFloat: function (str, provider, result) {
            result.v = 0;

            if (str == null) {
                return false;
            }

            var nfInfo = (provider || Bridge.CultureInfo.getCurrentCulture()).getFormat(Bridge.NumberFormatInfo);

            result.v = parseFloat(str.replace(nfInfo.numberDecimalSeparator, '.'));

            if (isNaN(result.v) && str !== nfInfo.nanSymbol) {
                if (str == nfInfo.negativeInfinitySymbol) {
                    result.v = Number.NEGATIVE_INFINITY;
                    return true;
                }

                if (str == nfInfo.positiveInfinitySymbol) {
                    result.v = Number.POSITIVE_INFINITY;
                    return true;
                }

                return false;
            }

            return true;
        },

        parseInt: function (str, min, max, radix) {            
            if (str == null) {
                throw new Bridge.ArgumentNullException("str");
            }

            if (!/^[+-]?[0-9]+$/.test(str)) {
                throw new Bridge.FormatException("Input string was not in a correct format.");
            }

            var result = parseInt(str, radix || 10);

            if (isNaN(result)) {
                throw new Bridge.FormatException("Input string was not in a correct format.");
            }

            if (result < min || result > max) {
                throw new Bridge.OverflowException();
            }

            return result;
        },

        tryParseInt: function (str, result, min, max, radix) {
            result.v = 0;

            if (!/^[+-]?[0-9]+$/.test(str)) {
                return false;
            }

            result.v = parseInt(str, radix || 10);

            if (result.v < min || result.v > max) {
                return false;
            }

            return true;
        },

        trunc: function (num) {
            if (!Bridge.isNumber(num)) {
                return null;
            }

            return num > 0 ? Math.floor(num) : Math.ceil(num);
        },

        div: function (x, y) {
            if (!Bridge.isNumber(x) || !Bridge.isNumber(y)) {
                return null;
            }

            if (y === 0) {
                throw new Bridge.DivideByZeroException();
            }

            return this.trunc(x / y);
        }
    }
});

Bridge.Class.addExtend(Bridge.Int, [Bridge.IComparable$1(Bridge.Int), Bridge.IEquatable$1(Bridge.Int)]);

// @source Date.js

(function () {
    var date = {
        utcNow:  function () {
            var d = new Date();

            return new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
        },

        today: function () {
            var d = new Date();

            return new Date(d.getFullYear(), d.getMonth(), d.getDate());
        },

        isUseGenitiveForm: function (format, index, tokenLen, patternToMatch) {
	        var i,
                repeat = 0;
        
	        for (i = index - 1; i >= 0 && format[i] != patternToMatch; i--) { 
	        }

            if (i >= 0) {
                while (--i >= 0 && format[i] == patternToMatch) {
                    repeat++;
                }

                if (repeat <= 1) {
                    return true;
                }
            }
	
            for (i = index + tokenLen; i < format.length && format[i] != patternToMatch; i++) {
            }

            if (i < format.length) {
                repeat = 0;

                while (++i < format.length && format[i] == patternToMatch) {
                    repeat++;
                }

                if (repeat <= 1) {
                    return true;
                }
            }
            return false;
        },

        format: function (date, format, provider) {
            var me = this,
                df = (provider || Bridge.CultureInfo.getCurrentCulture()).getFormat(Bridge.DateTimeFormatInfo),        
                year = date.getFullYear(),
                month = date.getMonth(),
                dayOfMonth = date.getDate(),
                dayOfWeek = date.getDay(),
                hour = date.getHours(),
                minute = date.getMinutes(),
                second = date.getSeconds(),
                millisecond = date.getMilliseconds(),
                timezoneOffset = date.getTimezoneOffset(),
                formats;

            format = format || "G";

            if (format.length == 1) {
                formats = df.getAllDateTimePatterns(format, true);
                format = formats ? formats[0] : format;
            }
            else if (format.length == 2 && format.charAt(0) == "%") {
                format = format.charAt(1);
            }

            return format.replace(/(\\.|'[^']*'|"[^"]*"|d{1,4}|M{1,4}|yyyy|yy|y|HH?|hh?|mm?|ss?|tt?|f{1,3}|z{1,3}|\:|\/)/g,
			    function (match, group, index) {
			        var part = match;

			        switch (match) {
			            case "dddd":
			                part = df.dayNames[dayOfWeek];

			                break;
			            case "ddd":
			                part = df.abbreviatedDayNames[dayOfWeek];

			                break;
			            case "dd":
			                part = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;

			                break;
			            case "d":
			                part = dayOfMonth;

			                break;
			            case "MMMM":
			                if (me.isUseGenitiveForm(format, index, 4, "d")) {
			                    part = df.monthGenitiveNames[month];
			                }
			                else {
			                    part = df.monthNames[month];
			                }

			                break;
			            case "MMM":
			                if (me.isUseGenitiveForm(format, index, 3, "d")) {
			                    part = df.abbreviatedMonthGenitiveNames[month];
			                }
			                else {
			                    part = df.abbreviatedMonthNames[month];
			                }

			                break;
			            case "MM":
			                part = (month + 1) < 10 ? "0" + (month + 1) : (month + 1);

			                break;
			            case "M":
			                part = month + 1;

			                break;
			            case "yyyy":
			                part = year;

			                break;
			            case "yy":
			                part = (year % 100).toString();

			                if (part.length == 1) {
			                    part = "0" + part;
			                }

			                break;
			            case "y":
			                part = year % 100;

			                break;
			            case "h":
			            case "hh":
			                part = hour % 12;

			                if (!part) {
			                    part = "12";
			                }
			                else if (match == "hh" && part.length == 1) {
			                    part = "0" + part;
			                }

			                break;
			            case "HH":
			                part = hour.toString();

			                if (part.length == 1) {
			                    part = "0" + part;
			                }

			                break;
			            case "H":
			                part = hour;
			                break;
			            case "mm":
			                part = minute.toString();

			                if (part.length == 1) {
			                    part = "0" + part;
			                }

			                break;
			            case "m":
			                part = minute;

			                break;
			            case "ss":
			                part = second.toString();

			                if (part.length == 1) {
			                    part = "0" + part;
			                }

			                break;
			            case "s":
			                part = second;
			                break;
			            case "t":
			            case "tt":
			                part = (hour < 12) ? df.amDesignator : df.pmDesignator;

			                if (match == "t") {
			                    part = part.charAt(0);
			                }

			                break;
			            case "f":
			            case "ff":
			            case "fff":
			                part = millisecond.toString();

			                if (part.length < 3) {
			                    part = Array(3 - part.length).join("0") + part;
			                }

			                if (match == "ff") {
			                    part = part.substr(0, 2);
			                }
			                else if (match == "f") {
			                    part = part.charAt(0);
			                }

			                break;
			            case "z":
			                part = timezoneOffset / 60;
			                part = ((part >= 0) ? "-" : "+") + Math.floor(Math.abs(part));

			                break;
			            case "zz":
			            case "zzz":
			                part = timezoneOffset / 60;			            
			                part = ((part >= 0) ? "-" : "+") + Bridge.String.alignString(Math.floor(Math.abs(part)).toString(), 2, "0", 2);

			                if (match == "zzz") {
			                    part += df.timeSeparator + Bridge.String.alignString(Math.floor(Math.abs(timezoneOffset % 60)).toString(), 2, "0", 2);
			                }

			                break;
			            case ":":
			                part = df.timeSeparator;

			                break;
			            case "/":
			                part = df.dateSeparator;

			                break;
			            default:
			                part = match.substr(1, match.length - 1 - (match.charAt(0) != "\\"));

			                break;
			        }

			        return part;
			    });
        },

        parse: function (value, provider) {
            var dt = Date.parse(value);
            if (!isNaN(dt)) {
                return new Date(dt);
            }
            return this.parseExact(value, null, provider);
        },    

        parseExact: function (str, format, provider, silent) {
            if (!format) {
                format = ["G", "g", "F", "f", "D", "d", "R", "r", "s", "U", "u", "O", "o", "Y", "y", "M", "m", "T", "t"];
            }

            if (Bridge.isArray(format)) {
                var i,
                    d;

                for (i = 0; i < format.length; i++) {
                    d = Bridge.Date.parseExact(str, format[i], provider, true);

                    if (d != null) {
                        return d;
                    }
                }

                if (silent) {
                    return null;
                }

                throw new Bridge.FormatException("String does not contain a valid string representation of a date and time.");
            }

            var df = (provider || Bridge.CultureInfo.getCurrentCulture()).getFormat(Bridge.DateTimeFormatInfo),
                am = df.amDesignator,
                pm = df.pmDesignator,
                idx = 0,
                index = 0,
                i,
                c,
                token,
                year = 0,
                month = 1,
                date = 1,
                hh = 0,
                mm = 0,
                ss = 0,
                ff = 0,
                tt = "",
                zzh = 0,
                zzm = 0,
                zzi,
                sign,
                neg,
                names,
                name,
                invalid = false,
                inQuotes = false,
                tokenMatched;

            if (str == null) {
                throw new Bridge.ArgumentNullException("str");
            }

            format = format || "G";

            if (format.length == 1) {
                formats = df.getAllDateTimePatterns(format, true);
                format = formats ? formats[0] : format;
            }
            else if (format.length == 2 && format.charAt(0) == "%") {
                format = format.charAt(1);
            }

            while (index < format.length) {            
                c = format.charAt(index);
                token = "";

                if (inQuotes == "\\") {
                    token += c;
                    index++
                }
                else {
                    while ((format.charAt(index) == c) && (index < format.length)) {
                        token += c;
                        index++
                    }
                }

                tokenMatched = true;

                if (!inQuotes) {
                    if (token == "yyyy" || token == "yy" || token == "y") {
                        if (token == "yyyy") {
                            year = this.subparseInt(str, idx, 4, 4);
                        }
                        else if (token == "yy") {
                            year = this.subparseInt(str, idx, 2, 2);
                        }
                        else if (token == "y") {
                            year = this.subparseInt(str, idx, 2, 4);
                        }

                        if (year == null) {
                            invalid = true;
                            break;
                        }

                        idx += year.length;

                        if (year.length == 2) {
                            year = ~~year;
                            year = (year > 30 ? 1900 : 2000) + year;
                        }
                    }
                    else if (token == "MMM" || token == "MMMM") {
                        month = 0;

                        if (token === "MMM") {
                            if (this.isUseGenitiveForm(format, index, 3, "d")) {
                                names = df.abbreviatedMonthGenitiveNames;
                            }
                            else {
                                names = df.abbreviatedMonthNames;
                            }
                        }
                        else {
                            if (this.isUseGenitiveForm(format, index, 4, "d")) {
                                names = df.monthGenitiveNames;
                            }
                            else {
                                names = df.monthNames;
                            }
                        }

                        for (i = 0; i < names.length; i++) {
                            name = names[i];

                            if (str.substring(idx, idx + name.length).toLowerCase() == name.toLowerCase()) {
                                month = (i % 12) + 1;
                                idx += name.length;

                                break;
                            }
                        }

                        if ((month < 1) || (month > 12)) {
                            invalid = true;

                            break;
                        }
                    }
                    else if (token == "MM" || token == "M") {
                        month = this.subparseInt(str, idx, token.length, 2);

                        if (month == null || month < 1 || month > 12) {
                            invalid = true;

                            break;
                        }

                        idx += month.length;
                    }
                    else if (token == "dddd" || token == "ddd") {
                        names = token === "ddd" ? df.abbreviatedDayNames : df.dayNames;

                        for (i = 0; i < names.length; i++) {
                            name = names[i];

                            if (str.substring(idx, idx + name.length).toLowerCase() == name.toLowerCase()) {
                                idx += name.length;

                                break;
                            }
                        }
                    }
                    else if (token == "dd" || token == "d") {
                        date = this.subparseInt(str, idx, token.length, 2);

                        if (date == null || date < 1 || date > 31) {
                            invalid = true;

                            break;
                        }

                        idx += date.length;
                    }
                    else if (token == "hh" || token == "h") {
                        hh = this.subparseInt(str, idx, token.length, 2);

                        if (hh == null || hh < 1 || hh > 12) {
                            invalid = true;

                            break;
                        }

                        idx += hh.length;
                    }
                    else if (token == "HH" || token == "H") {
                        hh = this.subparseInt(str, idx, token.length, 2);

                        if (hh == null || hh < 0 || hh > 23) {
                            invalid = true;

                            break;
                        }

                        idx += hh.length;
                    }
                    else if (token == "mm" || token == "m") {
                        mm = this.subparseInt(str, idx, token.length, 2);

                        if (mm == null || mm < 0 || mm > 59) {
                            return null;
                        }

                        idx += mm.length;
                    }
                    else if (token == "ss" || token == "s") {
                        ss = this.subparseInt(str, idx, token.length, 2);

                        if (ss == null || ss < 0 || ss > 59) {
                            invalid = true;

                            break;
                        }

                        idx += ss.length;
                    }
                    else if (token == "u") {
                        ff = this.subparseInt(str, idx, 1, 7);

                        if (ff == null) {
                            invalid = true;

                            break;
                        }

                        idx += ff.length;

                        if (ff.length > 3) {
                            ff = ff.substring(0, 3);
                        }
                    }
                    else if (token == "fffffff" || token == "ffffff" || token == "fffff" || token == "ffff" || token == "fff" || token == "ff" || token == "f") {
                        ff = this.subparseInt(str, idx, token.length, 7);

                        if (ff == null) {
                            invalid = true;

                            break;
                        }

                        idx += ff.length;

                        if (ff.length > 3) {
                            ff = ff.substring(0, 3);
                        }
                    }
                    else if (token == "t") {
                        if (str.substring(idx, idx + 1).toLowerCase() == am.charAt(0).toLowerCase()) {
                            tt = am;
                        }
                        else if (str.substring(idx, idx + 1).toLowerCase() == pm.charAt(0).toLowerCase()) {
                            tt = pm;
                        }
                        else {
                            invalid = true;

                            break;
                        }

                        idx += 1;
                    }
                    else if (token == "tt") {
                        if (str.substring(idx, idx + 2).toLowerCase() == am.toLowerCase()) {
                            tt = am;
                        }
                        else if (str.substring(idx, idx + 2).toLowerCase() == pm.toLowerCase()) {
                            tt = pm;
                        }
                        else {
                            invalid = true;

                            break;
                        }

                        idx += 2;
                    }
                    else if (token == "z" || token == "zz") {
                        sign = str.charAt(idx);

                        if (sign == "-") {
                            neg = true;
                        }
                        else if (sign == "+") {
                            neg = false;
                        }
                        else {
                            invalid = true;

                            break;
                        }

                        idx++;

                        zzh = this.subparseInt(str, idx, 1, 2);

                        if (zzh == null || zzh > 14) {
                            invalid = true;

                            break;
                        }

                        idx += zzh.length;

                        if (neg) {
                            zzh = -zzh;
                        }
                    }
                    else if (token == "zzz") {
                        name = str.substring(idx, idx + 6);
                        idx += 6;

                        if (name.length != 6) {
                            invalid = true;

                            break;
                        }

                        sign = name.charAt(0);

                        if (sign == "-") {
                            neg = true;
                        }
                        else if (sign == "+") {
                            neg = false;
                        }
                        else {
                            invalid = true;

                            break;
                        }

                        zzi = 1;
                        zzh = this.subparseInt(name, zzi, 1, 2);

                        if (zzh == null || zzh > 14) {
                            invalid = true;

                            break;
                        }

                        zzi += zzh.length;

                        if (neg) {
                            zzh = -zzh;
                        }

                        if (name.charAt(zzi) != df.timeSeparator) {
                            invalid = true;

                            break;
                        }

                        zzi++;

                        zzm = this.subparseInt(name, zzi, 1, 2);

                        if (zzm == null || zzh > 59) {
                            invalid = true;

                            break;
                        }
                    }
                    else {
                        tokenMatched = false;
                    }
                }

                if (inQuotes || !tokenMatched) {
                    name = str.substring(idx, idx + token.length);

                    if ((!inQuotes && ((token == ":" && name != df.timeSeparator) ||
                        (token == "/" && name != df.dateSeparator))) ||
                        (name != token && token != "'" && token != '"' && token != "\\")) {
                        invalid = true;

                        break;
                    }

                    if (inQuotes == "\\") {
                        inQuotes = false;
                    }

                    if (token != "'" && token != '"' && token != "\\") {
                        idx += token.length;
                    }
                    else {
                        if (inQuotes === false) {
                            inQuotes = token;
                        }
                        else {
                            if (inQuotes != token) {
                                invalid = true;
                                break;
                            }
                            inQuotes = false;
                        }
                    }
                }
            }

            if (inQuotes) {
                invalid = true;
            }
        
            if (!invalid) {
                if (idx != str.length) {
                    invalid = true;
                }
                else if (month == 2) {
                    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
                        if (date > 29) {
                            invalid = true;
                        }
                    }
                    else if (date > 28) {
                        invalid = true;
                    }
                }
                else if ((month == 4) || (month == 6) || (month == 9) || (month == 11)) {
                    if (date > 30) {
                        invalid = true;
                    }
                }
            }

            if (invalid) {
                if (silent) {
                    return null;
                }

                throw new Bridge.FormatException("String does not contain a valid string representation of a date and time.");
            }
        
            if (hh < 12 && tt == pm) {
                hh = hh - 0 + 12;
            }
            else if (hh > 11 && tt == am) {
                hh -= 12;
            }

            if (zzh == 0 && zzm == 0) {
                return new Date(year, month - 1, date, hh, mm, ss, ff);
            }

            return new Date(Date.UTC(year, month - 1, date, hh - zzh, mm - zzm, ss, ff));
        },

        subparseInt: function (str, index, min, max) {
            var x,
                token;

            for (x = max; x >= min; x--) {
                token = str.substring(index, index + x);

                if (token.length < min) {
                    return null;
                }

                if (/^\d+$/.test(token)) {
                    return token;
                }
            }

            return null;
        },

        tryParse: function (value, provider, result) {
            result.v = this.parseExact(value, null, provider, true);
        
            if (result.v == null) {
                result.v = new Date(-864e13);

                return false;
            }

            return true;
        },

        tryParseExact: function (value, format, provider, result) {
            result.v = this.parseExact(value, format, provider, true);

            if (result.v == null) {
                result.v = new Date(-864e13);

                return false;
            }

            return true;
        },

        isDaylightSavingTime: function (dt) {
            var temp = Bridge.Date.today();

            temp.setMonth(0);
            temp.setDate(1);

            return temp.getTimezoneOffset() != dt.getTimezoneOffset();
        },

        toUTC: function (date) {
            return new Date(date.getUTCFullYear(), 
                            date.getUTCMonth(), 
                            date.getUTCDate(), 
                            date.getUTCHours(), 
                            date.getUTCMinutes(), 
                            date.getUTCSeconds(), 
                            date.getUTCMilliseconds());
        },

        toLocal: function (date) {
            return new Date(Date.UTC(date.getFullYear(),
                                     date.getMonth(),
                                     date.getDate(),
                                     date.getHours(),
                                     date.getMinutes(),
                                     date.getSeconds(),
                                     date.getMilliseconds()));
        }
    };

    Bridge.Date = date;
})();

// @source TimeSpan.js

Bridge.define('Bridge.TimeSpan', {
    inherits: [Bridge.IComparable],
    statics: {
        fromDays: function (value) {
            return new Bridge.TimeSpan(value * 864e9);
        },

        fromHours: function (value) {
            return new Bridge.TimeSpan(value * 36e9);
        },

        fromMilliseconds: function (value) {
            return new Bridge.TimeSpan(value * 1e4);
        },

        fromMinutes: function (value) {
            return new Bridge.TimeSpan(value * 6e8);
        },

        fromSeconds: function (value) {
            return new Bridge.TimeSpan(value * 1e7);
        },

        fromTicks: function (value) {
            return new Bridge.TimeSpan(value);
        },

        constructor: function () {
            this.zero = new Bridge.TimeSpan(0);
            this.maxValue = new Bridge.TimeSpan(864e13);
            this.minValue = new Bridge.TimeSpan(-864e13);
        },

        getDefaultValue: function () {
            return new Bridge.TimeSpan(0);
        }
    },
    
    constructor: function () {
        this.ticks = 0;

        if (arguments.length == 1) {
            this.ticks = arguments[0];
        }
        else if (arguments.length == 3) {
            this.ticks = (((arguments[0] * 60 + arguments[1]) * 60) + arguments[2]) * 1e7;
        }
        else if (arguments.length == 4) {
            this.ticks = ((((arguments[0] * 24 + arguments[1]) * 60 + arguments[2]) * 60) + arguments[3]) * 1e7;
        }
        else if (arguments.length == 5) {
            this.ticks = (((((arguments[0] * 24 + arguments[1]) * 60 + arguments[2]) * 60) + arguments[3]) * 1e3 + arguments[4]) * 1e4;
        }
    },

    getTicks: function () {
        return this.ticks;
    },

    getDays: function () {
        return this.ticks / 864e9 | 0;
    },

    getHours: function () {
        return this.ticks / 36e9 % 24 | 0;
    },

    getMilliseconds: function () {
        return this.ticks / 1e4 % 1e3 | 0;
    },

    getMinutes: function () {
        return this.ticks / 6e8 % 60 | 0;
    },

    getSeconds: function () {
        return this.ticks / 1e7 % 60 | 0;
    },

    getTotalDays: function () {
        return this.ticks / 864e9;
    },

    getTotalHours: function () {
        return this.ticks / 36e9;
    },

    getTotalMilliseconds: function () {
        return this.ticks / 1e4;
    },

    getTotalMinutes: function () {
        return this.ticks / 6e8;
    },

    getTotalSeconds: function () {
        return this.ticks / 1e7;
    },

    get12HourHour: function () {
        return (this.getHours() > 12) ? this.getHours() - 12 : (this.getHours() === 0) ? 12 : this.getHours();
    },

    add: function (ts) {
        return new Bridge.TimeSpan(this.ticks + ts.ticks);
    },

    subtract: function (ts) {
        return new Bridge.TimeSpan(this.ticks - ts.ticks);
    },

    duration: function () {
        return new Bridge.TimeSpan(Math.abs(this.ticks));
    },

    negate: function () {
        return new Bridge.TimeSpan(-this.ticks);
    },

    compareTo: function (other) {
        return this.ticks < other.ticks ? -1 : (this.ticks > other.ticks ? 1 : 0);
    },

    equals: function (other) {
        return other.ticks === this.ticks;
    },

    format: function (formatStr, provider) {
        return this.format(formatStr, provider);
    },

    toString: function (formatStr, provider) {
        var ticks = this.ticks,
            result = "",
            me = this,
            dtInfo = (provider || Bridge.CultureInfo.getCurrentCulture()).getFormat(Bridge.DateTimeFormatInfo),
            format = function (t, n) {
                return Bridge.String.alignString((t | 0).toString(), n || 2, "0", 2);
            };

        if (formatStr) {            
            return formatStr.replace(/dd?|HH?|hh?|mm?|ss?|tt?/g,
                function (formatStr) {                    
                    switch (formatStr) {
                        case "d":
                            return me.getDays();
                        case "dd":
                            return format(me.getDays());
                        case "H":
                            return me.getHours();
                        case "HH":
                            return format(me.getHours());
                        case "h":
                            return me.get12HourHour();
                        case "hh":
                            return format(me.get12HourHour());
                        case "m":
                            return me.getMinutes();
                        case "mm":
                            return format(me.getMinutes());
                        case "s":
                            return me.getSeconds();
                        case "ss":
                            return format(me.getSeconds());
                        case "t":
                            return ((me.getHours() < 12) ? dtInfo.amDesignator : dtInfo.pmDesignator).substring(0, 1);
                        case "tt":
                            return (me.getHours() < 12) ? dtInfo.amDesignator : dtInfo.pmDesignator;
                    }
                }
            );
        }        
        
        if (Math.abs(ticks) >= 864e9) {
            result += format(ticks / 864e9) + ".";
            ticks %= 864e9;
        }

        result += format(ticks / 36e9) + ":";
        ticks %= 36e9;
        result += format(ticks / 6e8 | 0) + ':';
        ticks %= 6e8;
        result += format(ticks / 1e7);
        ticks %= 1e7;

        if (ticks > 0) {
            result += "." + format(ticks, 7);
        }

        return result;
    }
});

Bridge.Class.addExtend(Bridge.TimeSpan, [Bridge.IComparable$1(Bridge.TimeSpan), Bridge.IEquatable$1(Bridge.TimeSpan)]);

// @source Text/StringBuilder.js

Bridge.define('Bridge.Text.StringBuilder', {
    constructor: function () {
        this.buffer = [],
        this.capacity = 16;

        if (arguments.length == 1) {
            this.append(arguments[0]);
        }
        else if (arguments.length == 2) {
            this.append(arguments[0]);
            this.setCapacity(arguments[1]);
        }
        else if (arguments.length == 3) {
            this.append(arguments[0], arguments[1], arguments[2]);
        }
    },

    getLength: function () {
        if (this.buffer.length < 2) {
            return this.buffer[0] ? this.buffer[0].length : 0;
        }

        var s = this.buffer.join('');

        this.buffer = [];
        this.buffer[0] = s;

        return s.length;
    },

    getCapacity: function () {
        var length = this.getLength();

        return (this.capacity > length) ? this.capacity : length;
    },

    setCapacity: function (value) {
        var length = this.getLength();

        if (value > length) {
            this.capacity = value;
        }
    },

    toString: function () {
        var s = this.buffer.join('');

        this.buffer = [];    
        this.buffer[0] = s;

        if (arguments.length == 2) {
            var startIndex = arguments[0],
                length = arguments[1];
            
            this.checkLimits(s, startIndex, length);

            return s.substr(startIndex, length);
        }

        return s;
    },

    append: function (value) {
        if (value == null) {
            return this;
        }

        if (arguments.length == 2) {
            // append a char repeated count times
            var count = arguments[1];

            if (count == 0) {
                return this;
            }
            else if (count < 0) {
                throw new Bridge.ArgumentOutOfRangeException("count", "cannot be less than zero");
            }

            value = Array(count + 1).join(value).toString();
        }
        else if (arguments.length == 3) {
            // append a (startIndex, count) substring of value
            var startIndex = arguments[1],
                count = arguments[2];
            
            if (count == 0) {
                return this;
            }

            this.checkLimits(value, startIndex, count);
            value = value.substr(startIndex, count);
        }

        this.buffer[this.buffer.length] = value;

        return this;
    },

    appendFormat: function (format) {
        return this.append(Bridge.String.format.apply(Bridge.String, arguments));
    },

    clear: function () {
        this.buffer = [];

        return this;
    },

    appendLine: function () {
        if (arguments.length == 1) {
            this.append(arguments[0]);
        }

        return this.append("\r\n");
    },

    equals: function (sb) {
        if (sb == null) {
            return false;
        }

        if (sb == this) {
            return true;
        }

        return this.toString() === sb.toString();
    },

    remove: function (startIndex, length) {
        var s = this.buffer.join('');

        this.checkLimits(s, startIndex, length);

        if (s.length == length && startIndex == 0) {
            // Optimization.  If we are deleting everything  
            return this.clear();
        }

        if (length > 0) {
            this.buffer = [];
            this.buffer[0] = s.substring(0, startIndex);
            this.buffer[1] = s.substring(startIndex + length, s.length);
        }

        return this;
    },

    insert: function (index, value) {
        if (value == null) {
            return this;
        }

        if (arguments.length == 3) {
            // insert value repeated count times 
            var count = arguments[2];

            if (count == 0) {
                return this;
            }
            else if (count < 0) {
                throw new Bridge.ArgumentOutOfRangeException("count", "cannot be less than zero");
            }

            value = Array(count + 1).join(value).toString();
        }

        var s = this.buffer.join('');
        this.buffer = [];

        if (index < 1) {
            this.buffer[0] = value;
            this.buffer[1] = s;
        }
        else if (index >= s.length) {
            this.buffer[0] = s;
            this.buffer[1] = value;
        }
        else {
            this.buffer[0] = s.substring(0, index);
            this.buffer[1] = value;
            this.buffer[2] = s.substring(index, s.length);
        }

        return this;
    },

    replace: function (oldValue, newValue) {
        var r = new RegExp(oldValue, 'g'),
            s = this.buffer.join('');

        this.buffer = [];

        if (arguments.length == 4) {
            var startIndex = arguments[2],
                count = arguments[3],
                b = s.substr(startIndex, count);

            this.checkLimits(s, startIndex, count);

            this.buffer[0] = s.substring(0, startIndex);
            this.buffer[1] = b.replace(r, newValue);
            this.buffer[2] = s.substring(startIndex + count, s.length);
        }
        else {
            this.buffer[0] = s.replace(r, newValue);
        }

        return this;
    },

    checkLimits: function (value, startIndex, length) {
        if (length < 0) {
            throw new Bridge.ArgumentOutOfRangeException("length", "must be non-negative");
        }

        if (startIndex < 0) {
            throw new Bridge.ArgumentOutOfRangeException("startIndex", "startIndex cannot be less than zero");
        }

        if (length > value.length - startIndex) {
            throw new Bridge.ArgumentOutOfRangeException("Index and length must refer to a location within the string");
        }
    }
});
// @source Browser.js

(function () {
    var check = function (regex) {
        return regex.test(navigator.userAgent);
    },

    isStrict = document.compatMode == 'CSS1Compat',

    version = function (is, regex) {
        var m;

        return (is && (m = regex.exec(navigator.userAgent))) ? parseFloat(m[1]) : 0;
    },

    docMode = document.documentMode,
    isOpera = check(/opera/),
    isOpera10_5 = isOpera && check(/version\/10\.5/),
    isChrome = check(/\bchrome\b/),
    isWebKit = check(/webkit/),
    isSafari = !isChrome && check(/safari/),
    isSafari2 = isSafari && check(/applewebkit\/4/),
    isSafari3 = isSafari && check(/version\/3/),
    isSafari4 = isSafari && check(/version\/4/),
    isSafari5_0 = isSafari && check(/version\/5\.0/),
    isSafari5 = isSafari && check(/version\/5/),
    isIE = !isOpera && (check(/msie/) || check(/trident/)),
    isIE7 = isIE && ((check(/msie 7/) && docMode != 8 && docMode != 9 && docMode != 10) || docMode == 7),
    isIE8 = isIE && ((check(/msie 8/) && docMode != 7 && docMode != 9 && docMode != 10) || docMode == 8),
    isIE9 = isIE && ((check(/msie 9/) && docMode != 7 && docMode != 8 && docMode != 10) || docMode == 9),
    isIE10 = isIE && ((check(/msie 10/) && docMode != 7 && docMode != 8 && docMode != 9) || docMode == 10),
    isIE11 = isIE && ((check(/trident\/7\.0/) && docMode != 7 && docMode != 8 && docMode != 9 && docMode != 10) || docMode == 11),
    isIE6 = isIE && check(/msie 6/),
    isGecko = !isWebKit && !isIE && check(/gecko/),
    isGecko3 = isGecko && check(/rv:1\.9/),
    isGecko4 = isGecko && check(/rv:2\.0/),
    isGecko5 = isGecko && check(/rv:5\./),
    isGecko10 = isGecko && check(/rv:10\./),
    isFF3_0 = isGecko3 && check(/rv:1\.9\.0/),
    isFF3_5 = isGecko3 && check(/rv:1\.9\.1/),
    isFF3_6 = isGecko3 && check(/rv:1\.9\.2/),
    isWindows = check(/windows|win32/),
    isMac = check(/macintosh|mac os x/),
    isLinux = check(/linux/),
    scrollbarSize = null,
    chromeVersion = version(true, /\bchrome\/(\d+\.\d+)/),
    firefoxVersion = version(true, /\bfirefox\/(\d+\.\d+)/),
    ieVersion = version(isIE, /msie (\d+\.\d+)/),
    operaVersion = version(isOpera, /version\/(\d+\.\d+)/),
    safariVersion = version(isSafari, /version\/(\d+\.\d+)/),
    webKitVersion = version(isWebKit, /webkit\/(\d+\.\d+)/),
    isSecure = Bridge.global.location ? /^https/i.test(Bridge.global.location.protocol) : false,
    isiPhone = /iPhone/i.test(navigator.platform),
    isiPod = /iPod/i.test(navigator.platform),
    isiPad = /iPad/i.test(navigator.userAgent),
    isBlackberry = /Blackberry/i.test(navigator.userAgent),
    isAndroid = /Android/i.test(navigator.userAgent),
    isDesktop = isMac || isWindows || (isLinux && !isAndroid),
    isTablet = isiPad,
    isPhone = !isDesktop && !isTablet;

    var browser = {
        isStrict: isStrict,
        isIEQuirks: isIE && (!isStrict && (isIE6 || isIE7 || isIE8 || isIE9)),
        isOpera: isOpera,
        isOpera10_5: isOpera10_5,
        isWebKit: isWebKit,
        isChrome: isChrome,
        isSafari: isSafari,
        isSafari3: isSafari3,
        isSafari4: isSafari4,
        isSafari5: isSafari5,
        isSafari5_0: isSafari5_0,
        isSafari2: isSafari2,
        isIE: isIE,
        isIE6: isIE6,
        isIE7: isIE7,
        isIE7m: isIE6 || isIE7,
        isIE7p: isIE && !isIE6,
        isIE8: isIE8,
        isIE8m: isIE6 || isIE7 || isIE8,
        isIE8p: isIE && !(isIE6 || isIE7),
        isIE9: isIE9,
        isIE9m: isIE6 || isIE7 || isIE8 || isIE9,
        isIE9p: isIE && !(isIE6 || isIE7 || isIE8),
        isIE10: isIE10,
        isIE10m: isIE6 || isIE7 || isIE8 || isIE9 || isIE10,
        isIE10p: isIE && !(isIE6 || isIE7 || isIE8 || isIE9),
        isIE11: isIE11,
        isIE11m: isIE6 || isIE7 || isIE8 || isIE9 || isIE10 || isIE11,
        isIE11p: isIE && !(isIE6 || isIE7 || isIE8 || isIE9 || isIE10),
        isGecko: isGecko,
        isGecko3: isGecko3,
        isGecko4: isGecko4,
        isGecko5: isGecko5,
        isGecko10: isGecko10,
        isFF3_0: isFF3_0,
        isFF3_5: isFF3_5,
        isFF3_6: isFF3_6,
        isFF4: 4 <= firefoxVersion && firefoxVersion < 5,
        isFF5: 5 <= firefoxVersion && firefoxVersion < 6,
        isFF10: 10 <= firefoxVersion && firefoxVersion < 11,
        isLinux: isLinux,
        isWindows: isWindows,
        isMac: isMac,
        chromeVersion: chromeVersion,
        firefoxVersion: firefoxVersion,
        ieVersion: ieVersion,
        operaVersion: operaVersion,
        safariVersion: safariVersion,
        webKitVersion: webKitVersion,
        isSecure: isSecure,
        isiPhone: isiPhone,
        isiPod: isiPod,
        isiPad: isiPad,
        isBlackberry: isBlackberry,
        isAndroid: isAndroid,
        isDesktop: isDesktop,
        isTablet: isTablet,
        isPhone: isPhone,
        iOS: isiPhone || isiPad || isiPod,
        standalone: Bridge.global.navigator ? !!Bridge.global.navigator.standalone : false
    };

    Bridge.Browser = browser;
})();

// @source /Collections/Interfaces.js

Bridge.define('Bridge.IEnumerable');
Bridge.define('Bridge.IEnumerator');
Bridge.define('Bridge.IEqualityComparer');
Bridge.define('Bridge.ICollection', {
    inherits: [Bridge.IEnumerable]
});

Bridge.Class.generic('Bridge.IEnumerator$1', function (T) {
    var $$name = Bridge.Class.genericName('Bridge.IEnumerator$1', T);

    return Bridge.Class.cache[$$name] || (Bridge.Class.cache[$$name] = Bridge.define($$name, {
        inherits: [Bridge.IEnumerator]
    }));
});

Bridge.Class.generic('Bridge.IEnumerable$1', function (T) {
    var $$name = Bridge.Class.genericName('Bridge.IEnumerable$1', T);

    return Bridge.Class.cache[$$name] || (Bridge.Class.cache[$$name] = Bridge.define($$name, {
        inherits: [Bridge.IEnumerable]
    }));
});

Bridge.Class.generic('Bridge.ICollection$1', function (T) {
    var $$name = Bridge.Class.genericName('Bridge.ICollection$1', T);

    return Bridge.Class.cache[$$name] || (Bridge.Class.cache[$$name] = Bridge.define($$name, {
        inherits: [Bridge.IEnumerable$1(T)]
    }));
});

Bridge.Class.generic('Bridge.IEqualityComparer$1', function (T) {
    var $$name = Bridge.Class.genericName('Bridge.IEqualityComparer$1', T);

    return Bridge.Class.cache[$$name] || (Bridge.Class.cache[$$name] = Bridge.define($$name, {
        inherits: [Bridge.IEqualityComparer]
    }));
});

Bridge.Class.generic('Bridge.IDictionary$2', function (TKey, TValue) {
    var $$name = Bridge.Class.genericName('Bridge.IDictionary$2', TKey, TValue);

    return Bridge.Class.cache[$$name] || (Bridge.Class.cache[$$name] = Bridge.define($$name, {
        inherits: [Bridge.IEnumerable$1(Bridge.KeyValuePair$2(TKey, TValue))]
    }));
});

Bridge.Class.generic('Bridge.IList$1', function (T) {
    var $$name = Bridge.Class.genericName('Bridge.IList$1', T);

    return Bridge.Class.cache[$$name] || (Bridge.Class.cache[$$name] = Bridge.define($$name, {
        inherits: [Bridge.ICollection$1(T)]
    }));
});

Bridge.Class.generic('Bridge.IComparer$1', function (T) {
    var $$name = Bridge.Class.genericName('Bridge.IComparer$1', T);

    return Bridge.Class.cache[$$name] || (Bridge.Class.cache[$$name] = Bridge.define($$name, {        
    }));
});
// @source /Collections/CustomEnumerator.js

Bridge.define("Bridge.CustomEnumerator", {
    inherits: [Bridge.IEnumerator],

    constructor: function (moveNext, getCurrent, reset, dispose, scope) {
        this.$moveNext = moveNext;
        this.$getCurrent = getCurrent;
        this.$dispose = dispose;
        this.$reset = reset;
        this.scope = scope;
    },

    moveNext: function () {
        try {
            return this.$moveNext.call(this.scope);
        }
        catch (ex) {
            this.dispose.call(this.scope);

            throw ex;
        }
    },

    getCurrent: function () {
        return this.$getCurrent.call(this.scope);
    },

    reset: function () {
        if (this.$reset) {
            this.$reset.call(this.scope);
        }
    },

    dispose: function () {
        if (this.$dispose) {
            this.$dispose.call(this.scope);
        }
    }
});

// @source /Collections/ArrayEnumerator.js

Bridge.define('Bridge.ArrayEnumerator', {
    constructor: function (array) {
        this.array = array;
        this.reset();
    },

    moveNext: function () {
        this.index++;

        return this.index < this.array.length;
    },

    getCurrent: function () {
        return this.array[this.index];
    },

    reset: function () {
        this.index = -1;
    },

    dispose: Bridge.emptyFn
});

// @source /Collections/Comparer.js

Bridge.Class.generic('Bridge.EqualityComparer$1', function (T) {
    var $$name = Bridge.Class.genericName('Bridge.EqualityComparer$1', T);

    return Bridge.Class.cache[$$name] || (Bridge.Class.cache[$$name] = Bridge.define($$name, {
        inherits: [Bridge.IEqualityComparer$1(T)],

        equals: function (x, y) {
            if (!Bridge.isDefined(x, true)) {
                return !Bridge.isDefined(y, true);
            }
            else {
                return Bridge.isDefined(y, true) ? Bridge.equals(x, y) : false;
            }
        },

        getHashCode: function (obj) {
            return Bridge.isDefined(obj, true) ? Bridge.getHashCode(obj) : 0;
        }
    }));
});

Bridge.EqualityComparer$1.$default = new Bridge.EqualityComparer$1(Object)();

Bridge.Class.generic('Bridge.Comparer$1', function (T) {
    var $$name = Bridge.Class.genericName('Bridge.Comparer$1', T);

    return Bridge.Class.cache[$$name] || (Bridge.Class.cache[$$name] = Bridge.define($$name, {
        inherits: [Bridge.IComparer$1(T)],

        constructor: function(fn) {
            this.fn = fn;
        },

        compare: function (x, y) {
            return this.fn(x, y);
        }
    }));
});

Bridge.Comparer$1.$default = new Bridge.Comparer$1(Object)(function(x, y) {
    if (!Bridge.hasValue(x)) {
        return !Bridge.hasValue(y) ? 0 : -1;
    } else if (!Bridge.hasValue(y)) {
        return 1;
    }

    return Bridge.compare(a, b);
});
// @source /Collections/Dictionary.js

Bridge.Class.generic('Bridge.KeyValuePair$2', function (TKey, TValue) {
    var $$name = Bridge.Class.genericName('Bridge.KeyValuePair$2', TKey, TValue);

    return Bridge.Class.cache[$$name] || (Bridge.Class.cache[$$name] = Bridge.define($$name, {
        constructor: function (key, value) {
            this.key = key;
            this.value = value;
        }
    }));
});

Bridge.Class.generic('Bridge.Dictionary$2', function (TKey, TValue) {
    var $$name = Bridge.Class.genericName('Bridge.Dictionary$2', TKey, TValue);

    return Bridge.Class.cache[$$name] || (Bridge.Class.cache[$$name] = Bridge.define($$name, {
        inherits: [Bridge.IDictionary$2(TKey, TValue)],

        constructor: function (obj, comparer) {
            this.comparer = comparer || Bridge.EqualityComparer$1.$default;
            this.clear();

            if (Bridge.is(obj, Bridge.Dictionary$2(TKey, TValue))) {
                var e = Bridge.getEnumerator(obj),
                    c;

                while (e.moveNext()) {
                    c = e.getCurrent();
                    this.add(c.key, c.value);
                }
            }
            else if (Object.prototype.toString.call(obj) === '[object Object]') {
                var names = Bridge.getPropertyNames(obj),
                    name;

                for (var i = 0; i < names.length; i++) {
                    name = names[i];
                    this.add(name, obj[name]);
                }
            }  
        },

        getKeys: function () {
            return new Bridge.DictionaryCollection$1(TKey)(this, true);
        },

        getValues: function () {
            return new Bridge.DictionaryCollection$1(TKey)(this, false);
        },

        clear: function () {
            this.entries = { };
            this.count = 0;
        },

        findEntry: function (key) {
            var hash = this.comparer.getHashCode(key),
                entries,
                i;

            if (Bridge.isDefined(this.entries[hash])) {
                entries = this.entries[hash];

                for (i = 0; i < entries.length; i++) {
                    if (this.comparer.equals(entries[i].key, key)) {
                        return entries[i];
                    }
                }
            }
        },

        containsKey: function (key) {
            return !!this.findEntry(key);
        },

        containsValue: function (value) {
            var e, i;

            for (e in this.entries) {
                if (this.entries.hasOwnProperty(e)) {
                    var entries = this.entries[e];

                    for (i = 0; i < entries.length; i++) {
                        if (this.comparer.equals(entries[i].value, value)) {
                            return true;
                        }
                    }
                }
            }

            return false;
        },

        get: function (key) {
            var entry = this.findEntry(key);

            if (!entry) {
                throw new Bridge.KeyNotFoundException('Key ' + key + ' does not exist.');
            }

            return entry.value;
        },

        set: function (key, value, add) {
            var entry = this.findEntry(key),
                hash;

            if (entry) {
                if (add) {
                    throw new Bridge.ArgumentException('Key ' + key + ' already exists.');
                }

                entry.value = value;
                return;
            }

            hash = this.comparer.getHashCode(key);
            entry = new Bridge.KeyValuePair$2(TKey, TValue)(key, value);

            if (this.entries[hash]) {
                this.entries[hash].push(entry);
            }
            else {
                this.entries[hash] = [entry];
            }            

            this.count++;
        },

        add: function (key, value) {
            this.set(key, value, true);
        },

        remove: function (key) {
            var hash = this.comparer.getHashCode(key),
                entries,
                i;

            if (!this.entries[hash]) {
                return false;
            }

            entries = this.entries[hash];

            for (i = 0; i < entries.length; i++) {
                if (this.comparer.equals(entries[i].key, key)) {
                    entries.splice(i, 1);

                    if (entries.length == 0) {
                        delete this.entries[hash];
                    }

                    this.count--;

                    return true;
                }
            }

            return false;
        },

        getCount: function () {
            return this.count;
        },

        getComparer: function () {
            return this.comparer;
        },

        tryGetValue: function (key, value) {
            var entry = this.findEntry(key);

            value.v = entry ? entry.value : Bridge.getDefaultValue(TValue);

            return !!entry;
        },

        getCustomEnumerator: function (fn) {
            var hashes = Bridge.getPropertyNames(this.entries),
                hashIndex = -1,
                keyIndex;

            return new Bridge.CustomEnumerator(function () {
                if (hashIndex < 0 || keyIndex >= (this.entries[hashes[hashIndex]].length - 1)) {
                    keyIndex = -1;
                    hashIndex++;
                }

                if (hashIndex >= hashes.length) {
                    return false;
                }
                    
                keyIndex++;

                return true;
            }, function () {
                return fn(this.entries[hashes[hashIndex]][keyIndex]);
            }, function () {
                hashIndex = -1;
            }, null, this);
        },

        getEnumerator: function () {
            return new Bridge.DictionaryEnumerator(this.entries);
        }
    }));
});

Bridge.Class.generic('Bridge.DictionaryCollection$1', function (T) {
    var $$name = Bridge.Class.genericName('Bridge.DictionaryCollection$1', T);

    return Bridge.Class.cache[$$name] || (Bridge.Class.cache[$$name] = Bridge.define($$name, {
        inherits: [Bridge.ICollection$1(T)],

        constructor: function (dictionary, keys) {
            this.dictionary = dictionary;
            this.keys = keys;
        },

        getCount: function () {
            return this.dictionary.getCount();
        },

        getEnumerator: function () {
            return this.dictionary.getCustomEnumerator(this.keys ? function (e) {
                return e.key;
            } : function (e) {
                return e.value;
            });
        },

        contains: function (value) {
            return this.keys ? this.dictionary.containsKey(value) : this.dictionary.containsValue(value);
        },

        add: function (v) {
            throw new Bridge.NotSupportedException();
        },
        
        clear: function () {
            throw new Bridge.NotSupportedException();
        },

        remove: function () {
            throw new Bridge.NotSupportedException();
        }
    }));
});

// @source /Collections/List.js

Bridge.Class.generic('Bridge.List$1', function (T) {
    var $$name = Bridge.Class.genericName('Bridge.List$1', T);

    return Bridge.Class.cache[$$name] || (Bridge.Class.cache[$$name] = Bridge.define($$name, {
        inherits: [Bridge.ICollection$1(T), Bridge.ICollection],
        constructor: function (obj) {
            if (Object.prototype.toString.call(obj) === '[object Array]') {
                this.items = obj;
            }
            else if (Bridge.is(obj, Bridge.IEnumerable)) {
                this.items = Bridge.toArray(obj);
            }
            else {
                this.items = [];
            }
        },

        checkIndex: function (index) {
            if (index < 0 || index > (this.items.length - 1)) {
                throw new Bridge.ArgumentOutOfRangeException('Index out of range');
            }
        },

        getCount: function () {
            return this.items.length;
        },

        get: function (index) {
            this.checkIndex(index);

            return this.items[index];
        },

        set: function (index, value) {
            this.checkReadOnly();
            this.checkIndex(index);
            this.items[index] = value;
        },

        add: function (value) {
            this.checkReadOnly();
            this.items.push(value);
        },

        addRange: function (items) {
            this.checkReadOnly();

            var array = Bridge.toArray(items),
                i,
                len;

            for (i = 0, len = array.length; i < len; ++i) {
                this.items.push(array[i]);
            }
        },

        clear: function () {
            this.checkReadOnly();
            this.items = [];
        },

        indexOf: function (item, startIndex) {
            var i;

            if (!Bridge.isDefined(startIndex)) {
                startIndex = 0;
            }

            if (startIndex != 0) {
                this.checkIndex(index);
            }

            for (i = startIndex; i < this.items.length; i++) {
                if (item === this.items[i]) {
                    return i;
                }
            }

            return -1;
        },

        contains: function (item) {
            return this.indexOf(item) > -1;
        },

        getEnumerator: function () {
            return new Bridge.ArrayEnumerator(this.items);
        },

        getRange: function (index, count) {
            if (!Bridge.isDefined(index)) {
                index = 0;
            }

            if (!Bridge.isDefined(count)) {
                count = this.items.length;
            }

            if (index != 0) {
                this.checkIndex(index);
            }

            this.checkIndex(index + count - 1);

            var result = [],
                i;

            for (i = index; i < count; i++) {
                result.push(this.items[i]);
            }

            return result;
        },

        insert: function (index, item) {
            this.checkReadOnly();

            if (index != 0) {
                this.checkIndex(index);
            }

            if (Bridge.isArray(item)) {
                for (var i = 0; i < item.length; i++) {
                    this.insert(index++, item[i]);
                }
            }
            else {
                this.items.splice(index, 0, item);
            }
        },

        join: function (delimeter) {
            return this.items.join(delimeter);
        },

        lastIndexOf: function (item, fromIndex) {
            if (!Bridge.isDefined(fromIndex)) {
                fromIndex = this.items.length - 1;
            }

            if (fromIndex != 0) {
                this.checkIndex(fromIndex);
            }

            for (var i = fromIndex; i >= 0; i--) {
                if (item === this.items[i]) {
                    return i;
                }
            }

            return -1;
        },

        remove: function (item) {
            this.checkReadOnly();
            var index = this.indexOf(item);

            this.checkIndex(index);
            this.items.splice(index, 1);
        },

        removeAt: function (index) {
            this.checkReadOnly();
            this.checkIndex(index);
            this.items.splice(index, 1);
        },

        removeRange: function (index, count) {
            this.checkReadOnly();
            this.checkIndex(index);
            this.items.splice(index, count);
        },

        reverse: function () {
            this.checkReadOnly();
            this.items.reverse();
        },

        slice: function (start, end) {
            this.checkReadOnly();
            this.items.slice(start, end);
        },

        sort: function (comparison) {
            this.checkReadOnly();
            this.items.sort(comparison);
        },

        splice: function (start, count, items) {
            this.checkReadOnly();
            this.items.splice(start, count, items);
        },

        unshift: function () {
            this.checkReadOnly();
            this.items.unshift();
        },

        toArray: function () {
            return Bridge.toArray(this);
        },

        checkReadOnly: function () {
            if (this.readOnly) {
                throw new Bridge.NotSupportedException();
            }
        }
    }));
});

Bridge.Class.generic('Bridge.ReadOnlyCollection$1', function (T) {
    var $$name = Bridge.Class.genericName('Bridge.ReadOnlyCollection$1', T);

    return Bridge.Class.cache[$$name] || (Bridge.Class.cache[$$name] = Bridge.define($$name, {
        inherits: [Bridge.List$1(T)],
        constructor: function (list) {
            if (list == null) {
                throw new Bridge.ArgumentNullException("list");
            }
            
            Bridge.ReadOnlyCollection$1.prototype.$constructor.call(this, list);
            this.readOnly = true;
        }
    }));
});

// @source Task.js

Bridge.define('Bridge.Task', {
    constructor: function (action, state) {
        this.action = action;
        this.state = state;
        this.error = null;
        this.status = Bridge.TaskStatus.created;
        this.callbacks = [];
        this.result = null;
    },

    statics: {
        delay: function (delay, state) {
            var task = new Bridge.Task();

            setTimeout(function () {
                task.setResult(state);
            }, delay);

            return task;
        },

        fromResult: function (result) {
            var task = new Bridge.Task();

            t.status = Bridge.TaskStatus.ranToCompletion;
            t.result = result;

            return t;
        },

        run: function (fn) {
            var task = new Bridge.Task();

            setTimeout(function () {
                try {
                    task.setResult(fn());
                }
                catch (e) {
                    task.setError(e);
                }
            }, 0);

            return task;
        },

        whenAll: function (tasks) {
            var task = new Bridge.Task(),
                result,
                executing = tasks.length, 
                cancelled = false, 
                errors = [],
                i;

            if (!Bridge.isArray(tasks)) {
                tasks = Array.prototype.slice.call(arguments, 0);
            }

            if (tasks.length === 0) {
                task.setResult([]);

                return task;
            }

            result = new Array(tasks.length);

            for (i = 0; i < tasks.length; i++) {                
                tasks[i].$index = i;
                tasks[i].continueWith(function (t) {
                    switch (t.status) {
                        case Bridge.TaskStatus.ranToCompletion:
                            result[t.$index] = t.getResult();
                            break;
                        case Bridge.TaskStatus.canceled:
                            cancelled = true;
                            break;
                        case Bridge.TaskStatus.faulted:
                            errors.push(t.error);                                
                            break;
                        default:
                            throw new Bridge.InvalidOperationException('Invalid task status: ' + t.status);
                    }

                    executing--;

                    if (!executing) {
                        if (errors.length > 0) {
                            task.setError(errors);
                        }
                        else if (cancelled) {
                            task.setCanceled();
                        }
                        else {
                            task.setResult(result);
                        }
                    }
                });
            }

            return task;
        },

        whenAny: function (tasks) {
            if (!Bridge.isArray(tasks)) {
                tasks = Array.prototype.slice.call(arguments, 0);
            }

            if (!tasks.length) {
                throw new Bridge.ArgumentException('At least one task is required');
            }

            var task = new Bridge.Task(),
                i;

            for (i = 0; i < tasks.length; i++) {
                tasks[i].continueWith(function (t) {
                    switch (t.status) {
                        case Bridge.TaskStatus.ranToCompletion:
                            task.complete(t);
                            break;
                        case Bridge.TaskStatus.canceled:
                            task.cancel();
                            break;
                        case Bridge.TaskStatus.faulted:
                            task.fail(t.error);
                            break;
                        default:
                            throw new Bridge.InvalidOperationException('Invalid task status: ' + t.status);
                    }
                });
            }

            return task;
        },

        fromCallback: function (target, method) {
            var task = new Bridge.Task(),
                args = Array.prototype.slice.call(arguments, 2),
                callback;

            callback = function (value) {
                task.setResult(value);
            };
	
            args.push(callback);

            target[method].apply(target, args);

            return task;
        },

        fromCallbackResult: function (target, method, resultHandler) {
            var task = new Bridge.Task(),
                args = Array.prototype.slice.call(arguments, 3),
                callback;

            callback = function (value) {
                task.setResult(value);
            };

            resultHandler(args, callback);

            target[method].apply(target, args);

            return task;
        },

        fromCallbackOptions: function (target, method, name) {
            var task = new Bridge.Task(),
                args = Array.prototype.slice.call(arguments, 3),
                callback;

            callback = function (value) {
                task.setResult(value);
            };

            args[0] = args[0] || { };
            args[0][name] = callback;

            target[method].apply(target, args);

            return task;
        },

        fromPromise: function (promise, handler) {
            var task = new Bridge.Task();

            if (!promise.then) {
                promise = promise.promise();
            }

            promise.then(function () {
                task.setResult(handler ? handler.apply(null, arguments) : arguments);
            }, function () {
                task.setError(new Error(Array.prototype.slice.call(arguments, 0)));
            });

            return task;
        }
    },

    continueWith: function (continuationAction, raise) {
        var task = new Bridge.Task(),
            me = this,
            fn = raise ? function () {
                task.setResult(continuationAction(me));
            } : function () {
                try {
                    task.setResult(continuationAction(me));
                }
                catch (e) {
                    task.setError(e);
                }
            };

        if (this.isCompleted()) {
            setTimeout(fn, 0);
        }
        else {
            this.callbacks.push(fn);
        }

        return task;
    },

    start: function () {
        if (this.status !== Bridge.TaskStatus.created) {
            throw new Error('Task was already started.');
        }

        var me = this;
        this.status = Bridge.TaskStatus.running;

        setTimeout(function () {
            try {
                var result = me.action(me.state);
                delete me.action;
                delete me.state;
                me.complete(result);
            }
            catch (e) {
                me.fail(e);
            }
        }, 0);
    },

    runCallbacks: function () {
        var me = this;
        setTimeout(function () {
            for (var i = 0; i < me.callbacks.length; i++) {
                me.callbacks[i](me);
            }

            delete me.callbacks;
        }, 0);       
    },

    complete: function (result) {
        if (this.isCompleted()) {
            return false;
        }

        this.result = result;
        this.status = Bridge.TaskStatus.ranToCompletion;
        this.runCallbacks();

        return true;
    },

    fail: function (error) {
        if (this.isCompleted()) {
            return false;
        }

        this.error = error;
        this.status = Bridge.TaskStatus.faulted;
        this.runCallbacks();

        return true;
    },

    cancel: function () {
        if (this.isCompleted()) {
            return false;
        }

        this.status = Bridge.TaskStatus.canceled;
        this.runCallbacks();

        return true;
    },

    isCanceled: function () {
        return this.status === Bridge.TaskStatus.canceled;
    },

    isCompleted: function () {
        return this.status == Bridge.TaskStatus.ranToCompletion || this.status == Bridge.TaskStatus.canceled || this.status == Bridge.TaskStatus.faulted;
    },

    isFaulted: function () {
        return this.status === Bridge.TaskStatus.faulted;
    },

    getResult: function () {
        switch (this.status) {
            case Bridge.TaskStatus.ranToCompletion:
                return this.result;
            case Bridge.TaskStatus.canceled:
                throw new Error('Task was cancelled.');
            case Bridge.TaskStatus.faulted:
                throw this.error;
            default:
                throw new Error('Task is not yet completed.');
        }
    },

    setCanceled: function () {
        if (!this.cancel()) {
            throw new Error('Task was already completed.');
        }
    },

    setResult: function (result) {
        if (!this.complete(result)) {
            throw new Error('Task was already completed.');
        }
    },

    setError: function (error) {
        if (!this.fail(error)) {
            throw new Error('Task was already completed.');
        }
    },
                                        
    dispose: function () {
    },

    getAwaiter: function () {
        return this;
    }
});

Bridge.define('Bridge.TaskStatus', {
    $statics: {
        created: 0,
        waitingForActivation: 1,
        waitingToRun: 2,
        running: 3,
        waitingForChildrenToComplete: 4,
        ranToCompletion: 5,
        canceled: 6,
        faulted: 7
    }
});

// @source Validation.js

(function () {
    var validation = {
        isNull: function (value) {
            return !Bridge.isDefined(value, true);
        },

        isEmpty: function (value) {
            return value == null || value.length === 0 || Bridge.is(value, Bridge.ICollection) ? value.getCount() == 0 : false;
        },

        isNotEmptyOrWhitespace: function (value) {
            return Bridge.isDefined(value, true) && !(/^$|\s+/.test(value));
        },

        isNotNull: function (value) {
            return Bridge.isDefined(value, true);
        },

        isNotEmpty: function (value) {
            return !Bridge.Validation.isEmpty(value);
        },

        email: function (value) {
            var re = /^(")?(?:[^\."])(?:(?:[\.])?(?:[\w\-!#$%&'*+/=?^_`{|}~]))*\1@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$/;

            return re.test(value);
        },

        url: function (value) {
            var re = /(((^https?)|(^ftp)):\/\/((([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*)|(localhost|LOCALHOST))\/?)/i;

            return re.test(value);
        },

        alpha: function (value) {
            var re = /^[a-zA-Z_]+$/;

            return re.test(value);
        },

        alphaNum: function (value) {
            var re = /^[a-zA-Z_]+$/;

            return re.test(value);
        },

        creditCard: function (value, type) {
            var re,
                checksum,
                i,
                digit;

            if (type == "Visa") {
                // Visa: length 16, prefix 4, dashes optional.
                re = /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/;
            }
            else if (type == "MasterCard") {
                // Mastercard: length 16, prefix 51-55, dashes optional.
                re = /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/;
            }
            else if (type == "Discover") {
                // Discover: length 16, prefix 6011, dashes optional.
                re = /^6011-?\d{4}-?\d{4}-?\d{4}$/;
            }
            else if (type == "AmericanExpress") {
                // American Express: length 15, prefix 34 or 37.
                re = /^3[4,7]\d{13}$/;
            }
            else if (type == "DinersClub") {
                // Diners: length 14, prefix 30, 36, or 38.
                re = /^3[0,6,8]\d{12}$/;
            }
            else {
                // Basing min and max length on
                // http://developer.ean.com/general_info/Valid_Credit_Card_Types
                if (!value || value.length < 13 || value.length > 19) {
                    return false;
                }

                re = /[^0-9 \-]+/;
            }

            if (!re.test(value)) {
                return false;
            }

            // Remove all dashes for the checksum checks to eliminate negative numbers
            value = value.split("-").join("");

            // Checksum ("Mod 10")
            // Add even digits in even length strings or odd digits in odd length strings.
            checksum = 0;

            for (i = (2 - (value.length % 2)) ; i <= value.length; i += 2) {
                checksum += parseInt(ccnum.charAt(i - 1));
            }

            // Analyze odd digits in even length strings or even digits in odd length strings.
            for (i = (value.length % 2) + 1; i < value.length; i += 2) {
                digit = parseInt(value.charAt(i - 1)) * 2;

                if (digit < 10) {
                    checksum += digit;
                }
                else {
                    checksum += (digit - 9);
                }
            }

            return (checksum % 10) == 0;
        }
    };

    Bridge.Validation = validation;
})();

// @source Attribute.js

Bridge.define('Bridge.Attribute');

// @source INotifyPropertyChanged.js

Bridge.define('Bridge.INotifyPropertyChanged');

Bridge.define('Bridge.PropertyChangedEventArgs', {
    constructor: function (propertyName) {
        this.propertyName = propertyName;
    }
});

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
        }
    };

    Bridge.Array = array;
})();



(function (root, undefined) {
    // ReadOnly Function
    var Functions = {
        Identity: function (x) { return x; },
        True: function () { return true; },
        Blank: function () { }
    };

    // const Type
    var Types = {
        Boolean: typeof true,
        Number: typeof 0,
        String: typeof "",
        Object: typeof {},
        Undefined: typeof undefined,
        Function: typeof function () { }
    };

    // createLambda cache
    var funcCache = { "": Functions.Identity };

    // private utility methods
    var Utils = {
        // Create anonymous function from lambda expression string
        createLambda: function (expression) {
            if (expression == null) return Functions.Identity;
            if (typeof expression === Types.String) {
                // get from cache
                var f = funcCache[expression];
                if (f != null) {
                    return f;
                }

                if (expression.indexOf("=>") === -1) {
                    var regexp = new RegExp("[$]+", "g");

                    var maxLength = 0;
                    var match;
                    while ((match = regexp.exec(expression)) != null) {
                        var paramNumber = match[0].length;
                        if (paramNumber > maxLength) {
                            maxLength = paramNumber;
                        }
                    }

                    var argArray = [];
                    for (var i = 1; i <= maxLength; i++) {
                        var dollar = "";
                        for (var j = 0; j < i; j++) {
                            dollar += "$";
                        }
                        argArray.push(dollar);
                    }

                    var args = Array.prototype.join.call(argArray, ",");

                    f = new Function(args, "return " + expression);
                    funcCache[expression] = f;
                    return f;
                }
                else {
                    var expr = expression.match(/^[(\s]*([^()]*?)[)\s]*=>(.*)/);
                    f = new Function(expr[1], "return " + expr[2]);
                    funcCache[expression] = f;
                    return f;
                }
            }
            return expression;
        },

        isIEnumerable: function (obj) {
            if (typeof Enumerator !== Types.Undefined) {
                try {
                    new Enumerator(obj); // check JScript(IE)'s Enumerator
                    return true;
                }
                catch (e) { }
            }

            return false;
        },

        // IE8's defineProperty is defined but cannot use, therefore check defineProperties
        defineProperty: (Object.defineProperties != null)
            ? function (target, methodName, value) {
                Object.defineProperty(target, methodName, {
                    enumerable: false,
                    configurable: true,
                    writable: true,
                    value: value
                })
            }
            : function (target, methodName, value) {
                target[methodName] = value;
            },

        compare: function (a, b) {
            return (a === b) ? 0
                 : (a > b) ? 1
                 : -1;
        },

        dispose: function (obj) {
            if (obj != null) obj.dispose();
        }
    };

    // IEnumerator State
    var State = { Before: 0, Running: 1, After: 2 };

    // "Enumerator" is conflict JScript's "Enumerator"
    var IEnumerator = function (initialize, tryGetNext, dispose) {
        var yielder = new Yielder();
        var state = State.Before;

        this.getCurrent = yielder.getCurrent;
        this.reset = function () { throw new Error('Reset is not supported'); };

        this.moveNext = function () {
            try {
                switch (state) {
                    case State.Before:
                        state = State.Running;
                        initialize();
                        // fall through
                    case State.Running:
                        if (tryGetNext.apply(yielder)) {
                            return true;
                        }
                        else {
                            this.dispose();
                            return false;
                        }
                    case State.After:
                        return false;
                }
            }
            catch (e) {
                this.dispose();
                throw e;
            }
        };

        this.dispose = function () {
            if (state != State.Running) return;

            try {
                dispose();
            }
            finally {
                state = State.After;
            }
        };
    };
    IEnumerator.$$inheritors = [Bridge.IDisposable];

    // for tryGetNext
    var Yielder = function () {
        var current = null;
        this.getCurrent = function () { return current; };
        this.yieldReturn = function (value) {
            current = value;
            return true;
        };
        this.yieldBreak = function () {
            return false;
        };
    };

    // Enumerable constuctor
    var Enumerable = function (getEnumerator) {
        this.getEnumerator = getEnumerator;
    };
    Enumerable.$$inheritors = [Bridge.IEnumerable];

    // Utility

    Enumerable.Utils = {}; // container

    Enumerable.Utils.createLambda = function (expression) {
        return Utils.createLambda(expression);
    };

    Enumerable.Utils.createEnumerable = function (getEnumerator) {
        return new Enumerable(getEnumerator);
    };

    Enumerable.Utils.createEnumerator = function (initialize, tryGetNext, dispose) {
        return new IEnumerator(initialize, tryGetNext, dispose);
    };

    Enumerable.Utils.extendTo = function (type) {
        var typeProto = type.prototype;
        var enumerableProto;

        if (type === Array) {
            enumerableProto = ArrayEnumerable.prototype;
            Utils.defineProperty(typeProto, "getSource", function () {
                return this;
            });
        }
        else {
            enumerableProto = Enumerable.prototype;
            Utils.defineProperty(typeProto, "getEnumerator", function () {
                return Enumerable.from(this).getEnumerator();
            });
        }

        for (var methodName in enumerableProto) {
            var func = enumerableProto[methodName];

            // already extended
            if (typeProto[methodName] == func) continue;

            // already defined(example Array#reverse/join/forEach...)
            if (typeProto[methodName] != null) {
                methodName = methodName + "ByLinq";
                if (typeProto[methodName] == func) continue; // recheck
            }

            if (func instanceof Function) {
                Utils.defineProperty(typeProto, methodName, func);
            }
        }
    };

    // Generator

    Enumerable.choice = function () // variable argument
    {
        var args = arguments;

        return new Enumerable(function () {
            return new IEnumerator(
                function () {
                    args = (args[0] instanceof Array) ? args[0]
                        : (args[0].getEnumerator != null) ? args[0].toArray()
                        : args;
                },
                function () {
                    return this.yieldReturn(args[Math.floor(Math.random() * args.length)]);
                },
                Functions.Blank);
        });
    };

    Enumerable.cycle = function () // variable argument
    {
        var args = arguments;

        return new Enumerable(function () {
            var index = 0;
            return new IEnumerator(
                function () {
                    args = (args[0] instanceof Array) ? args[0]
                        : (args[0].getEnumerator != null) ? args[0].toArray()
                        : args;
                },
                function () {
                    if (index >= args.length) index = 0;
                    return this.yieldReturn(args[index++]);
                },
                Functions.Blank);
        });
    };

    // private singleton
    var emptyEnumerable = new Enumerable(function () {
            return new IEnumerator(
                Functions.Blank,
                function () { return false; },
                Functions.Blank);
        });
    Enumerable.empty = function () {
        return emptyEnumerable;
    };

    Enumerable.from = function (obj) {
        if (obj == null) {
            return Enumerable.empty();
        }
        if (obj instanceof Enumerable) {
            return obj;
        }
        if (typeof obj == Types.Number || typeof obj == Types.Boolean) {
            return Enumerable.repeat(obj, 1);
        }
        if (typeof obj == Types.String) {
            return new Enumerable(function () {
                var index = 0;
                return new IEnumerator(
                    Functions.Blank,
                    function () {
                        return (index < obj.length) ? this.yieldReturn(obj.charAt(index++)) : false;
                    },
                    Functions.Blank);
            });
        }
        var ienum = Bridge.as(obj, Bridge.IEnumerable);
        if (ienum) {
            return new Enumerable(function () {
                var enumerator;
                return new IEnumerator(
                    function () { enumerator = Bridge.getEnumerator(ienum); },
                    function () {
                        var ok = enumerator.moveNext();
                        return ok ? this.yieldReturn(enumerator.getCurrent()) : false;
                    },
                    function () {
                        var disposable = Bridge.as(enumerator, Bridge.IDisposable);
                        if (disposable) {
                            disposable.dispose();
                        }
                    }
                );
            });
        }
        if (typeof obj != Types.Function) {
            // array or array like object
            if (typeof obj.length == Types.Number) {
                return new ArrayEnumerable(obj);
            }

            // JScript's IEnumerable
            if (!(obj instanceof Object) && Utils.isIEnumerable(obj)) {
                return new Enumerable(function () {
                    var isFirst = true;
                    var enumerator;
                    return new IEnumerator(
                        function () { enumerator = new Enumerator(obj); },
                        function () {
                            if (isFirst) isFirst = false;
                            else enumerator.moveNext();

                            return (enumerator.atEnd()) ? false : this.yieldReturn(enumerator.item());
                        },
                        Functions.Blank);
                });
            }

            // WinMD IIterable<T>
            if (typeof Windows === Types.Object && typeof obj.first === Types.Function) {
                return new Enumerable(function () {
                    var isFirst = true;
                    var enumerator;
                    return new IEnumerator(
                        function () { enumerator = obj.first(); },
                        function () {
                            if (isFirst) isFirst = false;
                            else enumerator.moveNext();

                            return (enumerator.hasCurrent) ? this.yieldReturn(enumerator.current) : this.yieldBreak();
                        },
                        Functions.Blank);
                });
            }
        }

        // case function/object : Create keyValuePair[]
        return new Enumerable(function () {
            var array = [];
            var index = 0;

            return new IEnumerator(
                function () {
                    for (var key in obj) {
                        var value = obj[key];
                        if (!(value instanceof Function) && Object.prototype.hasOwnProperty.call(obj, key)) {
                            array.push({ key: key, value: value });
                        }
                    }
                },
                function () {
                    return (index < array.length)
                        ? this.yieldReturn(array[index++])
                        : false;
                },
                Functions.Blank);
        });
    },

    Enumerable.make = function (element) {
        return Enumerable.repeat(element, 1);
    };

    // Overload:function(input, pattern)
    // Overload:function(input, pattern, flags)
    Enumerable.matches = function (input, pattern, flags) {
        if (flags == null) flags = "";
        if (pattern instanceof RegExp) {
            flags += (pattern.ignoreCase) ? "i" : "";
            flags += (pattern.multiline) ? "m" : "";
            pattern = pattern.source;
        }
        if (flags.indexOf("g") === -1) flags += "g";

        return new Enumerable(function () {
            var regex;
            return new IEnumerator(
                function () { regex = new RegExp(pattern, flags); },
                function () {
                    var match = regex.exec(input);
                    return (match) ? this.yieldReturn(match) : false;
                },
                Functions.Blank);
        });
    };

    // Overload:function(start, count)
    // Overload:function(start, count, step)
    Enumerable.range = function (start, count, step) {
        if (step == null) step = 1;

        return new Enumerable(function () {
            var value;
            var index = 0;

            return new IEnumerator(
                function () { value = start - step; },
                function () {
                    return (index++ < count)
                        ? this.yieldReturn(value += step)
                        : this.yieldBreak();
                },
                Functions.Blank);
        });
    };

    // Overload:function(start, count)
    // Overload:function(start, count, step)
    Enumerable.rangeDown = function (start, count, step) {
        if (step == null) step = 1;

        return new Enumerable(function () {
            var value;
            var index = 0;

            return new IEnumerator(
                function () { value = start + step; },
                function () {
                    return (index++ < count)
                        ? this.yieldReturn(value -= step)
                        : this.yieldBreak();
                },
                Functions.Blank);
        });
    };

    // Overload:function(start, to)
    // Overload:function(start, to, step)
    Enumerable.rangeTo = function (start, to, step) {
        if (step == null) step = 1;

        if (start < to) {
            return new Enumerable(function () {
                var value;

                return new IEnumerator(
                function () { value = start - step; },
                function () {
                    var next = value += step;
                    return (next <= to)
                        ? this.yieldReturn(next)
                        : this.yieldBreak();
                },
                Functions.Blank);
            });
        }
        else {
            return new Enumerable(function () {
                var value;

                return new IEnumerator(
                function () { value = start + step; },
                function () {
                    var next = value -= step;
                    return (next >= to)
                        ? this.yieldReturn(next)
                        : this.yieldBreak();
                },
                Functions.Blank);
            });
        }
    };

    // Overload:function(element)
    // Overload:function(element, count)
    Enumerable.repeat = function (element, count) {
        if (count != null) return Enumerable.repeat(element).take(count);

        return new Enumerable(function () {
            return new IEnumerator(
                Functions.Blank,
                function () { return this.yieldReturn(element); },
                Functions.Blank);
        });
    };

    Enumerable.repeatWithFinalize = function (initializer, finalizer) {
        initializer = Utils.createLambda(initializer);
        finalizer = Utils.createLambda(finalizer);

        return new Enumerable(function () {
            var element;
            return new IEnumerator(
                function () { element = initializer(); },
                function () { return this.yieldReturn(element); },
                function () {
                    if (element != null) {
                        finalizer(element);
                        element = null;
                    }
                });
        });
    };

    // Overload:function(func)
    // Overload:function(func, count)
    Enumerable.generate = function (func, count) {
        if (count != null) return Enumerable.generate(func).take(count);
        func = Utils.createLambda(func);

        return new Enumerable(function () {
            return new IEnumerator(
                Functions.Blank,
                function () { return this.yieldReturn(func()); },
                Functions.Blank);
        });
    };

    // Overload:function()
    // Overload:function(start)
    // Overload:function(start, step)
    Enumerable.toInfinity = function (start, step) {
        if (start == null) start = 0;
        if (step == null) step = 1;

        return new Enumerable(function () {
            var value;
            return new IEnumerator(
                function () { value = start - step; },
                function () { return this.yieldReturn(value += step); },
                Functions.Blank);
        });
    };

    // Overload:function()
    // Overload:function(start)
    // Overload:function(start, step)
    Enumerable.toNegativeInfinity = function (start, step) {
        if (start == null) start = 0;
        if (step == null) step = 1;

        return new Enumerable(function () {
            var value;
            return new IEnumerator(
                function () { value = start + step; },
                function () { return this.yieldReturn(value -= step); },
                Functions.Blank);
        });
    };

    Enumerable.unfold = function (seed, func) {
        func = Utils.createLambda(func);

        return new Enumerable(function () {
            var isFirst = true;
            var value;
            return new IEnumerator(
                Functions.Blank,
                function () {
                    if (isFirst) {
                        isFirst = false;
                        value = seed;
                        return this.yieldReturn(value);
                    }
                    value = func(value);
                    return this.yieldReturn(value);
                },
                Functions.Blank);
        });
    };

    Enumerable.defer = function (enumerableFactory) {

        return new Enumerable(function () {
            var enumerator;

            return new IEnumerator(
                function () { enumerator = Enumerable.from(enumerableFactory()).getEnumerator(); },
                function () {
                    return (enumerator.moveNext())
                        ? this.yieldReturn(enumerator.getCurrent())
                        : this.yieldBreak();
                },
                function () {
                    Utils.dispose(enumerator);
                });
        });
    };

    // Extension Methods

    

    // Overload:function(func)
    // Overload:function(func, resultSelector<element>)
    // Overload:function(func, resultSelector<element, nestLevel>)
    Enumerable.prototype.traverseBreadthFirst = function (func, resultSelector) {
        var source = this;
        func = Utils.createLambda(func);
        resultSelector = Utils.createLambda(resultSelector);

        return new Enumerable(function () {
            var enumerator;
            var nestLevel = 0;
            var buffer = [];

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    while (true) {
                        if (enumerator.moveNext()) {
                            buffer.push(enumerator.getCurrent());
                            return this.yieldReturn(resultSelector(enumerator.getCurrent(), nestLevel));
                        }

                        var next = Enumerable.from(buffer).selectMany(function (x) { return func(x); });
                        if (!next.any()) {
                            return false;
                        }
                        else {
                            nestLevel++;
                            buffer = [];
                            Utils.dispose(enumerator);
                            enumerator = next.getEnumerator();
                        }
                    }
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function(func)
    // Overload:function(func, resultSelector<element>)
    // Overload:function(func, resultSelector<element, nestLevel>)
    Enumerable.prototype.traverseDepthFirst = function (func, resultSelector) {
        var source = this;
        func = Utils.createLambda(func);
        resultSelector = Utils.createLambda(resultSelector);

        return new Enumerable(function () {
            var enumeratorStack = [];
            var enumerator;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    while (true) {
                        if (enumerator.moveNext()) {
                            var value = resultSelector(enumerator.getCurrent(), enumeratorStack.length);
                            enumeratorStack.push(enumerator);
                            enumerator = Enumerable.from(func(enumerator.getCurrent())).getEnumerator();
                            return this.yieldReturn(value);
                        }

                        if (enumeratorStack.length <= 0) return false;
                        Utils.dispose(enumerator);
                        enumerator = enumeratorStack.pop();
                    }
                },
                function () {
                    try {
                        Utils.dispose(enumerator);
                    }
                    finally {
                        Enumerable.from(enumeratorStack).forEach(function (s) { s.dispose(); });
                    }
                });
        });
    };

    Enumerable.prototype.flatten = function () {
        var source = this;

        return new Enumerable(function () {
            var enumerator;
            var middleEnumerator = null;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    while (true) {
                        if (middleEnumerator != null) {
                            if (middleEnumerator.moveNext()) {
                                return this.yieldReturn(middleEnumerator.getCurrent());
                            }
                            else {
                                middleEnumerator = null;
                            }
                        }

                        if (enumerator.moveNext()) {
                            if (enumerator.getCurrent() instanceof Array) {
                                Utils.dispose(middleEnumerator);
                                middleEnumerator = Enumerable.from(enumerator.getCurrent())
                                    .selectMany(Functions.Identity)
                                    .flatten()
                                    .getEnumerator();
                                continue;
                            }
                            else {
                                return this.yieldReturn(enumerator.getCurrent());
                            }
                        }

                        return false;
                    }
                },
                function () {
                    try {
                        Utils.dispose(enumerator);
                    }
                    finally {
                        Utils.dispose(middleEnumerator);
                    }
                });
        });
    };

    Enumerable.prototype.pairwise = function (selector) {
        var source = this;
        selector = Utils.createLambda(selector);

        return new Enumerable(function () {
            var enumerator;

            return new IEnumerator(
                function () {
                    enumerator = source.getEnumerator();
                    enumerator.moveNext();
                },
                function () {
                    var prev = enumerator.getCurrent();
                    return (enumerator.moveNext())
                        ? this.yieldReturn(selector(prev, enumerator.getCurrent()))
                        : false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function(func)
    // Overload:function(seed,func<value,element>)
    Enumerable.prototype.scan = function (seed, func) {
        var isUseSeed;
        if (func == null) {
            func = Utils.createLambda(seed); // arguments[0]
            isUseSeed = false;
        } else {
            func = Utils.createLambda(func);
            isUseSeed = true;
        }
        var source = this;

        return new Enumerable(function () {
            var enumerator;
            var value;
            var isFirst = true;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    if (isFirst) {
                        isFirst = false;
                        if (!isUseSeed) {
                            if (enumerator.moveNext()) {
                                return this.yieldReturn(value = enumerator.getCurrent());
                            }
                        }
                        else {
                            return this.yieldReturn(value = seed);
                        }
                    }

                    return (enumerator.moveNext())
                        ? this.yieldReturn(value = func(value, enumerator.getCurrent()))
                        : false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function(selector<element>)
    // Overload:function(selector<element,index>)
    Enumerable.prototype.select = function (selector) {
        selector = Utils.createLambda(selector);

        if (selector.length <= 1) {
            return new WhereSelectEnumerable(this, null, selector);
        }
        else {
            var source = this;

            return new Enumerable(function () {
                var enumerator;
                var index = 0;

                return new IEnumerator(
                    function () { enumerator = source.getEnumerator(); },
                    function () {
                        return (enumerator.moveNext())
                            ? this.yieldReturn(selector(enumerator.getCurrent(), index++))
                            : false;
                    },
                    function () { Utils.dispose(enumerator); });
            });
        }
    };

    // Overload:function(collectionSelector<element>)
    // Overload:function(collectionSelector<element,index>)
    // Overload:function(collectionSelector<element>,resultSelector)
    // Overload:function(collectionSelector<element,index>,resultSelector)
    Enumerable.prototype.selectMany = function (collectionSelector, resultSelector) {
        var source = this;
        collectionSelector = Utils.createLambda(collectionSelector);
        if (resultSelector == null) resultSelector = function (a, b) { return b; };
        resultSelector = Utils.createLambda(resultSelector);

        return new Enumerable(function () {
            var enumerator;
            var middleEnumerator = undefined;
            var index = 0;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    if (middleEnumerator === undefined) {
                        if (!enumerator.moveNext()) return false;
                    }
                    do {
                        if (middleEnumerator == null) {
                            var middleSeq = collectionSelector(enumerator.getCurrent(), index++);
                            middleEnumerator = Enumerable.from(middleSeq).getEnumerator();
                        }
                        if (middleEnumerator.moveNext()) {
                            return this.yieldReturn(resultSelector(enumerator.getCurrent(), middleEnumerator.getCurrent()));
                        }
                        Utils.dispose(middleEnumerator);
                        middleEnumerator = null;
                    } while (enumerator.moveNext());
                    return false;
                },
                function () {
                    try {
                        Utils.dispose(enumerator);
                    }
                    finally {
                        Utils.dispose(middleEnumerator);
                    }
                });
        });
    };

    // Overload:function(predicate<element>)
    // Overload:function(predicate<element,index>)
    Enumerable.prototype.where = function (predicate) {
        predicate = Utils.createLambda(predicate);

        if (predicate.length <= 1) {
            return new WhereEnumerable(this, predicate);
        }
        else {
            var source = this;

            return new Enumerable(function () {
                var enumerator;
                var index = 0;

                return new IEnumerator(
                    function () { enumerator = source.getEnumerator(); },
                    function () {
                        while (enumerator.moveNext()) {
                            if (predicate(enumerator.getCurrent(), index++)) {
                                return this.yieldReturn(enumerator.getCurrent());
                            }
                        }
                        return false;
                    },
                    function () { Utils.dispose(enumerator); });
            });
        }
    };


    // Overload:function(selector<element>)
    // Overload:function(selector<element,index>)
    Enumerable.prototype.choose = function (selector) {
        selector = Utils.createLambda(selector);
        var source = this;

        return new Enumerable(function () {
            var enumerator;
            var index = 0;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    while (enumerator.moveNext()) {
                        var result = selector(enumerator.getCurrent(), index++);
                        if (result != null) {
                            return this.yieldReturn(result);
                        }
                    }
                    return this.yieldBreak();
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    Enumerable.prototype.ofType = function (type) {
        var source = this;

        return new Enumerable(function () {
            var enumerator;

            return new IEnumerator(
                function () { 
					enumerator = Bridge.getEnumerator(source); 
				},
                function () {
                    while (enumerator.moveNext()) {
                        var v = Bridge.as(enumerator.getCurrent(), type);
                        if (Bridge.hasValue(v)) {
                            return this.yieldReturn(v);
                        }
                    }
                    return false;
                },
                function () { 
					Utils.dispose(enumerator); 
				});
        });
    };

    // mutiple arguments, last one is selector, others are enumerable
    Enumerable.prototype.zip = function () {
        var args = arguments;
        var selector = Utils.createLambda(arguments[arguments.length - 1]);

        var source = this;
        // optimized case:argument is 2
        if (arguments.length == 2) {
            var second = arguments[0];

            return new Enumerable(function () {
                var firstEnumerator;
                var secondEnumerator;
                var index = 0;

                return new IEnumerator(
                function () {
                    firstEnumerator = source.getEnumerator();
                    secondEnumerator = Enumerable.from(second).getEnumerator();
                },
                function () {
                    if (firstEnumerator.moveNext() && secondEnumerator.moveNext()) {
                        return this.yieldReturn(selector(firstEnumerator.getCurrent(), secondEnumerator.getCurrent(), index++));
                    }
                    return false;
                },
                function () {
                    try {
                        Utils.dispose(firstEnumerator);
                    } finally {
                        Utils.dispose(secondEnumerator);
                    }
                });
            });
        }
        else {
            return new Enumerable(function () {
                var enumerators;
                var index = 0;

                return new IEnumerator(
                function () {
                    var array = Enumerable.make(source)
                        .concat(Enumerable.from(args).takeExceptLast().select(Enumerable.from))
                        .select(function (x) { return x.getEnumerator() })
                        .toArray();
                    enumerators = Enumerable.from(array);
                },
                function () {
                    if (enumerators.all(function (x) { return x.moveNext() })) {
                        var array = enumerators
                            .select(function (x) { return x.getCurrent() })
                            .toArray();
                        array.push(index++);
                        return this.yieldReturn(selector.apply(null, array));
                    }
                    else {
                        return this.yieldBreak();
                    }
                },
                function () {
                    Enumerable.from(enumerators).forEach(Utils.dispose);
                });
            });
        }
    };

    // mutiple arguments
    Enumerable.prototype.merge = function () {
        var args = arguments;
        var source = this;

        return new Enumerable(function () {
            var enumerators;
            var index = -1;

            return new IEnumerator(
                function () {
                    enumerators = Enumerable.make(source)
                        .concat(Enumerable.from(args).select(Enumerable.from))
                        .select(function (x) { return x.getEnumerator() })
                        .toArray();
                },
                function () {
                    while (enumerators.length > 0) {
                        index = (index >= enumerators.length - 1) ? 0 : index + 1;
                        var enumerator = enumerators[index];

                        if (enumerator.moveNext()) {
                            return this.yieldReturn(enumerator.getCurrent());
                        }
                        else {
                            enumerator.dispose();
                            enumerators.splice(index--, 1);
                        }
                    }
                    return this.yieldBreak();
                },
                function () {
                    Enumerable.from(enumerators).forEach(Utils.dispose);
                });
        });
    };

    

    // Overload:function (inner, outerKeySelector, innerKeySelector, resultSelector)
    // Overload:function (inner, outerKeySelector, innerKeySelector, resultSelector, compareSelector)
    Enumerable.prototype.join = function (inner, outerKeySelector, innerKeySelector, resultSelector, comparer) {
        outerKeySelector = Utils.createLambda(outerKeySelector);
        innerKeySelector = Utils.createLambda(innerKeySelector);
        resultSelector = Utils.createLambda(resultSelector);

        var source = this;

        return new Enumerable(function () {
            var outerEnumerator;
            var lookup;
            var innerElements = null;
            var innerCount = 0;

            return new IEnumerator(
                function () {
                    outerEnumerator = source.getEnumerator();
                    lookup = Enumerable.from(inner).toLookup(innerKeySelector, Functions.Identity, comparer);
                },
                function () {
                    while (true) {
                        if (innerElements != null) {
                            var innerElement = innerElements[innerCount++];
                            if (innerElement !== undefined) {
                                return this.yieldReturn(resultSelector(outerEnumerator.getCurrent(), innerElement));
                            }

                            innerElement = null;
                            innerCount = 0;
                        }

                        if (outerEnumerator.moveNext()) {
                            var key = outerKeySelector(outerEnumerator.getCurrent());
                            innerElements = lookup.get(key).toArray();
                        } else {
                            return false;
                        }
                    }
                },
                function () { Utils.dispose(outerEnumerator); });
        });
    };

    // Overload:function (inner, outerKeySelector, innerKeySelector, resultSelector)
    // Overload:function (inner, outerKeySelector, innerKeySelector, resultSelector, compareSelector)
    Enumerable.prototype.groupJoin = function (inner, outerKeySelector, innerKeySelector, resultSelector, comparer) {
        outerKeySelector = Utils.createLambda(outerKeySelector);
        innerKeySelector = Utils.createLambda(innerKeySelector);
        resultSelector = Utils.createLambda(resultSelector);
        var source = this;

        return new Enumerable(function () {
            var enumerator = source.getEnumerator();
            var lookup = null;

            return new IEnumerator(
                function () {
                    enumerator = source.getEnumerator();
                    lookup = Enumerable.from(inner).toLookup(innerKeySelector, Functions.Identity, comparer);
                },
                function () {
                    if (enumerator.moveNext()) {
                        var innerElement = lookup.get(outerKeySelector(enumerator.getCurrent()));
                        return this.yieldReturn(resultSelector(enumerator.getCurrent(), innerElement));
                    }
                    return false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    

    Enumerable.prototype.all = function (predicate) {
        predicate = Utils.createLambda(predicate);

        var result = true;
        this.forEach(function (x) {
            if (!predicate(x)) {
                result = false;
                return false; // break
            }
        });
        return result;
    };

    // Overload:function()
    // Overload:function(predicate)
    Enumerable.prototype.any = function (predicate) {
        predicate = Utils.createLambda(predicate);

        var enumerator = this.getEnumerator();
        try {
            if (arguments.length == 0) return enumerator.moveNext(); // case:function()

            while (enumerator.moveNext()) // case:function(predicate)
            {
                if (predicate(enumerator.getCurrent())) return true;
            }
            return false;
        }
        finally {
            Utils.dispose(enumerator);
        }
    };

    Enumerable.prototype.isEmpty = function () {
        return !this.any();
    };

    // multiple arguments
    Enumerable.prototype.concat = function () {
        var source = this;

        if (arguments.length == 1) {
            var second = arguments[0];

            return new Enumerable(function () {
                var firstEnumerator;
                var secondEnumerator;

                return new IEnumerator(
                function () { firstEnumerator = source.getEnumerator(); },
                function () {
                    if (secondEnumerator == null) {
                        if (firstEnumerator.moveNext()) return this.yieldReturn(firstEnumerator.getCurrent());
                        secondEnumerator = Enumerable.from(second).getEnumerator();
                    }
                    if (secondEnumerator.moveNext()) return this.yieldReturn(secondEnumerator.getCurrent());
                    return false;
                },
                function () {
                    try {
                        Utils.dispose(firstEnumerator);
                    }
                    finally {
                        Utils.dispose(secondEnumerator);
                    }
                });
            });
        }
        else {
            var args = arguments;

            return new Enumerable(function () {
                var enumerators;

                return new IEnumerator(
                    function () {
                        enumerators = Enumerable.make(source)
                            .concat(Enumerable.from(args).select(Enumerable.from))
                            .select(function (x) { return x.getEnumerator() })
                            .toArray();
                    },
                    function () {
                        while (enumerators.length > 0) {
                            var enumerator = enumerators[0];

                            if (enumerator.moveNext()) {
                                return this.yieldReturn(enumerator.getCurrent());
                            }
                            else {
                                enumerator.dispose();
                                enumerators.splice(0, 1);
                            }
                        }
                        return this.yieldBreak();
                    },
                    function () {
                        Enumerable.from(enumerators).forEach(Utils.dispose);
                    });
            });
        }
    };

    Enumerable.prototype.insert = function (index, second) {
        var source = this;

        return new Enumerable(function () {
            var firstEnumerator;
            var secondEnumerator;
            var count = 0;
            var isEnumerated = false;

            return new IEnumerator(
                function () {
                    firstEnumerator = source.getEnumerator();
                    secondEnumerator = Enumerable.from(second).getEnumerator();
                },
                function () {
                    if (count == index && secondEnumerator.moveNext()) {
                        isEnumerated = true;
                        return this.yieldReturn(secondEnumerator.getCurrent());
                    }
                    if (firstEnumerator.moveNext()) {
                        count++;
                        return this.yieldReturn(firstEnumerator.getCurrent());
                    }
                    if (!isEnumerated && secondEnumerator.moveNext()) {
                        return this.yieldReturn(secondEnumerator.getCurrent());
                    }
                    return false;
                },
                function () {
                    try {
                        Utils.dispose(firstEnumerator);
                    }
                    finally {
                        Utils.dispose(secondEnumerator);
                    }
                });
        });
    };

    Enumerable.prototype.alternate = function (alternateValueOrSequence) {
        var source = this;

        return new Enumerable(function () {
            var buffer;
            var enumerator;
            var alternateSequence;
            var alternateEnumerator;

            return new IEnumerator(
                function () {
                    if (alternateValueOrSequence instanceof Array || alternateValueOrSequence.getEnumerator != null) {
                        alternateSequence = Enumerable.from(Enumerable.from(alternateValueOrSequence).toArray()); // freeze
                    }
                    else {
                        alternateSequence = Enumerable.make(alternateValueOrSequence);
                    }
                    enumerator = source.getEnumerator();
                    if (enumerator.moveNext()) buffer = enumerator.getCurrent();
                },
                function () {
                    while (true) {
                        if (alternateEnumerator != null) {
                            if (alternateEnumerator.moveNext()) {
                                return this.yieldReturn(alternateEnumerator.getCurrent());
                            }
                            else {
                                alternateEnumerator = null;
                            }
                        }

                        if (buffer == null && enumerator.moveNext()) {
                            buffer = enumerator.getCurrent(); // hasNext
                            alternateEnumerator = alternateSequence.getEnumerator();
                            continue; // GOTO
                        }
                        else if (buffer != null) {
                            var retVal = buffer;
                            buffer = null;
                            return this.yieldReturn(retVal);
                        }

                        return this.yieldBreak();
                    }
                },
                function () {
                    try {
                        Utils.dispose(enumerator);
                    }
                    finally {
                        Utils.dispose(alternateEnumerator);
                    }
                });
        });
    };

    // Overload:function(value)
    // Overload:function(value, compareSelector)
    Enumerable.prototype.contains = function (value, comparer) {
        comparer = comparer || Bridge.EqualityComparer$1.$default;
        var enumerator = this.getEnumerator();
        try {
            while (enumerator.moveNext()) {
                if (comparer.equals(enumerator.getCurrent(), value)) return true;
            }
            return false;
        }
        finally {
            Utils.dispose(enumerator);
        }
    };

    Enumerable.prototype.defaultIfEmpty = function (defaultValue) {
        var source = this;
        if (defaultValue === undefined) defaultValue = null;

        return new Enumerable(function () {
            var enumerator;
            var isFirst = true;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    if (enumerator.moveNext()) {
                        isFirst = false;
                        return this.yieldReturn(enumerator.getCurrent());
                    }
                    else if (isFirst) {
                        isFirst = false;
                        return this.yieldReturn(defaultValue);
                    }
                    return false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function()
    // Overload:function(compareSelector)
    Enumerable.prototype.distinct = function (comparer) {
        return this.except(Enumerable.empty(), comparer);
    };

    Enumerable.prototype.distinctUntilChanged = function (compareSelector) {
        compareSelector = Utils.createLambda(compareSelector);
        var source = this;

        return new Enumerable(function () {
            var enumerator;
            var compareKey;
            var initial;

            return new IEnumerator(
                function () {
                    enumerator = source.getEnumerator();
                },
                function () {
                    while (enumerator.moveNext()) {
                        var key = compareSelector(enumerator.getCurrent());

                        if (initial) {
                            initial = false;
                            compareKey = key;
                            return this.yieldReturn(enumerator.getCurrent());
                        }

                        if (compareKey === key) {
                            continue;
                        }

                        compareKey = key;
                        return this.yieldReturn(enumerator.getCurrent());
                    }
                    return this.yieldBreak();
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function(second)
    // Overload:function(second, compareSelector)
    Enumerable.prototype.except = function (second, comparer) {
        var source = this;

        return new Enumerable(function () {
            var enumerator;
            var keys;

            return new IEnumerator(
                function () {
                    enumerator = source.getEnumerator();
                    keys = new Bridge.Dictionary$2(Object, Object)(null, comparer);
                    Enumerable.from(second).forEach(function (key) { keys.add(key); });
                },
                function () {
                    while (enumerator.moveNext()) {
                        var current = enumerator.getCurrent();
                        if (!keys.containsKey(current)) {
                            keys.add(current);
                            return this.yieldReturn(current);
                        }
                    }
                    return false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function(second)
    // Overload:function(second, compareSelector)
    Enumerable.prototype.intersect = function (second, comparer) {
        var source = this;

        return new Enumerable(function () {
            var enumerator;
            var keys;
            var outs;

            return new IEnumerator(
                function () {
                    enumerator = source.getEnumerator();

                    keys = new Bridge.Dictionary$2(Object, Object)(null, comparer);
                    Enumerable.from(second).forEach(function (key) { keys.add(key); });
                    outs = new Bridge.Dictionary$2(Object, Object)(null, comparer);
                },
                function () {
                    while (enumerator.moveNext()) {
                        var current = enumerator.getCurrent();
                        if (!outs.containsKey(current) && keys.containsKey(current)) {
                            outs.add(current);
                            return this.yieldReturn(current);
                        }
                    }
                    return false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function(second)
    // Overload:function(second, compareSelector)
    Enumerable.prototype.sequenceEqual = function (second, comparer) {
        comparer = comparer || Bridge.EqualityComparer$1.$default;

        var firstEnumerator = this.getEnumerator();
        try {
            var secondEnumerator = Enumerable.from(second).getEnumerator();
            try {
                while (firstEnumerator.moveNext()) {
                    if (!secondEnumerator.moveNext()
                    || !comparer.equals(firstEnumerator.getCurrent(), secondEnumerator.getCurrent())) {
                        return false;
                    }
                }

                if (secondEnumerator.moveNext()) return false;
                return true;
            }
            finally {
                Utils.dispose(secondEnumerator);
            }
        }
        finally {
            Utils.dispose(firstEnumerator);
        }
    };

    Enumerable.prototype.union = function (second, comparer) {
        var source = this;

        return new Enumerable(function () {
            var firstEnumerator;
            var secondEnumerator;
            var keys;

            return new IEnumerator(
                function () {
                    firstEnumerator = source.getEnumerator();
                    keys = new Bridge.Dictionary$2(Object, Object)(null, comparer);
                },
                function () {
                    var current;
                    if (secondEnumerator === undefined) {
                        while (firstEnumerator.moveNext()) {
                            current = firstEnumerator.getCurrent();
                            if (!keys.containsKey(current)) {
                                keys.add(current);
                                return this.yieldReturn(current);
                            }
                        }
                        secondEnumerator = Enumerable.from(second).getEnumerator();
                    }
                    while (secondEnumerator.moveNext()) {
                        current = secondEnumerator.getCurrent();
                        if (!keys.containsKey(current)) {
                            keys.add(current);
                            return this.yieldReturn(current);
                        }
                    }
                    return false;
                },
                function () {
                    try {
                        Utils.dispose(firstEnumerator);
                    }
                    finally {
                        Utils.dispose(secondEnumerator);
                    }
                });
        });
    };

    

    Enumerable.prototype.orderBy = function (keySelector, comparer) {
        return new OrderedEnumerable(this, keySelector, comparer, false);
    };

    Enumerable.prototype.orderByDescending = function (keySelector, comparer) {
        return new OrderedEnumerable(this, keySelector, comparer, true);
    };

    Enumerable.prototype.reverse = function () {
        var source = this;

        return new Enumerable(function () {
            var buffer;
            var index;

            return new IEnumerator(
                function () {
                    buffer = source.toArray();
                    index = buffer.length;
                },
                function () {
                    return (index > 0)
                        ? this.yieldReturn(buffer[--index])
                        : false;
                },
                Functions.Blank);
        });
    };

    Enumerable.prototype.shuffle = function () {
        var source = this;

        return new Enumerable(function () {
            var buffer;

            return new IEnumerator(
                function () { buffer = source.toArray(); },
                function () {
                    if (buffer.length > 0) {
                        var i = Math.floor(Math.random() * buffer.length);
                        return this.yieldReturn(buffer.splice(i, 1)[0]);
                    }
                    return false;
                },
                Functions.Blank);
        });
    };

    Enumerable.prototype.weightedSample = function (weightSelector) {
        weightSelector = Utils.createLambda(weightSelector);
        var source = this;

        return new Enumerable(function () {
            var sortedByBound;
            var totalWeight = 0;

            return new IEnumerator(
                function () {
                    sortedByBound = source
                        .choose(function (x) {
                            var weight = weightSelector(x);
                            if (weight <= 0) return null; // ignore 0

                            totalWeight += weight;
                            return { value: x, bound: totalWeight };
                        })
                        .toArray();
                },
                function () {
                    if (sortedByBound.length > 0) {
                        var draw = Math.floor(Math.random() * totalWeight) + 1;

                        var lower = -1;
                        var upper = sortedByBound.length;
                        while (upper - lower > 1) {
                            var index = Math.floor((lower + upper) / 2);
                            if (sortedByBound[index].bound >= draw) {
                                upper = index;
                            }
                            else {
                                lower = index;
                            }
                        }

                        return this.yieldReturn(sortedByBound[upper].value);
                    }

                    return this.yieldBreak();
                },
                Functions.Blank);
        });
    };

    

    // Overload:function(keySelector)
    // Overload:function(keySelector,elementSelector)
    // Overload:function(keySelector,elementSelector,resultSelector)
    // Overload:function(keySelector,elementSelector,resultSelector,compareSelector)
    Enumerable.prototype.groupBy = function (keySelector, elementSelector, resultSelector, comparer) {
        var source = this;
        keySelector = Utils.createLambda(keySelector);
        elementSelector = Utils.createLambda(elementSelector);
        if (resultSelector != null) resultSelector = Utils.createLambda(resultSelector);

        return new Enumerable(function () {
            var enumerator;

            return new IEnumerator(
                function () {
                    enumerator = source.toLookup(keySelector, elementSelector, comparer)
                        .toEnumerable()
                        .getEnumerator();
                },
                function () {
                    while (enumerator.moveNext()) {
                        return (resultSelector == null)
                            ? this.yieldReturn(enumerator.getCurrent())
                            : this.yieldReturn(resultSelector(enumerator.getCurrent().key(), enumerator.getCurrent()));
                    }
                    return false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function(keySelector)
    // Overload:function(keySelector,elementSelector)
    // Overload:function(keySelector,elementSelector,resultSelector)
    // Overload:function(keySelector,elementSelector,resultSelector,compareSelector)
    Enumerable.prototype.partitionBy = function (keySelector, elementSelector, resultSelector, comparer) {

        var source = this;
        keySelector = Utils.createLambda(keySelector);
        elementSelector = Utils.createLambda(elementSelector);
        comparer = comparer || Bridge.EqualityComparer$1.$default;
        var hasResultSelector;
        if (resultSelector == null) {
            hasResultSelector = false;
            resultSelector = function (key, group) { return new Grouping(key, group); };
        }
        else {
            hasResultSelector = true;
            resultSelector = Utils.createLambda(resultSelector);
        }

        return new Enumerable(function () {
            var enumerator;
            var key;
            var group = [];

            return new IEnumerator(
                function () {
                    enumerator = source.getEnumerator();
                    if (enumerator.moveNext()) {
                        key = keySelector(enumerator.getCurrent());
                        group.push(elementSelector(enumerator.getCurrent()));
                    }
                },
                function () {
                    var hasNext;
                    while ((hasNext = enumerator.moveNext()) == true) {
                        if (comparer.equals(key, keySelector(enumerator.getCurrent()))) {
                            group.push(elementSelector(enumerator.getCurrent()));
                        }
                        else break;
                    }

                    if (group.length > 0) {
                        var result = (hasResultSelector)
                            ? resultSelector(key, Enumerable.from(group))
                            : resultSelector(key, group);
                        if (hasNext) {
                            key = keySelector(enumerator.getCurrent());
                            group = [elementSelector(enumerator.getCurrent())];
                        }
                        else group = [];

                        return this.yieldReturn(result);
                    }

                    return false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    Enumerable.prototype.buffer = function (count) {
        var source = this;

        return new Enumerable(function () {
            var enumerator;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    var array = [];
                    var index = 0;
                    while (enumerator.moveNext()) {
                        array.push(enumerator.getCurrent());
                        if (++index >= count) return this.yieldReturn(array);
                    }
                    if (array.length > 0) return this.yieldReturn(array);
                    return false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    

    // Overload:function(func)
    // Overload:function(seed,func)
    // Overload:function(seed,func,resultSelector)
    Enumerable.prototype.aggregate = function (seed, func, resultSelector) {
        resultSelector = Utils.createLambda(resultSelector);
        return resultSelector(this.scan(seed, func, resultSelector).last());
    };

    // Overload:function()
    // Overload:function(selector)
    Enumerable.prototype.average = function (selector) {
        selector = Utils.createLambda(selector);

        var sum = 0;
        var count = 0;
        this.forEach(function (x) {
            sum += selector(x);
            ++count;
        });

        return sum / count;
    };

    // Overload:function()
    // Overload:function(predicate)
    Enumerable.prototype.count = function (predicate) {
        predicate = (predicate == null) ? Functions.True : Utils.createLambda(predicate);

        var count = 0;
        this.forEach(function (x, i) {
            if (predicate(x, i))++count;
        });
        return count;
    };

    // Overload:function()
    // Overload:function(selector)
    Enumerable.prototype.max = function (selector) {
        if (selector == null) selector = Functions.Identity;
        return this.select(selector).aggregate(function (a, b) { return (a > b) ? a : b; });
    };

    // Overload:function()
    // Overload:function(selector)
    Enumerable.prototype.min = function (selector) {
        if (selector == null) selector = Functions.Identity;
        return this.select(selector).aggregate(function (a, b) { return (a < b) ? a : b; });
    };

    Enumerable.prototype.maxBy = function (keySelector) {
        keySelector = Utils.createLambda(keySelector);
        return this.aggregate(function (a, b) { return (keySelector(a) > keySelector(b)) ? a : b; });
    };

    Enumerable.prototype.minBy = function (keySelector) {
        keySelector = Utils.createLambda(keySelector);
        return this.aggregate(function (a, b) { return (keySelector(a) < keySelector(b)) ? a : b; });
    };

    // Overload:function()
    // Overload:function(selector)
    Enumerable.prototype.sum = function (selector) {
        if (selector == null) selector = Functions.Identity;
        return this.select(selector).aggregate(0, function (a, b) { return a + b; });
    };

    

    Enumerable.prototype.elementAt = function (index) {
        var value;
        var found = false;
        this.forEach(function (x, i) {
            if (i == index) {
                value = x;
                found = true;
                return false;
            }
        });

        if (!found) throw new Error("index is less than 0 or greater than or equal to the number of elements in source.");
        return value;
    };

    Enumerable.prototype.elementAtOrDefault = function (index, defaultValue) {
        if (defaultValue === undefined) defaultValue = null;
        var value;
        var found = false;
        this.forEach(function (x, i) {
            if (i == index) {
                value = x;
                found = true;
                return false;
            }
        });

        return (!found) ? defaultValue : value;
    };

    // Overload:function()
    // Overload:function(predicate)
    Enumerable.prototype.first = function (predicate) {
        if (predicate != null) return this.where(predicate).first();

        var value;
        var found = false;
        this.forEach(function (x) {
            value = x;
            found = true;
            return false;
        });

        if (!found) throw new Error("first:No element satisfies the condition.");
        return value;
    };

    Enumerable.prototype.firstOrDefault = function (predicate, defaultValue) {
        if (defaultValue === undefined) defaultValue = null;
        if (predicate != null) return this.where(predicate).firstOrDefault(null, defaultValue);

        var value;
        var found = false;
        this.forEach(function (x) {
            value = x;
            found = true;
            return false;
        });
        return (!found) ? defaultValue : value;
    };

    // Overload:function()
    // Overload:function(predicate)
    Enumerable.prototype.last = function (predicate) {
        if (predicate != null) return this.where(predicate).last();

        var value;
        var found = false;
        this.forEach(function (x) {
            found = true;
            value = x;
        });

        if (!found) throw new Error("last:No element satisfies the condition.");
        return value;
    };

    // Overload:function(defaultValue)
    // Overload:function(defaultValue,predicate)
    Enumerable.prototype.lastOrDefault = function (predicate, defaultValue) {
        if (defaultValue === undefined) defaultValue = null;
        if (predicate != null) return this.where(predicate).lastOrDefault(null, defaultValue);

        var value;
        var found = false;
        this.forEach(function (x) {
            found = true;
            value = x;
        });
        return (!found) ? defaultValue : value;
    };

    // Overload:function()
    // Overload:function(predicate)
    Enumerable.prototype.single = function (predicate) {
        if (predicate != null) return this.where(predicate).single();

        var value;
        var found = false;
        this.forEach(function (x) {
            if (!found) {
                found = true;
                value = x;
            } else throw new Error("single:sequence contains more than one element.");
        });

        if (!found) throw new Error("single:No element satisfies the condition.");
        return value;
    };

    // Overload:function(defaultValue)
    // Overload:function(defaultValue,predicate)
    Enumerable.prototype.singleOrDefault = function (predicate, defaultValue) {
        if (defaultValue === undefined) defaultValue = null;
        if (predicate != null) return this.where(predicate).singleOrDefault(null, defaultValue);

        var value;
        var found = false;
        this.forEach(function (x) {
            if (!found) {
                found = true;
                value = x;
            } else throw new Error("single:sequence contains more than one element.");
        });

        return (!found) ? defaultValue : value;
    };

    Enumerable.prototype.skip = function (count) {
        var source = this;

        return new Enumerable(function () {
            var enumerator;
            var index = 0;

            return new IEnumerator(
                function () {
                    enumerator = source.getEnumerator();
                    while (index++ < count && enumerator.moveNext()) {
                    }
                    ;
                },
                function () {
                    return (enumerator.moveNext())
                        ? this.yieldReturn(enumerator.getCurrent())
                        : false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function(predicate<element>)
    // Overload:function(predicate<element,index>)
    Enumerable.prototype.skipWhile = function (predicate) {
        predicate = Utils.createLambda(predicate);
        var source = this;

        return new Enumerable(function () {
            var enumerator;
            var index = 0;
            var isSkipEnd = false;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    while (!isSkipEnd) {
                        if (enumerator.moveNext()) {
                            if (!predicate(enumerator.getCurrent(), index++)) {
                                isSkipEnd = true;
                                return this.yieldReturn(enumerator.getCurrent());
                            }
                            continue;
                        } else return false;
                    }

                    return (enumerator.moveNext())
                        ? this.yieldReturn(enumerator.getCurrent())
                        : false;

                },
                function () { Utils.dispose(enumerator); });
        });
    };

    Enumerable.prototype.take = function (count) {
        var source = this;

        return new Enumerable(function () {
            var enumerator;
            var index = 0;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    return (index++ < count && enumerator.moveNext())
                        ? this.yieldReturn(enumerator.getCurrent())
                        : false;
                },
                function () { Utils.dispose(enumerator); }
            );
        });
    };

    // Overload:function(predicate<element>)
    // Overload:function(predicate<element,index>)
    Enumerable.prototype.takeWhile = function (predicate) {
        predicate = Utils.createLambda(predicate);
        var source = this;

        return new Enumerable(function () {
            var enumerator;
            var index = 0;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    return (enumerator.moveNext() && predicate(enumerator.getCurrent(), index++))
                        ? this.yieldReturn(enumerator.getCurrent())
                        : false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function()
    // Overload:function(count)
    Enumerable.prototype.takeExceptLast = function (count) {
        if (count == null) count = 1;
        var source = this;

        return new Enumerable(function () {
            if (count <= 0) return source.getEnumerator(); // do nothing

            var enumerator;
            var q = [];

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    while (enumerator.moveNext()) {
                        if (q.length == count) {
                            q.push(enumerator.getCurrent());
                            return this.yieldReturn(q.shift());
                        }
                        q.push(enumerator.getCurrent());
                    }
                    return false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    Enumerable.prototype.takeFromLast = function (count) {
        if (count <= 0 || count == null) return Enumerable.empty();
        var source = this;

        return new Enumerable(function () {
            var sourceEnumerator;
            var enumerator;
            var q = [];

            return new IEnumerator(
                function () { sourceEnumerator = source.getEnumerator(); },
                function () {
                    if (enumerator == null) {
	                    while (sourceEnumerator.moveNext()) {
	                        if (q.length == count) q.shift();
	                        q.push(sourceEnumerator.getCurrent());
	                    }
                        enumerator = Enumerable.from(q).getEnumerator();
                    }
                    return (enumerator.moveNext())
                        ? this.yieldReturn(enumerator.getCurrent())
                        : false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function(item)
    // Overload:function(predicate)
    Enumerable.prototype.indexOf = function (item, comparer) {
        var found = null;

        // item as predicate
        if (typeof (item) === Types.Function) {
            this.forEach(function (x, i) {
                if (item(x, i)) {
                    found = i;
                    return false;
                }
            });
        }
        else {
            comparer = comparer || Bridge.EqualityComparer$1.$default;
            this.forEach(function (x, i) {
                if (comparer.equals(x, item)) {
                    found = i;
                    return false;
                }
            });
        }

        return (found !== null) ? found : -1;
    };

    // Overload:function(item)
    // Overload:function(predicate)
    Enumerable.prototype.lastIndexOf = function (item, comparer) {
        var result = -1;

        // item as predicate
        if (typeof (item) === Types.Function) {
            this.forEach(function (x, i) {
                if (item(x, i)) result = i;
            });
        }
        else {
            comparer = comparer || Bridge.EqualityComparer$1.$default;
            this.forEach(function (x, i) {
                if (comparer.equals(x, item)) result = i;
            });
        }

        return result;
    };

    


    Enumerable.prototype.asEnumerable = function () {
        return Enumerable.from(this);
    };

    Enumerable.prototype.toArray = function () {
        var array = [];
        this.forEach(function (x) { array.push(x); });
        return array;
    };

    Enumerable.prototype.toList = function (T) {
        var array = [];
        this.forEach(function (x) { array.push(x); });
        return new Bridge.List$1(T || Object)(array);
    };

    // Overload:function(keySelector)
    // Overload:function(keySelector, elementSelector)
    // Overload:function(keySelector, elementSelector, compareSelector)
    Enumerable.prototype.toLookup = function (keySelector, elementSelector, comparer) {
        keySelector = Utils.createLambda(keySelector);
        elementSelector = Utils.createLambda(elementSelector);

        var dict = new Bridge.Dictionary$2(Object, Object)(null, comparer);
        var order = [];
        this.forEach(function (x) {
            var key = keySelector(x);
            var element = elementSelector(x);

            var array = { v: null };
            if (dict.tryGetValue(key, array)) {
                array.v.push(element);
            }
            else {
                order.push(key);
                dict.add(key, [element]);
            }
        });
        return new Lookup(dict, order);
    };

    Enumerable.prototype.toObject = function (keySelector, elementSelector) {
        keySelector = Utils.createLambda(keySelector);
        elementSelector = Utils.createLambda(elementSelector);

        var obj = {};
        this.forEach(function (x) {
            obj[keySelector(x)] = elementSelector(x);
        });
        return obj;
    };

    // Overload:function(keySelector, elementSelector)
    // Overload:function(keySelector, elementSelector, compareSelector)
    Enumerable.prototype.toDictionary = function (keySelector, elementSelector, keyType, valueType, comparer) {
        keySelector = Utils.createLambda(keySelector);
        elementSelector = Utils.createLambda(elementSelector);

        var dict = new Bridge.Dictionary$2(keyType, valueType)(null, comparer);
        this.forEach(function (x) {
            dict.add(keySelector(x), elementSelector(x));
        });
        return dict;
    };

    // Overload:function()
    // Overload:function(replacer)
    // Overload:function(replacer, space)
    Enumerable.prototype.toJSONString = function (replacer, space) {
        if (typeof JSON === Types.Undefined || JSON.stringify == null) {
            throw new Error("toJSONString can't find JSON.stringify. This works native JSON support Browser or include json2.js");
        }
        return JSON.stringify(this.toArray(), replacer, space);
    };

    // Overload:function()
    // Overload:function(separator)
    // Overload:function(separator,selector)
    Enumerable.prototype.toJoinedString = function (separator, selector) {
        if (separator == null) separator = "";
        if (selector == null) selector = Functions.Identity;

        return this.select(selector).toArray().join(separator);
    };


    

    // Overload:function(action<element>)
    // Overload:function(action<element,index>)
    Enumerable.prototype.doAction = function (action) {
        var source = this;
        action = Utils.createLambda(action);

        return new Enumerable(function () {
            var enumerator;
            var index = 0;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    if (enumerator.moveNext()) {
                        action(enumerator.getCurrent(), index++);
                        return this.yieldReturn(enumerator.getCurrent());
                    }
                    return false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function(action<element>)
    // Overload:function(action<element,index>)
    // Overload:function(func<element,bool>)
    // Overload:function(func<element,index,bool>)
    Enumerable.prototype.forEach = function (action) {
        action = Utils.createLambda(action);

        var index = 0;
        var enumerator = this.getEnumerator();
        try {
            while (enumerator.moveNext()) {
                if (action(enumerator.getCurrent(), index++) === false) break;
            }
        } finally {
            Utils.dispose(enumerator);
        }
    };

    // Overload:function()
    // Overload:function(separator)
    // Overload:function(separator,selector)
    Enumerable.prototype.write = function (separator, selector) {
        if (separator == null) separator = "";
        selector = Utils.createLambda(selector);

        var isFirst = true;
        this.forEach(function (item) {
            if (isFirst) isFirst = false;
            else document.write(separator);
            document.write(selector(item));
        });
    };

    // Overload:function()
    // Overload:function(selector)
    Enumerable.prototype.writeLine = function (selector) {
        selector = Utils.createLambda(selector);

        this.forEach(function (item) {
            document.writeln(selector(item) + "<br />");
        });
    };

    Enumerable.prototype.force = function () {
        var enumerator = this.getEnumerator();

        try {
            while (enumerator.moveNext()) {
            }
        }
        finally {
            Utils.dispose(enumerator);
        }
    };

    

    Enumerable.prototype.letBind = function (func) {
        func = Utils.createLambda(func);
        var source = this;

        return new Enumerable(function () {
            var enumerator;

            return new IEnumerator(
                function () {
                    enumerator = Enumerable.from(func(source)).getEnumerator();
                },
                function () {
                    return (enumerator.moveNext())
                        ? this.yieldReturn(enumerator.getCurrent())
                        : false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    Enumerable.prototype.share = function () {
        var source = this;
        var sharedEnumerator;
        var disposed = false;

        return new DisposableEnumerable(function () {
            return new IEnumerator(
                function () {
                    if (sharedEnumerator == null) {
                        sharedEnumerator = source.getEnumerator();
                    }
                },
                function () {
                    if (disposed) throw new Error("enumerator is disposed");

                    return (sharedEnumerator.moveNext())
                        ? this.yieldReturn(sharedEnumerator.getCurrent())
                        : false;
                },
                Functions.Blank
            );
        }, function () {
            disposed = true;
            Utils.dispose(sharedEnumerator);
        });
    };

    Enumerable.prototype.memoize = function () {
        var source = this;
        var cache;
        var enumerator;
        var disposed = false;

        return new DisposableEnumerable(function () {
            var index = -1;

            return new IEnumerator(
                function () {
                    if (enumerator == null) {
                        enumerator = source.getEnumerator();
                        cache = [];
                    }
                },
                function () {
                    if (disposed) throw new Error("enumerator is disposed");

                    index++;
                    if (cache.length <= index) {
                        return (enumerator.moveNext())
                            ? this.yieldReturn(cache[index] = enumerator.getCurrent())
                            : false;
                    }

                    return this.yieldReturn(cache[index]);
                },
                Functions.Blank
            );
        }, function () {
            disposed = true;
            Utils.dispose(enumerator);
            cache = null;
        });
    };

    

    Enumerable.prototype.catchError = function (handler) {
        handler = Utils.createLambda(handler);
        var source = this;

        return new Enumerable(function () {
            var enumerator;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    try {
                        return (enumerator.moveNext())
                            ? this.yieldReturn(enumerator.getCurrent())
                            : false;
                    } catch (e) {
                        handler(e);
                        return false;
                    }
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    Enumerable.prototype.finallyAction = function (finallyAction) {
        finallyAction = Utils.createLambda(finallyAction);
        var source = this;

        return new Enumerable(function () {
            var enumerator;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    return (enumerator.moveNext())
                        ? this.yieldReturn(enumerator.getCurrent())
                        : false;
                },
                function () {
                    try {
                        Utils.dispose(enumerator);
                    } finally {
                        finallyAction();
                    }
                });
        });
    };

    

    // Overload:function()
    // Overload:function(selector)
    Enumerable.prototype.log = function (selector) {
        selector = Utils.createLambda(selector);

        return this.doAction(function (item) {
            if (typeof console !== Types.Undefined) {
                console.log(selector(item));
            }
        });
    };

    // Overload:function()
    // Overload:function(message)
    // Overload:function(message,selector)
    Enumerable.prototype.trace = function (message, selector) {
        if (message == null) message = "Trace";
        selector = Utils.createLambda(selector);

        return this.doAction(function (item) {
            if (typeof console !== Types.Undefined) {
                console.log(message, selector(item));
            }
        });
    };

    // private

    var OrderedEnumerable = function (source, keySelector, comparer, descending, parent) {
        this.source = source;
        this.keySelector = Utils.createLambda(keySelector);
        this.comparer = comparer || Bridge.Comparer$1.$default;
        this.descending = descending;
        this.parent = parent;
    };
    OrderedEnumerable.prototype = new Enumerable();

    OrderedEnumerable.prototype.createOrderedEnumerable = function (keySelector, comparer, descending) {
        return new OrderedEnumerable(this.source, keySelector, comparer, descending, this);
    };

    OrderedEnumerable.prototype.thenBy = function (keySelector, comparer) {
        return this.createOrderedEnumerable(keySelector, comparer, false);
    };

    OrderedEnumerable.prototype.thenByDescending = function (keySelector, comparer) {
        return this.createOrderedEnumerable(keySelector, comparer, true);
    };

    OrderedEnumerable.prototype.getEnumerator = function () {
        var self = this;
        var buffer;
        var indexes;
        var index = 0;

        return new IEnumerator(
            function () {
                buffer = [];
                indexes = [];
                self.source.forEach(function (item, index) {
                    buffer.push(item);
                    indexes.push(index);
                });
                var sortContext = SortContext.create(self, null);
                sortContext.GenerateKeys(buffer);

                indexes.sort(function (a, b) { return sortContext.compare(a, b); });
            },
            function () {
                return (index < indexes.length)
                    ? this.yieldReturn(buffer[indexes[index++]])
                    : false;
            },
            Functions.Blank
        );
    };

    var SortContext = function (keySelector, comparer, descending, child) {
        this.keySelector = keySelector;
        this.comparer = comparer;
        this.descending = descending;
        this.child = child;
        this.keys = null;
    };

    SortContext.create = function (orderedEnumerable, currentContext) {
        var context = new SortContext(orderedEnumerable.keySelector, orderedEnumerable.comparer, orderedEnumerable.descending, currentContext);
        if (orderedEnumerable.parent != null) return SortContext.create(orderedEnumerable.parent, context);
        return context;
    };

    SortContext.prototype.GenerateKeys = function (source) {
        var len = source.length;
        var keySelector = this.keySelector;
        var keys = new Array(len);
        for (var i = 0; i < len; i++) keys[i] = keySelector(source[i]);
        this.keys = keys;

        if (this.child != null) this.child.GenerateKeys(source);
    };

    SortContext.prototype.compare = function (index1, index2) {
        var comparison = this.comparer.compare(this.keys[index1], this.keys[index2]);

        if (comparison == 0) {
            if (this.child != null) return this.child.compare(index1, index2);
            return Utils.compare(index1, index2);
        }

        return (this.descending) ? -comparison : comparison;
    };

    var DisposableEnumerable = function (getEnumerator, dispose) {
        this.dispose = dispose;
        Enumerable.call(this, getEnumerator);
    };
    DisposableEnumerable.prototype = new Enumerable();

    // optimize array or arraylike object

    var ArrayEnumerable = function (source) {
        this.getSource = function () { return source; };
    };
    ArrayEnumerable.prototype = new Enumerable();

    ArrayEnumerable.prototype.any = function (predicate) {
        return (predicate == null)
            ? (this.getSource().length > 0)
            : Enumerable.prototype.any.apply(this, arguments);
    };

    ArrayEnumerable.prototype.count = function (predicate) {
        return (predicate == null)
            ? this.getSource().length
            : Enumerable.prototype.count.apply(this, arguments);
    };

    ArrayEnumerable.prototype.elementAt = function (index) {
        var source = this.getSource();
        return (0 <= index && index < source.length)
            ? source[index]
            : Enumerable.prototype.elementAt.apply(this, arguments);
    };

    ArrayEnumerable.prototype.elementAtOrDefault = function (index, defaultValue) {
        if (defaultValue === undefined) defaultValue = null;
        var source = this.getSource();
        return (0 <= index && index < source.length)
            ? source[index]
            : defaultValue;
    };

    ArrayEnumerable.prototype.first = function (predicate) {
        var source = this.getSource();
        return (predicate == null && source.length > 0)
            ? source[0]
            : Enumerable.prototype.first.apply(this, arguments);
    };

    ArrayEnumerable.prototype.firstOrDefault = function (predicate, defaultValue) {
        if (defaultValue === undefined) defaultValue = null;
        if (predicate != null) {
            return Enumerable.prototype.firstOrDefault.apply(this, arguments);
        }

        var source = this.getSource();
        return source.length > 0 ? source[0] : defaultValue;
    };

    ArrayEnumerable.prototype.last = function (predicate) {
        var source = this.getSource();
        return (predicate == null && source.length > 0)
            ? source[source.length - 1]
            : Enumerable.prototype.last.apply(this, arguments);
    };

    ArrayEnumerable.prototype.lastOrDefault = function (predicate, defaultValue) {
        if (defaultValue === undefined) defaultValue = null;
        if (predicate != null) {
            return Enumerable.prototype.lastOrDefault.apply(this, arguments);
        }

        var source = this.getSource();
        return source.length > 0 ? source[source.length - 1] : defaultValue;
    };

    ArrayEnumerable.prototype.skip = function (count) {
        var source = this.getSource();

        return new Enumerable(function () {
            var index;

            return new IEnumerator(
                function () { index = (count < 0) ? 0 : count; },
                function () {
                    return (index < source.length)
                        ? this.yieldReturn(source[index++])
                        : false;
                },
                Functions.Blank);
        });
    };

    ArrayEnumerable.prototype.takeExceptLast = function (count) {
        if (count == null) count = 1;
        return this.take(this.getSource().length - count);
    };

    ArrayEnumerable.prototype.takeFromLast = function (count) {
        return this.skip(this.getSource().length - count);
    };

    ArrayEnumerable.prototype.reverse = function () {
        var source = this.getSource();

        return new Enumerable(function () {
            var index;

            return new IEnumerator(
                function () {
                    index = source.length;
                },
                function () {
                    return (index > 0)
                        ? this.yieldReturn(source[--index])
                        : false;
                },
                Functions.Blank);
        });
    };

    ArrayEnumerable.prototype.sequenceEqual = function (second, comparer) {
        if ((second instanceof ArrayEnumerable || second instanceof Array)
            && comparer == null
            && Enumerable.from(second).count() != this.count()) {
            return false;
        }

        return Enumerable.prototype.sequenceEqual.apply(this, arguments);
    };

    ArrayEnumerable.prototype.toJoinedString = function (separator, selector) {
        var source = this.getSource();
        if (selector != null || !(source instanceof Array)) {
            return Enumerable.prototype.toJoinedString.apply(this, arguments);
        }

        if (separator == null) separator = "";
        return source.join(separator);
    };

    ArrayEnumerable.prototype.getEnumerator = function () {
        return new Bridge.ArrayEnumerator(this.getSource());
    };

    // optimization for multiple where and multiple select and whereselect

    var WhereEnumerable = function (source, predicate) {
        this.prevSource = source;
        this.prevPredicate = predicate; // predicate.length always <= 1
    };
    WhereEnumerable.prototype = new Enumerable();

    WhereEnumerable.prototype.where = function (predicate) {
        predicate = Utils.createLambda(predicate);

        if (predicate.length <= 1) {
            var prevPredicate = this.prevPredicate;
            var composedPredicate = function (x) { return prevPredicate(x) && predicate(x); };
            return new WhereEnumerable(this.prevSource, composedPredicate);
        }
        else {
            // if predicate use index, can't compose
            return Enumerable.prototype.where.call(this, predicate);
        }
    };

    WhereEnumerable.prototype.select = function (selector) {
        selector = Utils.createLambda(selector);

        return (selector.length <= 1)
            ? new WhereSelectEnumerable(this.prevSource, this.prevPredicate, selector)
            : Enumerable.prototype.select.call(this, selector);
    };

    WhereEnumerable.prototype.getEnumerator = function () {
        var predicate = this.prevPredicate;
        var source = this.prevSource;
        var enumerator;

        return new IEnumerator(
            function () { enumerator = source.getEnumerator(); },
            function () {
                while (enumerator.moveNext()) {
                    if (predicate(enumerator.getCurrent())) {
                        return this.yieldReturn(enumerator.getCurrent());
                    }
                }
                return false;
            },
            function () { Utils.dispose(enumerator); });
    };

    var WhereSelectEnumerable = function (source, predicate, selector) {
        this.prevSource = source;
        this.prevPredicate = predicate; // predicate.length always <= 1 or null
        this.prevSelector = selector; // selector.length always <= 1
    };
    WhereSelectEnumerable.prototype = new Enumerable();

    WhereSelectEnumerable.prototype.where = function (predicate) {
        predicate = Utils.createLambda(predicate);

        return (predicate.length <= 1)
            ? new WhereEnumerable(this, predicate)
            : Enumerable.prototype.where.call(this, predicate);
    };

    WhereSelectEnumerable.prototype.select = function (selector) {
        selector = Utils.createLambda(selector);

        if (selector.length <= 1) {
            var prevSelector = this.prevSelector;
            var composedSelector = function (x) { return selector(prevSelector(x)); };
            return new WhereSelectEnumerable(this.prevSource, this.prevPredicate, composedSelector);
        }
        else {
            // if selector use index, can't compose
            return Enumerable.prototype.select.call(this, selector);
        }
    };

    WhereSelectEnumerable.prototype.getEnumerator = function () {
        var predicate = this.prevPredicate;
        var selector = this.prevSelector;
        var source = this.prevSource;
        var enumerator;

        return new IEnumerator(
            function () { enumerator = source.getEnumerator(); },
            function () {
                while (enumerator.moveNext()) {
                    if (predicate == null || predicate(enumerator.getCurrent())) {
                        return this.yieldReturn(selector(enumerator.getCurrent()));
                    }
                }
                return false;
            },
            function () { Utils.dispose(enumerator); });
    };

    // Collections

    // dictionary = Dictionary<TKey, TValue[]>
    var Lookup = function (dictionary, order) {
        this.count = function () {
            return dictionary.getCount();
        };
        this.get = function (key) {
            var value = { v: null };
            var success = dictionary.tryGetValue(key, value);
            return Enumerable.from(success ? value.v : []);
        };
        this.contains = function (key) {
            return dictionary.containsKey(key);
        };
        this.toEnumerable = function () {
            return Enumerable.from(order).select(function (key) {
                return new Grouping(key, dictionary.get(key));
            });
        };
        this.getEnumerator = function () {
            return this.toEnumerable().getEnumerator();
        };
    };
    Lookup.$$inheritors = [Bridge.IEnumerable];

    var Grouping = function (groupKey, elements) {
        this.key = function () {
            return groupKey;
        };
        ArrayEnumerable.call(this, elements);
    };
    Grouping.prototype = new ArrayEnumerable();

    // module export
    if (typeof define === Types.Function && define.amd) { // AMD
        define("linqjs", [], function () { return Enumerable; });
    }
    else if (typeof module !== Types.Undefined && module.exports) { // Node
        module.exports = Enumerable;
    }
    else {
        root.Enumerable = Enumerable;
    }

    Bridge.Linq = {};
    Bridge.Linq.Enumerable = Enumerable;
})(this);
