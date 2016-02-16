// The source is licensed to the .NET Foundation under the MIT license:
// https://github.com/dotnet/corefx/blob/master/src/System.Runtime.Extensions/tests/System/Convert.TestBase.cs
// https://github.com/dotnet/corefx/blob/master/LICENSE


using System;
using Bridge.Test;

namespace Bridge.ClientTest.ConvertTests
{
    public abstract class ConvertTestBase<TOutput>
    {
        /// <summary>
        /// Verify that the provided convert delegate produces expectedValues given testValues.
        /// </summary>
        protected void Verify<TInput>(Func<TInput, TOutput> convert, TInput[] testValues, TOutput[] expectedValues)
        {
            Assert.AreEqual(expectedValues.Length, testValues.Length);

            for (int i = 0; i < testValues.Length; i++)
            {
                TOutput result = convert(testValues[i]);
                Assert.AreEqual(expectedValues[i], result);
            }
        }

        /// <summary>
        /// Verify that the provided convert delegate produces expectedValues given testValues.
        /// The overloading should be used to test methods accepting objects.
        /// </summary>
        protected void VerifyViaObj<TInput>(Func<object, TOutput> convert, TInput[] testValues, TOutput[] expectedValues)
        {
            Assert.AreEqual(expectedValues.Length, testValues.Length);

            for (int i = 0; i < testValues.Length; i++)
            {
                TOutput result = convert(testValues[i]);
                Assert.AreEqual(expectedValues[i], result);
            }
        }

        /// <summary>
        /// Verify that the provided convert delegates produce expectedValues given testValues
        /// </summary>
        protected void VerifyFromString(Func<string, TOutput> convert, Func<string, IFormatProvider, TOutput> convertWithFormatProvider, string[] testValues, TOutput[] expectedValues)
        {
            Verify(convert, testValues, expectedValues);
            Verify(input => convertWithFormatProvider(input, TestFormatProvider.s_instance), testValues, expectedValues);
        }

        /// <summary>
        /// Verify that the provided convert delegates produce expectedValues given testValues
        /// </summary>
        protected void VerifyFromObject(Func<object, TOutput> convert, Func<object, IFormatProvider, TOutput> convertWithFormatProvider, object[] testValues, TOutput[] expectedValues)
        {
            Verify(convert, testValues, expectedValues);
            Verify(input => convertWithFormatProvider(input, TestFormatProvider.s_instance), testValues, expectedValues);
        }

        /// <summary>
        /// Verify that the provided convert delegate produces expectedValues given testValues and testBases
        /// </summary>
        protected void VerifyFromStringWithBase(Func<string, int, TOutput> convert, string[] testValues, int[] testBases, TOutput[] expectedValues)
        {
            Assert.AreEqual(testValues.Length, testBases.Length);
            Assert.AreEqual(testValues.Length, expectedValues.Length);

            for (int i = 0; i < testValues.Length; i++)
            {
                TOutput result = convert(testValues[i], testBases[i]);
                Assert.AreEqual(expectedValues[i], result);
            }
        }

        /// <summary>
        /// Verify that the provided convert delegate throws an exception of type TException given testValues and testBases
        /// </summary>
        protected void VerifyFromStringWithBaseThrows<TException>(Func<string, int, TOutput> convert, string[] testValues, int[] testBases)
            where TException : Exception
        {
            Assert.AreEqual(testValues.Length, testBases.Length);

            for (int i = 0; i < testValues.Length; i++)
            {
                try
                {
                    Assert.Throws(() => convert(testValues[i], testBases[i]), err => err is TException);
                }
                catch (Exception e)
                {
                    string message = string.Format("Expected {0} converting '{1}' (base {2}) to '{3}'", typeof(TException).GetClassName(), testValues[i], testBases[i], typeof(TOutput).GetClassName());
                    throw new AggregateException(message, e);
                }
            }
        }

        /// <summary>
        /// Verify that the provided convert delegate throws an exception of type TException given testValues
        /// </summary>
        protected void VerifyThrows<TException, TInput>(Func<TInput, TOutput> convert, TInput[] testValues) 
            where TException : Exception
        {
            for (int i = 0; i < testValues.Length; i++)
            {
                try
                {
                    Assert.Throws(() => convert(testValues[i]), err => err is TException);
                }
                catch (Exception e)
                {
                    string message = string.Format("Expected {0} converting '{1}' ({2}) to {3}", typeof(TException).GetClassName(), testValues[i], typeof(TInput).GetClassName(), typeof(TOutput).GetClassName());
                    throw new AggregateException(message, e);
                }
            }
        }

        /// <summary>
        /// Verify that the provided convert delegate throws an exception of type TException given testValues
        /// The overloading should be used to test methods accepting objects.
        /// </summary>
        protected void VerifyThrowsViaObj<TException, TInput>(Func<object, TOutput> convert, TInput[] testValues) 
            where TException : Exception
        {
            for (int i = 0; i < testValues.Length; i++)
            {
                try
                {
                    Assert.Throws(() => convert(testValues[i]), err => err is TException);
                }
                catch (Exception e)
                {
                    string message = string.Format("Expected {0} converting '{1}' ({2}) to {3}", typeof(TException).GetClassName(), testValues[i], typeof(TInput).GetClassName(), typeof(TOutput).GetClassName());
                    throw new AggregateException(message, e);
                }
            }
        }

        /// <summary>
        /// Verify that the provided convert delegates throws an exception of type TException given testValues
        /// </summary>
        protected void VerifyFromStringThrows<TException>(Func<string, TOutput> convert, Func<string, IFormatProvider, TOutput> convertWithFormatProvider, string[] testValues) 
            where TException : Exception
        {
            VerifyThrows<TException, string>(convert, testValues);
            VerifyThrows<TException, string>(input => convertWithFormatProvider(input, TestFormatProvider.s_instance), testValues);
        }

        /// <summary>
        /// Verify that the provided convert delegates throw exception of type TException given testValues
        /// </summary>
        protected void VerifyFromObjectThrows<TException>(Func<object, TOutput> convert, Func<object, IFormatProvider, TOutput> convertWithFormatProvider, object[] testValues)
            where TException : Exception
        {
            VerifyThrows<TException, object>(convert, testValues);
            VerifyThrows<TException, object>(input => convertWithFormatProvider(input, TestFormatProvider.s_instance), testValues);
        }

        /// <summary>
        /// Helper class to test that the IFormatProvider is being called.
        /// </summary>
        protected class TestFormatProvider : IFormatProvider
        {
            public static readonly TestFormatProvider s_instance = new TestFormatProvider();

            private TestFormatProvider()
            {
            }

            public object GetFormat(Type formatType)
            {
                return this;
            }

            public string Format(string format, object arg, IFormatProvider formatProvider)
            {
                return arg.ToString();
            }

            public string GetAllDateTimePatterns(string format, bool returnNull)
            {
                return "G";
            }
        }
    }
}