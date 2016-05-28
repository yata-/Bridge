using Bridge;

namespace System
{
    [External]
    public class TimeoutException : SystemException
    {
        public extern TimeoutException();

        public extern TimeoutException(string message);

        [Template("new System.TimeoutException({message}, {innerException})")]
        public extern TimeoutException(string message, Exception innerException);
    }
}