using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#503]
    [FileName("testBridgeIssues.js")]
    internal class Bridge503
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(4);

            var a = new string[] { "a", "b", "c" };
            var list = new System.Collections.Generic.List<string>(a);

            list.AddRange(a);

            assert.Equal(a.Length, 3, "Bridge503: array.Length is correct");
            assert.Equal(list.Count, 6, "Bridge503: list.Count is correct");

            list.Clear();

            assert.Equal(a.Length, 3, "Bridge503: array.Length is correct");
            assert.Equal(list.Count, 0, "Bridge503: list.Count is correct");
        }
    }
}