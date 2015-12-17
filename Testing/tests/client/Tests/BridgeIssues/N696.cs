using System;
using System.Collections.Generic;
using System.Reflection;
using Bridge;
using Bridge.QUnit;
using Bridge.Html5;

namespace ClientTestLibrary
{
    // Bridge[#696]
    [FileName("testBridgeIssues.js")]
    public class Bridge696
    {
        public delegate int Speak(string message);

        public static void TestUseCase(Assert assert)
        {
            assert.Expect(2);

            var namedCallbacks = new Dictionary<string, Speak>();
            namedCallbacks.Add("Shout", message => message.Length);
            namedCallbacks.Add("Whisper", message => message.Length);

            assert.Equal(namedCallbacks["Shout"]("HELLO!"), 6, "Bridge696 HELLO!");
            assert.Equal(namedCallbacks["Whisper"]("HELLO"), 5, "Bridge696 HELLO");
        }
    }
}