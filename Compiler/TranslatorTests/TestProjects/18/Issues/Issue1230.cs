using Bridge.Html5;

namespace TestIssue1230
{
    public class Issue1230
    {
        public static void TestLong()
        {
            // Conversions should not have duplicated Bridge.Long: Bridge.Long(Bridge.Long(v))
            int v = 7;
            long l = (long)v;
            l = v;

            Console.Log((long)v);
            Console.Log((long)(v));
            Console.Log((long)(1 + 1));
            Console.Log((long)(2));
            Console.Log((long)7);
            MethodLong(v);
            MethodLong((long)v);
        }

        public static void MethodLong(long l)
        {
        }

        public static void MethodDecimal(decimal l)
        {
        }

        public static void MethodInt(int l)
        {
        }

        public static void TestDecimal()
        {
            // Conversions should not have duplicated Bridge.Decimal: Bridge.Decimal(Bridge.Decimal(v))
            int v = 7;
            decimal l = (decimal)v;
            l = v;

            Console.Log((decimal)v);
            Console.Log((decimal)(v));
            Console.Log((decimal)(1 + 1));
            Console.Log((decimal)(2));
            Console.Log((decimal)7);
            MethodDecimal(v);
            MethodDecimal((decimal)v);
        }

        public static void TestInt()
        {
            byte v = 7;
            int l = (int)v;
            l = v;

            Console.Log((int)v);
            Console.Log((int)(v));
            Console.Log((int)(1 + 1));
            Console.Log((int)(2));
            Console.Log((int)7);
            MethodInt(v);
            MethodInt((int)v);
        }
    }
}
