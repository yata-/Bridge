using System;

namespace Bridge
{
    /// <summary>
    /// This attribute turns methods on a static class as global methods in the generated
    /// script. Note that the class must be static, and must contain only methods.
    /// </summary>
    [External]
    [AttributeUsage(AttributeTargets.Class, Inherited = false, AllowMultiple = true)]
    [NonScriptable]
    public sealed class GlobalMethodsAttribute : Attribute
    {
    }

    [External]
    [AttributeUsage(AttributeTargets.Class, Inherited = false, AllowMultiple = false)]
    [NonScriptable]
    public sealed class MixinAttribute : Attribute
    {
        public MixinAttribute(string expression)
        {
            Expression = expression;
        }

        public string Expression { get; private set; }
    }
}