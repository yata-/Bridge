using Bridge;

namespace System
{
    [External]
    public class ArithmeticException : Exception, IBridgeClass
    {
        public ArithmeticException()
        {
        }

        public ArithmeticException(string message)
        {
        }

        public ArithmeticException(string message, Exception innerException)
        {
        }
    }
}