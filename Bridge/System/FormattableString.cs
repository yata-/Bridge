using Bridge;

namespace System
{
    [External]
    public abstract class FormattableString : IFormattable
    {
        protected extern FormattableString();

        public abstract int ArgumentCount {[Name("getArgumentCount")] get; }
        public abstract string Format {[Name("getFormat")] get; }

        public abstract object GetArgument(int index);

        public abstract object[] GetArguments();

        public override extern string ToString();

        [Name("fmt")]
        public abstract string ToString(IFormatProvider formatProvider);

        extern string IFormattable.Format(string format, IFormatProvider formatProvider);

        [Template("{formattable}.fmt(System.Globalization.CultureInfo.invariantCulture)")]
        public static extern string Invariant(FormattableString formattable);
    }
}