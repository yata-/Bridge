using Bridge;

namespace System
{
    [External]
    [Constructor("Number")]
    public struct Byte : IComparable, IComparable<Byte>, IEquatable<Byte>, IFormattable
    {
        private Byte(int i)
        {
        }

        [InlineConst]
        public const byte MinValue = 0;

        [InlineConst]
        public const byte MaxValue = 255;

        [Template("System.Byte.parse({s})")]
        public static byte Parse(string s)
        {
            return 0;
        }

        [Template("System.Byte.parse({s}, {radix})")]
        public static byte Parse(string s, int radix)
        {
            return 0;
        }

        [Template("System.Byte.tryParse({s}, {result})")]
        public static bool TryParse(string s, out byte result)
        {
            result = 0;
            return false;
        }

        [Template("System.Byte.tryParse({s}, {result}, {radix})")]
        public static bool TryParse(string s, out byte result, int radix)
        {
            result = 0;
            return false;
        }

        public string ToString(int radix)
        {
            return null;
        }

        [Template("System.Byte.format({this}, {format})")]
        public string Format(string format)
        {
            return null;
        }

        [Template("System.Byte.format({this}, {format}, {provider})")]
        public string Format(string format, IFormatProvider provider)
        {
            return null;
        }

        [Template("System.Byte.format({this}, {format})")]
        public string ToString(string format)
        {
            return null;
        }

        [Template("System.Byte.format({this}, {format}, {provider})")]
        public string ToString(string format, IFormatProvider provider)
        {
            return null;
        }

        [Template("Bridge.compare({this}, {other})")]
        public int CompareTo(byte other)
        {
            return 0;
        }

        [Template("Bridge.compare({this}, {obj})")]
        public int CompareTo(object obj)
        {
            return 0;
        }

        [Template("{this} === {other}")]
        public bool Equals(byte other)
        {
            return false;
        }
    }
}