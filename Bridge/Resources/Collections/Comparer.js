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