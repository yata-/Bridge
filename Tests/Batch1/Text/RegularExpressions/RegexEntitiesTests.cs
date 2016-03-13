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

        [Test]
        public void CaseDataTest()
        {
            var m = GetTestDataMatch();

            ValidateMatch(m, 0, 19, "This is a sentance.", 2, true);

            ValidateGroup(m, 0, 0, 19, true, "This is a sentance.", 1);
            ValidateCapture(m, 0, 0, 0, 19, "This is a sentance.");

            ValidateGroup(m, 1, 10, 9, true, "sentance.", 4);
            ValidateCapture(m, 1, 0, 0, 5, "This ");
            ValidateCapture(m, 1, 1, 5, 3, "is ");
            ValidateCapture(m, 1, 2, 8, 2, "a ");
            ValidateCapture(m, 1, 3, 10, 9, "sentance.");
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

        #endregion

        #region Match

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

        #endregion
    }
}