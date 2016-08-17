using System;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1526 - {0}")]
    public class Bridge1526
    {
        [Test]
        public void TestRefOutInProperty()
        {
            Assert.AreEqual(0, Method());
            Assert.AreEqual(0, Property1);
            Assert.AreEqual(0, Property1);
        }

        public static int Property1
        {
            get
            {
                int levelKey;
                int.TryParse("", out levelKey);

                return levelKey;
            }
        }

        public static int Property2
        {
            get
            {
                int levelKey = 1;
                int.TryParse("", out levelKey);

                return levelKey;
            }
        }

        public static int Method()
        {
            int levelKey;
            int.TryParse("", out levelKey);

            return levelKey;
        }
    }
}