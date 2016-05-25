using Bridge;

namespace System
{
    [External]
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