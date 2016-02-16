// The source is licensed to the .NET Foundation under the MIT license:
// https://github.com/dotnet/corefx/blob/master/src/System.Runtime.Extensions/tests/System/Convert.ToUInt32.cs
// https://github.com/dotnet/corefx/blob/master/LICENSE

using System;
using Bridge.Test;

namespace Bridge.ClientTest.ConvertTests
{
    [Category(Constants.MODULE_CONVERT)]
    [TestFixture(TestNameFormat = "Convert.ToUInt32 - {0}")]
    public class ConvertToUInt32Tests : ConvertTestBase<uint>
    {
        private static class Wrappers
        {
            // TODO: These wrappers help to avoid issues #689 and #743. They can be deleted when issues are fixed.
            // For more infromation see comment: https://github.com/bridgedotnet/Bridge/issues/743#issuecomment-183905400

            public static uint ConvertFromStrWithBase(string value, int fromBase)
            {
                return Convert.ToUInt32(value, fromBase);
            }
        }

        [Test]
        public void FromBoolean()
        {
            bool[] testValues = { true, false };
            uint[] expectedValues = { 1, 0 };
            VerifyViaObj(Convert.ToUInt32, testValues, expectedValues);
        }

        [Test]
        public void FromByte()
        {
            byte[] testValues = { byte.MaxValue, byte.MinValue };
            uint[] expectedValues = { 255, 0 };
            VerifyViaObj(Convert.ToUInt32, testValues, expectedValues);
        }

        [Test]
        public void FromChar()
        {
            char[] testValues = { char.MinValue, char.MaxValue, 'b' };
            uint[] expectedValues = { char.MinValue, char.MaxValue, 98 };
            VerifyViaObj(Convert.ToUInt32, testValues, expectedValues);
        }

        [Test]
        public void FromDecimal()
        {
            decimal[] testValues = { 1000m, 0m };
            uint[] expectedValues = { 1000, 0 };
            VerifyViaObj(Convert.ToUInt32, testValues, expectedValues);

            decimal[] overflowValues = { decimal.MaxValue, decimal.MinValue };
            VerifyThrowsViaObj<OverflowException, decimal>(Convert.ToUInt32, overflowValues);
        }

        [Test]
        public void FromDouble()
        {
            double[] testValues = { 1000.0, 0.0, -0.5, 4294967295.49999, 472.2, 472.6, 472.5, 471.5 };
            uint[] expectedValues = { 1000, 0, 0, 4294967295, 472, 473, 472, 472 };
            VerifyViaObj(Convert.ToUInt32, testValues, expectedValues);

            double[] overflowValues = { double.MaxValue, -0.500000000001, -100.0, 4294967296, 4294967295.5 };
            VerifyThrowsViaObj<OverflowException, double>(Convert.ToUInt32, overflowValues);
        }

        [Test]
        public void FromInt16()
        {
            short[] testValues = { 1000, 0, short.MaxValue };
            uint[] expectedValues = { 1000, 0, (uint)short.MaxValue };
            VerifyViaObj(Convert.ToUInt32, testValues, expectedValues);

            short[] overflowValues = { short.MinValue };
            VerifyThrowsViaObj<OverflowException, short>(Convert.ToUInt32, overflowValues);
        }

        [Test]
        public void FromInt32()
        {
            int[] testValues = { 1000, 0, int.MaxValue };
            uint[] expectedValues = { 1000, 0, int.MaxValue };
            VerifyViaObj(Convert.ToUInt32, testValues, expectedValues);

            int[] overflowValues = { int.MinValue };
            VerifyThrowsViaObj<OverflowException, int>(Convert.ToUInt32, overflowValues);
        }

        [Test]
        public void FromInt64()
        {
            long[] testValues = { 1000, 0 };
            uint[] expectedValues = { 1000, 0 };
            VerifyViaObj(Convert.ToUInt32, testValues, expectedValues);

            long[] overflowValues = { long.MaxValue, long.MinValue };
            VerifyThrowsViaObj<OverflowException, long>(Convert.ToUInt32, overflowValues);
        }

        [Test]
        public void FromObject()
        {
            object[] testValues = { null };
            uint[] expectedValues = { 0 };
            VerifyFromObject(Convert.ToUInt32, Convert.ToUInt32, testValues, expectedValues);

            object[] invalidValues = { new object(), DateTime.Now };
            VerifyFromObjectThrows<InvalidCastException>(Convert.ToUInt32, Convert.ToUInt32, invalidValues);
        }

