using System.Collections.ObjectModel;
using System.Runtime.CompilerServices;
using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 18")]
	public abstract class LambdaExpression : Expression
    {
		[Name("params")]
        [FieldProperty]
		public extern ReadOnlyCollection<ParameterExpression> Parameters { get; private set; }
        [FieldProperty]
        public extern Expression Body { get; private set; }
        [FieldProperty]
        public extern Expression ReturnType { get; private set; }

		internal extern LambdaExpression();
	}
}