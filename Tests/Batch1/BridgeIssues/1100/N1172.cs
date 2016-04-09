using System;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1172 - {0}")]
    public class Bridge1072
    {
        [Test]
        public static void TestNameForProperty()
        {
            var c = new Class1();
           Assert.NotNull(c["getAccessor"]);
           Assert.NotNull(c["setAccessor"]);
           Assert.AreEqual(1, c.Prop1);
        }

        class Class1
        {
            public int Prop1
            {
                [Name("getAccessor")]
                get
                {
                    return 1;
                }
                [Name("setAccessor")]
                set
                {

                }
            }
        }
    }
}