using Bridge;

namespace System.Collections.Generic 
{
    [Ignore]
    [Namespace("Bridge")]
    public interface IEnumerable<out T> : IEnumerable, IBridgeClass
    {
        [Template("Bridge.getEnumerator({this})")]
        new IEnumerator<T> GetEnumerator();
    }
}
