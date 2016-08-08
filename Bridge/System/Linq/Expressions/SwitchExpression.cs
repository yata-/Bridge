using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Reflection;
using System.Runtime.CompilerServices;
using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 59")]
	public sealed class SwitchExpression : Expression
    {
        [FieldProperty]
		public extern Expression SwitchValue { get; private set; }
        [FieldProperty]
        public extern ReadOnlyCollection<SwitchCase> Cases { get; private set; }
        [FieldProperty]
        public extern Expression DefaultBody { get; private set; }
        [FieldProperty]
        public extern MethodInfo Comparison { get; private set; }

		internal extern SwitchExpression();
	}
}