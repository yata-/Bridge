    // @source Console.js

    Bridge.Console = {
        output: null,

        log: function (obj) {
            if (Bridge.Console.output != null) {
                Bridge.Console.output += obj;
                return;
            }

            console.log(obj);
        }
    };