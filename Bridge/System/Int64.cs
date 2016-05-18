using Bridge;

namespace System
{
    [External]
    [Name("Bridge.Long")]
    [Constructor("Bridge.Long")]
    public struct Int64 : IComparable, IComparable<Int64>, IEquatable<Int64>, IFormattable
    {
        private extern Int64(int i);

        [Name(false)]
        public const long MinValue = -9223372036854775808;

        [Name(false)]
        public const long MaxValue = 9223372036854775807;

        [Template("Bridge.Long.parse({s})")]
        public static extern long Parse(string s);

        [Template("Bridge.Long.tryParse({s}, {result})")]
        public static extern bool TryParse(string s, out long result);

        public extern string ToString(int radix);

        public extern string Format(string format);

        public extern string Format(string format, IFormatProvider provider);

        public extern string ToString(string format);

        public extern string ToString(string format, IFormatProvider provider);

        public extern int CompareTo(long other);

        public extern int CompareTo(object obj);

        public extern bool Equals(long other);

        //[Template("Bridge.Long.lift({value})")]
        public static extern implicit operator long(byte value);

        //[Template("Bridge.Long.lift({value})")]
        public static extern implicit operator long(sbyte value);

        //[Template("Bridge.Long.lift({value})")]
        public static extern implicit operator long(short value);

        //[Template("Bridge.Long.lift({value})")]
        public static extern implicit operator long(ushort value);

        //[Template("Bridge.Long.lift({value})")]
        public static extern implicit operator long(char value);

        //[Template("Bridge.Long.lift({value})")]
        public static extern implicit operator long(int value);

        //[Template("Bridge.Long.lift({value})")]
        public static extern implicit operator long(uint value);

        //[Template("Bridge.Long.lift(Bridge.Int.clip64({value}))")]
        public static extern explicit operator long(float value);

        //[Template("Bridge.Long.lift(Bridge.Int.clip64({value}))")]
        public static extern explicit operator long(double value);

        //[Template("Bridge.Long.lift({value})")]
        public static extern explicit operator long(ulong value);

        //[Template("Bridge.Long.clip8({value})")]
        public static extern explicit operator byte(long value);

        //[Template("Bridge.Long.clipu8({value})")]
        public static extern explicit operator sbyte(long value);

        //[Template("Bridge.Long.clipu16({value})")]
        public static extern explicit operator char(long value);

        //[Template("Bridge.Long.clip16({value})")]
        public static extern explicit operator short(long value);

        //[Template("Bridge.Long.clipu16({value})")]
        public static extern explicit operator ushort(long value);

        //[Template("Bridge.Long.clip32({value})")]
        public static extern explicit operator int(long value);

        //[Template("Bridge.Long.clipu32({value})")]
        public static extern explicit operator uint(long value);

        //[Template("Bridge.ULong.lift({value})")]
        public static extern explicit operator ulong(long value);

        //[Template("Bridge.Long.toNumber({value})")]
        public static extern explicit operator float(long value);

        //[Template("Bridge.Long.toNumber({value})")]
        public static extern explicit operator double(long value);
    }
}
