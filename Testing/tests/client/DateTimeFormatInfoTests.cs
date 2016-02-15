using System;
using System.Globalization;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_DATETIME)]
    [TestFixture(TestNameFormat = "DateTimeFormatInfo - {0}")]
    public class DateTimeFormatInfoTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            var format = DateTimeFormatInfo.InvariantInfo;
            Assert.AreEqual(typeof(DateTimeFormatInfo).GetClassName(), "Bridge.DateTimeFormatInfo");
            Assert.True(format is DateTimeFormatInfo);
        }

        [Test]
        public void GetFormatWorks()
        {
            var format = DateTimeFormatInfo.InvariantInfo;
            Assert.AreEqual(format.GetFormat(typeof(int)), null);
            Assert.AreEqual(format.GetFormat(typeof(DateTimeFormatInfo)), format);
        }

        [Test]
        public void InvariantWorks()
        {
            var format = DateTimeFormatInfo.InvariantInfo;
            Assert.AreEqual(format.AMDesignator, "AM");
            Assert.AreEqual(format.PMDesignator, "PM");

            Assert.AreEqual(format.DateSeparator, "/");
            Assert.AreEqual(format.TimeSeparator, ":");

            Assert.AreEqual(format.FullDateTimePattern, "dddd, dd MMMM yyyy HH:mm:ss");
            Assert.AreEqual(format.YearMonthPattern, "yyyy MMMM");

            Assert.AreEqual(format.SortableDateTimePattern, "yyyy'-'MM'-'dd'T'HH':'mm':'ss");

            Assert.AreEqual(format.LongDatePattern, "dddd, dd MMMM yyyy");
            Assert.AreEqual(format.ShortDatePattern, "MM/dd/yyyy");

            Assert.AreEqual(format.LongTimePattern, "HH:mm:ss");
            Assert.AreEqual(format.ShortTimePattern, "HH:mm");

            Assert.AreEqual(format.FirstDayOfWeek, 0);
            Assert.AreDeepEqual(format.DayNames, new[] { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" });

            Assert.AreDeepEqual(format.MonthNames, new[] {
			  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
			  "November", "December", ""
			});
        }
    }
}
