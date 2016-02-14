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

}
