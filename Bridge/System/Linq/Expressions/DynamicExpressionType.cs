using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Enum(Emit.Value)]
    public enum DynamicExpressionType
    {
        MemberAccess,
        Invocation,
        Index
    }
}