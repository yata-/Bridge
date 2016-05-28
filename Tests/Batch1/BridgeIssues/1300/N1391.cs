using System.Text;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1391 - {0}")]
    public class Bridge1391
    {
        static StringBuilder builder;
        public static StringBuilder Builder
        {
            get
            {
                return builder ?? (builder = new StringBuilder());
            }
        }

        class Foo
        {
            static Foo()
            {
                Builder.Append("Foo");
            }
        }

        class Bar
        {
            static int i = Init();

            static int Init()
            {
                Builder.Append("Bar");
                return 0;
            }
        }

        [Test]
        public static void TestStaticCtorOrder()
        {
            Builder.Clear();

            Foo f = new Foo();
            Bar b = new Bar();
            Assert.AreEqual("FooBar", builder.ToString());
        }
    }
}
