using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    public class Bridge623A
    {
        public Bridge623A(int foo, Func<int> func)
        {
            this.foo = foo;
            this.func = func;
        }

        public int foo;
        public Func<int> func;

        public int Call()
        {
            return this.func();
        }
    }

    // Bridge[#623]
    [FileName("testBridgeIssues.js")]
    internal class Bridge623
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(2);

            Func<int> func = () => Script.Caller<Bridge623A>().foo;

            var point1 = new Bridge623A(1, func);
            var point2 = new Bridge623A(2, func);

            assert.Equal(point1.Call(), 1, "Bridge623 point1");
            assert.Equal(point2.Call(), 2, "Bridge623 point2");
        }
    }
}