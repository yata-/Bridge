using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class IndexOutOfRangeException : SystemException, IBridgeClass
    {
        public IndexOutOfRangeException()
        {
        }

        public IndexOutOfRangeException(string message)
        {
        }

        public IndexOutOfRangeException(string message, Exception innerException)
        {
        }
    }
}