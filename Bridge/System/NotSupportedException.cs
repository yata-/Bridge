using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class NotSupportedException : Exception, IBridgeClass
    {
        public extern NotSupportedException();

        public extern NotSupportedException(string message);

        public extern NotSupportedException(string message, Exception innerException);
    }
}