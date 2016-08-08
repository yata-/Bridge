// String extension methods

namespace Bridge.Html5
{
    /// <summary>
    /// String global object extension methods to cater for the ECMA String prototype object.
    /// </summary>
    [External]
    public static class StringPrototype
    {
        /// <summary>
        /// The toLowerCase() method returns the calling string value converted to lowercase.
        /// </summary>
        /// <returns></returns>
        [Template("{this}.toLowerCase()")]
        public static extern string ToLowerCase(this string str);

        /// <summary>
        /// The toLocaleLowerCase() method returns the calling string value converted to lower case, according to any locale-specific case mappings.
        /// </summary>
        /// <returns></returns>
        [Template("{this}.toLocaleLowerCase()")]
        public static extern string ToLocaleLowerCase(this string str);

        /// <summary>
        /// The toUpperCase() method returns the calling string value converted to uppercase.
        /// </summary>
        /// <returns></returns>
        [Template("{this}.toUpperCase()")]
        public static extern string ToUpperCase(this string str);

        /// <summary>
        /// The toLocaleUpperCase() method returns the calling string value converted to upper case, according to any locale-specific case mappings.
        /// </summary>
        /// <returns></returns>
        [Template("{this}.toLocaleUpperCase()")]
        public static extern string ToLocaleUpperCase(this string str);
    }
}