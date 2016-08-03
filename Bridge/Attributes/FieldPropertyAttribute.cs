using System;

namespace Bridge
{
    [External]
    [AttributeUsage(AttributeTargets.Property)]
    [NonScriptable]
    public sealed class FieldPropertyAttribute : Attribute
    {
    }
}