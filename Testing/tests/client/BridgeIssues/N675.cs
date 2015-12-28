using System;
using Bridge;
using Bridge.QUnit;
using Bridge.Html5;

namespace ClientTestLibrary
{
    // Bridge[#675]
    [FileName("testBridgeIssues.js")]
    internal class Bridge675
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(3);

            var me = Global.ToDynamic().ClientTestLibrary.Bridge675;
            me.id = "str1";
            me.i1 = 1;
            me.i2 = 2;

            assert.Equal(me.dynMethod(me.id), "str1", "Bridge675 DynMethod");
            assert.Equal(Method1(me.id), "str1", "Bridge675 Method1 id");
            assert.Equal(Method1(me.i1, me.i2), 3, "Bridge675 Method1 i1 i2");
        }

        public static string DynMethod(string s)
        {
            return s;
        }

        public static string Method1(string s)
        {
            return s;
        }

        public static int Method1(int i1, int i2)
        {
            return i1 + i2;
        }
    }
}