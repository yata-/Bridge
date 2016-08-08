using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Reflection;
using System.Runtime.CompilerServices;
using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 31")]
	public sealed class NewExpression : Expression
    {
        [FieldProperty]
		public new extern ConstructorInfo Constructor { get; private set; }
        [FieldProperty]
        public extern ReadOnlyCollection<Expression> Arguments { get; private set; }
        [FieldProperty]
        public extern ReadOnlyCollection<MemberInfo> Members { get; private set; }

		internal extern NewExpression();
	}
}