using System.Runtime.CompilerServices;
using Bridge;

namespace System.Reflection
{
	[External]
	public class AmbiguousMatchException : Exception
    {
		public extern AmbiguousMatchException();
		public extern AmbiguousMatchException(string message);
		public extern AmbiguousMatchException(string message, Exception innerException);
	}
}
