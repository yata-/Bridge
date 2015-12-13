using System;
using System.Threading.Tasks;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    public class Bridge690A
    {
        private int i3 = 3;
        public async Task<int> AsyncSum(int i1, int i2)
        {
            await Task.Delay(100);
            return i1 + i2 + this.i3;
        }

        public async Task<int> Start()
        {
            return await this.AsyncSum(2, 3);
        }
    }

    // Bridge[#690]
    [FileName("testBridgeIssues.js")]
    internal class Bridge690
    {
        public static async void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            var done = assert.Async();
            var c = new Bridge690A();
            var r = await c.Start();

            assert.Equal(r, 8, "Bridge690 TestUseCase");
            done();
        }
    }
}