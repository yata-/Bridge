using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    public sealed class CatchBlock
    {
        [FieldProperty]
        public extern ParameterExpression Variable { get; private set; }

        [FieldProperty]
        public extern Type Test { get; private set; }

        [FieldProperty]
        public extern Expression Body { get; private set; }

        [FieldProperty]
        public extern Expression Filter { get; private set; }

        internal extern CatchBlock();
    }
}