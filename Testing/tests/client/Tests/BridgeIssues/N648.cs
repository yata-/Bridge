using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    public class Bridge648A
    {
        public Bridge648A(string value)
        {
            Value = value;
        }
        public string Value { get; private set; }
        public static implicit operator string(Bridge648A value)
        {
            return value.Value;
        }
    }

    // Bridge[#648]
    [FileName("testBridgeIssues.js")]
    internal class Bridge648
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            var wrappedString = new Bridge648A("test");
            var stringArray = new string[0];
            stringArray.Push(wrappedString);

            assert.Equal(stringArray[0], "test");
        }
    }
}