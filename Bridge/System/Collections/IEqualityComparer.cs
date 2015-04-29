using Bridge;

namespace System.Collections
{
    [Ignore]
    [Namespace("Bridge")]
    public interface IEqualityComparer : IBridgeClass
    {
        [Template("{this}.equals({x}, {y})")]
        bool Equals(object x, object y);

        [Template("{this}.getHashCode({obj}, true)")]
        int GetHashCode(object obj);
    }
}