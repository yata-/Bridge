using Bridge;

namespace System.Text.RegularExpressions.CoreFx
{
    /// <summary>
    /// Represents the results from a single capturing group.
    /// </summary>
    [External]
    public class Group : Capture
    {
        internal Group()
        {
        }

        /// <summary>
        /// Gets a value indicating whether the match is successful.
        /// </summary>
        public extern bool Success { get; }

        /// <summary>
        /// Gets a collection of all the captures matched by the capturing group, in innermost-leftmost-first order 
        /// (or innermost-rightmost-first order if the regular expression is modified with the <see cref="RegexOptions.RightToLeft"/> option). 
        /// The collection may have zero or more items.
        /// </summary>
        public extern CaptureCollection Captures { get; }

#if !SILVERLIGHT
        /// <summary>
        /// Returns a Group object equivalent to the one supplied that is safe to share between multiple threads.
        /// </summary>
        public static extern Group Synchronized(Group inner);
#endif
    }
}