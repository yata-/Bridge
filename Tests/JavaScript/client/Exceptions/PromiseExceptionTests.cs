using System;
using System.Threading.Tasks;
using Bridge.Test;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_ARGUMENTEXCEPTION)]
    [TestFixture(TestNameFormat = "PromiseException - {0}")]
    public class PromiseExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual(typeof(PromiseException).GetClassName(), "Bridge.PromiseException", "Name");
            object d = new PromiseException(new object[0]);
            Assert.True(d is PromiseException, "is PromiseException");
            Assert.True(d is Exception, "is Exception");
        }

        [Test]
        public void ArgumentsOnlyConstructorWorks()
        {
            var args = new object[] { "a", 1 };
            var ex = new PromiseException(args);
            Assert.True((object)ex is PromiseException, "is PromiseException");
            Assert.AreEqual(ex.Arguments, args, "Arguments");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual(ex.Message, "a", "Message");
        }

        [Test]
        public void ArgumentsAndMessageConstructorWorks()
        {
            var args = new object[] { "a", 1 };
            var ex = new PromiseException(args, "Some message");
            Assert.True((object)ex is PromiseException, "is PromiseException");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual(ex.Arguments, args, "Arguments");
            Assert.AreEqual(ex.Message, "Some message", "Message");
        }

        [Test]
        public void ArgumentsAndMessageAndInnerExceptionConstructorWorks()
        {
            var inner = new Exception("a");
            var args = new object[] { "a", 1 };
            var ex = new PromiseException(args, "Some message", inner);
            Assert.True((object)ex is PromiseException, "is PromiseException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual(ex.Arguments, args, "Arguments");
            Assert.AreEqual(ex.Message, "Some message", "Message");
        }
    }
}
