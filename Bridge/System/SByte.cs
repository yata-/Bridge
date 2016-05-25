using Bridge;

namespace System
{
    [External]
    //[Name("System.SByte")]
    [Constructor("Number")]
    public struct SByte : IComparable, IComparable<SByte>, IEquatable<SByte>, IFormattable
    {
        private SByte(int i)
        {
        }

        [InlineConst]
        public const sbyte MinValue = -128;

        [InlineConst]
        public const sbyte MaxValue = 127;

        [Template("System.SByte.parse({s})")]
        public static sbyte Parse(string s)
        {
            return 0;
        }

        [Template("System.SByte.parse({s}, {radix})")]
        public static sbyte Parse(string s, int radix)
        {
            return 0;
        }

        [Template("System.SByte.tryParse({s}, {result})")]
        public static bool TryParse(string s, out sbyte result)
        {
            result = 0;
            return false;
        }

        [Template("System.SByte.tryParse({s}, {result}, {radix})")]
        public static bool TryParse(string s, out sbyte result, int radix)
        {
            result = 0;
            return false;
        }

        public string ToString(int radix)
        {
            return null;
        }

        [Template("System.SByte.format({this}, {format})")]
        public string Format(string format)
        {
            return null;
        }

        [Template("System.SByte.format({this}, {format}, {provider})")]
        public string Format(string format, IFormatProvider provider)
        {
            return null;
        }

        [Template("System.SByte.format({this}, {format})")]
        public string ToString(string format)
        {
            return null;
        }

        [Template("System.SByte.format({this}, {format}, {provider})")]
        public string ToString(string format, IFormatProvider provider)
        {
            return null;
        }

        [Template("Bridge.compare({this}, {other})")]
        public int CompareTo(sbyte other)
        {
            return 0;
        }

        [Template("Bridge.compare({this}, {obj})")]
        public int CompareTo(object obj)
        {
            return 0;
        }

        [Template("{this} === {other}")]
        public bool Equals(sbyte other)
        {
            return false;
        }
    }
}