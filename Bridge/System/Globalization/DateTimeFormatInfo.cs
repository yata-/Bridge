using Bridge;

namespace System.Globalization
{
    [External]
    [Namespace("Bridge")]
    public sealed class DateTimeFormatInfo : IFormatProvider, ICloneable, IBridgeClass
    {
        public extern DateTimeFormatInfo();

        [FieldProperty]
        public static extern DateTimeFormatInfo InvariantInfo
        {
            get;
        }

        [FieldProperty]
        [Name("amDesignator")]
        public extern string AMDesignator
        {
            get;
            set;
        }

        [FieldProperty]
        [Name("pmDesignator")]
        public extern string PMDesignator
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string DateSeparator
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string TimeSeparator
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string UniversalSortableDateTimePattern
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string SortableDateTimePattern
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string FullDateTimePattern
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string LongDatePattern
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string ShortDatePattern
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string LongTimePattern
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string ShortTimePattern
        {
            get;
            set;
        }

        [FieldProperty]
        public extern int FirstDayOfWeek
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string[] DayNames
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string[] AbbreviatedDayNames
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string[] ShortestDayNames
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string[] MonthNames
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string[] MonthGenitiveNames
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string[] AbbreviatedMonthNames
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string[] AbbreviatedMonthGenitiveNames
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string MonthDayPattern
        {
            get;
            set;
        }

        [FieldProperty]
        [Name("rfc1123Pattern")]
        public extern string RFC1123Pattern
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string YearMonthPattern
        {
            get;
            set;
        }

        [FieldProperty]
        public extern string RoundtripFormat
        {
            get;
            set;
        }

        public extern object GetFormat(Type formatType);

        public extern object Clone();

        [FieldProperty]
        public static extern DateTimeFormatInfo CurrentInfo
        {
            get;
        }

        public extern string GetAbbreviatedDayName(DayOfWeek dayofweek);

        public extern string GetAbbreviatedMonthName(int month);

        public extern string[] GetAllDateTimePatterns();

        public extern string[] GetAllDateTimePatterns(string format);

        public extern string GetDayName(DayOfWeek dayofweek);

        public extern string GetMonthName(int month);

        public extern string GetShortestDayName(DayOfWeek dayOfWeek);
    }
}