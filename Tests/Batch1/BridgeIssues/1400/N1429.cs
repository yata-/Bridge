using Bridge.Test;
using System;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1429 - {0}")]
#pragma warning disable 660,661
    public class Bridge1429
#pragma warning restore 660,661
    {
        public static bool operator ==(Bridge1429 a, object b) { return true; }
        public static bool operator !=(Bridge1429 a, object b) { return true; }

        [Test]
        public static void TestEqOperatorWithNull()
        {
            Assert.True(new Bridge1429() == null);
        }
    }
}
