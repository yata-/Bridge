using System;

namespace Bridge
{
    /// <summary>
	/// Can be applied to a member to indicate that metadata for the member should (or should not) be included in the compiled script. By default members are reflectable if they have at least one scriptable attribute. The default reflectability can be changed with the DefaultMemberReflectabilityAttribute.
	/// </summary>
	[AttributeUsage(AttributeTargets.All, AllowMultiple = true)]
    [External]
    [NonScriptable]
    public sealed class ReflectableAttribute : Attribute
    {
        public extern ReflectableAttribute();

        public extern ReflectableAttribute(bool reflectable);

        public extern ReflectableAttribute(string filter);

        public extern ReflectableAttribute(MemberAccessibility memberAccessibility);

        public extern ReflectableAttribute(TypeAccessibility typeAccessibility);
    }

    /// <summary>
    /// This enum defines the possibilities for default member reflectability.
    /// </summary>
    [NonScriptable]
    public enum MemberAccessibility
    {
        None,

        PublicAndProtected,

        NonPrivate,

        All
    }

    [NonScriptable]
    [Flags]
    public enum TypeAccessibility
    {
        None = 1,

        Public = 2,

        NonPrivate = 4,

        Anonymous = 8,

        NonAnonymous = 16,

        All = 32
    }
}