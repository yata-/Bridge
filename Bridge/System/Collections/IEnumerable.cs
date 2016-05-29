using Bridge;

namespace System.Collections
{
    [External]
    public interface IEnumerable : IBridgeClass
    {
        [Template("Bridge.getEnumerator({this})")]
        IEnumerator GetEnumerator();
    }
}