using Bridge;

namespace System
{
    [Ignore]
    [Name("Function")] 
    public class Type
    {
        public static Type GetTypeFromHandle(RuntimeTypeHandle typeHandle)
        {
            return null;
        }
    }

    [Ignore]
    [Name("Object")] 
    public class ValueType
    {
    }

    [Ignore]
    [Name("Object")] 
    public struct IntPtr
    {
    }

    [Ignore]
    [Name("Object")] 
    public struct UIntPtr
    {
    }

    [Ignore]
    [Name("Object")] 
    public class ParamArrayAttribute
    {
    }

    [Ignore]
    [Name("Object")] 
    public struct RuntimeTypeHandle
    {
    }

    [Ignore]
    [Name("Object")] 
    public struct RuntimeFieldHandle
    {
    }
}