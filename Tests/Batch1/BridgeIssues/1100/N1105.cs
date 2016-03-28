using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1105 - {0}")]
    public class Bridge1105
    {
        [Test]
        public static void TestStaticInitForNestedClasses()
        {
            Assert.AreEqual("test", Foo.Items[0].Value);
            Assert.AreEqual("Value1", Foo1.DefaultItem);
        }

        class Foo
        {
            public static readonly List<Item> Items = new List<Item>() { new Item("test") };
            public class Item
            {
                public string Value;
                public Item(string value)
                {
                    Value = value;
                }
            }
        }


        class Foo1
        {
            public static string DefaultItem = Item.Value;
            public class Item
            {
                public static string Value = "Value1";
            }
        }
    }
}