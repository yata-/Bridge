using System;

namespace Bridge
{
    [External]
    public sealed class ObjectLiteral
    {
        [Template("{o:plain}")]
        public ObjectLiteral(object o)
        {
        }
    }
}