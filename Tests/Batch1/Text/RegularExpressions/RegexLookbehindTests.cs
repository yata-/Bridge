using System;
using System.Text.RegularExpressions;
using Bridge.Test;

namespace Bridge.ClientTest.Text.RegularExpressions
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex: Lookbehind - {0}")]
    public class RegexLookbehindTests : RegexTestBase
    {
        [Test]
        public void PositiveLookbehindTest1()
        {
            const string pattern = @"abc(?<=bc)def";
            const string text = "abcdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 6, "abcdef", 1, true);

            ValidateGroup(m, 0, 0, 6, true, "abcdef", 1);
            ValidateCapture(m, 0, 0, 0, 6, "abcdef");

        }

        [Test]
        public void PositiveLookbehindTest2()
        {
            const string pattern = @"abc(?<=bx)def";
            const string text = "abcdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);

        }

        [Test]
        public void PositiveLookbehindTest3()
        {
            const string pattern = @"bc(?<=abc)def";
            const string text = "abcdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 1, 5, "bcdef", 1, true);

            ValidateGroup(m, 0, 1, 5, true, "bcdef", 1);
            ValidateCapture(m, 0, 0, 1, 5, "bcdef");
        }

        [Test]
        public void PositiveLookbehindWithOffsetTest()
        {
            const string pattern = @"bc(?<=abc)def";
            const string text = "abcdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text, 1);

            ValidateMatch(m, 1, 5, "bcdef", 1, true);

            ValidateGroup(m, 0, 1, 5, true, "bcdef", 1);
            ValidateCapture(m, 0, 0, 1, 5, "bcdef");
        }

        [Test]
        public void NegativeLookbehindTest1()
        {
            const string pattern = @"abc(?<!bc)def";
            const string text = "abcdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);

        }

        [Test]
        public void NegativeLookbehindTest2()
        {
            const string pattern = @"abc(?<!bx)def";
            const string text = "abcdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 6, "abcdef", 1, true);

            ValidateGroup(m, 0, 0, 6, true, "abcdef", 1);
            ValidateCapture(m, 0, 0, 0, 6, "abcdef");

        }

        [Test]
        public void PositiveLookbehindWithGroupTest()
        {
            const string pattern = @"(abc)(?<=(b)c)(def)";
            const string text = "abcdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 6, "abcdef", 4, true);

            ValidateGroup(m, 0, 0, 6, true, "abcdef", 1);
            ValidateCapture(m, 0, 0, 0, 6, "abcdef");

            ValidateGroup(m, 1, 0, 3, true, "abc", 1);
            ValidateCapture(m, 1, 0, 0, 3, "abc");

            ValidateGroup(m, 2, 1, 1, true, "b", 1);
            ValidateCapture(m, 2, 0, 1, 1, "b");

            ValidateGroup(m, 3, 3, 3, true, "def", 1);
            ValidateCapture(m, 3, 0, 3, 3, "def");

        }

        [Test]
        public void NegativeLookbehindWithGroupTest()
        {
            const string pattern = @"(abc)(?<!(b)x)(def)";
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