using Bridge;
using Bridge.Html5;
using Bridge.QUnit;

using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace ClientTestLibrary
{
    // Bridge[#485]
    [FileName("testBridgeIssues.js")]
    class Bridge485
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            var list = new[] { new { LastName = "", FirstName = "", } }.Skip(1).ToList();
            list.Add(new { LastName = "Ruth", FirstName = "Babe", });
            list.Add(new { LastName = "Johnson", FirstName = "Walter", });
            list.Add(new { LastName = "Cobb", FirstName = "Ty", });
            list.Add(new { LastName = "Schmidt", FirstName = "Mike", });

            var query = from p in list
                        where p.LastName.Length == 4
                        select new
                        {
                            p.LastName,
                            p.FirstName,
                        };

            var s = JSON.Stringify(query.ToList());

            assert.Equal(s, "{\"items\":[{\"lastName\":\"Ruth\",\"firstName\":\"Babe\"},{\"lastName\":\"Cobb\",\"firstName\":\"Ty\"}]}", "#485");
        }
    }
}
