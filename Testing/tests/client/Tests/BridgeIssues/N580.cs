using Bridge;
using Bridge.QUnit;
using System;
using System.Collections.Generic;
using System.Linq;
using Bridge.Html5;

namespace ClientTestLibrary
{
    // Bridge[#580]
    [FileName("testBridgeIssues.js")]
    internal class Bridge580
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(5);

            string[] arrs = new string[] { "s1", "s2" };
            string[] dst = new string[2];
            arrs.CopyTo(dst, 0);

            assert.Equal(dst.Length, 2, "Bridge580 Length");
            assert.Equal(dst[0], arrs[0], "Bridge580 0");
            assert.Equal(dst[1], arrs[1], "Bridge580 1");

            dst = new string[1];
            arrs.CopyTo(dst, 1);

            assert.Equal(dst.Length, 1, "Bridge580 Length 1");
            assert.Equal(dst[0], arrs[1], "Bridge580 1_1");
        }
    }
}