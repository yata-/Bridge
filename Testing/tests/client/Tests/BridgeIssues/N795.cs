using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    internal struct Bridge795A
    {
        public Bridge795A(int value)
            : this()
        {
            Value = value;
        }

        public int Value { get; private set; }

        public static bool operator ==(Bridge795A x, Bridge795A y)
        {
            return x.Equals(y);
        }
        public static bool operator !=(Bridge795A x, Bridge795A y)
        {
            return !(x == y);
        }
        public override bool Equals(object o)
        {
            if (!(o is Bridge795A))
                return false;
            return ((Bridge795A)o).Value == Value;
        }
        public override int GetHashCode()
        {
            return Value;
        }
    }

    // Bridge[#795]
    [FileName("testBridgeIssues.js")]
    internal class Bridge795
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            var wrappedValue = new Bridge795A(1);
            var wrappedValueIsNull = (wrappedValue == null);

            assert.Equal(wrappedValueIsNull, false, "Bridge795");
        }
    }
}