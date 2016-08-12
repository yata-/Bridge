using Bridge.Test;

using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1472 - {0}")]
    public class Bridge1472
    {
        static bool time = true;

        public static int[] GetArray()
        {
            return (time = !time) ? new[] { 1, 2, 3, 4 } : new[] { 1, 2, 3 };
        }

        [Test]
        public void TestMultiplyThisInTemplate()
        {
            int[] v = new int[4];
            Bridge1472.GetArray().CopyTo(v, 0);
            Assert.AreEqual(0, v[3]);
        }
    }
}