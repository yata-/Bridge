using System;

namespace Bridge
{
    [External]
    [AttributeUsage(AttributeTargets.Struct, AllowMultiple = false)]
    [NonScriptable]
    public sealed class ImmutableAttribute : Attribute
    {
    }
}