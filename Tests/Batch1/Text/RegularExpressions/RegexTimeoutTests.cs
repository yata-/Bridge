using System;
using System.Text.RegularExpressions;
using Bridge.Test;

namespace Bridge.ClientTest.Text.RegularExpressions
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex Timeouts - {0}")]
    public class RegexTimeoutTests : RegexTestBase
    {
        private static readonly string Pattern = "([0-9a-zA-Z]{1})+";
        private static readonly int ShortTimeoutMs = 1;
        private static readonly int LongTimeoutMs = 3000;
        private static readonly string LongText;

        static RegexTimeoutTests()
        {
            LongText = string.Empty;
            for (int i = 0; i < 10000; i++)
            {
                LongText += "TestStringForTimeout";
            }
        }

        [Test]
        public void RegexTimeoutValidationWorks()
        {
            var rgx = new Regex("fakePattern");
            Assert.AreEqual(TimeSpan.FromMilliseconds(-1), rgx.MatchTimeout, "Default Timeout #1");

            rgx = new Regex("fakePattern", RegexOptions.None);
            Assert.AreEqual(TimeSpan.FromMilliseconds(-1), rgx.MatchTimeout, "Default Timeout #2");

            rgx = new Regex("fakePattern", RegexOptions.None, TimeSpan.FromSeconds(123));
            Assert.AreEqual(TimeSpan.FromSeconds(123), rgx.MatchTimeout, "Specified Timeout");

            Assert.Throws<ArgumentOutOfRangeException>(() => new Regex("fakePattern", RegexOptions.None, TimeSpan.FromMilliseconds(-5)));
        }

        [Test]
        public void RegexIsMatchWorksWithShortTimeout()
        {
            var rgx = new Regex(Pattern, RegexOptions.None, TimeSpan.FromMilliseconds(ShortTimeoutMs));
            Assert.Throws(() =>
            {
                rgx.IsMatch(LongText);
            }, err => err is RegexMatchTimeoutException);
        }

        [Test(ExpectedCount = 0)]
        public void RegexIsMatchWorksWithLongTimeout()
        {
            var rgx = new Regex(Pattern, RegexOptions.None, TimeSpan.FromMilliseconds(LongTimeoutMs));
            rgx.IsMatch(LongText);
        }

        [Test]
        public void RegexMatchWorksWithShortTimeout()
        {
            var rgx = new Regex(Pattern, RegexOptions.None, TimeSpan.FromMilliseconds(ShortTimeoutMs));
            Assert.Throws(() =>
            {
                rgx.Match(LongText);
            }, err => err is RegexMatchTimeoutException);
        }

        [Test(ExpectedCount = 0)]
        public void RegexMatchWorksWithLongTimeout()
        {
            var rgx = new Regex(Pattern, RegexOptions.None, TimeSpan.FromMilliseconds(LongTimeoutMs));
            rgx.Match(LongText);
        }

        [Test]
        public void RegexNextMatchWorksWithShortTimeout()
        {
            var rgx = new Regex("%%|" + Pattern, RegexOptions.None, TimeSpan.FromMilliseconds(ShortTimeoutMs));

            Assert.Throws(() =>
            {
                var result = rgx.Match("%%" + LongText);
                result.NextMatch();
            }, err => err is RegexMatchTimeoutException);
        }

        [Test(ExpectedCount = 0)]
        public void RegexNextMatchWorksWithLongTimeout()
        {
            var rgx = new Regex("%%| " + Pattern, RegexOptions.None, TimeSpan.FromMilliseconds(LongTimeoutMs));

            var result = rgx.Match("%%" + LongText);
            result.NextMatch();
        }

        [Test]
        public void RegexReplaceWorksWithShortTimeout()
        {
            Assert.Throws(() =>
            {
                Regex.Replace(LongText, Pattern, "fakeReplacement", RegexOptions.None, TimeSpan.FromMilliseconds(ShortTimeoutMs));
            }, err => err is RegexMatchTimeoutException);

        }

        [Test(ExpectedCount = 0)]
        public void RegexReplaceWorksWithLongTimeout()
        {
            Regex.Replace(LongText, Pattern, "fakeReplacement", RegexOptions.None, TimeSpan.FromMilliseconds(LongTimeoutMs));
        }

        [Test]
        public void RegexReplaceEvaluatorWorksWithShortTimeout()
        {
            Assert.Throws(() =>
            {
                Regex.Replace(LongText, Pattern, m => "fakeReplacement", RegexOptions.None, TimeSpan.FromMilliseconds(ShortTimeoutMs));
            }, err => err is RegexMatchTimeoutException);
        }

        [Test(ExpectedCount = 0)]
        public void RegexReplaceEvaluatorWorksWithLongTimeout()
        {
            Regex.Replace(LongText, Pattern, m => "fakeReplacement", RegexOptions.None, TimeSpan.FromMilliseconds(LongTimeoutMs));
        }

        [Test]
        public void RegexSplitWorksWithShortTimeout()
        {
            Assert.Throws(() =>
            {
                Regex.Split(LongText, Pattern, RegexOptions.None, TimeSpan.FromMilliseconds(ShortTimeoutMs));
            }, err => err is RegexMatchTimeoutException);
        }

        [Test(ExpectedCount = 0)]
        public void RegexSplitWorksWithLongTimeout()
        {
            Regex.Split(LongText, Pattern, RegexOptions.None, TimeSpan.FromMilliseconds(LongTimeoutMs));
        }
    }
}