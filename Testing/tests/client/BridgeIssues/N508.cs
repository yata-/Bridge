using System;
using System.Threading.Tasks;

using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#508]
    [FileName("testBridgeIssues.js")]
    internal class Bridge508
    {
        public static Action QUnitAsyncDone { get; set; }

        public static async void TestUseCase(Assert assert)
        {
            Bridge508.QUnitAsyncDone = assert.Async();

            var result = await Method1();

            assert.Equal(result, "A(0)A(1)B(0)B(1)B(2)", "#508 Method1");

            QUnitAsyncDone();
        }

        public static async Task<string> Method1()
        {
            var result = string.Empty;

            int i = 0;
            for (var np = await InitPage(); np != null; np = await NextPage())
            {
                result += string.Format("A({0})", i++);
            }

            count = 0;
            i = 0;
            for (var np = await InitPage(); np != null; np = NextPage1())
            {
                result += string.Format("B({0})", i++);
            }

            return result;
        }

        public static int count = 0;

        public static async Task<object> InitPage()
        {
            await Task.Delay(0);
            count++;
            return count < 2 ? new { } : null;
        }

        public static async System.Threading.Tasks.Task<object> NextPage()
        {
            await Task.Delay(0);
            count++;
            return count < 3 ? new { } : null;
        }

        public static object NextPage1()
        {
            count++;
            return count < 4 ? new { } : null;
        }
    }
}