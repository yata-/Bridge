using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#793]
    [FileName("testBridgeIssues.js")]
    internal class Bridge793
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(5);

            List<string> js = new List<string>();
            js.Add("1");
            ReadOnlyCollection<string> test = new ReadOnlyCollection<string>(js);
            assert.Equal(test.Count, 1, "Bridge793 Count");
            assert.Equal(test[0], "1", "Bridge793 [0]");

            var ilist = (IList<string>)test;

            assert.Throws(() => { ilist[0] = "0"; }, "Bridge793 Setter should throw an exception");
            assert.Throws(() => { ilist.Add("1"); }, "Bridge793 Add should throw an exception");
            assert.Throws(() => { ilist.RemoveAt(0); }, "Bridge793 RemoveAt should throw an exception");
        }
    }
}