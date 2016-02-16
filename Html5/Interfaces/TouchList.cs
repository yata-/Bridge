// The documentation for this class (on <summary> tags) was extracted from:
// https://developer.mozilla.org/en-US/docs/Web/API/TouchList

using System;
using System.Collections;
using System.Collections.Generic;

namespace Bridge.Html5.Interfaces
{
    [External]
    [Name("TouchList")]
    public class TouchList : IEnumerable<Touch>
    {
        /// <summary>
        /// The number of <see cref="Touch"/> objects in the TouchList.
        /// </summary>
        public readonly int Length;

        /// <summary>
        /// Returns the <see cref="Touch"/> object at the specified index in the list.
        /// </summary>
        public virtual extern Touch Item(int index);

        public IEnumerator<Touch> GetEnumerator()
        {
            return new TouchListEnumerator(this);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return new TouchListEnumerator(this);
        }
    }

    public class TouchListEnumerator : IEnumerator<Touch>
    {
        private TouchList touchList;

        private int currentIndex;

        private Touch currentTouch;

        public TouchListEnumerator(TouchList touchList)
        {
            this.touchList = touchList;
            currentIndex = -1;
            currentTouch = default(Touch);
        }

        public Touch Current { get { return currentTouch; } }

        Object IEnumerator.Current { get { return currentTouch; } }

        public void Dispose() { /* nothing to dispose, but must be implemented */ }

        public Boolean MoveNext()
        {
            if (++currentIndex >= touchList.Length)
            {
                return false;
            }
            else
            {
                // Set current box to next item in collection.
                currentTouch = touchList.Item(currentIndex);
            }
            return true;
        }

        public void Reset()
        {
            currentIndex = -1;
            currentTouch = default(Touch);
        }
    }
}
