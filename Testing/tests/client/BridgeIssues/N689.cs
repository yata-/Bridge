using System;
using Bridge;
using Bridge.QUnit;
using Bridge.Html5;

namespace ClientTestLibrary
{
    // Bridge[#689]
    [FileName("testBridgeIssues.js")]
    public class Bridge689
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(2);

            Func<string, int> fn1 = Global.ParseInt;
            assert.Equal(fn1("5"), 5, "Bridge689 should equals 5");

            Func<string, int> fn2 = Bridge689.ParseInt;
            assert.Equal(fn2("6"), 6, "Bridge689 should equals 6");

            //object a = 7;
            //Func<object, bool> fn3 = a.BridgeEquals;
            //assert.Equal(fn3("7"), 7, "Bridge689 should equals 7");
        }

        [Template("parseInt({0})")]
        public extern static int ParseInt(string value);
    }

    //[FileName("testBridgeIssues.js")]
    //public static class Bridge689ObjectExtention
    //{
    //    [Template("Bridge.equals({this}, b)")]
    //    public static bool BridgeEquals(this object a, object b)
    //    {
    //        return false;
    //    }
    //}
}