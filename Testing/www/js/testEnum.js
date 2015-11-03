/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.TestEnum', {
    statics: {
        testParse: function (assert) {
            assert.expect(4);

            assert.equal(Bridge.Enum.parse(ClientTestLibrary.TestEnum.Digits, "Zero"), ClientTestLibrary.TestEnum.Digits.zero, "Parse Digits.Zero");
            assert.equal(Bridge.Enum.parse(ClientTestLibrary.TestEnum.Digits, "One"), ClientTestLibrary.TestEnum.Digits.one, "Parse Digits.One");
            assert.equal(Bridge.Enum.parse(ClientTestLibrary.TestEnum.Digits, "Two"), ClientTestLibrary.TestEnum.Digits.two, "Parse Digits.Two");

            assert.throws(function () {
                var d = Bridge.Enum.parse(ClientTestLibrary.TestEnum.Digits, "ONE");
            }, "Parse ONE");
        },
        testToString: function (assert) {
            assert.expect(4);

            assert.equal(Bridge.Enum.toString(ClientTestLibrary.TestEnum.Digits, ClientTestLibrary.TestEnum.Digits.zero), "Zero", "ToString Digits.Zero");
            assert.equal(Bridge.Enum.toString(ClientTestLibrary.TestEnum.Digits, ClientTestLibrary.TestEnum.Digits.one), "One", "ToString Digits.One");
            assert.equal(Bridge.Enum.toString(ClientTestLibrary.TestEnum.Digits, ClientTestLibrary.TestEnum.Digits.two), "Two", "ToString Digits.Two");
            assert.equal(Bridge.Enum.toString(ClientTestLibrary.TestEnum.Digits, 150), "150", "ToString (Digits)150");
        },
        testGetValues: function (assert) {
            assert.expect(2);

            assert.equal(Bridge.Enum.getValues(ClientTestLibrary.TestEnum.Abc), [ClientTestLibrary.TestEnum.Abc.a, ClientTestLibrary.TestEnum.Abc.b, ClientTestLibrary.TestEnum.Abc.c], "Abc values");

            assert.equal(Bridge.Enum.getValues(ClientTestLibrary.TestEnum.Digits), [ClientTestLibrary.TestEnum.Digits.zero, ClientTestLibrary.TestEnum.Digits.one, ClientTestLibrary.TestEnum.Digits.two], "Digits values");
        }
    }
});

Bridge.define('ClientTestLibrary.TestEnum.Abc', {
    statics: {
        a: -1,
        b: 0,
        c: 1
    },
    enum: true
});

Bridge.define('ClientTestLibrary.TestEnum.Digits', {
    statics: {
        zero: 0,
        one: 1,
        two: 2
    },
    enum: true
});

