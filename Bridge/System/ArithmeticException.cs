using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class ArithmeticException : Exception, IBridgeClass
    {
        public extern ArithmeticException();

        public extern ArithmeticException(string message);

        public extern ArithmeticException(string message, Exception innerException);
    }
}