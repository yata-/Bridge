using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    internal static class Bridge588B
    {
        internal const int Valeur1 = 1;
        internal const int Valeur2 = Valeur1 + 1;

    }

    [FileName("testBridgeIssues.js")]
    public static class Bridge588A
    {
        public static int Add(int a, int b)
        {
            return a + b;
        }
        public static int Valeur3 = Add(Bridge588B.Valeur2, 1);
    }

    // Bridge[#559]
    [FileName("testBridgeIssues.js")]
    internal class Bridge588
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            assert.Equal(Bridge588A.Valeur3, 3, "Bridge588 TestUseCase");
        }
    }
}