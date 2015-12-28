using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    public class Bridge635A
    {
        [Name("internalFunc1")]
        protected virtual string Test1()
        {
            return "A.Test1";
        }
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge635B : Bridge635A
    {
        protected override string Test1()
        {
            return "B.Test1";
        }
    }

    // Bridge[#635]
    [FileName("testBridgeIssues.js")]
    internal class Bridge635
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(4);

            var a = new Bridge635A();
            var b = new Bridge635B();

            assert.Equal(Script.TypeOf(a["internalFunc1"]), "function", "Bridge635 A.internalFunc1");
            assert.Equal(Script.Get<Func<string>>(a, "internalFunc1")(), "A.Test1", "Bridge635 A.internalFunc1 Invoke");

            assert.Equal(Script.TypeOf(b["internalFunc1"]), "function", "Bridge635 B.internalFunc1");
            assert.Equal(Script.Get<Func<string>>(b, "internalFunc1")(), "B.Test1", "Bridge635 B.internalFunc1 Invoke");
        }
    }
}