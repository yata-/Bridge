using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#661]
    [FileName("testBridgeIssues.js")]
    internal class Bridge661
    {
        public static bool Example(char exampleInput = '\0')
        {
            return exampleInput == '\0';
        }

        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            assert.Equal(Example(), true, "Bridge661 Example true");
        }
    }
}