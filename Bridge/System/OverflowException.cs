using Bridge;

namespace System
{
    [External]
    public class OverflowException : ArithmeticException, IBridgeClass
    {
        public extern OverflowException();

        public extern OverflowException(string message);

        public extern OverflowException(string message, Exception innerException);
    }
}