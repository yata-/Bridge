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

        /// <summary>
        /// Converts the value of the specified object to a Unicode character.
        /// Note: Calling this method for <see cref="bool"/>, <see cref="float"/>, <see cref="double"/>, <see cref="decimal"/> and <see cref="DateTime"/> values always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Template("Bridge.Convert.toChar({value}, null, false, false)")]
        public static extern char ToChar(object value);

        /// <summary>
        /// Converts the value of the specified object to its equivalent Unicode character, using the specified culture-specific formatting information.
        /// Note: Calling this method for <see cref="bool"/>, <see cref="float"/>, <see cref="double"/>, <see cref="decimal"/> and <see cref="DateTime"/> values always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Template("Bridge.Convert.toChar({value}, {provider}, false, false)")]
        public static extern char ToChar(object value, IFormatProvider provider);

        /// <summary>
        /// Calling this method always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Template("Bridge.Convert.toChar({value}, null, false, true)")]
        public static extern char ToChar(float value);

        /// <summary>
        /// Calling this method always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Template("Bridge.Convert.toChar({value}, null, false, true)")]
        public static extern char ToChar(double value);

        /// <summary>
        /// Calling this method always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Template("Bridge.Convert.toChar({value}, null, false, true)")]
        public static extern char ToChar(decimal value);

        /// <summary>
        /// Converts the value of the specified object to a Unicode character.
        /// </summary>
        [Template("Bridge.Convert.toChar({value}, null, true, false)")]
        public static extern char ToChar(string value);

        /// <summary>
        /// Converts the value of the specified object to its equivalent Unicode character, using the specified culture-specific formatting information.
        /// </summary>
        [Template("Bridge.Convert.toChar({value}, {provider}, true, false)")]
        public static extern char ToChar(string value, IFormatProvider provider);
    }
}