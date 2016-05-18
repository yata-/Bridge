using Bridge;

namespace System
{
    [External]
    [Name("Bridge.Char")]
    [Constructor("Number")]
    public struct Char : IComparable, IComparable<Char>, IEquatable<Char>, IFormattable
    {
        private extern Char(int i);

        [InlineConst]
        public const char MinValue = '\0';

        [InlineConst]
        public const char MaxValue = '\xFFFF';

        [Template("Bridge.Char.format({this}, {format})")]
        public extern string Format(string format);

        [Template("Bridge.Char.format({this}, {format}, {provider})")]
        public extern string Format(string format, IFormatProvider provider);

        [Template("Bridge.Char.charCodeAt({s}, 0)")]
        public static extern char Parse(string s);

        [Template("String.fromCharCode({this})")]
        public override extern string ToString();

        [Template("Bridge.Char.format({this}, {format})")]
        public extern string ToString(string format);

        [Template("Bridge.Char.format({this}, {format}, {provider})")]
        public extern string ToString(string format, IFormatProvider provider);

        [Template("Bridge.compare({this}, {other})")]
        public extern int CompareTo(char other);

        [Template("Bridge.compare({this}, {obj})")]
        public extern int CompareTo(object obj);

        [Template("{this} === {other}")]
        public extern bool Equals(char other);

        [Template("Bridge.isLower({ch})")]
        public static extern bool IsLower(char ch);

        [Template("Bridge.isUpper({ch})")]
        public static extern bool IsUpper(char ch);

        [Template("String.fromCharCode({ch}).toLowerCase().charCodeAt(0)")]
        public static extern char ToLower(char ch);

        [Template("String.fromCharCode({ch}).toUpperCase().charCodeAt(0)")]
        public static extern char ToUpper(char ch);

        [Template("Bridge.Char.isLetter({ch})")]
        public static extern bool IsLetter(char ch);

        [Template("Bridge.Char.isLetter({s}.charCodeAt({index}))")]
        public static extern bool IsLetter(string s, int index);

        [Template("Bridge.Char.isDigit({ch})")]
        public static extern bool IsDigit(char ch);

        [Template("Bridge.Char.isDigit({s}.charCodeAt({index}))")]
        public static extern bool IsDigit(string s, int index);

        [Template("(Bridge.Char.isDigit({ch}) || Bridge.Char.isLetter({ch}))")]
        public static extern bool IsLetterOrDigit(char ch);

        [Template("(Bridge.Char.isDigit({s}.charCodeAt({index})) || Bridge.Char.isLetter({s}.charCodeAt({index})))")]
        public static extern bool IsLetterOrDigit(string s, int index);

        [Template("Bridge.Char.isWhiteSpace(String.fromCharCode({ch}))")]
        public static extern bool IsWhiteSpace(char ch);

        [Template("Bridge.Char.isWhiteSpace({s}.charAt({index}))")]
        public static extern bool IsWhiteSpace(string s, int index);

        [Template("Bridge.Char.isHighSurrogate({ch})")]
        public static extern bool IsHighSurrogate(char ch);

        [Template("Bridge.Char.isHighSurrogate({s}.charCodeAt({index}))")]
        public static extern bool IsHighSurrogate(string s, int index);

        [Template("Bridge.Char.isLowSurrogate({ch})")]
        public static extern bool IsLowSurrogate(char ch);

        [Template("Bridge.Char.isLowSurrogate({s}.charCodeAt({index}))")]
        public static extern bool IsLowSurrogate(string s, int index);

        [Template("Bridge.Char.isSurrogate({ch})")]
        public static extern bool IsSurrogate(char ch);

        [Template("Bridge.Char.isSurrogate({s}.charCodeAt({index}))")]
        public static extern bool IsSurrogate(string s, int index);

        [Template("(Bridge.Char.isHighSurrogate({ch1}) && Bridge.Char.isLowSurrogate({ch2}))")]
        public static extern bool IsSurrogatePair(char ch1, char ch2);

        [Template("(Bridge.Char.isHighSurrogate({s}.charCodeAt({index})) && Bridge.Char.isLowSurrogate({s}.charCodeAt({index}+1)))")]
        public static extern bool IsSurrogatePair(string s, int index);

        [Template("Bridge.Char.isSymbol({ch})")]
        public static extern bool IsSymbol(char ch);

        [Template("Bridge.Char.isSymbol({s}.charCodeAt({index}))")]
        public static extern bool IsSymbol(string s, int index);

        [Template("Bridge.Char.isSeparator({ch})")]
        public static extern bool IsSeparator(char ch);

        [Template("Bridge.Char.isSeparator({s}.charCodeAt({index}))")]
        public static extern bool IsSeparator(string s, int index);

        [Template("Bridge.Char.isPunctuation({ch})")]
        public static extern bool IsPunctuation(char ch);

        [Template("Bridge.Char.isPunctuation({s}.charCodeAt({index}))")]
        public static extern bool IsPunctuation(string s, int index);

        [Template("Bridge.Char.isNumber({ch})")]
        public static extern bool IsNumber(char ch);

        [Template("Bridge.Char.isNumber({s}.charCodeAt({index}))")]
        public static extern bool IsNumber(string s, int index);

        [Template("Bridge.Char.isControl({ch})")]
        public static extern bool IsControl(char ch);

        [Template("Bridge.Char.isControl({s}.charCodeAt({index}))")]
        public static extern bool IsControl(string s, int index);
    }
}