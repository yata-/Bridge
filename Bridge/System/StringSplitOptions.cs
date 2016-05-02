using Bridge;

namespace System
{
    [External]
    [Name("Number")]
    [Enum(Emit.Value)]
    public enum StringSplitOptions
    {
        None = 0,
        RemoveEmptyEntries = 1
    }
}