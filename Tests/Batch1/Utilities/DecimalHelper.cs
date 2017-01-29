using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Utilities
{
    [Reflectable]
    internal class DecimalHelper
    {
        public static void AssertIsDecimalAndEqualTo(object v, double d, string message = null)
        {
            Assert.AreStrictEqual(true, v is decimal, message);
            Assert.AreStrictEqual(d.ToString(), v.ToString(), message);
        }

        public static void AssertIsDecimalAndEqualTo(object v, decimal d, string message = null)
        {
            Assert.AreStrictEqual(true, v is decimal, message);
            Assert.AreStrictEqual(d.ToString(), v.ToString(), message);
        }
    }
}