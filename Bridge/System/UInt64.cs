using Bridge;

namespace System
{
    [External]
    [Name("Bridge.ULong")]
    [Constructor("Bridge.ULong")]
    public struct UInt64 : IComparable, IComparable<UInt64>, IEquatable<UInt64>, IFormattable
    {
        private UInt64(int i)
        {
        }

        [Name(false)]
        public const ulong MinValue = 0;

        [Name(false)]
        public const ulong MaxValue = 18446744073709551615;

        [Template("Bridge.ULong.parse({s})")]
        public static ulong Parse(string s)
        {
            return 0;
        }

        [Template("Bridge.ULong.tryParse({s}, {result})")]
        public static bool TryParse(string s, out ulong result)
        {
            result = 0;
            return false;
        }

        public string ToString(int radix)
        {
            return null;
        }

        public string Format(string format)
        {
            return null;
        }

        public string Format(string format, IFormatProvider provider)
        {
            return null;
        }

        public string ToString(string format)
        {
            return null;
        }

        public string ToString(string format, IFormatProvider provider)
        {
            return null;
        }

        public int CompareTo(ulong other)
        {
            return 0;
        }

        public int CompareTo(object obj)
        {
            return 0;
        }

        public bool Equals(ulong other)
        {
            return false;
        }

        //[Template("Bridge.ULong.lift({value})")]
        public static extern implicit operator ulong(byte value);

        //[Template("Bridge.ULong.lift({value})")]
        public static extern implicit operator ulong(sbyte value);

        //[Template("Bridge.ULong.lift({value})")]
        public static extern implicit operator ulong(short value);

        //[Template("Bridge.ULong.lift({value})")]
        public static extern implicit operator ulong(ushort value);

        //[Template("Bridge.ULong.lift({value})")]
        public static extern implicit operator ulong(char value);

        //[Template("Bridge.ULong.lift({value})")]
        public static extern implicit operator ulong(int value);

        //[Template("Bridge.ULong.lift({value})")]
        public static extern implicit operator ulong(uint value);

        //[Template("Bridge.ULong.lift(Bridge.Int.clipu64({value}))")]
        public static extern explicit operator ulong(float value);

        //[Template("Bridge.ULong.lift(Bridge.Int.clipu64({value}))")]
        public static extern explicit operator ulong(double value);

        //[Template("Bridge.Long.lift({value})")]
        //public static extern explicit operator ulong(long value);

        //[Template("Bridge.Long.clip8({value})")]
        public static extern explicit operator byte(ulong value);

        //[Template("Bridge.Long.clipu8({value})")]
        public static extern explicit operator sbyte(ulong value);

        //[Template("Bridge.Long.clipu16({value})")]
        public static extern explicit operator char(ulong value);

        //[Template("Bridge.Long.clip16({value})")]
        public static extern explicit operator short(ulong value);

        //[Template("Bridge.Long.clipu16({value})")]
        public static extern explicit operator ushort(ulong value);

        //[Template("Bridge.Long.clip32({value})")]
        public static extern explicit operator int(ulong value);

        //[Template("Bridge.Long.clipu32({value})")]
        public static extern explicit operator uint(ulong value);

        //[Template("Bridge.ULong.lift({value})")]
        //public static extern explicit operator long(ulong value);

        //[Template("Bridge.ULong.toNumber({value})")]
        public static extern explicit operator float(ulong value);

        //[Template("Bridge.ULong.toNumber({value})")]
        public static extern explicit operator double(ulong value);
    }
}
