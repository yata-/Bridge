using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.CompilerServices;
using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 24")]
	public sealed class MemberInitExpression : Expression
    {
        [FieldProperty]
		public extern NewExpression NewExpression { get; private set; }
        [FieldProperty]
        public extern ReadOnlyCollection<MemberBinding> Bindings { get; private set; }

		internal extern MemberInitExpression();
	}
}