using Bridge;

namespace System.Collections
{
    [External]
    public interface IEnumerator : IBridgeClass
    {
        object Current
        {
            get;
        }

        bool MoveNext();

        void Reset();
    }
}