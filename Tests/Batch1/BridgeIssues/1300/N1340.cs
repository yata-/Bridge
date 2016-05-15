using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1340 - {0}")]
    public class Bridge1340
    {
        [Test]
        public static void TestGenericMembersDefaultValue()
        {
            var o = new Data<int>();

            Assert.AreEqual(0, o.Value1);
            Assert.AreEqual(0, o.Value2);
        }

        public struct Data<T>
        {
            public T Value1 { get; set; }
            public T Value2;

            public Data(T v1, T v2)
                : this()
            {
                Value1 = v1;
                Value2 = v2;
            }
        }
    }
}
