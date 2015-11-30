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

    // Bridge[#664]
    [FileName("testBridgeIssues.js")]
    internal class Bridge664
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            Func<string, Bridge664A> f = s => (Bridge664A)s;
            // if cast will be emitted then exception will be thrown because Bridge664A is not emitted
            assert.Equal(f("test"), "test", "Bridge664");
        }
    }
}