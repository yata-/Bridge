using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class ArgumentNullException : ArgumentException, IBridgeClass
    {
        public extern ArgumentNullException();

        public extern ArgumentNullException(string paramName);

        public extern ArgumentNullException(string paramName, string message);

        [Template("new Bridge.ArgumentNullException(null, {message}, {innerException})")]
        public extern ArgumentNullException(string message, Exception innerException);
    }
}