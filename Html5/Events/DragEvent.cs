using System;
using System.Collections;
using System.Collections.Generic;

namespace Bridge.Html5.Events
{
    [External]
    [Name("DragEvent")]
    public class DragEvent : MouseEvent
    {
        internal DragEvent()
        {
        }

        public DragEvent(string type)
        {

        }

        public DragEvent(string type, DragEventInit eventInit)
        {

        }

        /// <summary>
        /// The data that is transferred during a drag and drop interaction.
        /// </summary>
        public readonly DataTransfer DataTransfer;
    }

    [External]
    [Name("Object")]
    public class DragEventInit : MouseEventInit
    {
        /// <summary>
        /// 
        /// </summary>
        public DataTransfer DataTransfer;
    }

    /// <summary>
    /// A generic version of the DragEvent class. The type parameter is a type of CurrentTarget.
    /// </summary>
    /// <typeparam name="TCurrentTarget">The CurrentTarget type.</typeparam>
    [External]
    [Name("DragEvent")]
    public class DragEvent<TCurrentTarget> : MouseEvent<TCurrentTarget> where TCurrentTarget : Element { }

    [External]
    [Name("DataTransfer")]
    public class DataTransfer
    {
        private DataTransfer()
        {
        }

        /// <summary>
        /// Type of drag-and-drop.
        /// </summary>
        public DropEffect DropEffect;

        /// <summary>
        /// Types of operations that are possible.
        /// </summary>
        public EffectAllowed EffectAllowed;

        /// <summary>
        /// List of all of the drag data.
        /// </summary>
        public readonly DataTransferItemList Items;

        /// <summary>
        /// Contains a list of all the local files available on the data transfer.
        /// </summary>
        public readonly FileList Files;

        /// <summary>
        /// formats that were set in the dragstart event.
        /// </summary>
        public readonly string[] Types;

        /// <summary>
        /// Remove the data associated with a given type. The type argument is optional. If the type is empty or not
        /// specified, the data associated with all types is removed. If data for the specified type does not exist,
        /// or the data transfer contains no data, this method will have no effect.
        /// </summary>
        /// <param name="format">A string representing the type of data to remove. (Optional)</param>
        public extern void ClearData(string format = null);

        /// <summary>
        /// Retrieves the data for a given type, or an empty string if data for that type does not exist or the data
        /// transfer contains no data.
        /// </summary>
        /// <param name="format">Type of data to retrieve. Example data types are text/plain and text/uri-list.</param>
        /// <returns>rag data for the specified format.</returns>
        public extern string GetData(string format);

        /// <summary>
        /// Set the data for a given type. If data for the type does not exist, it is added at the end, such that the
        /// last item in the types list will be the new format. If data for the type already exists, the existing data
        /// is replaced in the same position.
        /// </summary>
        /// <param name="format">Type of the drag data to add to the drag object.
        /// Example data types are text/plain and text/uri-list.</param>
        /// <param name="data">Data to add to the drag object.</param>
        public extern void SetData(string format, string data);

        /// <summary>
        /// Set the image to be used for dragging if a custom one is desired.
        /// </summary>
        /// <param name="img">An image Element element to use for the drag feedback image.</param>
        /// <param name="xOffset">A long indicating the horizontal offset within the image.</param>
        /// <param name="yOffset">A long indicating the vertical offset within the image.</param>
        public extern void SetDragImage(Element img, int xOffset, int yOffset);
    }

    [External]
    [Name("DataTransferItemList")]
    public class DataTransferItemList : IEnumerable<DataTransferItem>
    {
        internal DataTransferItemList()
        {
        }

        public virtual DataTransferItem this[int index]
        {
            get
            {
                return null;
            }
        }

        /// <summary>
        /// Adds an File to the drag item list and returns a DataTransferItem for the new item.
        /// </summary>
        /// <param name="file"></param>
        /// <returns></returns>
        public extern DataTransferItem Add(File file);

        /// <summary>
        /// Adds a string of a specific type to the drag item list and returns a DataTransferItem for the new item.
        /// </summary>
        /// <param name="data">A string representing the drag item's data.</param>
        /// <param name="type">A string of the drag item's type.
        /// Some example types are text/html and text/plain.</param>
        /// <returns></returns>
        public extern DataTransferItem Add(string data, string type);

        /// <summary>
        /// Removes the drag item from the list at the given index.
        /// </summary>
        /// <param name="index">index of the item in the drag data list to remove.</param>
        public extern void Remove(int index);

        /// <summary>
        /// Removes all of the drag items from the list.
        /// </summary>
        public extern void Clear();

        /// <summary>
        /// Number of drag items in the list.
        /// </summary>
        public readonly int Length;

        public virtual extern IEnumerator<DataTransferItem> GetEnumerator();

        extern IEnumerator IEnumerable.GetEnumerator();
    }

    [External]
    [Name("DataTransferItem")]
    public class DataTransferItem
    {
        private DataTransferItem()
        {

        }

        /// <summary>
        /// The kind of drag data item such as a string or a file.
        /// </summary>
        public readonly string Kind;

        /// <summary>
        /// The drag data item's type, typically a MIME type.
        /// </summary>
        public readonly string Type;

        /// <summary>
        /// Returns the File object associated with the drag data item (or null if the drag item is not a file).
        /// </summary>
        /// <returns></returns>
        public extern File GetAsFile();

        /// <summary>
        /// Invokes the specified callback with the drag data item string as its argument.
        /// </summary>
        /// <param name="callback"></param>
        public extern void GetAsString(Action<string> callback);
    }

    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum DropEffect
    {
        None,
        Copy,
        Link,
        Move
    }

    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum EffectAllowed
    {
        None,
        Copy,
        CopyLink,
        CopyMove,
        Link,
        LinkMove,
        Move,
        All,
        Uninitialized
    }
}
