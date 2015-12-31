using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#796]
    [FileName("testBridgeIssues.js")]
    internal class Bridge796
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(5);
            bool b = true;

            assert.Ok(Method1(true), "Bridge796 Method1");
            assert.Ok(Method1_1(true), "Bridge796 Method1_1");
            assert.Ok(Method2(true), "Bridge796 Method2");
            assert.NotOk(Method3(ref b), "Bridge796 Method3");
            assert.NotOk(b, "Bridge796 Method3 b");
        }

        private static bool Method1([Name("$num")] bool throws)
        {
            return throws;
        }

        private static bool Method1_1([Name("throws")] bool num)
        {
            return num;
        }

        private static bool Method2(bool throws)
        {
            return throws;
        }

        private static bool Method3(ref bool throws)
        {
            throws = false;
            return throws;
        }
    }
}