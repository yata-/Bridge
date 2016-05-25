using Bridge;

namespace System
{
    [External]
    [Constructor("Number")]
    public struct Char : IComparable, IComparable<Char>, IEquatable<Char>, IFormattable
    {
        private Char(int i)
        {
        }

        [InlineConst]
        public const char MinValue = '\0';

        [InlineConst]
        public const char MaxValue = '\xFFFF';

        [Template("System.Char.format({this}, {format})")]
        public string Format(string format)
        {
            return null;
        }

        [Template("System.Char.format({this}, {format}, {provider})")]
        public string Format(string format, IFormatProvider provider)
        {
            return null;
        }

        [Template("System.Char.charCodeAt({s}, 0)")]
        public static char Parse(string s)
        {
            return '\0';
        }

        [Template("String.fromCharCode({this})")]
        public override string ToString()
        {
            return null;
        }

        [Template("System.Char.format({this}, {format})")]
        public string ToString(string format)
        {
            return null;
        }

        [Template("System.Char.format({this}, {format}, {provider})")]
        public string ToString(string format, IFormatProvider provider)
        {
            return null;
        }

        [Template("Bridge.compare({this}, {other})")]
        public int CompareTo(char other)
        {
            return 0;
        }

        [Template("Bridge.compare({this}, {obj})")]
        public int CompareTo(object obj)
        {
            return 0;
        }

        [Template("{this} === {other}")]
        public bool Equals(char other)
        {
            return false;
        }

        [Template("Bridge.isLower({ch})")]
        public static bool IsLower(char ch)
        {
            return false;
        }

        [Template("Bridge.isUpper({ch})")]
        public static bool IsUpper(char ch)
        {
            return false;
        }

        [Template("String.fromCharCode({ch}).toLowerCase().charCodeAt(0)")]
        public static char ToLower(char ch)
        {
            return (char)0;
        }

        [Template("String.fromCharCode({ch}).toUpperCase().charCodeAt(0)")]
        public static char ToUpper(char ch)
        {
            return (char)0;
        }

        [Template("System.Char.isLetter({ch})")]
        public static bool IsLetter(char ch)
        {
            return false;
        }

        [Template("System.Char.isLetter({s}.charCodeAt({index}))")]
        public static bool IsLetter(string s, int index)
        {
            return false;
        }

        [Template("System.Char.isDigit({ch})")]
        public static bool IsDigit(char ch)
        {
            return false;
        }

        [Template("System.Char.isDigit({s}.charCodeAt({index}))")]
        public static bool IsDigit(string s, int index)
        {
            return false;
        }

        [Template("(System.Char.isDigit({ch}) || System.Char.isLetter({ch}))")]
        public static bool IsLetterOrDigit(char ch)
        {
            return false;
        }

        [Template("(System.Char.isDigit({s}.charCodeAt({index})) || System.Char.isLetter({s}.charCodeAt({index})))")]
        public static bool IsLetterOrDigit(string s, int index)
        {
            return false;
        }

        [Template("System.Char.isWhiteSpace(String.fromCharCode({ch}))")]
        public static bool IsWhiteSpace(char ch)
        {
            return false;
        }

        [Template("System.Char.isWhiteSpace({s}.charAt({index}))")]
        public static bool IsWhiteSpace(string s, int index)
        {
            return false;
        }

        [Template("System.Char.isHighSurrogate({ch})")]
        public static bool IsHighSurrogate(char ch)
        {
            return false;
        }

        [Template("System.Char.isHighSurrogate({s}.charCodeAt({index}))")]
        public static bool IsHighSurrogate(string s, int index)
        {
            return false;
        }

        [Template("System.Char.isLowSurrogate({ch})")]
        public static bool IsLowSurrogate(char ch)
        {
            return false;
        }

        [Template("System.Char.isLowSurrogate({s}.charCodeAt({index}))")]
        public static bool IsLowSurrogate(string s, int index)
        {
            return false;
        }

        [Template("System.Char.isSurrogate({ch})")]
        public static bool IsSurrogate(char ch)
        {
            return false;
        }

        [Template("System.Char.isSurrogate({s}.charCodeAt({index}))")]
        public static bool IsSurrogate(string s, int index)
        {
            return false;
        }

        [Template("(System.Char.isHighSurrogate({ch1}) && System.Char.isLowSurrogate({ch2}))")]
        public static bool IsSurrogatePair(char ch1, char ch2)
        {
            return false;
        }

        [Template("(System.Char.isHighSurrogate({s}.charCodeAt({index})) && System.Char.isLowSurrogate({s}.charCodeAt({index}+1)))")]
        public static bool IsSurrogatePair(string s, int index)
        {
            return false;
        }

        [Template("System.Char.isSymbol({ch})")]
        public static bool IsSymbol(char ch)
        {
            return false;
        }

        [Template("System.Char.isSymbol({s}.charCodeAt({index}))")]
        public static bool IsSymbol(string s, int index)
        {
            return false;
        }

        [Template("System.Char.isSeparator({ch})")]
        public static bool IsSeparator(char ch)
        {
            return false;
        }

        [Template("System.Char.isSeparator({s}.charCodeAt({index}))")]
        public static bool IsSeparator(string s, int index)
        {
            return false;
        }

        [Template("System.Char.isPunctuation({ch})")]
        public static bool IsPunctuation(char ch)
        {
            return false;
        }

        [Template("System.Char.isPunctuation({s}.charCodeAt({index}))")]
        public static bool IsPunctuation(string s, int index)
        {
            return false;
        }

        [Template("System.Char.isNumber({ch})")]
        public static bool IsNumber(char ch)
        {
            return false;
        }

        [Template("System.Char.isNumber({s}.charCodeAt({index}))")]
        public static bool IsNumber(string s, int index)
        {
            return false;
        }

        [Template("System.Char.isControl({ch})")]
        public static bool IsControl(char ch)
        {
            return false;
        }

        [Template("System.Char.isControl({s}.charCodeAt({index}))")]
        public static bool IsControl(string s, int index)
        {
            return false;
        }
    }
}