using System;
using System.Collections;
using Bridge.Html5;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1467 - {0}")]
    public class Bridge1467
    {
        [Test]
        public static void TestHtmlElements()
        {
            Assert.Throws<InvalidCastException>(() =>
            {
                foreach (int a in (IEnumerable)new[] { "h" })
                {
                    Console.WriteLine(a);
                }
            });
        }
    }
}