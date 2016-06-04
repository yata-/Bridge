using Bridge;

namespace System
{
	/// <summary>
	/// Delimits a section of a one-dimensional array.
	/// </summary>
	[External]
	public class ArraySegment<T>
	{
		public ArraySegment(T[] array)
		{
		}

		public ArraySegment(T[] array, int offset, int count)
		{
		}

		/// <summary>
		/// Gets the original array containing the range of elements that the array segment delimits.
		/// </summary>
		public T[] Array
		{
			get
			{
				return null;
			}
		}

		/// <summary>
		/// Gets the number of elements in the range delimited by the array segment.
		/// </summary>
		public int Count
		{
			get
			{
				return 0;
			}
		}

		/// <summary>
		/// Gets the position of the first element in the range delimited by the array segment,
		/// relative to the start of the original array.
		/// </summary>
		public int Offset
		{
			get
			{
				return 0;
			}
		}
	}
}
