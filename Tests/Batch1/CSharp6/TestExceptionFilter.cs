using Bridge;
using Bridge.Test;
using System;
using Stuff = System.ComponentModel;

namespace Bridge.ClientTest.CSharp6
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Exception filter - {0}")]
    public class TestExceptionFilter
    {
        static MyException LogParameter;

        [Test]
        public static void TestFalseFilter()
        {
            var isCaught = false;
            try
            {
                try
                {
                    throw new MyException();
                }
                catch (MyException) when (Log(null, false))
                {
                    Assert.Fail("Flow should not be in catch block");
                }
            }
            catch (MyException)
            {
                isCaught = true;
            }

            Assert.True(isCaught);
        }

        [Test]
        public static void TestTrueFilter()
        {
            var isCaught = false;

            LogParameter = null;

            try
            {
                throw new MyException();
            }
            catch (MyException e) when (Log(e, true))
            {
                isCaught = true;
            }

            Assert.True(isCaught);
            Assert.NotNull(LogParameter, "Log() parameter was MyException");
        }

        private static bool Log(Exception e, bool result)
        {
            if (e != null)
            {
                LogParameter = e as MyException;
            }

            return result;
        }

        public class MyException : Exception 
        {
        }
    }
}
