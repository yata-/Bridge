using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#772]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#772 - {0}")]
    public class Bridge772
    {
        [Test(ExpectedCount = 10)]
        public static void TestUseCase()
        {
            //These arrays depend on "useTypedArray" bridge.json option
            var byteArray = new byte[1];
            var sbyteArray = new sbyte[2];
            var shortArray = new short[3];
            var ushortArray = new ushort[4];
            var intArray = new int[5];
            var uintArray = new uint[6];
            var floatArray = new float[7];
            var doubleArray = new double[8];

            //These arrays do not depend on "useTypedArray" bridge.json option
            var stringArray = new string[9];
            var decimalArray = new decimal[10];

            byteArray[0] = 1;
            sbyteArray[0] = 2;
            shortArray[0] = 3;
            ushortArray[0] = 4;
            intArray[0] = 5;
            uintArray[0] = 6;
            floatArray[0] = 7;
            doubleArray[0] = 8;

            stringArray[0] = "9";
            decimalArray[0] = 10m;

            Assert.AreEqual(byteArray[0], 1, "get byteArray[0]");
            Assert.AreEqual(sbyteArray[0], 2, "get sbyteArray[0]");
            Assert.AreEqual(shortArray[0], 3, "get shortArray[0]");
            Assert.AreEqual(ushortArray[0], 4, "get ushortArray[0]");
            Assert.AreEqual(intArray[0], 5, "get intArray[0]");
            Assert.AreEqual(uintArray[0], 6, "get uintArray[0]");
            Assert.AreEqual(floatArray[0], 7, "get floatArray[0]");
            Assert.AreEqual(doubleArray[0], 8, "get doubleArray[0]");

            Assert.AreEqual(stringArray[0], "9", "get stringArray[0]");
            Assert.AreEqual(decimalArray[0], 10m, "get decimalArray[0]");
        }
    }
}

