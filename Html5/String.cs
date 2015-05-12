// String extension methods

using Bridge;

namespace Bridge.Html5
{
    /// <summary>
    /// String global object extension methods to cater for the ECMA String prototype object.
    /// </summary>
    [Ignore]
    [Name("String")]
    [Constructor("String")]
    public static class StringPrototype
    {
        /// <summary>
        /// The toLowerCase() method returns the calling string value converted to lowercase.
        /// </summary>
        /// <returns></returns>
        public static string ToLowerCase(this string str)
        {
            return null;
        }

        /// <summary>
        /// The toLocaleLowerCase() method returns the calling string value converted to lower case, according to any locale-specific case mappings.
        /// </summary>
        /// <returns></returns>        
        public static string ToLocaleLowerCase(this string str)
        {
            return null;
        }

        /// <summary>
        /// The toUpperCase() method returns the calling string value converted to uppercase.
        /// </summary>
        /// <returns></returns>
        public static string ToUpperCase(this string str)
        {
            return null;
        }

        /// <summary>
        /// The toLocaleUpperCase() method returns the calling string value converted to upper case, according to any locale-specific case mappings.
        /// </summary>
        /// <returns></returns>
        public static string ToLocaleUpperCase(this string str)
        {
            return null;
        }        
    }
}
