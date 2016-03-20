using System;
using System.Text.RegularExpressions.CoreFx;
using Bridge.Test;

namespace Bridge.ClientTest.Text.RegularExpressions.Entities
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex Entities - {0}")]
    public class RegexEntitiesTests : RegexTestBase
    {
        const string Pattern = @"((?:\w)+[\s\.])+";
        const string Text = @"This is a sentance. This is another sentance.";

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

        private static MatchCollection GetTestDataMatches()
        {
            var rgx = new Regex(Pattern);
            var m = rgx.Matches(Text);
            return m;
        }

        private static void ValidateCollection<T>(T[] expected, T[] actual, string msg)
        {
            if (expected == null)
            {
                Assert.Null(actual, msg + " is NULL");
            }
            else
            {
                Assert.NotNull(actual, msg + " is not NULL");
                Assert.AreEqual(expected.Length, actual.Length, msg + ".Length");
                for (int i = 0; i < expected.Length; i++)
                {
                    Assert.AreEqual(expected[i], actual[i], msg + "[" + i + "]");
                }
            }
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

        #region CaptureCollection

        [Test]
        public void CaptureCollectionFieldsTest()
        {
            var m = GetTestDataMatch();
            var group = m.Groups[1];
            var captures = group.Captures;

            Assert.AreEqual(4, captures.Count, "Captures.Count");
            Assert.AreEqual(true, captures.IsReadOnly, "Captures.IsReadOnly");
            Assert.AreEqual(false, captures.IsSynchronized, "Captures.IsSynchronized");
            Assert.AreEqual(group, captures.SyncRoot, "Captures.SyncRoot");
        }

        [Test]
        public void CaptureCollectionForeachTest()
        {
            var m = GetTestDataMatch();
            var group = m.Groups[1];
            var captures = group.Captures;

            var i = 0;
            foreach (var captureObj in captures)
            {
                var capture = captureObj as Capture;
                CapturesAreEqual(captures[i], capture, "Captures[" + i + "]");
                ++i;
            }
        }

        [Test]
        public void CaptureCollectionEnumeratorTest()
        {
            var m = GetTestDataMatch();
            var group = m.Groups[1];
            var captures = group.Captures;

            var en = captures.GetEnumerator();

            Assert.True(en.MoveNext(), "First call - MoveNext()");

            int i = 0;
            do
            {
                var capture = en.Current as Capture;
                CapturesAreEqual(captures[i], capture, "Captures[" + i + "]");
                ++i;

            } while (en.MoveNext());

            Assert.AreEqual(captures.Count, i, "Captures.Count");
        }

        [Test]
        public void CaptureCollectionCopyToTest()
        {
            var m = GetTestDataMatch();
            var group = m.Groups[1];
            var captures = group.Captures;

            var dstArray = new Capture[captures.Count];
            captures.CopyTo(dstArray, 0);

            for (int i = 0; i < captures.Count; i++)
            {
                CapturesAreEqual(captures[i], dstArray[i], "Captures[" + i + "]");
            }

            Assert.Throws(() => { captures.CopyTo(null, 0); }, err => err.GetClassName() == typeof(ArgumentNullException).GetClassName(), "Exception: Array is not null.");
            Assert.Throws(() => { captures.CopyTo(dstArray, 1); }, err => err.GetClassName() == typeof(IndexOutOfRangeException).GetClassName(), "Exception: Out of range.");
        }

        #endregion

        #region GroupCollection

        [Test]
        public void GroupCollectionFieldsTest()
        {
            var m = GetTestDataMatch();
            var groups = m.Groups;

            Assert.AreEqual(2, groups.Count, "Groups.Count");
            Assert.AreEqual(true, groups.IsReadOnly, "Groups.IsReadOnly");
            Assert.AreEqual(false, groups.IsSynchronized, "Groups.IsSynchronized");
            Assert.AreEqual(m, groups.SyncRoot, "Groups.SyncRoot");
        }

        [Test]
        public void GroupCollectionForeachTest()
        {
            var m = GetTestDataMatch();
            var groups = m.Groups;

            var i = 0;
            foreach (var groupObj in groups)
            {
                var group = groupObj as Group;
                GroupsAreEqual(groups[i], group, "Groups[" + i + "]");
                ++i;
            }
        }

        [Test]
        public void GroupCollectionEnumeratorTest()
        {
            var m = GetTestDataMatch();
            var groups = m.Groups;

            var en = groups.GetEnumerator();

            Assert.True(en.MoveNext(), "First call - MoveNext()");

            int i = 0;
            do
            {
                var group = en.Current as Group;
                GroupsAreEqual(groups[i], group, "Groups[" + i + "]");
                ++i;

            } while (en.MoveNext());

            Assert.AreEqual(groups.Count, i, "Groups.Count");
        }

        [Test]
        public void GroupCollectionCopyToTest()
        {
            var m = GetTestDataMatch();
            var groups = m.Groups;

            var dstArray = new Group[groups.Count];
            groups.CopyTo(dstArray, 0);

            for (int i = 0; i < groups.Count; i++)
            {
                GroupsAreEqual(groups[i], dstArray[i], "Groups[" + i + "]");
            }

            Assert.Throws(() => { groups.CopyTo(null, 0); }, err => err.GetClassName() == typeof(ArgumentNullException).GetClassName(), "Exception: Array is not null.");
            Assert.Throws(() => { groups.CopyTo(dstArray, 1); }, err => err.GetClassName() == typeof(IndexOutOfRangeException).GetClassName(), "Exception: Out of range.");
        }

        #endregion

        #region MatchCollection

        [Test]
        public void MatchCollectionFieldsTest()
        {
            var matches = GetTestDataMatches();

            Assert.AreEqual(2, matches.Count, "Matches.Count");
            Assert.AreEqual(true, matches.IsReadOnly, "Matches.IsReadOnly");
            Assert.AreEqual(false, matches.IsSynchronized, "Matches.IsSynchronized");
            Assert.AreEqual(matches, matches.SyncRoot, "Matches.SyncRoot");
        }

        [Test]
        public void MatchCollectionItemsTest()
        {
            var match1 = GetTestDataMatch();
            var match2 = GetTestDataMatch(2);
            var expected = new[] { match1, match2 };

            var matches = GetTestDataMatches();

            Assert.AreEqual(expected.Length, matches.Count);
            for (int i = 0; i < expected.Length; i++)
            {
                MatchesAreEqual(expected[i], matches[i], "Matches[" + i + "]");
            }
        }

        [Test]
        public void MatchCollectionForeachTest()
        {
            var match1 = GetTestDataMatch();
            var match2 = GetTestDataMatch(2);
            var expected = new[] { match1, match2 };

            var matches = GetTestDataMatches();
            var i = 0;
            foreach (var matchObj in matches)
            {
                var match = matchObj as Match;
                MatchesAreEqual(expected[i], match, "Matches[" + i + "]");
                ++i;
            }
        }

        [Test]
        public void MatchCollectionEnumeratorTest()
        {
            var match1 = GetTestDataMatch();
            var match2 = GetTestDataMatch(2);
            var expected = new[] { match1, match2 };

            var matches = GetTestDataMatches();

            var en = matches.GetEnumerator();

            Assert.True(en.MoveNext(), "First call - MoveNext()");

            int i = 0;
            do
            {
                var match = en.Current as Match;
                MatchesAreEqual(expected[i], match, "Matches[" + i + "]");
                ++i;

            } while (en.MoveNext());

            Assert.AreEqual(expected.Length, i, "Matches.Count");
        }

        [Test]
        public void MatchCollectionCopyToTest()
        {
            var matches = GetTestDataMatches();
            var dstArray = new Match[matches.Count];
            matches.CopyTo(dstArray, 0);

            for (int i = 0; i < matches.Count; i++)
            {
                MatchesAreEqual(matches[i], dstArray[i], "Matches[" + i + "]");
            }

            Assert.Throws(() => { matches.CopyTo(null, 0); }, err => err.GetClassName() == typeof(ArgumentNullException).GetClassName(), "Exception: Array is not null.");
            Assert.Throws(() => { matches.CopyTo(dstArray, 1); }, err => err.GetClassName() == typeof(IndexOutOfRangeException).GetClassName(), "Exception: Out of range.");
        }

        [Test]
        public void MatchCollectionWithEmptyPatternTest()
        {
            var pattern = @"";
            var tstText = @"characters";

            var rx = new Regex(pattern);
            var matches = rx.Matches(tstText);

            Assert.AreEqual(tstText.Length + 1, matches.Count);
            for (int i = 0; i < matches.Count; i++)
            {
                Assert.AreEqual(i, matches[i].Index, "Matches[" + i + "].Index");
                Assert.AreEqual(0, matches[i].Length, "Matches[" + i + "].Length");
            }
        }

        #endregion

        #region Match

        [Test]
        public void MatchEmptyPatternTest()
        {
            var pattern = @"";
            var tstText = @"characters";

            var rx = new Regex(pattern);
            var m = rx.Match(tstText);

            ValidateMatch(m, 0, 0, "", 1, true);
        }

        [Test]
        public void MatchEmptyFieldsTest()
        {
            var m = Match.Empty;
            ValidateMatchNotFound(m);
        }

        [Test]
        public void MatchNextMatchTest()
        {
            var match1 = GetTestDataMatch();
            var match2 = GetTestDataMatch(2);

            var actual = match1.NextMatch();
            MatchesAreEqual(match2, actual, "Matches[1]");

            actual = actual.NextMatch();
            MatchesAreEqual(Match.Empty, actual, "Matches[1] is Empty");

            actual = Match.Empty.NextMatch();
            MatchesAreEqual(Match.Empty, actual, "Empty.NextMatch()");
        }

        [Test]
        public void MatchNextMatchWithEmptyPatternTest()
        {
            var pattern = @"";
            var tstText = @"characters";

            var rx = new Regex(pattern);
            var m = rx.Match(tstText);
            ValidateMatch(m, 0, 0, "", 1, true);

            for (int i = 1; i < tstText.Length+1; i++)
            {
                m = m.NextMatch();
                ValidateMatch(m, i, 0, "", 1, true);
            }

            m = m.NextMatch();
            ValidateMatchNotFound(m);
        }

        #endregion

        #region Regex

        [Test]
        public void GetGroupNamesTest()
        {
            var rgx = new Regex("");
            var names = rgx.GetGroupNames();
            ValidateCollection(new[]{"0"}, names, "EmptyRegex");

            rgx = new Regex("()");
            names = rgx.GetGroupNames();
            ValidateCollection(new[] { "0", "1" }, names, "EmptyGroup");

            rgx = new Regex("(group1)");
            names = rgx.GetGroupNames();
            ValidateCollection(new[] { "0", "1" }, names, "Group1");

            rgx = new Regex("(group1)(group2)");
            names = rgx.GetGroupNames();
            ValidateCollection(new[] { "0", "1", "2" }, names, "Group2");

            rgx = new Regex("(group1())(group2)");
            names = rgx.GetGroupNames();
            ValidateCollection(new[] { "0", "1", "2", "3" }, names, "Group3");

            rgx = new Regex("(?<name1>)");
            names = rgx.GetGroupNames();
            ValidateCollection(new[] { "0", "name1" }, names, "NameGroup1");

            rgx = new Regex("(?<name1>)(?'name2')");
            names = rgx.GetGroupNames();
            ValidateCollection(new[] { "0", "name1", "name2" }, names, "NameGroup2");

            rgx = new Regex("(?<name1>(?'inner1'))(?'name2')");
            names = rgx.GetGroupNames();
            ValidateCollection(new[] { "0", "name1", "inner1", "name2" }, names, "NameGroup3");
        }

        [Test]
        public void GetGroupNumbersTest()
        {
            var rgx = new Regex("");
            var numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] { 0 }, numbers, "EmptyRegex");

            rgx = new Regex("()");
            numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] { 0, 1 }, numbers, "EmptyGroup");

            rgx = new Regex("(group1)");
            numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] { 0, 1 }, numbers, "Group1");

            rgx = new Regex("(group1)(group2)");
            numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] { 0, 1, 2 }, numbers, "Group2");

            rgx = new Regex("(group1())(group2)");
            numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] { 0, 1, 2, 3 }, numbers, "Group3");

            rgx = new Regex("(?<name1>)");
            numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] { 0, 1 }, numbers, "NameGroup1");

            rgx = new Regex("(?<name1>)(?'name2')");
            numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] { 0, 1, 2 }, numbers, "NameGroup2");

            rgx = new Regex("(?<name1>(?'inner1'))(?'name2')");
            numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] { 0, 1, 2, 3 }, numbers, "NameGroup3");
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
        }

        #endregion
    }
}