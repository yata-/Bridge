using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#751]
    [FileName("testBridgeIssues.js")]
    internal class Bridge751
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            for (int i = 0; i < 5; i++)
            {
                var el = i;
            }

            var values = new List<int>() { 1, 2 };
            var v1 = values.Count(el => el == 1);

            assert.Equal(v1, 1, "Bridge751");
        }
    }
}