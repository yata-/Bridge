using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.CompilerServices;
using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 22")]
	public sealed class ListInitExpression : Expression
    {
        [FieldProperty]
		public extern NewExpression NewExpression { get; private set; }
        [FieldProperty]
        public extern ReadOnlyCollection<ElementInit> Initializers { get; private set; }

		internal extern ListInitExpression();
	}
}