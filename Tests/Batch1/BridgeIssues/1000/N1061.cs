using System;
using System.Linq;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1061 - {0}")]
    public class Bridge1061
    {
        [Test]
        public static void TestIsDigitFromLinq()
        {
            Assert.True(char.IsDigit('1'));
            Assert.True("1".Any(c => char.IsDigit(c)));
        }
    }
}