using Bridge;
using Bridge.QUnit;

using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    public class Bridge625A : IEqualityComparer<int>
    {
        public bool Equals(int x, int y)
        {
            return x == y;
        }

        public int GetHashCode(int obj)
        {
            return obj.GetHashCode();
        }
    }

    // Bridge[#625]
    [FileName("testBridgeIssues.js")]
    internal class Bridge625
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(4);

            var list = new int[] { 1, 2, 3 };

            var d1 = list.ToDictionary(x => x);
            assert.Ok(d1 is Dictionary<int, int>,"Bridge625 d1");

            var d2 = list.ToDictionary(x => x, new Bridge625A());
            assert.Ok(d2 is Dictionary<int, int>, "Bridge625 d2");

            var d3 = list.ToDictionary(x => x, y => y);
            assert.Ok(d3 is Dictionary<int, int>, "Bridge625 d3");

            var d4 = list.ToDictionary(x => x, y => y, new Bridge625A());
            assert.Ok(d4 is Dictionary<int, int>, "Bridge625 d4");

        }
    }
}