using Bridge;

namespace System
{
    [External]
    public class ArgumentOutOfRangeException : ArgumentException, IBridgeClass
    {
        public ArgumentOutOfRangeException()
        {
        }

        public ArgumentOutOfRangeException(string paramName)
        {
        }

        [Template("new System.ArgumentOutOfRangeException(null, {message}, {innerException})")]
        public ArgumentOutOfRangeException(string message, Exception innerException)
        {
        }

        public ArgumentOutOfRangeException(string paramName, string message)
        {
        }

        [Template("new System.ArgumentOutOfRangeException({paramName}, {message}, null, {actualValue})")]
        public ArgumentOutOfRangeException(string paramName, object actualValue, string message)
        {
        }

        public object ActualValue
        {
            get
            {
                return null;
            }
        }
    }
}