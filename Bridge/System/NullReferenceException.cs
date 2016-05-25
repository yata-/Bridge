using Bridge;

namespace System
{
    [External]
    public class NullReferenceException : Exception, IBridgeClass
    {
        public NullReferenceException()
        {
        }

        public NullReferenceException(string message)
        {
        }

        public NullReferenceException(string message, Exception innerException)
        {
        }
    }
}