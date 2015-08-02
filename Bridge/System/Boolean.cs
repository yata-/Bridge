using Bridge;

namespace System
{
    [Ignore]
    [Name("Boolean")]
    //[Constructor("!!")]
    public struct Boolean
    {
        [Template("!!")]
        public Boolean(object value)
        {
        }
    }
}