using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class ArgumentException : Exception, IBridgeClass
    {
        public extern ArgumentException();

        public extern ArgumentException(string message);

        [Template("new Bridge.ArgumentException({message}, null, {innerException})")]
        public extern ArgumentException(string message, Exception innerException);

        public extern ArgumentException(string message, string paramName);

        public extern ArgumentException(string message, string paramName, Exception innerException);

        /// <summary>
        /// Gets the name of the parameter that causes this exception.
        /// </summary>
        public extern string ParamName
        {
            get;
        }
    }
}