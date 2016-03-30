// @source /Collections/Interfaces.js

Bridge.define('Bridge.IEnumerable');
Bridge.define('Bridge.IEnumerator');
Bridge.define('Bridge.IEqualityComparer');
Bridge.define('Bridge.ICollection', {
    inherits: [Bridge.IEnumerable]
});

Bridge.define('Bridge.IEnumerator$1', function (T) { return {
    inherits: [Bridge.IEnumerator]
};
});

Bridge.define('Bridge.IEnumerable$1', function (T) {
    return {
        inherits: [Bridge.IEnumerable]
    };
});

Bridge.define('Bridge.ICollection$1', function (T) {
    return {
        inherits: [Bridge.IEnumerable$1(T)]
    };
});

Bridge.define('Bridge.IEqualityComparer$1', function (T) {
    return {};
});

Bridge.define('Bridge.IDictionary$2', function (TKey, TValue) {
    return {
        inherits: [Bridge.IEnumerable$1(Bridge.KeyValuePair$2(TKey, TValue))]
    };
});

Bridge.define('Bridge.IList$1', function (T) {
    return {
        inherits: [Bridge.ICollection$1(T)]
    };
});

Bridge.define('Bridge.IComparer$1', function (T) {
    return {};
});

Bridge.define('Bridge.ISet$1', function (T) {
    return {
        inherits: [Bridge.ICollection$1(T)]
    };
});