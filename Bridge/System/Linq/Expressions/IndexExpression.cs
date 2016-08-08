using Bridge;
using System.Collections.ObjectModel;
using System.Reflection;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 55")]
    public sealed class IndexExpression : Expression
    {
        [Name("obj")]
        [FieldProperty]
        public extern Expression Object { get; private set; }

        [FieldProperty]
        public extern PropertyInfo Indexer { get; private set; }

        [FieldProperty]
        public extern ReadOnlyCollection<Expression> Arguments { get; private set; }

        internal extern IndexExpression();
    }
}