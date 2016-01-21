using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#818]
    [FileName("testBridgeIssues.js")]
    internal class Bridge818
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(3);

            var z = 0;
            for (; ; )
            {
                z++;
                if (z == 10) break;
            }
            assert.Equal(z, 10, "Bridge818 z");

            int i;
            int j;
            for (i = 0, j = 1; i < 10; i++, j++)
            {

            }
            assert.Equal(i, 10, "Bridge818 i");
            assert.Equal(j, 11, "Bridge818 j");
        }
    }
}