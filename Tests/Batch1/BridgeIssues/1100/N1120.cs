using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1120 - {0}")]
    public class Bridge1120
    {
        enum Test
        {
            M1 = -10,
            M2,
            M3,
            M4 = 1,
            M5 = -9,
            M6 = 0,
            M7
        }

        [Test]
        public static void TestEnumDoesNotGenerateValuesAsPowerOfTwo()
        {
            Assert.AreEqual(-10, (int)Test.M1, "-10");
            Assert.AreEqual(-9, (int)Test.M2, "-9");
            Assert.AreEqual(-8, (int)Test.M3, "-8");
            Assert.AreEqual(1, (int)Test.M4, "1");
            Assert.AreEqual(-9, (int)Test.M5, "-9");
            Assert.AreEqual(0, (int)Test.M6, "0");
            Assert.AreEqual(1, (int)Test.M7, "1");
        }
    }
}