using System.Reflection;
using System.Runtime.CompilerServices;
using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("[4,10,11,28,29,30,34,40,44,49,54,60,62,77,78,79,80,82,83,84].indexOf({this}.ntype) >= 0")]
	public sealed class UnaryExpression : Expression
    {
        [FieldProperty]
		public extern Expression Operand { get; private set; }
        [FieldProperty]
        public extern MethodInfo Method { get; private set; }

		internal extern UnaryExpression();
	}
}