using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.CompilerServices;
using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype == 50 && {this}.dtype === 1")]
	public sealed class DynamicInvocationExpression : DynamicExpression
    {
        [FieldProperty]
		public extern ReadOnlyCollection<Expression> Arguments { get; private set; }

		internal extern DynamicInvocationExpression();
	}
}