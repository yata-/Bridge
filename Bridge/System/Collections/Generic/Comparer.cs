using Bridge;

namespace System.Collections.Generic
{
    [Namespace("Bridge")]
    [External]
    public abstract class Comparer<T> : IComparer<T>
    {
        public static extern Comparer<T> Default
        {
            [Template("new Bridge.Comparer$1({T})(Bridge.Comparer$1.$default.fn)")]
            get;
        }

        public abstract int Compare(T x, T y);

        [Template("new Bridge.Comparer$1({T})({comparison})")]
        public static extern Comparer<T> Create(Comparison<T> comparison);
    }
}