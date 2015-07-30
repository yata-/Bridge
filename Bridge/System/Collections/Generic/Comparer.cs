using Bridge;
namespace System.Collections.Generic
{
	[Namespace("Bridge")]
	public abstract class Comparer<T>
    {
	    public static Comparer<T> Default
	    {
            [Template("Bridge.Comparer$1.$default")]
	        get
	        {
	            return null;
	        }
	    }

	    public abstract int Compare(T x, T y);

	    [Template("new Bridge.Comparer$1({T})({comparison})")]
	    public static Comparer<T> Create(Comparison<T> comparison)
	    {
	        return null;
	    }
	}
}
