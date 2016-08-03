using System;

namespace Bridge
{
    [External]
    //[AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Interface, AllowMultiple = false)]
    [AttributeUsage(AttributeTargets.Property, AllowMultiple = false)]
    [NonScriptable]
    public sealed class AccessorsIndexerAttribute : Attribute
    {
    }
}