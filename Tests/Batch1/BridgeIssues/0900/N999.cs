using System;
using System.Linq;
using Bridge.Html5;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#999]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#999 - {0}")]
    public class Bridge999
    {
        [Test(ExpectedCount = 9)]
        public static void TestNestedLambdasToLifting()
        {
            var offset = 1;
            Func<string> f1 = () =>
            {
                return string.Join(", ", new[] { 1, 2, 3 }.Select(value => value));
            };

            Func<string> f2 = () =>
            {
                return string.Join(", ", new[] {4, 5, 6}.Select(value => value + offset));
            };

            Func<string> f3 = () =>
            {
                Func<string> f4 = () =>
                {
                    return string.Join(", ", new[] { 7, 8, 9 }.Select(value => value + offset));
                };

                return f4();
            };

            dynamic scope = Script.Get("$_.Bridge.ClientTest.BridgeIssues.Bridge999");

            Assert.NotNull(scope.f1);
            Assert.NotNull(scope.f2);
            Assert.Null(scope.f3);
            Assert.Null(scope.f4);
            Assert.AreEqual(scope.f1(1), 1);
            Assert.AreEqual(scope.f2(), "1, 2, 3");
            Assert.AreEqual(f1(), "1, 2, 3");
            Assert.AreEqual(f2(), "5, 6, 7");
            Assert.AreEqual(f3(), "8, 9, 10");
        }
    }
}