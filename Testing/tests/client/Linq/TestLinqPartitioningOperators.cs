using Bridge.Linq;
using Bridge.Test;
using System.Linq;

namespace Bridge.ClientTest.Linq
{
    [Category(Constants.MODULE_LINQ)]
    [TestFixture(TestNameFormat = "Partitioning - {0}")]
    public class TestLinqPartitioningOperators
    {
        [Test(ExpectedCount = 8)]
        public static void Test()
        {
            // TEST
            var numbers = new[] { 1, 3, 5, 7, 9 };
            var firstTwo = numbers.Take(2).ToArray();
            Assert.AreEqual(firstTwo, new[] { 1, 3 }, "Take() the first two array elements");

            // TEST
            var lastThree = numbers.TakeFromLast(3).ToArray();
            Assert.AreEqual(lastThree, new[] { 5, 7, 9 }, "TakeFromLast() the last three array elements");

            // TEST
            var exceptTwoLast = numbers.TakeExceptLast(2).ToArray();
            Assert.AreEqual(exceptTwoLast, new[] { 1, 3, 5 }, "TakeExceptLast() the first array elements except the last two");

            // TEST
            var takeWhileLessTwo = numbers.TakeWhile((number) => number < 2).ToArray();
            Assert.AreEqual(takeWhileLessTwo, new[] { 1 }, "TakeWhile() less two");

            // TEST
            var takeWhileSome = numbers.TakeWhile((number, index) => number - index <= 4).ToArray();
            Assert.AreEqual(takeWhileSome, new[] { 1, 3, 5, 7 }, "TakeWhile() by value and index");

            // TEST
            var skipThree = numbers.Skip(3).ToArray();
            Assert.AreEqual(skipThree, new[] { 7, 9 }, "Skip() the first three");

            // TEST
            var skipWhileLessNine = numbers.SkipWhile(number => number < 9).ToArray();
            Assert.AreEqual(skipWhileLessNine, new[] { 9 }, "SkipWhile() less then 9");

            // TEST
            var skipWhileSome = numbers.SkipWhile((number, index) => number <= 3 && index < 2).ToArray();
            Assert.AreEqual(skipWhileSome, new[] { 5, 7, 9 }, "SkipWhile() by value and index");
        }
    }
}
