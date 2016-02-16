using Bridge;

namespace System
{
    /// <summary>
    /// Specifies whether relevant "Convert.ToBase64CharArray" and "Convert.ToBase64String" methods insert line breaks in their output.
    /// </summary>
    [External]
    [Enum(Emit.Value)]
    public enum Base64FormattingOptions
    {
        None = 0,
        InsertLineBreaks = 1,
    }
}