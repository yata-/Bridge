using Bridge;

namespace System
{
    public class RegexMatchTimeoutException : TimeoutException
    {
        public extern string Pattern { get; }
        public extern string Input { get; }
        public extern TimeSpan MatchTimeout { get; }


        public RegexMatchTimeoutException()
        {
        }

        public RegexMatchTimeoutException(string message)
            : base(message)
        {
        }

        public RegexMatchTimeoutException(string message, Exception innerException)
            : base(message, innerException)
        {
        }

        public RegexMatchTimeoutException(string regexInput, string regexPattern, TimeSpan matchTimeout)
        {
        }
    }
}