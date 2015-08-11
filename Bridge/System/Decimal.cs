using System;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using Bridge;

namespace System
{
    /// <summary>
    /// The decimal data type.
    /// </summary>
    [Ignore]
    [Name("Bridge.Decimal")]
    [Constructor("Bridge.Decimal")]
    public struct Decimal : IComparable, IComparable<Decimal>, IEquatable<Decimal>, IFormattable
    {
        public const decimal Zero = 0;
        public const decimal One = 1;
        public const decimal MinusOne = -1;

        [Template("Bridge.Decimal(0)")]
        private extern Decimal(DummyTypeUsedToAddAttributeToDefaultValueTypeConstructor _);

        [Template("Bridge.Decimal({d})")]
        public extern Decimal(double d);

        [Template("Bridge.Decimal({i})")]
        public extern Decimal(int i);

        [Template("Bridge.Decimal({i})")]
        public extern Decimal(uint i);

        [Template("Bridge.Decimal({f})")]
        public extern Decimal(float f);

        [Template("Bridge.Decimal({n})")]
        public extern Decimal(long n);

        [Template("Bridge.Decimal({n})")]
        public extern Decimal(ulong n);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public extern Decimal(int lo, int mid, int hi, bool isNegative, byte scale);

        [Template("Bridge.Int.format({this}.toFloat(), {format})")]
        public extern string Format(string format);

        [Template("Bridge.Int.format({this}.toFloat(), {format}, {provider})")]
        public extern string Format(string format, IFormatProvider provider);

        [Template("Bridge.Int.format({this}.toFloat(), {format})")]
        public string ToString(string format)
        {
            return null;
        }

        [Template("Bridge.Int.format({this}.toFloat(), {format}, {provider})")]
        public string ToString(string format, IFormatProvider provider)
        {
            return null;
        }

        [Template("Bridge.Int.format({this}.toFloat(), 'G', {provider})")]
        public string ToString(IFormatProvider provider)
        {
            return null;
        }

        [Template("Bridge.Decimal({value})")]
        public static extern implicit operator decimal(byte value);

        [Template("Bridge.Decimal({value})")]
        public static extern implicit operator decimal(sbyte value);

        [Template("Bridge.Decimal({value})")]
        public static extern implicit operator decimal(short value);

        [Template("Bridge.Decimal({value})")]
        public static extern implicit operator decimal(ushort value);

        [Template("Bridge.Decimal({value})")]
        public static extern implicit operator decimal(char value);

        [Template("Bridge.Decimal({value})")]
        public static extern implicit operator decimal(int value);

        [Template("Bridge.Decimal({value})")]
        public static extern implicit operator decimal(uint value);

        [Template("Bridge.Decimal({value})")]
        public static extern implicit operator decimal(long value);

        [Template("Bridge.Decimal({value})")]
        public static extern implicit operator decimal(ulong value);

        [Template("Bridge.Decimal({value})")]
        public static extern explicit operator decimal(float value);

