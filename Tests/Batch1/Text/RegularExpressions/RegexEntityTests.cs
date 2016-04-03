using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using Bridge.Test;

namespace Bridge.ClientTest.Text.RegularExpressions
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex Entity - {0}")]
    public class RegexEntityTests : RegexTestBase
    {
        #region Test data

        private const string Pattern = @"((?:\w)+[\s\.])+";
        private const string Text = @"This is a sentance. This is another sentance.";

        private static Match GetTestDataMatch(int matchIndex = 1)
        {
            var rgx = new Regex(Pattern);
            var m = rgx.Match(Text);
            for (int i = 1; i < matchIndex; i++)
            {
                m = rgx.Match(Text, m.Index + m.Length);
            }

            return m;
        }

        [Test]
        public void CaseDataTest()
        {
            var m1 = GetTestDataMatch();

            ValidateMatch(m1, 0, 19, "This is a sentance.", 2, true);

            ValidateGroup(m1, 0, 0, 19, true, "This is a sentance.", 1);
            ValidateCapture(m1, 0, 0, 0, 19, "This is a sentance.");

            ValidateGroup(m1, 1, 10, 9, true, "sentance.", 4);
            ValidateCapture(m1, 1, 0, 0, 5, "This ");
            ValidateCapture(m1, 1, 1, 5, 3, "is ");
            ValidateCapture(m1, 1, 2, 8, 2, "a ");
            ValidateCapture(m1, 1, 3, 10, 9, "sentance.");

            var m2 = GetTestDataMatch(2);

            ValidateMatch(m2, 20, 25, "This is another sentance.", 2, true);

            ValidateGroup(m2, 0, 20, 25, true, "This is another sentance.", 1);
            ValidateCapture(m2, 0, 0, 20, 25, "This is another sentance.");

            ValidateGroup(m2, 1, 36, 9, true, "sentance.", 4);
            ValidateCapture(m2, 1, 0, 20, 5, "This ");
            ValidateCapture(m2, 1, 1, 25, 3, "is ");
            ValidateCapture(m2, 1, 2, 28, 8, "another ");
            ValidateCapture(m2, 1, 3, 36, 9, "sentance.");
        }

        #endregion

        [Test]
        public void GetGroupNamesTest()
        {
            var rgx = new Regex("");
            var names = rgx.GetGroupNames();
            ValidateCollection(new[] {"0"}, names, "EmptyRegex");

            rgx = new Regex("()");
            names = rgx.GetGroupNames();
            ValidateCollection(new[] {"0", "1"}, names, "EmptyGroup");

            rgx = new Regex("(group1)");
            names = rgx.GetGroupNames();
            ValidateCollection(new[] {"0", "1"}, names, "Group1");

            rgx = new Regex("(group1)(group2)");
            names = rgx.GetGroupNames();
            ValidateCollection(new[] {"0", "1", "2"}, names, "Group2");

            rgx = new Regex("(group1())(group2)");
            names = rgx.GetGroupNames();
            ValidateCollection(new[] {"0", "1", "2", "3"}, names, "Group3");

            rgx = new Regex("(?<name1>)");
            names = rgx.GetGroupNames();
            ValidateCollection(new[] {"0", "name1"}, names, "NameGroup1");

            rgx = new Regex("(?<name1>)(?'name2')");
            names = rgx.GetGroupNames();
            ValidateCollection(new[] {"0", "name1", "name2"}, names, "NameGroup2");

            rgx = new Regex("(?<name1>(?'inner1'))(?'name2')");
            names = rgx.GetGroupNames();
            ValidateCollection(new[] {"0", "name1", "inner1", "name2"}, names, "NameGroup3");

            rgx = new Regex("(?<test>)()");
            names = rgx.GetGroupNames();
            ValidateCollection(new[] {"0", "1", "test"}, names, "NameGroupAndNoname1");
        }

        [Test]
        public void GetGroupNumbersTest()
        {
            var rgx = new Regex("");
            var numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] {0}, numbers, "EmptyRegex");

            rgx = new Regex("()");
            numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] {0, 1}, numbers, "EmptyGroup");

            rgx = new Regex("(group1)");
            numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] {0, 1}, numbers, "Group1");

            rgx = new Regex("(group1)(group2)");
            numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] {0, 1, 2}, numbers, "Group2");

            rgx = new Regex("(group1())(group2)");
            numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] {0, 1, 2, 3}, numbers, "Group3");

            rgx = new Regex("(?<name1>)");
            numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] {0, 1}, numbers, "NameGroup1");

            rgx = new Regex("(?<name1>)(?'name2')");
            numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] {0, 1, 2}, numbers, "NameGroup2");

            rgx = new Regex("(?<name1>(?'inner1'))(?'name2')");
            numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] {0, 1, 2, 3}, numbers, "NameGroup3");

            rgx = new Regex("(?<test>)()");
            numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] {0, 1, 2}, numbers, "NameGroupAndNoname1");
        }

        [Test]
        public void GroupNameFromNumberTest()
        {
            var rgx = new Regex("");
            Assert.AreEqual("0", rgx.GroupNameFromNumber(0), "EmptyRegex.GroupNameFromNumber(0)");

            rgx = new Regex("()");
            Assert.AreEqual("0", rgx.GroupNameFromNumber(0), "EmptyGroup.GroupNameFromNumber(0)");
            Assert.AreEqual("1", rgx.GroupNameFromNumber(1), "EmptyGroup.GroupNameFromNumber(1)");

            rgx = new Regex("(group1)");
            Assert.AreEqual("0", rgx.GroupNameFromNumber(0), "Group1.GroupNameFromNumber(0)");
            Assert.AreEqual("1", rgx.GroupNameFromNumber(1), "Group1.GroupNameFromNumber(1)");

            rgx = new Regex("(group1)(group2)");
            Assert.AreEqual("0", rgx.GroupNameFromNumber(0), "Group2.GroupNameFromNumber(0)");
            Assert.AreEqual("1", rgx.GroupNameFromNumber(1), "Group2.GroupNameFromNumber(1)");
            Assert.AreEqual("2", rgx.GroupNameFromNumber(2), "Group2.GroupNameFromNumber(2)");

            rgx = new Regex("(group1())(group2)");
            Assert.AreEqual("0", rgx.GroupNameFromNumber(0), "Group3.GroupNameFromNumber(0)");
            Assert.AreEqual("1", rgx.GroupNameFromNumber(1), "Group3.GroupNameFromNumber(1)");
            Assert.AreEqual("2", rgx.GroupNameFromNumber(2), "Group3.GroupNameFromNumber(2)");
            Assert.AreEqual("3", rgx.GroupNameFromNumber(3), "Group3.GroupNameFromNumber(3)");

            rgx = new Regex("(?<name1>)");
            Assert.AreEqual("0", rgx.GroupNameFromNumber(0), "NameGroup1.GroupNameFromNumber(0)");
            Assert.AreEqual("name1", rgx.GroupNameFromNumber(1), "NameGroup1.GroupNameFromNumber(1)");


            rgx = new Regex("(?<name1>)(?'name2')");
            Assert.AreEqual("0", rgx.GroupNameFromNumber(0), "NameGroup2.GroupNameFromNumber(0)");
            Assert.AreEqual("name1", rgx.GroupNameFromNumber(1), "NameGroup2.GroupNameFromNumber(1)");
            Assert.AreEqual("name2", rgx.GroupNameFromNumber(2), "NameGroup2.GroupNameFromNumber(2)");

            rgx = new Regex("(?<name1>(?'inner1'))(?'name2')");
            Assert.AreEqual("0", rgx.GroupNameFromNumber(0), "NameGroup3.GroupNameFromNumber(0)");
            Assert.AreEqual("name1", rgx.GroupNameFromNumber(1), "NameGroup3.GroupNameFromNumber(1)");
            Assert.AreEqual("inner1", rgx.GroupNameFromNumber(2), "NameGroup3.GroupNameFromNumber(2)");
            Assert.AreEqual("name2", rgx.GroupNameFromNumber(3), "NameGroup3.GroupNameFromNumber(3)");

            Assert.AreEqual("", rgx.GroupNameFromNumber(999), "NameGroup3.GroupNameFromNumber(999)");

            rgx = new Regex("(?<test>)()");
            Assert.AreEqual("0", rgx.GroupNameFromNumber(0), "NameGroupAndNoname1.GroupNameFromNumber(0)");
            Assert.AreEqual("1", rgx.GroupNameFromNumber(1), "NameGroupAndNoname1.GroupNameFromNumber(1)");
            Assert.AreEqual("test", rgx.GroupNameFromNumber(2), "NameGroupAndNoname1.GroupNameFromNumber(2)");
        }

        [Test]
        public void GroupNumberFromNameTest()
        {
            var rgx = new Regex("");
            Assert.AreEqual(0, rgx.GroupNumberFromName("0"), "EmptyRegex.GroupNumberFromName(\"0\")");

            rgx = new Regex("()");
            Assert.AreEqual(0, rgx.GroupNumberFromName("0"), "EmptyGroup.GroupNumberFromName(\"0\")");
            Assert.AreEqual(1, rgx.GroupNumberFromName("1"), "EmptyGroup.GroupNumberFromName(\"1\")");

            rgx = new Regex("(group1)");
            Assert.AreEqual(0, rgx.GroupNumberFromName("0"), "Group1.GroupNumberFromName(\"0\")");
            Assert.AreEqual(1, rgx.GroupNumberFromName("1"), "Group1.GroupNumberFromName(\"1\")");

            rgx = new Regex("(group1)(group2)");
            Assert.AreEqual("0", rgx.GroupNameFromNumber(0), "Group2.GroupNameFromNumber(0)");
            Assert.AreEqual("1", rgx.GroupNameFromNumber(1), "Group2.GroupNameFromNumber(1)");
            Assert.AreEqual("2", rgx.GroupNameFromNumber(2), "Group2.GroupNameFromNumber(2)");

            rgx = new Regex("(group1())(group2)");
            Assert.AreEqual(0, rgx.GroupNumberFromName("0"), "Group3.GroupNumberFromName(\"0\")");
            Assert.AreEqual(1, rgx.GroupNumberFromName("1"), "Group3.GroupNumberFromName(\"1\")");
            Assert.AreEqual(2, rgx.GroupNumberFromName("2"), "Group3.GroupNumberFromName(\"2\")");
            Assert.AreEqual(3, rgx.GroupNumberFromName("3"), "Group3.GroupNumberFromName(\"3\")");

            rgx = new Regex("(?<name1>)");
            Assert.AreEqual(0, rgx.GroupNumberFromName("0"), "NameGroup1.GroupNumberFromName(\"0\")");
            Assert.AreEqual(1, rgx.GroupNumberFromName("name1"), "NameGroup1.GroupNumberFromName(\"name1\")");

            rgx = new Regex("(?<name1>)(?'name2')");
            Assert.AreEqual(0, rgx.GroupNumberFromName("0"), "NameGroup2.GroupNumberFromName(\"0\")");
            Assert.AreEqual(1, rgx.GroupNumberFromName("name1"), "NameGroup2.GroupNumberFromName(\"name1\")");
            Assert.AreEqual(2, rgx.GroupNumberFromName("name2"), "NameGroup2.GroupNumberFromName(\"name2\")");


            rgx = new Regex("(?<name1>(?'inner1'))(?'name2')");
            Assert.AreEqual(0, rgx.GroupNumberFromName("0"), "NameGroup3.GroupNumberFromName(\"0\")");
            Assert.AreEqual(1, rgx.GroupNumberFromName("name1"), "NameGroup3.GroupNumberFromName(\"name1\")");
            Assert.AreEqual(2, rgx.GroupNumberFromName("inner1"), "NameGroup3.GroupNumberFromName(\"inner1\")");
            Assert.AreEqual(3, rgx.GroupNumberFromName("name2"), "NameGroup3.GroupNumberFromName(\"name2\")");

            Assert.AreEqual(-1, rgx.GroupNumberFromName("Fake"), "NameGroup3.GroupNumberFromName(\"Fake\")");

            rgx = new Regex("(?<test>)()");
            Assert.AreEqual(0, rgx.GroupNumberFromName("0"), "NameGroupAndNoname1.GroupNumberFromName(\"0\")");
            Assert.AreEqual(1, rgx.GroupNumberFromName("1"), "NameGroupAndNoname1.GroupNumberFromName(\"1\")");
            Assert.AreEqual(2, rgx.GroupNumberFromName("test"), "NameGroupAndNoname1.GroupNumberFromName(\"test\")");
        }

        [Test]
        public void SupportedOptionsTest()
        {
            var supportedOptions = new Dictionary<RegexOptions, bool>
            {
                {RegexOptions.None, true},
                {RegexOptions.IgnoreCase, true},
                {RegexOptions.Multiline, true},
                {(RegexOptions) 0x0004, false},
                {(RegexOptions) 0x0008, false},
                {(RegexOptions) 0x0010, false},
                {(RegexOptions) 0x0020, false},
                {(RegexOptions) 0x0040, false},
                {(RegexOptions) 0x0100, false},
                {(RegexOptions) 0x0200, false}
            };

            foreach (var supportedOption in supportedOptions)
            {
                if (supportedOption.Value)
                {
                    var rgx = new Regex(Pattern, supportedOption.Key);
                }
                else
                {
                    Assert.Throws<NotSupportedException>(() => new Regex(Pattern, supportedOption.Key));
                }
            }
        }
    }
}