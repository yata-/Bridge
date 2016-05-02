using System.Linq;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1266 - {0}")]
    public class Bridge1266
    {
        [Test]
        public static void TestArrayToEnumerable()
        {
            var arr = new[] {1, 2, 3};
            var x = arr.ToArray().ToEnumerable();
            var index = 0;
            foreach (var i in x)
            {
                Assert.AreEqual(arr[index++], i);
            }
        }
    }
}