        [Template("Bridge.Decimal({value})")]
        public static extern explicit operator decimal(double value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern explicit operator byte(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern explicit operator sbyte(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern explicit operator char(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern explicit operator short(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern explicit operator ushort(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern explicit operator int(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern explicit operator uint(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern explicit operator long(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern explicit operator ulong(decimal value);

        [Template("{value}.toFloat()")]
        public static extern explicit operator float(decimal value);

        [Template("{value}.toFloat()")]
        public static extern explicit operator double(decimal value);

        [Template("{d}.clone()")]
        public static extern decimal operator +(decimal d);

        [Template("{d}.neg()")]
        public static extern decimal operator -(decimal d);

        [Template("{d1}.add({d2})")]
        public static extern decimal operator +(decimal d1, decimal d2);

        [Template("{d1}.sub({d2})")]
        public static extern decimal operator -(decimal d1, decimal d2);

        [Template("{d}.add(1)")]
        public static extern decimal operator ++(decimal d);

        [Template("{d}.sub(1)")]
        public static extern decimal operator --(decimal d);

        [Template("{d1}.mul({d2})")]
        public static extern decimal operator *(decimal d1, decimal d2);

        [Template("{d1}.div({d2})")]
        public static extern decimal operator /(decimal d1, decimal d2);

        [Template("{d1}.mod({d2})")]
        public static extern decimal operator %(decimal d1, decimal d2);

        [Template("{d1}.equalsT({d2})")]
        public static extern bool operator ==(decimal d1, decimal d2);

        [Template("{d1}.ne({d2})")]
        public static extern bool operator !=(decimal d1, decimal d2);

        [Template("{d1}.gt({d2})")]
        public static extern bool operator >(decimal d1, decimal d2);

        [Template("{d1}.gte({d2})")]
        public static extern bool operator >=(decimal d1, decimal d2);

        [Template("{d1}.lt({d2})")]
        public static extern bool operator <(decimal d1, decimal d2);

        [Template("{d1}.lte({d2})")]
        public static extern bool operator <=(decimal d1, decimal d2);

        [Template("{d1}.add({d2})")]
        public static extern decimal Add(decimal d1, decimal d2);

        [Template("{d}.ceil()")]
        public static extern decimal Ceiling(decimal d);

        [Template("{d1}.div({d2})")]
        public static extern decimal Divide(decimal d1, decimal d2);

        [Template("{d}.floor()")]
        public static extern decimal Floor(decimal d);

        [Template("{d1}.mod({d2})")]
        public static extern decimal Remainder(decimal d1, decimal d2);

        [Template("{d1}.mul({d2})")]
        public static extern decimal Multiply(decimal d1, decimal d2);

        [Template("Bridge.Decimal(0).sub({d})")]
        public static extern decimal Negate(decimal d);

        [Template("Bridge.Decimal({s})")]
        public static extern decimal Parse(string s);

        [Template("Bridge.Decimal({s}, {provider})")]
        public static extern decimal Parse(string s, IFormatProvider provider);

        [Template("Bridge.Decimal.tryParse({s}, null, {result})")]
        public static extern bool TryParse(string s, out decimal result);

        [Template("Bridge.Decimal.tryParse({s}, {provider}, {result})")]
        public static extern bool TryParse(string s, IFormatProvider provider, out decimal result);

        [Template("Bridge.Decimal.round({d}, 0, 1)")]
        public static extern decimal Round(decimal d);

        [Template("Bridge.Decimal.round({d}, {decimals}, 1)")]
        public static extern decimal Round(decimal d, int decimals);

        [Template("Bridge.Decimal.round({d}, 0, {mode})")]
        public static extern decimal Round(decimal d, MidpointRounding mode);

        [Template("Bridge.Decimal.round({d}, {decimals}, {mode})")]
        public static extern decimal Round(decimal d, int decimals, MidpointRounding mode);

        [Template("{d}.trunc()")]
        public static extern decimal Truncate(decimal d);

        [Template("{d1}.sub({d2})")]
        public static extern decimal Subtract(decimal d1, decimal d2);

        [Template("{this}.compareTo({other})")]
        public extern int CompareTo(decimal other);

        [Template("{d1}.compareTo({d2})")]
        public static extern int Compare(decimal d1, decimal d2);

        public extern bool Equals(decimal other);

        [Template("{d1}.equals({d2})")]
        public static extern bool Equals(decimal d1, decimal d2);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern byte ToByte(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern sbyte ToSByte(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern char ToChar(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern short ToInt16(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern ushort ToUInt16(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern int ToInt32(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern uint ToUInt32(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern long ToInt64(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern ulong ToUInt64(decimal value);

        [Template("{value}.toFloat()")]
        public static extern float ToSingle(decimal value);

        [Template("{value}.toFloat()")]
        public static extern double ToDouble(decimal value);

        [Template("{this}.compareTo({obj})")]
        public extern int CompareTo(object obj);
    }
}
