using Bridge.Test;

using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#889]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#889 - {0}")]
    public class Bridge889
    {
        private static int Count(params int[] arr)
        {
            return arr.Length;
        }

        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            Assert.AreEqual(Count(), 0);
        }

        private static IEnumerable<T> MakeEnumerable<T>(params T[] arr)
        {
            foreach (var x in arr)
                yield return x;
        }

        [Test(ExpectedCount = 8)]
        public static void TestMakeEnumerable()
        {
            Assert.AreEqual(MakeEnumerable<object>().Count(), 0, "MakeEnumerable object 0");
            Assert.AreEqual(MakeEnumerable<object>(1, 2.0).Count(), 2, "MakeEnumerable object 2");

            Assert.AreEqual(MakeEnumerable<string>().Count(), 0, "MakeEnumerable string 0");
            Assert.AreEqual(MakeEnumerable<string>("a", "b", "c").Count(), 3, "MakeEnumerable string 3");

            Assert.AreEqual(MakeEnumerable<IEnumerable<object>>().Count(), 0, "MakeEnumerable IEnumerable<object> 0");
            Assert.AreEqual(MakeEnumerable<IEnumerable<object>>(new object[] { 1, 2 }).Count(), 1, "MakeEnumerable IEnumerable<object> 1");

            Assert.AreEqual(MakeEnumerable<List<List<object>>>().Count(), 0, "MakeEnumerable List<List<object>> 0");
            Assert.AreEqual(MakeEnumerable<List<List<int>>>(new List<List<int>>( ), new List<List<int>>()).Count(), 2, "MakeEnumerable List<List<object>> 2");
        }
    }
}