(function (globals) {
    "use strict";

    Bridge.define('Bridge.Random', {
        statics: {
            MBIG: 2147483647,
            MSEED: 161803398,
            MZ: 0
        },
        inext: 0,
        inextp: 0,
        seedArray: null,
        config: {
            init: function () {
                this.seedArray = Bridge.Array.init(56, 0);
            }
        },
        constructor: function () {
            Bridge.Random.prototype.constructor$1.call(this, Bridge.Long.clip32(Bridge.Long((new Date()).getTime()).mul(10000)));
    
        },
        constructor$1: function (Seed) {
            var ii;
            var mj, mk;
    
            //Initialize our Seed array.
            //This algorithm comes from Numerical Recipes in C (2nd Ed.)
            var subtraction = (Seed === -2147483648) ? 2147483647 : Math.abs(Seed);
            mj = (Bridge.Random.MSEED - subtraction) | 0;
            this.seedArray[55] = mj;
            mk = 1;
            for (var i = 1; i < 55; i = (i + 1) | 0) { //Apparently the range [1..55] is special (Knuth) and so we're wasting the 0'th position.
                ii = (((21 * i) | 0)) % 55;
                this.seedArray[ii] = mk;
                mk = (mj - mk) | 0;
                if (mk < 0) {
                    mk = (mk + Bridge.Random.MBIG) | 0;
                }
                mj = this.seedArray[ii];
            }
            for (var k = 1; k < 5; k = (k + 1) | 0) {
                for (var i1 = 1; i1 < 56; i1 = (i1 + 1) | 0) {
                    this.seedArray[i1] = (this.seedArray[i1] - this.seedArray[((1 + (((i1 + 30) | 0)) % 55) | 0)]) | 0;
                    if (this.seedArray[i1] < 0) {
                        this.seedArray[i1] = (this.seedArray[i1] + Bridge.Random.MBIG) | 0;
                    }
                }
            }
            this.inext = 0;
            this.inextp = 21;
            Seed = 1;
        },
        sample: function () {
            //Including this division at the end gives us significantly improved
            //random number distribution.
            return (this.internalSample() * (4.6566128752457969E-10));
        },
        internalSample: function () {
            var retVal;
            var locINext = this.inext;
            var locINextp = this.inextp;
    
            if (((locINext = (locINext + 1) | 0)) >= 56) {
                locINext = 1;
            }
    
            if (((locINextp = (locINextp + 1) | 0)) >= 56) {
                locINextp = 1;
            }
    
            retVal = (this.seedArray[locINext] - this.seedArray[locINextp]) | 0;
    
            if (retVal === Bridge.Random.MBIG) {
                retVal = (retVal - 1) | 0;
            }
    
            if (retVal < 0) {
                retVal = (retVal + Bridge.Random.MBIG) | 0;
            }
    
            this.seedArray[locINext] = retVal;
    
            this.inext = locINext;
            this.inextp = locINextp;
    
            return retVal;
        },
        next: function () {
            return this.internalSample();
        },
        next$2: function (minValue, maxValue) {
            if (minValue > maxValue) {
                throw new Bridge.ArgumentOutOfRangeException("minValue", "'minValue' cannot be greater than maxValue.");
            }
    
            var range = Bridge.Long(Bridge.Long(maxValue)).sub(Bridge.Long(minValue));
            if (range.lte(Bridge.Long(2147483647))) {
                return (((Bridge.Int.clip32(this.sample() * Bridge.Long.toNumber(range)) + minValue) | 0));
            }
            else  {
                return Bridge.Long.clip32(Bridge.Int.clip64(this.getSampleForLargeRange() * Bridge.Long.toNumber(range)).add(Bridge.Long(minValue)));
            }
        },
        next$1: function (maxValue) {
            if (maxValue < 0) {
                throw new Bridge.ArgumentOutOfRangeException("maxValue", "'maxValue' must be greater than zero.");
            }
            return Bridge.Int.clip32(this.sample() * maxValue);
        },
        getSampleForLargeRange: function () {
            // The distribution of double value returned by Sample 
            // is not distributed well enough for a large range.
            // If we use Sample for a range [Int32.MinValue..Int32.MaxValue)
            // We will end up getting even numbers only.
    
            var result = this.internalSample();
            // Note we can't use addition here. The distribution will be bad if we do that.
            var negative = (this.internalSample() % 2 === 0) ? true : false; // decide the sign based on second sample
            if (negative) {
                result = (-result) | 0;
            }
            var d = result;
            d += (2147483646); // get a number in range [0 .. 2 * Int32MaxValue - 1)
            d /= 4294967293;
            return d;
        },
        nextDouble: function () {
            return this.sample();
        },
        nextBytes: function (buffer) {
            if (buffer == null) {
                throw new Bridge.ArgumentNullException("buffer");
            }
            for (var i = 0; i < buffer.length; i = (i + 1) | 0) {
                buffer[i] = ((this.internalSample() % (256))) & 255;
            }
        }
    });
    
    
    
    Bridge.init();
})(this);
