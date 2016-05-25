using Bridge;

namespace System
{
    [External]
    public class FormatException : Exception, IBridgeClass
    {
        public FormatException()
        {
        }

        public FormatException(string message)
        {
        }

        public FormatException(string message, Exception innerException)
        {
        }
    }
}