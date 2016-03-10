using System.Text.RegularExpressions.CoreFx;
using Bridge.Test;

namespace Bridge.ClientTest.Text.RegularExpressions
{
    public class RegexTestBase
    {
        protected void ValidateMatchNotFound(Match match)
        {
            ValidateMatch(match, 0, 0, "", 0, false);
        }

        protected void ValidateMatch(Match match, int index, int length, string value, int groupCount, bool success = true)
        {
            ValidateGroupImpl(match, index, length, success, value, 1, "ValidateMatch: Match");

            Assert.NotNull(match.Groups, "ValidateMatch: Match.Groups is not NULL");
            Assert.AreEqual(groupCount, match.Groups.Count);
            if (groupCount > 0)
            {
                ValidateGroupImpl(match.Groups[0], index, length, success, value, 1, "ValidateMatch: Match.Group0");
            }

            Assert.NotNull(match.Captures, "ValidateMatch: Match.Captures is not NULL");
            Assert.AreEqual(1, match.Captures.Count, "ValidateMatch: Match.Captures.Count");
            ValidateCaptureImpl(match.Captures[0], index, length, value, "ValidateMatch: Match.Capture0");
        }

        protected void ValidateGroup(Match match, int groupIndex, int index, int length, bool success, string value, int captureCount)
        {
            var group = match.Groups[groupIndex];
            ValidateGroupImpl(group, index, length, success, value, captureCount, "ValidateGroup: Group" + groupIndex);
        }

        private void ValidateGroupImpl(Group group, int index, int length, bool success, string value, int captureCount, string descr)
        {
            ValidateCaptureImpl(group, index, length, value, descr);
            Assert.AreEqual(success, group.Success, descr +".Success");

            Assert.NotNull(group.Captures, descr + ".Captures is not NULL");
            Assert.AreEqual(captureCount, group.Captures.Count, descr + ".Captures.Count");
        }

        protected void ValidateCapture(Match match, int groupIndex, int captureIndex, int index, int length, string value)
        {
            Assert.NotNull(match, "ValidateCapture: Match is not NULL");
            Assert.NotNull(match.Groups, "ValidateCapture: Match.Groups is not NULL");
            var group = match.Groups[groupIndex];

            Assert.NotNull(group, "ValidateCapture: Group" + groupIndex + " is not NULL");
            Assert.NotNull(group.Captures, "ValidateCapture: Group" + groupIndex + ".Captures is not NULL");
            var capture = group.Captures[captureIndex];

            ValidateCaptureImpl(capture, index, length, value,
                "ValidateCapture: Group" + groupIndex + ".Capture" + captureIndex);
        }

        private void ValidateCaptureImpl(Capture capture, int index, int length, string value, string descr)
        {
            Assert.NotNull(capture, descr + " is not NULL");

            Assert.AreEqual(index, capture.Index, descr + ".Index");
            Assert.AreEqual(length, capture.Length, descr + ".Length");
            Assert.AreEqual(value, capture.Value, descr + ".Value");
            Assert.AreEqual(value, capture.ToString(), descr + ".ToString()");
        }
    }
}