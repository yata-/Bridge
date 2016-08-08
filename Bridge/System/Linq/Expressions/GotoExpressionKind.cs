using System.Reflection;
using System.Runtime.CompilerServices;
using Bridge;

namespace System.Linq.Expressions
{
	[External]
    [Enum(Emit.Value)]
    public enum GotoExpressionKind
    {
		Goto,
		Return,
		Break,
		Continue,
	}
}
