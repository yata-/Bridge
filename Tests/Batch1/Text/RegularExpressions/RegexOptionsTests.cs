using System;
using System.Text.RegularExpressions;
using Bridge.Test;

namespace Bridge.ClientTest.Text.RegularExpressions
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "RegexOptions - {0}")]
    public class RegexOptionsTests : RegexTestBase
    {
        #region Msdn

        [Test]
        public void MsdnIgnoreCaseTest()
        {
            const string pattern = @"\bthe\w*\b";
            const string text = @"The man then told them about that event.";
            var rgx = new Regex(pattern, RegexOptions.IgnoreCase);
            var ms = rgx.Matches(text);

            Assert.AreEqual(3, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 3, "The", 1, true);

            ValidateGroup(ms[0], 0, 0, 3, true, "The", 1);
            ValidateCapture(ms[0], 0, 0, 0, 3, "The");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 8, 4, "then", 1, true);

            ValidateGroup(ms[1], 0, 8, 4, true, "then", 1);
            ValidateCapture(ms[1], 0, 0, 8, 4, "then");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 18, 4, "them", 1, true);

            ValidateGroup(ms[2], 0, 18, 4, true, "them", 1);
            ValidateCapture(ms[2], 0, 0, 18, 4, "them");
        }

        [Test]
        public void MsdnMultilineTest1()
        {
            const string pattern = @"^(\w+)\s(\d+)$";
            const string text = "Joe 164\n" +
                                "Sam 208\n" +
                                "Allison 211\n" +
                                "Gwen 171\n";

            var rgx = new Regex(pattern, RegexOptions.None);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);

            ValidateGroup(m, 1, 0, 0, false, "", 0);

            ValidateGroup(m, 2, 0, 0, false, "", 0);
        }

        [Test]
        public void MsdnMultilineTest2()
        {
            const string pattern = @"^(\w+)\s(\d+)\r*$";
            const string text = "Joe 164\n" +
                                "Sam 208\n" +
                                "Allison 211\n" +
                                "Gwen 171\n";

            var rgx = new Regex(pattern, RegexOptions.Multiline);
            var ms = rgx.Matches(text);

            Assert.AreEqual(4, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 7, "Joe 164", 3, true);

            ValidateGroup(ms[0], 0, 0, 7, true, "Joe 164", 1);
            ValidateCapture(ms[0], 0, 0, 0, 7, "Joe 164");

            ValidateGroup(ms[0], 1, 0, 3, true, "Joe", 1);
            ValidateCapture(ms[0], 1, 0, 0, 3, "Joe");

            ValidateGroup(ms[0], 2, 4, 3, true, "164", 1);
            ValidateCapture(ms[0], 2, 0, 4, 3, "164");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 8, 7, "Sam 208", 3, true);

            ValidateGroup(ms[1], 0, 8, 7, true, "Sam 208", 1);
            ValidateCapture(ms[1], 0, 0, 8, 7, "Sam 208");

            ValidateGroup(ms[1], 1, 8, 3, true, "Sam", 1);
            ValidateCapture(ms[1], 1, 0, 8, 3, "Sam");

            ValidateGroup(ms[1], 2, 12, 3, true, "208", 1);
            ValidateCapture(ms[1], 2, 0, 12, 3, "208");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 16, 11, "Allison 211", 3, true);

            ValidateGroup(ms[2], 0, 16, 11, true, "Allison 211", 1);
            ValidateCapture(ms[2], 0, 0, 16, 11, "Allison 211");

            ValidateGroup(ms[2], 1, 16, 7, true, "Allison", 1);
            ValidateCapture(ms[2], 1, 0, 16, 7, "Allison");

            ValidateGroup(ms[2], 2, 24, 3, true, "211", 1);
            ValidateCapture(ms[2], 2, 0, 24, 3, "211");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 28, 8, "Gwen 171", 3, true);

            ValidateGroup(ms[3], 0, 28, 8, true, "Gwen 171", 1);
            ValidateCapture(ms[3], 0, 0, 28, 8, "Gwen 171");

            ValidateGroup(ms[3], 1, 28, 4, true, "Gwen", 1);
            ValidateCapture(ms[3], 1, 0, 28, 4, "Gwen");

            ValidateGroup(ms[3], 2, 33, 3, true, "171", 1);
            ValidateCapture(ms[3], 2, 0, 33, 3, "171");
        }

        [Test]
        public void MsdnSinglelineTest()
        {
            const string pattern = @"^.+";
            const string text = "This is one line and\r\nthis is the second.";
            var rgx = new Regex(pattern, RegexOptions.Singleline);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 41, "This is one line and\r\nthis is the second.", 1, true);
            
            ValidateGroup(m, 0, 0, 41, true, "This is one line and\r\nthis is the second.", 1);
            ValidateCapture(m, 0, 0, 0, 41, "This is one line and\r\nthis is the second.");
        }

        #endregion

        [Test]
        public void IgnoreCaseTest1()
        {
            const string pattern = @"ABcd";
            const string text = @"abcd";
            var rgx = new Regex(pattern, RegexOptions.None);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);
        }

        [Test]
        public void IgnoreCaseTest2()
        {
            const string pattern = @"ABcd";
            const string text = @"abcd";
            var rgx = new Regex(pattern, RegexOptions.IgnoreCase);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 4, "abcd", 1, true);

            ValidateGroup(m, 0, 0, 4, true, "abcd", 1);
            ValidateCapture(m, 0, 0, 0, 4, "abcd");
        }

        [Test]
        public void IgnoreCaseTest3()
        {
            const string pattern = @"[AB]+cd";
            const string text = @"abcd";
            var rgx = new Regex(pattern, RegexOptions.IgnoreCase);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 4, "abcd", 1, true);

            ValidateGroup(m, 0, 0, 4, true, "abcd", 1);
            ValidateCapture(m, 0, 0, 0, 4, "abcd");
        }

        [Test]
        public void DefaultLineOptionsTest1()
        {
            const string pattern = @"^.*";
            const string text = "The first line.\r\nThe second line.\r\nThe third line.";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 16, "The first line.\r", 1, true);

            ValidateGroup(m, 0, 0, 16, true, "The first line.\r", 1);
            ValidateCapture(m, 0, 0, 0, 16, "The first line.\r");
        }

        [Test]
        public void DefaultLineOptionsTest2()
        {
            const string pattern = @".+$";
            const string text = "The first line.\r\nThe second line.\r\nThe third line.";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 35, 15, "The third line.", 1, true);

            ValidateGroup(m, 0, 35, 15, true, "The third line.", 1);
            ValidateCapture(m, 0, 0, 35, 15, "The third line.");
        }

        [Test]
        public void MultilineTest1()
        {
            const string pattern = @".*";
            const string text = "The first line.\r\nThe second line.\r\nThe third line.";
            var rgx = new Regex(pattern, RegexOptions.Multiline);
            var ms = rgx.Matches(text);

            Assert.AreEqual(6, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 16, "The first line.\r", 1, true);

            ValidateGroup(ms[0], 0, 0, 16, true, "The first line.\r", 1);
            ValidateCapture(ms[0], 0, 0, 0, 16, "The first line.\r");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 16, 0, "", 1, true);

            ValidateGroup(ms[1], 0, 16, 0, true, "", 1);
            ValidateCapture(ms[1], 0, 0, 16, 0, "");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 17, 17, "The second line.\r", 1, true);

            ValidateGroup(ms[2], 0, 17, 17, true, "The second line.\r", 1);
            ValidateCapture(ms[2], 0, 0, 17, 17, "The second line.\r");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 34, 0, "", 1, true);

            ValidateGroup(ms[3], 0, 34, 0, true, "", 1);
            ValidateCapture(ms[3], 0, 0, 34, 0, "");

            // Match #4:
            Assert.NotNull(ms[4], "Match[4] is not null.");
            ValidateMatch(ms[4], 35, 15, "The third line.", 1, true);

            ValidateGroup(ms[4], 0, 35, 15, true, "The third line.", 1);
            ValidateCapture(ms[4], 0, 0, 35, 15, "The third line.");

            // Match #5:
            Assert.NotNull(ms[5], "Match[5] is not null.");
            ValidateMatch(ms[5], 50, 0, "", 1, true);

            ValidateGroup(ms[5], 0, 50, 0, true, "", 1);
            ValidateCapture(ms[5], 0, 0, 50, 0, "");
        }

        [Test]
        public void MultilineTest2()
        {
            const string pattern = @".+$";
            const string text = "The first line.\r\nThe second line.\r\nThe third line.";
            var rgx = new Regex(pattern, RegexOptions.Multiline);
            var ms = rgx.Matches(text);

            Assert.AreEqual(3, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 16, "The first line.\r", 1, true);

            ValidateGroup(ms[0], 0, 0, 16, true, "The first line.\r", 1);
            ValidateCapture(ms[0], 0, 0, 0, 16, "The first line.\r");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 17, 17, "The second line.\r", 1, true);

            ValidateGroup(ms[1], 0, 17, 17, true, "The second line.\r", 1);
            ValidateCapture(ms[1], 0, 0, 17, 17, "The second line.\r");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 35, 15, "The third line.", 1, true);

            ValidateGroup(ms[2], 0, 35, 15, true, "The third line.", 1);
            ValidateCapture(ms[2], 0, 0, 35, 15, "The third line.");
        }

        [Test]
        public void SinglelineTest()
        {
            const string pattern = @"^.*";
            const string text = "The first line.\r\nThe second line.\r\nThe third line.";
            var rgx = new Regex(pattern, RegexOptions.Singleline);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 50, "The first line.\r\nThe second line.\r\nThe third line.", 1, true);
            
            ValidateGroup(m, 0, 0, 50, true, "The first line.\r\nThe second line.\r\nThe third line.", 1);
            ValidateCapture(m, 0, 0, 0, 50, "The first line.\r\nThe second line.\r\nThe third line.");
        }

        [Test]
        public void SinglelineDotCharTest()
        {
            const string pattern = @"[.]+$";
            const string text = "The first line.\r\nThe second line.\r\nThe third line.";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 49, 1, ".", 1, true);

            ValidateGroup(m, 0, 49, 1, true, ".", 1);
            ValidateCapture(m, 0, 0, 49, 1, ".");

        }

        [Test]
        public void MultilineAndSinglelineTest()
        {
            const string pattern = @".+$";
            const string text = "The first line.\r\nThe second line.\r\nThe third line.";
            var rgx = new Regex(pattern, RegexOptions.Multiline | RegexOptions.Singleline);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 50, "The first line.\r\nThe second line.\r\nThe third line.", 1, true);

            ValidateGroup(m, 0, 0, 50, true, "The first line.\r\nThe second line.\r\nThe third line.", 1);
            ValidateCapture(m, 0, 0, 0, 50, "The first line.\r\nThe second line.\r\nThe third line.");
        }
    }
}