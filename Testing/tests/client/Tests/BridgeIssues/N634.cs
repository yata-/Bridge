using System;
using System.Collections.Generic;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    public class Bridge634A<T>
    {
        public class Nested
        {
            public class SubNested
            {
            }

            public class SubNested<T1>
            {
            }
        }

        public class Nested<T1>
        {
            public class SubNested
            {
            }

            public class SubNested<T2>
            {
            }
        }
    }

    [FileName("testBridgeIssues.js")]
    [Namespace("ClientTestLibraryCustom")]
    public class Bridge634B<T>
    {
        public class Nested
        {
            public class SubNested
            {
            }

            public class SubNested<T1>
            {
            }
        }

        public class Nested<T1>
        {
            public class SubNested
            {
            }

            public class SubNested<T2>
            {
            }
        }
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge634C
    {
        public class Nested
        {
            public class SubNested
            {
            }

            public class SubNested<T1>
            {
            }
        }

        public class Nested<T1>
        {
            public class SubNested
            {
            }

            public class SubNested<T2>
            {
            }
        }
    }

    // Bridge[#634]
    [FileName("testBridgeIssues.js")]
    internal class Bridge634
    {
       public static void TestUseCase1(Assert assert)
        {
            assert.Expect(1);

            var hashSet = new HashSet<string>();

            hashSet.Add("a");
            hashSet.Add("b");
            hashSet.Add("c");

            var text = "";

            foreach (string s in hashSet)
            {
                text += s;
            }

            assert.Equal(text, "abc", "Bridge634: foreach works for HashSet");
        }

        public static void TestUseCase2(Assert assert)
        {
            assert.Expect(21);

            var a = new Bridge634A<string>();
            var a1 = new Bridge634A<string>.Nested();
            var a2 = new Bridge634A<string>.Nested<int>();
            var a3 = new Bridge634A<string>.Nested.SubNested();
            var a4 = new Bridge634A<string>.Nested.SubNested<int>();
            var a5 = new Bridge634A<string>.Nested<int>.SubNested();
            var a6 = new Bridge634A<string>.Nested<int>.SubNested<int>();

            assert.Equal(a.GetClassName(), "ClientTestLibrary.Bridge634A$1$String", "Bridge634 A a");
            assert.Equal(a1.GetClassName(), "ClientTestLibrary.Bridge634A$1.Nested$String", "Bridge634 A a1");
            assert.Equal(a2.GetClassName(), "ClientTestLibrary.Bridge634A$1.Nested$1$String$Bridge.Int", "Bridge634 A a2");
            assert.Equal(a3.GetClassName(), "ClientTestLibrary.Bridge634A$1.Nested.SubNested$String", "Bridge634 A a3");
            assert.Equal(a4.GetClassName(), "ClientTestLibrary.Bridge634A$1.Nested.SubNested$1$String$Bridge.Int", "Bridge634 A a4");
            assert.Equal(a5.GetClassName(), "ClientTestLibrary.Bridge634A$1.Nested$1.SubNested$String$Bridge.Int", "Bridge634 A a5");
            assert.Equal(a6.GetClassName(), "ClientTestLibrary.Bridge634A$1.Nested$1.SubNested$1$String$Bridge.Int$Bridge.Int", "Bridge634 A a6");

            var b = new Bridge634B<string>();
            var b1 = new Bridge634B<string>.Nested();
            var b2 = new Bridge634B<string>.Nested<int>();
            var b3 = new Bridge634B<string>.Nested.SubNested();
            var b4 = new Bridge634B<string>.Nested.SubNested<int>();
            var b5 = new Bridge634B<string>.Nested<int>.SubNested();
            var b6 = new Bridge634B<string>.Nested<int>.SubNested<int>();

            assert.Equal(b.GetClassName(), "ClientTestLibraryCustom.Bridge634B$1$String", "Bridge634 B b");
            assert.Equal(b1.GetClassName(), "ClientTestLibraryCustom.Bridge634B$1.Nested$String", "Bridge634 B b1");
            assert.Equal(b2.GetClassName(), "ClientTestLibraryCustom.Bridge634B$1.Nested$1$String$Bridge.Int", "Bridge634 B b2");
            assert.Equal(b3.GetClassName(), "ClientTestLibraryCustom.Bridge634B$1.Nested.SubNested$String", "Bridge634 B b3");
            assert.Equal(b4.GetClassName(), "ClientTestLibraryCustom.Bridge634B$1.Nested.SubNested$1$String$Bridge.Int", "Bridge634 B b4");
            assert.Equal(b5.GetClassName(), "ClientTestLibraryCustom.Bridge634B$1.Nested$1.SubNested$String$Bridge.Int", "Bridge634 B b5");
            assert.Equal(b6.GetClassName(), "ClientTestLibraryCustom.Bridge634B$1.Nested$1.SubNested$1$String$Bridge.Int$Bridge.Int", "Bridge634 B b6");

            var c = new Bridge634C();
            var c1 = new Bridge634C.Nested();
            var c2 = new Bridge634C.Nested<int>();
            var c3 = new Bridge634C.Nested.SubNested();
            var c4 = new Bridge634C.Nested.SubNested<int>();
            var c5 = new Bridge634C.Nested<int>.SubNested();
            var c6 = new Bridge634C.Nested<int>.SubNested<int>();

            assert.Equal(c.GetClassName(), "ClientTestLibrary.Bridge634C", "Bridge634 C c");
            assert.Equal(c1.GetClassName(), "ClientTestLibrary.Bridge634C.Nested", "Bridge634 C c1");
            assert.Equal(c2.GetClassName(), "ClientTestLibrary.Bridge634C.Nested$1$Bridge.Int", "Bridge634 C c2");
            assert.Equal(c3.GetClassName(), "ClientTestLibrary.Bridge634C.Nested.SubNested", "Bridge634 C c3");
            assert.Equal(c4.GetClassName(), "ClientTestLibrary.Bridge634C.Nested.SubNested$1$Bridge.Int", "Bridge634 C c4");
            assert.Equal(c5.GetClassName(), "ClientTestLibrary.Bridge634C.Nested$1.SubNested$Bridge.Int", "Bridge634 C c5");
            assert.Equal(c6.GetClassName(), "ClientTestLibrary.Bridge634C.Nested$1.SubNested$1$Bridge.Int$Bridge.Int", "Bridge634 C c6");
        }
    }
}