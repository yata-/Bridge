using Bridge;

namespace System
{
    [External]
    //[Name("System.UInt16")]
    [Constructor("Number")]
    public struct UInt16 : IComparable, IComparable<UInt16>, IEquatable<UInt16>, IFormattable
    {
        private UInt16(int i)
        {
        }

        [InlineConst]
        public const ushort MinValue = 0;

        [InlineConst]
        public const ushort MaxValue = 65535;

        [Template("System.UInt16.parse({s})")]
        public static ushort Parse(string s)
        {
            return 0;
        }

        [Template("System.UInt16.parse({s}, {radix})")]
        public static ushort Parse(string s, int radix)
        {
            return 0;
        }

        [Template("System.UInt16.tryParse({s}, {result})")]
        public static bool TryParse(string s, out ushort result)
        {
            result = 0;
            return false;
        }

        [Template("System.UInt16.tryParse({s}, {result}, {radix})")]
        public static bool TryParse(string s, out ushort result, int radix)
        {
            result = 0;
            return false;
        }

        public string ToString(int radix)
        {
            return null;
        }

        [Template("System.UInt16.format({this}, {format})")]
        public string Format(string format)
        {
            return null;
        }

        [Template("System.UInt16.format({this}, {format}, {provider})")]
        public string Format(string format, IFormatProvider provider)
        {
            return null;
        }

        [Template("System.UInt16.format({this}, {format})")]
        public string ToString(string format)
        {
            return null;
        }

        [Template("System.UInt16.format({this}, {format}, {provider})")]
        public string ToString(string format, IFormatProvider provider)
        {
            return null;
        }

        [Template("Bridge.compare({this}, {other})")]
        public int CompareTo(ushort other)
        {
            return 0;
        }

        [Template("Bridge.compare({this}, {obj})")]
        public int CompareTo(object obj)
        {
            return 0;
        }

        [Template("{this} === {other}")]
        public bool Equals(ushort other)
        {
            return false;
        }
    }
}