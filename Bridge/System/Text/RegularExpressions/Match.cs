using Bridge;

namespace System.Text.RegularExpressions
{
    /// <summary>
    /// Represents the results from a single regular expression match.
    /// </summary>
    [Namespace("Bridge.Text.RegularExpressions")]
    [External]
    public class Match : Group
    {
        internal Match(Regex regex, int capcount, String text, int begpos, int len, int startpos)
            : base(text, new int[2], 0)
        {
        }

        /// <summary>
        /// Gets the empty group. All failed matches return this empty match.
        /// </summary>
        public extern static Match Empty { get; }

        /// <summary>
        /// Gets a collection of groups matched by the regular expression.
        /// </summary>
        public extern virtual GroupCollection Groups { get; }

        /// <summary>
        /// Returns a new Match object with the results for the next match, starting at the position at which the last match ended (at the character after the last matched character).
        /// </summary>
        public extern Match NextMatch();

        /// <summary>
        /// Returns the expansion of the specified replacement pattern.
        /// </summary>
        public extern virtual string Result(string replacement);

        /// <summary>
        /// Returns a Match instance equivalent to the one supplied that is suitable to share between multiple threads.
        /// </summary>
        public extern static Match Synchronized(Match inner);
    }
}