using System;
using System.Collections.Generic;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#733]
    [FileName("testBridgeIssues.js")]
    internal class Bridge733
    {
        private static DateTime DateA
        {
            get; set;
        }

        private static DateTime dateb;

        public static void TestUseCase(Assert assert)
        {
            assert.Expect(2);

            assert.Ok(DateA == DateTime.MinValue, "Bridge733 DateA");
            assert.Ok(dateb == DateTime.MinValue, "Bridge733 dateb");

            dateb = DateTime.Now; // to prevent warning that dateb is never assigned
        }
    }
}