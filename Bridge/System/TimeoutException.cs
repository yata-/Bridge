using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class TimeoutException : SystemException
    {
        public TimeoutException()
        {
        }

        public TimeoutException(string message)
            : base(message)
        {
        }

        [Template("new Bridge.TimeoutException({message}, {innerException})")]
        public TimeoutException(string message, Exception innerException)
            : base(message, innerException)
        {
        }
    }
}