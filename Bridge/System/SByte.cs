using Bridge;

namespace System
{
    [External]
    [Name("Bridge.SByte")]
    [Constructor("Number")]
    public struct SByte : IComparable, IComparable<SByte>, IEquatable<SByte>, IFormattable
    {
        private extern SByte(int i);

        [InlineConst]
        public const sbyte MinValue = -128;

        [InlineConst]
        public const sbyte MaxValue = 127;

        [Template("Bridge.SByte.parse({s})")]
        public static extern sbyte Parse(string s);

        [Template("Bridge.SByte.parse({s}, {radix})")]
        public static extern sbyte Parse(string s, int radix);

        [Template("Bridge.SByte.tryParse({s}, {result})")]
        public static extern bool TryParse(string s, out sbyte result);

        [Template("Bridge.SByte.tryParse({s}, {result}, {radix})")]
        public static extern bool TryParse(string s, out sbyte result, int radix);

        public extern string ToString(int radix);

        [Template("Bridge.SByte.format({this}, {format})")]
        public extern string Format(string format);

        [Template("Bridge.SByte.format({this}, {format}, {provider})")]
        public extern string Format(string format, IFormatProvider provider);

        [Template("Bridge.SByte.format({this}, {format})")]
        public extern string ToString(string format);

        [Template("Bridge.SByte.format({this}, {format}, {provider})")]
        public extern string ToString(string format, IFormatProvider provider);

        [Template("Bridge.compare({this}, {other})")]
        public extern int CompareTo(sbyte other);

        [Template("Bridge.compare({this}, {obj})")]
        public extern int CompareTo(object obj);

        [Template("{this} === {other}")]
        public extern bool Equals(sbyte other);
    }
}