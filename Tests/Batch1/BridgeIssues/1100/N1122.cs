using Bridge.Test;

using System;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#1122]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1122 - {0}")]
    public class N1122
    {
        [Test(ExpectedCount = 4)]
        public static void TestClippingInDefaultOverflowMode()
        {
            var x = double.MaxValue;

            var y1 = (int)Math.Floor(x / 0.2);
            Assert.AreEqual(0, y1, "int");

            var y2 = (uint)Math.Floor(x / 0.2);
            Assert.AreEqual(0, y2, "uint");

            var z1 = (long)Math.Floor(x / 0.2);
            Assert.AreEqual(0, z1, "long");

            var z2 = (ulong)Math.Floor(x / 0.2);
            Assert.AreEqual(0, z2, "ulong");
        }

        [Test(ExpectedCount = 4)]
        public static void TestIntegerDivisionInDefaultMode()
        {
            var x = 1.1;

            int y1 = (int)(1 / x);
            Assert.AreEqual((int)0, y1, "int");

            uint y2 = (uint)(1 / x);
            Assert.AreEqual((uint)0, y2, "uint");

            long z1 = (long)(1 / x);
            Assert.AreEqual((long)0, z1, "long");

            ulong z2 = (ulong)(1 / x);
            Assert.AreEqual((ulong)0, z2, "ulong");
        }
    }
}