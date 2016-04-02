using Bridge.Test;

using System;
using Bridge.Html5;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1146 - {0}")]
    public class Bridge1146
    {
        [Test]
        public static void TestLongIssues()
        {
            Assert.True(IntUintEquality(0, 0));
            Assert.True(Precedence());
        }

        static bool IntUintEquality(int a, uint b)
        {
            return a == b;
        }
        static bool Precedence()
        {
            uint a = 1;
            uint b = 2;
            a += b >> 1;    
            return a == 2;
        }
    }
}