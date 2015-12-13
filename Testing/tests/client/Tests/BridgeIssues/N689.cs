using System;
using Bridge;
using Bridge.QUnit;
using Bridge.Html5;

namespace ClientTestLibrary
{
    // Bridge[#689]
    [FileName("testBridgeIssues.js")]
    internal class Bridge689
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            Func<string, int> fn = Global.ParseInt;
            assert.Equal(fn("5"), 5, "Bridge689 should equals 5");
        }
    }
}