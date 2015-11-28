using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    static class Bridge655A
    {
        internal static bool IsNullOrUndefined(this object subject)
        {
            return subject == Script.Undefined || subject == null;
        }
    }

    // Bridge[#655]
    [FileName("testBridgeIssues.js")]
    internal class Bridge655
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(2);

            Func<object> item = () => null;
            assert.Equal(item.IsNullOrUndefined(), false, "Bridge655 IsNullOrUndefined");
            assert.Equal(item(), null, "Bridge655 item");
        }
    }
}