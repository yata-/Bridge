using System;

namespace Bridge
{
    /// <summary>
    ///
    /// </summary>
    [External]
    [AttributeUsage(AttributeTargets.Field)]
    [NonScriptable]
    public sealed class InlineConstAttribute : Attribute
    {
    }
}