using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class DivideByZeroException : ArithmeticException, IBridgeClass
    {
        public extern DivideByZeroException();

        public extern DivideByZeroException(string message);

        public extern DivideByZeroException(string message, Exception innerException);
    }
}