using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#815]
    [FileName("testBridgeIssues.js")]
    internal class Bridge815
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(7);
            var a = new A();
            
            a.Method();
            assert.Equal(a.Property, null, "Bridge815 null");

            a.Method(new B(1));
            assert.Ok(a.Property.HasValue, "Bridge815 Property.HasValue");
            assert.Equal(a.Property.Value.field, 1, "Bridge815 Property.Value.field == 1");

            a.Method2();
            assert.Ok(a.Property.HasValue, "Bridge815 Method2 Property.HasValue");
            assert.Equal(a.Property.Value.field, 0, "Bridge815 Method2 Property.Value.field == 0");

            a.Method2(new B(2));
            assert.Ok(a.Property.HasValue, "Bridge815 Method2 Property.HasValue 2");
            assert.Equal(a.Property.Value.field, 2, "Bridge815 Method2 Property.Value.field == 2");
        }

        struct B
        {
            public B(int i)
            {
                field = i;
            }
            public int field;
        }

        class A
        {
            public B? Property
            {
                get;
                set;
            }

            public void Method(B? param = null)
            {
                Property = param;
            }

            public void Method2(B param = default(B))
            {
                Property = param;
            }
        }
    }
}