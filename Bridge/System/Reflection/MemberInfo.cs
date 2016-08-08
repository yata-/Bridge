using System.Runtime.CompilerServices;
using Bridge;

namespace System.Reflection
{
	[External]
    [Name("Object")]
    public class MemberInfo
    {
	    [Name("type")]
	    [FieldProperty]
	    public extern MemberTypes MemberType
	    {
	        get;
	    }

        [FieldProperty]
	    public extern string Name
	    {
	        get;
	    }

	    [Name("typeDef")]
	    [FieldProperty]
	    public extern Type DeclaringType
	    {
	        get;
	    }

	    public extern bool IsStatic
	    {
	        [Template("({this}.isStatic || false)")]
            get;
	    }

        public extern bool IsOverride
        {
            [Template("({this}.isOverride || false)")]
            get;
        }

        public extern bool IsVirtual
        {
            [Template("({this}.isVirtual || false)")]
            get;
        }

        public extern bool IsAbstract
        {
            [Template("({this}.isAbstract || false)")]
            get;
        }

        public extern bool IsSealed
        {
            [Template("({this}.isSealed || false)")]
            get;
        }

        public extern bool IsSpecialName
        {
            [Template("({this}.isSynthetic || false)")]
            get;
        }

        public extern bool IsFamily
        {
            [Template("({this}.accessibility === 3)")]
            get;
        }

        public extern bool IsFamilyOrAssembly
        {
            [Template("({this}.accessibility === 5)")]
            get;
        }

        public extern bool IsPrivate
        {
            [Template("({this}.accessibility === 1)")]
            get;
        }

        public extern bool IsPublic
        {
            [Template("({this}.accessibility === 2)")]
            get;
        }

        public extern bool IsAssembly
        {
            [Template("({this}.accessibility === 4)")]
            get;
        }

        /// <summary>
        /// Returns an array of all custom attributes applied to this member.
        /// </summary>
        /// <param name="inherit">Ignored for members. Base members will never be considered.</param>
        /// <returns>An array that contains all the custom attributes applied to this member, or an array with zero elements if no attributes are defined. </returns>
        [Template("({this}.attr || [])")]
		public extern object[] GetCustomAttributes(bool inherit);

		/// <summary>
		/// Returns an array of custom attributes applied to this member and identified by <see cref="T:System.Type"/>.
		/// </summary>
		/// <param name="attributeType">The type of attribute to search for. Only attributes that are assignable to this type are returned. </param>
		/// <param name="inherit">Ignored for members. Base members will never be considered.</param>
		/// <returns>An array that contains all the custom attributes applied to this member, or an array with zero elements if no attributes are defined.</returns>
		[Template("({this}.attr || []).filter(function(a) { return Bridge.is(a, {attributeType}); })")]
		public extern object[] GetCustomAttributes(Type attributeType, bool inherit);

		/// <summary>
		/// Returns an array of all custom attributes applied to this member.
		/// </summary>
		/// <returns>An array that contains all the custom attributes applied to this member, or an array with zero elements if no attributes are defined. </returns>
		[Template("({this}.attr || [])")]
		public extern object[] GetCustomAttributes();

		/// <summary>
		/// Returns an array of custom attributes applied to this member and identified by <see cref="T:System.Type"/>.
		/// </summary>
		/// <param name="attributeType">The type of attribute to search for. Only attributes that are assignable to this type are returned. </param>
		/// <returns>An array that contains all the custom attributes applied to this member, or an array with zero elements if no attributes are defined.</returns>
		[Template("({this}.attr || []).filter(function(a) { return Bridge.is(a, {attributeType}); })")]
		public extern object[] GetCustomAttributes(Type attributeType);

		internal extern MemberInfo();
	}
}