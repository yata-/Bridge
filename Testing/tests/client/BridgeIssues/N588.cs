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

    [FileName("testBridgeIssues.js")]
    public class Bridge588C
    {
        public class C1
        {
            private static readonly C1 _default = new C1(C2.Default);
            public static C1 Default { get { return _default; } }

            public C1(C2 value)
            {
                Value = value;
            }

            public C2 Value { get; private set; }
        }

        public class C2
        {
            private static readonly C2 _default = new C2("default");
            public static C2 Default { get { return _default; } }

            public C2(string name)
            {
                Name = name;
            }

            public string Name { get; private set; }
        }

        // Bridge[#588]
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(9);

            var c2 = new C2("C2 value");
            assert.Ok(c2 != null, "Bridge588 C2");
            assert.Equal(c2.Name, "C2 value", "Bridge588 C2.Name");

            var c1 = new C1(c2);
            assert.Ok(c1 != null, "Bridge588 C1");
            assert.Equal(c1.Value.Name, "C2 value", "Bridge588 C1.Value.Name");

            assert.Ok(C1.Default != null, "Bridge588 C1.Default");
            assert.Ok(C1.Default.Value != null, "Bridge588 C1.Default.Value");
            assert.Equal(C1.Default.Value.Name, "default", "Bridge588 C1.Default.Value.Name");
            assert.Ok(C2.Default != null, "Bridge588 C2.Default");
            assert.Ok(C2.Default.Name != null, "Bridge588 C2.Default.Name");

        }
    }

    // Bridge[#588]
    [FileName("testBridgeIssues.js")]
    internal class Bridge588
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(2);

            assert.Equal(Bridge588A.Valeur3, 3, "Bridge588 TestUseCase");
            assert.Equal(Bridge588C.C1.Default.Value.Name, "default", "Bridge588_2 TestUseCase");
        }
    }
}