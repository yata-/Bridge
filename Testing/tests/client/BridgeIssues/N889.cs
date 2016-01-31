using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#889]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#889 - {0}")]
    public class Bridge889
    {
        private static int Count(params int[] arr)
        {
            return arr.Length;
        }

        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            Assert.AreEqual(Count(), 0);        
        }
    }
}