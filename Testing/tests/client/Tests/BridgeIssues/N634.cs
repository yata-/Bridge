using System;
using System.Collections.Generic;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#634]
    [FileName("testBridgeIssues.js")]
    internal class Bridge634
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            var hashSet = new HashSet<string>();

            hashSet.Add("a");
            hashSet.Add("b");
            hashSet.Add("c");

            var text = ""; 

            foreach (string s in hashSet)
            {
                text += s;
            }

            assert.Equal(text, "abc", "Bridge634: foreach works for HashSet");
        }
    }
}