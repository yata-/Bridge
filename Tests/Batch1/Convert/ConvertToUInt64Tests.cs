// The source is licensed to the .NET Foundation under the MIT license:
// https://github.com/dotnet/corefx/blob/master/src/System.Runtime.Extensions/tests/System/Convert.ToUInt64.cs
// https://github.com/dotnet/corefx/blob/master/LICENSE

using System;
using Bridge.Test;

namespace Bridge.ClientTest.ConvertTests
{
    [Category(Constants.MODULE_CONVERT)]
    [TestFixture(TestNameFormat = "Convert.ToUInt64 - {0}")]
    public class ConvertToUInt64Tests : ConvertTestBase<ulong>
    {
        private static class Wrappers
        {
            // TODO: These wrappers help to avoid issues #689 and #743. They can be deleted when issues are fixed.
            // For more infromation see comment: https://github.com/bridgedotnet/Bridge/issues/743#issuecomment-183905400

            public static ulong ConvertFromStrWithBase(string value, int fromBase)
            {
                return Convert.ToUInt64(value, fromBase);
            }
        }

        [Test]
        public void FromBoolean()
        {
            bool[] testValues = { true, false };
            ulong[] expectedValues = { 1, 0 };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);
        }

        [Test]
        public void FromByte()
        {
            byte[] testValues = { byte.MaxValue, byte.MinValue };
            ulong[] expectedValues = { byte.MaxValue, byte.MinValue };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);
        }

        [Test]
        public void FromChar()
        {
            char[] testValues = { char.MaxValue, char.MinValue, 'b' };
            ulong[] expectedValues = { char.MaxValue, char.MinValue, 98 };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);
        }

        [Test]
        public void FromDecimal()
        {
            decimal[] testValues = { 1000m, 0m };
            ulong[] expectedValues = { 1000, 0 };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);

            decimal[] overflowValues = { decimal.MinValue, decimal.MaxValue };
            VerifyThrowsViaObj<OverflowException, decimal>(Convert.ToUInt64, overflowValues);
        }

        [Test]
        public void FromDouble()
        {
            double[] testValues = { 1000.0, 0.0 };
            ulong[] expectedValues = { (ulong)1000, (ulong)0 };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);

            double[] overflowValues = { double.MaxValue, -100.0 };
            VerifyThrowsViaObj<OverflowException, double>(Convert.ToUInt64, overflowValues);
        }

        [Test]
        public void FromInt16()
        {
            short[] testValues = { 1000, 0, short.MaxValue };
            ulong[] expectedValues = { 1000, 0, (ulong)short.MaxValue };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);

            short[] overflowValues = { short.MinValue };
            VerifyThrowsViaObj<OverflowException, short>(Convert.ToUInt64, overflowValues);
        }

        [Test]
        public void FromInt32()
        {
            int[] testValues = { 1000, 0, int.MaxValue };
            ulong[] expectedValues = { 1000, 0, int.MaxValue };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);

            int[] overflowValues = { int.MinValue };
            VerifyThrowsViaObj<OverflowException, int>(Convert.ToUInt64, overflowValues);
        }

        [Test]
        public void FromInt64()
        {
            long[] testValues = { 1000, 0, long.MaxValue };
            ulong[] expectedValues = { 1000, 0, long.MaxValue };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);

            long[] overflowValues = { long.MinValue };
            VerifyThrowsViaObj<OverflowException, long>(Convert.ToUInt64, overflowValues);
        }

        [Test]
        public void FromObject()
        {
            object[] testValues = { null };
            ulong[] expectedValues = { 0 };
            VerifyFromObject(Convert.ToUInt64, Convert.ToUInt64, testValues, expectedValues);

            object[] invalidValues = { new object(), DateTime.Now };
            VerifyFromObjectThrows<InvalidCastException>(Convert.ToUInt64, Convert.ToUInt64, invalidValues);
        }

        [Test]
        public void FromSByte()
        {
            sbyte[] testValues = { 100, 0 };
            ulong[] expectedValues = { 100, 0 };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);

            sbyte[] overflowValues = { sbyte.MinValue };
            VerifyThrowsViaObj<OverflowException, sbyte>(Convert.ToUInt64, overflowValues);
        }

        [Test]
        public void FromSingle()
        {
            float[] testValues = { 1000.0f, 0.0f };
            ulong[] expectedValues = { 1000, 0 };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);

            float[] overflowValues = { float.MaxValue, -100.0f };
            VerifyThrowsViaObj<OverflowException, float>(Convert.ToUInt64, overflowValues);
        }

        [Test]
        public void FromString()
        {
            var ushortMaxValue = ushort.MaxValue;
            var uintMaxValue = uint.MaxValue;
            var longMaxValue = 9007199254740991;    // Number.MAX_SAFE_INTEGER

            string[] testValues = { "1000", "0", ushortMaxValue.ToString(), uintMaxValue.ToString(), longMaxValue.ToString(), "9007199254740990", null };
            ulong[] expectedValues = { 1000, 0, ushort.MaxValue, uint.MaxValue, (ulong)longMaxValue, (ulong) longMaxValue - 1, 0 };
            VerifyFromString(Convert.ToUInt64, Convert.ToUInt64, testValues, expectedValues);

            string[] overflowValues = { "-1", decimal.MaxValue.ToFixed(0, MidpointRounding.AwayFromZero) };
            VerifyFromStringThrows<OverflowException>(Convert.ToUInt64, Convert.ToUInt64, overflowValues);

            string[] formatExceptionValues = { "abba" };
            VerifyFromStringThrows<FormatException>(Convert.ToUInt64, Convert.ToUInt64, formatExceptionValues);
        }

        [Test]
        public void FromStringWithBase()
        {
            // As there is a limitation on the range of Long values in JS. We'll test the method agains Number.MIN/MAX_SAFE_INTEGER values
            var maxSafeValue = (ulong)9007199254740991;    // Number.MAX_SAFE_INTEGER

            string[] testValues = { null, null, null, null, "1FFFFFFFFFFFFF", "9007199254740991", "377777777777777777", "11111111111111111111111111111111111111111111111111111" };
            int[] testBases = { 10, 2, 8, 16, 16, 10, 8, 2 };
            ulong[] expectedValues = { 0, 0, 0, 0, maxSafeValue, maxSafeValue, maxSafeValue, maxSafeValue };
            VerifyFromStringWithBase(Wrappers.ConvertFromStrWithBase, testValues, testBases, expectedValues);

            string[] overflowValues = { "FFE0000000000001", "-9007199254740991", "1777400000000000000001", "1111111111100000000000000000000000000000000000000000000000000001", "9223372036854775808", "-9223372036854775809", "11111111111111111111111111111111111111111111111111111111111111111", "1FFFFffffFFFFffff", "7777777777777777777777777" };
            int[] overflowBases = { 16, 10, 8, 2, 10, 10, 2, 16, 8 };
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
            ulong[] expectedValues = { 100, 0 };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);
        }

        [Test]
        public void FromUInt32()
        {
            uint[] testValues = { uint.MinValue, uint.MaxValue };
            ulong[] expectedValues = { uint.MinValue, uint.MaxValue };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);
        }

        [Test]
        public void FromUInt64()
        {
            ulong[] testValues = { ulong.MaxValue, ulong.MinValue };
            ulong[] expectedValues = { ulong.MaxValue, ulong.MinValue };
            VerifyViaObj(Convert.ToUInt64, testValues, expectedValues);
        }
    }
}