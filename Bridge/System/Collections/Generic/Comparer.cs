using Bridge;

namespace System.Collections.Generic
{
    [External]
    public abstract class Comparer<T> : IComparer<T>
    {
        public static extern Comparer<T> Default
        {
            [Template("new System.Collections.Generic.Comparer$1({T})(System.Collections.Generic.Comparer$1.$default.fn)")]
            get;
        }

        public abstract int Compare(T x, T y);

        [Template("new System.Collections.Generic.Comparer$1({T})({comparison})")]
        public static extern Comparer<T> Create(Comparison<T> comparison);
    }
}