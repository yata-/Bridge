using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#691]
    [FileName("testBridgeIssues.js")]
    internal class Bridge691
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            var pos = 0;
            var lines = new string[] { "", "", "str" };
            while (pos < lines.Length)
            {
                while (pos < lines.Length && lines[pos].Length == 0)
                {
                    pos++;
                }

                if (!(pos < lines.Length))
                {
                    break;
                }

                Action<int> a = p => { };

                if (pos > 0)
                {
                    break;
                }
            }

            assert.Equal(pos, 2, "Bridge691");
        }
    }
}