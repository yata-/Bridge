using Bridge;

namespace System.Collections.Generic
{
    [External]
    public interface ICollection<T> : IEnumerable<T>, IBridgeClass
    {
        int Count
        {
            [Template("System.Array.getCount({this})")]
            get;
        }

        [Template("System.Array.add({this}, {item})")]
        void Add(T item);

        [Template("System.Array.clear({this}, {T})")]
        void Clear();

        [Template("System.Array.contains({this}, {item})")]
        bool Contains(T item);

        [Template("System.Array.remove({this}, {item})")]
        bool Remove(T item);
    }
}