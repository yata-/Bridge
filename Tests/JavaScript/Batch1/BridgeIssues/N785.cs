using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#785]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#785 - {0}")]
    public class Bridge785
    {
        public class DataClass
        {
            public int Value { get; set; }

            public DataClass GetSomething(int i)
            {
                return new DataClass() { Value = i };
            }
        }

        public struct DataStruct
        {
            public int Value { get; set; }

            public DataStruct GetSomething(int i)
            {
                return new DataStruct() { Value = i };
            }
        }

        [Test(ExpectedCount = 7)]
        public static void TestUseCase()
        {
            {
                var i = 1;
                var j = Script.Write<int>("{i}", i);
                Assert.AreEqual(j, 1, "Bridge785 by name");
            }
            {
                var i = 2;
                var j = Script.Write<int>("{0}", i);
                Assert.AreEqual(j, 2, "Bridge785 by index");
            }
            {
                var i = new DataClass() { Value = 3 };
                var j = Script.Write<int>("{0}", i.Value);
                Assert.AreEqual(j, 3, "Bridge785 by index for DataClass property");
            }
            {
                var i = new DataClass() { Value = 4 };
                var j = Script.Write<int>("{0}", i);
                Assert.AreEqual(j, i, "Bridge785 by index for DataClass");
            }
            {
                var i = new DataClass() { Value = 5 };
                var j = Script.Write<int>("{0}", i.GetSomething(55).Value);
                Assert.AreEqual(j, 55, "Bridge785 by index for DataClass method");
            }
            {
                var i = new DataStruct() { Value = 6 };
                var j = Script.Write<int>("{0}", i.Value);
                Assert.AreEqual(j, 6, "Bridge785 by index for DataStruct property");
            }
            {
                var i = new DataStruct() { Value = 7 };
                var j = Script.Write<int>("{0}", i.GetSomething(77).Value);
                Assert.AreEqual(j, 77, "Bridge785 by index for DataStruct method");
            }
        }
    }
}