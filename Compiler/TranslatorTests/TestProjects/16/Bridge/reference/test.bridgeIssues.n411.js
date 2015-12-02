/* global Bridge */

"use strict";

Bridge.define('Test.BridgeIssues.N411.App', {
    testFillText: function () {
        var canvas = Bridge.get(document).getElementById("mycanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillText("text", 50, 50);
    }
});



Bridge.init();