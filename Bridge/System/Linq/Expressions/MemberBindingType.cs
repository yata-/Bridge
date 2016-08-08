using System.Runtime.CompilerServices;
using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Enum(Emit.Value)]
    public enum MemberBindingType
    {
		Assignment,
		MemberBinding,
		ListBinding,
	}
}