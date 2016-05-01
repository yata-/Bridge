Bridge.define('Bridge.Comparer$1', function (T) {
    return {
        inherits: [Bridge.IComparer$1(T)],

        constructor: function (fn) {
            this.fn = fn;
            this.compare = fn;
        }
    }
});

Bridge.Comparer$1.$default = new Bridge.Comparer$1(Object)(function (x, y) {
    if (!Bridge.hasValue(x)) {
        return !Bridge.hasValue(y) ? 0 : -1;
    } else if (!Bridge.hasValue(y)) {
        return 1;
    }

    return Bridge.compare(x, y);
});