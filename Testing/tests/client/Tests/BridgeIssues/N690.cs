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

    [FileName("testBridgeIssues.js")]
    public class Bridge690B
    {
        private static int i3 = 17;
        public static async Task<int> AsyncSum(int i1, int i2)
        {
            await Task.Delay(100);
            return i1 + i2 + i3;
        }

        public static async Task<int> Start()
        {
            return await AsyncSum(19, 23);
        }
    }

    // Bridge[#690]
    [FileName("testBridgeIssues.js")]
    internal class Bridge690
    {
        public static async void TestUseCaseForInstance(Assert assert)
        {
            assert.Expect(1);

            var done = assert.Async();
            var c = new Bridge690A();
            var r = await c.Start();

            assert.Equal(r, 8, "Bridge690 TestUseCaseForInstance");
            done();
        }

        public static async void TestUseCaseForStatic(Assert assert)
        {
            assert.Expect(1);

            var done = assert.Async();
            var r = await Bridge690B.Start();

            assert.Equal(r, 59, "Bridge690 TestUseCaseForStatic");
            done();
        }
    }
}