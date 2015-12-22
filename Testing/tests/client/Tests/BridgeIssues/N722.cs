using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#722]
    [FileName("testBridgeIssues.js")]
    internal class Bridge722
    {
        private int lastItem;
        public new int this[string item]
        {
            get
            {
                return lastItem;
            }
            set
            {
                lastItem = value;
            }
        }

        public static int M1(int i)
        {
            return i;
        }

        public static void TestUseCase(Assert assert)
        {
            assert.Expect(9);

            var c1 = new Bridge722();
            var asset1 = 1;
            asset1 = c1["path"] = 2;

            assert.Equal(asset1, 2, "Bridge722 asset1");
            assert.Equal(M1(c1["path"] = 3), 3, "Bridge722 M1 3");
            assert.Equal(M1(asset1 = c1["path"] = 4), 4, "Bridge722 M1 4");

            var c2 = new { };
            var asset2 = c2["path"] = 5;
            assert.Equal(asset2, 5, "Bridge722 asset2");
            assert.Equal(c2["path"], 5, "Bridge722 c2");

            var c3 = new Dictionary<string, int>();
            var asset3 = c3["path"] = 6;
            assert.Equal(asset3, 6, "Bridge722 asset3");
            assert.Equal(c3["path"], 6, "Bridge722 c3");

            decimal[] data4 = { 1m, 2m, 3m, 4m, 7m };
            var c4 = new Dictionary<string, decimal>();
            var asset4 = c4["path"] = data4.Select(x => x).Last();
            assert.Equal(asset4, 7, "Bridge722 asset4");
            assert.Equal(c4["path"], 7, "Bridge722 c4");
        }
    }
}