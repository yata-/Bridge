using Bridge;
using Bridge.QUnit;

using System.Collections.Generic;

namespace ClientTestLibrary
{
    // Bridge[#472]
    [FileName("testBridgeIssues.js")]
    internal class Bridge472
    {
        public static void Test(Assert assert)
        {
            assert.Expect(10);

            List<string> magic1 = new List<string>();
            magic1.Insert(magic1.Count, "first");
            magic1.Insert(magic1.Count, "second");

            assert.Equal(magic1[0], "first", "magic1[0]");
            assert.Equal(magic1[1], "second", "magic1[1]");

            List<string> magic2 = new List<string>();
            magic2.InsertRange(magic2.Count, new[] { "first", "second" });
            magic2.InsertRange(magic2.Count, new[] { "third", "fourth" });

            assert.Equal(magic2[0], "first", "magic1[0]");
            assert.Equal(magic2[1], "second", "magic1[1]");
            assert.Equal(magic2[2], "third", "magic1[2]");
            assert.Equal(magic2[3], "fourth", "magic1[3]");

            assert.Throws(() =>
            {
                List<string> magic = new List<string>();
                magic.Insert(1, "first");
            }, "Insert at length + 1");

            assert.Throws(() =>
            {
                List<string> magic = new List<string>();
                magic.Insert(-1, "first");
            }, "Insert at -1");

            assert.Throws(() =>
            {
                List<string> magic = new List<string>();
                magic.InsertRange(1, new[] { "first", "second" });
            }, "InsertRange at length + 1");

            assert.Throws(() =>
            {
                List<string> magic = new List<string>();
                magic.InsertRange(-1, new[] { "first", "second" });
            }, "InsertRange at -1");
        }
    }
}
