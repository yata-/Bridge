using System.Runtime.CompilerServices;
using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 8")]
	public sealed class ConditionalExpression : Expression
    {
        [FieldProperty]
        public extern Expression Test { get; private set; }
        [FieldProperty]
        public extern Expression IfTrue { get; private set; }
        [FieldProperty]
        public extern Expression IfFalse { get; private set; }

		internal extern ConditionalExpression();
	}
}