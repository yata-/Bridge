using System;
using Bridge.Test;
using System.Collections.Generic;
using Bridge.Html5;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1175 - {0}")]
    public class Bridge1175
    {
        [Test]
        public static void TestNullComparing()
        {
            object temp = new object();
            object varNull = null;
            object varUndefined = temp["this-prop-undefined"];

            Assert.True(varNull == varUndefined, "varNull == varUndefined");
            Assert.True(varNull == null, "varNull == null");
            Assert.True(varNull == null, "varUndefined == null");
        }
    }
}