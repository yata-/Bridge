using Bridge;
using Bridge.Html5;
using Bridge.QUnit;

using ClientTestLibrary.Utilities;

using System;

namespace ClientTestLibrary
{
    /// <summary>
    /// This test will check whether TypedArray types correctly inherit from
    /// the prototype common methods and fields. [#549]
    /// </summary>
    [FileName("testBridgeIssues.js")]
    internal class Bridge549
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(81);

            var v1 = new Float32Array(10);
            assert.Ok(v1 != null, "Float32Array created");

            v1[1] = 11;
            v1[5] = 5;
            v1[9] = 99;
            assert.Equal(v1[1], 11, "Float32Array indexier works 1");
            assert.Equal(v1[9], 99, "Float32Array indexier works 9");

            // Check just a select number of references inside the Prototype inheritance.
            assert.Ok(v1.Buffer != null, "Float32Array Buffer");
            assert.Equal(v1.ByteLength, 40, "Float32Array ByteLength");
            assert.Equal(v1.ByteOffset, 0, "Float32Array ByteOffset");
            assert.Equal(v1.Length, 10, "Float32Array Length");

            /*
             * Commented out. Reason: Only Firefox implements them.
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array
            var mA = v1.Join();
            v1.Reverse();
            var mB = v1.Slice();
            var mC = v1.Sort();
             */

            assert.Equal(v1.ToLocaleString(), "0,11,0,0,0,5,0,0,0,99", "Float32Array ToLocaleString");
            assert.Equal(v1.ToString(), "0,11,0,0,0,5,0,0,0,99", "Float32Array ToString");

            // Some browsers do not support SubArray() with no parameters.
            // At least 'begin' must be provided.
            var subArray11 = v1.SubArray(1);
            assert.Ok(subArray11 != null, "Float32Array SubArray1");
            assert.Equal(subArray11.Length, 9, "Float32Array SubArray1 Length");
            assert.Equal(subArray11.ToString(), "11,0,0,0,5,0,0,0,99", "Float32Array SubArray1 ToString");
            assert.Equal(subArray11.ByteOffset, 4, "Float32Array SubArray1 ByteOffset");

            var subArray12 = subArray11.SubArray(2, 6);
            assert.Ok(subArray12 != null, "Float32Array SubArray2");
            assert.Equal(subArray12.Length, 4, "Float32Array SubArray2 Length");
            assert.Equal(subArray12.ToString(), "0,0,5,0", "Float32Array SubArray2 ToString");
            assert.Equal(subArray12.ByteOffset, 12, "Float32Array SubArray2 ByteOffset");

            var v2 = new Float64Array(1);
            assert.Ok(true);
            var p2X = v2.Buffer;
            assert.Ok(true);
            var p2Y = v2.ByteLength;
            assert.Ok(true);
            var p2Z = v2.ByteOffset;
            assert.Ok(true);
            var p2L = v2.Length;
            assert.Ok(true);
            var m2D = v2.SubArray(1);
            assert.Ok(true);
            var m2E = v2.ToLocaleString();
            assert.Ok(true);
            var m2F = v2.ToString();
            assert.Ok(true);

            var v3 = new Int16Array(1);
            assert.Ok(true);
            var p3X = v3.Buffer;
            assert.Ok(true);
            var p3Y = v3.ByteLength;
            assert.Ok(true);
            var p3Z = v3.ByteOffset;
            assert.Ok(true);
            var p3L = v3.Length;
            assert.Ok(true);
            var m3D = v3.SubArray(1);
            assert.Ok(true);
            var m3E = v3.ToLocaleString();
            assert.Ok(true);
            var m3F = v3.ToString();
            assert.Ok(true);

            var v4 = new Int32Array(1);
            assert.Ok(true);
            var p4X = v4.Buffer;
            assert.Ok(true);
            var p4Y = v4.ByteLength;
            assert.Ok(true);
            var p4Z = v4.ByteOffset;
            assert.Ok(true);
            var p4L = v4.Length;
            assert.Ok(true);
            var m4D = v4.SubArray(1);
            assert.Ok(true);
            var m4E = v4.ToLocaleString();
            assert.Ok(true);
            var m4F = v4.ToString();
            assert.Ok(true);

            var v5 = new Int8Array(1);
            assert.Ok(true);
            var p5X = v5.Buffer;
            assert.Ok(true);
            var p5Y = v5.ByteLength;
            assert.Ok(true);
            var p5Z = v5.ByteOffset;
            assert.Ok(true);
            var p5L = v5.Length;
            assert.Ok(true);
            var m5D = v5.SubArray(1);
            assert.Ok(true);
            var m5E = v5.ToLocaleString();
            assert.Ok(true);
            var m5F = v5.ToString();
            assert.Ok(true);

            var v6 = new Uint16Array(1);
            assert.Ok(true);
            var p6X = v6.Buffer;
            assert.Ok(true);
            var p6Y = v6.ByteLength;
            assert.Ok(true);
            var p6Z = v6.ByteOffset;
            assert.Ok(true);
            var p6L = v6.Length;
            assert.Ok(true);
            var m6D = v6.SubArray(1);
            assert.Ok(true);
            var m6E = v6.ToLocaleString();
            assert.Ok(true);
            var m6F = v6.ToString();
            assert.Ok(true);

            var v7 = new Uint32Array(1);
            assert.Ok(true);
            var p7X = v7.Buffer;
            assert.Ok(true);
            var p7Y = v7.ByteLength;
            assert.Ok(true);
            var p7Z = v7.ByteOffset;
            assert.Ok(true);
            var p7L = v7.Length;
            assert.Ok(true);
            var m7D = v7.SubArray(1);
            assert.Ok(true);
            var m7E = v7.ToLocaleString();
            assert.Ok(true);
            var m7F = v7.ToString();
            assert.Ok(true);

            var v8 = new Uint8Array(1);
            assert.Ok(true);
            var p8X = v8.Buffer;
            assert.Ok(true);
            var p8Y = v8.ByteLength;
            assert.Ok(true);
            var p8Z = v8.ByteOffset;
            assert.Ok(true);
            var p8L = v8.Length;
            assert.Ok(true);
            var m8D = v8.SubArray(1);
            assert.Ok(true);
            var m8E = v8.ToLocaleString();
            assert.Ok(true);
            var m8F = v8.ToString();
            assert.Ok(true);

            var v9 = new Uint8ClampedArray(1);
            assert.Ok(true);
            var p9X = v9.Buffer;
            assert.Ok(true);
            var p9Y = v9.ByteLength;
            assert.Ok(true);
            var p9Z = v9.ByteOffset;
            assert.Ok(true);
            var p9L = v9.Length;
            assert.Ok(true);
            var m9D = v9.SubArray(1);
            assert.Ok(true);
            var m9E = v9.ToLocaleString();
            assert.Ok(true);
            var m9F = v9.ToString();
            assert.Ok(true);
        }
    }
}