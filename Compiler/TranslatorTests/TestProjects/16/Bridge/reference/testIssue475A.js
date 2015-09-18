/* global Bridge */

"use strict";
Bridge.define('TestIssue475A.Bridge475Event', {
    config: {
        properties: {
            Data: 0
        }
    },
    preventDefault: function () {
        this.setData(77);
    }
});

Bridge.define('TestIssue475A.Bridge475Extension1', {
    statics: {
        keyDown: function (T) {
            return Bridge.fn.bind(this, function (entity, handler) {
                return null;
            });
        }
    }
});

Bridge.define('TestIssue475A.Bridge475Extension2', {
    statics: {
        keyDown: function (T) {
            return Bridge.fn.bind(this, function (entity, handler) {
                return null;
            });
        }
    }
});

Bridge.define('TestIssue475A.Test', {
    statics: {
        n475: function () {
            var b = new TestIssue475A.Bridge475();

            TestIssue475A.Bridge475Extension1.keyDown(TestIssue475A.Bridge475Event)(b, function (ev) {
                ev.preventDefault();
            });

            b.keyDown(4);

            TestIssue475A.Bridge475Extension2.keyDown(Bridge.Decimal)(b, "5");
        }
    }
});

