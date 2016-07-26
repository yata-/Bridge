using System;
using System.Text.RegularExpressions;
using Bridge.Test;

namespace Bridge.ClientTest.Text.RegularExpressions
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex: Lookahead - {0}")]
    public class RegexLookaheadTests : RegexTestBase
    {
        [Test]
        public void PositiveLookaheadTest1()
        {
            const string pattern = @"abc(?=def)de";
            const string text = "abcde";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);
        }

        [Test]
        public void PositiveLookaheadTest2()
        {
            const string pattern = @"abc(?=de)def";
            const string text = "abcdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 6, "abcdef", 1, true);

            ValidateGroup(m, 0, 0, 6, true, "abcdef", 1);
            ValidateCapture(m, 0, 0, 0, 6, "abcdef");
        }

        [Test]
        public void NegativeLookaheadTest1()
        {
            const string pattern = @"ab(?![\\d\\D])";
            const string text = "ab";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 2, "ab", 1, true);

            ValidateGroup(m, 0, 0, 2, true, "ab", 1);
            ValidateCapture(m, 0, 0, 0, 2, "ab");
        }

        [Test]
        public void NegativeLookaheadTest2()
        {
            const string pattern = @"ab(?!\D)";
            const string text = "abc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);
        }

        [Test]
        public void PositiveLookaheadWithGroupTest()
        {
            const string pattern = @"(ab)(?=(d)e)(def)";
            const string text = "abdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 5, "abdef", 4, true);

            ValidateGroup(m, 0, 0, 5, true, "abdef", 1);
            ValidateCapture(m, 0, 0, 0, 5, "abdef");

            ValidateGroup(m, 1, 0, 2, true, "ab", 1);
            ValidateCapture(m, 1, 0, 0, 2, "ab");

            ValidateGroup(m, 2, 2, 1, true, "d", 1);
            ValidateCapture(m, 2, 0, 2, 1, "d");

            ValidateGroup(m, 3, 2, 3, true, "def", 1);
            ValidateCapture(m, 3, 0, 2, 3, "def");
        }

        [Test]
        public void NegativeLookaheadWithGroupTest()
        {
            const string pattern = @"(abc)(?!(d)x)(def)";
            const string text = "abcdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 6, "abcdef", 4, true);

            ValidateGroup(m, 0, 0, 6, true, "abcdef", 1);
            ValidateCapture(m, 0, 0, 0, 6, "abcdef");

            ValidateGroup(m, 1, 0, 3, true, "abc", 1);
            ValidateCapture(m, 1, 0, 0, 3, "abc");

            ValidateGroup(m, 2, 0, 0, false, "", 0);

            ValidateGroup(m, 3, 3, 3, true, "def", 1);
            ValidateCapture(m, 3, 0, 3, 3, "def");
        }
    }
}