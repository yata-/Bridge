using System;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#844]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#844 - {0}")]
    public class Bridge844
    {
        [Test(ExpectedCount = 1)]
        public static void NullableAndSimpleDateTimeToStringEquals()
        {
            DateTime dt1 = DateTime.Now;
            DateTime? dt2 = DateTime.Now;

            Assert.AreEqual(dt1.ToString(), dt2.ToString(), "Bridge844");
        }
    }
}