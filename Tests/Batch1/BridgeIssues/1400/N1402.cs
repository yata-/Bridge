using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1402 - {0}")]
    public class Bridge1402
    {
        [Test]
        public static void TestLongClipping()
        {
            long value = long.MaxValue;
            Assert.AreEqual(255, (byte)(value >> 2));
            Assert.AreEqual(-1, (sbyte)(value >> 2));
            Assert.AreEqual(-1, (short)(value >> 2));
            Assert.AreEqual(65535, (ushort)(value >> 2));
            Assert.AreEqual(-1, (int)(value >> 2));
            Assert.AreEqual(4294967295, (uint)(value >> 2));
        }
    }
}
