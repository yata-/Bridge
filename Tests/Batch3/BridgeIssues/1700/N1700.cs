using Bridge.Test;

using System.ComponentModel;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1700 - {0}")]
    public class Bridge1700
    {
        [Test]
        public void TestLongAsIndex()
        {
            int[,] array = new int[3, 5];
            for (int n = 0; n < 15; n++)
            {
                array[n % 3u, n / 3u] = 1;
            }
            Assert.AreEqual(1, array[0, 0]);
        }
    }
}