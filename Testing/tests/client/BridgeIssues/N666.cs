using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#666]
    [FileName("testBridgeIssues.js")]
    internal class Bridge666
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            assert.Equal(GetSum(), 360, "Bridge666 GetSum 360");
        }

        private static int GetSum()
        {
            var sum = 0;
            int[] numbers = { 1, 2, 3 };

            foreach (var n in numbers)
            {
                Action<int> func = (int i) =>
                {
                    int[] bigNumbers = { 10, 20, 30 };
                    foreach (var bn in bigNumbers)
                    {
                        sum = sum + i * bn;
                    }
                };

                func(n);
            }

            return sum;
        }
    }
}