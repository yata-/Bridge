using Bridge;

namespace System
{
    [Namespace("Bridge"), External]
    public class RegexMatchTimeoutException : TimeoutException
    {
        public extern string Pattern { get; }
        public extern string Input { get; }
        public extern TimeSpan MatchTimeout { get; }


        public extern RegexMatchTimeoutException();

        public extern RegexMatchTimeoutException(string message);

        public extern RegexMatchTimeoutException(string message, Exception innerException);

        public extern RegexMatchTimeoutException(string regexInput, string regexPattern, TimeSpan matchTimeout);
    }
}