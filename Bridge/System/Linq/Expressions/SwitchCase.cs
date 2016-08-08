using Bridge;
using System.Collections.ObjectModel;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    public sealed class SwitchCase
    {
        [FieldProperty]
        public extern ReadOnlyCollection<Expression> TestValues { get; private set; }

        [FieldProperty]
        public extern Expression Body { get; private set; }

        internal extern SwitchCase();
    }
}