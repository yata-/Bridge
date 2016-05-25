// @source /Collections/Interfaces.js

Bridge.define('System.Collections.IEnumerable');
Bridge.define('System.Collections.IEnumerator');
Bridge.define('System.Collections.IEqualityComparer');
Bridge.define('System.Collections.ICollection', {
    inherits: [System.Collections.IEnumerable]
});

Bridge.define('System.Collections.Generic.IEnumerator$1', function (T) { return {
    inherits: [System.Collections.IEnumerator]
};
});

Bridge.define('System.Collections.Generic.IEnumerable$1', function (T) {
    return {
        inherits: [System.Collections.IEnumerable]
    };
});

Bridge.define('System.Collections.Generic.ICollection$1', function (T) {
    return {
        inherits: [System.Collections.Generic.IEnumerable$1(T)]
    };
});

Bridge.define('System.Collections.Generic.IEqualityComparer$1', function (T) {
    return {};
});

Bridge.define('System.Collections.Generic.IDictionary$2', function (TKey, TValue) {
    return {
        inherits: [System.Collections.Generic.IEnumerable$1(System.Collections.Generic.KeyValuePair$2(TKey, TValue))]
    };
});

Bridge.define('System.Collections.Generic.IList$1', function (T) {
    return {
        inherits: [System.Collections.Generic.ICollection$1(T)]
    };
});

Bridge.define('System.Collections.Generic.IComparer$1', function (T) {
    return {};
});

Bridge.define('System.Collections.Generic.ISet$1', function (T) {
    return {
        inherits: [System.Collections.Generic.ICollection$1(T)]
    };
});