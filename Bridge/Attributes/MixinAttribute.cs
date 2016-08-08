using System;

namespace Bridge
{

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