using System.Collections.Generic;
using System.Threading.Tasks;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#906]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#906 - {0}")]
    public class Bridge906
    {
        public static async Task myfunc()
        {
            await Task.Delay(1);
        }
        
        //TODO: Async
        // [Test(ExpectedCount = 2)]
        public static async void TestDecimalConversion()
        {
            var myvar = new [] {new {Value = 1}, new {Value = 2}};
            int sum = 0;
            await myfunc();

            foreach (var d in myvar)
            {
                if (d.Value > 0)
                {
                    sum += d.Value;
                }
            }

            await myfunc();

            Assert.AreEqual(sum, 3);
        }
    }
}