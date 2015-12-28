using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#674]
    [FileName("testBridgeIssues.js")]
    internal class Bridge674
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            object o = Script.Undefined;
            assert.Throws(() => { var s = (string)o; }, "Unable to cast type 'null' to type String");
        }
    }
}