/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.Data', {
    config: {
        properties: {
            Count: 0
        }
    }
});

Bridge.define('ClientTestLibrary.TestTryCatchFinallyBlocks', {
    statics: {
        config: {
            properties: {
                IsATry: false,
                IsACatch: false,
                IsAFinally: false,
                IsBTry: false,
                IsBCatch: false,
                IsBFinally: false,
                IsCTry: false,
                IsCCatch: false,
                IsCFinally: false,
                IsDTry: false,
                IsDCatch: false,
                IsDFinally: false
            }
        },
        simpleTryCatchFinally: function (assert) {
            assert.expect(1);

            var data = new ClientTestLibrary.Data();
            Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).tryCatchFinally(data);

            assert.equal(data.getCount(), 2, "TryCatchFinally() executes");
        },
        caughtExceptions: function (assert) {
            assert.expect(4);

            var data = new ClientTestLibrary.Data();
            Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).tryCatchFinallyWithCaughtException(data);

            assert.equal(data.getCount(), 7, "Exception catch, Finally works");

            data = new ClientTestLibrary.Data();
            Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).tryCatchFinallyWithCaughtTypedException(data);

            assert.equal(data.getCount(), 7, "Typed exception catch, Finally works");

            data = new ClientTestLibrary.Data();
            var exceptionMessage = Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).tryCatchFinallyWithCaughtArgumentException(data);

            assert.equal(exceptionMessage, "catch me", "Typed exception catch with exception message");
            assert.equal(data.getCount(), 7, "Typed exception catch with exception message, Finally works");
        },
        thrownExceptions: function (assert) {
            assert.expect(16);

            //#230
            assert.throws(Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).tryCatchFinallyWithNotCaughtTypedException, "catch me", "A. Typed exception is not caught");
            assert.ok(Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).getIsATry(), "A. exception not caught - try section called");
            assert.ok(!Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).getIsACatch(), "A. exception not caught - catch section not called");
            assert.ok(Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).getIsAFinally(), "A. exception not caught - finally section called");

            //#229
            assert.throws(Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).tryCatchWithNotCaughtTypedExceptionAndArgument, "catch me", "[#229] B. Typed exception is not caught; and argument");
            assert.ok(Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).getIsBTry(), "B. exception not caught - try section called");
            assert.ok(!Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).getIsBCatch(), "B. exception not caught - catch section not called");
            assert.ok(Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).getIsBFinally(), "B. exception not caught - finally section called");

            //#231
            assert.throws(Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).tryCatchWithRethrow, "catch me", "[#231] C. Rethrow");
            assert.ok(Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).getIsCTry(), "C. exception caught and re-thrown  - try section called");
            assert.ok(Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).getIsCCatch(), "C. exception caught and re-thrown  - catch section called");
            assert.ok(Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).getIsCFinally(), "C. exception caught and re-thrown  - finally section called");

            assert.throws(Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).tryCatchWithRethrowEx, function (error) {
                return error.toString() === "catch me";
            }, "D. Rethrow with parameter");
            assert.ok(Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).getIsDTry(), "D. exception caught and re-thrown  - try section called");
            assert.ok(Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).getIsDCatch(), "D. exception caught and re-thrown  - catch section called");
            assert.ok(Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).getIsDFinally(), "D. exception caught and re-thrown  - finally section called");
        },
        tryCatchFinally: function (data) {
            try {
                data.setCount(data.getCount()+1);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
            }
            finally {
                data.setCount(data.getCount()+1);
            }
        },
        tryCatchFinallyWithCaughtException: function (data) {
            try {
                data.setCount(data.getCount() + 1);
                throw new Bridge.Exception();
                data.setCount(data.getCount() - 1);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                data.setCount(data.getCount() + 2);
            }
            finally {
                data.setCount(data.getCount() + 4);
            }
        },
        tryCatchFinallyWithCaughtTypedException: function (data) {
            try {
                data.setCount(data.getCount() + 1);
                throw new Bridge.Exception("catch me");
                data.setCount(data.getCount() - 1);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                data.setCount(data.getCount() + 2);
            }
            finally {
                data.setCount(data.getCount() + 4);
            }
        },
        tryCatchFinallyWithCaughtArgumentException: function (data) {
            try {
                data.setCount(data.getCount() + 1);
                throw new Bridge.ArgumentException("catch me");
                data.setCount(data.getCount() - 1);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                var ex;
                if (Bridge.is($e, Bridge.ArgumentException)) {
                    ex = $e;
                    data.setCount(data.getCount() + 2);

                    return ex.getMessage();
                }
                else {
                    throw $e;
                }
            }
            finally {
                data.setCount(data.getCount() + 4);
            }
        },
        tryCatchFinallyWithNotCaughtTypedException: function () {
            Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsATry(false);
            Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsACatch(false);
            Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsAFinally(false);

            try {
                Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsATry(true);
                throw new Bridge.Exception("catch me");
                Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsATry(false);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                if (Bridge.is($e, Bridge.ArgumentException)) {
                    Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsACatch(true);
                }
                else {
                    throw $e;
                }
            }
            finally {
                Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsAFinally(true);
            }
        },
        tryCatchWithNotCaughtTypedExceptionAndArgument: function () {
            Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsBTry(false);
            Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsBCatch(false);
            Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsBFinally(false);

            try {
                Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsBTry(true);
                throw new Bridge.Exception("catch me");
                Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsBTry(false);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                var ex;
                if (Bridge.is($e, Bridge.InvalidCastException)) {
                    ex = $e;
                    var s = ex.getMessage();
                    Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsBCatch(true);
                }
                else {
                    throw $e;
                }
            }
            finally {
                Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsBFinally(true);
            }
        },
        tryCatchWithRethrow: function () {
            Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsCTry(false);
            Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsCCatch(false);
            Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsCFinally(false);

            try {
                Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsCTry(true);
                throw new Bridge.InvalidOperationException("catch me");
                Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsCTry(false);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsCCatch(true);
                throw $e;
            }
            finally {
                Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsCFinally(true);
            }
        },
        tryCatchWithRethrowEx: function () {
            Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsDTry(false);
            Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsDCatch(false);
            Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsDFinally(false);

            try {
                Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsDTry(true);
                throw new Bridge.ArgumentException("catch me");
                Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsDTry(false);
            }
            catch (ex) {
                ex = Bridge.Exception.create(ex);
                Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsDCatch(true);
                throw ex;
            }
            finally {
                Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).setIsDFinally(true);
            }
        }
    }
});



Bridge.init();