using System.Reflection;
using System.Runtime.CompilerServices;
using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    public abstract class MemberBinding
    {
		[Name("btype")]
        [FieldProperty]
		public extern MemberBindingType BindingType { get; private set; }
        [FieldProperty]
		public extern MemberInfo Member { get; private set; }

		internal extern MemberBinding();
	}
}