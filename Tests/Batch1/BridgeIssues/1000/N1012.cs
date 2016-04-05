using Bridge.Test;

using System;
using System.Diagnostics;
using System.Threading;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#1012]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1012 - {0}")]
    public class Bridge1012
    {
        [Test(ExpectedCount = 2)]
        public static void TestSleepInt()
        {
            var delay = 100;
            var maxDelay = 200;

            var stopwatch = new Stopwatch();
            stopwatch.Start();

            Thread.Sleep(delay);

            stopwatch.Stop();

            Assert.True(stopwatch.ElapsedMilliseconds >= delay, ">= " + delay);
            Assert.True(stopwatch.ElapsedMilliseconds < maxDelay, "< " + maxDelay);
        }

        [Test(ExpectedCount = 2)]
        public static void TestSleepTimeSpan()
        {
            var delay = 100;
            var maxDelay = 200;

            var stopwatch = new Stopwatch();
            stopwatch.Start();

            Thread.Sleep(TimeSpan.FromMilliseconds(delay));

            stopwatch.Stop();

            Assert.True(stopwatch.ElapsedMilliseconds >= delay, ">= " + delay);
            Assert.True(stopwatch.ElapsedMilliseconds < maxDelay, "< " + maxDelay);
        }

        [Test(ExpectedCount = 3)]
        public static void TestSleepThrows()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() => { Thread.Sleep(-2); }, "-2");
            Assert.Throws<ArgumentOutOfRangeException>(() => { Thread.Sleep(TimeSpan.FromMilliseconds(-2)); }, "FromMilliseconds(-2)");
            Assert.Throws<ArgumentOutOfRangeException>(() => { Thread.Sleep(TimeSpan.FromMilliseconds((long)int.MaxValue + 1)); }, "(long)int.MaxValue + 1");
        }
    }
}