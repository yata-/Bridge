using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#708]
    [FileName("testBridgeIssues.js")]
    internal class Bridge708
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);
            assert.Equal(TestIssue(), 12, "Bridge708 TestIssue");
        }

        private static int TestIssue()
        {
            int sum = 0;
            Action f = () =>
            {
                foreach (var n in new int[] { 1, 2, 3 })
                {
                    Action<int> g = (i) => { sum += i; };
                    g(n);
                }
                Action h = () => { sum *= 2; };
                h();
            };

            f();

            return sum;
        }
    }
}