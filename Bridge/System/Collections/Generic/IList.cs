using Bridge;

namespace System.Collections.Generic
{
    [External]
    public interface IList<T> : ICollection<T>
    {
        T this[int index]
        {
            [Template("System.Array.getItem({this}, {0})")]
            get;
            [Template("System.Array.setItem({this}, {0})")]
            set;
        }

        [Template("System.Array.indexOf({this}, {item})")]
        int IndexOf(T item);

        [Template("System.Array.insert({this}, {index}, {item})")]
        void Insert(int index, T item);

        [Template("System.Array.removeAt({this}, {index})")]
        void RemoveAt(int index);
    }
}