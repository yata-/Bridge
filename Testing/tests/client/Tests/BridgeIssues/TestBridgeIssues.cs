using Bridge;
using Bridge.Html5;
using Bridge.QUnit;

using System;
using System.Collections;
using System.Collections.Generic;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    class Bridge169
    {
        public static int Number = 0;

        public static void M1()
        {
            new Action(() => { Bridge169.Number = 1; })();
        }

        public static void M2()
        {
            new Action(() => Bridge169.Number = 2)();
        }
    }

    [FileName("testBridgeIssues.js")]
    abstract class Bridge240A
    {
        public int Data { get; set; }
    }

    [FileName("testBridgeIssues.js")]
    class Bridge240B : Bridge240A
    {
        public string GetString()
        {
            base.Data++;
            return "B";
        }
    }

    [FileName("testBridgeIssues.js")]
    class Bridge266A
    {
        public static object Test()
        {
            // Nothing gets written for Class1 in the output JavaScript due to the "new object()" argument.
            // If null is used instead (as commented-out) then it works as expected.
            // No compile error.
            return Bridge266B.Test("test", new object());
            //Bridge266B.Test("test", null);
        }
    }

    [FileName("testBridgeIssues.js")]
    class Bridge266B
    {
        public static object Test(string arg1, object arg2)
        {
            return arg2;
        }
    }

    [FileName("testBridgeIssues.js")]
    class Bridge272
    {
        [FileName("testBridgeIssues.js")]
        public enum MyEnum { Abc = 1, Def = 2, Ghi = 3 };

        public static MyEnum Test(int i)
        {
            return (MyEnum)i;
        }
    }

    [FileName("testBridgeIssues.js")]
    class Bridge294
    {
        private readonly string Name;
        public Bridge294(string name)
        {
            this.Name = name;
        }

        public string GetName()
        {
            return this.Name;
        }

        public string GetNameThroughGeneric<T>()
        {
            return this.Name;
        }
    }

    [FileName("testBridgeIssues.js")]
    enum Bridge277 { Int }

    //[#304]
    [FileName("testBridgeIssues.js")]
    public class Bridge304 : IBridge304
    {
        public string X { get; set; }

        public void F(string x)
        {
            this.X = x;
        }

        public void F()
        {
            this.X = "void F()";
        }

    }
    [FileName("testBridgeIssues.js")]
    public interface IBridge304
    {
        void F(string x);
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge305 : IEnumerable<string>
    {
        public List<string> Items { get; private set; }

        public Bridge305(string[] items)
        {
            Items = new List<string>(items);
        }

        IEnumerator IEnumerable.GetEnumerator() { return GetEnumerator(); }
        public IEnumerator<string> GetEnumerator() { return Items.GetEnumerator(); }
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge306A : Bridge306Component<Bridge306A.Props>
    {
        public static string New(Props props)
        {
            return New<Bridge306A>(props);
        }

        public class Props
        {
            public string Name;

            public override string ToString()
            {
                return Name;
            }
        }
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge306B : Bridge306Component<Bridge306B.Props>
    {
        public static string New(Props props)
        {
            return Bridge306Component<Bridge306B.Props>.New<Bridge306B>(props);
        }

        public class Props
        {
            public string Name;

            public override string ToString()
            {
                return Name;
            }
        }
    }

    [FileName("testBridgeIssues.js")]
    public abstract class Bridge306Component<TProps>
    {
        public static string New<TComponent>(TProps props) where TComponent : Bridge306Component<TProps>
        {
            return props.GetClassName() + ":" + props;
        }
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge341A
    {
        public string Str { get; set; }
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge341B : IEquatable<Bridge341B>
    {
        public string Str { get; set; }

        public bool Equals(Bridge341B other)
        {
            if (other == null)
            {
                return false;
            }
            return this.Str == other.Str;
        }

        public override int GetHashCode()
        {
            return this.Str.GetHashCode();
        }
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge342 : IDictionary<int, string>
    {
        private readonly Dictionary<int, string> _backingDictionary;

        public Bridge342()
            : this(new Dictionary<int, string>())
        {
        }

        public Bridge342(Dictionary<int, string> initialValues)
        {
            _backingDictionary = initialValues;
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }

        public IEnumerator<KeyValuePair<int, string>> GetEnumerator()
        {
            return _backingDictionary.GetEnumerator();
        }

        public string this[int key]
        {
            get { return _backingDictionary[key]; }
            set { _backingDictionary[key] = value; }
        }

        public new ICollection<int> Keys
        {
            get { return _backingDictionary.Keys; }
        }

        public ICollection<string> Values
        {
            get { return _backingDictionary.Values; }
        }

        public int Count { get { return _backingDictionary.Count; } }

        public void Add(int key, string value)
        {
            _backingDictionary.Add(key, value);
        }

        public bool Remove(int key)
        {
            return _backingDictionary.Remove(key);
        }

        public bool ContainsKey(int key)
        {
            return _backingDictionary.ContainsKey(key);
        }

        public bool TryGetValue(int key, out string value)
        {
            return _backingDictionary.TryGetValue(key, out value);
        }

        public void Clear()
        {
            _backingDictionary.Clear();
        }
    }

    [FileName("testBridgeIssues.js")]
    [ObjectLiteral]
    public class Bridge377
    {
        public string field1;
        public string field2;
        public int field3;
        public int field4;
    }

    [FileName("testBridgeIssues.js")]
    public class Person383
    {
        public string Name { get; set; }
    }

    [FileName("testBridgeIssues.js")]
    public static class Bridge383
    {
        public static string DoSomething(this Person383 person)
        {
            return person.Name;
        }
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge395
    {
        public string Id { get; set; }
        public int data { get; set; }
    }

    [FileName("testBridgeIssues.js")]
    struct Bridge407
    {
        public int A { get; set; }

        public static Bridge407 operator +(Bridge407 x, Bridge407 y)
        {
            return new Bridge407() { A = x.A + y.A };
        }
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge418
    {
        public delegate int MyDelegate(int data);

        public MyDelegate Delegate { get; set; }

        public int CallDelegate(int data)
        {
            return Delegate(data);
        }
    }

    [FileName("testBridgeIssues.js")]
    enum Bridge422
    {
        first = 0,
        next = 100,
        afterNext,
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge436First
    {
        public virtual string ToObject()
        {
            return "1";
        }
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge436Second : Bridge436First
    {
        public override string ToObject()
        {
            return base.ToObject() + "2";
        }
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge436Third : Bridge436Second
    {
        public override string ToObject()
        {
            return base.ToObject() + "3";
        }
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge439
    {
        private event Action<string> _dispatcher;

        public void Register(Action<string> callback)
        {
            _dispatcher += callback;
        }

        public void CallDispatcher(string s)
        {
            _dispatcher(s);
        }
    }

    // Tests Bridge GitHub issues
    class TestBridgeIssues
    {

        // Bridge[#169]
        public static void N169(Assert assert)
        {
            assert.Expect(2);

            // TEST
            Bridge169.M1();
            assert.DeepEqual(Bridge169.Number, 1, "M1()");

            // TEST
            Bridge169.M2();
            assert.DeepEqual(Bridge169.Number, 2, "M2()");
        }

        // Bridge[#240]
        public static void N240(Assert assert)
        {
            assert.Expect(3);

            // TEST
            var b = new Bridge240B();
            assert.Ok(b != null, "Instance of B created");
            assert.Equal(b.GetString(), "B", "b.GetString() = 'B'");
            assert.Equal(b.Data, 1, "b.Data = 1");
        }

        // Bridge[#264]
        public static void N264(Assert assert)
        {
            assert.Expect(1);

            // TEST
            string oldHash = Global.Location.Hash;
            Global.Location.Hash = "#new-hash";
            assert.Equal(Global.Location.Hash, "#new-hash", "Setting Location.Hash works");
            Global.Location.Hash = oldHash; // to clean up the url
        }

        // Bridge[#266]
        public static void N266(Assert assert)
        {
            assert.Expect(1);

            // TEST
            assert.Ok(Bridge266A.Test() != null, "new object() call transpiled");
        }

        // Bridge[#272]
        public static void N272(Assert assert)
        {
            assert.Expect(3);

            // TEST
            assert.DeepEqual(Bridge272.Test(1), Bridge272.MyEnum.Abc, "Casted MyEnum.Abc");
            assert.DeepEqual(Bridge272.Test(3), Bridge272.MyEnum.Ghi, "Casted MyEnum.Ghi");
            assert.DeepEqual(Bridge272.Test(4), 4, "Casted MyEnum.Abc");
        }

        // Bridge[#273]
        public static void N273(Assert assert)
        {
            assert.Expect(4);

            // TEST
            var items = new List<int>() { 0, 1, 2, 3, 4 };

            var r = items.Slice(-1).ToArray();
            assert.DeepEqual(r, new[] { 4 }, "Slices start = -1");

            r = items.Slice(1).ToArray();
            assert.DeepEqual(r, new[] { 1, 2, 3, 4 }, "Slices start = 1");

            r = items.Slice(-3, 4).ToArray();
            assert.DeepEqual(r, new[] { 2, 3 }, "Slices start = -3, end = 3");

            r = items.Slice(1, 3).ToArray();
            assert.DeepEqual(r, new[] { 1, 2 }, "Slices start = 1, end = 2");

        }

        // Bridge[#277]
        public static void N277(Assert assert)
        {
            assert.Expect(1);

            assert.Equal(Bridge277.Int, 0, "Enum member with reserved name initialized");
        }

        // Bridge[#294]
        public static void N294(Assert assert)
        {
            assert.Expect(2);

            var c = new Bridge294("Vlad");

            assert.Equal(c.GetName(), "Vlad", "Class method works");
            assert.Equal(c.GetNameThroughGeneric<int>(), "Vlad", "Generic class method works");

        }

        // Bridge[#304]
        public static void N304(Assert assert)
        {
            assert.Expect(2);

            var c = new Bridge304();
            IBridge304 i = c;

            i.F("1");
            assert.Equal(c.X, "1", "Interface method works");

            c.F();
            assert.Equal(c.X, "void F()", "Class method works");
        }

        // Bridge[#305]
        public static void N305(Assert assert)
        {
            assert.Expect(1);

            var c = new Bridge305(new[] { "1", "2", "3" });

            var result = string.Empty;
            foreach (var item in c)
            {
                result = result + item;
            }

            assert.Equal(result, "123", "IEnumerator works");
        }

        // Bridge[#306]
        public static void N306(Assert assert)
        {
            assert.Expect(2);

            var b = Bridge306B.New(new Bridge306B.Props() { Name = "B" });
            assert.Equal(b, "ClientTestLibrary.Bridge306B.Props:B", "Bridge306B.New() works");

            var a = Bridge306A.New(new Bridge306A.Props() { Name = "A" });
            assert.Equal(a, "ClientTestLibrary.Bridge306A.Props:A", "Bridge306A.New() works");
        }

        // Bridge[#335]
        public static void N335(Assert assert)
        {
            assert.Expect(1);

            var l = new List<string>(new[] { "1", "2", "3", "1" });
            assert.Equal(l.IndexOf("1", 2), 3, "IndexOf with startIndex used");
        }

        // Bridge[#336]
        public static void N336(Assert assert)
        {
            assert.Expect(2);

            var l = new List<string>(new[] { "4" });

            l.InsertRange(0, new[] { "1", "2" });
            assert.DeepEqual(l.ToArray(), new[] { "1", "2", "4" }, "InsertRange works (1)");

            l.InsertRange(2, new[] { "3" });
            assert.DeepEqual(l.ToArray(), new[] { "1", "2", "3", "4" }, "InsertRange works (2)");
        }

        // Bridge[#337]
        public static void N337(Assert assert)
        {
            assert.Expect(4);

            var l = new List<string>(new[] { "1", "2" });

            var b = l.Remove("7");
            assert.NotOk(b, "Remove() not existing element returns false");
            assert.DeepEqual(l.ToArray(), new[] { "1", "2" }, "Remove() not existing does not change the List");

            b = l.Remove("2");
            assert.Ok(b, "Remove() existing element returns true");
            assert.DeepEqual(l.ToArray(), new[] { "1" }, "Remove() not existing changes the List");
        }

        // Bridge[#338]
        public static void N338(Assert assert)
        {
            assert.Expect(1);

            var l = new List<string>(1000);

            var b = l is IList<string>;

            assert.Ok(b, "List<T> declares it implemets IList<T>");
        }


        // Bridge[#339]
        public static void N339(Assert assert)
        {
            assert.Expect(2);

            var c = Comparer<int>.Default;

            assert.Ok(c != null, "Comparer<int>.Default works");
            assert.Ok(c is IComparer<int>, "Comparer<T> declares it implemets IComparer<T>");
        }

        // Bridge[#340]
        public static void N340(Assert assert)
        {
            assert.Expect(6);

            var c = EqualityComparer<int>.Default;

            assert.Ok(c != null, "EqualityComparer<int>.Default works");
            assert.Ok(c.Equals(10, 10), "EqualityComparer<int>.Default.Equals(10, 10) works");
            assert.NotOk(c.Equals(10, 11), "EqualityComparer<int>.Default.Equals(10, 11) works");

            var s = EqualityComparer<string>.Default;
            assert.Ok(s != null, "EqualityComparer<string>.Default works");
            assert.Ok(s.Equals("a", "a"), "EqualityComparer<string>.Default.Equals(\"a\", \"a\") works");
            assert.NotOk(s.Equals("a", "b"), "EqualityComparer<string>.Default.Equals(\"a\", \"b\") works");
        }

        // Bridge[#341]
        public static void N341(Assert assert)
        {
            assert.Expect(4);

            var o11 = new object();
            var o12 = new object();
            var b1 = EqualityComparer<object>.Default.Equals(o11, o12);
            assert.NotOk(b1, "EqualityComparer<object>.Default.Equals(o11, o12) works");

            var o21 = new { i = 7 };
            var o22 = new { i = 7 };
            var b2 = EqualityComparer<object>.Default.Equals(o21, o22);
            assert.Ok(b2, "EqualityComparer<object>.Default.Equals(o21, o22) works");

            var o31 = new Bridge341A { Str = "String" };
            var o32 = new Bridge341A { Str = "String" };
            var b3 = EqualityComparer<object>.Default.Equals(o31, o32);
            assert.NotOk(b3, "EqualityComparer<object>.Default.Equals(o31, o32) works");

            var o41 = new Bridge341B { Str = "String" };
            var o42 = new Bridge341B { Str = "String" };
            var b4 = EqualityComparer<object>.Default.Equals(o41, o42);
            assert.Ok(b4, "EqualityComparer<object>.Default.Equals(o41, o42) works");
        }

        // Bridge[#342]
        public static void N342(Assert assert)
        {
            assert.Expect(2);

            var dictionary = new Bridge342(new Dictionary<int, string> { { 3, "b" }, { 6, "z" }, { 9, "x" } });

            var interfacedDictionary = (IDictionary<int, string>)dictionary;

            assert.Equal(interfacedDictionary[6], "z", "IDictionary getter works");
            assert.Throws(() => { var r = interfacedDictionary[1]; }, "IDictionary getter throws exception when incorrect key used");
        }

        // Bridge[#377]
        public static void N377(Assert assert)
        {
            assert.Expect(6);

            var objectLiteralInstance = new Bridge377
            {
                field1 = "field1 value",
                field3 = 7
            };

            assert.Equal(objectLiteralInstance.HasOwnProperty("field1"), true, "ObjectLiteral's field with an explicit value is emitted");
            assert.Equal(objectLiteralInstance.field1, "field1 value", "ObjectLiteral's field with an explicit value is emitted correctly");

            assert.Equal(objectLiteralInstance.HasOwnProperty("field3"), true, "ObjectLiteral's field with an explicit value is emitted");
            assert.Equal(objectLiteralInstance.field3, 7, "ObjectLiteral's field with an explicit value is emitted correctly");

            assert.Equal(objectLiteralInstance.HasOwnProperty("field2"), false, "ObjectLiteral's field without an explicit value is not emitted");
            assert.Equal(objectLiteralInstance.HasOwnProperty("field4"), false, "ObjectLiteral's field without an explicit value is not emitted");
        }

        // Bridge[#383]
        public static void N383(Assert assert)
        {
            assert.Expect(2);

            var person1 = new Person383() { Name = "Johnny" };
            var msg1 = person1.DoSomething();

            assert.Equal(msg1, "Johnny", "Instance extention Johnny");

            var person2 = new Person383() { Name = "Madison" };
            var msg2 = Bridge383.DoSomething(person2);

            assert.Equal(msg2, "Madison", "Static extention Madison");
        }

        // Bridge[#395]
        public static void N395(Assert assert)
        {
            assert.Expect(3);

            var _dictOfTests = new Dictionary<string, Bridge395>();

            var tests = new Bridge395[]
            {
                new Bridge395(){Id = "a"},
                new Bridge395(){Id = "b"}
            };

            foreach (var item in tests)
            {
                if (!_dictOfTests.ContainsKey(item.Id))
                {
                    _dictOfTests[item.Id] = item;
                }
            }

            assert.Equal(_dictOfTests.Count, 2, "All items added");
            assert.Equal(_dictOfTests["a"].Id, "a", "First element is a");
            assert.Equal(_dictOfTests["b"].Id, "b", "Second element is b");
        }

        // Bridge[#406]
        public static void N406(Assert assert)
        {
            const string TESTA = "TESTA";
            const string TESTB = "TESTB";
            const string TESTC = "TESTC";
            const string TESTD = "TESTD";
            const string TESTE = "TESTE";
            const string TESTF = "TESTF";
            const string TESTG = "TESTG";

            var test = TESTD;
            string result = null;
            switch (test)
            {
                case TESTA:
                    result = TESTA;
                    break;
                case TESTB:
                    result = TESTB;
                    break;
                case TESTC:
                    result = TESTC;
                    break;
                case TESTD:
                    result = TESTD;
                    break;
                case TESTE:
                    result = TESTE;
                    break;
                case TESTF:
                    result = TESTF;
                    break;
                case TESTG:
                    result = TESTG;
                    break;
            }

            assert.Equal(result, "TESTD", "TESTD");
        }

        // Bridge[#407]
        public static void N407(Assert assert)
        {
            Bridge407 vec = new Bridge407() { A = 1 };
            vec += new Bridge407() { A = 2 };

            assert.Equal(vec.A, 3, "Vec.A = 3");

            int a = 2;
            a += 5;
            assert.Equal(a, 7, "a = 7");
        }

        // Bridge[#409]
        public static void N409(Assert assert)
        {
            decimal a = Math.Round(3.5M);
            EnsureNumber(assert, a, "4", "Math.Round(3.5M)");

            decimal b = Math.Round(4.5M);
            EnsureNumber(assert, b, "4", "Math.Round(4.5M)");
        }

        // Bridge[#410]
        private static void EnsureNumber(Assert assert, object actual, string expected, string message)
        {
            assert.Equal(actual.ToString(), expected, message);
        }
        public static void N410(Assert assert)
        {
            // Decimal consts
            var DecimalZero = decimal.Zero;
            var DecimalOne = decimal.One;
            var DecimalMinusOne = decimal.MinusOne;
            var DecimalMaxValue = decimal.MaxValue;
            var DecimalMinValue = decimal.MinValue;

            EnsureNumber(assert, DecimalZero, "0", "DecimalZero");
            EnsureNumber(assert, DecimalOne, "1", "DecimalOne");
            EnsureNumber(assert, DecimalMinusOne, "-1", "DecimalMinusOne");
            EnsureNumber(assert, DecimalMaxValue, "7.9228162514264337593543950335e+28", "DecimalMaxValue");
            EnsureNumber(assert, DecimalMinValue, "-7.9228162514264337593543950335e+28", "DecimalMinValue");

            // Decimal consts in expressions
            DecimalZero = decimal.Zero + 0;
            DecimalOne = decimal.One + 0; ;
            DecimalMinusOne = decimal.MinusOne + 0; ;
            DecimalMaxValue = decimal.MaxValue + 0; ;
            DecimalMinValue = decimal.MinValue + 0; ;

            EnsureNumber(assert, DecimalZero, "0", "DecimalZeroin expression");
            EnsureNumber(assert, DecimalOne, "1", "DecimalOnein expression");
            EnsureNumber(assert, DecimalMinusOne, "-1", "DecimalMinusOnein expression");
            EnsureNumber(assert, DecimalMaxValue, "7.9228162514264337593543950335e+28", "DecimalMaxValuein expression");
            EnsureNumber(assert, DecimalMinValue, "-7.9228162514264337593543950335e+28", "DecimalMinValuein expression");

            // Double consts
            var DoubleMaxValue = double.MaxValue;
            var DoubleMinValue = double.MinValue;
            var DoubleEpsilon = double.Epsilon;
            var DoubleNegativeInfinity = double.NegativeInfinity;
            var DoublePositiveInfinity = double.PositiveInfinity;
            var DoubleNaN = double.NaN;

            EnsureNumber(assert, DoubleMaxValue, "1.7976931348623157e+308", "DoubleMaxValue");
            EnsureNumber(assert, DoubleMinValue, "5e-324", "DoubleMinValue");
            EnsureNumber(assert, DoubleEpsilon, "5e-324", "DoubleEpsilon");
            EnsureNumber(assert, DoubleNegativeInfinity, "-Infinity", "DoubleNegativeInfinity");
            EnsureNumber(assert, DoublePositiveInfinity, "Infinity", "DoublePositiveInfinity");
            EnsureNumber(assert, DoubleNaN, "NaN", "DoubleNaN");

            // Double consts in expressions
            DoubleMaxValue = double.MaxValue + 0;
            DoubleMinValue = double.MinValue + 0;
            DoubleEpsilon = double.Epsilon + 0;
            DoubleNegativeInfinity = double.NegativeInfinity + 0;
            DoublePositiveInfinity = double.PositiveInfinity + 0;
            DoubleNaN = double.NaN + 0;

            EnsureNumber(assert, DoubleMaxValue, "1.7976931348623157e+308", "DoubleMaxValuein expression");
            EnsureNumber(assert, DoubleMinValue, "5e-324", "DoubleMinValuein expression");
            EnsureNumber(assert, DoubleEpsilon, "5e-324", "DoubleEpsilonin expression");
            EnsureNumber(assert, DoubleNegativeInfinity, "-Infinity", "DoubleNegativeInfinityin expression");
            EnsureNumber(assert, DoublePositiveInfinity, "Infinity", "DoublePositiveInfinityin expression");
            EnsureNumber(assert, DoubleNaN, "NaN", "DoubleNaNin expression");

            // Math consts
            var MathE = Math.E;
            var MathLN10 = Math.LN10;
            var MathLN2 = Math.LN2;
            var MathLOG2E = Math.LOG2E;
            var MathLOG10E = Math.LOG10E;
            var MathPI = Math.PI;
            var MathSQRT1_2 = Math.SQRT1_2;
            var MathSQRT2 = Math.SQRT2;

            EnsureNumber(assert, MathE, "2.718281828459045", "MathE");
            EnsureNumber(assert, MathLN10, "2.302585092994046", "MathLN10");
            EnsureNumber(assert, MathLN2, "0.6931471805599453", "MathLN2");
            EnsureNumber(assert, MathLOG2E, "1.4426950408889634", "MathLOG2E");
            EnsureNumber(assert, MathLOG10E, "0.4342944819032518", "MathLOG10E");
            EnsureNumber(assert, MathPI, "3.141592653589793", "MathPI");
            EnsureNumber(assert, MathSQRT1_2, "0.7071067811865476", "MathSQRT1_2");
            EnsureNumber(assert, MathSQRT2, "1.4142135623730951", "MathSQRT2");

            // Math consts in expression
            MathE = Math.E + 0;
            MathLN10 = Math.LN10 + 0;
            MathLN2 = Math.LN2 + 0;
            MathLOG2E = Math.LOG2E + 0;
            MathLOG10E = Math.LOG10E + 0;
            MathPI = Math.PI + 0;
            MathSQRT1_2 = Math.SQRT1_2 + 0;
            MathSQRT2 = Math.SQRT2 + 0;

            EnsureNumber(assert, MathE, "2.718281828459045", "MathEin expression");
            EnsureNumber(assert, MathLN10, "2.302585092994046", "MathLN10in expression");
            EnsureNumber(assert, MathLN2, "0.6931471805599453", "MathLN2in expression");
            EnsureNumber(assert, MathLOG2E, "1.4426950408889634", "MathLOG2Ein expression");
            EnsureNumber(assert, MathLOG10E, "0.4342944819032518", "MathLOG10Ein expression");
            EnsureNumber(assert, MathPI, "3.141592653589793", "MathPIin expression");
            EnsureNumber(assert, MathSQRT1_2, "0.7071067811865476", "MathSQRT1_2in expression");
            EnsureNumber(assert, MathSQRT2, "1.4142135623730951", "MathSQRT2in expression");

            // Single consts
            var SingleMaxValue = float.MaxValue;
            var SingleMinValue = float.MinValue;
            var SingleEpsilon = float.Epsilon;
            var SingleNaN = float.NaN;
            var SingleNegativeInfinity = float.NegativeInfinity;
            var SinglePositiveInfinity = float.PositiveInfinity;

            EnsureNumber(assert, SingleMaxValue, "3.40282347e+38", "SingleMaxValue");
            EnsureNumber(assert, SingleMinValue, "-3.40282347e+38", "SingleMinValue");
            EnsureNumber(assert, SingleEpsilon, "1.401298e-45", "SingleEpsilon");
            EnsureNumber(assert, SingleNaN, "NaN", "SingleNaN");
            EnsureNumber(assert, SingleNegativeInfinity, "-Infinity", "SingleNegativeInfinity");
            EnsureNumber(assert, SinglePositiveInfinity, "Infinity", "SinglePositiveInfinity");

            // Single consts in expression
            SingleMaxValue = float.MaxValue + 0;
            SingleMinValue = float.MinValue + 0;
            SingleEpsilon = float.Epsilon + 0;
            SingleNaN = float.NaN + 0;
            SingleNegativeInfinity = float.NegativeInfinity + 0;
            SinglePositiveInfinity = float.PositiveInfinity + 0;

            EnsureNumber(assert, SingleMaxValue, "3.40282347e+38", "SingleMaxValuein expression");
            EnsureNumber(assert, SingleMinValue, "-3.40282347e+38", "SingleMinValuein expression");
            EnsureNumber(assert, SingleEpsilon, "1.401298e-45", "SingleEpsilonin expression");
            EnsureNumber(assert, SingleNaN, "NaN", "SingleNaNin expression");
            EnsureNumber(assert, SingleNegativeInfinity, "-Infinity", "SingleNegativeInfinityin expression");
            EnsureNumber(assert, SinglePositiveInfinity, "Infinity", "SinglePositiveInfinityin expression");
        }

        // Bridge[#418]
        public static void N418(Assert assert)
        {
            var t = new Bridge418();
            t.Delegate += (i) => i * 2;
            var r = t.CallDelegate(10);

            assert.Equal(r, 20, "Delegate added and called var r = t.CallDelegate(10);");
        }

        // Bridge[#422]
        public static void N422(Assert assert)
        {
            var v0 = Bridge422.first;
            var v100 = Bridge422.next;
            var v101 = Bridge422.afterNext;

            assert.Equal(v0, 0, "Bridge422.first");
            assert.Equal(v100, 100, "Bridge422.next");
            assert.Equal(v101, 101, "Bridge422.afterNext");
        }

        // Bridge[#422]
        public static void N428(Assert assert)
        {
            var number2 = 11.37m;
            var sum = "0.13 + " + number2;

            assert.Equal(sum, "0.13 + 11.37", "0.13 + 11.37");
        }

        // Bridge[#435]
        public static void N435(Assert assert)
        {
            int i = 0;
            assert.Equal(i.Format("E"), "0E+000", "i.Format(\"E\")");
            assert.Equal(i.Format("a"), "a", "Test custom formatting in \"use strict\" mode");
        }

        // Bridge[#436]
        public static void N436(Assert assert)
        {
            var b1 = new Bridge436First();
            assert.Equal(b1.ToObject(), "1", "Bridge436First.ToObject()");

            var b2 = new Bridge436Second();
            assert.Equal(b2.ToObject(), "12", "Bridge436Second.ToObject()");

            var b3 = new Bridge436Third();
            assert.Equal(b3.ToObject(), "123", "Bridge436Third.ToObject()");
        }

        // Bridge[#439]
        public static void N439(Assert assert)
        {
            var b = new Bridge439();
            string accumulator = string.Empty;
            b.Register((s) => { accumulator = accumulator + s; });

            b.CallDispatcher("1");
            assert.Equal(accumulator, "1", "accumulator 1");

            b.CallDispatcher("2");
            assert.Equal(accumulator, "12", "accumulator 12");
        }

        // Bridge[#442]
        public static void N442(Assert assert)
        {
            decimal a = 3.5M;
            EnsureNumber(assert, a.Round(), "4", "a.Round(3.5M)");

            decimal b = 4.5M;
            EnsureNumber(assert, b.Round(), "4", "b.Round(4.5M)");
        }
    }
}
