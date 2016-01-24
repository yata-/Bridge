using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.Html5;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#816]
    [FileName("testBridgeIssues.js")]
    internal class Bridge816
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            var textArea = new TextAreaElement();
            textArea.Id = "textArea1";
            textArea.Value = "Test";

            var root = Document.GetElementById("qunit-fixture");
            root.AppendChild(textArea);

            var ta = Document.GetElementById("textArea1");
            assert.Equal(ta["value"], "Test", "textArea1.value Test");
        }
    }
}