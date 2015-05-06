using Bridge;

namespace System.Collections.Generic
{
    [Ignore]
    [Namespace("Bridge")]
    public class KeyValuePair<TKey, TValue> : IBridgeClass
    {
        internal KeyValuePair()
        {
        }

        public TKey Key;
        public TValue Value;
    }
}
