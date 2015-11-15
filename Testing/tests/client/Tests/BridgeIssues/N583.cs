using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#583]
    [FileName("testBridgeIssues.js")]
    internal class Bridge583
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(6);

            assert.Ok(decimal.Round(1.45m, 1).Equals(1.4m), "Bridge583 1");
            assert.Ok(decimal.Round(1.55m, 1).Equals(1.6m), "Bridge583 2");
            assert.Ok(decimal.Round(123.456789M, 4).Equals(123.4568m), "Bridge583 3");
            assert.Ok(decimal.Round(123.456789M, 6).Equals(123.456789m), "Bridge583 4");
            assert.Ok(decimal.Round(123.456789M, 8).Equals(123.456789m), "Bridge583 5");
            assert.Ok(decimal.Round(-123.456M, 0).Equals(-123m), "Bridge583 6");
        }
    }
}