using System;
using Bridge.Test;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1189 - {0}")]
    public class Bridge1189
    {
        [Test]
        public async static void TestTaskNumber()
        {
            var done = Assert.Async();
            var resultLong = await Bridge1189.FooLong();
            Assert.True(-1 == resultLong);

            var resultDecimal = await Bridge1189.FooDecimal();
            Assert.True(-1 == resultDecimal);

            done();
        }

        public static async Task<long> FooLong()
        {
            await Task.Delay(1);
            return -1;
        }

        public static async Task<decimal> FooDecimal()
        {
            await Task.Delay(1);
            return -1;
        }
    }
}