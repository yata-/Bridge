using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Undefined is considerd as null by default
    // Bridge[#674]
    /*[Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#674 - {0}")]
    public class Bridge674
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            object o = Script.Undefined;
            Assert.Throws(() => { var s = (string)o; }, "Unable to cast type 'null' to type String");
        }
    }*/
}