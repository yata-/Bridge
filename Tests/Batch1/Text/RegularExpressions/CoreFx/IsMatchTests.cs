using System;
using System.Text.RegularExpressions.CoreFx;
using Bridge.Test;

namespace Bridge.ClientTest.Text.RegularExpressions.CoreFx
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex.IsMatch - {0}")]
    public class IsMatchTests
    {
        [Test]
        public void IsMatchTest()
        {
            string[] testValues =
            {
                "1298-673-4192",
                "A08Z-931-468A",
                "_A90-123-129X",
                "12345-KKA-1230",
                "0919-2893-1256"
            };
            bool[] expected = { true, true, false, false, false };

            CheckTestValues(testValues, expected);

            var rgx = new Regex(@"^[a-zA-Z0-9]\d{2}[a-zA-Z0-9](-\d{3}){2}[A-Za-z0-9]$");
            for (int i = 0; i < testValues.Length; i++)
            {
                var actual = rgx.IsMatch(testValues[i]);
                Assert.AreEqual(expected[i], actual);
            }
        }

        [Test]
        public void IsMatchWithOffsetTest()
        {
            string[] testValues =
            {
                "ID: 1234-567-8901",
                "Identifier: A170-222-777z",
                "1234-567-8901 IDENTITY: 9287-5555-1233"
            };
            bool[] expected = { true, true, false};

            CheckTestValues(testValues, expected);

            var rgx = new Regex(@"[a-zA-Z0-9]\d{2}[a-zA-Z0-9](-\d{3}){2}[A-Za-z0-9]");
            for (int i = 0; i < testValues.Length; i++)
            {
                int startAt = testValues[i].IndexOf(':');
                var actual = rgx.IsMatch(testValues[i], startAt);
                Assert.AreEqual(expected[i], actual);
            }
        }

        private static void CheckTestValues<T1, T2>(T1[] testValues, T2[] expectedValues)
        {
            if (expectedValues == null || testValues == null || expectedValues.Length != testValues.Length)
            {
                Assert.Fail("Test data should have the same length.");
            }
        }
    }
}