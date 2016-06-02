using System;
using System.Collections.Generic;
using Bridge.Html5;

namespace TestIssueDeserializeArrayOfClass {
    public class Foo {
        public void SomeMethod() {}
    }

    public class IssueDeserializeArrayOfClass {
        
        [Ready]
        public static void Main() {
            var ser = JSON.Stringify(new []{ new Foo() });
            var deser = JSON.ParseAsArray<Foo>(ser);

            try {
                deser[0].SomeMethod();
                Console.WriteLine("ok[array]");
            } catch(Exception ex) {
                Console.WriteLine("BUG[array]: "+ex);    
            }    
        }
    }
}
