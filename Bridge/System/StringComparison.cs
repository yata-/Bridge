using Bridge;

namespace System 
{
	/// <summary>
	/// Specifies the custom string comparison implementation.
	/// </summary>
	[Ignore]
    [Enum(Emit.Value)]
	public enum StringComparison
    {
        CurrentCulture = 0,

        CurrentCultureIgnoreCase = 1,

        InvariantCulture = 2,

        InvariantCultureIgnoreCase = 3,

        Ordinal = 4,

        OrdinalIgnoreCase = 5
	}
}
