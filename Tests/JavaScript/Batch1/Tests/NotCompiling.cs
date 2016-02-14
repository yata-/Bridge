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
