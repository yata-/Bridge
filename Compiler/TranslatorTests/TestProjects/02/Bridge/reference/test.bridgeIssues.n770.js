/* global Bridge */

"use strict";

Bridge.define('Test.BridgeIssues.N770.IBase');

Bridge.define('Test.BridgeIssues.N770.Impl', {
    inherits: [Test.BridgeIssues.N770.IBase],
    config: {
        properties: {
            Prop: 0
        }
    }
});



Bridge.init();