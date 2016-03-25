using System;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1058 - {0}")]
    public class Bridge1058
    {
        [Test]
        public static void TestNameTrue()
        {
            Assert.AreEqual("Bridge.ClientTest.BridgeIssues.Bridge1058.overlayType", typeof(OverlayType).GetClassName());
            Assert.AreEqual("$Bridge1058.Bridge1058.class1", typeof(Class1).GetClassName());
            Assert.AreEqual("Bridge1058.class2", typeof(Class2).GetClassName());
        }

        [Name(true)]
        public enum OverlayType
        {
            CIRCLE,
            MARKER
        }

        [Name(true)]
        [Namespace("$Bridge1058")]
        public class Class1
        {
        }

        [Name(true)]
        [Namespace(false)]
        public class Class2
        {
        }
    }
}