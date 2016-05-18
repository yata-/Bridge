using Bridge;
using System.Collections.Generic;

namespace System
{
    [External]
    [Name("Bridge.Exception")]
    public class Exception : IBridgeClass
    {
        /// <summary>
        /// Gets a collection of key/value pairs that provide additional user-defined information about the exception.
        /// </summary>
        public virtual extern IDictionary<object, object> Data
        {
            get;
        }

        /// <summary>
        /// Gets a message that describes the current exception.
        /// </summary>
        public virtual extern string Message
        {
            get;
        }

        /// <summary>
        /// Gets the Exception instance that caused the current exception.
        /// </summary>
        public virtual extern Exception InnerException
        {
            get;
        }

        /// <summary>
        /// Gets a string representation of the immediate frames on the call stack.
        /// </summary>
        public virtual extern string StackTrace
        {
            get;
        }

        public extern Exception();

        public extern Exception(string message);

        public extern Exception(string message, Exception innerException);
    }
}