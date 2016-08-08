using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Reflection;
using System.Runtime.CompilerServices;
using Bridge;

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