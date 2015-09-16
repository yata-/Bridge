using System;

namespace Bridge
{
    /// <summary>
    /// Makes it so the code with this attribute is not built into the assembly files.
    /// Useful for stubbed out code to match JavaScript.
    /// </summary>
    [Ignore]
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Enum | AttributeTargets.Delegate | AttributeTargets.Interface | AttributeTargets.Method | AttributeTargets.Property, AllowMultiple = true)]
    public sealed class IgnoreAttribute : Attribute
    {
    }
}