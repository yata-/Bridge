using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#758]
    [FileName("testBridgeIssues.js")]
    internal class Bridge758
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(3);

            List<DateTime> list = new List<DateTime>();
            list.Add(new DateTime(2015, 1, 2));
            list.Add(new DateTime(2015, 1, 1));
            list.Add(new DateTime(2015, 1, 3));

            list.Sort();
            assert.Ok(list[0] == new DateTime(2015, 1, 1), "Bridge758 2015/1/1");
            assert.Ok(list[1] == new DateTime(2015, 1, 2), "Bridge758 2015/1/2");
            assert.Ok(list[2] == new DateTime(2015, 1, 3), "Bridge758 2015/1/3");
        }
    }
}