using Bridge.Test;

using System;


namespace Bridge.ClientTest
{
    public class CheckedUncheckedTests
    {
        public static void AssertEqual(object expected, object actual, string message = null)
        {
            Assert.AreEqual(expected.ToString(), actual.ToString(), message);
        }

        private static object Bypass(object o)
        {
            return o;
        }

        [Category(Constants.MODULE_CHECKED_UNCKECKED)]
        [TestFixture(TestNameFormat = "Checked - {0}")]
        public class CheckedTests
        {
            [Test]
            public static void TestInt32()
            {
                checked
                {
                    var max = Int32.MaxValue;
                    Assert.Throws<OverflowException>(() => { var r = max + 1; }, "Through identifier");
                    Assert.Throws<OverflowException>(() => { Bypass(max + 1); }, "Through parameter");

                    var min = Int32.MinValue;
                    Assert.Throws<OverflowException>(() => { var r = min - 1; }, "Through identifier");
                    Assert.Throws<OverflowException>(() => { Bypass(min - 1); }, "Through parameter");
                }
            }

            [Test]
            public static void TestUInt32()
            {
                checked
                {
                    var max = UInt32.MaxValue;
                    Assert.Throws<OverflowException>(() => { var r = max + 1; }, "Through identifier");
                    Assert.Throws<OverflowException>(() => { Bypass(max + 1); }, "Through parameter");

                    var min = UInt32.MinValue;
                    Assert.Throws<OverflowException>(() => { var r = min - 1; }, "Through identifier");
                    Assert.Throws<OverflowException>(() => { Bypass(min - 1); }, "Through parameter");
                }
            }

            [Test]
            public static void TestLong()
            {
                checked
                {
                    var max = long.MaxValue;
                    Assert.Throws<OverflowException>(() => { var r = max + 1; }, "Through identifier");
                    Assert.Throws<OverflowException>(() => { Bypass(max + 1); }, "Through parameter");

                    var min = long.MinValue;
                    Assert.Throws<OverflowException>(() => { var r = min - 1; }, "Through identifier");
                    Assert.Throws<OverflowException>(() => { Bypass(min - 1); }, "Through parameter");
                }
            }

            [Test]
            public static void TestULong()
            {
                checked
                {
                    var max = ulong.MaxValue;
                    Assert.Throws<OverflowException>(() => { var r = max + 1; }, "Through identifier");
                    Assert.Throws<OverflowException>(() => { Bypass(max + 1); }, "Through parameter");

                    var min = ulong.MinValue;
                    Assert.Throws<OverflowException>(() => { var r = min - 1; }, "Through identifier");
                    Assert.Throws<OverflowException>(() => { Bypass(min - 1); }, "Through parameter");
                }
            }
        }

        [Category(Constants.MODULE_CHECKED_UNCKECKED)]
        [TestFixture(TestNameFormat = "CheckedInsideUnchecked - {0}")]
        public class CheckedInsideUncheckedTests
        {
            [Test]
            public static void TestInt32()
            {
                unchecked
                {
                    checked
                    {
                        var max = Int32.MaxValue;
                        Assert.Throws<OverflowException>(() => { var r = max + 1; }, "Through identifier");
                        Assert.Throws<OverflowException>(() => { Bypass(max + 1); }, "Through parameter");

                        var min = Int32.MinValue;
                        Assert.Throws<OverflowException>(() => { var r = min - 1; }, "Through identifier");
                        Assert.Throws<OverflowException>(() => { Bypass(min - 1); }, "Through parameter");
                    }
                }
            }

            [Test]
            public static void TestUInt32()
            {
                unchecked
                {

                    checked
                    {
                        var max = UInt32.MaxValue;
                        Assert.Throws<OverflowException>(() => { var r = max + 1; }, "Through identifier");
                        Assert.Throws<OverflowException>(() => { Bypass(max + 1); }, "Through parameter");

                        var min = UInt32.MinValue;
                        Assert.Throws<OverflowException>(() => { var r = min - 1; }, "Through identifier");
                        Assert.Throws<OverflowException>(() => { Bypass(min - 1); }, "Through parameter");
                    }
                }
            }

