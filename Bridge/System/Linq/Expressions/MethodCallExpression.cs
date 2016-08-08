using Bridge;
using System.Collections.ObjectModel;
using System.Reflection;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 6")]
    public sealed class MethodCallExpression : Expression
    {
        [FieldProperty]
        public extern MethodInfo Method { get; private set; }

        [Name("obj")]
        [FieldProperty]
        public extern Expression Object { get; private set; }

        [Name("args")]
        [FieldProperty]
        public extern ReadOnlyCollection<Expression> Arguments { get; private set; }

        internal extern MethodCallExpression();
    }
}