using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    public enum Bridge893A
    {
        TestA1,
        TestA2
    }

    [System.Flags]
    public enum Bridge893B
    {
        TestB1 = 1,
        TestB2 = 2,
        TestB3 = 4,
    }

    // Bridge[#893]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#893 - {0}")]
    public class Bridge893
    {
        [Test(ExpectedCount = 5)]
        public static void EnumToStringWorks()
        {
            Assert.AreEqual(Bridge893A.TestA1.ToString(), "TestA1");

            var a = (Bridge893A)100;
            Assert.AreEqual(a.ToString(), "100");

            Assert.AreEqual(Bridge893B.TestB3.ToString(), "TestB3");

            var t = Bridge893B.TestB1 | Bridge893B.TestB2;
            Assert.AreEqual(t.ToString(), "TestB1, TestB2");

            var t1 = Bridge893B.TestB3 | Bridge893B.TestB2;
            Assert.AreEqual(t1.ToString(), "TestB2, TestB3");
        }
    }
}