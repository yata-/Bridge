using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#907]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#907 - {0}")]
    public class Bridge907
    {
        [Test(ExpectedCount = 3)]
        public static void TestIfElseAsyncMethod()
        {
            var s = "Hello World!";
            var res = s.Split((string[])null, StringSplitOptions.RemoveEmptyEntries);

            Assert.AreEqual(res.Length, 2, "Bridge907 Length");
            Assert.AreEqual(res[0], "Hello", "Bridge907 [0]");
            Assert.AreEqual(res[1], "World!", "Bridge907 [1]");
        }
    }
}