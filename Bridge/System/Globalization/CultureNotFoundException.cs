using Bridge;

namespace System.Globalization
{
    [External]
    [Namespace("Bridge")]
    public class CultureNotFoundException : ArgumentException, IBridgeClass
    {
        public CultureNotFoundException()
        {
        }

        public CultureNotFoundException(string paramName)
        {
        }

        [Template("new Bridge.CultureNotFoundException(null, null, {message}, {innerException})")]
        public CultureNotFoundException(string message, Exception innerException)
        {
        }

        [Template("new Bridge.CultureNotFoundException({paramName}, null, {message}, null)")]
        public CultureNotFoundException(string paramName, string message)
        {
        }

        [Template("new Bridge.CultureNotFoundException(null, {invalidCultureName}, {message}, {innerException})")]
        public CultureNotFoundException(string message, string invalidCultureName, Exception innerException)
        {
        }

        [Template("new Bridge.CultureNotFoundException({paramName}, {invalidCultureName}, {message})")]
        public CultureNotFoundException(string paramName, string invalidCultureName, string message)
        {
        }

        public string InvalidCultureName
        {
            get
            {
                return null;
            }
        }
    }
}
