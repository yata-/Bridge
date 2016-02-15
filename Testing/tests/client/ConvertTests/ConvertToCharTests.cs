// The source is licensed to the .NET Foundation under the MIT license:
// https://github.com/dotnet/corefx/blob/master/src/System.Runtime.Extensions/tests/System/Convert.ToChar.cs
// https://github.com/dotnet/corefx/blob/master/LICENSE

using System;
using Bridge.Test;

namespace Bridge.ClientTest.ConvertTests
{
    [Category(Constants.MODULE_CONVERT)]
    [TestFixture(TestNameFormat = "Convert.ToChar - {0}")]
    public class ConvertToCharTests : ConvertTestBase<char>
    {
        protected static class Wrappers
        {
            // TODO: These wrappers help to avoid issues #689 and #743. They can be deleted when issues are fixed.
            // For more infromation see comment: https://github.com/bridgedotnet/Bridge/issues/743#issuecomment-183905400

            public static char ConvertToCharWrapper(object value)
            {
                return Convert.ToChar(value);
            }

            public static char ConvertToCharWrapper(bool value)
            {
                return Convert.ToChar(value);
            }

            public static char ConvertToCharWrapper(char value)
            {
                return Convert.ToChar(value);
            }

            public static char ConvertToCharWrapper(sbyte value)
            {
                return Convert.ToChar(value);
            }

            public static char ConvertToCharWrapper(byte value)
            {
                return Convert.ToChar(value);
            }

            public static char ConvertToCharWrapper(short value)
            {
                return Convert.ToChar(value);
            }

            public static char ConvertToCharWrapper(ushort value)
            {
                return Convert.ToChar(value);
            }

            public static char ConvertToCharWrapper(int value)
            {
                return Convert.ToChar(value);
            }

            public static char ConvertToCharWrapper(uint value)
            {
                return Convert.ToChar(value);
            }

            public static char ConvertToCharWrapper(long value)
            {
                return Convert.ToChar(value);
            }

            public static char ConvertToCharWrapper(ulong value)
            {
                return Convert.ToChar(value);
            }

            public static char ConvertToCharWrapper(string value)
            {
                return Convert.ToChar(value);
            }

            public static char ConvertToCharWrapper(float value)
            {
                return Convert.ToChar(value);
            }

            public static char ConvertToCharWrapper(double value)
            {
                return Convert.ToChar(value);
            }

            public static char ConvertToCharWrapper(decimal value)
            {
                return Convert.ToChar(value);
            }

            public static char ConvertToCharWrapper(DateTime value)
            {
                return Convert.ToChar(value);
            }

            public static char ConvertToCharWrapper(object value, IFormatProvider provider)
            {
                return Convert.ToChar(value, provider);
            }

            public static char ConvertToCharWrapper(string value, IFormatProvider provider)
            {
                return Convert.ToChar(value, provider);
            }

        }

        [Test]
        public void FromByte()
        {
            byte[] testValues = { byte.MaxValue, byte.MinValue };
            char[] expectedValues = { (char)byte.MaxValue, (char)byte.MinValue };
            Verify(Wrappers.ConvertToCharWrapper, testValues, expectedValues);
        }

        [Test]
        public void FromChar()
        {
            char[] testValues = { char.MaxValue, char.MinValue, 'b' };
            char[] expectedValues = { char.MaxValue, char.MinValue, 'b' };
            Verify(Wrappers.ConvertToCharWrapper, testValues, expectedValues);
        }

        [Test]
        public void FromDecimal()
        {
            decimal[] invalidValues = { 0m, decimal.MinValue, decimal.MaxValue };
            VerifyThrows<InvalidCastException, decimal>(Wrappers.ConvertToCharWrapper, invalidValues);
        }

        [Test]
        public void FromDecimalViaObject()
        {
            object[] invalidValues = { 0m, decimal.MinValue, decimal.MaxValue };
            VerifyFromObjectThrows<InvalidCastException>(Wrappers.ConvertToCharWrapper, Wrappers.ConvertToCharWrapper, invalidValues);
        }

        [Test]
        public void FromDouble()
        {
            double[] invalidValues = { 0.0, double.MinValue, double.MaxValue };
            VerifyThrows<InvalidCastException, double>(Wrappers.ConvertToCharWrapper, invalidValues);
        }

        [Test]
        public void FromDoubleViaObject()
        {
            object[] invalidValues = { 0.0, double.MinValue, double.MaxValue };
            VerifyFromObjectThrows<InvalidCastException>(Wrappers.ConvertToCharWrapper, Wrappers.ConvertToCharWrapper, invalidValues);
        }

