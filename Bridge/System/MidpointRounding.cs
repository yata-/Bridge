using Bridge;

namespace System
{
	/// <summary>
	/// Specifies how mathematical rounding methods should process a number that is midway between two numbers.
	/// </summary>
	[Ignore]
    [Enum(Emit.Value)]
	public enum MidpointRounding
	{
        AwayFromZero = 0,
		ToEven = 6,
        Floor = 2,
        Ceil = 3
	}
}
