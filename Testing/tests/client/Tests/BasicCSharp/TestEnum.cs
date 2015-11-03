using Bridge;
using Bridge.QUnit;

using System;

namespace ClientTestLibrary
{
    internal class TestEnum
    {
        [FileName("testEnum.js")]
        enum Digits
        {
            Zero = 0,
            One,
            Two = 2
        }

        [FileName("testEnum.js")]
        enum Abc
        {
            A = -1,
            B,
            C
        }

        public static void TestParse(Assert assert)
        {
            assert.Expect(4);

            assert.Equal(Enum.Parse(typeof(Digits), "Zero"), Digits.Zero, "Parse Digits.Zero");
            assert.Equal(Enum.Parse(typeof(Digits), "One"), Digits.One, "Parse Digits.One");
            assert.Equal(Enum.Parse(typeof(Digits), "Two"), Digits.Two, "Parse Digits.Two");

            assert.Throws(() => { var d = Enum.Parse(typeof(Digits), "ONE"); }, "Parse ONE");
        }

        public static void TestToString(Assert assert)
        {
            assert.Expect(4);

            assert.Equal(Enum.ToString(typeof(Digits), Digits.Zero), "Zero", "ToString Digits.Zero");
            assert.Equal(Enum.ToString(typeof(Digits), Digits.One), "One", "ToString Digits.One");
            assert.Equal(Enum.ToString(typeof(Digits), Digits.Two), "Two", "ToString Digits.Two");
            assert.Equal(Enum.ToString(typeof(Digits), (Digits)150), "150", "ToString (Digits)150");
        }

        public static void TestGetValues(Assert assert)
        {
            assert.Expect(2);

            assert.Equal(Enum.GetValues(typeof(Abc)), new[] { Abc.A, Abc.B, Abc.C }, "Abc values");

            assert.Equal(Enum.GetValues(typeof(Digits)), new[] { Digits.Zero, Digits.One, Digits.Two }, "Digits values");
        }
    }
}
