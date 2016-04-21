using Bridge;
using Bridge.Html5;

namespace TestIssue1230
{
    public class Issue1230
    {
        public static void Test()
        {
            int v = 7;
            long l = (long)v;
            l = v;

            Console.Log((long)v);
            Console.Log((long)(v));
            Console.Log((long)(1 + 1));
            Console.Log((long)(2));
            Console.Log((long)7);
            Method(v);
            Method((long)v);
        }

        public static void Method(long l)
        {
        }
    }
}
