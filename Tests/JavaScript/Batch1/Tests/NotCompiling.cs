using Bridge;

namespace Bridge.ClientTest.BridgeIssues
{


    // Does not compile issue [#61]
    // TODO It shows a correct error description now. How to check that in tests?
    //
    // class Class61
    // {
    //     public static void Test1(bool condition, string message = null)
    //     {
    //         Bridge.Script.Write(string.Format("var q = {0};", 1));
    //     }
    // }

    // Error: Index was outside the bounds of the array.
    // public class Class2
    // {
    //      public static void Test1(bool condition, string message = null)
    //     {
    //         Bridge.Script.Write("");
    //     }
    // }

    // [#65]
    internal class Class65_1
    {
        public class Nested
        {
        }
    }
    internal class Class65_2 : Class65_1.Nested
    {
    }

    // [#66]
    public struct Rectangle66
    {
        public Rectangle66(int x1)
        {
            this = new Rectangle66();
        }

        public Rectangle66(int x1, int x2)
        {
        }
    }
    // [#84] Does not compile
    internal class Class84
    {
        public void Test1()
        {
            try
            {
            }
            catch
            {
            }
        }
    }

    // [#89]
    //
    // public class Class89
    // {
    //     void Test(params object[] p)
    //     {
    //         var i = p[0];
    //     }
    // }

    // [#391]
    internal class Class391
    {
        public static void Main()
        {
            var TestArray1 = new[] { "TestA", "TestB", "TestC" };
            var TestArray2 = new[] { "TestA", "TestB", "TestC" };

            bool doSomething = false;
            foreach (var x in TestArray1)
            {
                foreach (var y in TestArray2)
                {
                    doSomething = x.Equals(y);
                }
            }

            foreach (var x in TestArray1)
            {
                foreach (var y in TestArray2)
                {
                    doSomething = x.Equals(y);
                }
            }
        }
    }
}
