using Bridge;
using System.Collections.ObjectModel;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.btype === 2")]
    public sealed class MemberListBinding : MemberBinding
    {
        [FieldProperty]
        public extern ReadOnlyCollection<ElementInit> Initializers { get; private set; }

        internal extern MemberListBinding();
    }
}