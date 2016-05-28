using Bridge;

namespace System.Diagnostics.Contracts
{
    [Enum(Emit.Name)]
    [External]
    public enum ContractFailureKind
    {
        Precondition,
        Postcondition,
        PostconditionOnException,
        Invariant,
        Assert,
        Assume,
    }
}