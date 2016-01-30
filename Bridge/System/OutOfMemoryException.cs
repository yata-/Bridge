using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class OutOfMemoryException : SystemException, IBridgeClass
    {
        public OutOfMemoryException()
        {
        }

        public OutOfMemoryException(string message)
            : base(message)
        {
        }

        [Template("new Bridge.OutOfMemoryException({message}, {innerException})")]
        public OutOfMemoryException(string message, Exception innerException)
            : base(message, innerException)
        {
        }
    }
}
