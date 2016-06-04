using Bridge;

namespace System
{
    [External]
    [Constructor("Number")]
    public struct Int32 : IComparable, IComparable<Int32>, IEquatable<Int32>, IFormattable
    {
        private extern Int32(int i);

        [InlineConst]
        public const int MinValue = -2147483648;

        [InlineConst]
        public const int MaxValue = 2147483647;

        [Template("System.Int32.parse({s})")]
        public static extern int Parse(string s);

        [Template("System.Int32.parse({s}, {radix})")]
        public static extern int Parse(string s, int radix);

        [Template("System.Int32.tryParse({s}, {result})")]
        public static extern bool TryParse(string s, out int result);

        [Template("System.Int32.tryParse({s}, {result}, {radix})")]
        public static extern bool TryParse(string s, out int result, int radix);

        public extern string ToString(int radix);

        [Template("System.Int32.format({this}, {format})")]
        public extern string Format(string format);

        [Template("System.Int32.format({this}, {format}, {provider})")]
        public extern string Format(string format, IFormatProvider provider);

        [Template("System.Int32.format({this}, {format})")]
        public extern string ToString(string format);

        [Template("System.Int32.format({this}, {format}, {provider})")]
        public extern string ToString(string format, IFormatProvider provider);

        [Template("Bridge.compare({this}, {other})")]
        public extern int CompareTo(int other);

        [Template("Bridge.compare({this}, {obj})")]
        public extern int CompareTo(object obj);

        [Template("{this} === {other}")]
        public extern bool Equals(int other);
    }
}