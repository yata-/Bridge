using Bridge;

namespace System
{
    [External]
    public class OutOfMemoryException : SystemException, IBridgeClass
    {
        public OutOfMemoryException()
        {
        }

        public OutOfMemoryException(string message)
            : base(message)
        {
        }

        [Template("new System.OutOfMemoryException({message}, {innerException})")]
        public OutOfMemoryException(string message, Exception innerException)
            : base(message, innerException)
        {
        }
    }
}
