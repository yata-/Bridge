using System.Runtime.CompilerServices;
using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype == 50 && {this}.dtype === 2")]
	public sealed class DynamicIndexExpression : DynamicExpression
    {
        [FieldProperty]
		public extern Expression Argument { get; private set; }

		internal extern DynamicIndexExpression();
	}
}