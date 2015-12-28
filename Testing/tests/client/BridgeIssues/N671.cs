using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    public class Bridge671A
    {
        private Func<int> func;

        public Bridge671A(Func<int> func)
        {
            this.func = func;
        }

        public int Invoke()
        {
            return func();
        }
    }

    // Bridge[#671]
    [FileName("testBridgeIssues.js")]
    internal class Bridge671
    {
        private int One = 1;

        private int GetOne()
        {
            return One;
        }

        public int Invoke()
        {
            var b = new Bridge671A(GetOne);
            return b.Invoke();
        }

        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            assert.Equal(new Bridge671().Invoke(), 1);
        }
    }
}