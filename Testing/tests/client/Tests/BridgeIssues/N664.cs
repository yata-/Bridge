using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [External]
    internal sealed class Bridge664A
    {
        private Bridge664A() { }
        public static implicit operator Bridge664A(string text)
        {
            return null;
        }
    }

    [External]
    internal class Bridge664B
    {
        public Bridge664B() { }
        //public static implicit operator Bridge664B(string text)
        //{
        //    return null;
        //}
    }

    [External]
    internal class Bridge664C : Bridge664B
    {

    }

    // Bridge[#664]
    [FileName("testBridgeIssues.js")]
    internal class Bridge664
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(2);

            Func<string, Bridge664A> f = s => (Bridge664A)s;
            // if cast will be emitted then exception will be thrown because Bridge664A is not emitted
            assert.Equal(f("test"), "test", "Bridge664");

            assert.Throws(() => { Bridge664C b = Script.Write<Bridge664C>("{ }"); var s = (Bridge664B)b; }, "Bridge664 Should throw exception");


        }
    }
}