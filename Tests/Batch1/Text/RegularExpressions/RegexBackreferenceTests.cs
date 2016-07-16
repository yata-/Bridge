using System;
using System.Text.RegularExpressions;
using Bridge.Test;

namespace Bridge.ClientTest.Text.RegularExpressions
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex: Backreferences - {0}")]
    public class RegexBackreferenceTests : RegexTestBase
    {
        #region MSDN

        [Test]
        public void MsdnNumberedBackrefTest()
        {
            const string pattern = @"(\w)\1";
            const string text = @"trellis llama webbing dresser swagger";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(5, ms.Count, "Matches count is correct.");

            // Match #0:
            ValidateMatch(ms[0], 3, 2, "ll", 2, true);

            ValidateGroup(ms[0], 0, 3, 2, true, "ll", 1);
            ValidateCapture(ms[0], 0, 0, 3, 2, "ll");

            ValidateGroup(ms[0], 1, 3, 1, true, "l", 1);
            ValidateCapture(ms[0], 1, 0, 3, 1, "l");

            // Match #1:
            ValidateMatch(ms[1], 8, 2, "ll", 2, true);

            ValidateGroup(ms[1], 0, 8, 2, true, "ll", 1);
            ValidateCapture(ms[1], 0, 0, 8, 2, "ll");

            ValidateGroup(ms[1], 1, 8, 1, true, "l", 1);
            ValidateCapture(ms[1], 1, 0, 8, 1, "l");

            // Match #2:
            ValidateMatch(ms[2], 16, 2, "bb", 2, true);

            ValidateGroup(ms[2], 0, 16, 2, true, "bb", 1);
            ValidateCapture(ms[2], 0, 0, 16, 2, "bb");

            ValidateGroup(ms[2], 1, 16, 1, true, "b", 1);
            ValidateCapture(ms[2], 1, 0, 16, 1, "b");

            // Match #3:
            ValidateMatch(ms[3], 25, 2, "ss", 2, true);

            ValidateGroup(ms[3], 0, 25, 2, true, "ss", 1);
            ValidateCapture(ms[3], 0, 0, 25, 2, "ss");

            ValidateGroup(ms[3], 1, 25, 1, true, "s", 1);
            ValidateCapture(ms[3], 1, 0, 25, 1, "s");

            // Match #4:
            ValidateMatch(ms[4], 33, 2, "gg", 2, true);

            ValidateGroup(ms[4], 0, 33, 2, true, "gg", 1);
            ValidateCapture(ms[4], 0, 0, 33, 2, "gg");

            ValidateGroup(ms[4], 1, 33, 1, true, "g", 1);
            ValidateCapture(ms[4], 1, 0, 33, 1, "g");
        }

        [Test]
        public void MsdnNamedBackrefTest()
        {
            const string pattern = @"(?<char>\w)\k<char>";
            const string text = @"trellis llama webbing dresser swagger";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(5, ms.Count, "Matches count is correct.");

            // Match #0:
            ValidateMatch(ms[0], 3, 2, "ll", 2, true);

            ValidateGroup(ms[0], 0, 3, 2, true, "ll", 1);
            ValidateCapture(ms[0], 0, 0, 3, 2, "ll");

            ValidateGroup(ms[0], 1, 3, 1, true, "l", 1);
            ValidateCapture(ms[0], 1, 0, 3, 1, "l");

            // Match #1:
            ValidateMatch(ms[1], 8, 2, "ll", 2, true);

            ValidateGroup(ms[1], 0, 8, 2, true, "ll", 1);
            ValidateCapture(ms[1], 0, 0, 8, 2, "ll");

            ValidateGroup(ms[1], 1, 8, 1, true, "l", 1);
            ValidateCapture(ms[1], 1, 0, 8, 1, "l");

            // Match #2:
            ValidateMatch(ms[2], 16, 2, "bb", 2, true);

            ValidateGroup(ms[2], 0, 16, 2, true, "bb", 1);
            ValidateCapture(ms[2], 0, 0, 16, 2, "bb");

            ValidateGroup(ms[2], 1, 16, 1, true, "b", 1);
            ValidateCapture(ms[2], 1, 0, 16, 1, "b");

            // Match #3:
            ValidateMatch(ms[3], 25, 2, "ss", 2, true);

            ValidateGroup(ms[3], 0, 25, 2, true, "ss", 1);
            ValidateCapture(ms[3], 0, 0, 25, 2, "ss");

            ValidateGroup(ms[3], 1, 25, 1, true, "s", 1);
            ValidateCapture(ms[3], 1, 0, 25, 1, "s");

            // Match #4:
            ValidateMatch(ms[4], 33, 2, "gg", 2, true);

            ValidateGroup(ms[4], 0, 33, 2, true, "gg", 1);
            ValidateCapture(ms[4], 0, 0, 33, 2, "gg");

            ValidateGroup(ms[4], 1, 33, 1, true, "g", 1);
            ValidateCapture(ms[4], 1, 0, 33, 1, "g");
        }

        [Test]
        public void MsdnNamedBackrefWithNumberAsNameTest()
        {
            const string pattern = @"(?<2>\w)\k<2>";
            const string text = @"trellis llama webbing dresser swagger";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(5, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 3, 2, "ll", 2, true);

            ValidateGroup(ms[0], 0, 3, 2, true, "ll", 1);
            ValidateCapture(ms[0], 0, 0, 3, 2, "ll");

            ValidateGroup(ms[0], 2, 3, 1, true, "l", 1);
            ValidateCapture(ms[0], 2, 0, 3, 1, "l");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 8, 2, "ll", 2, true);

            ValidateGroup(ms[1], 0, 8, 2, true, "ll", 1);
            ValidateCapture(ms[1], 0, 0, 8, 2, "ll");

            ValidateGroup(ms[1], 2, 8, 1, true, "l", 1);
            ValidateCapture(ms[1], 2, 0, 8, 1, "l");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 16, 2, "bb", 2, true);

            ValidateGroup(ms[2], 0, 16, 2, true, "bb", 1);
            ValidateCapture(ms[2], 0, 0, 16, 2, "bb");

            ValidateGroup(ms[2], 2, 16, 1, true, "b", 1);
            ValidateCapture(ms[2], 2, 0, 16, 1, "b");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 25, 2, "ss", 2, true);

            ValidateGroup(ms[3], 0, 25, 2, true, "ss", 1);
            ValidateCapture(ms[3], 0, 0, 25, 2, "ss");

            ValidateGroup(ms[3], 2, 25, 1, true, "s", 1);
            ValidateCapture(ms[3], 2, 0, 25, 1, "s");

            // Match #4:
            Assert.NotNull(ms[4], "Match[4] is not null.");
            ValidateMatch(ms[4], 33, 2, "gg", 2, true);

            ValidateGroup(ms[4], 0, 33, 2, true, "gg", 1);
            ValidateCapture(ms[4], 0, 0, 33, 2, "gg");

            ValidateGroup(ms[4], 2, 33, 1, true, "g", 1);
            ValidateCapture(ms[4], 2, 0, 33, 1, "g");
        }

        [Test]
        public void MsdnNamedBackrefWithRedefinedGroupTest()
        {
            //TODO: Uncomment when backreferences to redefined groups are supported.
            // Currently such cases intentionally not supported (they require manual processing of each single referenced capture).

            const string pattern = @"(?<1>a)(?<1>\1b)*";
            const string text = @"aababb";

            Assert.Throws<NotSupportedException>(() =>
            {
                var rgx = new Regex(pattern);
                rgx.Match(text);
            });

            //var m = rgx.Match(text);
            //ValidateMatch(m, 0, 6, "aababb", 2, true);

            //ValidateGroup(m, 0, 0, 6, true, "aababb", 1);
            //ValidateCapture(m, 0, 0, 0, 6, "aababb");

            //ValidateGroup(m, 1, 3, 3, true, "abb", 3);
            //ValidateCapture(m, 1, 0, 0, 1, "a");
            //ValidateCapture(m, 1, 1, 1, 2, "ab");
            //ValidateCapture(m, 1, 2, 3, 3, "abb");
        }

        [Test]
        public void MsdnNamedBackrefWithEmptyCaptureTest1()
        {
            const string pattern = @"\b([A-Z]{2})(\d{2})?([A-Z]{2})\b";
            const string text = @"AA22ZZ";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 6, "AA22ZZ", 4, true);

            ValidateGroup(m, 0, 0, 6, true, "AA22ZZ", 1);
            ValidateCapture(m, 0, 0, 0, 6, "AA22ZZ");

            ValidateGroup(m, 1, 0, 2, true, "AA", 1);
            ValidateCapture(m, 1, 0, 0, 2, "AA");

            ValidateGroup(m, 2, 2, 2, true, "22", 1);
            ValidateCapture(m, 2, 0, 2, 2, "22");

            ValidateGroup(m, 3, 4, 2, true, "ZZ", 1);
            ValidateCapture(m, 3, 0, 4, 2, "ZZ");
        }

        [Test]
        public void MsdnNamedBackrefWithEmptyCaptureTest2()
        {
            const string pattern = @"\b([A-Z]{2})(\d{2})?([A-Z]{2})\b";
            const string text = @"AABB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 4, "AABB", 4, true);

            ValidateGroup(m, 0, 0, 4, true, "AABB", 1);
            ValidateCapture(m, 0, 0, 0, 4, "AABB");

            ValidateGroup(m, 1, 0, 2, true, "AA", 1);
            ValidateCapture(m, 1, 0, 0, 2, "AA");

            ValidateGroup(m, 2, 0, 0, false, "", 0);

            ValidateGroup(m, 3, 2, 2, true, "BB", 1);
            ValidateCapture(m, 3, 0, 2, 2, "BB");
        }

        #endregion

        [Test]
        public void NamedBackrefToUnreachableGroupTest()
        {
            //TODO: Uncomment if backreferences to unreachable groups are supported.
            // Currently such cases intentionally not supported (there is no sense in such queries, they always return "Success=False").

            const string pattern = @"(a)\2(b)";
            const string text = @"abb";

            Assert.Throws<NotSupportedException>(() =>
            {
                var rgx = new Regex(pattern);
                rgx.Match(text);
            });


            //const string pattern = @"(a)\2(b)";
            //const string text = @"abb";
            //var rgx = new Regex(pattern);
            //var m = rgx.Match(text);

            //ValidateMatch(m, 0, 0, "", 1, false);

            //ValidateGroup(m, 0, 0, 0, false, "", 0);

            //ValidateGroup(m, 1, 0, 0, false, "", 0);

            //ValidateGroup(m, 2, 0, 0, false, "", 0);
        }

        [Test]
        public void NamedBackrefToSelfGroupTest()
        {
            //TODO: Uncomment if backreferences to self are supported.
            // Currently such cases intentionally not supported (there is no sense in such queries, they always return "Success=False").

            const string pattern = @"(?<gr1>a\k<gr1>)";
            const string text = @"aaa";

            Assert.Throws<NotSupportedException>(() =>
            {
                var rgx = new Regex(pattern);
                rgx.Match(text);
            });


            //const string pattern = @"(?<gr1>a\k<gr1>)";
            //const string text = @"aaa";
            //var rgx = new Regex(pattern);
            //var m = rgx.Match(text);

            //ValidateMatch(m, 0, 0, "", 1, false);

            //ValidateGroup(m, 0, 0, 0, false, "", 0);

            //ValidateGroup(m, 1, 0, 0, false, "", 0);
        }

        [Test]
        public void NamedBackrefToParentGroupTest()
        {
            //TODO: Uncomment if backreferences to parent groups are supported.
            // Currently such cases intentionally not supported (there is no sense in such queries, they always return "Success=False").

            const string pattern = @"(?<parent>a(?<child>b\k<parent>))";
            const string text = @"aabb";

            Assert.Throws<NotSupportedException>(() =>
            {
                var rgx = new Regex(pattern);
                rgx.Match(text);
            });


            //const string pattern = @"(?<parent>a(?<child>b\k<parent>))";
            //const string text = @"aabb";
            //var rgx = new Regex(pattern);
            //var m = rgx.Match(text);

            //ValidateMatch(m, 0, 0, "", 1, false);

            //ValidateGroup(m, 0, 0, 0, false, "", 0);

            //ValidateGroup(m, 1, 0, 0, false, "", 0);

            //ValidateGroup(m, 2, 0, 0, false, "", 0);
        }

        [Test]
        public void NumberedBackrefTest()
        {
            const string pattern = @"((abc)def)\2";
            const string text = "abcdefabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 9, "abcdefabc", 3, true);

            ValidateGroup(m, 0, 0, 9, true, "abcdefabc", 1);
            ValidateCapture(m, 0, 0, 0, 9, "abcdefabc");

            ValidateGroup(m, 1, 0, 6, true, "abcdef", 1);
            ValidateCapture(m, 1, 0, 0, 6, "abcdef");

            ValidateGroup(m, 2, 0, 3, true, "abc", 1);
            ValidateCapture(m, 2, 0, 0, 3, "abc");
        }

        //TODO: Remove this test when backrefs inside groups are supported
        [Test]
        public void NumberedBackrefInGroupFailsTest()
        {
            Assert.Throws<NotSupportedException>(() =>
            {
                const string pattern = @"((abc)def)(\2)";
                const string text = "abcdefabc";
                var rgx = new Regex(pattern);
                rgx.Match(text);

            });
        }

        //TODO: Remove this test when backrefs inside groups are supported
        [Test]
        public void NamedBackrefInGroupFailsTest()
        {
            Assert.Throws<NotSupportedException>(() =>
            {
                const string pattern = @"((?<name>abc)def)(\k<name>)";
                const string text = "abcdefabc";
                var rgx = new Regex(pattern);
                rgx.Match(text);

            });
        }
    }
}