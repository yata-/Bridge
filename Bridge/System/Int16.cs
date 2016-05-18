using Bridge;

namespace System
{
    [External]
    [Name("Bridge.Int16")]
    [Constructor("Number")]
    public struct Int16 : IComparable, IComparable<Int16>, IEquatable<Int16>, IFormattable
    {
        private extern Int16(int i);

        [InlineConst]
        public const short MinValue = -32768;

        [InlineConst]
        public const short MaxValue = 32767;

        [Template("Bridge.Int16.parse({s})")]
        public static extern short Parse(string s);

        [Template("Bridge.Int16.parse({s}, {radix})")]
        public static extern short Parse(string s, int radix);

        [Template("Bridge.Int16.tryParse({s}, {result})")]
        public static extern bool TryParse(string s, out short result);

        [Template("Bridge.Int16.tryParse({s}, {result}, {radix})")]
        public static extern bool TryParse(string s, out short result, int radix);

        public extern string ToString(int radix);

        [Template("Bridge.Int16.format({this}, {format})")]
        public extern string Format(string format);

        [Template("Bridge.Int16.format({this}, {format}, {provider})")]
        public extern string Format(string format, IFormatProvider provider);

        [Template("Bridge.Int16.format({this}, {format})")]
        public extern string ToString(string format);

        [Template("Bridge.Int16.format({this}, {format}, {provider})")]
        public extern string ToString(string format, IFormatProvider provider);

        [Template("Bridge.compare({this}, {other})")]
        public extern int CompareTo(short other);

        [Template("Bridge.compare({this}, {obj})")]
        public extern int CompareTo(object obj);

        [Template("{this} === {other}")]
        public extern bool Equals(short other);
    }
}