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

    [FileName("testBridgeIssues.js")]
    internal struct Bridge762B
    {
        public int Data { get; set; }
    }

    // Bridge[#762]
    [FileName("testBridgeIssues.js")]
    internal class Bridge762
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(4);

            int? test1 = null;
            Bridge762A? test2 = null;
            Bridge762B? test3 = null;

            int value1 = test1.GetValueOrDefault();
            Bridge762A value2 = test2.GetValueOrDefault();
            var value3 = test3.GetValueOrDefault();

            assert.Equal(value1, 0, "Bridge762 int");
            assert.NotEqual(value2, null, "Bridge762A struct");
            assert.NotEqual(value3, null, "Bridge762B struct");
            assert.Equal(value3.Data, 0, "Bridge762B.Data struct");
        }
    }
}