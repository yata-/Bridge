using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1486 - {0}")]
    public class Bridge1486
    {
        public static long x = 15;

        [Test]
        public void TestConstructorName()
        {
            x++;
            Assert.True(16 == x);
        }
    }
}