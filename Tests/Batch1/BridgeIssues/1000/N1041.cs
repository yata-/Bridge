using System;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#1041]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1041 - {0}")]
    public class Bridge1041
    {
        [Test(ExpectedCount = 12)]
        public static void TestPropertyOps()
        {
            Prop1 = 5;

            Prop1 /= 2;
            Assert.AreEqual(2, Prop1);

            Prop1 += 2;
            Assert.AreEqual(4, Prop1);

            Prop1++;
            Assert.AreEqual(5, Prop1);

            ++Prop1;
            Assert.AreEqual(6, Prop1);

            Assert.AreEqual(3, Method(Prop1 /= 2));
            Assert.AreEqual(3, Prop1);

            Assert.AreEqual(4, Method(Prop1 += 1));
            Assert.AreEqual(4, Prop1);

            Assert.AreEqual(4, Method(Prop1++));
            Assert.AreEqual(5, Prop1);

            Assert.AreEqual(6, Method(++Prop1));
            Assert.AreEqual(6, Prop1);
        }

        [Test(ExpectedCount = 12)]
        public static void TestIndexerOps()
        {
            var app = new Bridge1041();
            app[0] = 5;

            app[0] /= 2;
            Assert.AreEqual(2, app[0]);

            app[0] += 2;
            Assert.AreEqual(4, app[0]);

            app[0]++;
            Assert.AreEqual(5, app[0]);

            ++app[0];
            Assert.AreEqual(6, app[0]);

            Assert.AreEqual(3, Method(app[0] /= 2));
            Assert.AreEqual(3, app[0]);

            Assert.AreEqual(4, Method(app[0] += 1));
            Assert.AreEqual(4, app[0]);

            Assert.AreEqual(4, Method(app[0]++));
            Assert.AreEqual(5, app[0]);

            Assert.AreEqual(6, Method(++app[0]));
            Assert.AreEqual(6, app[0]);
        }

        [Test(ExpectedCount = 12)]
        public static void TestDictOps()
        {
            var dict = new Dictionary<int, int> {{0, 5}};

            dict[0] /= 2;
            Assert.AreEqual(2, dict[0]);

            dict[0] += 2;
            Assert.AreEqual(4, dict[0]);

            dict[0]++;
            Assert.AreEqual(5, dict[0]);

            ++dict[0];
            Assert.AreEqual(6, dict[0]);

            Assert.AreEqual(3, Method(dict[0] /= 2));
            Assert.AreEqual(3, dict[0]);

            Assert.AreEqual(4, Method(dict[0] += 1));
            Assert.AreEqual(4, dict[0]);

            Assert.AreEqual(4, Method(dict[0]++));
            Assert.AreEqual(5, dict[0]);

            Assert.AreEqual(6, Method(++dict[0]));
            Assert.AreEqual(6, dict[0]);
        }

        [Test(ExpectedCount = 12)]
        public static void TestVariableOps()
        {
            int i1 = 5;

            i1 /= 2;
            Assert.AreEqual(2, i1);

            i1 += 2;
            Assert.AreEqual(4, i1);

            i1++;
            Assert.AreEqual(5, i1);

            ++i1;
            Assert.AreEqual(6, i1);

            Assert.AreEqual(3, Method(i1 /= 2));
            Assert.AreEqual(3, i1);

            Assert.AreEqual(4, Method(i1 += 1));
            Assert.AreEqual(4, i1);

            Assert.AreEqual(4, Method(i1++));
            Assert.AreEqual(5, i1);

            Assert.AreEqual(6, Method(++i1));
            Assert.AreEqual(6, i1);
        }

        public static int Prop1
        {
            get; set;
        }

        public static int Method(int i)
        {
            return i;
        }

        private Dictionary<int, int> dict = new Dictionary<int, int>();  
        public int this[int i]
        {
            get
            {
                return dict[i];
            }
            set
            {
                dict[i] = value;
            }
        }
    }
}