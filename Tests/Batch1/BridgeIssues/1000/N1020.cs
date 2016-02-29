using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#1020]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1020 - {0}")]
    public class Bridge1020
    {
        [Flags]
        public enum TestEnum : uint
        {
            None = 0,
            Flag = 1,
            FlagAlias = Flag
        }

        [Test(ExpectedCount = 1)]
        public static void TestEnumWithReference()
        {
           Assert.AreEqual(TestEnum.FlagAlias, 1);
        }
    }
}