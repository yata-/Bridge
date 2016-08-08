using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.CompilerServices;
using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 17")]
	public sealed class InvocationExpression : Expression
    {
        [FieldProperty]
		public extern Expression Expression { get; private set; }
		[Name("args")]
        [FieldProperty]
		public extern ReadOnlyCollection<Expression> Arguments { get; private set; }

		internal extern InvocationExpression();
	}
}