/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.TestTryCatchBlocks', {
    statics: {
        config: {
            properties: {
                IsATry: false,
                IsACatch: false,
                IsBTry: false,
                IsBCatch: false,
                IsCTry: false,
                IsCCatch: false,
                IsDTry: false,
                IsDCatch: false
            }
        },
        simpleTryCatch: function (assert) {
            assert.expect(1);

            var result = Bridge.get(ClientTestLibrary.TestTryCatchBlocks).tryCatch("Good");

            assert.equal(result, "Good", "TryCatch() executes");
        },
        caughtExceptions: function (assert) {
            assert.expect(3);

            Bridge.get(ClientTestLibrary.TestTryCatchBlocks).tryCatchWithCaughtException();
            assert.ok(true, "Exception catch");

            Bridge.get(ClientTestLibrary.TestTryCatchBlocks).tryCatchWithCaughtTypedException();
            assert.ok(true, "Typed exception catch");

            var exceptionMessage = Bridge.get(ClientTestLibrary.TestTryCatchBlocks).tryCatchWithCaughtArgumentException();
            assert.deepEqual(exceptionMessage, "catch me", "Typed exception catch with exception message");
        },
        thrownExceptions: function (assert) {
            assert.expect(12);

            // #230
            assert.throws(Bridge.get(ClientTestLibrary.TestTryCatchBlocks).tryCatchWithNotCaughtTypedException, "catch me", "A.Typed exception is not Caught");
            assert.ok(Bridge.get(ClientTestLibrary.TestTryCatchBlocks).getIsATry(), "A. exception not caught - try section called");
            assert.ok(!Bridge.get(ClientTestLibrary.TestTryCatchBlocks).getIsACatch(), "A. exception not caught - catch section not called");

            // #229
            assert.throws(Bridge.get(ClientTestLibrary.TestTryCatchBlocks).tryCatchWithNotCaughtTypedExceptionAndArgument, "catch me", "[#229] B. Typed exception is not Caught; and argument");
            assert.ok(Bridge.get(ClientTestLibrary.TestTryCatchBlocks).getIsBTry(), "[#229] B. exception not caught - try section called");
            assert.ok(!Bridge.get(ClientTestLibrary.TestTryCatchBlocks).getIsBCatch(), "B. exception not caught - catch section not called");

            // #231
            assert.throws(Bridge.get(ClientTestLibrary.TestTryCatchBlocks).tryCatchWithRethrow, "catch me", "[#231] C. Rethrow");
            assert.ok(Bridge.get(ClientTestLibrary.TestTryCatchBlocks).getIsCTry(), "C. exception caught and re-thrown - try section called");
            assert.ok(Bridge.get(ClientTestLibrary.TestTryCatchBlocks).getIsCCatch(), "C. exception caught and re-thrown - catch section called");

            assert.throws(Bridge.get(ClientTestLibrary.TestTryCatchBlocks).tryCatchWithRethrowEx, function (error) {
                return error.toString() === "catch me";
            }, "D. Rethrow with parameter");
            assert.ok(Bridge.get(ClientTestLibrary.TestTryCatchBlocks).getIsDTry(), "D. exception caught and re-thrown  - try section called");
            assert.ok(Bridge.get(ClientTestLibrary.TestTryCatchBlocks).getIsDCatch(), "D. exception caught and re-thrown  - catch section called");
        },
        bridge320: function (assert) {
            assert.expect(1);

            var exceptionMessage = "";

            try {
                "someString".SomeNotExistingMethod();
            }
            catch (ex) {
                ex = Bridge.Exception.create(ex);
                exceptionMessage = ex.getMessage();
            }

            // var expectedMessage = Utilities.BrowserHelper.IsPhantomJs()
            //    ? "undefined is not a constructor (evaluating '\"someString\".SomeNotExistingMethod()')"
            //    : "\"someString\".SomeNotExistingMethod is not a function";

            assert.ok(Bridge.String.contains(exceptionMessage,"SomeNotExistingMethod"), "ex.Message works on built-in JavaScript type");
        },
        bridge343: function (assert) {
            assert.expect(1);

            var exceptionMessage = "";

            var i = 0;

            try {
                var r = Bridge.Int.div(10, i);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                var ex;
                if (Bridge.is($e, Bridge.ArgumentException)) {
                }
                else {
                    ex = $e;
                    exceptionMessage = ex.getMessage();
                }
            }

            assert.ok(!Bridge.String.isNullOrEmpty(exceptionMessage), "Double catch block with general Exception works");
        },
        tryCatch: function (s) {
            try {
                return s;
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                return "";
            }
        },
        tryCatchWithCaughtException: function () {
            try {
                throw new Bridge.Exception();
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
            }
        },
        tryCatchWithCaughtTypedException: function () {
            try {
                throw new Bridge.Exception();
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
            }
        },
        tryCatchWithCaughtArgumentException: function () {
            try {
                throw new Bridge.ArgumentException("catch me");
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                var ex;
                if (Bridge.is($e, Bridge.ArgumentException)) {
                    ex = $e;
                    return ex.getMessage();
                }
                else {
                    throw $e;
                }
            }
        },
        tryCatchWithNotCaughtTypedException: function () {
            Bridge.get(ClientTestLibrary.TestTryCatchBlocks).setIsATry(false);
            Bridge.get(ClientTestLibrary.TestTryCatchBlocks).setIsACatch(false);

            try {
                Bridge.get(ClientTestLibrary.TestTryCatchBlocks).setIsATry(true);
                throw new Bridge.Exception("catch me");
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                if (Bridge.is($e, Bridge.ArgumentException)) {
                    Bridge.get(ClientTestLibrary.TestTryCatchBlocks).setIsATry(true);
                }
                else {
                    throw $e;
                }
            }

            Bridge.get(ClientTestLibrary.TestTryCatchBlocks).setIsATry(false);
        },
        tryCatchWithNotCaughtTypedExceptionAndArgument: function () {
            Bridge.get(ClientTestLibrary.TestTryCatchBlocks).setIsBTry(false);
            Bridge.get(ClientTestLibrary.TestTryCatchBlocks).setIsBCatch(false);

            try {
                Bridge.get(ClientTestLibrary.TestTryCatchBlocks).setIsBTry(true);
                throw new Bridge.Exception("catch me");
                Bridge.get(ClientTestLibrary.TestTryCatchBlocks).setIsBTry(false);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                var ex;
                if (Bridge.is($e, Bridge.InvalidCastException)) {
                    ex = $e;
                    Bridge.get(ClientTestLibrary.TestTryCatchBlocks).setIsBCatch(true);
                    var s = ex.getMessage();
                }
                else {
                    throw $e;
                }
            }

            Bridge.get(ClientTestLibrary.TestTryCatchBlocks).setIsBTry(false);
        },
        tryCatchWithRethrow: function () {
            Bridge.get(ClientTestLibrary.TestTryCatchBlocks).setIsCTry(false);
            Bridge.get(ClientTestLibrary.TestTryCatchBlocks).setIsCCatch(false);

            try {
                Bridge.get(ClientTestLibrary.TestTryCatchBlocks).setIsCTry(true);
                throw new Bridge.InvalidOperationException("catch me");
                Bridge.get(ClientTestLibrary.TestTryCatchBlocks).setIsCTry(false);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                Bridge.get(ClientTestLibrary.TestTryCatchBlocks).setIsCCatch(true);
                throw $e;
            }

            Bridge.get(ClientTestLibrary.TestTryCatchBlocks).setIsCTry(false);
        },
        tryCatchWithRethrowEx: function () {
            Bridge.get(ClientTestLibrary.TestTryCatchBlocks).setIsDTry(false);
            Bridge.get(ClientTestLibrary.TestTryCatchBlocks).setIsDCatch(false);

            try {
                Bridge.get(ClientTestLibrary.TestTryCatchBlocks).setIsDTry(true);
                throw new Bridge.ArgumentException("catch me");
                Bridge.get(ClientTestLibrary.TestTryCatchBlocks).setIsDTry(false);
            }
            catch (ex) {
                ex = Bridge.Exception.create(ex);
                Bridge.get(ClientTestLibrary.TestTryCatchBlocks).setIsDCatch(true);
                throw ex;
            }

            Bridge.get(ClientTestLibrary.TestTryCatchBlocks).setIsDTry(false);
        }
    }
});



Bridge.init();