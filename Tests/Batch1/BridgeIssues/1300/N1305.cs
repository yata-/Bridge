using System.Linq;
using System.Threading.Tasks;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1305 - {0}")]
    public class Bridge1305
    {
        private static int CurrentInt;

        [Test]
        public static async void TestAsyncReturnWithAssigment()
        {
            var done = Assert.Async();

            var result = await Test();
            Assert.AreEqual(10, result);
            Assert.AreEqual(10, CurrentInt);

            done();
        }

        private static async Task<int> Test()
        {
            return CurrentInt = await Task.FromResult(10);
        }
    }
}