        [Test]
        public void FromInt16()
        {
            short[] testValues = { short.MaxValue, 0 };
            char[] expectedValues = { (char)short.MaxValue, '\0' };
            Verify(Wrappers.ConvertToCharWrapper, testValues, expectedValues);

            short[] overflowValues = { short.MinValue, -1000 };
            VerifyThrows<OverflowException, short>(Wrappers.ConvertToCharWrapper, overflowValues);
        }

        [Test]
        public void FromInt32()
        {
            int[] testValues = { char.MaxValue, char.MinValue };
            char[] expectedValues = { char.MaxValue, char.MinValue };
            Verify(Wrappers.ConvertToCharWrapper, testValues, expectedValues);

            int[] overflowValues = { int.MinValue, int.MaxValue, (int)ushort.MaxValue + 1, -1000 };
            VerifyThrows<OverflowException, int>(Wrappers.ConvertToCharWrapper, overflowValues);
        }

        [Test]
        public void FromInt64()
        {
            long[] testValues = { 0, 98, ushort.MaxValue };
            char[] expectedValues = { '\0', 'b', char.MaxValue };
            Verify(Wrappers.ConvertToCharWrapper, testValues, expectedValues);

            long[] overflowValues = { long.MinValue, long.MaxValue, -1 };
            VerifyThrows<OverflowException, long>(Wrappers.ConvertToCharWrapper, overflowValues);
        }

        [Test]
        public void FromObject()
        {
            object[] testValues = { null };
            char[] expectedValues = { '\0' };
            Verify(Wrappers.ConvertToCharWrapper, testValues, expectedValues);

            object[] invalidValues = { new object(), DateTime.Now };
            VerifyThrows<InvalidCastException, object>(Wrappers.ConvertToCharWrapper, invalidValues);
        }

        [Test]
        public void FromSByte()
        {
            sbyte[] testValues = { sbyte.MaxValue, 0 };
            char[] expectedValues = { (char)sbyte.MaxValue, '\0' };
            Verify(Wrappers.ConvertToCharWrapper, testValues, expectedValues);

            sbyte[] overflowValues = { sbyte.MinValue, -100, -1 };
            VerifyThrows<OverflowException, sbyte>(Wrappers.ConvertToCharWrapper, overflowValues);
        }

        [Test]
        public void FromSingle()
        {
            float[] invalidValues = { 0f, float.MinValue, float.MaxValue };
            VerifyThrows<InvalidCastException, float>(Wrappers.ConvertToCharWrapper, invalidValues);
        }

        [Test]
        public void FromSingleViaObject()
        {
            object[] invalidValues = { 0f, float.MinValue, float.MaxValue };
            VerifyFromObjectThrows<InvalidCastException>(Wrappers.ConvertToCharWrapper, Wrappers.ConvertToCharWrapper, invalidValues);
        }

        [Test]
        public void FromString()
        {
            string[] testValues = { "a", "T", "z", "a" };
            char[] expectedValues = { 'a', 'T', 'z', 'a' };
            VerifyFromString(Wrappers.ConvertToCharWrapper, Wrappers.ConvertToCharWrapper, testValues, expectedValues);

            string[] formatExceptionValues = { string.Empty, "ab" };
            VerifyFromStringThrows<FormatException>(Wrappers.ConvertToCharWrapper, Wrappers.ConvertToCharWrapper, formatExceptionValues);
            VerifyFromStringThrows<ArgumentNullException>(Wrappers.ConvertToCharWrapper, Wrappers.ConvertToCharWrapper, new string[] { null });
        }

        [Test]
        public void FromUInt16()
        {
            ushort[] testValues = { 0, 98, ushort.MaxValue };
            char[] expectedValues = { '\0', 'b', char.MaxValue };
            Verify(Wrappers.ConvertToCharWrapper, testValues, expectedValues);
        }

        [Test]
        public void FromUInt32()
        {
            uint[] testValues = { ushort.MaxValue, 0 };
            char[] expectedValues = { (char)ushort.MaxValue, '\0' };
            Verify(Wrappers.ConvertToCharWrapper, testValues, expectedValues);

            uint[] overflowValues = { uint.MaxValue };
            VerifyThrows<OverflowException, uint>(Wrappers.ConvertToCharWrapper, overflowValues);
        }

        [Test]
        public void FromUInt64()
        {
            ulong[] testValues = { 0, 98, ushort.MaxValue };
            char[] expectedValues = { '\0', 'b', char.MaxValue };
            Verify(Wrappers.ConvertToCharWrapper, testValues, expectedValues);

            ulong[] overflowValues = { ulong.MaxValue, (ulong)ushort.MaxValue + 1 };
            VerifyThrows<OverflowException, ulong>(Wrappers.ConvertToCharWrapper, overflowValues);
        }
    }
}