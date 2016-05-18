using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class ArgumentOutOfRangeException : ArgumentException, IBridgeClass
    {
        public extern ArgumentOutOfRangeException();

        public extern ArgumentOutOfRangeException(string paramName);

        [Template("new Bridge.ArgumentOutOfRangeException(null, {message}, {innerException})")]
        public extern ArgumentOutOfRangeException(string message, Exception innerException);

        public extern ArgumentOutOfRangeException(string paramName, string message);

        [Template("new Bridge.ArgumentOutOfRangeException({paramName}, {message}, null, {actualValue})")]
        public extern ArgumentOutOfRangeException(string paramName, object actualValue, string message);

        public extern object ActualValue
        {
            get;
        }
    }
}