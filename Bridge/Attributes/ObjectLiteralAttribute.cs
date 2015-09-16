using System;

namespace Bridge
{
    [Ignore]
    [AttributeUsage(AttributeTargets.Enum | AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Interface)]
    public sealed class ObjectLiteralAttribute : Attribute
    {
        public ObjectLiteralAttribute()
        {
        }

        public ObjectLiteralAttribute(DefaultValueMode mode)
        {
        }
    }

    [Ignore]
    [Enum(Bridge.Emit.Value)]
    public enum DefaultValueMode
    {
        Ignore = 0,
        Initializer = 1,
        DefaultValue = 2
    }
}