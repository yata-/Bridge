using Bridge.Test;

using System;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1378 - {0}")]
    public class Bridge1378
    {
        class IntWrapper
        {
            public int value;

            public int ToInt()
            {
                return value;
            }

            public IntWrapper(int value)
            {
                this.value = value;
            }

            public static IntWrapper operator +(IntWrapper a, IntWrapper b)
            {
                return new IntWrapper(a.value + b.value);
            }
        }

        public static float x
        {
            get; set;
        }

        [Test]
        public static void TestAssigmentWithOperator()
        {
            float a = 4;
            float b = 2;
            x -= a - b;
            Assert.AreEqual(-2, x);
        }

        [Test]
        public static void TestAssigmentWithOverloadOperator()
        {
            IntWrapper @int = new IntWrapper(3);
            @int += @int += new IntWrapper(1);
            Assert.AreEqual(7, @int.ToInt());
        }

        [Test]
        public static void TestAssigmentWithConditionalOperator()
        {
            int tabSize = 4;
            int tabLength1 = 0;
            string text = "        There is two tabs.";

            for (int i = 0; i < text.Length; i++)
            {
                tabLength1 += (text[i] == '\t') ? tabSize : 1;
            }

            Assert.AreEqual(26, tabLength1);
        }
    }
}
