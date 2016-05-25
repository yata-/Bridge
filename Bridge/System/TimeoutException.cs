using Bridge;

namespace System
{
    [External]
    public class TimeoutException : SystemException
    {
        public TimeoutException()
        {
        }

        public TimeoutException(string message)
            : base(message)
        {
        }

        [Template("new System.TimeoutException({message}, {innerException})")]
        public TimeoutException(string message, Exception innerException)
            : base(message, innerException)
        {
        }
    }
}