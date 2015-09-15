using System;

namespace Bridge
{
    [Ignore]
    [AttributeUsage(AttributeTargets.Method)]
    public class InitAttribute : Attribute
    {
        public InitAttribute()
        {
        }

        public InitAttribute(InitPosition position)
        {
        }
    }

    [Ignore]
    public enum InitPosition
    {
        /// <summary>
        /// Emit this Method body immediately after this class defintion (default)
        /// </summary>
        After = 0,

        /// <summary>
        /// Emit this Method body Immediately before this class definition
        /// </summary>
        Before = 1
    }
}