using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class InvalidOperationException : Exception, IBridgeClass
    {
        public extern InvalidOperationException();

        public extern InvalidOperationException(string message);

        public extern InvalidOperationException(string message, Exception innerException);
    }
}