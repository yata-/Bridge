using Bridge;

namespace System
{
    [External]
    [Constructor("")]
    [Name("Bridge.Nullable")]
    public struct Nullable<T> where T : struct
    {
        [Template("{0}")]
        public extern Nullable(T value);

        public extern bool HasValue
        {
            [Template("Bridge.Nullable.hasValue({this})")]
            get;
        }

        public extern T Value
        {
            [Template("Bridge.Nullable.getValue({this})")]
            get;
        }

        [Template("Bridge.Nullable.getValueOrDefault({this}, {T:default})")]
        public extern T GetValueOrDefault();

        [Template("Bridge.Nullable.getValueOrDefault({this}, {0})")]
        public extern T GetValueOrDefault(T defaultValue);

        public static extern implicit operator T? (T value);

        [Template("Bridge.Nullable.getValue({this})")]
        public static extern explicit operator T(T? value);

        [Template("Bridge.Nullable.equalsT({this}, {other})")]
        public override extern bool Equals(object other);

        [Template("Bridge.Nullable.getHashCode({this})")]
        public override extern int GetHashCode();

        [Template("Bridge.Nullable.toString({this})")]
        public override extern string ToString();
    }
}