using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#786]
    [FileName("testBridgeIssues.js")]
    internal class Bridge786
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(2);

            assert.Equal(Get(true), "true", "Bridge786 true");
            assert.Equal(Get(false), "false", "Bridge786 false");
        }

        private static string Get(bool throws)
        {
            return throws ? "true" : "false";
        }
    }
}