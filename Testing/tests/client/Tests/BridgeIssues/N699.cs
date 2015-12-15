using System;
using Bridge;
using Bridge.QUnit;
using Bridge.Html5;

namespace ClientTestLibrary
{
    // Bridge[#699]
    [FileName("testBridgeIssues.js")]
    public class Bridge699
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            Blob blob = new Blob(new BlobDataObject[] { "blobData" }, new BlobPropertyBag { Type = "type" });
            assert.NotEqual(blob, null);
        }
    }
}