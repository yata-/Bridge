using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class TimeoutException : SystemException
    {
        public extern TimeoutException();

        public extern TimeoutException(string message);

        [Template("new Bridge.TimeoutException({message}, {innerException})")]
        public extern TimeoutException(string message, Exception innerException);
    }
}