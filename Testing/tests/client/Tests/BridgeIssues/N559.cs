using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    public class Bridge559A
    {
        public string result = "";
        public Bridge559A()
        {
            result += " -> Bridge559A";
        }

        public Bridge559A(int a)
            : this()
        {
            result += " -> Bridge559A$1";
        }
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge559B : Bridge559A
    {
        public Bridge559B()
        {
            result += " -> Bridge559B -- unexpected!";
        }

        public Bridge559B(int a)
            : base(a)
        {
            result += " -> Bridge559B$1";
        }
    }

    // Bridge[#559]
    [FileName("testBridgeIssues.js")]
    internal class Bridge559
    {
        public static void TestUseCase(Assert assert)
        {
            var b = new Bridge559B(1);

            assert.Expect(1);

            assert.Equal(b.result, " -> Bridge559A -> Bridge559A$1 -> Bridge559B$1", "Bridge559 TestUseCase");
        }
    }
}