using System;
using Bridge.Test;
using System.Collections.Generic;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1200 - {0}")]
    public class Bridge1200
    {
        public delegate string SomeDel();

        class NotWorking<T>
        {
            public event SomeDel IsNotWorking;
            public string Validate()
            {
                return IsNotWorking == null ? "no subscribers" : IsNotWorking();
            }
        }

        [Test]
        public static void TestEventNameCase()
        {
            var wrong = new NotWorking<int>();
            wrong.IsNotWorking += () => "somevalue";
            Assert.AreEqual("somevalue", wrong.Validate());
        }
    }
}