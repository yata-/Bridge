using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#789]
    [FileName("testBridgeIssues.js")]
    internal class Bridge789
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(3);

            assert.NotEqual(Method1(), null);
            assert.NotEqual(Method2(), null);
            assert.Equal(Method2().field1, 0);
        }

        private static DateTime Method1(DateTime dt = default(DateTime))
        {
            return dt;
        }

        private static Bridge789A Method2(Bridge789A s = default(Bridge789A))
        {
            return s;
        }
    }

    [FileName("testBridgeIssues.js")]
    public struct Bridge789A
    {
        public int field1;
    }
}