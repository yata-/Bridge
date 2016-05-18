using Bridge;
using System.Collections;
using System.Collections.Generic;

namespace System
{
    [External]
    [Name("Bridge.CharEnumerator")]
    public sealed class CharEnumerator : IEnumerator, /*ICloneable,*/ IEnumerator<char>, IDisposable
    {
        extern object IEnumerator.Current
        {
            get;
        }

        public extern char Current
        {
            get;
        }

        internal extern CharEnumerator(string str);

        public extern bool MoveNext();

        public extern void Dispose();

        public extern void Reset();
    }
}