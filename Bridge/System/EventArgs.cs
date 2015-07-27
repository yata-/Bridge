using Bridge;
using System;

namespace System
{
    /// <summary>
    /// System.EventArgs is the base class for classes containing event data.
    /// </summary>
    [Ignore]
    [Name("Object")]
    public class EventArgs
    {
        /// <summary>
        /// Represents an event with no event data.
        /// </summary>
        public static readonly EventArgs Empty;

        /// <summary>
        /// Initializes a new instance of the System.EventArgs class.
        /// </summary>
        public EventArgs()
        {
        }
    }
}