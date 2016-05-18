using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class SystemException : Exception, IBridgeClass
    {
        public extern SystemException();

        public extern SystemException(string message);

        [Template("new Bridge.SystemException({message}, {innerException})")]
        public extern SystemException(string message, Exception innerException);
    }
}
