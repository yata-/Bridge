using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    public abstract class Bridge693A<T>
    {
        protected Bridge693A(T props) { }
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge693B : Bridge693A<Bridge693B.Bridge693C>
    {
        public Bridge693B() : base(new Bridge693C()) { }

        public class Bridge693C : IBridge693D { }
    }

    [FileName("testBridgeIssues.js")]
    public interface IBridge693D { }

    // Bridge[#708]
    [FileName("testBridgeIssues.js")]
    internal class Bridge693
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            var c = new Bridge693B();
            assert.NotEqual(c, null, "Bridge693 not null");
        }
    }
}