            [Test]
            public static void TestLong()
            {
                unchecked
                {

                    checked
                    {
                        var max = long.MaxValue;
                        Assert.Throws<OverflowException>(() => { var r = max + 1; }, "Through identifier");
                        Assert.Throws<OverflowException>(() => { Bypass(max + 1); }, "Through parameter");

                        var min = long.MinValue;
                        Assert.Throws<OverflowException>(() => { var r = min - 1; }, "Through identifier");
                        Assert.Throws<OverflowException>(() => { Bypass(min - 1); }, "Through parameter");
                    }
                }
            }

            [Test]
            public static void TestULong()
            {
                unchecked
                {

                    checked
                    {
                        var max = ulong.MaxValue;
                        Assert.Throws<OverflowException>(() => { var r = max + 1; }, "Through identifier");
                        Assert.Throws<OverflowException>(() => { Bypass(max + 1); }, "Through parameter");

                        var min = ulong.MinValue;
                        Assert.Throws<OverflowException>(() => { var r = min - 1; }, "Through identifier");
                        Assert.Throws<OverflowException>(() => { Bypass(min - 1); }, "Through parameter");
                    }
                }
            }
        }

        [Category(Constants.MODULE_CHECKED_UNCKECKED)]
        [TestFixture(TestNameFormat = "Unchecked - {0}")]
        public class UncheckedTests
        {
            [Test]
            public static void TestInt32()
            {
                unchecked
                {
                    var max = Int32.MaxValue;
                    var rMax = max + 1;
                    AssertEqual("-2147483648", rMax, "Through identifier");
                    AssertEqual("-2147483648", max + 1, "Through parameter");

                    var min = Int32.MinValue;
                    var rMin = min - 1;
                    AssertEqual("2147483647", rMin, "Through identifier");
                    AssertEqual("2147483647", min - 1, "Through parameter");
                }
            }

            [Test]
            public static void TestUInt32()
            {
                unchecked
                {
                    var max = UInt32.MaxValue;
                    var rMax = max + 1;
                    AssertEqual("0", rMax, "Through identifier");
                    AssertEqual("0", max + 1, "Through parameter");

                    var min = UInt32.MinValue;
                    var rMin = min - 1;
                    AssertEqual("4294967295", rMin, "Through identifier");
                    AssertEqual("4294967295", min - 1, "Through parameter");
                }
            }

            [Test]
            public static void TestLong()
            {
                unchecked
                {
                    var max = long.MaxValue;
                    var rMax = max + 1;
                    AssertEqual("-9223372036854775808", rMax, "Through identifier");
                    AssertEqual("-9223372036854775808", max + 1, "Through parameter");

                    var min = long.MinValue;
                    var rMin = min - 1;
                    AssertEqual("9223372036854775807", rMin, "Through identifier");
                    AssertEqual("9223372036854775807", min - 1, "Through parameter");
                }
            }

            [Test]
            public static void TestULong()
            {
                unchecked
                {
                    var max = ulong.MaxValue;
                    var rMax = max + 1;
                    AssertEqual("0", rMax, "Through identifier");
                    AssertEqual("0", max + 1, "Through parameter");

                    var min = ulong.MinValue;
                    var rMin = min - 1;
                    AssertEqual("18446744073709551615", rMin, "Through identifier");
                    AssertEqual("18446744073709551615", min - 1, "Through parameter");
                }
            }
        }

        [Category(Constants.MODULE_CHECKED_UNCKECKED)]
        [TestFixture(TestNameFormat = "UncheckedInsideChecked - {0}")]
        public class UncheckedInsideCheckedTests
        {
            [Test]
            public static void TestInt32()
            {
                checked
                {
                    unchecked
                    {
                        var max = Int32.MaxValue;
                        var rMax = max + 1;
                        AssertEqual("-2147483648", rMax, "Through identifier");
                        AssertEqual("-2147483648", max + 1, "Through parameter");

                        var min = Int32.MinValue;
                        var rMin = min - 1;
                        AssertEqual("2147483647", rMin, "Through identifier");
                        AssertEqual("2147483647", min - 1, "Through parameter");
                    }
                }
            }

