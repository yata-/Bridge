using Bridge;
using System.Collections.ObjectModel;
using System.Reflection;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    public sealed class ElementInit
    {
        [FieldProperty]
        public extern MethodInfo AddMethod { get; private set; }

        [FieldProperty]
        public extern ReadOnlyCollection<Expression> Arguments { get; private set; }

        internal extern ElementInit();
    }
}