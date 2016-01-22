using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#841]
    [FileName("testBridgeIssues.js")]
    internal class Bridge841
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);
            List<int> testListA = new List<int> { 1, 2 };

            int result = 0;
            foreach (var item in testListA)
            {
                Action fn = delegate { };

                switch (item)
                {
                    case 1:
                        result += 1;
                        break;
                    case 2:
                        result += 2;
                        break;
                }
            }

            assert.Equal(result, 3, "Bridge841");
        }
    }
}