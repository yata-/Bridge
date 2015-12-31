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

    [FileName("testBridgeIssues.js")]
    internal struct Bridge795B
    {
        public Bridge795B(int value)
            : this()
        {
            Value = value;
        }

        public int Value { get; private set; }

        public static bool operator ==(Bridge795B x, Bridge795B y)
        {
            return x.Value == y.Value;
        }

        public static bool operator !=(Bridge795B x, Bridge795B y)
        {
            return !(x == y);
        }

        public static bool operator >=(Bridge795B x, Bridge795B y)
        {
            return x.Value >= y.Value;
        }

        public static bool operator >(Bridge795B x, Bridge795B y)
        {
            return x.Value > y.Value;
        }

        public static bool operator <=(Bridge795B x, Bridge795B y)
        {
            return x.Value <= y.Value;
        }

        public static bool operator <(Bridge795B x, Bridge795B y)
        {
            return x.Value < y.Value;
        }

        public override bool Equals(object o)
        {
            if (!(o is Bridge795B))
            {
                return false;
            }

            return ((Bridge795B)o).Value == Value;
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

        public static void TestRelated(Assert assert)
        {
            assert.Expect(16);

            var v1 = new Bridge795B(1);
            var v2 = new Bridge795B(2);
            var v3 = new Bridge795B(1);

            assert.Equal(v1 == v2, false, "Bridge795 lift == 12");
            assert.Equal(v1 == v3, true, "Bridge795 lift == 13");
            assert.Equal(v1 != v2, true, "Bridge795 lift != 12");
            assert.Equal(v1 != v3, false, "Bridge795 lift != 13");
            assert.Equal(v1 >= v2, false, "Bridge795 lift >= 12");
            assert.Equal(v2 >= v1, true, "Bridge795 lift >= 21");
            assert.Equal(v1 >= v3, true, "Bridge795 lift >= 13");
            assert.Equal(v1 > v2, false, "Bridge795 lift > 12");
            assert.Equal(v2 > v1, true, "Bridge795 lift > 21");
            assert.Equal(v1 > v3, false, "Bridge795 lift > 13");
            assert.Equal(v1 <= v2, true, "Bridge795 lift <= 12");
            assert.Equal(v2 <= v1, false, "Bridge795 lift <= 21");
            assert.Equal(v1 <= v3, true, "Bridge795 lift <= 13");
            assert.Equal(v1 < v2, true, "Bridge795 lift < 12");
            assert.Equal(v2 < v1, false, "Bridge795 lift < 21");
            assert.Equal(v1 < v3, false, "Bridge795 lift < 13");
        }
    }
}