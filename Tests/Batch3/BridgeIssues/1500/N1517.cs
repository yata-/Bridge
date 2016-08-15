using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1517 - {0}")]
    public class Bridge1517
    {
        [Test]
        public void TestTupleEquality()
        {
            Tuple<int> a1 = new Tuple<int>(1);
            Tuple<int> b1 = new Tuple<int>(1);
            Assert.True(a1.Equals(b1));
            Assert.True(a1.GetHashCode() == b1.GetHashCode());

            Tuple<int, int> a2 = new Tuple<int, int>(1, 2);
            Tuple<int, int> b2 = new Tuple<int, int>(1, 2);
            Assert.True(a2.Equals(b2));
            Assert.True(a2.GetHashCode() == b2.GetHashCode());
        }
    }
}