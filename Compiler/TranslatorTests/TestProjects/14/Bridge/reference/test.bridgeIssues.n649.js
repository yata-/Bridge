/* global Bridge */

"use strict";

Bridge.define('Test.BridgeIssues.N649.TestClassA', {
    doSomething: function (i) {
        //It should not change case of Console.WriteLine
        console.log("Say something");
    }
});



Bridge.init();