using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#817]
    [FileName("testBridgeIssues.js")]
    internal class Bridge817
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(2);

            assert.NotOk(!Char.IsLetterOrDigit('A'), "Bridge817 IsLetterOrDigit");
            assert.NotOk(!Char.IsLetterOrDigit("A", 0), "Bridge817 IsLetterOrDigit string");
        }
    }
}