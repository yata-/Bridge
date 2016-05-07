(function (globals) {
    "use strict";

    Bridge.define('Test.BridgeIssues.N1215.TestExtraBrackets', {
        testDouble: function () {
            var v = 0;
            v = --v;
            v = ++v;
        },
        testDecimal: function () {
            var v = Bridge.Decimal(0);
            v = (v = v.dec());
            v = (v = v.inc());
        },
        testSingle: function () {
            var v = 0;
            v = --v;
            v = ++v;
        },
        testLong: function () {
            var v = Bridge.Long(0);
            v = (v = v.dec());
            v = (v = v.inc());
        }
    });
    
    
    
    Bridge.init();
})(this);
