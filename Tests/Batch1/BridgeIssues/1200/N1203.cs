using System;
using Bridge.Test;
using System.Collections.Generic;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1203 - {0}")]
    public class Bridge1203
    {
        [Init]
        public static void InitMethod1()
        {
            Action Bridge1203_a1 = () => { };
        }

        [Init(InitPosition.Before)]
        public static void InitMethod2()
        {
            Action Bridge1203_a2 = () => { };
        }

        [Test]
        public static void TestLiftedFunctionsInsideInitMethod()
        {
            dynamic scope = Script.Get("$_.Bridge.ClientTest.BridgeIssues.Bridge1203");
            Assert.Null(scope, "scope should not exists");  
        }
    }
}