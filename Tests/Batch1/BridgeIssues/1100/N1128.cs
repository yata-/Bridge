using Bridge.Test;

using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1128 - {0}")]
    public class Bridge1128
    {
        [Test]
        public static void TestNestedClassesWithInterface()
        {
            string res = Foo.Items[0].Value;
            Assert.AreEqual("test", res);

            res = Foo1.Items[0].Value;
            Assert.AreEqual("abc", res);
        }

        class Foo1
        {

            public static readonly Item[] Items = new Item[] {
                new Item("test"),
                new Item("xyz"),
                new Item("abc")
            };

            public struct Item : IComparable<Item>
            {
                public string Value;
                public Item(string value)
                {
                    Value = value;
                }

                public int CompareTo(Item other)
                {
                    return String.Compare(Value, other.Value);
                }
            }

            class Comparer : IComparer<Item>
            {
                public int Compare(Item x, Item y)
                {
                    return String.Compare(x.Value, y.Value);
                }
            }

            static Foo1()
            {
                Array.Sort(Items, new Comparer()); // throws
            }

        }

        class Foo
        {

            public static readonly Item[] Items = new Item[] {
                new Item("test") // ctor throws
            };
            public struct Item : IComparable<Item>
            {
                public string Value;
                public Item(string value)
                {
                    Value = value;
                }

                public int CompareTo(Item other)
                {
                    return String.Compare(Value, other.Value);
                }
            }

            static Foo()
            {
                Array.Sort(Items);
            }
        }
    }
}