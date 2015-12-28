using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.QUnit;
using Bridge.Html5;

namespace ClientTestLibrary
{
    // Bridge[#689]
    [FileName("testBridgeIssues.js")]
    public class Bridge694
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(3);

            var fruits = new object[3];
            fruits[0] = "mango";
            fruits[1] = "apple";
            fruits[2] = "lemon";

            var list = fruits.Cast<string>().OrderBy(fruit => fruit).Select(fruit => fruit).ToList();
            assert.Equal(list[0], "apple", "Bridge694 apple");
            assert.Equal(list[1], "lemon", "Bridge694 lemon");
            assert.Equal(list[2], "mango", "Bridge694 mango");
        }
    }
}