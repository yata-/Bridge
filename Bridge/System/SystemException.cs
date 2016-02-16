using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class SystemException : Exception, IBridgeClass
    {
        public SystemException()
        {
        }

        public SystemException(string message)
            : base(message)
        {
        }

        [Template("new Bridge.SystemException({message}, {innerException})")]
        public SystemException(string message, Exception innerException)
            : base(message, innerException)
        {
        }
    }
}
