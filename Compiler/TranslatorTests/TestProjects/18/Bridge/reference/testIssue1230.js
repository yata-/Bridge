(function (globals) {
    "use strict";

    Bridge.define('TestIssue1230.Issue1230', {
        statics: {
            testLong: function () {
                // Conversions should not have duplicated Bridge.Long: Bridge.Long(Bridge.Long(v))
                var v = 7;
                var l = Bridge.Long(v);
                l = Bridge.Long(v);
    
                console.log(Bridge.Long(v).toString());
                console.log(Bridge.Long((v)).toString());
                console.log(Bridge.Long(2).toString());
                console.log(Bridge.Long(2).toString());
                console.log(Bridge.Long(7).toString());
                TestIssue1230.Issue1230.methodLong(Bridge.Long(v));
                TestIssue1230.Issue1230.methodLong(Bridge.Long(v));
            },
            methodLong: function (l) {
            },
            methodDecimal: function (l) {
            },
            methodInt: function (l) {
            },
            testDecimal: function () {
                // Conversions should not have duplicated Bridge.Decimal: Bridge.Decimal(Bridge.Decimal(v))
                var v = 7;
                var l = Bridge.Decimal(v);
                l = Bridge.Decimal(v);
    
                console.log(Bridge.Decimal(v).toString());
                console.log(Bridge.Decimal((v)).toString());
                console.log(Bridge.Decimal(2.0).toString());
                console.log(Bridge.Decimal(2.0).toString());
                console.log(Bridge.Decimal(7.0).toString());
                TestIssue1230.Issue1230.methodDecimal(Bridge.Decimal(v));
                TestIssue1230.Issue1230.methodDecimal(Bridge.Decimal(v));
            },
            testInt: function () {
                var v = 7;
                var l = v;
                l = v;
    
                console.log(v);
                console.log((v));
                console.log(2);
                console.log(2);
                console.log(7);
                TestIssue1230.Issue1230.methodInt(v);
                TestIssue1230.Issue1230.methodInt(v);
            }
        }
    });
    
    
    
    Bridge.init();
})(this);
