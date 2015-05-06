using System.Collections;
using System.Collections.Generic;
using Bridge;

namespace System
{
    [Ignore]
    [Name("Array")]
    public sealed class Array : IEnumerable
    {
        public readonly int Length = 0;

        private Array()
        {
        }

        public object this[int index]
        {
            [Ignore]
            get
            {
                return null;
            }
            [Ignore]
            set
            {
            }
        }

        public Array Concat(params object[] items)
        {
            return null;
        }

        /// <summary>
        /// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
        /// </summary>
        /// <param name="searchElement"></param>
        /// <returns></returns>
        public int IndexOf(string searchElement)
        {
            return 0;
        }

        /// <summary>
        /// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
        /// </summary>
        /// <param name="searchElement"></param>
        /// <param name="fromIndex"></param>
        /// <returns></returns>
        public int IndexOf(string searchElement, int fromIndex)
        {
            return 0;
        }

        /// <summary>
        /// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
        /// </summary>
        /// <param name="searchString"></param>
        /// <returns></returns>
        public int LastIndexOf(string searchString)
        {
            return 0;
        }

        /// <summary>
        /// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
        /// </summary>
        /// <param name="searchString"></param>
        /// <param name="fromIndex"></param>
        /// <returns></returns>
        public int LastIndexOf(string searchString, int fromIndex)
        {
            return 0;
        }


        public string Join(string separator)
        {
            return null;
        }

        public object Pop()
        {
            return null;
        }

        public void Push(params object[] items)
        {
        }

        public void Reverse()
        {
        }

        public object Shift()
        {
            return null;
        }

        public Array Slice(int start)
        {
            return null;
        }

        public Array Slice(int start, int end)
        {
            return null;
        }

        public void Sort()
        {
        }

        public void Sort(object compareFunction)
        {
        }

        public Array Splice(int start, int deleteCount, params object[] newItems)
        {
            return null;
        }

        public void Unshift(params object[] items)
        {
        }

        [Template("Bridge.getEnumerator({this})")]
        public IEnumerator GetEnumerator()
        {
            return null;
        }

        [Template("Bridge.Array.get({this}, {*indices})")]
        public object GetValue(params int[] indices)
        {
            return null;
        }

        [Template("Bridge.Array.set({this}, {value}, {*indices})")]
        public void SetValue(object value, params int[] indices)
        {
        }

        [Template("Bridge.Array.getLength({this}, {dimension})")]
        public int GetLength(int dimension)
        {
            return 0;
        }

        public int Rank
        {
            [Template("Bridge.Array.getRank({this})")]
            get
            {
                return 0;
            }
        }

        [Template("Bridge.Array.getLower({this}, {dimension})")]
        public int GetLowerBound(int dimension)
        {
            return 0;
        }

        [Template("(Bridge.Array.getLength({this}, {dimension}) - 1)")]
        public int GetUpperBound(int dimension)
        {
            return 0;
        }

        [Template("(Bridge.Array.toEnumerable({this})")]
        public IEnumerable ToEnumerable()
        {
            return null;
        }

        [Template("(Bridge.Array.toEnumerable({this})")]
        public IEnumerable<T> ToEnumerable<T>()
        {
            return null;
        }

        [Template("(Bridge.Array.toEnumerator({this})")]
        public IEnumerator ToEnumerator()
        {
            return null;
        }

        [Template("(Bridge.Array.toEnumerator({this})")]
        public IEnumerator<T> ToEnumerator<T>()
        {
            return null;
        }
    }
}