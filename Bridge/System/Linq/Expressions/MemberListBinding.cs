using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.CompilerServices;
using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.btype === 2")]
	public sealed class MemberListBinding : MemberBinding
    {
        [FieldProperty]
		public extern ReadOnlyCollection<ElementInit> Initializers { get; private set; }

		internal extern MemberListBinding();
	}
}