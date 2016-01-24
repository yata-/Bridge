using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#826]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#785 - {0}")]
    public class Bridge785
    {
        [Test(ExpectedCount = 2)]
        public static void TestUseCase()
        {
            {
                var i = 1;
                var j = Script.Write<int>("{i}", i);
                Assert.AreEqual(j, 1, "Bridge785 by name");
            }
            {
                var i = 2;
                var j = Script.Write<int>("{0}", i);
                Assert.AreEqual(j, 2, "Bridge785 by index");
            }
        }
    }
}