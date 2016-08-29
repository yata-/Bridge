using Bridge.Test;
using System.Collections.Generic;

namespace CoreLib.TestScript.Collections.Generic
{
    [TestFixture]
    public class GenericJsDictionaryTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual(typeof(JsDictionary<string, object>).FullName, "Object");
            //Assert.True(typeof(JsDictionary<string, object>).IsClass);
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var d = new JsDictionary<string, object>();
            Assert.True(d != null);
            Assert.AreEqual(d.Count, 0);
        }

        [Test]
        public void NameValuePairsConstructorWorks()
        {
            var d = new JsDictionary<string, object>("a", "valueA", "b", 134);
            Assert.AreEqual(d.Count, 2);
            Assert.AreEqual(d["a"], "valueA");
            Assert.AreEqual(d["b"], 134);
        }

        [Test]
        public void KeysWorks()
        {
            var d = JsDictionary<string, object>.GetDictionary(new
            {
                a = "valueA",
                b = 134
            });
            var keys = d.Keys;
            Assert.True(keys.Contains("a"));
            Assert.True(keys.Contains("b"));
        }

        [Test]
        public void IndexingWorks()
        {
            var d = JsDictionary<string, object>.GetDictionary(new
            {
                a = "valueA",
                b = 134
            });
            Assert.AreEqual(d["a"], "valueA");
            Assert.AreEqual(d["b"], 134);
        }

        [Test]
        public void ClearWorks()
        {
            var d = JsDictionary<string, object>.GetDictionary(new
            {
                a = "valueA",
                b = 134
            });
            d.Clear();
            Assert.AreEqual(d.Count, 0);
        }

        [Test]
        public void ContainsKeyWorks()
        {
            var d = JsDictionary<string, object>.GetDictionary(new
            {
                a = "valueA",
                b = 134
            });
            Assert.True(d.ContainsKey("a"));
            Assert.False(d.ContainsKey("c"));
        }

        [Test]
        public void GetDictionaryWorks()
        {
            var obj = new
            {
                a = "valueA",
                b = 134
            };
            var d = JsDictionary<string, object>.GetDictionary(obj);
            Assert.AreStrictEqual(d, obj);
            Assert.AreEqual(2, d.Keys.Count);
            Assert.AreEqual(d["a"], "valueA");
            Assert.AreEqual(d["b"], 134);
        }

        [Test]
        public void GetEnumeratorWorks()
        {
            var d = JsDictionary<string, object>.GetDictionary(new
            {
                a = "valueA",
                b = 134
            });
            var d2 = new JsDictionary<string, object>();
            foreach (var kvp in d)
            {
                d2[kvp.Key] = kvp.Value;
            }
            Assert.AreEqual(d, d2);
        }

        [Test]
        public void RemoveWorks()
        {
            var d = JsDictionary<string, object>.GetDictionary(new
            {
                a = "valueA",
                b = 134
            });
            d.Remove("a");
            Assert.AreEqual(d.Keys, new[] { "b" });
        }

        [Test]
        public void CollectionInitializerWorks()
        {
            var d = new JsDictionary<string, object> { { "a", "valueA" }, { "b", 134 } };
            Assert.AreEqual(d["a"], "valueA");
            Assert.AreEqual(d["b"], 134);
        }
    }
}
