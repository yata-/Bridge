using System;

namespace Bridge
{
    [Ignore]
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Class)]
    public class NativeMethodAttribute : Attribute
    {
    }
}