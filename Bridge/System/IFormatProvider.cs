using Bridge;

namespace System
{
    [External]
    public interface IFormatProvider : IBridgeClass
    {
        object GetFormat(Type formatType);
    }
}