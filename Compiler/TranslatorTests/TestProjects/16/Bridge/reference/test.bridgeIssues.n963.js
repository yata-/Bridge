(function (globals) {
    "use strict";

    Bridge.init(function(){
        // One line above the method
        var before = 5;
        before++;
        // One line below the method
    });
    
    Bridge.define('Test.BridgeIssues.N963.Class963', {
        statics: {
            main: function () {
                var i = 5;
                i++;
            }
        }
    });
    
    
    
    Bridge.init();
})(this);
