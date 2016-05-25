using Bridge;

namespace System
{
    [External]
    [Constructor("Number")]
    public struct Int32 : IComparable, IComparable<Int32>, IEquatable<Int32>, IFormattable
    {
        private Int32(int i)
        {
        }

        [InlineConst]
        public const int MinValue = -2147483648;

        [InlineConst]
        public const int MaxValue = 2147483647;

        [Template("System.Int32.parse({s})")]
        public static int Parse(string s)
        {
            return 0;
        }

        [Template("System.Int32.parse({s}, {radix})")]
        public static int Parse(string s, int radix)
        {
            return 0;
        }

        [Template("System.Int32.tryParse({s}, {result})")]
        public static bool TryParse(string s, out int result)
        {
            result = 0;
            return false;
        }

        [Template("System.Int32.tryParse({s}, {result}, {radix})")]
        public static bool TryParse(string s, out int result, int radix)
        {
            result = 0;
            return false;
        }

        public string ToString(int radix)
        {
            return null;
        }

        [Template("System.Int32.format({this}, {format})")]
        public string Format(string format)
        {
            return null;
        }

        [Template("System.Int32.format({this}, {format}, {provider})")]
        public string Format(string format, IFormatProvider provider)
        {
            return null;
        }

        [Template("System.Int32.format({this}, {format})")]
        public string ToString(string format)
        {
            return null;
        }

        [Template("System.Int32.format({this}, {format}, {provider})")]
        public string ToString(string format, IFormatProvider provider)
        {
            return null;
        }

        [Template("Bridge.compare({this}, {other})")]
        public int CompareTo(int other)
        {
            return 0;
        }

        [Template("Bridge.compare({this}, {obj})")]
        public int CompareTo(object obj)
        {
            return 0;
        }

        [Template("{this} === {other}")]
        public bool Equals(int other)
        {
            return false;
        }
    }
}