using Bridge.Test;

using System;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#1122]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1122 - {0}")]
    public class N1122
    {
        public static void AssertNumber(object expected, object actual, string message = null)
        {
            var a = actual != null ? actual.ToString() : "null";
            var e = expected != null ? expected.ToString() : "null";

            Assert.AreEqual(e, a, message);
        }

        [Test(ExpectedCount = 4)]
        public static void TestClippingInDefaultOverflowMode()
        {
            var x = double.MaxValue;

            var y1 = (int)Math.Floor(x / 0.2);
            AssertNumber(int.MinValue, y1, "int");

            var y2 = (uint)Math.Floor(x / 0.2);
            AssertNumber(uint.MinValue, y2, "uint");

            var z1 = (long)Math.Floor(x / 0.2);
            AssertNumber(long.MinValue, z1, "long");

            var z2 = (ulong)Math.Floor(x / 0.2);
            AssertNumber(ulong.MinValue, z2, "ulong");
        }

        [Test(ExpectedCount = 4)]
        public static void TestIntegerDivisionInDefaultMode()
        {
            var x = 1.1;

            int y1 = (int)(1 / x);
            AssertNumber((int)0, y1, "int");

            uint y2 = (uint)(1 / x);
            AssertNumber((uint)0, y2, "uint");

            long z1 = (long)(1 / x);
            AssertNumber((long)0, z1, "long");

            ulong z2 = (ulong)(1 / x);
            AssertNumber((ulong)0, z2, "ulong");
        }
    }
}