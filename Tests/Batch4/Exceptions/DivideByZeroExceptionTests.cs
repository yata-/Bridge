using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch4.Exceptions
{
    [TestFixture(TestNameFormat = "DivideByZeroExceptionTests - {0}")]
    public class DivideByZeroExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.DivideByZeroException", typeof(DivideByZeroException).FullName, "Name");
            Assert.True(typeof(DivideByZeroException).IsClass, "IsClass");
            Assert.AreEqual(typeof(ArithmeticException), typeof(DivideByZeroException).BaseType, "BaseType");
            object d = new DivideByZeroException();
            Assert.True(d is DivideByZeroException, "is DivideByZeroException");
            Assert.True(d is Exception, "is Exception");

            var interfaces = typeof(DivideByZeroException).GetInterfaces();
            Assert.AreEqual(0, interfaces.Length, "Interfaces length");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new DivideByZeroException();
            Assert.True((object)ex is DivideByZeroException, "is DivideByZeroException");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual("Division by 0.", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new DivideByZeroException("The message");
            Assert.True((object)ex is DivideByZeroException, "is DivideByZeroException");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new DivideByZeroException("The message", inner);
            Assert.True((object)ex is DivideByZeroException, "is DivideByZeroException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }
    }
}