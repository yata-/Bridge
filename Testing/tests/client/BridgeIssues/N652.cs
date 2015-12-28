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
        internal class Bridge652A1 : Bridge652C<Bridge652B1>
        {
        }

        [FileName("testBridgeIssues.js")]
        internal class Bridge652B1
        {
            public Bridge652B1()
            {
                log = "Bridge652B1";
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

        [FileName("testBridgeIssues.js")]
        internal class Bridge652A2 : Bridge652D<Bridge652B2>
        {
        }

        [FileName("testBridgeIssues.js")]
        internal class Bridge652B2 : IComparable
        {
            public int CompareTo(Object obj)
            {
                return 0;
            }

            public Bridge652B2()
            {
                log = "Bridge652B2";
            }
        }

        [FileName("testBridgeIssues.js")]
        internal class Bridge652D<T> where T : IComparable, new()
        {
            public T Bar;

            public Bridge652D()
            {
                Bar = new T();
            }
        }

        public static void TestUseCase(Assert assert)
        {
            assert.Expect(4);

            log = null;
            var c = new Bridge652A1();
            assert.NotEqual(c.Bar, null, "Bridge652A1 Bar NotNull");
            assert.Equal(log, "Bridge652B1", "Bridge652A1 log");

            log = null;
            var d = new Bridge652A2();
            assert.NotEqual(d.Bar, null, "Bridge652A2 Bar NotNull");
            assert.Equal(log, "Bridge652B2", "Bridge652A2 log");
        }
    }
}