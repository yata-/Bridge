using System.Runtime.CompilerServices;
using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 51")]
	public sealed class DefaultExpression : Expression
    {
		internal extern DefaultExpression();
	}
}