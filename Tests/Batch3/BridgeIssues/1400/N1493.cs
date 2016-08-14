using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1493 - {0}")]
    public class Bridge1493
    {
        enum Enum : long
        {
            A = 0L
        }

        [Test]
        public void TestEnumLong()
        {
            Enum @enum = Enum.A;
            Assert.True(0 == (ulong)@enum);
            Assert.True(0 == (uint)@enum);
            Assert.True(0 == (int)@enum);
            Assert.True(0 == (short)@enum);
            Assert.True(0 == (ushort)@enum);
            Assert.True(0 == (byte)@enum);
            Assert.True(0 == (sbyte)@enum);
            Assert.True(0 == (float)@enum);
            Assert.True(0 == (double)@enum);
        }
    }
}