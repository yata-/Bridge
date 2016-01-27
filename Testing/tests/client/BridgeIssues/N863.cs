using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#863]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#863 - {0}")]
    public class Bridge863
    {
        [Test(ExpectedCount = 4)]
        public static void TestUseCase()
        {
            var test = false;
            test |= true;
            Assert.AreStrictEqual(test, true);

            test = false;
            test &= true;
            Assert.AreStrictEqual(test, false);

            bool? test1 = false;
            test1 |= true;
            Assert.AreStrictEqual(test1, true);

            test1 = false;
            test1 &= true;
            Assert.AreStrictEqual(test1, false);
        }
    }
}