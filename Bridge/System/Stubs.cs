using Bridge;

namespace System
{
    [External]
    [Name("Function")]
    public class Type
    {
        public extern string FullName
        {
            [Template("Bridge.getTypeName({this})")]
            get;
        }

        public extern Type BaseType
        {
            [Template("({this}.$$inherits) ? {this}.$$inherits[0] : null")]
            get;
        }

        public static extern Type GetTypeFromHandle(RuntimeTypeHandle typeHandle);

        public extern bool IsAssignableFrom(Type type);
    }

    [External]
    [Name("Object")]
    public class ValueType
    {
    }

    [External]
    [Name("Object")]
    public struct IntPtr
    {
    }

    [External]
    [Name("Object")]
    public struct UIntPtr
    {
    }

    [External]
    [Name("Object")]
    public class ParamArrayAttribute
    {
    }

    [External]
    [Name("Object")]
    public struct RuntimeTypeHandle
    {
    }

    [External]
    [Name("Object")]
    public struct RuntimeFieldHandle
    {
    }
}