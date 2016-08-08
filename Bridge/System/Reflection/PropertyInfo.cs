using Bridge;

namespace System.Reflection
{
    [External]
    public class PropertyInfo : MemberInfo
    {
        [Name("returnType")]
        [FieldProperty]
        public extern Type PropertyType
        {
            get;
        }

        public extern Type[] IndexParameterTypes
        {
            [Template("({this}.params || [])")]
            get;
        }

        [Template("({this}.indexParamsInfo || [])")]
        public extern ParameterInfo[] GetIndexParameters();

        public extern bool CanRead
        {
            [Template("(!!{this}.getter)")]
            get;
        }

        [FieldProperty]
        public extern bool IsIndexer
        {
            [Template("({this}.isIndexer || false)")]
            get;
        }

        public extern bool CanWrite
        {
            [Template("(!!{this}.setter)")]
            get;
        }

        [Name("getter")]
        [FieldProperty]
        public extern MethodInfo GetMethod
        {
            get;
        }

        [Name("setter")]
        [FieldProperty]
        public extern MethodInfo SetMethod
        {
            get;
        }

        [Template("Bridge.Reflection.midel({this}.getter, {obj})()")]
        public extern object GetValue(object obj);

        [Template("Bridge.Reflection.midel({this}.getter, {obj}).apply(null, {index})")]
        public extern object GetValue(object obj, object[] index);

        [Template("Bridge.Reflection.midel({this}.setter, {obj})({value})")]
        public extern void SetValue(object obj, object value);

        [Template("Bridge.Reflection.midel({this}.setter, {obj}).apply(null, {index}.concat({value}))")]
        public extern void SetValue(object obj, object value, object[] index);

        /// <summary>
        /// For properties implemented as fields, contains the name of the field. Null for properties implemented as get and set methods.
        /// </summary>
        [Name("fname")]
        [FieldProperty]
        public extern string ScriptFieldName
        {
            get;
        }

        internal extern PropertyInfo();
    }
}