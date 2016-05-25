using Bridge;

namespace System.Collections
{
    [External]
    public interface ICollection : IEnumerable, IBridgeClass
    {
        int Count
        {
            [Template("System.Array.getCount({this})")]
            get;
        }
    }
}