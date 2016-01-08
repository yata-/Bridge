/* global Bridge */

"use strict";

/* global Bridge */

"use strict";

Bridge.define('Bridge.Test.Assert', {
    statics: {
        assert: null,
        areEqual: function (actual, expected) {
            Bridge.get(Bridge.Test.Assert).assert.deepEqual(actual, expected);
        },
        areEqual$1: function (actual, expected, description) {
            Bridge.get(Bridge.Test.Assert).assert.deepEqual(actual, expected, description);
        },
        areDeepEqual: function (actual, expected) {
            Bridge.get(Bridge.Test.Assert).assert.deepEqual(actual, expected);
        },
        areDeepEqual$1: function (actual, expected, description) {
            Bridge.get(Bridge.Test.Assert).assert.deepEqual(actual, expected, description);
        },
        areStrictEqual: function (actual, expected) {
            Bridge.get(Bridge.Test.Assert).assert.strictEqual(actual, expected);
        },
        areStrictEqual$1: function (actual, expected, description) {
            Bridge.get(Bridge.Test.Assert).assert.strictEqual(actual, expected, description);
        },
        areNotEqual: function (actual, expected) {
            Bridge.get(Bridge.Test.Assert).assert.notDeepEqual(actual, expected);
        },
        areNotEqual$1: function (actual, expected, description) {
            Bridge.get(Bridge.Test.Assert).assert.notDeepEqual(actual, expected, description);
        },
        areNotDeepEqual: function (actual, expected) {
            Bridge.get(Bridge.Test.Assert).assert.notDeepEqual(actual, expected);
        },
        areNotDeepEqual$1: function (actual, expected, description) {
            Bridge.get(Bridge.Test.Assert).assert.notDeepEqual(actual, expected, description);
        },
        areNotStrictEqual: function (actual, expected) {
            Bridge.get(Bridge.Test.Assert).assert.notStrictEqual(actual, expected);
        },
        areNotStrictEqual$1: function (actual, expected, description) {
            Bridge.get(Bridge.Test.Assert).assert.notStrictEqual(actual, expected, description);
        },
        $true: function (condition) {
            Bridge.get(Bridge.Test.Assert).assert.ok(condition);
        },
        true$1: function (condition, message) {
            Bridge.get(Bridge.Test.Assert).assert.ok(condition, message);
        },
        $false: function (condition) {
            Bridge.get(Bridge.Test.Assert).assert.notOk(condition);
        },
        false$1: function (condition, message) {
            Bridge.get(Bridge.Test.Assert).assert.notOk(condition, message);
        },
        fail: function () {
            Bridge.get(Bridge.Test.Assert).assert.ok(false);
        },
        fail$1: function (message) {
            Bridge.get(Bridge.Test.Assert).assert.notOk(true, message);
        },
        $throws: function (block) {
            Bridge.get(Bridge.Test.Assert).assert.throws(block, "");
        },
        throws$5: function (block, message) {
            Bridge.get(Bridge.Test.Assert).assert.throws(block, message);
        },
        throws$3: function (block, expected) {
            Bridge.get(Bridge.Test.Assert).assert.throws(block, expected);
        },
        throws$4: function (block, expected, message) {
            Bridge.get(Bridge.Test.Assert).assert.throws(block, expected, message);
        },
        throws$1: function (block, expected) {
            Bridge.get(Bridge.Test.Assert).assert.throws(block, expected);
        },
        throws$2: function (block, expected, message) {
            Bridge.get(Bridge.Test.Assert).assert.throws(block, expected, message);
        },
        $null: function (anObject) {
            Bridge.get(Bridge.Test.Assert).assert.ok(anObject === null);
        },
        null$1: function (anObject, message) {
            Bridge.get(Bridge.Test.Assert).assert.ok(anObject === null, message);
        },
        notNull: function (anObject) {
            Bridge.get(Bridge.Test.Assert).assert.notOk(anObject === null);
        },
        notNull$1: function (anObject, message) {
            Bridge.get(Bridge.Test.Assert).assert.notOk(anObject === null, message);
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestAbstractClass', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestAbstractClass).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestAbstractClass).instance = new Bridge.ClientTest.BasicCSharp.TestAbstractClass();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestAbstractClass).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestAbstractClass).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestAbstractClass).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestAbstractClass).getInstance();
            return r;
        },
        testB: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestAbstractClass).beforeTest(true, assert);
            assert.expect(3);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestAbstractClass).testB();
        },
        testC: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestAbstractClass).beforeTest(true, assert);
            assert.expect(3);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestAbstractClass).testC();
        },
        testBC: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestAbstractClass).beforeTest(true, assert);
            assert.expect(6);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestAbstractClass).testBC();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).instance = new Bridge.ClientTest.BasicCSharp.TestEnum();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).getInstance();
            return r;
        },
        testParse: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).beforeTest(true, assert);
            assert.expect(6);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testParse();
        },
        testParseIgnoreCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).beforeTest(true, assert);
            assert.expect(4);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testParseIgnoreCase();
        },
        testToString: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).beforeTest(true, assert);
            assert.expect(4);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testToString();
        },
        testGetValues: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testGetValues();
        },
        testCompareTo: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).beforeTest(true, assert);
            assert.expect(3);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testCompareTo();
        },
        testFormat: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).beforeTest(true, assert);
            assert.expect(22);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testFormat();
        },
        testGetName: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).beforeTest(true, assert);
            assert.expect(3);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testGetName();
        },
        testGetNames: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testGetNames();
        },
        testHasFlag: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).beforeTest(true, assert);
            assert.expect(5);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testHasFlag();
        },
        testIsDefined: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).beforeTest(true, assert);
            assert.expect(6);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testIsDefined();
        },
        testTryParse: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).beforeTest(true, assert);
            assert.expect(11);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestEnum).testTryParse();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInheritance', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInheritance).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInheritance).instance = new Bridge.ClientTest.BasicCSharp.TestInheritance();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInheritance).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInheritance).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInheritance).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInheritance).getInstance();
            return r;
        },
        testA: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInheritance).beforeTest(true, assert);
            assert.expect(4);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestInheritance).testA();
        },
        testB: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInheritance).beforeTest(true, assert);
            assert.expect(5);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestInheritance).testB();
        },
        testAB: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInheritance).beforeTest(true, assert);
            assert.expect(4);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestInheritance).testAB();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInterfaces', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInterfaces).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInterfaces).instance = new Bridge.ClientTest.BasicCSharp.TestInterfaces();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInterfaces).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInterfaces).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInterfaces).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInterfaces).getInstance();
            return r;
        },
        testInterfaceMethodAndProperty: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInterfaces).beforeTest(true, assert);
            assert.expect(6);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestInterfaces).testInterfaceMethodAndProperty();
        },
        testExplicitInterfaceMethodAndProperty: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInterfaces).beforeTest(true, assert);
            assert.expect(3);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestInterfaces).testExplicitInterfaceMethodAndProperty();
        },
        testTwoInterfaces: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInterfaces).beforeTest(true, assert);
            assert.expect(9);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestInterfaces).testTwoInterfaces();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestMethodParametersClass', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestMethodParametersClass).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestMethodParametersClass).instance = new Bridge.ClientTest.BasicCSharp.TestMethodParametersClass();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestMethodParametersClass).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestMethodParametersClass).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestMethodParametersClass).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestMethodParametersClass).getInstance();
            return r;
        },
        test: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestMethodParametersClass).beforeTest(true, assert);
            assert.expect(3);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestMethodParametersClass).test();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestOverloadInstanceMethods', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestOverloadInstanceMethods).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestOverloadInstanceMethods).instance = new Bridge.ClientTest.BasicCSharp.TestOverloadInstanceMethods();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestOverloadInstanceMethods).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestOverloadInstanceMethods).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestOverloadInstanceMethods).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestOverloadInstanceMethods).getInstance();
            return r;
        },
        testInstance: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestOverloadInstanceMethods).beforeTest(true, assert);
            assert.expect(17);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestOverloadInstanceMethods).testInstance();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestOverloadStaticMethods', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestOverloadStaticMethods).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestOverloadStaticMethods).instance = new Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestOverloadStaticMethods).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestOverloadStaticMethods).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestOverloadStaticMethods).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestOverloadStaticMethods).getInstance();
            return r;
        },
        testStatic: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestOverloadStaticMethods).beforeTest(true, assert);
            assert.expect(16);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestOverloadStaticMethods).testStatic();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchBlocks', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchBlocks).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchBlocks).instance = new Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchBlocks).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchBlocks).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchBlocks).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchBlocks).getInstance();
            return r;
        },
        simpleTryCatch: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchBlocks).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).simpleTryCatch();
        },
        caughtExceptions: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchBlocks).beforeTest(true, assert);
            assert.expect(3);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).caughtExceptions();
        },
        thrownExceptions: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchBlocks).beforeTest(true, assert);
            assert.expect(12);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).thrownExceptions();
        },
        bridge320: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchBlocks).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).bridge320();
        },
        bridge343: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchBlocks).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchBlocks).bridge343();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchFinallyBlocks', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchFinallyBlocks).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchFinallyBlocks).instance = new Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchFinallyBlocks).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchFinallyBlocks).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchFinallyBlocks).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchFinallyBlocks).getInstance();
            return r;
        },
        simpleTryCatchFinally: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchFinallyBlocks).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).simpleTryCatchFinally();
        },
        caughtExceptions: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchFinallyBlocks).beforeTest(true, assert);
            assert.expect(4);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).caughtExceptions();
        },
        thrownExceptions: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchFinallyBlocks).beforeTest(true, assert);
            assert.expect(16);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestTryCatchFinallyBlocks).thrownExceptions();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestValueTypes', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestValueTypes).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestValueTypes).instance = new Bridge.ClientTest.BasicCSharp.TestValueTypes();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestValueTypes).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestValueTypes).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestValueTypes).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestValueTypes).getInstance();
            return r;
        },
        testInstanceConstructorsAndMethods: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestValueTypes).beforeTest(true, assert);
            assert.expect(18);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestValueTypes).testInstanceConstructorsAndMethods();
        },
        testStaticConstructorsAndMethods: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestValueTypes).beforeTest(true, assert);
            assert.expect(7);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestValueTypes).testStaticConstructorsAndMethods();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestVirtualMethods', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestVirtualMethods).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestVirtualMethods).instance = new Bridge.ClientTest.BasicCSharp.TestVirtualMethods();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestVirtualMethods).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestVirtualMethods).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestVirtualMethods).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestVirtualMethods).getInstance();
            return r;
        },
        testB: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestVirtualMethods).beforeTest(true, assert);
            assert.expect(7);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestVirtualMethods).testB();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestReferenceTypes', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestReferenceTypes).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestReferenceTypes).instance = new Bridge.ClientTest.BasicCSharp.TestReferenceTypes();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestReferenceTypes).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestReferenceTypes).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestReferenceTypes).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestReferenceTypes).getInstance();
            return r;
        },
        testInstanceConstructorsAndMethods: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestReferenceTypes).beforeTest(true, assert);
            assert.expect(26);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestReferenceTypes).testInstanceConstructorsAndMethods();
        },
        testStaticConstructorsAndMethods: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestReferenceTypes).beforeTest(true, assert);
            assert.expect(13);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestReferenceTypes).testStaticConstructorsAndMethods();
        },
        testMethodParameters: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestReferenceTypes).beforeTest(true, assert);
            assert.expect(16);
            Bridge.get(Bridge.ClientTest.BasicCSharp.TestReferenceTypes).testMethodParameters();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).instance = new Bridge.ClientTest.ArrayTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        lengthWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.lengthWorks();
        },
        rankIsOne: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.rankIsOne();
        },
        getLengthWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.getLengthWorks();
        },
        getLowerBound: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.getLowerBound();
        },
        getUpperBoundWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.getUpperBoundWorks();
        },
        gettingValueByIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.gettingValueByIndexWorks();
        },
        getValueWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.getValueWorks();
        },
        settingValueByIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.settingValueByIndexWorks();
        },
        setValueWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.setValueWorks();
        },
        foreachWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.foreachWorks();
        },
        cloneWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.cloneWorks();
        },
        concatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.concatWorks();
        },
        containsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.containsWorks();
        },
        containsUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.containsUsesEqualsMethod();
        },
        allWithArrayItemFilterCallbackWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.allWithArrayItemFilterCallbackWorks();
        },
        sliceWithoutEndWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.sliceWithoutEndWorks();
        },
        foreachWithArrayItemCallbackWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.foreachWithArrayItemCallbackWorks();
        },
        foreachWithArrayCallbackWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.foreachWithArrayCallbackWorks();
        },
        indexOfWithoutStartIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.indexOfWithoutStartIndexWorks();
        },
        indexOfWithoutStartIndexUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.indexOfWithoutStartIndexUsesEqualsMethod();
        },
        indexOfWithStartIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.indexOfWithStartIndexWorks();
        },
        joinWithoutDelimiterWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.joinWithoutDelimiterWorks();
        },
        reverseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.reverseWorks();
        },
        anyWithArrayItemFilterCallbackWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.anyWithArrayItemFilterCallbackWorks();
        },
        binarySearch1Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.binarySearch1Works();
        },
        binarySearch2Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.binarySearch2Works();
        },
        binarySearch3Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.binarySearch3Works();
        },
        binarySearch4Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.binarySearch4Works();
        },
        binarySearchExceptionsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.binarySearchExceptionsWorks();
        },
        sortWithDefaultCompareWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.sortWithDefaultCompareWorks();
        },
        sort1Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.sort1Works();
        },
        sort2Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.sort2Works();
        },
        sort3Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.sort3Works();
        },
        sort4Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.sort4Works();
        },
        sortExceptionsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.sortExceptionsWorks();
        },
        foreachWhenCastToIListWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.foreachWhenCastToIListWorks();
        },
        iCollectionCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.iCollectionCountWorks();
        },
        iCollectionAddWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.iCollectionAddWorks();
        },
        iCollectionClearWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.iCollectionClearWorks();
        },
        iCollectionContainsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.iCollectionContainsWorks();
        },
        iCollectionContainsUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.iCollectionContainsUsesEqualsMethod();
        },
        iCollectionRemoveWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.iCollectionRemoveWorks();
        },
        iListIndexingWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.iListIndexingWorks();
        },
        iListIndexOfWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.iListIndexOfWorks();
        },
        iListIndexOfUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.iListIndexOfUsesEqualsMethod();
        },
        iListInsertWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.iListInsertWorks();
        },
        iListRemoveAtWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).beforeTest(false, assert);
            t.iListRemoveAtWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).instance = new Bridge.ClientTest.Collections.Generic.GenericDictionaryTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        capacityConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.capacityConstructorWorks();
        },
        capacityAndEqualityComparerWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.capacityAndEqualityComparerWorks();
        },
        equalityComparerOnlyConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.equalityComparerOnlyConstructorWorks();
        },
        countWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.countWorks();
        },
        keysWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.keysWorks();
        },
        valuesWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.valuesWorks();
        },
        indexerGetterWorksForExistingItems: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.indexerGetterWorksForExistingItems();
        },
        indexerSetterWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.indexerSetterWorks();
        },
        indexerGetterThrowsForNonExistingItems: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            assert.expect(0);
            t.indexerGetterThrowsForNonExistingItems();
        },
        addWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.addWorks();
        },
        addThrowsIfItemAlreadyExists: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            assert.expect(0);
            t.addThrowsIfItemAlreadyExists();
        },
        clearWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.clearWorks();
        },
        containsKeyWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.containsKeyWorks();
        },
        enumeratingWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.enumeratingWorks();
        },
        removeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.removeWorks();
        },
        tryGetValueWithIntKeysWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.tryGetValueWithIntKeysWorks();
        },
        tryGetValueWithObjectKeysWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.tryGetValueWithObjectKeysWorks();
        },
        canUseCustomComparer: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).beforeTest(false, assert);
            t.canUseCustomComparer();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).instance = new Bridge.ClientTest.Collections.Generic.ICollectionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).getInstance();
            return r;
        },
        arrayImplementsICollection: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.arrayImplementsICollection();
        },
        customClassThatShouldImplementICollectionDoesSo: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.customClassThatShouldImplementICollectionDoesSo();
        },
        arrayCastToICollectionCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.arrayCastToICollectionCountWorks();
        },
        classImplementingICollectionCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.classImplementingICollectionCountWorks();
        },
        classImplementingICollectionCastToICollectionCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.classImplementingICollectionCastToICollectionCountWorks();
        },
        classImplementingICollectionAddWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.classImplementingICollectionAddWorks();
        },
        classImplementingICollectionCastToICollectionAddWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.classImplementingICollectionCastToICollectionAddWorks();
        },
        classImplementingICollectionClearWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.classImplementingICollectionClearWorks();
        },
        classImplementingICollectionCastToICollectionClearWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.classImplementingICollectionCastToICollectionClearWorks();
        },
        arrayCastToICollectionContainsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.arrayCastToICollectionContainsWorks();
        },
        classImplementingICollectionContainsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.classImplementingICollectionContainsWorks();
        },
        classImplementingICollectionCastToICollectionContainsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.classImplementingICollectionCastToICollectionContainsWorks();
        },
        classImplementingICollectionRemoveWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.classImplementingICollectionRemoveWorks();
        },
        classImplementingICollectionCastToICollectionRemoveWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).beforeTest(false, assert);
            t.classImplementingICollectionCastToICollectionRemoveWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).instance = new Bridge.ClientTest.Collections.Generic.IDictionaryTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        classImplementsInterfaces: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.classImplementsInterfaces();
        },
        countWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.countWorks();
        },
        keysWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.keysWorks();
        },
        getItemWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.getItemWorks();
        },
        valuesWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.valuesWorks();
        },
        containsKeyWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.containsKeyWorks();
        },
        tryGetValueWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.tryGetValueWorks();
        },
        addWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.addWorks();
        },
        clearWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.clearWorks();
        },
        removeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.removeWorks();
        },
        setItemWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).beforeTest(false, assert);
            t.setItemWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).instance = new Bridge.ClientTest.Collections.Generic.IEnumerableTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).getInstance();
            return r;
        },
        arrayImplementsIEnumerable: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).beforeTest(false, assert);
            t.arrayImplementsIEnumerable();
        },
        customClassThatShouldImplementIEnumerableDoesSo: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).beforeTest(false, assert);
            t.customClassThatShouldImplementIEnumerableDoesSo();
        },
        arrayGetEnumeratorMethodWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).beforeTest(false, assert);
            t.arrayGetEnumeratorMethodWorks();
        },
        arrayCastToIEnumerableCanBeEnumerated: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).beforeTest(false, assert);
            t.arrayCastToIEnumerableCanBeEnumerated();
        },
        classImplementingIEnumerableCanBeEnumerated: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).beforeTest(false, assert);
            t.classImplementingIEnumerableCanBeEnumerated();
        },
        classImplementingIEnumerableCastToIEnumerableCanBeEnumerated: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).beforeTest(false, assert);
            t.classImplementingIEnumerableCastToIEnumerableCanBeEnumerated();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).instance = new Bridge.ClientTest.Collections.Generic.IListTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        arrayImplementsIList: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.arrayImplementsIList();
        },
        customClassThatShouldImplementIListDoesSo: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.customClassThatShouldImplementIListDoesSo();
        },
        arrayCastToIListGetItemWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.arrayCastToIListGetItemWorks();
        },
        classImplementingIListGetItemWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.classImplementingIListGetItemWorks();
        },
        classImplementingIListCastToIListGetItemWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.classImplementingIListCastToIListGetItemWorks();
        },
        arrayCastToIListSetItemWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.arrayCastToIListSetItemWorks();
        },
        classImplementingIListSetItemWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.classImplementingIListSetItemWorks();
        },
        classImplementingIListCastToIListSetItemWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.classImplementingIListCastToIListSetItemWorks();
        },
        arrayCastToIListIndexOfWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.arrayCastToIListIndexOfWorks();
        },
        classImplementingIListIndexOfWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.classImplementingIListIndexOfWorks();
        },
        classImplementingIListCastToIListIndexOfWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.classImplementingIListCastToIListIndexOfWorks();
        },
        classImplementingIListInsertWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.classImplementingIListInsertWorks();
        },
        classImplementingIListCastToIListInsertWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.classImplementingIListCastToIListInsertWorks();
        },
        classImplementingIListRemoveAtWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.classImplementingIListRemoveAtWorks();
        },
        classImplementingIListCastToIListRemoveAtWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).beforeTest(false, assert);
            t.classImplementingIListCastToIListRemoveAtWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).instance = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).getInstance();
            return r;
        },
        typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).beforeTest(false, assert);
            t.typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable();
        },
        enumeratingIEnumeratorIteratorToEndWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).beforeTest(false, assert);
            t.enumeratingIEnumeratorIteratorToEndWorks();
        },
        prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).beforeTest(false, assert);
            t.prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks();
        },
        exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).beforeTest(false, assert);
            t.exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks();
        },
        typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).beforeTest(false, assert);
            t.typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface();
        },
        enumeratingIEnumerableIteratorToEndWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).beforeTest(false, assert);
            t.enumeratingIEnumerableIteratorToEndWorks();
        },
        prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).beforeTest(false, assert);
            t.prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks();
        },
        exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).beforeTest(false, assert);
            t.exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks();
        },
        enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).beforeTest(false, assert);
            t.enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters();
        },
        differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).beforeTest(false, assert);
            t.differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).instance = new Bridge.ClientTest.Collections.Generic.ListTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithCapacityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.constructorWithCapacityWorks();
        },
        constructingFromArrayWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.constructingFromArrayWorks();
        },
        constructingFromListWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.constructingFromListWorks();
        },
        constructingFromIEnumerableWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.constructingFromIEnumerableWorks();
        },
        countWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.countWorks();
        },
        indexingWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.indexingWorks();
        },
        foreachWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.foreachWorks();
        },
        getEnumeratorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.getEnumeratorWorks();
        },
        addWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.addWorks();
        },
        addRangeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.addRangeWorks();
        },
        binarySearch1Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.binarySearch1Works();
        },
        binarySearch2Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.binarySearch2Works();
        },
        binarySearch3Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.binarySearch3Works();
        },
        binarySearch4Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.binarySearch4Works();
        },
        clearWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.clearWorks();
        },
        containsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.containsWorks();
        },
        containsUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.containsUsesEqualsMethod();
        },
        sliceWithoutEndWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.sliceWithoutEndWorks();
        },
        sliceWithEndWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.sliceWithEndWorks();
        },
        foreachWithListItemCallbackWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.foreachWithListItemCallbackWorks();
        },
        foreachWithListCallbackWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.foreachWithListCallbackWorks();
        },
        indexOfWithoutStartIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.indexOfWithoutStartIndexWorks();
        },
        indexOfWithoutStartIndexUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.indexOfWithoutStartIndexUsesEqualsMethod();
        },
        indexOfWithStartIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.indexOfWithStartIndexWorks();
        },
        indexOfWithStartIndexUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.indexOfWithStartIndexUsesEqualsMethod();
        },
        insertWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.insertWorks();
        },
        insertRangeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.insertRangeWorks();
        },
        joinWithoutDelimiterWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.joinWithoutDelimiterWorks();
        },
        joinWithDelimiterWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.joinWithDelimiterWorks();
        },
        removeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.removeWorks();
        },
        removeReturnsFalseIfTheElementWasNotFound: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.removeReturnsFalseIfTheElementWasNotFound();
        },
        removeCanRemoveNullItem: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.removeCanRemoveNullItem();
        },
        removeUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.removeUsesEqualsMethod();
        },
        removeAtWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.removeAtWorks();
        },
        removeRangeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.removeRangeWorks();
        },
        reverseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.reverseWorks();
        },
        sortWithDefaultCompareWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.sortWithDefaultCompareWorks();
        },
        sortWithCompareCallbackWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.sortWithCompareCallbackWorks();
        },
        sortWithIComparerWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.sortWithIComparerWorks();
        },
        foreachWhenCastToIEnumerableWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.foreachWhenCastToIEnumerableWorks();
        },
        iEnumerableGetEnumeratorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iEnumerableGetEnumeratorWorks();
        },
        iCollectionCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iCollectionCountWorks();
        },
        iCollectionAddWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iCollectionAddWorks();
        },
        iCollectionClearWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iCollectionClearWorks();
        },
        iCollectionContainsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iCollectionContainsWorks();
        },
        iCollectionContainsUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iCollectionContainsUsesEqualsMethod();
        },
        iCollectionRemoveWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iCollectionRemoveWorks();
        },
        iCollectionRemoveCanRemoveNullItem: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iCollectionRemoveCanRemoveNullItem();
        },
        iCollectionRemoveUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iCollectionRemoveUsesEqualsMethod();
        },
        iListIndexingWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iListIndexingWorks();
        },
        iListIndexOfWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iListIndexOfWorks();
        },
        iListIndexOfUsesEqualsMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iListIndexOfUsesEqualsMethod();
        },
        iListInsertWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iListInsertWorks();
        },
        iListRemoveAtWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.iListRemoveAtWorks();
        },
        toArrayWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).beforeTest(false, assert);
            t.toArrayWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).instance = new Bridge.ClientTest.MultidimArrayTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        lengthWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).beforeTest(false, assert);
            t.lengthWorks();
        },
        getValueWorksForUninitializedElement: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).beforeTest(false, assert);
            t.getValueWorksForUninitializedElement();
        },
        getValueByIndexWorksForUninitializedElement: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).beforeTest(false, assert);
            t.getValueByIndexWorksForUninitializedElement();
        },
        settingValueByIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).beforeTest(false, assert);
            t.settingValueByIndexWorks();
        },
        setValueWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).beforeTest(false, assert);
            t.setValueWorks();
        },
        getValueWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).beforeTest(false, assert);
            t.getValueWorks();
        },
        gettingValueByIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).beforeTest(false, assert);
            t.gettingValueByIndexWorks();
        },
        rankWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).beforeTest(false, assert);
            t.rankWorks();
        },
        getValueWithIndexOutOfRangeThrowsAnException: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).beforeTest(false, assert);
            t.getValueWithIndexOutOfRangeThrowsAnException();
        },
        setValueWithIndexOutOfRangeThrowsAnException: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).beforeTest(false, assert);
            t.setValueWithIndexOutOfRangeThrowsAnException();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).instance = new Bridge.ClientTest.Collections.Generic.ComparerTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultComparerCanOrderNumbers: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).beforeTest(false, assert);
            t.defaultComparerCanOrderNumbers();
        },
        defaultComparerCanOrderNullValues: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).beforeTest(false, assert);
            t.defaultComparerCanOrderNullValues();
        },
        defaultComparerUsesCompareMethodIfClassImplementsIComparable: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).beforeTest(false, assert);
            t.defaultComparerUsesCompareMethodIfClassImplementsIComparable();
        },
        createWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).beforeTest(false, assert);
            t.createWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).instance = new Bridge.ClientTest.DateTimeFormatInfoTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        getFormatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).beforeTest(false, assert);
            t.getFormatWorks();
        },
        invariantWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).beforeTest(false, assert);
            t.invariantWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).instance = new Bridge.ClientTest.SimpleTypes.JsDateTimeTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorReturnsTodaysDate: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.defaultConstructorReturnsTodaysDate();
        },
        creatingInstanceReturnsTodaysDate: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.creatingInstanceReturnsTodaysDate();
        },
        millisecondSinceEpochConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.millisecondSinceEpochConstructorWorks();
        },
        stringConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.stringConstructorWorks();
        },
        yMDConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.yMDConstructorWorks();
        },
        yMDHConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.yMDHConstructorWorks();
        },
        yMDHNConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.yMDHNConstructorWorks();
        },
        yMDHNSConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.yMDHNSConstructorWorks();
        },
        yMDHNSUConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.yMDHNSUConstructorWorks();
        },
        nowWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.nowWorks();
        },
        uTCNowWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.uTCNowWorks();
        },
        toUniversalWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.toUniversalWorks();
        },
        toLocalWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.toLocalWorks();
        },
        todayWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.todayWorks();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.formatWorks();
        },
        localeFormatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.localeFormatWorks();
        },
        getFullYearWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getFullYearWorks();
        },
        getMonthWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getMonthWorks();
        },
        getDateWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getDateWorks();
        },
        getHoursWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getHoursWorks();
        },
        getMinutesWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getMinutesWorks();
        },
        getSecondsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getSecondsWorks();
        },
        getMillisecondsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getMillisecondsWorks();
        },
        getDayWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getDayWorks();
        },
        getTimeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getTimeWorks();
        },
        valueOfWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.valueOfWorks();
        },
        getTimezoneOffsetWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getTimezoneOffsetWorks();
        },
        getUTCFullYearWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getUTCFullYearWorks();
        },
        getUtcMonthWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getUtcMonthWorks();
        },
        getUTCDateWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getUTCDateWorks();
        },
        getUTCHoursWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getUTCHoursWorks();
        },
        getUTCMinutesWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getUTCMinutesWorks();
        },
        getUTCSecondsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getUTCSecondsWorks();
        },
        getUTCMillisecondsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getUTCMillisecondsWorks();
        },
        getUTCDayWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getUTCDayWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.parseWorks();
        },
        parseExactWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.parseExactWorks();
        },
        parseExactWithCultureWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.parseExactWithCultureWorks();
        },
        parseExactUTCWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.parseExactUTCWorks();
        },
        parseExactUTCWithCultureWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.parseExactUTCWithCultureWorks();
        },
        toDateStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.toDateStringWorks();
        },
        toTimeStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.toTimeStringWorks();
        },
        toUTCStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.toUTCStringWorks();
        },
        toLocaleDateStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.toLocaleDateStringWorks();
        },
        toLocaleTimeStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.toLocaleTimeStringWorks();
        },
        subtractingDatesWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.subtractingDatesWorks();
        },
        subtractMethodReturningTimeSpanWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.subtractMethodReturningTimeSpanWorks();
        },
        dateEqualityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.dateEqualityWorks();
        },
        dateInequalityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.dateInequalityWorks();
        },
        dateLessThanWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.dateLessThanWorks();
        },
        dateLessEqualWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.dateLessEqualWorks();
        },
        dateGreaterThanWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.dateGreaterThanWorks();
        },
        dateGreaterEqualWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.dateGreaterEqualWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.equalsWorks();
        },
        dateTimeEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.dateTimeEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(false, assert);
            t.compareToWorks();
        },
        dateTimes: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.SimpleTypes.JsDateTimeTests).dateTimes();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).instance = new Bridge.ClientTest.SimpleTypes.TimeSpanTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        defaultValueWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.defaultValueWorks();
        },
        zeroWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.zeroWorks();
        },
        creatingInstanceReturnsTimeSpanWithZeroValue: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.creatingInstanceReturnsTimeSpanWithZeroValue();
        },
        parameterConstructorsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.parameterConstructorsWorks();
        },
        factoryMethodsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.factoryMethodsWork();
        },
        propertiesWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.propertiesWork();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.compareToWorks();
        },
        compareWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.compareWorks();
        },
        staticEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.staticEqualsWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.equalsWorks();
        },
        toStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.toStringWorks();
        },
        addWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.addWorks();
        },
        subtractWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.subtractWorks();
        },
        durationWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.durationWorks();
        },
        negateWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.negateWorks();
        },
        comparisonOperatorsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.comparisonOperatorsWork();
        },
        additionOperatorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.additionOperatorWorks();
        },
        subtractionOperatorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.subtractionOperatorWorks();
        },
        unaryPlusWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.unaryPlusWorks();
        },
        unaryMinusWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).beforeTest(false, assert);
            t.unaryMinusWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).instance = new Bridge.ClientTest.DecimalMathTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).getInstance();
            return r;
        },
        testSubtractOperator: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testSubtractOperator();
        },
        testRemainderOperator: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testRemainderOperator();
        },
        testMultiplyOperator: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testMultiplyOperator();
        },
        testDivideOperator: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testDivideOperator();
        },
        testAddOperator: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testAddOperator();
        },
        testAddMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testAddMethod();
        },
        testDivideMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testDivideMethod();
        },
        testMultiplyMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testMultiplyMethod();
        },
        testRemainderMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testRemainderMethod();
        },
        testSubtractMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testSubtractMethod();
        },
        testCeilingMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testCeilingMethod();
        },
        testFloorMethod: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.DecimalMathTests).testFloorMethod();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).instance = new Bridge.ClientTest.SimpleTypes.EnumTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        firstValueOfEnumIsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).beforeTest(false, assert);
            t.firstValueOfEnumIsZero();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).beforeTest(false, assert);
            t.equalsWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).instance = new Bridge.ClientTest.Collections.Generic.EqualityComparerTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultComparerCanGetHashCodeOfNumber: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).beforeTest(false, assert);
            t.defaultComparerCanGetHashCodeOfNumber();
        },
        defaultComparerReturnsZeroAsHashCodeForNullAndUndefined: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).beforeTest(false, assert);
            t.defaultComparerReturnsZeroAsHashCodeForNullAndUndefined();
        },
        defaultComparerCanDetermineEquality: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).beforeTest(false, assert);
            t.defaultComparerCanDetermineEquality();
        },
        defaultComparerInvokesOverriddenGetHashCode: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).beforeTest(false, assert);
            t.defaultComparerInvokesOverriddenGetHashCode();
        },
        defaultComparerInvokesOverriddenEquals: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).beforeTest(false, assert);
            t.defaultComparerInvokesOverriddenEquals();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).instance = new Bridge.ClientTest.Exceptions.ArgumentExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        },
        constructorWithMessageAndParamNameWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndParamNameWorks();
        },
        constructorWithMessageAndParamNameAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndParamNameAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).instance = new Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithParamNameWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).beforeTest(false, assert);
            t.constructorWithParamNameWorks();
        },
        constructorWithParamNameAndMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).beforeTest(false, assert);
            t.constructorWithParamNameAndMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).instance = new Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithParamNameWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).beforeTest(false, assert);
            t.constructorWithParamNameWorks();
        },
        constructorWithParamNameAndMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).beforeTest(false, assert);
            t.constructorWithParamNameAndMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        },
        constructorWithParamNameAndActualValueAndMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).beforeTest(false, assert);
            t.constructorWithParamNameAndActualValueAndMessageWorks();
        },
        rangeErrorIsConvertedToArgumentOutOfRangeException: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).beforeTest(false, assert);
            assert.expect(1);
            t.rangeErrorIsConvertedToArgumentOutOfRangeException();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).instance = new Bridge.ClientTest.Exceptions.ArithmeticExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).instance = new Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).instance = new Bridge.ClientTest.Exceptions.ExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        },
        messagePropertyCanBeOverridden: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).beforeTest(false, assert);
            t.messagePropertyCanBeOverridden();
        },
        innerExceptionPropertyCanBeOverridden: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).beforeTest(false, assert);
            t.innerExceptionPropertyCanBeOverridden();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).instance = new Bridge.ClientTest.Exceptions.FormatExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).instance = new Bridge.ClientTest.Exceptions.InvalidCastExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).instance = new Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).instance = new Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).instance = new Bridge.ClientTest.Exceptions.NotImplementedExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).instance = new Bridge.ClientTest.Exceptions.NotSupportedExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).instance = new Bridge.ClientTest.Exceptions.NullReferenceExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        },
        accessingAFieldOnANullObjectCausesANullReferenceException: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).beforeTest(false, assert);
            assert.expect(1);
            t.accessingAFieldOnANullObjectCausesANullReferenceException();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).instance = new Bridge.ClientTest.Exceptions.OverflowExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).instance = new Bridge.ClientTest.Exceptions.RankExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).beforeTest(false, assert);
            t.constructorWithMessageWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).instance = new Bridge.ClientTest.ExceptionTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).getInstance();
            return r;
        },
        throwingAndCatchingExceptionsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).beforeTest(false, assert);
            t.throwingAndCatchingExceptionsWorks();
        },
        exceptionOfWrongTypeIsNotCaught: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).beforeTest(false, assert);
            t.exceptionOfWrongTypeIsNotCaught();
        },
        canCatchExceptionAsBaseType: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).beforeTest(false, assert);
            t.canCatchExceptionAsBaseType();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge381', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge381).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge381).instance = new Bridge.ClientTest.BridgeIssues.Bridge381();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge381).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge381).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge381).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge381).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge381).beforeTest(true, assert);
            assert.expect(6);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge381).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge472', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge472).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge472).instance = new Bridge.ClientTest.BridgeIssues.Bridge472();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge472).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge472).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge472).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge472).getInstance();
            return r;
        },
        test: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge472).beforeTest(true, assert);
            assert.expect(10);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge472).test();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge479', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge479).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge479).instance = new Bridge.ClientTest.BridgeIssues.Bridge479();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge479).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge479).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge479).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge479).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge479).beforeTest(true, assert);
            assert.expect(3);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge479).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge485', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge485).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge485).instance = new Bridge.ClientTest.BridgeIssues.Bridge485();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge485).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge485).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge485).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge485).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge485).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge485).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge495', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge495).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge495).instance = new Bridge.ClientTest.BridgeIssues.Bridge495();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge495).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge495).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge495).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge495).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge495).beforeTest(true, assert);
            assert.expect(3);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge495).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge501', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge501).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge501).instance = new Bridge.ClientTest.BridgeIssues.Bridge501();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge501).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge501).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge501).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge501).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge501).beforeTest(true, assert);
            assert.expect(5);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge501).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge502', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge502).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge502).instance = new Bridge.ClientTest.BridgeIssues.Bridge502();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge502).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge502).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge502).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge502).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge502).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge502).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge503', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge503).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge503).instance = new Bridge.ClientTest.BridgeIssues.Bridge503();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge503).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge503).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge503).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge503).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge503).beforeTest(true, assert);
            assert.expect(4);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge503).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge514', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge514).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge514).instance = new Bridge.ClientTest.BridgeIssues.Bridge514();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge514).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge514).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge514).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge514).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge514).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge514).testUseCase();
        },
        testRelated: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge514).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge514).testRelated();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge520', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge520).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge520).instance = new Bridge.ClientTest.BridgeIssues.Bridge520();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge520).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge520).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge520).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge520).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge520).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge520).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge522', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge522).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge522).instance = new Bridge.ClientTest.BridgeIssues.Bridge522();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge522).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge522).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge522).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge522).getInstance();
            return r;
        },
        testUseCase1: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge522).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge522).testUseCase1();
        },
        testUseCase2: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge522).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge522).testUseCase2();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge532', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge532).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge532).instance = new Bridge.ClientTest.BridgeIssues.Bridge532();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge532).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge532).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge532).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge532).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge532).beforeTest(true, assert);
            assert.expect(3);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge532).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge538', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge538).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge538).instance = new Bridge.ClientTest.BridgeIssues.Bridge538();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge538).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge538).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge538).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge538).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge538).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge538).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge544', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge544).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge544).instance = new Bridge.ClientTest.BridgeIssues.Bridge544();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge544).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge544).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge544).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge544).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge544).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge544).testUseCase();
        },
        testRelated: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge544).beforeTest(true, assert);
            assert.expect(5);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge544).testRelated();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge546', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge546).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge546).instance = new Bridge.ClientTest.BridgeIssues.Bridge546();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge546).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge546).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge546).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge546).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge546).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge546).testUseCase();
        },
        testRelated: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge546).beforeTest(true, assert);
            assert.expect(5);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge546).testRelated();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge548', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge548).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge548).instance = new Bridge.ClientTest.BridgeIssues.Bridge548();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge548).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge548).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge548).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge548).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge548).beforeTest(true, assert);
            assert.expect(18);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge548).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge549', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge549).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge549).instance = new Bridge.ClientTest.BridgeIssues.Bridge549();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge549).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge549).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge549).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge549).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge549).beforeTest(true, assert);
            assert.expect(153);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge549).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge550', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge550).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge550).instance = new Bridge.ClientTest.BridgeIssues.Bridge550();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge550).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge550).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge550).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge550).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge550).beforeTest(true, assert);
            assert.expect(10);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge550).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge554', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge554).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge554).instance = new Bridge.ClientTest.BridgeIssues.Bridge554();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge554).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge554).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge554).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge554).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge554).beforeTest(true, assert);
            assert.expect(4);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge554).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge555', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge555).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge555).instance = new Bridge.ClientTest.BridgeIssues.Bridge555();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge555).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge555).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge555).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge555).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge555).beforeTest(true, assert);
            assert.expect(15);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge555).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge558', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge558).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge558).instance = new Bridge.ClientTest.BridgeIssues.Bridge558();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge558).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge558).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge558).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge558).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge558).beforeTest(true, assert);
            assert.expect(4);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge558).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge559', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge559).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge559).instance = new Bridge.ClientTest.BridgeIssues.Bridge559();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge559).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge559).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge559).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge559).getInstance();
            return r;
        },
        testUseCase1: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge559).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge559).testUseCase1();
        },
        testUseCase2: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge559).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge559).testUseCase2();
        },
        testUseCase3: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge559).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge559).testUseCase3();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge563', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge563).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge563).instance = new Bridge.ClientTest.BridgeIssues.Bridge563();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge563).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge563).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge563).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge563).getInstance();
            return r;
        },
        tesForeach: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge563).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge563).tesForeach();
        },
        tesFor: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge563).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge563).tesFor();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge565', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge565).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge565).instance = new Bridge.ClientTest.BridgeIssues.Bridge565();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge565).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge565).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge565).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge565).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge565).beforeTest(true, assert);
            assert.expect(7);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge565).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge566', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge566).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge566).instance = new Bridge.ClientTest.BridgeIssues.Bridge566();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge566).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge566).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge566).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge566).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge566).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge566).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge572', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge572).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge572).instance = new Bridge.ClientTest.BridgeIssues.Bridge572();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge572).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge572).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge572).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge572).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge572).beforeTest(true, assert);
            assert.expect(4);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge572).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge577', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge577).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge577).instance = new Bridge.ClientTest.BridgeIssues.Bridge577();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge577).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge577).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge577).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge577).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge577).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge577).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge578', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge578).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge578).instance = new Bridge.ClientTest.BridgeIssues.Bridge578();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge578).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge578).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge578).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge578).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge578).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge578).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge580', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge580).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge580).instance = new Bridge.ClientTest.BridgeIssues.Bridge580();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge580).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge580).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge580).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge580).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge580).beforeTest(true, assert);
            assert.expect(10);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge580).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge582', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge582).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge582).instance = new Bridge.ClientTest.BridgeIssues.Bridge582();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge582).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge582).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge582).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge582).getInstance();
            return r;
        },
        testAddTimeSpan: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge582).beforeTest(true, assert);
            assert.expect(6);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge582).testAddTimeSpan();
        },
        testAddTicks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge582).beforeTest(true, assert);
            assert.expect(6);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge582).testAddTicks();
        },
        testTicks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge582).beforeTest(true, assert);
            assert.expect(7);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge582).testTicks();
        },
        testSubtractTimeSpan: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge582).beforeTest(true, assert);
            assert.expect(4);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge582).testSubtractTimeSpan();
        },
        testTimeOfDay: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge582).beforeTest(true, assert);
            assert.expect(6);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge582).testTimeOfDay();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge583', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge583).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge583).instance = new Bridge.ClientTest.BridgeIssues.Bridge583();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge583).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge583).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge583).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge583).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge583).beforeTest(true, assert);
            assert.expect(120);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge583).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge586', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge586).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge586).instance = new Bridge.ClientTest.BridgeIssues.Bridge586();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge586).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge586).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge586).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge586).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge586).beforeTest(true, assert);
            assert.expect(4);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge586).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge592', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge592).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge592).instance = new Bridge.ClientTest.BridgeIssues.Bridge592();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge592).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge592).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge592).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge592).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge592).beforeTest(true, assert);
            assert.expect(6);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge592).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge595', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge595).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge595).instance = new Bridge.ClientTest.BridgeIssues.Bridge595();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge595).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge595).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge595).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge595).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge595).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge595).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge597', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge597).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge597).instance = new Bridge.ClientTest.BridgeIssues.Bridge597();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge597).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge597).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge597).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge597).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge597).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge597).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge606', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge606).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge606).instance = new Bridge.ClientTest.BridgeIssues.Bridge606();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge606).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge606).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge606).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge606).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge606).beforeTest(true, assert);
            assert.expect(5);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge606).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge607', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge607).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge607).instance = new Bridge.ClientTest.BridgeIssues.Bridge607();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge607).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge607).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge607).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge607).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge607).beforeTest(true, assert);
            assert.expect(4);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge607).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge608', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge608).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge608).instance = new Bridge.ClientTest.BridgeIssues.Bridge608();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge608).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge608).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge608).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge608).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge608).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge608).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge615', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge615).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge615).instance = new Bridge.ClientTest.BridgeIssues.Bridge615();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge615).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge615).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge615).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge615).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge615).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge615).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge623', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge623).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge623).instance = new Bridge.ClientTest.BridgeIssues.Bridge623();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge623).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge623).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge623).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge623).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge623).beforeTest(true, assert);
            assert.expect(8);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge623).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge625', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge625).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge625).instance = new Bridge.ClientTest.BridgeIssues.Bridge625();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge625).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge625).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge625).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge625).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge625).beforeTest(true, assert);
            assert.expect(4);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge625).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge634', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge634).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge634).instance = new Bridge.ClientTest.BridgeIssues.Bridge634();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge634).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge634).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge634).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge634).getInstance();
            return r;
        },
        testUseCase1: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge634).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge634).testUseCase1();
        },
        testUseCase2: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge634).beforeTest(true, assert);
            assert.expect(21);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge634).testUseCase2();
        },
        testUseCaseFor658: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge634).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge634).testUseCaseFor658();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge635', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge635).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge635).instance = new Bridge.ClientTest.BridgeIssues.Bridge635();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge635).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge635).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge635).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge635).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge635).beforeTest(true, assert);
            assert.expect(4);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge635).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge647', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge647).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge647).instance = new Bridge.ClientTest.BridgeIssues.Bridge647();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge647).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge647).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge647).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge647).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge647).beforeTest(true, assert);
            assert.expect(3);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge647).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge648', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge648).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge648).instance = new Bridge.ClientTest.BridgeIssues.Bridge648();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge648).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge648).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge648).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge648).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge648).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge648).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge652', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge652).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge652).instance = new Bridge.ClientTest.BridgeIssues.Bridge652();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge652).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge652).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge652).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge652).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge652).beforeTest(true, assert);
            assert.expect(4);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge652).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge655', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge655).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge655).instance = new Bridge.ClientTest.BridgeIssues.Bridge655();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge655).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge655).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge655).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge655).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge655).beforeTest(true, assert);
            assert.expect(12);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge655).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge661', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge661).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge661).instance = new Bridge.ClientTest.BridgeIssues.Bridge661();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge661).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge661).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge661).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge661).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge661).beforeTest(true, assert);
            assert.expect(6);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge661).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge664', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge664).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge664).instance = new Bridge.ClientTest.BridgeIssues.Bridge664();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge664).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge664).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge664).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge664).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge664).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge664).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge666', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge666).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge666).instance = new Bridge.ClientTest.BridgeIssues.Bridge666();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge666).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge666).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge666).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge666).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge666).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge666).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge671', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge671).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge671).instance = new Bridge.ClientTest.BridgeIssues.Bridge671();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge671).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge671).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge671).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge671).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge671).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge671).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge674', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge674).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge674).instance = new Bridge.ClientTest.BridgeIssues.Bridge674();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge674).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge674).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge674).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge674).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge674).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge674).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge675', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge675).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge675).instance = new Bridge.ClientTest.BridgeIssues.Bridge675();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge675).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge675).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge675).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge675).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge675).beforeTest(true, assert);
            assert.expect(3);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge675).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge687', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge687).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge687).instance = new Bridge.ClientTest.BridgeIssues.Bridge687();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge687).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge687).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge687).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge687).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge687).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge687).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge689', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge689).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge689).instance = new Bridge.ClientTest.BridgeIssues.Bridge689();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge689).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge689).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge689).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge689).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge689).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge689).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge691', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge691).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge691).instance = new Bridge.ClientTest.BridgeIssues.Bridge691();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge691).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge691).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge691).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge691).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge691).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge691).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge693', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge693).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge693).instance = new Bridge.ClientTest.BridgeIssues.Bridge693();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge693).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge693).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge693).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge693).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge693).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge693).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge694', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge694).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge694).instance = new Bridge.ClientTest.BridgeIssues.Bridge694();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge694).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge694).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge694).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge694).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge694).beforeTest(true, assert);
            assert.expect(3);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge694).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge696', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge696).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge696).instance = new Bridge.ClientTest.BridgeIssues.Bridge696();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge696).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge696).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge696).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge696).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge696).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge696).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge699', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge699).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge699).instance = new Bridge.ClientTest.BridgeIssues.Bridge699();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge699).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge699).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge699).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge699).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge699).beforeTest(true, assert);
            assert.expect(5);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge699).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge708', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge708).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge708).instance = new Bridge.ClientTest.BridgeIssues.Bridge708();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge708).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge708).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge708).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge708).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge708).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge708).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge721', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge721).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge721).instance = new Bridge.ClientTest.BridgeIssues.Bridge721();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge721).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge721).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge721).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge721).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge721).beforeTest(true, assert);
            assert.expect(4);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge721).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge722', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge722).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge722).instance = new Bridge.ClientTest.BridgeIssues.Bridge722();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge722).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge722).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge722).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge722).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge722).beforeTest(true, assert);
            assert.expect(9);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge722).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge726', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge726).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge726).instance = new Bridge.ClientTest.BridgeIssues.Bridge726();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge726).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge726).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge726).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge726).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge726).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge726).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge732', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge732).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge732).instance = new Bridge.ClientTest.BridgeIssues.Bridge732();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge732).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge732).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge732).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge732).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge732).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge732).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge733', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge733).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge733).instance = new Bridge.ClientTest.BridgeIssues.Bridge733();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge733).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge733).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge733).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge733).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge733).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge733).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge751', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge751).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge751).instance = new Bridge.ClientTest.BridgeIssues.Bridge751();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge751).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge751).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge751).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge751).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge751).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge751).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge758', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge758).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge758).instance = new Bridge.ClientTest.BridgeIssues.Bridge758();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge758).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge758).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge758).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge758).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge758).beforeTest(true, assert);
            assert.expect(3);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge758).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge760', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge760).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge760).instance = new Bridge.ClientTest.BridgeIssues.Bridge760();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge760).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge760).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge760).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge760).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge760).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge760).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge762', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge762).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge762).instance = new Bridge.ClientTest.BridgeIssues.Bridge762();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge762).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge762).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge762).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge762).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge762).beforeTest(true, assert);
            assert.expect(4);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge762).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge786', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge786).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge786).instance = new Bridge.ClientTest.BridgeIssues.Bridge786();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge786).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge786).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge786).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge786).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge786).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge786).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge788', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge788).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge788).instance = new Bridge.ClientTest.BridgeIssues.Bridge788();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge788).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge788).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge788).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge788).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge788).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge788).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge789', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge789).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge789).instance = new Bridge.ClientTest.BridgeIssues.Bridge789();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge789).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge789).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge789).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge789).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge789).beforeTest(true, assert);
            assert.expect(3);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge789).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge793', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge793).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge793).instance = new Bridge.ClientTest.BridgeIssues.Bridge793();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge793).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge793).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge793).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge793).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge793).beforeTest(true, assert);
            assert.expect(5);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge793).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge795', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge795).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge795).instance = new Bridge.ClientTest.BridgeIssues.Bridge795();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge795).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge795).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge795).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge795).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge795).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge795).testUseCase();
        },
        testRelated: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge795).beforeTest(true, assert);
            assert.expect(16);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge795).testRelated();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge796', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge796).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge796).instance = new Bridge.ClientTest.BridgeIssues.Bridge796();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge796).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge796).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge796).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge796).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge796).beforeTest(true, assert);
            assert.expect(5);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge796).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge537', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge537).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge537).instance = new Bridge.ClientTest.BridgeIssues.Bridge537();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge537).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge537).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge537).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge537).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge537).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge537).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge588C', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge588C).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge588C).instance = new Bridge.ClientTest.BridgeIssues.Bridge588C();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge588C).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge588C).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge588C).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge588C).getInstance();
            return r;
        },
        testUseCase2: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge588C).beforeTest(true, assert);
            assert.expect(9);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge588C).testUseCase2();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge603', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge603).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge603).instance = new Bridge.ClientTest.BridgeIssues.Bridge603();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge603).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge603).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge603).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge603).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge603).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge603).testUseCase();
        },
        testRelated: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge603).beforeTest(true, assert);
            assert.expect(5);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge603).testRelated();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge660', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge660).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge660).instance = new Bridge.ClientTest.BridgeIssues.Bridge660();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge660).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge660).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge660).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge660).getInstance();
            return r;
        },
        testUseCase: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge660).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge660).testUseCase();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).instance = new Bridge.ClientTest.BridgeIssues.TestBridgeIssues();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).getInstance();
            return r;
        },
        n169: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n169();
        },
        n240: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(3);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n240();
        },
        n264: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n264();
        },
        n266: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n266();
        },
        n272: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(3);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n272();
        },
        n273: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(4);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n273();
        },
        n277: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n277();
        },
        n294: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n294();
        },
        n304: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n304();
        },
        n305: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n305();
        },
        n306: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n306();
        },
        n329: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(5);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n329();
        },
        n335: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n335();
        },
        n336: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n336();
        },
        n337: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(4);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n337();
        },
        n338: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n338();
        },
        n339: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n339();
        },
        n340: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(6);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n340();
        },
        n341: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(4);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n341();
        },
        n342: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n342();
        },
        n349: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(5);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n349();
        },
        n377: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(6);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n377();
        },
        n383: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n383();
        },
        n393: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n393();
        },
        n395: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(3);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n395();
        },
        n406: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n406();
        },
        n407: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n407();
        },
        n409: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n409();
        },
        n410: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n410();
        },
        n418: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n418();
        },
        n422: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n422();
        },
        n428: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n428();
        },
        n435: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n435();
        },
        n436: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n436();
        },
        n438: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n438();
        },
        n439: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n439();
        },
        n442: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n442();
        },
        n460: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n460();
        },
        n467: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n467();
        },
        n469: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n469();
        },
        n470: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n470();
        },
        n499: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.BridgeIssues.TestBridgeIssues).n499();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge588', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge588).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge588).instance = new Bridge.ClientTest.BridgeIssues.Bridge588();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge588).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge588).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge588).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge588).getInstance();
            return r;
        },
        testUseCase1: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge588).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.BridgeIssues.Bridge588).testUseCase1();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqAggregateOperators', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqAggregateOperators).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqAggregateOperators).instance = new Bridge.ClientTest.Linq.TestLinqAggregateOperators();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqAggregateOperators).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqAggregateOperators).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqAggregateOperators).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqAggregateOperators).getInstance();
            return r;
        },
        test: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqAggregateOperators).beforeTest(true, assert);
            assert.expect(20);
            Bridge.get(Bridge.ClientTest.Linq.TestLinqAggregateOperators).test();
        },
        bridge315: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqAggregateOperators).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.Linq.TestLinqAggregateOperators).bridge315();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqConversionOperators', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqConversionOperators).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqConversionOperators).instance = new Bridge.ClientTest.Linq.TestLinqConversionOperators();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqConversionOperators).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqConversionOperators).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqConversionOperators).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqConversionOperators).getInstance();
            return r;
        },
        test: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqConversionOperators).beforeTest(true, assert);
            assert.expect(13);
            Bridge.get(Bridge.ClientTest.Linq.TestLinqConversionOperators).test();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqElementOperators', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqElementOperators).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqElementOperators).instance = new Bridge.ClientTest.Linq.TestLinqElementOperators();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqElementOperators).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqElementOperators).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqElementOperators).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqElementOperators).getInstance();
            return r;
        },
        test: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqElementOperators).beforeTest(true, assert);
            assert.expect(26);
            Bridge.get(Bridge.ClientTest.Linq.TestLinqElementOperators).test();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqGenerationOperators', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqGenerationOperators).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqGenerationOperators).instance = new Bridge.ClientTest.Linq.TestLinqGenerationOperators();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqGenerationOperators).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqGenerationOperators).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqGenerationOperators).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqGenerationOperators).getInstance();
            return r;
        },
        test: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqGenerationOperators).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.Linq.TestLinqGenerationOperators).test();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqGroupingOperators', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqGroupingOperators).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqGroupingOperators).instance = new Bridge.ClientTest.Linq.TestLinqGroupingOperators();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqGroupingOperators).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqGroupingOperators).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqGroupingOperators).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqGroupingOperators).getInstance();
            return r;
        },
        test: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqGroupingOperators).beforeTest(true, assert);
            assert.expect(3);
            Bridge.get(Bridge.ClientTest.Linq.TestLinqGroupingOperators).test();
        },
        testComplexGrouping: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqGroupingOperators).beforeTest(true, assert);
            assert.expect(1);
            Bridge.get(Bridge.ClientTest.Linq.TestLinqGroupingOperators).testComplexGrouping();
        },
        testAnagrams: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqGroupingOperators).beforeTest(true, assert);
            assert.expect(2);
            Bridge.get(Bridge.ClientTest.Linq.TestLinqGroupingOperators).testAnagrams();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqJoinOperators', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqJoinOperators).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqJoinOperators).instance = new Bridge.ClientTest.Linq.TestLinqJoinOperators();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqJoinOperators).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqJoinOperators).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqJoinOperators).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqJoinOperators).getInstance();
            return r;
        },
        test: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqJoinOperators).beforeTest(true, assert);
            assert.expect(5);
            Bridge.get(Bridge.ClientTest.Linq.TestLinqJoinOperators).test();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqMiscellaneousOperators', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqMiscellaneousOperators).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqMiscellaneousOperators).instance = new Bridge.ClientTest.Linq.TestLinqMiscellaneousOperators();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqMiscellaneousOperators).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqMiscellaneousOperators).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqMiscellaneousOperators).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqMiscellaneousOperators).getInstance();
            return r;
        },
        test: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqMiscellaneousOperators).beforeTest(true, assert);
            assert.expect(4);
            Bridge.get(Bridge.ClientTest.Linq.TestLinqMiscellaneousOperators).test();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqOrderingOperators', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqOrderingOperators).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqOrderingOperators).instance = new Bridge.ClientTest.Linq.TestLinqOrderingOperators();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqOrderingOperators).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqOrderingOperators).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqOrderingOperators).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqOrderingOperators).getInstance();
            return r;
        },
        test: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqOrderingOperators).beforeTest(true, assert);
            assert.expect(8);
            Bridge.get(Bridge.ClientTest.Linq.TestLinqOrderingOperators).test();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqPartitioningOperators', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqPartitioningOperators).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqPartitioningOperators).instance = new Bridge.ClientTest.Linq.TestLinqPartitioningOperators();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqPartitioningOperators).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqPartitioningOperators).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqPartitioningOperators).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqPartitioningOperators).getInstance();
            return r;
        },
        test: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqPartitioningOperators).beforeTest(true, assert);
            assert.expect(8);
            Bridge.get(Bridge.ClientTest.Linq.TestLinqPartitioningOperators).test();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqProjectionOperators', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqProjectionOperators).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqProjectionOperators).instance = new Bridge.ClientTest.Linq.TestLinqProjectionOperators();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqProjectionOperators).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqProjectionOperators).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqProjectionOperators).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqProjectionOperators).getInstance();
            return r;
        },
        test: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqProjectionOperators).beforeTest(true, assert);
            assert.expect(8);
            Bridge.get(Bridge.ClientTest.Linq.TestLinqProjectionOperators).test();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqQuantifiers', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqQuantifiers).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqQuantifiers).instance = new Bridge.ClientTest.Linq.TestLinqQuantifiers();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqQuantifiers).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqQuantifiers).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqQuantifiers).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqQuantifiers).getInstance();
            return r;
        },
        test: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqQuantifiers).beforeTest(true, assert);
            assert.expect(4);
            Bridge.get(Bridge.ClientTest.Linq.TestLinqQuantifiers).test();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqQueryExecution', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqQueryExecution).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqQueryExecution).instance = new Bridge.ClientTest.Linq.TestLinqQueryExecution();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqQueryExecution).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqQueryExecution).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqQueryExecution).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqQueryExecution).getInstance();
            return r;
        },
        test: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqQueryExecution).beforeTest(true, assert);
            assert.expect(6);
            Bridge.get(Bridge.ClientTest.Linq.TestLinqQueryExecution).test();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqRestrictionOperators', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqRestrictionOperators).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqRestrictionOperators).instance = new Bridge.ClientTest.Linq.TestLinqRestrictionOperators();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqRestrictionOperators).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqRestrictionOperators).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqRestrictionOperators).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqRestrictionOperators).getInstance();
            return r;
        },
        test: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqRestrictionOperators).beforeTest(true, assert);
            assert.expect(5);
            Bridge.get(Bridge.ClientTest.Linq.TestLinqRestrictionOperators).test();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqSetOperators', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqSetOperators).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqSetOperators).instance = new Bridge.ClientTest.Linq.TestLinqSetOperators();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqSetOperators).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqSetOperators).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqSetOperators).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqSetOperators).getInstance();
            return r;
        },
        test: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqSetOperators).beforeTest(true, assert);
            assert.expect(8);
            Bridge.get(Bridge.ClientTest.Linq.TestLinqSetOperators).test();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).instance = new Bridge.ClientTest.MathTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).getInstance();
            return r;
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.constantsWork();
        },
        absOfDoubleWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.absOfDoubleWorks();
        },
        absOfIntWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.absOfIntWorks();
        },
        absOfLongWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.absOfLongWorks();
        },
        absOfSbyteWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.absOfSbyteWorks();
        },
        absOfShortWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.absOfShortWorks();
        },
        absOfFloatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.absOfFloatWorks();
        },
        absOfDecimalWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.absOfDecimalWorks();
        },
        acosWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.acosWorks();
        },
        asinWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.asinWorks();
        },
        atanWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.atanWorks();
        },
        atan2Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.atan2Works();
        },
        cosWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.cosWorks();
        },
        divRemWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.divRemWorks();
        },
        expWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.expWorks();
        },
        floorOfDoubleWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.floorOfDoubleWorks();
        },
        floorOfDecimalWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.floorOfDecimalWorks();
        },
        logWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.logWorks();
        },
        maxOfByteWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.maxOfByteWorks();
        },
        maxOfDecimalWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.maxOfDecimalWorks();
        },
        maxOfDoubleWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.maxOfDoubleWorks();
        },
        maxOfShortWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.maxOfShortWorks();
        },
        maxOfIntWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.maxOfIntWorks();
        },
        maxOfLongWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.maxOfLongWorks();
        },
        maxOfSByteWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.maxOfSByteWorks();
        },
        maxOfFloatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.maxOfFloatWorks();
        },
        maxOfUShortWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.maxOfUShortWorks();
        },
        maxOfUIntWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.maxOfUIntWorks();
        },
        maxOfULongWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.maxOfULongWorks();
        },
        minOfByteWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.minOfByteWorks();
        },
        minOfDecimalWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.minOfDecimalWorks();
        },
        minOfDoubleWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.minOfDoubleWorks();
        },
        minOfShortWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.minOfShortWorks();
        },
        minOfIntWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.minOfIntWorks();
        },
        minOfLongWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.minOfLongWorks();
        },
        minOfSByteWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.minOfSByteWorks();
        },
        minOfFloatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.minOfFloatWorks();
        },
        minOfUShortWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.minOfUShortWorks();
        },
        minOfUIntWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.minOfUIntWorks();
        },
        minOfULongWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.minOfULongWorks();
        },
        powWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.powWorks();
        },
        randomWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.randomWorks();
        },
        roundOfDoubleWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.roundOfDoubleWorks();
        },
        roundDecimalWithModeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.roundDecimalWithModeWorks();
        },
        roundDecimalWithPrecisionAndModeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.roundDecimalWithPrecisionAndModeWorks();
        },
        roundDoubleWithModeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.roundDoubleWithModeWorks();
        },
        roundDoubleWithPrecisionAndModeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.roundDoubleWithPrecisionAndModeWorks();
        },
        jsRoundWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.jsRoundWorks();
        },
        iEEERemainderWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.iEEERemainderWorks();
        },
        sinWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.sinWorks();
        },
        sqrtWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.sqrtWorks();
        },
        tanWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).beforeTest(false, assert);
            t.tanWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).instance = new Bridge.ClientTest.NullableTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        convertingToNullableWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.convertingToNullableWorks();
        },
        hasValueWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.hasValueWorks();
        },
        boxingWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.boxingWorks();
        },
        unboxingWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.unboxingWorks();
        },
        valueWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.valueWorks();
        },
        unboxingValueOfWrongTypeThrowsAnException: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.unboxingValueOfWrongTypeThrowsAnException();
        },
        getValueOrDefaultWithArgWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.getValueOrDefaultWithArgWorks();
        },
        liftedEqualityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedEqualityWorks();
        },
        liftedInequalityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedInequalityWorks();
        },
        liftedLessThanWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedLessThanWorks();
        },
        liftedGreaterThanWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedGreaterThanWorks();
        },
        liftedLessThanOrEqualWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedLessThanOrEqualWorks();
        },
        liftedGreaterThanOrEqualWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedGreaterThanOrEqualWorks();
        },
        liftedSubtractionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedSubtractionWorks();
        },
        liftedAdditionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedAdditionWorks();
        },
        liftedModWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedModWorks();
        },
        liftedFloatingPointDivisionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedFloatingPointDivisionWorks();
        },
        liftedIntegerDivisionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedIntegerDivisionWorks();
        },
        liftedMultiplicationWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedMultiplicationWorks();
        },
        liftedBitwiseAndWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedBitwiseAndWorks();
        },
        liftedBitwiseOrWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedBitwiseOrWorks();
        },
        liftedBitwiseXorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedBitwiseXorWorks();
        },
        liftedLeftShiftWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedLeftShiftWorks();
        },
        liftedSignedRightShiftWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedSignedRightShiftWorks();
        },
        liftedUnsignedRightShiftWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedUnsignedRightShiftWorks();
        },
        liftedBooleanAndWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedBooleanAndWorks();
        },
        liftedBooleanOrWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedBooleanOrWorks();
        },
        liftedBooleanNotWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedBooleanNotWorks();
        },
        liftedNegationWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedNegationWorks();
        },
        liftedUnaryPlusWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedUnaryPlusWorks();
        },
        liftedOnesComplementWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.liftedOnesComplementWorks();
        },
        coalesceWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).beforeTest(false, assert);
            t.coalesceWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).instance = new Bridge.ClientTest.NumberFormatInfoTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        getFormatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).beforeTest(false, assert);
            t.getFormatWorks();
        },
        invariantWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).beforeTest(false, assert);
            t.invariantWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).instance = new Bridge.ClientTest.PropertyAccessorTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).getInstance();
            return r;
        },
        accessorsCanBeInvokedInstance: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).beforeTest(false, assert);
            t.accessorsCanBeInvokedInstance();
        },
        accessorsCanBeInvokedStatic: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).beforeTest(false, assert);
            t.accessorsCanBeInvokedStatic();
        },
        accessorsCanBeInvokedGeneric: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).beforeTest(false, assert);
            t.accessorsCanBeInvokedGeneric();
        },
        accessorsCanBeInvokedGenericStatic: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).beforeTest(false, assert);
            t.accessorsCanBeInvokedGenericStatic();
        },
        baseAccessorsCanBeInvoked: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).beforeTest(false, assert);
            t.baseAccessorsCanBeInvoked();
        },
        baseAccessorsCanBeInvokedGeneric: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).beforeTest(false, assert);
            t.baseAccessorsCanBeInvokedGeneric();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).instance = new Bridge.ClientTest.Text.RegularExpressions.RegexTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        stringOnlyConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(false, assert);
            t.stringOnlyConstructorWorks();
        },
        constructorWithFlagsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(false, assert);
            t.constructorWithFlagsWorks();
        },
        globalFlagWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(false, assert);
            t.globalFlagWorks();
        },
        ignoreCaseFlagWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(false, assert);
            t.ignoreCaseFlagWorks();
        },
        multilineFlagWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(false, assert);
            t.multilineFlagWorks();
        },
        patternPropertyWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(false, assert);
            t.patternPropertyWorks();
        },
        sourcePropertyWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(false, assert);
            t.sourcePropertyWorks();
        },
        execWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(false, assert);
            t.execWorks();
        },
        lastIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(false, assert);
            t.lastIndexWorks();
        },
        testWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(false, assert);
            t.testWorks();
        },
        escapeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.Text.RegularExpressions.RegexTests).escapeWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).instance = new Bridge.ClientTest.SimpleTypes.BooleanTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultValueIsFalse: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).beforeTest(false, assert);
            t.defaultValueIsFalse();
        },
        creatingInstanceReturnsFalse: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).beforeTest(false, assert);
            t.creatingInstanceReturnsFalse();
        },
        defaultConstructorReturnsFalse: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).beforeTest(false, assert);
            t.defaultConstructorReturnsFalse();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        objectEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).beforeTest(false, assert);
            t.objectEqualsWorks();
        },
        boolEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).beforeTest(false, assert);
            t.boolEqualsWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).instance = new Bridge.ClientTest.SimpleTypes.ByteTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.constantsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.parseWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).instance = new Bridge.ClientTest.SimpleTypes.CharTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).getInstance();
            return r;
        },
        typePropertiesAreInt32: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.typePropertiesAreInt32();
        },
        castsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.defaultValueWorks();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.constantsWork();
        },
        charComparisonWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.charComparisonWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.parseWorks();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        toStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.toStringWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.compareToWorks();
        },
        isLowerWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.isLowerWorks();
        },
        isUpperWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.isUpperWorks();
        },
        toLowerWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.toLowerWorks();
        },
        toUpperWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.toUpperWorks();
        },
        isDigitWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.isDigitWorks();
        },
        isWhiteSpaceWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.isWhiteSpaceWorks();
        },
        isDigitWithStringAndIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.isDigitWithStringAndIndexWorks();
        },
        isWhiteSpaceWithStringAndIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).beforeTest(false, assert);
            t.isWhiteSpaceWithStringAndIndexWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).instance = new Bridge.ClientTest.SimpleTypes.DecimalTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.defaultValueIs0();
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.constantsWork();
        },
        convertingConstructorsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.convertingConstructorsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        addWithStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.addWithStringWorks();
        },
        conversionsToDecimalWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.conversionsToDecimalWork();
        },
        conversionsFromDecimalWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.conversionsFromDecimalWork();
        },
        operatorsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.operatorsWork();
        },
        addWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.addWorks();
        },
        ceilingWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.ceilingWorks();
        },
        divideWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.divideWorks();
        },
        floorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.floorWorks();
        },
        remainderWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.remainderWorks();
        },
        multiplyWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.multiplyWorks();
        },
        negateWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.negateWorks();
        },
        roundWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.roundWorks();
        },
        roundWithModeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.roundWithModeWorks();
        },
        subtractWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.subtractWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        objectEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.objectEqualsWorks();
        },
        decimalEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.decimalEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.compareToWorks();
        },
        fullCoalesceWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.fullCoalesceWorks();
        },
        shortCoalesceWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).beforeTest(false, assert);
            t.shortCoalesceWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).instance = new Bridge.ClientTest.SimpleTypes.DoubleTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.defaultValueIs0();
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.constantsWork();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        toStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.toStringWorks();
        },
        toExponentialWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.toExponentialWorks();
        },
        toExponentialWithFractionalDigitsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.toExponentialWithFractionalDigitsWorks();
        },
        toFixed: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.toFixed();
        },
        toFixedWithFractionalDigitsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.toFixedWithFractionalDigitsWorks();
        },
        toPrecisionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.toPrecisionWorks();
        },
        toPrecisionWithPrecisionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.toPrecisionWithPrecisionWorks();
        },
        isPositiveInfinityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.isPositiveInfinityWorks();
        },
        isNegativeInfinityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.isNegativeInfinityWorks();
        },
        isInfinityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.isInfinityWorks();
        },
        isFiniteWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.isFiniteWorks();
        },
        isNaNWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.isNaNWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        objectEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.objectEqualsWorks();
        },
        doubleEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.doubleEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).beforeTest(false, assert);
            t.compareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).instance = new Bridge.ClientTest.SimpleTypes.Int16Tests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.constantsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.parseWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).instance = new Bridge.ClientTest.SimpleTypes.Int32Tests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.castsWork();
        },
        typeIsWorksForInt32: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.typeIsWorksForInt32();
        },
        typeAsWorksForInt32: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.typeAsWorksForInt32();
        },
        unboxingWorksForInt32: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.unboxingWorksForInt32();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.constantsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.parseWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.iComparableCompareToWorks();
        },
        integerDivisionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.integerDivisionWorks();
        },
        integerModuloWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.integerModuloWorks();
        },
        integerDivisionByZeroThrowsDivideByZeroException: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.integerDivisionByZeroThrowsDivideByZeroException();
        },
        doublesAreTruncatedWhenConvertedToIntegers: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).beforeTest(false, assert);
            t.doublesAreTruncatedWhenConvertedToIntegers();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).instance = new Bridge.ClientTest.SimpleTypes.Int64Tests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.parseWorks();
        },
        castingOfLargeDoublesToInt64Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.castingOfLargeDoublesToInt64Works();
        },
        divisionOfLargeInt64Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.divisionOfLargeInt64Works();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).instance = new Bridge.ClientTest.SimpleTypes.ObjectTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        canGetHashCodeForObject: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).beforeTest(false, assert);
            t.canGetHashCodeForObject();
        },
        repeatedCallsToGetHashCodeReturnsSameValue: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).beforeTest(false, assert);
            t.repeatedCallsToGetHashCodeReturnsSameValue();
        },
        objectIsEqualToItself: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).beforeTest(false, assert);
            t.objectIsEqualToItself();
        },
        objectIsNotEqualToOtherObject: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).beforeTest(false, assert);
            t.objectIsNotEqualToOtherObject();
        },
        staticEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).beforeTest(false, assert);
            t.staticEqualsWorks();
        },
        referenceEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).beforeTest(false, assert);
            t.referenceEqualsWorks();
        },
        toStringOverride: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).beforeTest(false, assert);
            t.toStringOverride();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).instance = new Bridge.ClientTest.SimpleTypes.SByteTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.constantsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.parseWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).instance = new Bridge.ClientTest.SimpleTypes.SingleTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.defaultValueIs0();
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.constantsWork();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        toStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.toStringWorks();
        },
        toExponentialWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.toExponentialWorks();
        },
        toExponentialWithFractionalDigitsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.toExponentialWithFractionalDigitsWorks();
        },
        toFixed: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.toFixed();
        },
        toFixedWithFractionalDigitsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.toFixedWithFractionalDigitsWorks();
        },
        toPrecisionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.toPrecisionWorks();
        },
        toPrecisionWithPrecisionWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.toPrecisionWithPrecisionWorks();
        },
        isPositiveInfinityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.isPositiveInfinityWorks();
        },
        isNegativeInfinityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.isNegativeInfinityWorks();
        },
        isInfinityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.isInfinityWorks();
        },
        isFiniteWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.isFiniteWorks();
        },
        isNaNWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.isNaNWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.equalsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).beforeTest(false, assert);
            t.compareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTestVersion', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTestVersion).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTestVersion).instance = new Bridge.ClientTest.SimpleTypes.TestVersion();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTestVersion).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTestVersion).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTestVersion).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTestVersion).getInstance();
            return r;
        },
        testConstructors: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTestVersion).beforeTest(true, assert);
            assert.expect(42);
            Bridge.get(Bridge.ClientTest.SimpleTypes.TestVersion).testConstructors();
        },
        testCloneCompare: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTestVersion).beforeTest(true, assert);
            assert.expect(13);
            Bridge.get(Bridge.ClientTest.SimpleTypes.TestVersion).testCloneCompare();
        },
        testEqualsGetHashCode: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTestVersion).beforeTest(true, assert);
            assert.expect(9);
            Bridge.get(Bridge.ClientTest.SimpleTypes.TestVersion).testEqualsGetHashCode();
        },
        testToString: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTestVersion).beforeTest(true, assert);
            assert.expect(10);
            Bridge.get(Bridge.ClientTest.SimpleTypes.TestVersion).testToString();
        },
        testParse: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTestVersion).beforeTest(true, assert);
            assert.expect(6);
            Bridge.get(Bridge.ClientTest.SimpleTypes.TestVersion).testParse();
        },
        testOperators: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTestVersion).beforeTest(true, assert);
            assert.expect(30);
            Bridge.get(Bridge.ClientTest.SimpleTypes.TestVersion).testOperators();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).instance = new Bridge.ClientTest.SimpleTypes.TupleTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).getInstance();
            return r;
        },
        tuple1Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).beforeTest(false, assert);
            t.tuple1Works();
        },
        tuple2Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).beforeTest(false, assert);
            t.tuple2Works();
        },
        tuple3Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).beforeTest(false, assert);
            t.tuple3Works();
        },
        tuple4Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).beforeTest(false, assert);
            t.tuple4Works();
        },
        tuple5Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).beforeTest(false, assert);
            t.tuple5Works();
        },
        tuple6Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).beforeTest(false, assert);
            t.tuple6Works();
        },
        tuple7Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).beforeTest(false, assert);
            t.tuple7Works();
        },
        tuple8Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).beforeTest(false, assert);
            t.tuple8Works();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).instance = new Bridge.ClientTest.SimpleTypes.UInt16Tests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.constantsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.parseWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).instance = new Bridge.ClientTest.SimpleTypes.UInt32Tests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.constantsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.parseWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).instance = new Bridge.ClientTest.SimpleTypes.UInt64Tests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.constantsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        castingOfLargeValuesToUInt64Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.castingOfLargeValuesToUInt64Works();
        },
        divisionOfLargeUInt64Works: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.divisionOfLargeUInt64Works();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.parseWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).instance = new Bridge.ClientTest.SimpleTypes.StringTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        copyConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.copyConstructorWorks();
        },
        charAndCountConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.charAndCountConstructorWorks();
        },
        charArrayConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.charArrayConstructorWorks();
        },
        emptyFieldWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.emptyFieldWorks();
        },
        lengthPropertyWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.lengthPropertyWorks();
        },
        charAtWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.charAtWorks();
        },
        charCodeAtWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.charCodeAtWorks();
        },
        compareWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.compareWorks();
        },
        compareWithIgnoreCaseArgWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.compareWithIgnoreCaseArgWorks();
        },
        concatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.concatWorks();
        },
        concatWithObjectsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.concatWithObjectsWorks();
        },
        endsWithCharWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.endsWithCharWorks();
        },
        endsWithStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.endsWithStringWorks();
        },
        staticEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.staticEqualsWorks();
        },
        formatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.formatWorks();
        },
        formatWorksWithIFormattable: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.formatWorksWithIFormattable();
        },
        formatCanUseEscapedBraces: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.formatCanUseEscapedBraces();
        },
        fromCharCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.fromCharCodeWorks();
        },
        indexOfCharWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.indexOfCharWorks();
        },
        indexOfStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.indexOfStringWorks();
        },
        indexOfCharWithStartIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.indexOfCharWithStartIndexWorks();
        },
        indexOfCharWithStartIndexAndCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.indexOfCharWithStartIndexAndCountWorks();
        },
        indexOfStringWithStartIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.indexOfStringWithStartIndexWorks();
        },
        indexOfStringWithStartIndexAndCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.indexOfStringWithStartIndexAndCountWorks();
        },
        indexOfAnyWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.indexOfAnyWorks();
        },
        indexOfAnyWithStartIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.indexOfAnyWithStartIndexWorks();
        },
        indexOfAnyWithStartIndexAndCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.indexOfAnyWithStartIndexAndCountWorks();
        },
        insertWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.insertWorks();
        },
        isNullOrEmptyWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.isNullOrEmptyWorks();
        },
        lastIndexOfCharWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.lastIndexOfCharWorks();
        },
        lastIndexOfStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.lastIndexOfStringWorks();
        },
        lastIndexOfCharWithStartIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.lastIndexOfCharWithStartIndexWorks();
        },
        lastIndexOfStringWithStartIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.lastIndexOfStringWithStartIndexWorks();
        },
        lastIndexOfCharWithStartIndexAndCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.lastIndexOfCharWithStartIndexAndCountWorks();
        },
        lastIndexOfStringWithStartIndexAndCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.lastIndexOfStringWithStartIndexAndCountWorks();
        },
        lastIndexOfAnyWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.lastIndexOfAnyWorks();
        },
        lastIndexOfAnyWithStartIndexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.lastIndexOfAnyWithStartIndexWorks();
        },
        lastIndexOfAnyWithStartIndexAndCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.lastIndexOfAnyWithStartIndexAndCountWorks();
        },
        localeCompareWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.localeCompareWorks();
        },
        matchWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.matchWorks();
        },
        padLeftWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.padLeftWorks();
        },
        padLeftWithCharWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.padLeftWithCharWorks();
        },
        padRightWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.padRightWorks();
        },
        padRightWithCharWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.padRightWithCharWorks();
        },
        removeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.removeWorks();
        },
        removeWithCountWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.removeWithCountWorks();
        },
        replaceWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.replaceWorks();
        },
        replaceCharWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.replaceCharWorks();
        },
        replaceRegexWithReplaceTextWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.replaceRegexWithReplaceTextWorks();
        },
        replaceRegexWithReplaceCallbackWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.replaceRegexWithReplaceCallbackWorks();
        },
        searchWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.searchWorks();
        },
        sliceWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.sliceWorks();
        },
        splitWithStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.splitWithStringWorks();
        },
        splitWithCharWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.splitWithCharWorks();
        },
        jsSplitWithStringAndLimitWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.jsSplitWithStringAndLimitWorks();
        },
        jsSplitWithCharAndLimitWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.jsSplitWithCharAndLimitWorks();
        },
        splitWithCharsAndLimitWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.splitWithCharsAndLimitWorks();
        },
        splitWithCharsAndStringSplitOptionsAndLimitWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.splitWithCharsAndStringSplitOptionsAndLimitWorks();
        },
        splitWithRegexWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.splitWithRegexWorks();
        },
        someNetSplitTests: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.someNetSplitTests();
        },
        splitWithCharsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.splitWithCharsWorks();
        },
        splitWithStringsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.splitWithStringsWorks();
        },
        splitWithStringsAndLimitWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.splitWithStringsAndLimitWorks();
        },
        startsWithCharWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.startsWithCharWorks();
        },
        startsWithStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.startsWithStringWorks();
        },
        substrWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.substrWorks();
        },
        substringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.substringWorks();
        },
        jsSubstringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.jsSubstringWorks();
        },
        toLowerCaseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.toLowerCaseWorks();
        },
        toUpperCaseWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.toUpperCaseWorks();
        },
        toLowerWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.toLowerWorks();
        },
        toUpperWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.toUpperWorks();
        },
        trimWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.trimWorks();
        },
        trimCharsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.trimCharsWorks();
        },
        trimStartCharsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.trimStartCharsWorks();
        },
        trimEndCharsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.trimEndCharsWorks();
        },
        trimStartWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.trimStartWorks();
        },
        trimEndWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.trimEndWorks();
        },
        stringEqualityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.stringEqualityWorks();
        },
        stringInequalityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.stringInequalityWorks();
        },
        stringIndexingWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.stringIndexingWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        instanceEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.instanceEqualsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        stringEqualsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.stringEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.iComparableCompareToWorks();
        },
        joinWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.joinWorks();
        },
        containsWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.containsWorks();
        },
        toCharArrayWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(false, assert);
            t.toCharArrayWorks();
        },
        strings: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(true, assert);
            Bridge.get(Bridge.ClientTest.SimpleTypes.StringTests).strings();
        },
        enumerable: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).beforeTest(true, assert);
            assert.expect(5);
            Bridge.get(Bridge.ClientTest.SimpleTypes.StringTests).enumerable();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).instance = new Bridge.ClientTest.Text.StringBuilderTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithCapacityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.constructorWithCapacityWorks();
        },
        initialTextConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.initialTextConstructorWorks();
        },
        initialTextConstructorWithCapacityWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.initialTextConstructorWithCapacityWorks();
        },
        substringConstructorWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.substringConstructorWorks();
        },
        appendBoolWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.appendBoolWorks();
        },
        appendCharWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.appendCharWorks();
        },
        appendIntWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.appendIntWorks();
        },
        appendDoubleWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.appendDoubleWorks();
        },
        appendObjectWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.appendObjectWorks();
        },
        appendStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.appendStringWorks();
        },
        appendLineWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.appendLineWorks();
        },
        appendLineStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.appendLineStringWorks();
        },
        clearWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.clearWorks();
        },
        toStringWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.toStringWorks();
        },
        lengthPropertyWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(false, assert);
            t.lengthPropertyWorks();
        },
        stringBuilders: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).beforeTest(true, assert);
            assert.expect(21);
            Bridge.get(Bridge.ClientTest.Text.StringBuilderTests).stringBuilders();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests).instance = new Bridge.ClientTest.EnvironmentTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests).getInstance();
            return r;
        },
        newLineIsAStringContainingOnlyTheNewLineChar: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests).beforeTest(false, assert);
            t.newLineIsAStringContainingOnlyTheNewLineChar();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).instance = new Bridge.ClientTest.CultureInfoTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        getFormatWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).beforeTest(false, assert);
            t.getFormatWorks();
        },
        invariantWorks: function (assert) {
            var t = Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).beforeTest(false, assert);
            t.invariantWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge508', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge508).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge508).instance = new Bridge.ClientTest.BridgeIssues.Bridge508();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge508).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge508).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge508).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge508).getInstance();
            return r;
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge690', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge690).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge690).instance = new Bridge.ClientTest.BridgeIssues.Bridge690();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge690).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge690).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge690).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge690).getInstance();
            return r;
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIComparableTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIComparableTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIComparableTests).instance = new Bridge.ClientTest.IComparableTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIComparableTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIComparableTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIComparableTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIComparableTests).getInstance();
            return r;
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIEquatableTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIEquatableTests).instance === null) {
                Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIEquatableTests).instance = new Bridge.ClientTest.IEquatableTests();
            }
            return Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIEquatableTests).instance;
        },
        setInstance: function (value) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIEquatableTests).instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIEquatableTests).setInstance(null);
            Bridge.get(Bridge.Test.Assert).assert = assert;
            var r = isStatic ? null : Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIEquatableTests).getInstance();
            return r;
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests', {
    statics: {
        config: {
            init: function () {
                Bridge.ready(this.run);
            }
        },
        run: function () {
            QUnit.module("C#");
            QUnit.test("Abstract types - TestB", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestAbstractClass).testB);
            QUnit.test("Abstract types - TestC", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestAbstractClass).testC);
            QUnit.test("Abstract types - TestBC", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestAbstractClass).testBC);
            QUnit.test("Enum - TestParse", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).testParse);
            QUnit.test("Enum - TestParseIgnoreCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).testParseIgnoreCase);
            QUnit.test("Enum - TestToString", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).testToString);
            QUnit.test("Enum - TestGetValues", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).testGetValues);
            QUnit.test("Enum - TestCompareTo", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).testCompareTo);
            QUnit.test("Enum - TestFormat", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).testFormat);
            QUnit.test("Enum - TestGetName", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).testGetName);
            QUnit.test("Enum - TestGetNames", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).testGetNames);
            QUnit.test("Enum - TestHasFlag", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).testHasFlag);
            QUnit.test("Enum - TestIsDefined", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).testIsDefined);
            QUnit.test("Enum - TestTryParse", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestEnum).testTryParse);
            QUnit.test("Static overloads - TestA", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInheritance).testA);
            QUnit.test("Static overloads - TestB", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInheritance).testB);
            QUnit.test("Static overloads - TestAB", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInheritance).testAB);
            QUnit.test("Interfaces - TestInterfaceMethodAndProperty", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInterfaces).testInterfaceMethodAndProperty);
            QUnit.test("Interfaces - TestExplicitInterfaceMethodAndProperty", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInterfaces).testExplicitInterfaceMethodAndProperty);
            QUnit.test("Interfaces - TestTwoInterfaces", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestInterfaces).testTwoInterfaces);
            QUnit.test("Method parameters - Test", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestMethodParametersClass).test);
            QUnit.test("Instance overloads - TestInstance", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestOverloadInstanceMethods).testInstance);
            QUnit.test("Static overloads - TestStatic", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestOverloadStaticMethods).testStatic);
            QUnit.test("Try/Catch - SimpleTryCatch", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchBlocks).simpleTryCatch);
            QUnit.test("Try/Catch - CaughtExceptions", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchBlocks).caughtExceptions);
            QUnit.test("Try/Catch - ThrownExceptions", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchBlocks).thrownExceptions);
            QUnit.test("Try/Catch - Bridge320", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchBlocks).bridge320);
            QUnit.test("Try/Catch - Bridge343", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchBlocks).bridge343);
            QUnit.test("Try/Catch/Finally - SimpleTryCatchFinally", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchFinallyBlocks).simpleTryCatchFinally);
            QUnit.test("Try/Catch/Finally - CaughtExceptions", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchFinallyBlocks).caughtExceptions);
            QUnit.test("Try/Catch/Finally - ThrownExceptions", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestTryCatchFinallyBlocks).thrownExceptions);
            QUnit.test("Value types - TestInstanceConstructorsAndMethods", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestValueTypes).testInstanceConstructorsAndMethods);
            QUnit.test("Value types - TestStaticConstructorsAndMethods", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestValueTypes).testStaticConstructorsAndMethods);
            QUnit.test("Virtual methods - TestB", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestVirtualMethods).testB);
            QUnit.test("Reference types - TestInstanceConstructorsAndMethods", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestReferenceTypes).testInstanceConstructorsAndMethods);
            QUnit.test("Reference types - TestStaticConstructorsAndMethods", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestReferenceTypes).testStaticConstructorsAndMethods);
            QUnit.test("Reference types - TestMethodParameters", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBasicCSharpTestReferenceTypes).testMethodParameters);
            QUnit.module("Collections");
            QUnit.test("Array - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).typePropertiesAreCorrect);
            QUnit.test("Array - LengthWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).lengthWorks);
            QUnit.test("Array - RankIsOne", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).rankIsOne);
            QUnit.test("Array - GetLengthWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).getLengthWorks);
            QUnit.test("Array - GetLowerBound", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).getLowerBound);
            QUnit.test("Array - GetUpperBoundWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).getUpperBoundWorks);
            QUnit.test("Array - GettingValueByIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).gettingValueByIndexWorks);
            QUnit.test("Array - GetValueWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).getValueWorks);
            QUnit.test("Array - SettingValueByIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).settingValueByIndexWorks);
            QUnit.test("Array - SetValueWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).setValueWorks);
            QUnit.test("Array - ForeachWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).foreachWorks);
            QUnit.test("Array - CloneWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).cloneWorks);
            QUnit.test("Array - ConcatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).concatWorks);
            QUnit.test("Array - ContainsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).containsWorks);
            QUnit.test("Array - ContainsUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).containsUsesEqualsMethod);
            QUnit.test("Array - AllWithArrayItemFilterCallbackWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).allWithArrayItemFilterCallbackWorks);
            QUnit.test("Array - SliceWithoutEndWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).sliceWithoutEndWorks);
            QUnit.test("Array - ForeachWithArrayItemCallbackWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).foreachWithArrayItemCallbackWorks);
            QUnit.test("Array - ForeachWithArrayCallbackWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).foreachWithArrayCallbackWorks);
            QUnit.test("Array - IndexOfWithoutStartIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).indexOfWithoutStartIndexWorks);
            QUnit.test("Array - IndexOfWithoutStartIndexUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).indexOfWithoutStartIndexUsesEqualsMethod);
            QUnit.test("Array - IndexOfWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).indexOfWithStartIndexWorks);
            QUnit.test("Array - JoinWithoutDelimiterWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).joinWithoutDelimiterWorks);
            QUnit.test("Array - ReverseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).reverseWorks);
            QUnit.test("Array - AnyWithArrayItemFilterCallbackWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).anyWithArrayItemFilterCallbackWorks);
            QUnit.test("Array - BinarySearch1Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).binarySearch1Works);
            QUnit.test("Array - BinarySearch2Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).binarySearch2Works);
            QUnit.test("Array - BinarySearch3Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).binarySearch3Works);
            QUnit.test("Array - BinarySearch4Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).binarySearch4Works);
            QUnit.test("Array - BinarySearchExceptionsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).binarySearchExceptionsWorks);
            QUnit.test("Array - SortWithDefaultCompareWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).sortWithDefaultCompareWorks);
            QUnit.test("Array - Sort1Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).sort1Works);
            QUnit.test("Array - Sort2Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).sort2Works);
            QUnit.test("Array - Sort3Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).sort3Works);
            QUnit.test("Array - Sort4Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).sort4Works);
            QUnit.test("Array - SortExceptionsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).sortExceptionsWorks);
            QUnit.test("Array - ForeachWhenCastToIListWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).foreachWhenCastToIListWorks);
            QUnit.test("Array - ICollectionCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).iCollectionCountWorks);
            QUnit.test("Array - ICollectionAddWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).iCollectionAddWorks);
            QUnit.test("Array - ICollectionClearWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).iCollectionClearWorks);
            QUnit.test("Array - ICollectionContainsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).iCollectionContainsWorks);
            QUnit.test("Array - ICollectionContainsUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).iCollectionContainsUsesEqualsMethod);
            QUnit.test("Array - ICollectionRemoveWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).iCollectionRemoveWorks);
            QUnit.test("Array - IListIndexingWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).iListIndexingWorks);
            QUnit.test("Array - IListIndexOfWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).iListIndexOfWorks);
            QUnit.test("Array - IListIndexOfUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).iListIndexOfUsesEqualsMethod);
            QUnit.test("Array - IListInsertWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).iListInsertWorks);
            QUnit.test("Array - IListRemoveAtWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests).iListRemoveAtWorks);
            QUnit.test("GenericDictionary - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).typePropertiesAreCorrect);
            QUnit.test("GenericDictionary - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).defaultConstructorWorks);
            QUnit.test("GenericDictionary - CapacityConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).capacityConstructorWorks);
            QUnit.test("GenericDictionary - CapacityAndEqualityComparerWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).capacityAndEqualityComparerWorks);
            QUnit.test("GenericDictionary - EqualityComparerOnlyConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).equalityComparerOnlyConstructorWorks);
            QUnit.test("GenericDictionary - CountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).countWorks);
            QUnit.test("GenericDictionary - KeysWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).keysWorks);
            QUnit.test("GenericDictionary - ValuesWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).valuesWorks);
            QUnit.test("GenericDictionary - IndexerGetterWorksForExistingItems", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).indexerGetterWorksForExistingItems);
            QUnit.test("GenericDictionary - IndexerSetterWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).indexerSetterWorks);
            QUnit.test("GenericDictionary - IndexerGetterThrowsForNonExistingItems", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).indexerGetterThrowsForNonExistingItems);
            QUnit.test("GenericDictionary - AddWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).addWorks);
            QUnit.test("GenericDictionary - AddThrowsIfItemAlreadyExists", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).addThrowsIfItemAlreadyExists);
            QUnit.test("GenericDictionary - ClearWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).clearWorks);
            QUnit.test("GenericDictionary - ContainsKeyWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).containsKeyWorks);
            QUnit.test("GenericDictionary - EnumeratingWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).enumeratingWorks);
            QUnit.test("GenericDictionary - RemoveWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).removeWorks);
            QUnit.test("GenericDictionary - TryGetValueWithIntKeysWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).tryGetValueWithIntKeysWorks);
            QUnit.test("GenericDictionary - TryGetValueWithObjectKeysWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).tryGetValueWithObjectKeysWorks);
            QUnit.test("GenericDictionary - CanUseCustomComparer", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests).canUseCustomComparer);
            QUnit.test("ICollection - ArrayImplementsICollection", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).arrayImplementsICollection);
            QUnit.test("ICollection - CustomClassThatShouldImplementICollectionDoesSo", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).customClassThatShouldImplementICollectionDoesSo);
            QUnit.test("ICollection - ArrayCastToICollectionCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).arrayCastToICollectionCountWorks);
            QUnit.test("ICollection - ClassImplementingICollectionCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).classImplementingICollectionCountWorks);
            QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).classImplementingICollectionCastToICollectionCountWorks);
            QUnit.test("ICollection - ClassImplementingICollectionAddWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).classImplementingICollectionAddWorks);
            QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionAddWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).classImplementingICollectionCastToICollectionAddWorks);
            QUnit.test("ICollection - ClassImplementingICollectionClearWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).classImplementingICollectionClearWorks);
            QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionClearWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).classImplementingICollectionCastToICollectionClearWorks);
            QUnit.test("ICollection - ArrayCastToICollectionContainsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).arrayCastToICollectionContainsWorks);
            QUnit.test("ICollection - ClassImplementingICollectionContainsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).classImplementingICollectionContainsWorks);
            QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionContainsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).classImplementingICollectionCastToICollectionContainsWorks);
            QUnit.test("ICollection - ClassImplementingICollectionRemoveWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).classImplementingICollectionRemoveWorks);
            QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionRemoveWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests).classImplementingICollectionCastToICollectionRemoveWorks);
            QUnit.test("IDictionary - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).typePropertiesAreCorrect);
            QUnit.test("IDictionary - ClassImplementsInterfaces", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).classImplementsInterfaces);
            QUnit.test("IDictionary - CountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).countWorks);
            QUnit.test("IDictionary - KeysWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).keysWorks);
            QUnit.test("IDictionary - GetItemWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).getItemWorks);
            QUnit.test("IDictionary - ValuesWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).valuesWorks);
            QUnit.test("IDictionary - ContainsKeyWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).containsKeyWorks);
            QUnit.test("IDictionary - TryGetValueWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).tryGetValueWorks);
            QUnit.test("IDictionary - AddWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).addWorks);
            QUnit.test("IDictionary - ClearWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).clearWorks);
            QUnit.test("IDictionary - RemoveWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).removeWorks);
            QUnit.test("IDictionary - SetItemWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests).setItemWorks);
            QUnit.test("IEnumerable - ArrayImplementsIEnumerable", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).arrayImplementsIEnumerable);
            QUnit.test("IEnumerable - CustomClassThatShouldImplementIEnumerableDoesSo", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).customClassThatShouldImplementIEnumerableDoesSo);
            QUnit.test("IEnumerable - ArrayGetEnumeratorMethodWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).arrayGetEnumeratorMethodWorks);
            QUnit.test("IEnumerable - ArrayCastToIEnumerableCanBeEnumerated", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).arrayCastToIEnumerableCanBeEnumerated);
            QUnit.test("IEnumerable - ClassImplementingIEnumerableCanBeEnumerated", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).classImplementingIEnumerableCanBeEnumerated);
            QUnit.test("IEnumerable - ClassImplementingIEnumerableCastToIEnumerableCanBeEnumerated", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests).classImplementingIEnumerableCastToIEnumerableCanBeEnumerated);
            QUnit.test("IList - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).typePropertiesAreCorrect);
            QUnit.test("IList - ArrayImplementsIList", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).arrayImplementsIList);
            QUnit.test("IList - CustomClassThatShouldImplementIListDoesSo", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).customClassThatShouldImplementIListDoesSo);
            QUnit.test("IList - ArrayCastToIListGetItemWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).arrayCastToIListGetItemWorks);
            QUnit.test("IList - ClassImplementingIListGetItemWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).classImplementingIListGetItemWorks);
            QUnit.test("IList - ClassImplementingIListCastToIListGetItemWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).classImplementingIListCastToIListGetItemWorks);
            QUnit.test("IList - ArrayCastToIListSetItemWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).arrayCastToIListSetItemWorks);
            QUnit.test("IList - ClassImplementingIListSetItemWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).classImplementingIListSetItemWorks);
            QUnit.test("IList - ClassImplementingIListCastToIListSetItemWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).classImplementingIListCastToIListSetItemWorks);
            QUnit.test("IList - ArrayCastToIListIndexOfWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).arrayCastToIListIndexOfWorks);
            QUnit.test("IList - ClassImplementingIListIndexOfWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).classImplementingIListIndexOfWorks);
            QUnit.test("IList - ClassImplementingIListCastToIListIndexOfWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).classImplementingIListCastToIListIndexOfWorks);
            QUnit.test("IList - ClassImplementingIListInsertWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).classImplementingIListInsertWorks);
            QUnit.test("IList - ClassImplementingIListCastToIListInsertWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).classImplementingIListCastToIListInsertWorks);
            QUnit.test("IList - ClassImplementingIListRemoveAtWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).classImplementingIListRemoveAtWorks);
            QUnit.test("IList - ClassImplementingIListCastToIListRemoveAtWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests).classImplementingIListCastToIListRemoveAtWorks);
            QUnit.test("IteratorBlock - TypeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable);
            QUnit.test("IteratorBlock - EnumeratingIEnumeratorIteratorToEndWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).enumeratingIEnumeratorIteratorToEndWorks);
            QUnit.test("IteratorBlock - PrematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks);
            QUnit.test("IteratorBlock - ExceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks Exception thrown not caught", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks);
            QUnit.test("IteratorBlock - TypeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface);
            QUnit.test("IteratorBlock - EnumeratingIEnumerableIteratorToEndWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).enumeratingIEnumerableIteratorToEndWorks);
            QUnit.test("IteratorBlock - PrematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks);
            QUnit.test("IteratorBlock - ExceptionInIEnumerableIteratorBodyExecutesFinallyBlocks exception thrown not caught", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks);
            QUnit.test("IteratorBlock - EnumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters);
            QUnit.test("IteratorBlock - DifferentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests).differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals);
            QUnit.test("List - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).typePropertiesAreCorrect);
            QUnit.test("List - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).defaultConstructorWorks);
            QUnit.test("List - ConstructorWithCapacityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).constructorWithCapacityWorks);
            QUnit.test("List - ConstructingFromArrayWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).constructingFromArrayWorks);
            QUnit.test("List - ConstructingFromListWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).constructingFromListWorks);
            QUnit.test("List - ConstructingFromIEnumerableWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).constructingFromIEnumerableWorks);
            QUnit.test("List - CountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).countWorks);
            QUnit.test("List - IndexingWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).indexingWorks);
            QUnit.test("List - ForeachWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).foreachWorks);
            QUnit.test("List - GetEnumeratorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).getEnumeratorWorks);
            QUnit.test("List - AddWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).addWorks);
            QUnit.test("List - AddRangeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).addRangeWorks);
            QUnit.test("List - BinarySearch1Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).binarySearch1Works);
            QUnit.test("List - BinarySearch2Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).binarySearch2Works);
            QUnit.test("List - BinarySearch3Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).binarySearch3Works);
            QUnit.test("List - BinarySearch4Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).binarySearch4Works);
            QUnit.test("List - ClearWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).clearWorks);
            QUnit.test("List - ContainsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).containsWorks);
            QUnit.test("List - ContainsUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).containsUsesEqualsMethod);
            QUnit.test("List - SliceWithoutEndWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).sliceWithoutEndWorks);
            QUnit.test("List - SliceWithEndWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).sliceWithEndWorks);
            QUnit.test("List - ForeachWithListItemCallbackWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).foreachWithListItemCallbackWorks);
            QUnit.test("List - ForeachWithListCallbackWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).foreachWithListCallbackWorks);
            QUnit.test("List - IndexOfWithoutStartIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).indexOfWithoutStartIndexWorks);
            QUnit.test("List - IndexOfWithoutStartIndexUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).indexOfWithoutStartIndexUsesEqualsMethod);
            QUnit.test("List - IndexOfWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).indexOfWithStartIndexWorks);
            QUnit.test("List - IndexOfWithStartIndexUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).indexOfWithStartIndexUsesEqualsMethod);
            QUnit.test("List - InsertWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).insertWorks);
            QUnit.test("List - InsertRangeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).insertRangeWorks);
            QUnit.test("List - JoinWithoutDelimiterWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).joinWithoutDelimiterWorks);
            QUnit.test("List - JoinWithDelimiterWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).joinWithDelimiterWorks);
            QUnit.test("List - RemoveWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).removeWorks);
            QUnit.test("List - RemoveReturnsFalseIfTheElementWasNotFound", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).removeReturnsFalseIfTheElementWasNotFound);
            QUnit.test("List - RemoveCanRemoveNullItem", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).removeCanRemoveNullItem);
            QUnit.test("List - RemoveUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).removeUsesEqualsMethod);
            QUnit.test("List - RemoveAtWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).removeAtWorks);
            QUnit.test("List - RemoveRangeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).removeRangeWorks);
            QUnit.test("List - ReverseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).reverseWorks);
            QUnit.test("List - SortWithDefaultCompareWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).sortWithDefaultCompareWorks);
            QUnit.test("List - SortWithCompareCallbackWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).sortWithCompareCallbackWorks);
            QUnit.test("List - SortWithIComparerWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).sortWithIComparerWorks);
            QUnit.test("List - ForeachWhenCastToIEnumerableWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).foreachWhenCastToIEnumerableWorks);
            QUnit.test("List - IEnumerableGetEnumeratorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iEnumerableGetEnumeratorWorks);
            QUnit.test("List - ICollectionCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iCollectionCountWorks);
            QUnit.test("List - ICollectionAddWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iCollectionAddWorks);
            QUnit.test("List - ICollectionClearWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iCollectionClearWorks);
            QUnit.test("List - ICollectionContainsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iCollectionContainsWorks);
            QUnit.test("List - ICollectionContainsUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iCollectionContainsUsesEqualsMethod);
            QUnit.test("List - ICollectionRemoveWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iCollectionRemoveWorks);
            QUnit.test("List - ICollectionRemoveCanRemoveNullItem", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iCollectionRemoveCanRemoveNullItem);
            QUnit.test("List - ICollectionRemoveUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iCollectionRemoveUsesEqualsMethod);
            QUnit.test("List - IListIndexingWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iListIndexingWorks);
            QUnit.test("List - IListIndexOfWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iListIndexOfWorks);
            QUnit.test("List - IListIndexOfUsesEqualsMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iListIndexOfUsesEqualsMethod);
            QUnit.test("List - IListInsertWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iListInsertWorks);
            QUnit.test("List - IListRemoveAtWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).iListRemoveAtWorks);
            QUnit.test("List - ToArrayWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests).toArrayWorks);
            QUnit.test("MultidimArray - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).typePropertiesAreCorrect);
            QUnit.test("MultidimArray - LengthWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).lengthWorks);
            QUnit.test("MultidimArray - GetValueWorksForUninitializedElement", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).getValueWorksForUninitializedElement);
            QUnit.test("MultidimArray - GetValueByIndexWorksForUninitializedElement", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).getValueByIndexWorksForUninitializedElement);
            QUnit.test("MultidimArray - SettingValueByIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).settingValueByIndexWorks);
            QUnit.test("MultidimArray - SetValueWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).setValueWorks);
            QUnit.test("MultidimArray - GetValueWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).getValueWorks);
            QUnit.test("MultidimArray - GettingValueByIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).gettingValueByIndexWorks);
            QUnit.test("MultidimArray - RankWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).rankWorks);
            QUnit.test("MultidimArray - GetValueWithIndexOutOfRangeThrowsAnException", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).getValueWithIndexOutOfRangeThrowsAnException);
            QUnit.test("MultidimArray - SetValueWithIndexOutOfRangeThrowsAnException", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests).setValueWithIndexOutOfRangeThrowsAnException);
            QUnit.module("Comparer");
            QUnit.test("TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).typePropertiesAreCorrect);
            QUnit.test("DefaultComparerCanOrderNumbers", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).defaultComparerCanOrderNumbers);
            QUnit.test("DefaultComparerCanOrderNullValues", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).defaultComparerCanOrderNullValues);
            QUnit.test("DefaultComparerUsesCompareMethodIfClassImplementsIComparable", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).defaultComparerUsesCompareMethodIfClassImplementsIComparable);
            QUnit.test("CreateWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests).createWorks);
            QUnit.module("Date and time");
            QUnit.test("DateTimeFormatInfo - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).typePropertiesAreCorrect);
            QUnit.test("DateTimeFormatInfo - GetFormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).getFormatWorks);
            QUnit.test("DateTimeFormatInfo - InvariantWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests).invariantWorks);
            QUnit.test("DateTime - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).typePropertiesAreCorrect);
            QUnit.test("DateTime - DefaultConstructorReturnsTodaysDate", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).defaultConstructorReturnsTodaysDate);
            QUnit.test("DateTime - CreatingInstanceReturnsTodaysDate", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).creatingInstanceReturnsTodaysDate);
            QUnit.test("DateTime - MillisecondSinceEpochConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).millisecondSinceEpochConstructorWorks);
            QUnit.test("DateTime - StringConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).stringConstructorWorks);
            QUnit.test("DateTime - YMDConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).yMDConstructorWorks);
            QUnit.test("DateTime - YMDHConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).yMDHConstructorWorks);
            QUnit.test("DateTime - YMDHNConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).yMDHNConstructorWorks);
            QUnit.test("DateTime - YMDHNSConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).yMDHNSConstructorWorks);
            QUnit.test("DateTime - YMDHNSUConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).yMDHNSUConstructorWorks);
            QUnit.test("DateTime - NowWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).nowWorks);
            QUnit.test("DateTime - UTCNowWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).uTCNowWorks);
            QUnit.test("DateTime - ToUniversalWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).toUniversalWorks);
            QUnit.test("DateTime - ToLocalWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).toLocalWorks);
            QUnit.test("DateTime - TodayWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).todayWorks);
            QUnit.test("DateTime - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).formatWorks);
            QUnit.test("DateTime - LocaleFormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).localeFormatWorks);
            QUnit.test("DateTime - GetFullYearWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getFullYearWorks);
            QUnit.test("DateTime - GetMonthWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getMonthWorks);
            QUnit.test("DateTime - GetDateWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getDateWorks);
            QUnit.test("DateTime - GetHoursWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getHoursWorks);
            QUnit.test("DateTime - GetMinutesWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getMinutesWorks);
            QUnit.test("DateTime - GetSecondsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getSecondsWorks);
            QUnit.test("DateTime - GetMillisecondsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getMillisecondsWorks);
            QUnit.test("DateTime - GetDayWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getDayWorks);
            QUnit.test("DateTime - GetTimeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getTimeWorks);
            QUnit.test("DateTime - ValueOfWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).valueOfWorks);
            QUnit.test("DateTime - GetTimezoneOffsetWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getTimezoneOffsetWorks);
            QUnit.test("DateTime - GetUTCFullYearWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getUTCFullYearWorks);
            QUnit.test("DateTime - GetUtcMonthWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getUtcMonthWorks);
            QUnit.test("DateTime - GetUTCDateWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getUTCDateWorks);
            QUnit.test("DateTime - GetUTCHoursWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getUTCHoursWorks);
            QUnit.test("DateTime - GetUTCMinutesWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getUTCMinutesWorks);
            QUnit.test("DateTime - GetUTCSecondsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getUTCSecondsWorks);
            QUnit.test("DateTime - GetUTCMillisecondsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getUTCMillisecondsWorks);
            QUnit.test("DateTime - GetUTCDayWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getUTCDayWorks);
            QUnit.test("DateTime - ParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).parseWorks);
            QUnit.test("DateTime - ParseExactWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).parseExactWorks);
            QUnit.test("DateTime - ParseExactWithCultureWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).parseExactWithCultureWorks);
            QUnit.test("DateTime - ParseExactUTCWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).parseExactUTCWorks);
            QUnit.test("DateTime - ParseExactUTCWithCultureWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).parseExactUTCWithCultureWorks);
            QUnit.test("DateTime - ToDateStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).toDateStringWorks);
            QUnit.test("DateTime - ToTimeStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).toTimeStringWorks);
            QUnit.test("DateTime - ToUTCStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).toUTCStringWorks);
            QUnit.test("DateTime - ToLocaleDateStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).toLocaleDateStringWorks);
            QUnit.test("DateTime - ToLocaleTimeStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).toLocaleTimeStringWorks);
            QUnit.test("DateTime - SubtractingDatesWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).subtractingDatesWorks);
            QUnit.test("DateTime - SubtractMethodReturningTimeSpanWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).subtractMethodReturningTimeSpanWorks);
            QUnit.test("DateTime - DateEqualityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).dateEqualityWorks);
            QUnit.test("DateTime - DateInequalityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).dateInequalityWorks);
            QUnit.test("DateTime - DateLessThanWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).dateLessThanWorks);
            QUnit.test("DateTime - DateLessEqualWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).dateLessEqualWorks);
            QUnit.test("DateTime - DateGreaterThanWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).dateGreaterThanWorks);
            QUnit.test("DateTime - DateGreaterEqualWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).dateGreaterEqualWorks);
            QUnit.test("DateTime - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).getHashCodeWorks);
            QUnit.test("DateTime - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).equalsWorks);
            QUnit.test("DateTime - DateTimeEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).dateTimeEqualsWorks);
            QUnit.test("DateTime - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).compareToWorks);
            QUnit.test("DateTime - DateTimes", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests).dateTimes);
            QUnit.test("TimeSpan - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).typePropertiesAreCorrect);
            QUnit.test("TimeSpan - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).defaultConstructorWorks);
            QUnit.test("TimeSpan - DefaultValueWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).defaultValueWorks);
            QUnit.test("TimeSpan - ZeroWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).zeroWorks);
            QUnit.test("TimeSpan - CreatingInstanceReturnsTimeSpanWithZeroValue", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).creatingInstanceReturnsTimeSpanWithZeroValue);
            QUnit.test("TimeSpan - ParameterConstructorsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).parameterConstructorsWorks);
            QUnit.test("TimeSpan - FactoryMethodsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).factoryMethodsWork);
            QUnit.test("TimeSpan - PropertiesWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).propertiesWork);
            QUnit.test("TimeSpan - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).compareToWorks);
            QUnit.test("TimeSpan - CompareWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).compareWorks);
            QUnit.test("TimeSpan - StaticEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).staticEqualsWorks);
            QUnit.test("TimeSpan - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).equalsWorks);
            QUnit.test("TimeSpan - ToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).toStringWorks);
            QUnit.test("TimeSpan - AddWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).addWorks);
            QUnit.test("TimeSpan - SubtractWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).subtractWorks);
            QUnit.test("TimeSpan - DurationWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).durationWorks);
            QUnit.test("TimeSpan - NegateWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).negateWorks);
            QUnit.test("TimeSpan - ComparisonOperatorsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).comparisonOperatorsWork);
            QUnit.test("TimeSpan - AdditionOperatorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).additionOperatorWorks);
            QUnit.test("TimeSpan - SubtractionOperatorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).subtractionOperatorWorks);
            QUnit.test("TimeSpan - UnaryPlusWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).unaryPlusWorks);
            QUnit.test("TimeSpan - UnaryMinusWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests).unaryMinusWorks);
            QUnit.module("Decimal Math");
            QUnit.test("TestSubtractOperator", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testSubtractOperator);
            QUnit.test("TestRemainderOperator", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testRemainderOperator);
            QUnit.test("TestMultiplyOperator", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testMultiplyOperator);
            QUnit.test("TestDivideOperator", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testDivideOperator);
            QUnit.test("TestAddOperator", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testAddOperator);
            QUnit.test("TestAddMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testAddMethod);
            QUnit.test("TestDivideMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testDivideMethod);
            QUnit.test("TestMultiplyMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testMultiplyMethod);
            QUnit.test("TestRemainderMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testRemainderMethod);
            QUnit.test("TestSubtractMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testSubtractMethod);
            QUnit.test("TestCeilingMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testCeilingMethod);
            QUnit.test("TestFloorMethod", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests).testFloorMethod);
            QUnit.module("Enum");
            QUnit.test("Enum - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).typePropertiesAreCorrect);
            QUnit.test("Enum - FirstValueOfEnumIsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).firstValueOfEnumIsZero);
            QUnit.test("Enum - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).getHashCodeWorks);
            QUnit.test("Enum - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests).equalsWorks);
            QUnit.module("EqualityComparer");
            QUnit.test("TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).typePropertiesAreCorrect);
            QUnit.test("DefaultComparerCanGetHashCodeOfNumber", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).defaultComparerCanGetHashCodeOfNumber);
            QUnit.test("DefaultComparerReturnsZeroAsHashCodeForNullAndUndefined", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).defaultComparerReturnsZeroAsHashCodeForNullAndUndefined);
            QUnit.test("DefaultComparerCanDetermineEquality", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).defaultComparerCanDetermineEquality);
            QUnit.test("DefaultComparerInvokesOverriddenGetHashCode", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).defaultComparerInvokesOverriddenGetHashCode);
            QUnit.test("DefaultComparerInvokesOverriddenEquals", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests).defaultComparerInvokesOverriddenEquals);
            QUnit.module("Exceptions");
            QUnit.test("ArgumentException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).typePropertiesAreCorrect);
            QUnit.test("ArgumentException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).defaultConstructorWorks);
            QUnit.test("ArgumentException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).constructorWithMessageWorks);
            QUnit.test("ArgumentException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("ArgumentException - ConstructorWithMessageAndParamNameWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).constructorWithMessageAndParamNameWorks);
            QUnit.test("ArgumentException - ConstructorWithMessageAndParamNameAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests).constructorWithMessageAndParamNameAndInnerExceptionWorks);
            QUnit.test("ArgumentNullException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).typePropertiesAreCorrect);
            QUnit.test("ArgumentNullException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).defaultConstructorWorks);
            QUnit.test("ArgumentNullException - ConstructorWithParamNameWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).constructorWithParamNameWorks);
            QUnit.test("ArgumentNullException - ConstructorWithParamNameAndMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).constructorWithParamNameAndMessageWorks);
            QUnit.test("ArgumentNullException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("ArgumentOutOfRangeException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).typePropertiesAreCorrect);
            QUnit.test("ArgumentOutOfRangeException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).defaultConstructorWorks);
            QUnit.test("ArgumentOutOfRangeException - ConstructorWithParamNameWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).constructorWithParamNameWorks);
            QUnit.test("ArgumentOutOfRangeException - ConstructorWithParamNameAndMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).constructorWithParamNameAndMessageWorks);
            QUnit.test("ArgumentOutOfRangeException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("ArgumentOutOfRangeException - ConstructorWithParamNameAndActualValueAndMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).constructorWithParamNameAndActualValueAndMessageWorks);
            QUnit.test("ArgumentOutOfRangeException - RangeErrorIsConvertedToArgumentOutOfRangeException", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests).rangeErrorIsConvertedToArgumentOutOfRangeException);
            QUnit.test("ArithmeticException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).typePropertiesAreCorrect);
            QUnit.test("ArithmeticException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).defaultConstructorWorks);
            QUnit.test("ArithmeticException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).constructorWithMessageWorks);
            QUnit.test("ArithmeticException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("DivideByZeroException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).typePropertiesAreCorrect);
            QUnit.test("DivideByZeroException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).defaultConstructorWorks);
            QUnit.test("DivideByZeroException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).constructorWithMessageWorks);
            QUnit.test("DivideByZeroException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("Exception - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).typePropertiesAreCorrect);
            QUnit.test("Exception - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).defaultConstructorWorks);
            QUnit.test("Exception - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).constructorWithMessageWorks);
            QUnit.test("Exception - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("Exception - MessagePropertyCanBeOverridden", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).messagePropertyCanBeOverridden);
            QUnit.test("Exception - InnerExceptionPropertyCanBeOverridden", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests).innerExceptionPropertyCanBeOverridden);
            QUnit.test("FormatException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).typePropertiesAreCorrect);
            QUnit.test("FormatException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).defaultConstructorWorks);
            QUnit.test("FormatException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).constructorWithMessageWorks);
            QUnit.test("FormatException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("InvalidCastException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).typePropertiesAreCorrect);
            QUnit.test("InvalidCastException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).defaultConstructorWorks);
            QUnit.test("InvalidCastException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).constructorWithMessageWorks);
            QUnit.test("InvalidCastException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("InvalidOperationException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).typePropertiesAreCorrect);
            QUnit.test("InvalidOperationException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).defaultConstructorWorks);
            QUnit.test("InvalidOperationException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).constructorWithMessageWorks);
            QUnit.test("InvalidOperationException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("KeyNotFoundException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).typePropertiesAreCorrect);
            QUnit.test("KeyNotFoundException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).defaultConstructorWorks);
            QUnit.test("KeyNotFoundException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).constructorWithMessageWorks);
            QUnit.test("KeyNotFoundException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("NotImplementedException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).typePropertiesAreCorrect);
            QUnit.test("NotImplementedException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).defaultConstructorWorks);
            QUnit.test("NotImplementedException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).constructorWithMessageWorks);
            QUnit.test("NotImplementedException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("NotSupportedException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).typePropertiesAreCorrect);
            QUnit.test("NotSupportedException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).defaultConstructorWorks);
            QUnit.test("NotSupportedException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).constructorWithMessageWorks);
            QUnit.test("NotSupportedException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("NullReferenceException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).typePropertiesAreCorrect);
            QUnit.test("NullReferenceException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).defaultConstructorWorks);
            QUnit.test("NullReferenceException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).constructorWithMessageWorks);
            QUnit.test("NullReferenceException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("NullReferenceException - AccessingAFieldOnANullObjectCausesANullReferenceException", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests).accessingAFieldOnANullObjectCausesANullReferenceException);
            QUnit.test("OverflowException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).typePropertiesAreCorrect);
            QUnit.test("OverflowException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).defaultConstructorWorks);
            QUnit.test("OverflowException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).constructorWithMessageWorks);
            QUnit.test("OverflowException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests).constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("RankException - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).typePropertiesAreCorrect);
            QUnit.test("RankException - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).defaultConstructorWorks);
            QUnit.test("RankException - ConstructorWithMessageWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests).constructorWithMessageWorks);
            QUnit.test("Try/Catch/Finally - ThrowingAndCatchingExceptionsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).throwingAndCatchingExceptionsWorks);
            QUnit.test("Try/Catch/Finally - ExceptionOfWrongTypeIsNotCaught", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).exceptionOfWrongTypeIsNotCaught);
            QUnit.test("Try/Catch/Finally - CanCatchExceptionAsBaseType", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests).canCatchExceptionAsBaseType);
            QUnit.module("Issues");
            QUnit.test("#381 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge381).testUseCase);
            QUnit.test("#472 - Test", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge472).test);
            QUnit.test("#479 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge479).testUseCase);
            QUnit.test("#485 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge485).testUseCase);
            QUnit.test("#495 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge495).testUseCase);
            QUnit.test("#501 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge501).testUseCase);
            QUnit.test("#502 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge502).testUseCase);
            QUnit.test("#503 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge503).testUseCase);
            QUnit.test("#514 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge514).testUseCase);
            QUnit.test("#514 - TestRelated", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge514).testRelated);
            QUnit.test("#520 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge520).testUseCase);
            QUnit.test("#522 - TestUseCase1", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge522).testUseCase1);
            QUnit.test("#522 - TestUseCase2", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge522).testUseCase2);
            QUnit.test("#532 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge532).testUseCase);
            QUnit.test("#538 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge538).testUseCase);
            QUnit.test("#544 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge544).testUseCase);
            QUnit.test("#544 - TestRelated", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge544).testRelated);
            QUnit.test("#546 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge546).testUseCase);
            QUnit.test("#546 - TestRelated", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge546).testRelated);
            QUnit.test("#548 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge548).testUseCase);
            QUnit.test("#549 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge549).testUseCase);
            QUnit.test("#550 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge550).testUseCase);
            QUnit.test("#554 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge554).testUseCase);
            QUnit.test("#555 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge555).testUseCase);
            QUnit.test("#558 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge558).testUseCase);
            QUnit.test("#559 - TestUseCase1", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge559).testUseCase1);
            QUnit.test("#559 - TestUseCase2", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge559).testUseCase2);
            QUnit.test("#559 - TestUseCase3", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge559).testUseCase3);
            QUnit.test("#563 - TesForeach", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge563).tesForeach);
            QUnit.test("#563 - TesFor", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge563).tesFor);
            QUnit.test("#565 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge565).testUseCase);
            QUnit.test("#566 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge566).testUseCase);
            QUnit.test("#572 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge572).testUseCase);
            QUnit.test("#577 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge577).testUseCase);
            QUnit.test("#578 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge578).testUseCase);
            QUnit.test("#580 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge580).testUseCase);
            QUnit.test("#582 - TestAddTimeSpan", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge582).testAddTimeSpan);
            QUnit.test("#582 - TestAddTicks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge582).testAddTicks);
            QUnit.test("#582 - TestTicks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge582).testTicks);
            QUnit.test("#582 - TestSubtractTimeSpan", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge582).testSubtractTimeSpan);
            QUnit.test("#582 - TestTimeOfDay", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge582).testTimeOfDay);
            QUnit.test("#583 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge583).testUseCase);
            QUnit.test("#586 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge586).testUseCase);
            QUnit.test("#592 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge592).testUseCase);
            QUnit.test("#595 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge595).testUseCase);
            QUnit.test("#597 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge597).testUseCase);
            QUnit.test("#606 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge606).testUseCase);
            QUnit.test("#607 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge607).testUseCase);
            QUnit.test("#608 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge608).testUseCase);
            QUnit.test("#615 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge615).testUseCase);
            QUnit.test("#623 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge623).testUseCase);
            QUnit.test("#625 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge625).testUseCase);
            QUnit.test("#634 - TestUseCase1", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge634).testUseCase1);
            QUnit.test("#634 - TestUseCase2", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge634).testUseCase2);
            QUnit.test("#634 - TestUseCaseFor658", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge634).testUseCaseFor658);
            QUnit.test("#635 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge635).testUseCase);
            QUnit.test("#647 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge647).testUseCase);
            QUnit.test("#648 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge648).testUseCase);
            QUnit.test("#652 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge652).testUseCase);
            QUnit.test("#655 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge655).testUseCase);
            QUnit.test("#661 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge661).testUseCase);
            QUnit.test("#664 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge664).testUseCase);
            QUnit.test("#666 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge666).testUseCase);
            QUnit.test("#671 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge671).testUseCase);
            QUnit.test("#674 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge674).testUseCase);
            QUnit.test("#675 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge675).testUseCase);
            QUnit.test("#687 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge687).testUseCase);
            QUnit.test("#689 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge689).testUseCase);
            QUnit.test("#691 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge691).testUseCase);
            QUnit.test("#693 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge693).testUseCase);
            QUnit.test("#694 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge694).testUseCase);
            QUnit.test("#696 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge696).testUseCase);
            QUnit.test("#699 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge699).testUseCase);
            QUnit.test("#708 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge708).testUseCase);
            QUnit.test("#721 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge721).testUseCase);
            QUnit.test("#722 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge722).testUseCase);
            QUnit.test("#726 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge726).testUseCase);
            QUnit.test("# 732- TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge732).testUseCase);
            QUnit.test("#733 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge733).testUseCase);
            QUnit.test("#751 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge751).testUseCase);
            QUnit.test("#758 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge758).testUseCase);
            QUnit.test("#760 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge760).testUseCase);
            QUnit.test("#762 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge762).testUseCase);
            QUnit.test("#786 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge786).testUseCase);
            QUnit.test("#788 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge788).testUseCase);
            QUnit.test("#789 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge789).testUseCase);
            QUnit.test("#793 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge793).testUseCase);
            QUnit.test("#795 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge795).testUseCase);
            QUnit.test("#795 - TestRelated", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge795).testRelated);
            QUnit.test("#796 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge796).testUseCase);
            QUnit.test("#537 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge537).testUseCase);
            QUnit.test("#588 - TestUseCase2", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge588C).testUseCase2);
            QUnit.test("#603 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge603).testUseCase);
            QUnit.test("#603 - TestRelated", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge603).testRelated);
            QUnit.test("#660 - TestUseCase", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge660).testUseCase);
            QUnit.test("#169", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n169);
            QUnit.test("#240", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n240);
            QUnit.test("#264", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n264);
            QUnit.test("#266", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n266);
            QUnit.test("#272", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n272);
            QUnit.test("#273", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n273);
            QUnit.test("#277", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n277);
            QUnit.test("#294", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n294);
            QUnit.test("#304", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n304);
            QUnit.test("#305", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n305);
            QUnit.test("#306", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n306);
            QUnit.test("#329", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n329);
            QUnit.test("#335", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n335);
            QUnit.test("#336", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n336);
            QUnit.test("#337", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n337);
            QUnit.test("#338", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n338);
            QUnit.test("#339", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n339);
            QUnit.test("#340", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n340);
            QUnit.test("#341", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n341);
            QUnit.test("#342", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n342);
            QUnit.test("#349", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n349);
            QUnit.test("#377", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n377);
            QUnit.test("#383", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n383);
            QUnit.test("#393", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n393);
            QUnit.test("#395", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n395);
            QUnit.test("#406", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n406);
            QUnit.test("#407", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n407);
            QUnit.test("N409", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n409);
            QUnit.test("N410", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n410);
            QUnit.test("N418", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n418);
            QUnit.test("N422", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n422);
            QUnit.test("N428", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n428);
            QUnit.test("N435", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n435);
            QUnit.test("N436", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n436);
            QUnit.test("N438", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n438);
            QUnit.test("N439", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n439);
            QUnit.test("N442", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n442);
            QUnit.test("N460", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n460);
            QUnit.test("N467", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n467);
            QUnit.test("N469", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n469);
            QUnit.test("N470", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n470);
            QUnit.test("#499", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesTestBridgeIssues).n499);
            QUnit.test("#588 - TestUseCase1", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestBridgeIssuesBridge588).testUseCase1);
            QUnit.module("LINQ");
            QUnit.test("Aggregate - Test", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqAggregateOperators).test);
            QUnit.test("Aggregate - Bridge315", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqAggregateOperators).bridge315);
            QUnit.test("Conversion - Test", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqConversionOperators).test);
            QUnit.test("Element - Test", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqElementOperators).test);
            QUnit.test("Generation - Test", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqGenerationOperators).test);
            QUnit.test("Grouping - Test", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqGroupingOperators).test);
            QUnit.test("Grouping - TestComplexGrouping", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqGroupingOperators).testComplexGrouping);
            QUnit.test("Grouping - TestAnagrams", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqGroupingOperators).testAnagrams);
            QUnit.test("Join - Test", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqJoinOperators).test);
            QUnit.test("Misc - Test", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqMiscellaneousOperators).test);
            QUnit.test("Ordering - Test", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqOrderingOperators).test);
            QUnit.test("Partitioning - Test", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqPartitioningOperators).test);
            QUnit.test("Projection - Test", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqProjectionOperators).test);
            QUnit.test("Quantifiers - Test", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqQuantifiers).test);
            QUnit.test("Query - Test", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqQueryExecution).test);
            QUnit.test("Restriction- Test", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqRestrictionOperators).test);
            QUnit.test("Set - Test", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestLinqTestLinqSetOperators).test);
            QUnit.module("Math");
            QUnit.test("Math - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).constantsWork);
            QUnit.test("Math - AbsOfDoubleWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).absOfDoubleWorks);
            QUnit.test("Math - AbsOfIntWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).absOfIntWorks);
            QUnit.test("Math - AbsOfLongWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).absOfLongWorks);
            QUnit.test("Math - AbsOfSbyteWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).absOfSbyteWorks);
            QUnit.test("Math - AbsOfShortWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).absOfShortWorks);
            QUnit.test("Math - AbsOfFloatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).absOfFloatWorks);
            QUnit.test("Math - AbsOfDecimalWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).absOfDecimalWorks);
            QUnit.test("Math - AcosWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).acosWorks);
            QUnit.test("Math - AsinWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).asinWorks);
            QUnit.test("Math - AtanWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).atanWorks);
            QUnit.test("Math - Atan2Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).atan2Works);
            QUnit.test("Math - CosWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).cosWorks);
            QUnit.test("Math - DivRemWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).divRemWorks);
            QUnit.test("Math - ExpWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).expWorks);
            QUnit.test("Math - FloorOfDoubleWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).floorOfDoubleWorks);
            QUnit.test("Math - FloorOfDecimalWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).floorOfDecimalWorks);
            QUnit.test("Math - LogWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).logWorks);
            QUnit.test("Math - MaxOfByteWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).maxOfByteWorks);
            QUnit.test("Math - MaxOfDecimalWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).maxOfDecimalWorks);
            QUnit.test("Math - MaxOfDoubleWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).maxOfDoubleWorks);
            QUnit.test("Math - MaxOfShortWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).maxOfShortWorks);
            QUnit.test("Math - MaxOfIntWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).maxOfIntWorks);
            QUnit.test("Math - MaxOfLongWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).maxOfLongWorks);
            QUnit.test("Math - MaxOfSByteWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).maxOfSByteWorks);
            QUnit.test("Math - MaxOfFloatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).maxOfFloatWorks);
            QUnit.test("Math - MaxOfUShortWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).maxOfUShortWorks);
            QUnit.test("Math - MaxOfUIntWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).maxOfUIntWorks);
            QUnit.test("Math - MaxOfULongWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).maxOfULongWorks);
            QUnit.test("Math - MinOfByteWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).minOfByteWorks);
            QUnit.test("Math - MinOfDecimalWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).minOfDecimalWorks);
            QUnit.test("Math - MinOfDoubleWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).minOfDoubleWorks);
            QUnit.test("Math - MinOfShortWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).minOfShortWorks);
            QUnit.test("Math - MinOfIntWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).minOfIntWorks);
            QUnit.test("Math - MinOfLongWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).minOfLongWorks);
            QUnit.test("Math - MinOfSByteWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).minOfSByteWorks);
            QUnit.test("Math - MinOfFloatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).minOfFloatWorks);
            QUnit.test("Math - MinOfUShortWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).minOfUShortWorks);
            QUnit.test("Math - MinOfUIntWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).minOfUIntWorks);
            QUnit.test("Math - MinOfULongWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).minOfULongWorks);
            QUnit.test("Math - PowWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).powWorks);
            QUnit.test("Math - RandomWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).randomWorks);
            QUnit.test("Math - RoundOfDoubleWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).roundOfDoubleWorks);
            QUnit.test("Math - RoundDecimalWithModeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).roundDecimalWithModeWorks);
            QUnit.test("Math - RoundDecimalWithPrecisionAndModeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).roundDecimalWithPrecisionAndModeWorks);
            QUnit.test("Math - RoundDoubleWithModeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).roundDoubleWithModeWorks);
            QUnit.test("Math - RoundDoubleWithPrecisionAndModeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).roundDoubleWithPrecisionAndModeWorks);
            QUnit.test("Math - JsRoundWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).jsRoundWorks);
            QUnit.test("Math - IEEERemainderWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).iEEERemainderWorks);
            QUnit.test("Math - SinWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).sinWorks);
            QUnit.test("Math - SqrtWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).sqrtWorks);
            QUnit.test("Math - TanWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests).tanWorks);
            QUnit.module("Nullable");
            QUnit.test("Nullable - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).typePropertiesAreCorrect);
            QUnit.test("Nullable - ConvertingToNullableWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).convertingToNullableWorks);
            QUnit.test("Nullable - HasValueWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).hasValueWorks);
            QUnit.test("Nullable - BoxingWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).boxingWorks);
            QUnit.test("Nullable - UnboxingWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).unboxingWorks);
            QUnit.test("Nullable - ValueWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).valueWorks);
            QUnit.test("Nullable - UnboxingValueOfWrongTypeThrowsAnException", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).unboxingValueOfWrongTypeThrowsAnException);
            QUnit.test("Nullable - GetValueOrDefaultWithArgWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).getValueOrDefaultWithArgWorks);
            QUnit.test("Nullable - LiftedEqualityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedEqualityWorks);
            QUnit.test("Nullable - LiftedInequalityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedInequalityWorks);
            QUnit.test("Nullable - LiftedLessThanWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedLessThanWorks);
            QUnit.test("Nullable - LiftedGreaterThanWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedGreaterThanWorks);
            QUnit.test("Nullable - LiftedLessThanOrEqualWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedLessThanOrEqualWorks);
            QUnit.test("Nullable - LiftedGreaterThanOrEqualWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedGreaterThanOrEqualWorks);
            QUnit.test("Nullable - LiftedSubtractionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedSubtractionWorks);
            QUnit.test("Nullable - LiftedAdditionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedAdditionWorks);
            QUnit.test("Nullable - LiftedModWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedModWorks);
            QUnit.test("Nullable - LiftedFloatingPointDivisionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedFloatingPointDivisionWorks);
            QUnit.test("Nullable - LiftedIntegerDivisionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedIntegerDivisionWorks);
            QUnit.test("Nullable - LiftedMultiplicationWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedMultiplicationWorks);
            QUnit.test("Nullable - LiftedBitwiseAndWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedBitwiseAndWorks);
            QUnit.test("Nullable - LiftedBitwiseOrWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedBitwiseOrWorks);
            QUnit.test("Nullable - LiftedBitwiseXorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedBitwiseXorWorks);
            QUnit.test("Nullable - LiftedLeftShiftWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedLeftShiftWorks);
            QUnit.test("Nullable - LiftedSignedRightShiftWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedSignedRightShiftWorks);
            QUnit.test("Nullable - LiftedUnsignedRightShiftWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedUnsignedRightShiftWorks);
            QUnit.test("LiftedBooleanAndWorks #314", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedBooleanAndWorks);
            QUnit.test("LiftedBooleanOrWorks #314", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedBooleanOrWorks);
            QUnit.test("Nullable - LiftedBooleanNotWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedBooleanNotWorks);
            QUnit.test("Nullable - LiftedNegationWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedNegationWorks);
            QUnit.test("Nullable - LiftedUnaryPlusWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedUnaryPlusWorks);
            QUnit.test("Nullable - LiftedOnesComplementWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).liftedOnesComplementWorks);
            QUnit.test("CoalesceWorks #314", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests).coalesceWorks);
            QUnit.module("NumberFormatInfo");
            QUnit.test("TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).typePropertiesAreCorrect);
            QUnit.test("GetFormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).getFormatWorks);
            QUnit.test("InvariantWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests).invariantWorks);
            QUnit.module("Property accessor");
            QUnit.test("AccessorsCanBeInvokedInstance", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).accessorsCanBeInvokedInstance);
            QUnit.test("AccessorsCanBeInvokedStatic", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).accessorsCanBeInvokedStatic);
            QUnit.test("AccessorsCanBeInvokedGeneric", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).accessorsCanBeInvokedGeneric);
            QUnit.test("AccessorsCanBeInvokedGenericStatic", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).accessorsCanBeInvokedGenericStatic);
            QUnit.test("BaseAccessorsCanBeInvoked", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).baseAccessorsCanBeInvoked);
            QUnit.test("BaseAccessorsCanBeInvokedGeneric", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests).baseAccessorsCanBeInvokedGeneric);
            QUnit.module("Regex");
            QUnit.test("TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).typePropertiesAreCorrect);
            QUnit.test("StringOnlyConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).stringOnlyConstructorWorks);
            QUnit.test("ConstructorWithFlagsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).constructorWithFlagsWorks);
            QUnit.test("GlobalFlagWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).globalFlagWorks);
            QUnit.test("IgnoreCaseFlagWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).ignoreCaseFlagWorks);
            QUnit.test("MultilineFlagWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).multilineFlagWorks);
            QUnit.test("PatternPropertyWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).patternPropertyWorks);
            QUnit.test("SourcePropertyWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).sourcePropertyWorks);
            QUnit.test("ExecWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).execWorks);
            QUnit.test("LastIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).lastIndexWorks);
            QUnit.test("TestWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).testWorks);
            QUnit.test("EscapeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests).escapeWorks);
            QUnit.module("Simple types");
            QUnit.test("Boolean - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).typePropertiesAreCorrect);
            QUnit.test("Boolean - DefaultValueIsFalse", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).defaultValueIsFalse);
            QUnit.test("Boolean - CreatingInstanceReturnsFalse", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).creatingInstanceReturnsFalse);
            QUnit.test("Boolean - DefaultConstructorReturnsFalse", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).defaultConstructorReturnsFalse);
            QUnit.test("Boolean - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).getHashCodeWorks);
            QUnit.test("Boolean - ObjectEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).objectEqualsWorks);
            QUnit.test("Boolean - BoolEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests).boolEqualsWorks);
            QUnit.test("Byte - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).typePropertiesAreCorrect);
            QUnit.test("Byte - CastsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).castsWork);
            QUnit.test("Byte - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).defaultValueIs0);
            QUnit.test("Byte - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).defaultConstructorReturnsZero);
            QUnit.test("Byte - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).constantsWork);
            QUnit.test("Byte - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).formatWorks);
            QUnit.test("Byte - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).iFormattableToStringWorks);
            QUnit.test("Byte - TryParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).tryParseWorks);
            QUnit.test("Byte - ParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).parseWorks);
            QUnit.test("Byte - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).toStringWithoutRadixWorks);
            QUnit.test("Byte - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).toStringWithRadixWorks);
            QUnit.test("Byte - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).getHashCodeWorks);
            QUnit.test("Byte - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).equalsWorks);
            QUnit.test("Byte - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).iEquatableEqualsWorks);
            QUnit.test("Byte - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).compareToWorks);
            QUnit.test("Byte - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests).iComparableCompareToWorks);
            QUnit.test("Char - TypePropertiesAreInt32", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).typePropertiesAreInt32);
            QUnit.test("Char - CastsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).castsWork);
            QUnit.test("Char - DefaultValueWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).defaultValueWorks);
            QUnit.test("Char - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).defaultConstructorReturnsZero);
            QUnit.test("Char - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).constantsWork);
            QUnit.test("Char - CharComparisonWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).charComparisonWorks);
            QUnit.test("Char - ParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).parseWorks);
            QUnit.test("Char - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).formatWorks);
            QUnit.test("Char - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).iFormattableToStringWorks);
            QUnit.test("Char - ToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).toStringWorks);
            QUnit.test("Char - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).getHashCodeWorks);
            QUnit.test("Char - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).equalsWorks);
            QUnit.test("Char - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).iEquatableEqualsWorks);
            QUnit.test("Char - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).compareToWorks);
            QUnit.test("Char - IsLowerWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).isLowerWorks);
            QUnit.test("Char - IsUpperWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).isUpperWorks);
            QUnit.test("Char - ToLowerWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).toLowerWorks);
            QUnit.test("Char - ToUpperWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).toUpperWorks);
            QUnit.test("Char - IsDigitWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).isDigitWorks);
            QUnit.test("Char - IsWhiteSpaceWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).isWhiteSpaceWorks);
            QUnit.test("Char - IsDigitWithStringAndIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).isDigitWithStringAndIndexWorks);
            QUnit.test("Char - IsWhiteSpaceWithStringAndIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests).isWhiteSpaceWithStringAndIndexWorks);
            QUnit.test("Decimal - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).typePropertiesAreCorrect);
            QUnit.test("Decimal - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).defaultValueIs0);
            QUnit.test("Decimal - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).constantsWork);
            QUnit.test("Decimal - ConvertingConstructorsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).convertingConstructorsWork);
            QUnit.test("Decimal - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).formatWorks);
            QUnit.test("Decimal - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).iFormattableToStringWorks);
            QUnit.test("Decimal - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).toStringWithoutRadixWorks);
            QUnit.test("Decimal - AddWithStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).addWithStringWorks);
            QUnit.test("Decimal - ConversionsToDecimalWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).conversionsToDecimalWork);
            QUnit.test("Decimal - ConversionsFromDecimalWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).conversionsFromDecimalWork);
            QUnit.test("Decimal - OperatorsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).operatorsWork);
            QUnit.test("Decimal - AddWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).addWorks);
            QUnit.test("Decimal - CeilingWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).ceilingWorks);
            QUnit.test("Decimal - DivideWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).divideWorks);
            QUnit.test("Decimal - FloorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).floorWorks);
            QUnit.test("Decimal - RemainderWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).remainderWorks);
            QUnit.test("Decimal - MultiplyWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).multiplyWorks);
            QUnit.test("Decimal - NegateWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).negateWorks);
            QUnit.test("Decimal - RoundWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).roundWorks);
            QUnit.test("Decimal - RoundWithModeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).roundWithModeWorks);
            QUnit.test("Decimal - SubtractWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).subtractWorks);
            QUnit.test("Decimal - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).getHashCodeWorks);
            QUnit.test("Decimal - ObjectEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).objectEqualsWorks);
            QUnit.test("Decimal - DecimalEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).decimalEqualsWorks);
            QUnit.test("Decimal - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).compareToWorks);
            QUnit.test("Decimal - FullCoalesceWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).fullCoalesceWorks);
            QUnit.test("Decimal - ShortCoalesceWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests).shortCoalesceWorks);
            QUnit.test("Double - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).typePropertiesAreCorrect);
            QUnit.test("Double - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).defaultValueIs0);
            QUnit.test("Double - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).constantsWork);
            QUnit.test("Double - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).defaultConstructorReturnsZero);
            QUnit.test("Double - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).formatWorks);
            QUnit.test("Double - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).iFormattableToStringWorks);
            QUnit.test("Double - ToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).toStringWorks);
            QUnit.test("Double - ToExponentialWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).toExponentialWorks);
            QUnit.test("Double - ToExponentialWithFractionalDigitsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).toExponentialWithFractionalDigitsWorks);
            QUnit.test("Double - ToFixed", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).toFixed);
            QUnit.test("Double - ToFixedWithFractionalDigitsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).toFixedWithFractionalDigitsWorks);
            QUnit.test("Double - ToPrecisionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).toPrecisionWorks);
            QUnit.test("Double - ToPrecisionWithPrecisionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).toPrecisionWithPrecisionWorks);
            QUnit.test("Double - IsPositiveInfinityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).isPositiveInfinityWorks);
            QUnit.test("Double - IsNegativeInfinityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).isNegativeInfinityWorks);
            QUnit.test("Double - IsInfinityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).isInfinityWorks);
            QUnit.test("Double - IsFiniteWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).isFiniteWorks);
            QUnit.test("Double - IsNaNWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).isNaNWorks);
            QUnit.test("Double - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).getHashCodeWorks);
            QUnit.test("Double - ObjectEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).objectEqualsWorks);
            QUnit.test("Double - DoubleEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).doubleEqualsWorks);
            QUnit.test("Double - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests).compareToWorks);
            QUnit.test("Int16 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).typePropertiesAreCorrect);
            QUnit.test("Int16 - CastsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).castsWork);
            QUnit.test("Int16 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).defaultValueIs0);
            QUnit.test("Int16 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).defaultConstructorReturnsZero);
            QUnit.test("Int16 - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).constantsWork);
            QUnit.test("Int16 - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).formatWorks);
            QUnit.test("Int16 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).iFormattableToStringWorks);
            QUnit.test("Int16 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).tryParseWorks);
            QUnit.test("Int16 - ParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).parseWorks);
            QUnit.test("Int16 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).toStringWithoutRadixWorks);
            QUnit.test("Int16 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).toStringWithRadixWorks);
            QUnit.test("Int16 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).getHashCodeWorks);
            QUnit.test("Int16 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).equalsWorks);
            QUnit.test("Int16 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).iEquatableEqualsWorks);
            QUnit.test("Int16 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).compareToWorks);
            QUnit.test("Int16 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests).iComparableCompareToWorks);
            QUnit.test("Int32 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).typePropertiesAreCorrect);
            QUnit.test("Int32 - CastsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).castsWork);
            QUnit.test("Int32 - TypeIsWorksForInt32", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).typeIsWorksForInt32);
            QUnit.test("Int32 - TypeAsWorksForInt32", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).typeAsWorksForInt32);
            QUnit.test("Int32 - UnboxingWorksForInt32", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).unboxingWorksForInt32);
            QUnit.test("Int32 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).defaultValueIs0);
            QUnit.test("Int32 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).defaultConstructorReturnsZero);
            QUnit.test("Int32 - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).constantsWork);
            QUnit.test("Int32 - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).formatWorks);
            QUnit.test("Int32 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).iFormattableToStringWorks);
            QUnit.test("Int32 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).tryParseWorks);
            QUnit.test("Int32 - ParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).parseWorks);
            QUnit.test("Int32 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).toStringWithoutRadixWorks);
            QUnit.test("Int32 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).toStringWithRadixWorks);
            QUnit.test("Int32 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).getHashCodeWorks);
            QUnit.test("Int32 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).equalsWorks);
            QUnit.test("Int32 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).iEquatableEqualsWorks);
            QUnit.test("Int32 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).compareToWorks);
            QUnit.test("Int32 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).iComparableCompareToWorks);
            QUnit.test("Int32 - IntegerDivisionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).integerDivisionWorks);
            QUnit.test("Int32 - IntegerModuloWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).integerModuloWorks);
            QUnit.test("Int32 - IntegerDivisionByZeroThrowsDivideByZeroException", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).integerDivisionByZeroThrowsDivideByZeroException);
            QUnit.test("Int32 - DoublesAreTruncatedWhenConvertedToIntegers", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests).doublesAreTruncatedWhenConvertedToIntegers);
            QUnit.test("Int64 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).typePropertiesAreCorrect);
            QUnit.test("Int64 - CastsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).castsWork);
            QUnit.test("Int64 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).defaultValueIs0);
            QUnit.test("Int64 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).defaultConstructorReturnsZero);
            QUnit.test("Int64 - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).formatWorks);
            QUnit.test("Int64 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).iFormattableToStringWorks);
            QUnit.test("Int64 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).tryParseWorks);
            QUnit.test("Int64 - ParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).parseWorks);
            QUnit.test("Int64 - CastingOfLargeDoublesToInt64Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).castingOfLargeDoublesToInt64Works);
            QUnit.test("Int64 - DivisionOfLargeInt64Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).divisionOfLargeInt64Works);
            QUnit.test("Int64 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).toStringWithoutRadixWorks);
            QUnit.test("Int64 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).toStringWithRadixWorks);
            QUnit.test("Int64 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).getHashCodeWorks);
            QUnit.test("Int64 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).equalsWorks);
            QUnit.test("Int64 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).iEquatableEqualsWorks);
            QUnit.test("Int64 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).compareToWorks);
            QUnit.test("Int64 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests).iComparableCompareToWorks);
            QUnit.test("Object - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).typePropertiesAreCorrect);
            QUnit.test("Object - CanGetHashCodeForObject", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).canGetHashCodeForObject);
            QUnit.test("Object - RepeatedCallsToGetHashCodeReturnsSameValue", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).repeatedCallsToGetHashCodeReturnsSameValue);
            QUnit.test("Object - ObjectIsEqualToItself", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).objectIsEqualToItself);
            QUnit.test("Object - ObjectIsNotEqualToOtherObject", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).objectIsNotEqualToOtherObject);
            QUnit.test("Object - StaticEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).staticEqualsWorks);
            QUnit.test("Object - ReferenceEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).referenceEqualsWorks);
            QUnit.test("Object - ToStringOverride", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests).toStringOverride);
            QUnit.test("SByte - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).typePropertiesAreCorrect);
            QUnit.test("SByte - CastsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).castsWork);
            QUnit.test("SByte - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).defaultValueIs0);
            QUnit.test("SByte - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).defaultConstructorReturnsZero);
            QUnit.test("SByte - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).constantsWork);
            QUnit.test("SByte - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).formatWorks);
            QUnit.test("SByte - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).iFormattableToStringWorks);
            QUnit.test("SByte - TryParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).tryParseWorks);
            QUnit.test("SByte - ParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).parseWorks);
            QUnit.test("SByte - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).toStringWithoutRadixWorks);
            QUnit.test("SByte - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).toStringWithRadixWorks);
            QUnit.test("SByte - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).getHashCodeWorks);
            QUnit.test("SByte - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).equalsWorks);
            QUnit.test("SByte - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).iEquatableEqualsWorks);
            QUnit.test("SByte - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).compareToWorks);
            QUnit.test("SByte - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests).iComparableCompareToWorks);
            QUnit.test("Float - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).typePropertiesAreCorrect);
            QUnit.test("Float - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).defaultValueIs0);
            QUnit.test("Float - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).constantsWork);
            QUnit.test("Float - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).defaultConstructorReturnsZero);
            QUnit.test("Float - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).formatWorks);
            QUnit.test("Float - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).iFormattableToStringWorks);
            QUnit.test("Float - ToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).toStringWorks);
            QUnit.test("Float - ToExponentialWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).toExponentialWorks);
            QUnit.test("Float - ToExponentialWithFractionalDigitsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).toExponentialWithFractionalDigitsWorks);
            QUnit.test("Float - ToFixed", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).toFixed);
            QUnit.test("Float - ToFixedWithFractionalDigitsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).toFixedWithFractionalDigitsWorks);
            QUnit.test("Float - ToPrecisionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).toPrecisionWorks);
            QUnit.test("Float - ToPrecisionWithPrecisionWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).toPrecisionWithPrecisionWorks);
            QUnit.test("Float - IsPositiveInfinityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).isPositiveInfinityWorks);
            QUnit.test("Float - IsNegativeInfinityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).isNegativeInfinityWorks);
            QUnit.test("Float - IsInfinityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).isInfinityWorks);
            QUnit.test("Float - IsFiniteWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).isFiniteWorks);
            QUnit.test("Float - IsNaNWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).isNaNWorks);
            QUnit.test("Float - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).getHashCodeWorks);
            QUnit.test("Float - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).equalsWorks);
            QUnit.test("Float - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests).compareToWorks);
            QUnit.test("Version - TestConstructors", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTestVersion).testConstructors);
            QUnit.test("Version - TestCloneCompare", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTestVersion).testCloneCompare);
            QUnit.test("Version - TestEqualsGetHashCode", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTestVersion).testEqualsGetHashCode);
            QUnit.test("Version - TestToString", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTestVersion).testToString);
            QUnit.test("Version - TestParse", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTestVersion).testParse);
            QUnit.test("Version - TestOperators", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTestVersion).testOperators);
            QUnit.test("Tuple - Tuple1Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).tuple1Works);
            QUnit.test("Tuple - Tuple2Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).tuple2Works);
            QUnit.test("Tuple - Tuple3Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).tuple3Works);
            QUnit.test("Tuple - Tuple4Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).tuple4Works);
            QUnit.test("Tuple - Tuple5Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).tuple5Works);
            QUnit.test("Tuple - Tuple6Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).tuple6Works);
            QUnit.test("Tuple - Tuple7Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).tuple7Works);
            QUnit.test("Tuple - Tuple8Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests).tuple8Works);
            QUnit.test("UInt16 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).typePropertiesAreCorrect);
            QUnit.test("UInt16 - CastsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).castsWork);
            QUnit.test("UInt16 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).defaultValueIs0);
            QUnit.test("UInt16 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).defaultConstructorReturnsZero);
            QUnit.test("UInt16 - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).constantsWork);
            QUnit.test("UInt16 - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).formatWorks);
            QUnit.test("UInt16 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).iFormattableToStringWorks);
            QUnit.test("UInt16 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).tryParseWorks);
            QUnit.test("UInt16 - ParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).parseWorks);
            QUnit.test("UInt16 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).toStringWithoutRadixWorks);
            QUnit.test("UInt16 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).toStringWithRadixWorks);
            QUnit.test("UInt16 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).getHashCodeWorks);
            QUnit.test("UInt16 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).equalsWorks);
            QUnit.test("UInt16 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).iEquatableEqualsWorks);
            QUnit.test("UInt16 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).compareToWorks);
            QUnit.test("UInt16 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests).iComparableCompareToWorks);
            QUnit.test("UInt32 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).typePropertiesAreCorrect);
            QUnit.test("UInt32 - CastsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).castsWork);
            QUnit.test("UInt32 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).defaultValueIs0);
            QUnit.test("UInt32 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).defaultConstructorReturnsZero);
            QUnit.test("UInt32 - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).constantsWork);
            QUnit.test("UInt32 - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).formatWorks);
            QUnit.test("UInt32 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).iFormattableToStringWorks);
            QUnit.test("UInt32 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).tryParseWorks);
            QUnit.test("UInt32 - ParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).parseWorks);
            QUnit.test("UInt32 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).toStringWithoutRadixWorks);
            QUnit.test("UInt32 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).toStringWithRadixWorks);
            QUnit.test("UInt32 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).getHashCodeWorks);
            QUnit.test("UInt32 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).equalsWorks);
            QUnit.test("UInt32 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).iEquatableEqualsWorks);
            QUnit.test("UInt32 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).compareToWorks);
            QUnit.test("UInt32 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests).iComparableCompareToWorks);
            QUnit.test("UInt64 - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).typePropertiesAreCorrect);
            QUnit.test("UInt64 - CastsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).castsWork);
            QUnit.test("UInt64 - DefaultValueIs0", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).defaultValueIs0);
            QUnit.test("UInt64 - DefaultConstructorReturnsZero", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).defaultConstructorReturnsZero);
            QUnit.test("UInt64 - ConstantsWork", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).constantsWork);
            QUnit.test("UInt64 - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).formatWorks);
            QUnit.test("UInt64 - IFormattableToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).iFormattableToStringWorks);
            QUnit.test("UInt64 - CastingOfLargeValuesToUInt64Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).castingOfLargeValuesToUInt64Works);
            QUnit.test("UInt64 - DivisionOfLargeUInt64Works", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).divisionOfLargeUInt64Works);
            QUnit.test("UInt64 - TryParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).tryParseWorks);
            QUnit.test("UInt64 - ParseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).parseWorks);
            QUnit.test("UInt64 - ToStringWithoutRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).toStringWithoutRadixWorks);
            QUnit.test("UInt64 - ToStringWithRadixWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).toStringWithRadixWorks);
            QUnit.test("UInt64 - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).getHashCodeWorks);
            QUnit.test("UInt64 - EqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).equalsWorks);
            QUnit.test("UInt64 - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).iEquatableEqualsWorks);
            QUnit.test("UInt64 - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).compareToWorks);
            QUnit.test("UInt64 - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests).iComparableCompareToWorks);
            QUnit.module("String");
            QUnit.test("String - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).typePropertiesAreCorrect);
            QUnit.test("String - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).defaultConstructorWorks);
            QUnit.test("String - CopyConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).copyConstructorWorks);
            QUnit.test("String - CharAndCountConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).charAndCountConstructorWorks);
            QUnit.test("String - CharArrayConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).charArrayConstructorWorks);
            QUnit.test("String - EmptyFieldWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).emptyFieldWorks);
            QUnit.test("String - LengthPropertyWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).lengthPropertyWorks);
            QUnit.test("String - CharAtWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).charAtWorks);
            QUnit.test("String - CharCodeAtWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).charCodeAtWorks);
            QUnit.test("String - CompareWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).compareWorks);
            QUnit.test("String - CompareWithIgnoreCaseArgWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).compareWithIgnoreCaseArgWorks);
            QUnit.test("String - ConcatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).concatWorks);
            QUnit.test("String - ConcatWithObjectsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).concatWithObjectsWorks);
            QUnit.test("String - EndsWithCharWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).endsWithCharWorks);
            QUnit.test("String - EndsWithStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).endsWithStringWorks);
            QUnit.test("String - StaticEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).staticEqualsWorks);
            QUnit.test("String - FormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).formatWorks);
            QUnit.test("String - FormatWorksWithIFormattable", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).formatWorksWithIFormattable);
            QUnit.test("String - FormatCanUseEscapedBraces", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).formatCanUseEscapedBraces);
            QUnit.test("String - FromCharCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).fromCharCodeWorks);
            QUnit.test("String - IndexOfCharWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).indexOfCharWorks);
            QUnit.test("String - IndexOfStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).indexOfStringWorks);
            QUnit.test("String - IndexOfCharWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).indexOfCharWithStartIndexWorks);
            QUnit.test("String - IndexOfCharWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).indexOfCharWithStartIndexAndCountWorks);
            QUnit.test("String - IndexOfStringWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).indexOfStringWithStartIndexWorks);
            QUnit.test("String - IndexOfStringWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).indexOfStringWithStartIndexAndCountWorks);
            QUnit.test("String - IndexOfAnyWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).indexOfAnyWorks);
            QUnit.test("String - IndexOfAnyWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).indexOfAnyWithStartIndexWorks);
            QUnit.test("String - IndexOfAnyWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).indexOfAnyWithStartIndexAndCountWorks);
            QUnit.test("String - InsertWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).insertWorks);
            QUnit.test("String - IsNullOrEmptyWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).isNullOrEmptyWorks);
            QUnit.test("String - LastIndexOfCharWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).lastIndexOfCharWorks);
            QUnit.test("String - LastIndexOfStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).lastIndexOfStringWorks);
            QUnit.test("String - LastIndexOfCharWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).lastIndexOfCharWithStartIndexWorks);
            QUnit.test("String - LastIndexOfStringWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).lastIndexOfStringWithStartIndexWorks);
            QUnit.test("String - LastIndexOfCharWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).lastIndexOfCharWithStartIndexAndCountWorks);
            QUnit.test("String - LastIndexOfStringWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).lastIndexOfStringWithStartIndexAndCountWorks);
            QUnit.test("String - LastIndexOfAnyWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).lastIndexOfAnyWorks);
            QUnit.test("String - LastIndexOfAnyWithStartIndexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).lastIndexOfAnyWithStartIndexWorks);
            QUnit.test("String - LastIndexOfAnyWithStartIndexAndCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).lastIndexOfAnyWithStartIndexAndCountWorks);
            QUnit.test("String - LocaleCompareWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).localeCompareWorks);
            QUnit.test("String - MatchWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).matchWorks);
            QUnit.test("String - PadLeftWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).padLeftWorks);
            QUnit.test("String - PadLeftWithCharWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).padLeftWithCharWorks);
            QUnit.test("String - PadRightWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).padRightWorks);
            QUnit.test("String - PadRightWithCharWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).padRightWithCharWorks);
            QUnit.test("String - RemoveWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).removeWorks);
            QUnit.test("String - RemoveWithCountWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).removeWithCountWorks);
            QUnit.test("String - ReplaceWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).replaceWorks);
            QUnit.test("String - ReplaceCharWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).replaceCharWorks);
            QUnit.test("String - ReplaceRegexWithReplaceTextWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).replaceRegexWithReplaceTextWorks);
            QUnit.test("String - ReplaceRegexWithReplaceCallbackWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).replaceRegexWithReplaceCallbackWorks);
            QUnit.test("String - SearchWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).searchWorks);
            QUnit.test("String - SliceWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).sliceWorks);
            QUnit.test("String - SplitWithStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).splitWithStringWorks);
            QUnit.test("String - SplitWithCharWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).splitWithCharWorks);
            QUnit.test("String - JsSplitWithStringAndLimitWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).jsSplitWithStringAndLimitWorks);
            QUnit.test("String - JsSplitWithCharAndLimitWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).jsSplitWithCharAndLimitWorks);
            QUnit.test("String - SplitWithCharsAndLimitWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).splitWithCharsAndLimitWorks);
            QUnit.test("String - SplitWithCharsAndStringSplitOptionsAndLimitWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).splitWithCharsAndStringSplitOptionsAndLimitWorks);
            QUnit.test("String - SplitWithRegexWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).splitWithRegexWorks);
            QUnit.test("String - SomeNetSplitTests", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).someNetSplitTests);
            QUnit.test("String - SplitWithCharsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).splitWithCharsWorks);
            QUnit.test("String - SplitWithStringsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).splitWithStringsWorks);
            QUnit.test("String - SplitWithStringsAndLimitWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).splitWithStringsAndLimitWorks);
            QUnit.test("String - StartsWithCharWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).startsWithCharWorks);
            QUnit.test("String - StartsWithStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).startsWithStringWorks);
            QUnit.test("String - SubstrWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).substrWorks);
            QUnit.test("String - SubstringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).substringWorks);
            QUnit.test("String - JsSubstringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).jsSubstringWorks);
            QUnit.test("String - ToLowerCaseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).toLowerCaseWorks);
            QUnit.test("String - ToUpperCaseWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).toUpperCaseWorks);
            QUnit.test("String - ToLowerWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).toLowerWorks);
            QUnit.test("String - ToUpperWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).toUpperWorks);
            QUnit.test("String - TrimWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).trimWorks);
            QUnit.test("String - TrimCharsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).trimCharsWorks);
            QUnit.test("String - TrimStartCharsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).trimStartCharsWorks);
            QUnit.test("String - TrimEndCharsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).trimEndCharsWorks);
            QUnit.test("String - TrimStartWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).trimStartWorks);
            QUnit.test("String - TrimEndWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).trimEndWorks);
            QUnit.test("String - StringEqualityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).stringEqualityWorks);
            QUnit.test("String - StringInequalityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).stringInequalityWorks);
            QUnit.test("String - StringIndexingWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).stringIndexingWorks);
            QUnit.test("String - GetHashCodeWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).getHashCodeWorks);
            QUnit.test("String - InstanceEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).instanceEqualsWorks);
            QUnit.test("String - IEquatableEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).iEquatableEqualsWorks);
            QUnit.test("String - StringEqualsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).stringEqualsWorks);
            QUnit.test("String - CompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).compareToWorks);
            QUnit.test("String - IComparableCompareToWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).iComparableCompareToWorks);
            QUnit.test("String - JoinWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).joinWorks);
            QUnit.test("String - ContainsWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).containsWorks);
            QUnit.test("String - ToCharArrayWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).toCharArrayWorks);
            QUnit.test("String - Strings", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).strings);
            QUnit.test("String - Enumerable", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests).enumerable);
            QUnit.test("StringBuilder - TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).typePropertiesAreCorrect);
            QUnit.test("StringBuilder - DefaultConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).defaultConstructorWorks);
            QUnit.test("StringBuilder - ConstructorWithCapacityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).constructorWithCapacityWorks);
            QUnit.test("StringBuilder - InitialTextConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).initialTextConstructorWorks);
            QUnit.test("StringBuilder - InitialTextConstructorWithCapacityWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).initialTextConstructorWithCapacityWorks);
            QUnit.test("StringBuilder - SubstringConstructorWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).substringConstructorWorks);
            QUnit.test("StringBuilder - AppendBoolWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).appendBoolWorks);
            QUnit.test("StringBuilder - AppendCharWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).appendCharWorks);
            QUnit.test("StringBuilder - AppendIntWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).appendIntWorks);
            QUnit.test("StringBuilder - AppendDoubleWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).appendDoubleWorks);
            QUnit.test("StringBuilder - AppendObjectWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).appendObjectWorks);
            QUnit.test("StringBuilder - AppendStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).appendStringWorks);
            QUnit.test("StringBuilder - AppendLineWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).appendLineWorks);
            QUnit.test("StringBuilder - AppendLineStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).appendLineStringWorks);
            QUnit.test("StringBuilder - ClearWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).clearWorks);
            QUnit.test("StringBuilder - ToStringWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).toStringWorks);
            QUnit.test("StringBuilder - LengthPropertyWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).lengthPropertyWorks);
            QUnit.test("StringBuilder - StringBuilders", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests).stringBuilders);
            QUnit.module("Utilities");
            QUnit.test("Environment - NewLineIsAStringContainingOnlyTheNewLineChar", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests).newLineIsAStringContainingOnlyTheNewLineChar);
            QUnit.module("СultureInfo");
            QUnit.test("TypePropertiesAreCorrect", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).typePropertiesAreCorrect);
            QUnit.test("GetFormatWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).getFormatWorks);
            QUnit.test("InvariantWorks", Bridge.get(Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests).invariantWorks);
        }
    }
});

Bridge.init();