// The documentation for this class (on <summary> tags) was extracted from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array

namespace Bridge.Html5
{
    /// <summary>
    /// Represents an array of twos-complement 8-bit signed integers. The contents are initialized to 0.
    /// Once established, you can reference elements in the array using the object's methods, or using standard
    /// array index syntax (that is, using bracket notation).
    /// </summary>
    [Ignore]
    public class Int8Array
    {
        public Int8Array(int length)
        {
        }

        public Int8Array(Int8Array typedArray)
        {
        }

        public Int8Array(object objectInstance)
        {
        }

        public Int8Array(ArrayBuffer buffer, uint byteOffset = 0, uint length = 0)
        {
        }

        #region Properties

        /// <summary>
        /// Returns a number value of the element size. 1 in the case of an Int8Array.
        /// </summary>
        public const short BYTES_PER_ELEMENT = 1;

        /// <summary>
        /// Length property whose value is 3.
        /// </summary>
        public const short length = 3;

        /// <summary>
        /// Returns the string value of the constructor name. In the case of the Int8Array type: "Int8Array".
        /// </summary>
        public const string name = "Int8Array";

        #endregion

        #region Methods

        // Int8Array.from() and Int8Array.of() are work in progress for ES6 and, at the time of the writing,
        // were not ready for production environment, thus their definitions are not present here.
        
        #endregion

        public class Prototype
        {
            // TODO: 
        }
    }
}