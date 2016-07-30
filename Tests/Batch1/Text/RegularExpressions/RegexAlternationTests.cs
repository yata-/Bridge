using System;
using System.Text.RegularExpressions;
using Bridge.Test;

namespace Bridge.ClientTest.Text.RegularExpressions
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex: Alternations - {0}")]
    public class RegexAlternationTests : RegexTestBase
    {
        #region MSDN

        [Test]
        public void MsdnSimpleAlternationTest1()
        {
            string[] inputs = {"the", "sample: this is the day"};
            string[] expected = {"the", "this"};

            const string pattern = @"th(e|is|at)";
            var rgx = new Regex(pattern);

            ValidateMatchResults(rgx, inputs, expected);
        }

        [Test]
        public void MsdnSimpleAlternationTest2()
        {
            const string pattern = @"\bgr[ae]y\b";
            const string text = "The gray wolf blended in among the grey rocks.";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 4, 4, "gray", 1, true);

            ValidateGroup(ms[0], 0, 4, 4, true, "gray", 1);
            ValidateCapture(ms[0], 0, 0, 4, 4, "gray");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 35, 4, "grey", 1, true);

            ValidateGroup(ms[1], 0, 35, 4, true, "grey", 1);
            ValidateCapture(ms[1], 0, 0, 35, 4, "grey");
        }

        [Test]
        public void MsdnSimpleAlternationTest3()
        {
            const string pattern = @"\bgr(a|e)y\b";
            const string text = "The gray wolf blended in among the grey rocks.";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 4, 4, "gray", 2, true);

            ValidateGroup(ms[0], 0, 4, 4, true, "gray", 1);
            ValidateCapture(ms[0], 0, 0, 4, 4, "gray");

            ValidateGroup(ms[0], 1, 6, 1, true, "a", 1);
            ValidateCapture(ms[0], 1, 0, 6, 1, "a");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 35, 4, "grey", 2, true);

            ValidateGroup(ms[1], 0, 35, 4, true, "grey", 1);
            ValidateCapture(ms[1], 0, 0, 35, 4, "grey");

            ValidateGroup(ms[1], 1, 37, 1, true, "e", 1);
            ValidateCapture(ms[1], 1, 0, 37, 1, "e");
        }

        [Test]
        public void MsdnAlternationExprTest1()
        {
            const string pattern = @"(?(A)A\d{2}\b|\b\d{3}\b)";
            const string text = "A10 C103 910";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 3, "A10", 1, true);

            ValidateGroup(ms[0], 0, 0, 3, true, "A10", 1);
            ValidateCapture(ms[0], 0, 0, 0, 3, "A10");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 9, 3, "910", 1, true);

            ValidateGroup(ms[1], 0, 9, 3, true, "910", 1);
            ValidateCapture(ms[1], 0, 0, 9, 3, "910");
        }

        [Test]
        public void MsdnAlternationExprTest2()
        {
            const string pattern = @"\b(?(\d{2}-)\d{2}-\d{7}|\d{3}-\d{2}-\d{4})\b";
            const string text = "01-9999999 020-333333 777-88-9999";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 10, "01-9999999", 1, true);

            ValidateGroup(ms[0], 0, 0, 10, true, "01-9999999", 1);
            ValidateCapture(ms[0], 0, 0, 0, 10, "01-9999999");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 22, 11, "777-88-9999", 1, true);

            ValidateGroup(ms[1], 0, 22, 11, true, "777-88-9999", 1);
            ValidateCapture(ms[1], 0, 0, 22, 11, "777-88-9999");
        }

        [Test]
        public void MsdnAlternationGroupNameExprTest1()
        {
            const string pattern = "(?<quoted>\")?(?(quoted).+?\"|\\S+\\s)";
            const string text = "Dogs.jpg \"Yiska playing.jpg\"";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 9, "Dogs.jpg ", 2, true);

            ValidateGroup(ms[0], 0, 0, 9, true, "Dogs.jpg ", 1);
            ValidateCapture(ms[0], 0, 0, 0, 9, "Dogs.jpg ");

            ValidateGroup(ms[0], 1, 0, 0, false, "", 0);

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 9, 19, "\"Yiska playing.jpg\"", 2, true);

            ValidateGroup(ms[1], 0, 9, 19, true, "\"Yiska playing.jpg\"", 1);
            ValidateCapture(ms[1], 0, 0, 9, 19, "\"Yiska playing.jpg\"");

            ValidateGroup(ms[1], 1, 9, 1, true, "\"", 1);
            ValidateCapture(ms[1], 1, 0, 9, 1, "\"");
        }

        [Test]
        public void MsdnAlternationGroupNameExprTest2()
        {
            const string pattern = @"\b(?<n2>\d{2}-)*(?(n2)\d{7}|\d{3}-\d{2}-\d{4})\b";
            const string text = "01-9999999 020-333333 777-88-9999";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 10, "01-9999999", 2, true);

            ValidateGroup(ms[0], 0, 0, 10, true, "01-9999999", 1);
            ValidateCapture(ms[0], 0, 0, 0, 10, "01-9999999");

            ValidateGroup(ms[0], 1, 0, 3, true, "01-", 1);
            ValidateCapture(ms[0], 1, 0, 0, 3, "01-");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 22, 11, "777-88-9999", 2, true);

            ValidateGroup(ms[1], 0, 22, 11, true, "777-88-9999", 1);
            ValidateCapture(ms[1], 0, 0, 22, 11, "777-88-9999");

            ValidateGroup(ms[1], 1, 0, 0, false, "", 0);
        }

        [Test]
        public void MsdnAlternationGroupNumberExprTest()
        {
            const string pattern = @"\b(\d{2}-)*(?(1)\d{7}|\d{3}-\d{2}-\d{4})\b";
            const string text = "01-9999999 020-333333 777-88-9999";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 10, "01-9999999", 2, true);

            ValidateGroup(ms[0], 0, 0, 10, true, "01-9999999", 1);
            ValidateCapture(ms[0], 0, 0, 0, 10, "01-9999999");

            ValidateGroup(ms[0], 1, 0, 3, true, "01-", 1);
            ValidateCapture(ms[0], 1, 0, 0, 3, "01-");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 22, 11, "777-88-9999", 2, true);

            ValidateGroup(ms[1], 0, 22, 11, true, "777-88-9999", 1);
            ValidateCapture(ms[1], 0, 0, 22, 11, "777-88-9999");

            ValidateGroup(ms[1], 1, 0, 0, false, "", 0);
        }

        #endregion

        [Test]
        public void SimpleAlternationTest()
        {
            const string pattern = @"(A|B|C).";
            const string text = "AXBYCZ";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(3, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 2, "AX", 2, true);

            ValidateGroup(ms[0], 0, 0, 2, true, "AX", 1);
            ValidateCapture(ms[0], 0, 0, 0, 2, "AX");

            ValidateGroup(ms[0], 1, 0, 1, true, "A", 1);
            ValidateCapture(ms[0], 1, 0, 0, 1, "A");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 2, 2, "BY", 2, true);

            ValidateGroup(ms[1], 0, 2, 2, true, "BY", 1);
            ValidateCapture(ms[1], 0, 0, 2, 2, "BY");

            ValidateGroup(ms[1], 1, 2, 1, true, "B", 1);
            ValidateCapture(ms[1], 1, 0, 2, 1, "B");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 4, 2, "CZ", 2, true);

            ValidateGroup(ms[2], 0, 4, 2, true, "CZ", 1);
            ValidateCapture(ms[2], 0, 0, 4, 2, "CZ");

            ValidateGroup(ms[2], 1, 4, 1, true, "C", 1);
            ValidateCapture(ms[2], 1, 0, 4, 1, "C");
        }

        [Test]
        public void AlternationGroupTest()
        {
            const string pattern = @"(?(A)AB|BC)";
            const string text = "AB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 2, "AB", 1, true);

            ValidateGroup(m, 0, 0, 2, true, "AB", 1);
            ValidateCapture(m, 0, 0, 0, 2, "AB");
        }

        [Test]
        public void AlternationGroupNonCapturingTest()
        {
            const string pattern = @"(?(?:A)AB|BC)";
            const string text = "AAB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 1, 2, "AB", 1, true);

            ValidateGroup(m, 0, 1, 2, true, "AB", 1);
            ValidateCapture(m, 0, 0, 1, 2, "AB");
        }

        [Test]
        public void AlternationGroupPositiveLookaheadTest()
        {
            const string pattern = @"(?(?=A)AB|BC)";
            const string text = "AAB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 1, 2, "AB", 1, true);

            ValidateGroup(m, 0, 1, 2, true, "AB", 1);
            ValidateCapture(m, 0, 0, 1, 2, "AB");
        }

        [Test]
        public void AlternationGroupNegativeLookaheadTest1()
        {
            const string pattern = @"(?(?!D)AB|BC)";
            const string text = "AAB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 1, 2, "AB", 1, true);

            ValidateGroup(m, 0, 1, 2, true, "AB", 1);
            ValidateCapture(m, 0, 0, 1, 2, "AB");
        }

        [Test]
        public void AlternationGroupNegativeLookaheadTest2()
        {
            const string pattern = @"(?(?!A)AB|BC)";
            const string text = "AAB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);
        }

        [Test]
        public void AlternationGroupPositiveLookbehindTest()
        {
            const string pattern = @"(?(?<=A)AB|BC)";
            const string text = "AAB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 1, 2, "AB", 1, true);

            ValidateGroup(m, 0, 1, 2, true, "AB", 1);
            ValidateCapture(m, 0, 0, 1, 2, "AB");
        }

        [Test]
        public void AlternationGroupNegativeLookbehindTest1()
        {
            const string pattern = @"(?(?<!D)AB|BC)";
            const string text = "AAB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 1, 2, "AB", 1, true);

            ValidateGroup(m, 0, 1, 2, true, "AB", 1);
            ValidateCapture(m, 0, 0, 1, 2, "AB");
        }

        [Test]
        public void AlternationGroupNegativeLookbehindTest2()
        {
            const string pattern = @"(?(?<!A)AB|BC)";
            const string text = "AABZAB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 4, 2, "AB", 1, true);

            ValidateGroup(m, 0, 4, 2, true, "AB", 1);
            ValidateCapture(m, 0, 0, 4, 2, "AB");
        }

        [Test]
        public void AlternationGroupNonBacktrackingTest()
        {
            const string pattern = @"(?(?>A)AB|BC)";
            const string text = "AAB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 1, 2, "AB", 1, true);

            ValidateGroup(m, 0, 1, 2, true, "AB", 1);
            ValidateCapture(m, 0, 0, 1, 2, "AB");
        }

        [Test]
        public void AlternationGroupCommentTest()
        {
            Assert.Throws<ArgumentException>(() =>
            {
                const string pattern = @"(?(?#A)AB|BC)";
                const string text = "AAB";
                var rgx = new Regex(pattern);
                rgx.Match(text);
            });
        }

        [Test]
        public void AlternationGroupWithNameInConditionTest()
        {
            Assert.Throws<ArgumentException>(() =>
            {
                const string pattern = @"(?(?<name>A)AB|BC)";
                const string text = "AAB";
                var rgx = new Regex(pattern);
                rgx.Match(text);
            });
        }

        [Test]
        public void AlternationGroupWithIncorrectRefTest1()
        {
            Assert.Throws<ArgumentException>(() =>
            {
                const string pattern = @"(?(?<5>A)AB|BC)";
                const string text = "AAB";
                var rgx = new Regex(pattern);
                rgx.Match(text);
            });
        }

        [Test]
        public void AlternationGroupWithIncorrectRefTest2()
        {
            Assert.Throws<ArgumentException>(() =>
            {
                const string pattern = @"(?(5A)5AB|BC)";
                const string text = "5AB";
                var rgx = new Regex(pattern);
                rgx.Match(text);
            });
        }

        [Test]
        public void AlternationGroupWithImnsxTest1()
        {
            const string pattern = @"(?(?i:a)AB|BC)";
            const string text = "AAB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 1, 2, "AB", 1, true);

            ValidateGroup(m, 0, 1, 2, true, "AB", 1);
            ValidateCapture(m, 0, 0, 1, 2, "AB");
        }

        [Test]
        public void AlternationGroupWithImnsxTest2()
        {
            const string pattern = @"(?(?i:a)AB|BC)";
            const string text = "AaB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);
        }

        [Test]
        public void AlternationGroupWithImnsxTest3()
        {
            const string pattern = @"(?(i)iAB|BC)";
            const string text = "iAB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 3, "iAB", 1, true);

            ValidateGroup(m, 0, 0, 3, true, "iAB", 1);
            ValidateCapture(m, 0, 0, 0, 3, "iAB");
        }

        [Test]
        public void AlternationConditionWithGroupTest1()
        {
            const string pattern = @"(?(A(B))AB|BC)";
            const string text = "zAB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 1, 2, "AB", 2, true);

            ValidateGroup(m, 0, 1, 2, true, "AB", 1);
            ValidateCapture(m, 0, 0, 1, 2, "AB");

            ValidateGroup(m, 1, 2, 1, true, "B", 1);
            ValidateCapture(m, 1, 0, 2, 1, "B");
        }

        [Test]
        public void AlternationConditionWithGroupTest2()
        {
            const string pattern = @"(?(A(?:B(C)))ABCD|XYZ)";
            const string text = "zABCD";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 1, 4, "ABCD", 2, true);

            ValidateGroup(m, 0, 1, 4, true, "ABCD", 1);
            ValidateCapture(m, 0, 0, 1, 4, "ABCD");

            ValidateGroup(m, 1, 3, 1, true, "C", 1);
            ValidateCapture(m, 1, 0, 3, 1, "C");
        }

        [Test]
        public void AlternationConditionWithGroupTest3()
        {
            const string pattern = @"(?(?:A(B(C)))ABCD|XYZ)";
            const string text = "zABCD";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 1, 4, "ABCD", 3, true);

            ValidateGroup(m, 0, 1, 4, true, "ABCD", 1);
            ValidateCapture(m, 0, 0, 1, 4, "ABCD");

            ValidateGroup(m, 1, 3, 1, true, "C", 1);
            ValidateCapture(m, 1, 0, 3, 1, "C");

            ValidateGroup(m, 2, 0, 0, false, "", 0);
        }

        [Test]
        public void AlternationConditionWithGroupTest4()
        {
            const string pattern = @"(?(?=(A)(B))ABCD|XYZ)";
            const string text = "xyzABCD";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 3, 4, "ABCD", 3, true);

            ValidateGroup(m, 0, 3, 4, true, "ABCD", 1);
            ValidateCapture(m, 0, 0, 3, 4, "ABCD");

            ValidateGroup(m, 1, 4, 1, true, "B", 1);
            ValidateCapture(m, 1, 0, 4, 1, "B");

            ValidateGroup(m, 2, 0, 0, false, "", 0);
        }

        [Test]
        public void AlternationConditionWithGroupTest5()
        {
            const string pattern = @"(?(?=(?:A(B))(C)(D))ABCD|XYZ)";
            const string text = "xyzABCD";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 3, 4, "ABCD", 4, true);

            ValidateGroup(m, 0, 3, 4, true, "ABCD", 1);
            ValidateCapture(m, 0, 0, 3, 4, "ABCD");

            ValidateGroup(m, 1, 5, 1, true, "C", 1);
            ValidateCapture(m, 1, 0, 5, 1, "C");

            ValidateGroup(m, 2, 6, 1, true, "D", 1);
            ValidateCapture(m, 2, 0, 6, 1, "D");

            ValidateGroup(m, 3, 0, 0, false, "", 0);
        }

        [Test]
        public void AlternationGroupNonCapturingWithGroupTest()
        {
            const string pattern = @"(?(?:A(B))AB|BC)";
            const string text = "AAB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 1, 2, "AB", 2, true);

            ValidateGroup(m, 0, 1, 2, true, "AB", 1);
            ValidateCapture(m, 0, 0, 1, 2, "AB");

            ValidateGroup(m, 1, 0, 0, false, "", 0);
        }

        [Test]
        public void AlternationGroupPositiveLookaheadWithGroupTest()
        {
            const string pattern = @"(?(?=A(B))AB|BC)";
            const string text = "AAB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 1, 2, "AB", 2, true);

            ValidateGroup(m, 0, 1, 2, true, "AB", 1);
            ValidateCapture(m, 0, 0, 1, 2, "AB");

            ValidateGroup(m, 1, 0, 0, false, "", 0);
        }

        [Test]
        public void AlternationGroupNegativeLookaheadWithGroupTest()
        {
            const string pattern = @"(?(?!(A))AB|BC)";
            const string text = "AAB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);

            ValidateGroup(m, 1, 0, 0, false, "", 0);
        }

        [Test]
        public void AlternationGroupPositiveLookbehindWithGroupTest()
        {
            const string pattern = @"(?(?<=(A))AB|BC)";
            const string text = "AAB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 1, 2, "AB", 2, true);

            ValidateGroup(m, 0, 1, 2, true, "AB", 1);
            ValidateCapture(m, 0, 0, 1, 2, "AB");

            ValidateGroup(m, 1, 0, 0, false, "", 0);
        }

        [Test]
        public void AlternationGroupNegativeLookbehindWithGroupTest()
        {
            const string pattern = @"(?(?<!(A))AB|BC)";
            const string text = "AABZAB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 4, 2, "AB", 2, true);

            ValidateGroup(m, 0, 4, 2, true, "AB", 1);
            ValidateCapture(m, 0, 0, 4, 2, "AB");

            ValidateGroup(m, 1, 0, 0, false, "", 0);
        }

        [Test]
        public void AlternationGroupNonBacktrackingWithGroupTest()
        {
            const string pattern = @"(?(?>A(B))AB|BC)";
            const string text = "AAB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 1, 2, "AB", 2, true);

            ValidateGroup(m, 0, 1, 2, true, "AB", 1);
            ValidateCapture(m, 0, 0, 1, 2, "AB");

            ValidateGroup(m, 1, 0, 0, false, "", 0);
        }

        [Test]
        public void AlternationGroupWithImnsxAndGroupTest()
        {
            const string pattern = @"(?(?i:(a))AB|BC)";
            const string text = "AAB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 1, 2, "AB", 2, true);

            ValidateGroup(m, 0, 1, 2, true, "AB", 1);
            ValidateCapture(m, 0, 0, 1, 2, "AB");

            ValidateGroup(m, 1, 0, 0, false, "", 0);
        }
    }
}