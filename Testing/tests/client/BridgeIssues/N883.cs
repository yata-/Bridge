using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    public class Bridge883_1 : Bridge883_2
    {
    }

    public interface Bridge883_IInterface
    {
    }

    public class Bridge883_2 : Bridge883_IInterface
    {
    }

    // Bridge[#883]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#883 - {0}")]
    public class Bridge883
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            Assert.NotNull(new Bridge883_1(), "Bridge883_1 created");
        }
    }
}