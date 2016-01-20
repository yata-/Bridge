using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    public class Bridge826A
    {
        private readonly decimal _val;

        public Bridge826A(decimal val)
        {
            _val = val;
        }

        public static implicit operator Bridge826A(decimal val)
        {
            return new Bridge826A(val);
        }

        public static implicit operator decimal(Bridge826A val)
        {
            return val != null ? val._val : 0;
        }
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge826B
    {
        private readonly int _val;

        public Bridge826B(int val)
        {
            _val = val;
        }

        public static implicit operator Bridge826B(int val)
        {
            return new Bridge826B(val);
        }

        public static implicit operator int(Bridge826B val)
        {
            return val != null ? val._val : 0;
        }
    }

    // Bridge[#826]
    [FileName("testBridgeIssues.js")]
    internal class Bridge826
    {
        private static decimal EchoDecimal(decimal d = 42m)
        {
            return d;
        }

        public static void TestUseCase(Assert assert)
        {
            assert.Expect(5);

            Bridge826A d = null;
            assert.Ok(EchoDecimal(d) == 0, "Bridge826 decimal 0");

            d = 1;
            assert.Ok(EchoDecimal(d) == 1, "Bridge826 decimal 1");

            Bridge826B i = null;
            assert.Ok(EchoDecimal(i) == 0, "Bridge826 int 0");

            i = 1;
            assert.Ok(EchoDecimal(i) == 1, "Bridge826 int 1");

            assert.Ok(EchoDecimal() == 42, "Bridge826 42");
        }
    }
}