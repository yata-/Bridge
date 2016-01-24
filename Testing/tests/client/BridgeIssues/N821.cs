using System;
using System.Globalization;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#821]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#821 - {0}")]
    public class Bridge821
    {
        [Test(ExpectedCount = 9)]
        public static void TestUseCase()
        {
            var defaultCulture = CultureInfo.CurrentCulture;

            try
            {
                var d = 443534569034876.12345678901235m;
                Assert.AreEqual(d.ToString(), "443534569034876.12345678901235");
                Assert.AreEqual(d.ToString(CultureInfo.GetCultureInfo("ru-RU")), "443534569034876,12345678901235");
                CultureInfo.CurrentCulture = CultureInfo.GetCultureInfo("ru-RU");
                Assert.AreEqual(d.ToString(), "443534569034876,12345678901235");

                CultureInfo.CurrentCulture = defaultCulture;

                double d1 = 1.25;
                Assert.AreEqual(d1.ToString(), "1.25");
                Assert.AreEqual(d1.ToString(CultureInfo.GetCultureInfo("ru-RU")), "1,25");
                CultureInfo.CurrentCulture = CultureInfo.GetCultureInfo("ru-RU");
                Assert.AreEqual(d1.ToString(), "1,25");

                CultureInfo.CurrentCulture = defaultCulture;

                float f = 1.25f;
                Assert.AreEqual(f.ToString(), "1.25");
                Assert.AreEqual(f.ToString(CultureInfo.GetCultureInfo("ru-RU")), "1,25");
                CultureInfo.CurrentCulture = CultureInfo.GetCultureInfo("ru-RU");
                Assert.AreEqual(f.ToString(), "1,25");
            }
            finally
            {
                CultureInfo.CurrentCulture = defaultCulture;
            }
        }
    }
}