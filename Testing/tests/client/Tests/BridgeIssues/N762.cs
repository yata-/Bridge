using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    internal struct Bridge762A
    {
    }

    // Bridge[#762]
    [FileName("testBridgeIssues.js")]
    internal class Bridge762
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(2);

            int? test1 = null;
            Bridge762A? test2 = null;
            int value1 = test1.GetValueOrDefault();
            Bridge762A value2 = test2.GetValueOrDefault();

            assert.Equal(value1, 0, "Bridge762 int");
            assert.NotEqual(value2, null, "Bridge762 struct");
        }
    }
}