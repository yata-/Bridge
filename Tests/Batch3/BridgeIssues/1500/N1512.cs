using System;
using Bridge.Test;

using System.ComponentModel;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1512 - {0}")]
    public class Bridge1512
    {
        public static void Method(params object[] arguments)
        {
            Assert.AreEqual(0, arguments.Length);
        }

        [Test]
        public void TestParametersReservedNames()
        {
            Bridge1512.Method();
        }
    }
}