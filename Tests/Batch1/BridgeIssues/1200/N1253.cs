using Bridge.Html5;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1253 - {0}")]
    public class Bridge1253
    {
        enum Numbers
        {
            // Emitted as ONE by default
            ONE = 1,

            // Emitted as TWO by default
            TWO = 2
        }

        [Test]
        public static void TestDefaultEnumMode()
        {
            var numbers = Script.Write<object>("Bridge.ClientTest.BridgeIssues.Bridge1253.Numbers");
            Assert.AreEqual(Numbers.ONE, numbers["ONE"]);
            Assert.AreEqual(Numbers.TWO, numbers["TWO"]);
        }
    }
}
