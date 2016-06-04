using Bridge;

namespace System.Globalization
{
    [External]
    public sealed class CultureInfo : IFormatProvider, ICloneable, IBridgeClass
    {
        public extern CultureInfo(string name);

        [Name("getCultureInfo")]
        public static extern CultureInfo GetCultureInfo(string name);

        [Name("getCultureInfo")]
        public static extern CultureInfo CreateSpecificCulture(string name);

        public static extern CultureInfo[] GetCultures();

        public static extern CultureInfo CurrentCulture
        {
            get;
            set;
        }

        [FieldProperty]
        public extern DateTimeFormatInfo DateTimeFormat
        {
            get;
            set;
        }

        [FieldProperty]
        public static extern CultureInfo InvariantCulture
        {
            get;
        }

        [FieldProperty]
        public extern string Name
        {
            get;
        }

        [FieldProperty]
        public extern string EnglishName
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string NativeName
        {
            get;
            set;
        }

        [FieldProperty]
        public NumberFormatInfo NumberFormat
        {
            get;
            set;
        }

        public extern object GetFormat(Type formatType);

        public extern object Clone();
    }
}