    // @source Math.js

    var math = {
        divRem: function (a, b, result) {
            var remainder = a % b;

            result.v = remainder;

            return (a - remainder) / b;
        },

        round: function (n, d, rounding) {
            var m = Math.pow(10, d || 0);

            n *= m;

            var sign = (n > 0) | -(n < 0);

            if (n % 1 === 0.5 * sign) {
                var f = Math.floor(n);

                return (f + (rounding === 4 ? (sign > 0) : (f % 2 * sign))) / m;
            }

            return Math.round(n) / m;
        },

        sinh: function (x) {
            return (Math.exp(x) - Math.exp(-x)) / 2;
        },

        cosh: function (x) {
            return (Math.exp(x) + Math.exp(-x)) / 2;
        },

        tanh: function (x) {
            if (x === Infinity) {
                return 1;
            } else if (x === -Infinity) {
                return -1;
            } else {
                var y = Math.exp(2 * x);
                return (y - 1) / (y + 1);
            }
        }
    };

    math.sinh = Math.sinh || math.sinh;
    math.cosh = Math.cosh || math.cosh;
    math.tanh = Math.tanh || math.tanh;
    Bridge.Math = math;    
