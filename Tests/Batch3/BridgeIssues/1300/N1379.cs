using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1379 - {0}")]
    public class Bridge1379
    {
        [Test]
        public static void TestNanFiniteType()
        {
            object value = null;
            for (int time = 0; time < 6; time++)
            {
                switch (time)
                {
                    case 0:
                        {
                            value = 0.0 / 0.0;
                            break;
                        }
                    case 1:
                        {
                            value = 1.0 / 0.0;
                            break;
                        }
                    case 2:
                        {
                            value = -1.0 / 0.0;
                            break;
                        }
                    case 3:
                        {
                            value = 0.0f / 0.0f;
                            break;
                        }
                    case 4:
                        {
                            value = 1.0f / 0.0f;
                            break;
                        }
                    case 5:
                        {
                            value = -1.0f / 0.0f;
                            break;
                        }
                }
                Assert.AreEqual("System.Double", value.GetType().FullName);
            }
        }
    }
}