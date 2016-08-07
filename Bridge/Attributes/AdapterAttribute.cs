using System;

namespace Bridge
{
    [External]
    [AttributeUsage(AttributeTargets.Method, AllowMultiple = true)]
    [NonScriptable]
    public abstract class AdapterAttribute : Attribute
    {
    }
}