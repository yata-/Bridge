using System;
using System.Collections.Generic;
using System.Text.RegularExpressions.CoreFx;
using Bridge.Test;

namespace Bridge.ClientTest.Text.RegularExpressions.CoreFx
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex.Match - {0}")]
    public class MatchTests : RegexTestBase
    {
        #region Instance methods

        [Test(ExpectedCount = 0)]
        public void MatchGroup()
        {
            var pattern = @"ra(i)?n";
            var text = @"zranz";

            var rgx = new Regex(pattern);
            var m = rgx.Match(text);
        }

        [Test]
        public void MatchCapture()
        {
            var pattern = @"(g\d(a)+x\s*)+";
            var text = @"g1aaax g2aaax";

            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 13, "g1aaax g2aaax", 3);

            ValidateGroup(m, 0, 0, 13, true, "g1aaax g2aaax", 1);
            ValidateCapture(m, 0, 0, 0, 13, "g1aaax g2aaax");

            ValidateGroup(m, 1, 7, 6, true, "g2aaax", 2);
            ValidateCapture(m, 1, 0, 0, 7, "g1aaax ");
            ValidateCapture(m, 1, 1, 7, 6, "g2aaax");

            ValidateGroup(m, 2, 11, 1, true, "a", 6);
            ValidateCapture(m, 2, 0, 2, 1, "a");
            ValidateCapture(m, 2, 1, 3, 1, "a");
            ValidateCapture(m, 2, 2, 4, 1, "a");
            ValidateCapture(m, 2, 3, 9, 1, "a");
            ValidateCapture(m, 2, 4, 10, 1, "a");
            ValidateCapture(m, 2, 5, 11, 1, "a");
        }

        [Test]
        public void MatchTest()
        {
            var text = @"One car red car blue car";
            var pattern = @"(\w+)\s+(car)";

            var rgx = new Regex(pattern, RegexOptions.IgnoreCase);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 7, "One car", 3);

            //ValidateGroup(m, 0, 0, 7, true, "One car", 1);
            //ValidateGroup(m, 1, 0, 3, true, "One");
            //ValidateGroup(m, 2, 4, 3, true, "car");

            //TODO: Enable [switched off] Captures
            //Assert.NotNull(m.Captures);
            //Assert.AreEqual(1, m.Captures.Count);
            //var innerCapture = m.Captures[0];
            //Assert.AreEqual(m.Index, innerCapture.Index);
            //Assert.AreEqual(m.Length, innerCapture.Length);
            //Assert.AreEqual(m.Value, innerCapture.Value);


            //TODO: m.NextMatch()
            //TODO: m.Result()
        }

        #endregion

        #region Static methods

        #endregion
    }
}