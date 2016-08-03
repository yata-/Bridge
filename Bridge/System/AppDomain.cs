using System.Reflection;
using System.Runtime.CompilerServices;
using Bridge;

namespace System
{
	[External]
	public sealed class AppDomain
    {
		private extern AppDomain();

		public extern Assembly[] GetAssemblies();

	    public static extern AppDomain CurrentDomain
	    {
            get;
	    }
	}
}
