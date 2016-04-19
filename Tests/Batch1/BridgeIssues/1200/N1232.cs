using System;
using Bridge.Test;
using System.Collections.Generic;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1232 - {0}")]
    public class Bridge1232
    {
        public class Test
        {
            public string[] A { get; set; }

            public Test(int a, params string[] str)
            {
                A = str;
            }

            public Test(params string[] str)
                : this(1, str)
            {
            }
        }

        [Test]
        public static void TestParamsInThisCtorInit()
        {
            var t = new Test("a", "b");
            Assert.AreEqual(2, t.A.Length);
            Assert.AreEqual("a", t.A[0]);
            Assert.AreEqual("b", t.A[1]);
        }
    }
}