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
            assert.Expect(5);

            var blob1 = new Blob(new BlobDataObject[] { "blobData1" }, new BlobPropertyBag { Type = "text/richtext", Endings = Endings.Transparent });

            assert.NotEqual(blob1, null, "blob1 is not null");
            assert.Equal(blob1.Size, 9, "blob1.Size equals 9");
            assert.Equal(blob1.Type, "text/richtext", "blob1.Type equals 'text/richtext'");

            var blob2 = new Blob(new BlobDataObject[] { "data2" });
            assert.NotEqual(blob2, null, "blob2 is not null");
            assert.Equal(blob2.Size, 5, "blob2.Size equals 5");

        }
    }
}