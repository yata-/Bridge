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
        /// Emit this Method body at the bottom of .js file (default)
        /// </summary>
        Bottom = 0,

        /// <summary>
        /// Emit this Method body at the top of .js file
        /// </summary>
        Top = 1,

        /// <summary>
        /// Emit this Method body Immediately before this class definition
        /// </summary>
        Before = 2,

        /// <summary>
        /// Emit this Method body immediately after this class defintion
        /// </summary>
        After = 3
    }
}