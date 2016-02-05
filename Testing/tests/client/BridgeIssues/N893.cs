using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    public enum Bridge893A
    {
        Test
    }

    // Bridge[#893]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#893 - {0}")]
    public class Bridge893
    {
        [Test(ExpectedCount = 1)]
        public static void TestDecimalConversion()
        {
            Assert.AreEqual(Bridge893A.Test.ToString(), "Test");
        }
    }
}