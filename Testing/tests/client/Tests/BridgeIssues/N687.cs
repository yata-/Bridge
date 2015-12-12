using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#687]
    [FileName("testBridgeIssues.js")]
    internal class Bridge687
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(2);

            var c = new Bridge687A(null);
            bool case1 = false;
            if (c == null)
            {
                case1 = true;
            }
            assert.Equal(case1, false, "Bridge687 case1");

            c = new Bridge687A("test");
            bool case2 = false;
            if (c == "test")
            {
                case2 = true;
            }
            assert.Equal(case2, true, "Bridge687 case2");
        }
    }

    [FileName("testBridgeIssues.js")]
    internal class Bridge687A
    {
        public Bridge687A(string value)
        {
            Value = value;
        }
        public string Value { get; private set; }
        public static implicit operator string(Bridge687A value)
        {
            return value.Value;
        }
    }
}