using System.Runtime.CompilerServices;
using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 58")]
	public sealed class LoopExpression : Expression
    {
        [FieldProperty]
		public extern Expression Body { get; private set; }
        [FieldProperty]
        public extern LabelTarget BreakLabel { get; private set; }
        [FieldProperty]
        public extern LabelTarget ContinueLabel { get; private set; }

		internal extern LoopExpression();
	}
}