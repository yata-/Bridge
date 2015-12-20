using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#760]
    [FileName("testBridgeIssues.js")]
    internal class Bridge760
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            int? a = null;
            int? b = 10;

            var c = b ?? DoSomething(a);
            assert.Equal(c, 10, "Bridge760");
        }

        public static int DoSomething(int? test)
        {
            return test.Value;
        }
    }
}