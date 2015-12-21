using System;
using System.Collections.Generic;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#732]
    [FileName("testBridgeIssues.js")]
    internal class Bridge732
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            var decimalValue = 5m;
            bool assign = false;
            decimal test = assign ? decimalValue : 2;
            var test2 = test * decimalValue;

            assert.Ok(test2 == 10, "Bridge732");
        }
    }
}