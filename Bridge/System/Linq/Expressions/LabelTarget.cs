using System.ComponentModel;
using System.Runtime.CompilerServices;
using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    public sealed class LabelTarget
    {
        [FieldProperty]
		public extern string Name { get; }
        [FieldProperty]
        public extern Type Type { get; }

		internal extern LabelTarget();
	}
}