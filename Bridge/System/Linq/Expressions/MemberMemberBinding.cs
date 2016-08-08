using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.CompilerServices;
using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.btype === 1")]
	public sealed class MemberMemberBinding : MemberBinding
    {
        [FieldProperty]
		public extern ReadOnlyCollection<MemberBinding> Bindings { get; private set; }

		internal extern MemberMemberBinding();
	}
}