using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1256 - {0}")]
    public class Bridge1256
    {
        private static bool boolean = true;
        private static bool Is = true;

        [Test]
        public static void TestReservedWords()
        {
            var let = 1;
            let = 2;
            dynamic scope = Script.Get("Bridge.ClientTest.BridgeIssues.Bridge1256");

            Assert.True(scope["boolean"]);
            Assert.True(scope["is"]);
            Assert.True(scope["let"]);
            Assert.True(boolean);
            Assert.True(Is);
            Assert.AreEqual(2, let);
            Assert.AreEqual(5, Let());
        }

        private static int Let()
        {
            return 5;
        }
    }
}
