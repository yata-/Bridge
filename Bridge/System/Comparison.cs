using Bridge;

namespace System
{
    [Name("Function")]
    [External]
    public delegate int Comparison<in T>(T x, T y);
}