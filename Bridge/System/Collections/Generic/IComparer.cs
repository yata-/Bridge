using Bridge;

namespace System.Collections.Generic
{
    [External]
    public interface IComparer<in T>
    {
        int Compare(T x, T y);
    }
}