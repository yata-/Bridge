(function (globals) {
    "use strict";

    Bridge.define('Test.BridgeIssues.N1212.TestIncrementDecrement', {
        testDouble: function () {
            var v = 0;
            v++;
            v--;
            v = v--;
            v = --v;
            v = v++;
            v = ++v;
            var v1 = v++;
            var v2 = v--;
            var v3 = ++v;
            var v4 = --v;
        },
        testDecimal: function () {
            var $t;
            var v = Bridge.Decimal(0);
            (v = v.add(1));
            (v = v.sub(1));
            v = ($t = v, v = v.sub(1), $t);
            v = (v = v.sub(1));
            v = ($t = v, v = v.add(1), $t);
            v = (v = v.add(1));
            var v1 = ($t = v, v = v.add(1), $t);
            var v2 = ($t = v, v = v.sub(1), $t);
            var v3 = (v = v.add(1));
            var v4 = (v = v.sub(1));
        },
        testSingle: function () {
            var v = 0;
            v++;
            v--;
            v = v--;
            v = --v;
            v = v++;
            v = ++v;
            var v1 = v++;
            var v2 = v--;
            var v3 = ++v;
            var v4 = --v;
        },
        testLong: function () {
            var v = Bridge.Long(0);
            v = v.add(Bridge.Long(1));
            v = v.sub(Bridge.Long(1));
            v = Bridge.identity(v, (v = v.sub(Bridge.Long(1))));
            v = ((v = v.sub(Bridge.Long(1))));
            v = Bridge.identity(v, (v = v.add(Bridge.Long(1))));
            v = ((v = v.add(Bridge.Long(1))));
            var v1 = Bridge.identity(v, (v = v.add(Bridge.Long(1))));
            var v2 = Bridge.identity(v, (v = v.sub(Bridge.Long(1))));
            var v3 = ((v = v.add(Bridge.Long(1))));
            var v4 = ((v = v.sub(Bridge.Long(1))));
        }
    });
    
    
    
    Bridge.init();
})(this);
