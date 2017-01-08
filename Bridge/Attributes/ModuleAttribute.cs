using System;

namespace Bridge
{
    /// <summary>
    ///
    /// </summary>
    [External]
    [AttributeUsage(AttributeTargets.Assembly | AttributeTargets.Class | AttributeTargets.Enum | AttributeTargets.Struct | AttributeTargets.Interface)]
    [NonScriptable]
    public sealed class ModuleAttribute : Attribute
    {
        public ModuleAttribute()
        {
        }

        public ModuleAttribute(string moduleName)
        {
        }

        public ModuleAttribute(ModuleType type)
        {
        }

        public ModuleAttribute(ModuleType type, string moduleName)
        {
        }
    }

    [NonScriptable]
    public enum ModuleType
    {
        AMD,
        CommonJS,
        UMD,
        ES6
    }
}