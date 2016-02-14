using Bridge.Test;

using System;
using System.Globalization;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.PREFIX_EXCEPTIONS)]
    [TestFixture(TestNameFormat = "CultureNotFoundException - {0}")]
    public class CultureNotFoundExceptionTests
    {
        private const string DefaultMessage = "Culture is not supported.";

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual(typeof(CultureNotFoundException).GetClassName(), "Bridge.CultureNotFoundException", "Name");
            object d = new CultureNotFoundException();
            Assert.True(d is CultureNotFoundException);
            Assert.True(d is Exception);
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new CultureNotFoundException();
            Assert.True((object)ex is CultureNotFoundException, "is CultureNotFoundException");
            Assert.AreEqual(ex.ParamName, null, "ParamName");
            Assert.AreEqual(ex.InnerException, null, "InnerException");
            Assert.AreEqual(ex.Message, DefaultMessage);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new CultureNotFoundException("The message");
            Assert.True((object)ex is CultureNotFoundException, "is CultureNotFoundException");
            Assert.AreEqual(ex.ParamName, null, "ParamName");
            Assert.AreEqual(ex.InnerException, null, "InnerException");
            Assert.AreEqual(ex.Message, "The message");
            Assert.AreEqual(ex.InvalidCultureName, null, "InvalidCultureName");
            Assert.AreEqual(ex.InvalidCultureId, null, "InvalidCultureId");
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new CultureNotFoundException("The message", inner);
            Assert.True((object)ex is CultureNotFoundException, "is CultureNotFoundException");
            Assert.AreEqual(ex.ParamName, null, "ParamName");
            Assert.AreEqual(ex.InnerException, inner, "InnerException");
            Assert.AreEqual(ex.Message, "The message");
            Assert.AreEqual(ex.InvalidCultureName, null, "InvalidCultureName");
            Assert.AreEqual(ex.InvalidCultureId, null, "InvalidCultureId");
        }

        [Test]
        public void ConstructorWithMessageAndParamNameWorks()
        {
            var ex = new CultureNotFoundException("someParam", "The message");
            Assert.True((object)ex is CultureNotFoundException, "is CultureNotFoundException");
            Assert.AreEqual(ex.ParamName, "someParam", "ParamName");
            Assert.AreEqual(ex.InnerException, null, "InnerException");
            Assert.AreEqual(ex.Message, "The message");
            Assert.AreEqual(ex.InvalidCultureName, null, "InvalidCultureName");
            Assert.AreEqual(ex.InvalidCultureId, null, "InvalidCultureId");
        }

        [Test]
        public void ConstructorWithMessageAndCultureNameAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new CultureNotFoundException("The message", "fru", inner);
            Assert.True((object)ex is CultureNotFoundException, "is CultureNotFoundException");
            Assert.AreEqual(ex.ParamName, null, "ParamName");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual(ex.InnerException, inner, "InnerException");
            Assert.AreEqual(ex.Message, "The message");
            Assert.AreEqual(ex.InvalidCultureName, "fru", "InvalidCultureName");
            Assert.Null(ex.InvalidCultureId, "InvalidCultureId");
        }

        [Test]
        public void ConstructorWithParamNameAndCultureNameAndMessage()
        {
            var ex = new CultureNotFoundException("SomeParam", "fru", "The message");
            Assert.True((object)ex is CultureNotFoundException, "is CultureNotFoundException");
            Assert.AreEqual(ex.ParamName, "SomeParam", "ParamName");
            Assert.Null(ex.InnerException, "InnerException");
            Assert.AreEqual(ex.Message, "The message");
            Assert.AreEqual(ex.InvalidCultureName, "fru", "InvalidCultureName");
            Assert.AreEqual(ex.InvalidCultureId, null, "InvalidCultureId");
        }

        [Test]
        public void ConstructorWithMessageAndCultureIdAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new CultureNotFoundException("The message", 1, inner);
            Assert.True((object)ex is CultureNotFoundException, "is CultureNotFoundException");
            Assert.AreEqual(ex.ParamName, null, "ParamName");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual(ex.InnerException, inner, "InnerException");
            Assert.AreEqual(ex.Message, "The message");
            Assert.AreEqual(ex.InvalidCultureName, null, "InvalidCultureName");
            Assert.AreEqual(ex.InvalidCultureId, 1, "InvalidCultureId");
        }

        [Test]
        public void ConstructorWithParamNameAndCultureIdAndMessage()
        {
            var ex = new CultureNotFoundException("SomeParam", 2, "The message");
            Assert.True((object)ex is CultureNotFoundException, "is CultureNotFoundException");
            Assert.AreEqual(ex.ParamName, "SomeParam", "ParamName");
            Assert.Null(ex.InnerException, "InnerException");
            Assert.AreEqual(ex.Message, "The message");
            Assert.AreEqual(ex.InvalidCultureName, null, "InvalidCultureName");
            Assert.AreEqual(ex.InvalidCultureId, 2, "InvalidCultureId");
        }
    }
}
