using Bridge;

namespace System.Collections
{
    [Ignore]
    [Namespace("Bridge")]
    public interface ICollection : IEnumerable, IBridgeClass
    {
        int Count
        {
            [Template("Bridge.Array.getCount({this})")]
            get;
        }
    }
}
