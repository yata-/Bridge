using System;

namespace Bridge
{
    [Ignore]
    [AttributeUsage(AttributeTargets.Method)]
    public class AfterDefineAttribute : Attribute
    {
    }

    [Ignore]
    [AttributeUsage(AttributeTargets.Method)]
    public class BeforeDefineAttribute : Attribute
    {
    }
}