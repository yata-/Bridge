using System.Collections.Generic;
using System.ComponentModel;
using System.Reflection;
using System.Runtime.CompilerServices;
using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 18")]
	public sealed class Expression<TDelegate> : LambdaExpression
    {
		public extern Expression<TDelegate> Update(Expression body, IEnumerable<ParameterExpression> parameters);

		internal extern Expression();
	}
}