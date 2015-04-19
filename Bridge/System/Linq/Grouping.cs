using System.Collections.Generic;
using Bridge;

namespace System.Linq 
{
    [Ignore]
    [IgnoreGeneric]
    public interface IGrouping<out TKey, out TElement> : IEnumerable<TElement>
    {
        TKey Key
        {
            [Name("key")]
            get;
        }
    }

	[Ignore]
    [IgnoreGeneric]
	public class Grouping<TKey, TElement> : EnumerableInstance<TElement>, IGrouping<TKey, TElement> 
    {
		internal Grouping() 
        {
        }

		public TKey Key 
        {
            [Name("key")] 
            get 
            { 
                return default(TKey); 
            } 
        }
	}
}