using Bridge;

namespace System
{
    [External]
    public class RankException : Exception, IBridgeClass
    {
        public extern RankException();

        public extern RankException(string message);

        public extern RankException(string message, Exception innerException);
    }
}