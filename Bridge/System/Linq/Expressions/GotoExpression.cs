using System.Reflection;
using System.Runtime.CompilerServices;
using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 53")]
	public sealed class GotoExpression : Expression
    {
        [FieldProperty]
		public extern GotoExpressionKind Kind { get; private set; }
        [FieldProperty]
        public extern Expression Value { get; private set; }
        [FieldProperty]
        public extern LabelTarget Target { get; private set; }

		internal extern GotoExpression();
	}
}