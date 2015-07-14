using Bridge;

namespace System.Collections.Generic
{
    [Ignore]
    [Namespace("Bridge")]
    public interface IEnumerable<T> : IEnumerable, IBridgeClass
    {
        [Template("Bridge.getEnumerator({this}, \"$1\")")]
        new IEnumerator<T> GetEnumerator();
    }
}
