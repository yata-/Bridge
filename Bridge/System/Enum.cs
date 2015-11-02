using System.Runtime.CompilerServices;
using Bridge;

namespace System
{
    [Ignore]
    [Name("Bridge.Enum")]
    public abstract class Enum : ValueType
    {
        public static extern Enum Parse(Type enumType, string value);

        public static extern string ToString(Type enumType, Enum value);

        public static extern Array GetValues(Type enumType);
    }
}
