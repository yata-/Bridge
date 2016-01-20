using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    public class Bridge607A<T> : IEquatable<Bridge607A<T>>
    {
        public bool Equals(Bridge607A<T> obj)
        {
            return this == obj;
        }
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge607B : IEquatable<Bridge607B>
    {
        public bool Equals(Bridge607B other)
        {
            return this == other;
        }
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge607C : IEquatable<Bridge607C>
    {
        bool IEquatable<Bridge607C>.Equals(Bridge607C other)
        {
            return Equals(this, other);
        }
    }

    // Bridge[#607]
    [FileName("testBridgeIssues.js")]
    internal class Bridge607
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(5);

            var c = new Bridge607A<string>();
            var c1 = new Bridge607B();

            assert.Ok(c.Equals(c), "Bridge607A c");
            assert.NotOk(c.Equals(null), "Bridge607A null");

            assert.Ok(c1.Equals(c1), "Bridge607B c");
            assert.NotOk(c1.Equals(null), "Bridge607B null");

            assert.NotOk(new Bridge607C().Equals(null), "Bridge607C null");
        }
    }
}