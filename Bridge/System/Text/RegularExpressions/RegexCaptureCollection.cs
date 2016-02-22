using System.Collections;
using Bridge;

namespace System.Text.RegularExpressions.CoreFx
{
    /// <summary>
    /// Represents the set of captures made by a single capturing group.
    /// </summary>
    [External]
    public class CaptureCollection : ICollection
    {
        internal CaptureCollection()
        {
        }

        /// <summary>
        /// Gets an object that can be used to synchronize access to the collection.
        /// </summary>
        public extern object SyncRoot { get; }

        /// <summary>
        /// Gets a value that indicates whether access to the collection is synchronized (thread-safe).
        /// </summary>
        public extern bool IsSynchronized { get; }

        /// <summary>
        /// Gets a value that indicates whether the collection is read only.
        /// </summary>
        public extern bool IsReadOnly { get; }

        /// <summary>
        /// Gets the number of substrings captured by the group.
        /// </summary>
        public extern int Count { get; }

        /// <summary>
        /// Gets an individual member of the collection.
        /// </summary>
        public extern Capture this[int i] { get; }

        /// <summary>
        /// Copies all the elements of the collection to the given array beginning at the given index.
        /// </summary>
        public extern void CopyTo(Array array, int arrayIndex);

        /// <summary>
        /// Provides an enumerator that iterates through the collection.
        /// </summary>
        public extern IEnumerator GetEnumerator();
    }
}