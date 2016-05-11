    // @source Console.js    Bridge.Console = {
        output: null,        log: function (obj) {
            if (!Bridge.Console.output) {
                Bridge.Console.output += obj;                return;
            }            console.log(obj);
        },
    };