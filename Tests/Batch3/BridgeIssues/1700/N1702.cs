using Bridge.Test;

using System.Collections;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1702 - {0}")]
    public class Bridge1702
    {
        [Test]
        public void TestPropertyNameOnNestedClassWithinGenericClass()
        {
            var setOne = Set<string>.Empty.Insert("One");

            var s = string.Join(", ", setOne);

            Assert.AreEqual("One", s);
        }

        public sealed class Set<T> : IEnumerable<T>
        {
            public readonly static Set<T> Empty = new Set<T>(null);

            private readonly Node _headIfAny;
            private Set(Node headIfAny)
            {
                _headIfAny = headIfAny;
            }

            public Set<T> Insert(T item)
            {
                return new Set<T>(new Node { Item = item });
            }

            public IEnumerator<T> GetEnumerator()
            {
                yield return _headIfAny.Item;
            }

            IEnumerator IEnumerable.GetEnumerator()
            {
                return GetEnumerator();
            }

            private sealed class Node
            {
                public T Item;
            }
        }
    }
}