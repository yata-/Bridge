using System;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1076 - {0}")]
    public class Bridge1076
    {
        [Test]
        public static void TestInlineConstAsMemberReference()
        {
            string s;
            s = decimal.MaxValue.ToString();
            s = float.MaxValue.ToString();
            s = double.MaxValue.ToString();
            s = char.MaxValue.ToString();

            s = decimal.MinValue.ToString();
            s = Single.MinValue.ToString();
            s = double.MinValue.ToString();
            s = char.MinValue.ToString();

            s = byte.MaxValue.ToString();
            s = UInt16.MaxValue.ToString();
            s = UInt32.MaxValue.ToString();
            s = UInt64.MaxValue.ToString();
            s = sbyte.MaxValue.ToString();
            s = Int16.MaxValue.ToString();
            s = Int32.MaxValue.ToString();
            s = Int64.MaxValue.ToString();

            s = byte.MinValue.ToString();
            s = UInt16.MinValue.ToString();
            s = UInt32.MinValue.ToString();
            s = UInt64.MinValue.ToString();
            s = sbyte.MinValue.ToString();
            s = Int16.MinValue.ToString();
            s = Int32.MinValue.ToString();
            s = Int64.MinValue.ToString();

            Assert.AreEqual("-9007199254740991", s);
        }
    }
}