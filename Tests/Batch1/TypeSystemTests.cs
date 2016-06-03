using Bridge.Test;

using System;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_TYPE_SYSTEM)]
    [TestFixture(TestNameFormat = "Type - {0}")]
    public class TypeSystemTests
    {
        public interface I1 { }
        public interface I2 : I1 { }
        public interface I3 { }
        public interface I4 : I3 { }
        public class B : I2 { }
        public class C : B, I4 { }

        public enum E1 { }
        [Flags]
        public enum E2 { }

        [Test]
        public void GettingBaseTypeWorks()
        {
            Assert.AreEqual(null, typeof(I1).BaseType, "#1");
            Assert.AreEqual(null, typeof(I2).BaseType, "#2");
            Assert.AreEqual(typeof(object), typeof(B).BaseType, "#3");
            Assert.AreEqual(typeof(B), typeof(C).BaseType, "#4");
            Assert.AreEqual(null, typeof(object).BaseType, "#5");

            Type t = null;
            Assert.Throws<NullReferenceException>(() => { var b = t.BaseType; }, "NullReferenceException");
        }
    }
}
