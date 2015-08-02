using Bridge;

namespace System
{
    [Ignore]
    [Name("Math")]
    public static class Math
    {
        public const double E = 0;
        public const double LN10 = 0;
        public const double LN2 = 0;
        public const double LOG2E = 0;
        public const double LOG10E = 0;
        public const double PI = 0;
        public const double SQRT1_2 = 0;
        public const double SQRT2 = 0;

        public static int Abs(int x)
        {
            return 0;
        }

        public static double Abs(double x)
        {
            return 0;
        }

        [Template("Bridge.Decimal.abs({l}).toFloat()")]
        public static extern decimal Abs(decimal l);

        public static int Max(params int[] values)
        {
            return 0;
        }

        public static double Max(params double[] values)
        {
            return 0;
        }

        [Template("Bridge.Decimal.max({a}, {b}).toFloat()")]
        public static extern decimal Max(decimal a, decimal b);

        public static int Min(params int[] values)
        {
            return 0;
        }

        public static double Min(params double[] values)
        {
            return 0;
        }

        [Template("Bridge.Decimal.min({a}, {b}).toFloat()")]
        public static extern decimal Min(decimal a, decimal b);

        public static double Random()
        {
            return 0;
        }

        public static double Sqrt(double x)
        {
            return 0;
        }

        [Template("Bridge.Decimal.ceil({d}).toFloat()")]
        public static extern decimal Ceiling(decimal d);

        [Name("ceil")]
        public static extern double Ceiling(double d);

        public static double Floor(double x)
        {
            return 0;
        }

        [Template("Bridge.Decimal.floor({d}).toFloat()")]
		public static extern decimal Floor(decimal d);

        public static double Round(double x)
        {
            return 0;
        }

        [Template("Bridge.Decimal.round({x}).toFloat()")]
        public static decimal Round(decimal x)
        {
            return 0;
        }

        [Template("Bridge.Decimal.round({x}, {digits}).toFloat()")]
        public static decimal Round(decimal x, int digits)
        {
            return 0;
        }

        public static double Exp(double x)
        {
            return 0;
        }

        public static double Log(double x)
        {
            return 0;
        }

        public static double Pow(double x, double y)
        {
            return 0;
        }

        public static double Acos(double x)
        {
            return 0;
        }

        public static double Asin(double x)
        {
            return 0;
        }

        public static double Atan(double x)
        {
            return 0;
        }

        public static double Atan2(double y, double x)
        {
            return 0;
        }

        public static double Cos(double x)
        {
            return 0;
        }

        public static double Sin(double x)
        {
            return 0;
        }

        public static double Tan(double x)
        {
            return 0;
        }

        [Template("Bridge.Int.trunc({d}).toFloat()")]
        public static extern double Truncate(double d);

        [Template("Bridge.Decimal.trunc({d}).toFloat()")]
        public static extern decimal Truncate(decimal d);
    }
}