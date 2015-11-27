using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#652]
    [FileName("testBridgeIssues.js")]
    internal class Bridge652
    {
        private static string log;

        [FileName("testBridgeIssues.js")]
        internal class Bridge652A : Bridge652C<Bridge652B> { }

        [FileName("testBridgeIssues.js")]
        internal class Bridge652B
        {
            public Bridge652B()
            {
                log = "Bridge652B";
            }
        }

        [FileName("testBridgeIssues.js")]
        internal class Bridge652C<T> where T : new()
        {
            public T Bar;

            public Bridge652C()
            {
                Bar = new T();
            }
        }

        public static void TestUseCase(Assert assert)
        {
            assert.Expect(2);

            log = null;
            var c = new Bridge652A();
            assert.NotEqual(c.Bar, null, "Bridge652 Bar NotNull");
            assert.Equal(log, "Bridge652B", "Bridge652 log");
        }
    }
}