        [Test]
        public void FromSByte()
        {
            sbyte[] testValues = { 100, 0 };
            uint[] expectedValues = { 100, 0 };
            VerifyViaObj(Convert.ToUInt32, testValues, expectedValues);

            sbyte[] overflowValues = { sbyte.MinValue };
            VerifyThrowsViaObj<OverflowException, sbyte>(Convert.ToUInt32, overflowValues);
        }

        [Test]
        public void FromSingle()
        {
            float[] testValues = { 1000.0f, 0.0f };
            uint[] expectedValues = { 1000, 0 };
            VerifyViaObj(Convert.ToUInt32, testValues, expectedValues);

            float[] overflowValues = { float.MaxValue, -100.0f };
            VerifyThrowsViaObj<OverflowException, float>(Convert.ToUInt32, overflowValues);
        }

        [Test]
        public void FromString()
        {
            var ushortMaxValue = ushort.MaxValue;
            var intMaxValue = int.MaxValue;
            var uintMaxValue = uint.MaxValue;

            string[] testValues = { "1000", "0", ushortMaxValue.ToString(), uintMaxValue.ToString(), intMaxValue.ToString(), "2147483648", "2147483649", null };
            uint[] expectedValues = { 1000, 0, ushort.MaxValue, uint.MaxValue, int.MaxValue, (uint)int.MaxValue + 1, (uint)int.MaxValue + 2, 0 };
            VerifyFromString(Convert.ToUInt32, Convert.ToUInt32, testValues, expectedValues);

            string[] overflowValues = { "-1", decimal.MaxValue.ToFixed(0, MidpointRounding.AwayFromZero) };
            VerifyFromStringThrows<OverflowException>(Convert.ToUInt32, Convert.ToUInt32, overflowValues);

            string[] formatExceptionValues = { "abba" };
            VerifyFromStringThrows<FormatException>(Convert.ToUInt32, Convert.ToUInt32, formatExceptionValues);
        }

        [Test]
        public void FromStringWithBase()
        {
            string[] testValues = { null, null, null, null, "ffffffff", "4294967295", "37777777777", "11111111111111111111111111111111", "0", "0", "0", "0", "2147483647", "2147483648", "2147483649" };
            int[] testBases = { 10, 2, 8, 16, 16, 10, 8, 2, 16, 10, 8, 2, 10, 10, 10 };
            uint[] expectedValues = { 0, 0, 0, 0, uint.MaxValue, uint.MaxValue, uint.MaxValue, uint.MaxValue, uint.MinValue, uint.MinValue, uint.MinValue, uint.MinValue, (uint)int.MaxValue, (uint)int.MaxValue + 1, (uint)int.MaxValue + 2 };
            VerifyFromStringWithBase(Wrappers.ConvertFromStrWithBase, testValues, testBases, expectedValues);

            string[] overflowValues = { "18446744073709551616", "18446744073709551617", "18446744073709551618", "18446744073709551619", "18446744073709551620", "-4294967297", "11111111111111111111111111111111111111111111111111111111111111111", "1FFFFffffFFFFffff", "7777777777777777777777777" };
            int[] overflowBases = { 10, 10, 10, 10, 10, 10, 2, 16, 8 };
            VerifyFromStringWithBaseThrows<OverflowException>(Wrappers.ConvertFromStrWithBase, overflowValues, overflowBases);

            string[] formatExceptionValues = { "12", "ffffffffffffffffffff" };
            int[] formatExceptionBases = { 2, 8 };
            VerifyFromStringWithBaseThrows<FormatException>(Wrappers.ConvertFromStrWithBase, formatExceptionValues, formatExceptionBases);

            string[] argumentExceptionValues = { "10", "11", "abba", "-ab" };
            int[] argumentExceptionBases = { -1, 3, 0, 16 };
            VerifyFromStringWithBaseThrows<ArgumentException>(Wrappers.ConvertFromStrWithBase, argumentExceptionValues, argumentExceptionBases);
        }

        [Test]
        public void FromUInt16()
        {
            ushort[] testValues = { 100, 0 };
            uint[] expectedValues = { 100, 0 };
            VerifyViaObj(Convert.ToUInt32, testValues, expectedValues);
        }

        [Test]
        public void FromUInt32()
        {
            uint[] testValues = { uint.MaxValue, uint.MinValue };
            uint[] expectedValues = { uint.MaxValue, uint.MinValue };
            VerifyViaObj(Convert.ToUInt32, testValues, expectedValues);
        }

        [Test]
        public void FromUInt64()
        {
            ulong[] testValues = { 100, 0 };
            uint[] expectedValues = { 100, 0 };
            VerifyViaObj(Convert.ToUInt32, testValues, expectedValues);

            ulong[] values = { ulong.MaxValue };
            VerifyThrowsViaObj<OverflowException, ulong>(Convert.ToUInt32, values);
        }
    }
}