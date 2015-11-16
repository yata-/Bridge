using Bridge;

namespace System
{
    [Ignore]
    [Namespace("Bridge")]
    public class RankException : Exception, IBridgeClass
    {
        public RankException()
        {
        }

        public RankException(string message)
        {
        }

        public RankException(string message, Exception innerException)
        {
        }
    }
}
