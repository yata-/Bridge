using System;
using System.Collections.Generic;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#726]
    [FileName("testBridgeIssues.js")]
    internal class Bridge726
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            bool b = true;
            int[] t = new[] { 1, 2, 3 };

            int sum = 0;
            if (b)
                foreach (int i in t)
                    sum += i;

            assert.Equal(sum, 6, "Bridge726");
        }
    }
}