using Bridge;

namespace System
{
    [External]
    public class InvalidCastException : Exception, IBridgeClass
    {
        public InvalidCastException()
        {
        }

        public InvalidCastException(string message)
        {
        }

        public InvalidCastException(string message, Exception innerException)
        {
        }
    }
}