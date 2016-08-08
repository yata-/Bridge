using Bridge;
using System.Collections.ObjectModel;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 61")]
    public sealed class TryExpression : Expression
    {
        [FieldProperty]
        public extern Expression Body { get; private set; }

        [FieldProperty]
        public extern ReadOnlyCollection<CatchBlock> Handlers { get; private set; }

        [Name("finallyExpr")]
        [FieldProperty]
        public extern Expression Finally { get; private set; }

        [FieldProperty]
        public extern Expression Fault { get; private set; }

        internal extern TryExpression();
    }
}