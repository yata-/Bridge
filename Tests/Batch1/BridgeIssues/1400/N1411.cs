using Bridge.Test;
using System;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1411 - {0}")]
    public class Bridge1411
    {
        public class Thing
        {
            [Template("'test_string'")]
            public extern Thing();

            public Thing(int x)
            {
                // 2
            }
        }

        [Test]
        public static void TestTemplateCtor()
        {
            var c1 = new Thing();
            Assert.AreEqual("test_string", c1);

            var c2 = new Thing(1);
            Assert.True(c2 is Thing);
        }
    }
}
