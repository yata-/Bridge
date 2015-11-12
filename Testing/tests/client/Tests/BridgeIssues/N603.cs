using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    internal struct Bridge603A
    {
        public string value;
        public Bridge603A(string value)
        {
            this.value = value;
        }
        public static implicit operator Bridge603A(string value)
        {
            value = value ?? "[Null]";
            return new Bridge603A(value);
        }
    }

    // Bridge[#603]
    [FileName("testBridgeIssues.js")]
    internal class Bridge603
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(2);

            Bridge603A c = null;
            assert.Equal(c.value, "[Null]", "Bridge603 TestUseCase Null");

            c = "Test";
            assert.Equal(c.value, "Test", "Bridge603 TestUseCase String");
        }
    }
}