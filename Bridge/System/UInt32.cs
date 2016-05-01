using Bridge;

namespace System
{
    [External]
    [Name("Bridge.UInt32")]
    [Constructor("Number")]
    public struct UInt32 : IComparable, IComparable<UInt32>, IEquatable<UInt32>, IFormattable
    {
        private UInt32(int i)
        {
        }

        [InlineConst]
        public const uint MinValue = 0;

        [InlineConst]
        public const uint MaxValue = 4294967295;

        [Template("Bridge.UInt32.parse({s})")]
        public static uint Parse(string s)
        {
            return 0;
        }

        [Template("Bridge.UInt32.parse({s}, {radix})")]
        public static uint Parse(string s, int radix)
        {
            return 0;
        }

        [Template("Bridge.UInt32.tryParse({s}, {result})")]
        public static bool TryParse(string s, out uint result)
        {
            result = 0;
            return false;
        }

        [Template("Bridge.UInt32.tryParse({s}, {result}, {radix})")]
        public static bool TryParse(string s, out uint result, int radix)
        {
            result = 0;
            return false;
        }

        public string ToString(int radix)
        {
            return null;
        }

        [Template("Bridge.UInt32.format({this}, {format})")]
        public string Format(string format)
        {
            return null;
        }

        [Template("Bridge.UInt32.format({this}, {format}, {provider})")]
        public string Format(string format, IFormatProvider provider)
        {
            return null;
        }

        [Template("Bridge.UInt32.format({this}, {format})")]
        public string ToString(string format)
        {
            return null;
        }

        [Template("Bridge.UInt32.format({this}, {format}, {provider})")]
        public string ToString(string format, IFormatProvider provider)
        {
            return null;
        }

        [Template("Bridge.compare({this}, {other})")]
        public int CompareTo(uint other)
        {
            return 0;
        }

        [Template("Bridge.compare({this}, {obj})")]
        public int CompareTo(object obj)
        {
            return 0;
        }

        [Template("{this} === {other}")]
        public bool Equals(uint other)
        {
            return false;
        }
    }
}