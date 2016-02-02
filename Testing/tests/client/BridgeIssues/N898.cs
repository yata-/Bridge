using Bridge.Test;

using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#898]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#898 - {0}")]
    public class Bridge898
    {
        [Test(ExpectedCount = 1)]
        public static void TestMakeEnumerable()
        {
            bool check = true;
            decimal test = check ? 1 : 2;
            Assert.True(test == 1);
        }
    }
}