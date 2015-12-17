using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#721]
    [FileName("testBridgeIssues.js")]
    internal class Bridge721
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(4);

            List<int> testList = new List<int> { 3 };
            assert.Equal(Check(testList), "ThirdLoop", "Bridge721 ThirdLoop");

            testList = new List<int> { 5 };
            assert.Equal(Check(testList), "SecondLoop", "Bridge721 SecondLoop");

            testList = new List<int> { 15 };
            assert.Equal(Check(testList), "FirstLoop", "Bridge721 FirstLoop");

            testList = new List<int> { 25 };
            assert.Equal(Check(testList), "NoLoops", "Bridge721 NoLoops");
        }

        public static string Check(List<int> testList)
        {
            int i = 0;
            while (i < 20)
            {
                while (i < 10)
                {
                    while (i < 5)
                    {
                        if (testList.Any(x => x == i)) { return "ThirdLoop"; }
                        i++;
                    }

                    if (testList.Any(x => x == i)) { return "SecondLoop"; }
                    i++;
                }

                if (testList.Any(x => x == i)) { return "FirstLoop"; }
                i++;
            }

            return "NoLoops";
        }
    }
}