            [Test]
            public static void TestUInt32()
            {
                checked
                {

                    unchecked
                    {
                        var max = UInt32.MaxValue;
                        var rMax = max + 1;
                        AssertEqual("0", rMax, "Through identifier");
                        AssertEqual("0", max + 1, "Through parameter");

                        var min = UInt32.MinValue;
                        var rMin = min - 1;
                        AssertEqual("4294967295", rMin, "Through identifier");
                        AssertEqual("4294967295", min - 1, "Through parameter");
                    }
                }
            }

            [Test]
            public static void TestLong()
            {
                checked
                {
                    unchecked
                    {
                        var max = long.MaxValue;
                        var rMax = max + 1;
                        AssertEqual("-9223372036854775808", rMax, "Through identifier");
                        AssertEqual("-9223372036854775808", max + 1, "Through parameter");

                        var min = long.MinValue;
                        var rMin = min - 1;
                        AssertEqual("9223372036854775807", rMin, "Through identifier");
                        AssertEqual("9223372036854775807", min - 1, "Through parameter");
                    }
                }
            }

            [Test]
            public static void TestULong()
            {
                checked
                {
                    unchecked
                    {
                        var max = ulong.MaxValue;
                        var rMax = max + 1;
                        AssertEqual("0", rMax, "Through identifier");
                        AssertEqual("0", max + 1, "Through parameter");

                        var min = ulong.MinValue;
                        var rMin = min - 1;
                        AssertEqual("18446744073709551615", rMin, "Through identifier");
                        AssertEqual("18446744073709551615", min - 1, "Through parameter");
                    }
                }
            }
        }

        [Category(Constants.MODULE_CHECKED_UNCKECKED)]
        [TestFixture(TestNameFormat = "WithNoUncheckedKeyword - {0}")]
        public class WithNoUncheckedKeywordTests
        {
            [Test]
            public static void TestInt32()
            {

                var max = Int32.MaxValue;
                var rMax = max + 1;
                AssertEqual("-2147483648", rMax, "Through identifier");
                AssertEqual("-2147483648", max + 1, "Through parameter");

                var min = Int32.MinValue;
                var rMin = min - 1;
                AssertEqual("2147483647", rMin, "Through identifier");
                AssertEqual("2147483647", min - 1, "Through parameter");
            }

            [Test]
            public static void TestUInt32()
            {
                var max = UInt32.MaxValue;
                var rMax = max + 1;
                AssertEqual("0", rMax, "Through identifier");
                AssertEqual("0", max + 1, "Through parameter");

                var min = UInt32.MinValue;
                var rMin = min - 1;
                AssertEqual("4294967295", rMin, "Through identifier");
                AssertEqual("4294967295", min - 1, "Through parameter");
            }

            [Test]
            public static void TestLong()
            {
                var max = long.MaxValue;
                var rMax = max + 1;
                AssertEqual("-9223372036854775808", rMax, "Through identifier");
                AssertEqual("-9223372036854775808", max + 1, "Through parameter");

                var min = long.MinValue;
                var rMin = min - 1;
                AssertEqual("9223372036854775807", rMin, "Through identifier");
                AssertEqual("9223372036854775807", min - 1, "Through parameter");
            }

            [Test]
            public static void TestULong()
            {
                var max = ulong.MaxValue;
                var rMax = max + 1;
                AssertEqual("0", rMax, "Through identifier");
                AssertEqual("0", max + 1, "Through parameter");

                var min = ulong.MinValue;
                var rMin = min - 1;
                AssertEqual("18446744073709551615", rMin, "Through identifier");
                AssertEqual("18446744073709551615", min - 1, "Through parameter");
            }
        }
    }
}

