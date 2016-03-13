using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class IndexOutOfRangeException : SystemException
    {
        public IndexOutOfRangeException()
        {
        }

        public IndexOutOfRangeException(string message)
            : base(message)
        {
        }

        [Template("new Bridge.IndexOutOfRangeException({message}, {innerException})")]
        public IndexOutOfRangeException(string message, Exception innerException)
            : base(message, innerException)
        {
        }
    }
 }
