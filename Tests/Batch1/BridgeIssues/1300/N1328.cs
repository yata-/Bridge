using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1328 - {0}")]
    public class Bridge1328
    {
        [Test]
        public static void TestOptionalParams()
        {
            var l1 = new Link(url: "url", text: "test");
            var l2 = new Link2(url: "url", text: "test");

            Assert.AreEqual("some", l1.name);
            Assert.NotNull(l2.name);
        }

        public class Link
        {
            public string name;
            public Link(string url, string text, string name = "some")
            {
                this.name = name;
            }
        }

        public class Link2
        {
            public Optional<string> name;
            public Link2(string url, string text, Optional<string> name = new Optional<string>())
            {
                this.name = name;
            }
        }

        public struct Optional<T>
        {
        }
    }
}
