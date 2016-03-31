// https://msdn.microsoft.com/en-us/library/system.random(v=vs.110).aspx

namespace System
{
    using Bridge;
    
    [External]
    [Name("Bridge.Random")]
    public class Random
    {
        /// <summary>
        /// Initializes a new instance of the Random class, using a time-dependent default seed value.
        /// </summary>
        [Template("new Bridge.Random(\"constructor\")")]
        public extern Random();

        /// <summary>
        /// nitializes a new instance of the Random class, using the specified seed value.
        /// </summary>
        /// <param name="seed">A number used to calculate a starting value for the pseudo-random number sequence. If a negative number is specified, the absolute value of the number is used.</param>
        [Template("new Bridge.Random(\"constructor$1\", {seed})")]
        public extern Random(int seed);

        /// <summary>
        /// Returns a random floating-point number between 0.0 and 1.0.
        /// </summary>
        /// <returns>A double-precision floating point number that is greater than or equal to 0.0, and less than 1.0.</returns>
        protected extern virtual double Sample();

        /// <summary>
        /// Returns a non-negative random integer.
        /// </summary>
        /// <returns>A 32-bit signed integer that is greater than or equal to 0 and less than Int32.MaxValue.</returns>
        [Template("next()")]
        public extern virtual int Next();

        /// <summary>
        /// Returns a random integer that is within a specified range.
        /// </summary>
        /// <param name="minValue">The inclusive lower bound of the random number returned.</param>
        /// <param name="maxValue">The exclusive upper bound of the random number returned. maxValue must be greater than or equal to minValue.</param>
        /// <returns>A 32-bit signed integer greater than or equal to minValue and less than maxValue; that is, the range of return values includes minValue but not maxValue. If minValue equals maxValue, minValue is returned.</returns>
        [Template("next$2({minValue}, {maxValue})")]
        public extern virtual int Next(int minValue, int maxValue);

        /// <summary>
        /// Returns a non-negative random integer that is less than the specified maximum.
        /// </summary>
        /// <param name="maxValue">The exclusive upper bound of the random number to be generated. maxValue must be greater than or equal to 0</param>
        /// <returns>A 32-bit signed integer that is greater than or equal to 0, and less than maxValue; that is, the range of return values ordinarily includes 0 but not maxValue. However, if maxValue equals 0, maxValue is returned.</returns>
        [Template("next$1({maxValue})")]
        public extern virtual int Next(int maxValue);

        /// <summary>
        /// Returns a random floating-point number that is greater than or equal to 0.0, and less than 1.0.
        /// </summary>
        /// <returns>A double-precision floating point number that is greater than or equal to 0.0, and less than 1.0.</returns>
        public extern virtual double NextDouble();

        /// <summary>
        /// Fills the elements of a specified array of bytes with random numbers.
        /// </summary>
        /// <param name="buffer">An array of bytes to contain random numbers.</param>
        public extern virtual void NextBytes(byte[] buffer);
    }
}
