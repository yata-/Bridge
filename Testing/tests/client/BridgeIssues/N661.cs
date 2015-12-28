using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#661]
    [FileName("testBridgeIssues.js")]
    internal class Bridge661
    {
        public static bool Example1(char exampleInput = '\0')
        {
            return exampleInput == '\0';
        }

        public static bool Example2(char exampleInput = '1')
        {
            return exampleInput == '1';
        }

        public static void TestUseCase(Assert assert)
        {
            assert.Expect(6);

            assert.Equal(Example1(), true, "Bridge661 Example1 true default");
            assert.Equal(Example1('\0'), true, "Bridge661 Example1 true");
            assert.Equal(Example1('A'), false, "Bridge661 Example1 false");

            assert.Equal(Example2(), true, "Bridge661 Example2 true default");
            assert.Equal(Example2('1'), true, "Bridge661 Example2 true");
            assert.Equal(Example2('\0'), false, "Bridge661 Example2 false");
        }
    }
}