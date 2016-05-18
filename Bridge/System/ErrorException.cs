using Bridge;

namespace System
{
    [External]
    [Name("Bridge.ErrorException")]
    public class ErrorException : Exception, IBridgeClass
    {
        public extern virtual Error Error
        {
            get;
        }

        public extern ErrorException();

        public extern ErrorException(string message);

        public extern ErrorException(string message, Exception innerException);
    }
}