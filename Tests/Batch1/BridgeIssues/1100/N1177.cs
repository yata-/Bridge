using Bridge.Test;

using System;
using Bridge.Html5;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1177 - {0}")]
    public class Bridge1177
    {
        [Test]
        public static void TestImplicitCast()
        {
            var item = new Item("Test1");
            var s = (string) item;
            Assert.AreEqual("Test1", s);
        }

        public class Item
        {
            private string value;
            public Item(string value)
            {
                this.value = value;
            }
            public static implicit operator string(Item item)
            {
                return item.value;
            }
        }
    }
}