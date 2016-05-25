using Bridge;

namespace System
{
    [External]
    public class OverflowException : ArithmeticException, IBridgeClass
    {
        public OverflowException()
        {
        }

        public OverflowException(string message)
        {
        }

        public OverflowException(string message, Exception innerException)
        {
        }
    }
}