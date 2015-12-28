using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [External]
    [ObjectLiteral]
    public class Bridge647A
    {
        [Name("bar")]
        public int foo;
    }

    [External]
    [ObjectLiteral(DefaultValueMode.DefaultValue)]
    public class Bridge647B
    {
        [Name("bar")]
        public int foo;

        [Name("bar1")]
        public int foo1 = 12;
    }

    // Bridge[#647]
    [FileName("testBridgeIssues.js")]
    internal class Bridge647
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(3);

            var a = new Bridge647A { foo = 1 };
            assert.Equal(a["bar"], 1, "Bridge647 A");

            var b = new Bridge647B { foo = 1 };
            assert.Equal(b["bar"], 1, "Bridge647 B bar");
            assert.Equal(b["bar1"], 12, "Bridge647 B bar1");
        }
    }
}