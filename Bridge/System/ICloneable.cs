using Bridge;

namespace System
{
    [External]
    public interface ICloneable : IBridgeClass
    {
        [Template("Bridge.clone({this})")]
        object Clone();
    }
}