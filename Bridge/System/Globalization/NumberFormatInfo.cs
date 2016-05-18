using Bridge;

namespace System.Globalization
{
    [Namespace("Bridge")]
    [External]
    public sealed class NumberFormatInfo : IFormatProvider, ICloneable, IBridgeClass
    {
        public extern NumberFormatInfo();

        [FieldProperty]
        public static extern NumberFormatInfo InvariantInfo
        {
            get;
        }

        [Name("nanSymbol")]
        [FieldProperty]
        public extern string NaNSymbol
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string NegativeSign
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string PositiveSign
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string NegativeInfinitySymbol
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string PositiveInfinitySymbol
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string PercentSymbol
        {
            get;
            set;
        }

        [FieldProperty]
        public extern int[] PercentGroupSizes
        {
            get;
            set;
        }

        [FieldProperty]
        public extern int PercentDecimalDigits
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string PercentDecimalSeparator
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string PercentGroupSeparator
        {
            get;
            set;
        }

        [FieldProperty]
        public extern int PercentPositivePattern
        {
            get;
            set;
        }

        [FieldProperty]
        public extern int PercentNegativePattern
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string CurrencySymbol
        {
            get;
            set;
        }

        [FieldProperty]
        public extern int[] CurrencyGroupSizes
        {
            get;
            set;
        }

        [FieldProperty]
        public extern int CurrencyDecimalDigits
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string CurrencyDecimalSeparator
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string CurrencyGroupSeparator
        {
            get;
            set;
        }

        [FieldProperty]
        public extern int CurrencyPositivePattern
        {
            get;
            set;
        }

        [FieldProperty]
        public extern int CurrencyNegativePattern
        {
            get;
            set;
        }

        [FieldProperty]
        public extern int[] NumberGroupSizes
        {
            get;
            set;
        }

        [FieldProperty]
        public extern int NumberDecimalDigits
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string NumberDecimalSeparator
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string NumberGroupSeparator
        {
            get;
            set;
        }

        public extern object GetFormat(Type formatType);

        public extern object Clone();

        [FieldProperty]
        public static extern NumberFormatInfo CurrentInfo
        {
            get;
        }
    }
}