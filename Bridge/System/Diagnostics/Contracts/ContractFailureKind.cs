using Bridge;

namespace System.Diagnostics.Contracts
{
    [Namespace("Bridge")]
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