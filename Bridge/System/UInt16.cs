using Bridge;

namespace System
{
    [External]
    [Name("Bridge.UInt16")]
    [Constructor("Number")]
    public struct UInt16 : IComparable, IComparable<UInt16>, IEquatable<UInt16>, IFormattable
    {
        private extern UInt16(int i);

        [InlineConst]
        public const ushort MinValue = 0;

        [InlineConst]
        public const ushort MaxValue = 65535;

        [Template("Bridge.UInt16.parse({s})")]
        public static extern ushort Parse(string s);

        [Template("Bridge.UInt16.parse({s}, {radix})")]
        public static extern ushort Parse(string s, int radix);

        [Template("Bridge.UInt16.tryParse({s}, {result})")]
        public static extern bool TryParse(string s, out ushort result);

        [Template("Bridge.UInt16.tryParse({s}, {result}, {radix})")]
        public static extern bool TryParse(string s, out ushort result, int radix);

        public extern string ToString(int radix);

        [Template("Bridge.UInt16.format({this}, {format})")]
        public extern string Format(string format);

        [Template("Bridge.UInt16.format({this}, {format}, {provider})")]
        public extern string Format(string format, IFormatProvider provider);

        [Template("Bridge.UInt16.format({this}, {format})")]
        public extern string ToString(string format);

        [Template("Bridge.UInt16.format({this}, {format}, {provider})")]
        public extern string ToString(string format, IFormatProvider provider);

        [Template("Bridge.compare({this}, {other})")]
        public extern int CompareTo(ushort other);

        [Template("Bridge.compare({this}, {obj})")]
        public extern int CompareTo(object obj);

        [Template("{this} === {other}")]
        public extern bool Equals(ushort other);
    }
}