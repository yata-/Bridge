using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class OutOfMemoryException : SystemException, IBridgeClass
    {
        public extern OutOfMemoryException();

        public extern OutOfMemoryException(string message);

        [Template("new Bridge.OutOfMemoryException({message}, {innerException})")]
        public extern OutOfMemoryException(string message, Exception innerException);
    }
}
