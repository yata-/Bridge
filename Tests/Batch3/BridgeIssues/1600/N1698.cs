using System;
using Bridge.Test;
using System.ComponentModel;
using System.Linq;
using Bridge;

[assembly: Reflectable("System.Console")]
namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1698 - {0}")]
    public class Bridge1698
    {
        [Test(ExpectedCount = 0)]
        public void TestReflectionForNativeTypes()
        {
            //we cannot check result but atleast should not be exception
            typeof(System.Console).GetMethod("WriteLine", new[] { typeof(string) }).Invoke(null, new[] { "Hello" });
        }
    }
}