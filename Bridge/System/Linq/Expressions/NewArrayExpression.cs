using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.CompilerServices;
using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 32 || {this}.ntype === 33")]
	public sealed class NewArrayExpression : Expression
    {
        [FieldProperty]
		public extern ReadOnlyCollection<Expression> Expressions { get; private set; }

		internal extern NewArrayExpression();
	}
}