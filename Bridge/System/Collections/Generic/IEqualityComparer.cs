using Bridge;

namespace System.Collections.Generic
{
    [Ignore]
    [Namespace("Bridge")]
    public interface IEqualityComparer<in T> : IEqualityComparer, IBridgeClass
    {
        [Template("{this}.equals({x}, {y})")]
        bool Equals(T x, T y);

        [Template("{this}.getHashCode({obj}, true)")]
        int GetHashCode(T obj);
    }

    [Ignore]
    [Namespace("Bridge")]
    public abstract class EqualityComparer<T> : IEqualityComparer<T>, IBridgeClass
    {
        public static EqualityComparer<T> Default { get { return null; } }

        public abstract bool Equals(T x, T y);
        public abstract int GetHashCode(T obj);

        [Template("{this}.equals({x}, {y})")]
        bool IEqualityComparer.Equals(object x, object y)
        {
            return false;
        }

        [Template("{this}.getHashCode({obj}, true)")]
        int IEqualityComparer.GetHashCode(object obj)
        {
            return 0;
        }
    }
}