using System.ComponentModel;
using System.Runtime.CompilerServices;
using Bridge;

namespace System.Reflection
{
	[External]
    [Name("Object")]
    public class MethodBase : MemberInfo
    {
	    public extern Type[] ParameterTypes
	    {
            [Template("({this}.params || [])")]
            get;
	    }

	    public extern bool IsConstructor
	    {
	        [Template("({this}.type === 1)")]
            get;
	    }

		[NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
		public static extern MethodBase GetMethodFromHandle(RuntimeMethodHandle h);

		[NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
		public static extern MethodBase GetMethodFromHandle(RuntimeMethodHandle h, RuntimeTypeHandle x);

        [Template("({this}.paramsInfo || [])")]
	    public extern ParameterInfo[] GetParameters();

        internal extern MethodBase();
	}
}