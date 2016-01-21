using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#835]
    [FileName("testBridgeIssues.js")]
    internal class Bridge835
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            var arr = new Dot[10, 10];
            assert.NotEqual(arr, null, "Bridge835");
        }

        public struct Dot
        {
        }
    }
}