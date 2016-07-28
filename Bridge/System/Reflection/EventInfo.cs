using System.ComponentModel;
using System.Runtime.CompilerServices;
using Bridge;

namespace System.Reflection
{
	[External]
	public class EventInfo : MemberInfo
    {
	    [Name("adder")]
	    [FieldProperty]
	    public extern MethodInfo AddMethod
	    {
	        get;
            private set;
	    }

	    [Name("remover")]
	    [FieldProperty]
	    public extern MethodInfo RemoveMethod
	    {
	        get;
            private set;
	    }

		[Template("Bridge.Reflection.midel({this}.adder, {target})({handler})")]
		public extern void AddEventHandler(object target, Delegate handler);

		[Template("Bridge.Reflection.midel({this}.remover, {target})({handler})")]
		public extern void RemoveEventHandler(object target, Delegate handler);

		internal extern EventInfo();
	}
}