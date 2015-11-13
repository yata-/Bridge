/* global Bridge */

"use strict";

Bridge.define('Test.App', {
    statics: {
        config: {
            init: function () {
                Bridge.ready(this.main);
            }
        },
        main: function () {
            var inst = new Test.App();
        }
    },
    _something: "HI!",
    config: {
        init: function () {
            Bridge.ready(this.test, this);
        }
    },
    test: function () {
        console.log(this._something);
    }
});

Bridge.init();