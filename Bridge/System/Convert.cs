using Bridge;

namespace System
{
    [External]
    [Name("Convert")]
    public static class Convert
    {
        /// <summary>
        /// Converts the value of a specified object to an equivalent Boolean value.
        /// Note: Calling this method for <see cref="char"/> and <see cref="DateTime"/> values always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Template("Bridge.Convert.toBoolean({value}, null)")]
        public static extern bool ToBoolean(object value);

        /// <summary>
        /// Converts the value of the specified object to an equivalent Boolean value, using the specified culture-specific formatting information.
        /// Note: Calling this method for <see cref="char"/> and <see cref="DateTime"/> values always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Template("Bridge.Convert.toBoolean({value}, {provider})")]
        public static extern bool ToBoolean(object value, IFormatProvider provider);
    }
}