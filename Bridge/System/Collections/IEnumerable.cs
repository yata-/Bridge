using Bridge;

namespace System.Collections
{
    [Ignore]
    [Namespace("Bridge")]
    public interface IEnumerable : IBridgeClass
    {
        [Template("Bridge.getEnumerator({this})")]
        IEnumerator GetEnumerator();
    }
}
