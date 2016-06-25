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
        [Test]
        public static void TestBasic()
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


            isCaught = false;
            try
            {
                throw new MyException();
            }
            catch (MyException e) when (Log(e, true))
            {
                isCaught = true;
            }

            Assert.True(isCaught);
        }

        private static bool Log(Exception e, bool result)
        {
            return result;
        }

        public class MyException : Exception 
        {
        }
    }
}
