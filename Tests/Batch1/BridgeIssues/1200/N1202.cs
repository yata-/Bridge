using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1202 - {0}")]
    public class Bridge1202
    {
        static int field = 0;
        static int[] array = {0, 0};

        static void OutMethod(out int value)
        {
            value = 3;
        }

        static void RefMethod(ref int value)
        {
            value++;
        }

        [Test]
        public static void TestRefOutField()
        {
            OutMethod(out field);
            Assert.AreEqual(3, field);

            RefMethod(ref field);
            Assert.AreEqual(4, field);

            
            OutMethod(out array[0]);
            Assert.AreEqual(3, array[0]);

            RefMethod(ref array[0]);
            Assert.AreEqual(4, array[0]);

            OutMethod(out array[array[1]]);
            Assert.AreEqual(3, array[array[1]]);

            RefMethod(ref array[array[1]]);
            Assert.AreEqual(4, array[array[1]]);

            
            int[] localArr = new int[]{0, 0};

            OutMethod(out localArr[0]);
            Assert.AreEqual(3, localArr[0]);

            RefMethod(ref localArr[0]);
            Assert.AreEqual(4, localArr[0]);

            OutMethod(out localArr[localArr[1]]);
            Assert.AreEqual(3, localArr[localArr[1]]);

            RefMethod(ref localArr[localArr[1]]);
            Assert.AreEqual(4, localArr[localArr[1]]);

            
            int[,] array2D = new int[,] { { 0, 0 } };
            
            OutMethod(out array2D[0,0]);
            Assert.AreEqual(3, array2D[0,0]);

            RefMethod(ref array2D[0, 0]);
            Assert.AreEqual(4, array2D[0, 0]);

            OutMethod(out array2D[array2D[0, 1], array2D[0, 1]]);
            Assert.AreEqual(3, array2D[array2D[0, 1], array2D[0, 1]]);

            RefMethod(ref array2D[array2D[0, 1], array2D[0, 1]]);
            Assert.AreEqual(4, array2D[array2D[0, 1], array2D[0, 1]]);
        }
    }
}