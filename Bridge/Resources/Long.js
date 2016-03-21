/* long.js https://github.com/dcodeIO/long.js/blob/master/LICENSE */

(function (global) { function i(n, t, i) { this.low = n | 0; this.high = t | 0; this.unsigned = !!i } function u(n) { return (n && n.__isLong__) === !0 } function s(n, i) { var r, u, f; return i ? (n >>>= 0, (f = 0 <= n && n < 256) && (u = p[n], u)) ? u : (r = t(n, (n | 0) < 0 ? -1 : 0, !0), f && (p[n] = r), r) : (n |= 0, (f = -128 <= n && n < 128) && (u = y[n], u)) ? u : (r = t(n, n < 0 ? -1 : 0, !1), f && (y[n] = r), r) } function f(n, i) { if (isNaN(n) || !isFinite(n)) return i ? l : e; if (i) { if (n < 0) return l; if (n >= g) return k } else { if (n <= -nt) return r; if (n + 1 >= nt) return b } return n < 0 ? f(-n, i).neg() : t(n % c | 0, n / c | 0, i) } function t(n, t, r) { return new i(n, t, r) } function w(n, t, i) { var h, c, r, u, o, s, l; if (n.length === 0) throw Error("empty string"); if (n === "NaN" || n === "Infinity" || n === "+Infinity" || n === "-Infinity") return e; if (typeof t == "number" && (i = t, t = !1), i = i || 10, i < 2 || 36 < i) throw RangeError("radix"); if (typeof t == 'undefined') t = false; if ((h = n.indexOf("-")) > 0) throw Error("interior hyphen"); else if (h === 0) return w(n.substring(1), t, i).neg(); for (c = f(a(i, 8)), r = e, u = 0; u < n.length; u += 8) o = Math.min(8, n.length - u), s = parseInt(n.substring(u, u + o), i), o < 8 ? (l = f(a(i, o)), r = r.mul(l).add(f(s))) : (r = r.mul(c), r = r.add(f(s))); return r.unsigned = t, r } function o(n) { return n instanceof i ? n : typeof n == "number" ? f(n) : typeof n == "string" ? w(n) : t(n.low, n.high, n.unsigned) } var y, p, a, l, h, it, v, b, k, r, n; global.Bridge.$Long = i; i.__isLong__; Object.defineProperty(i.prototype, "__isLong__", { value: !0, enumerable: !1, configurable: !1 }); i.isLong = u; y = {}; p = {}; i.fromInt = s; i.fromNumber = f; i.fromBits = t; a = Math.pow; i.fromString = w; i.fromValue = o; var d = 65536, c = d * d, g = c * c, nt = g / 2, tt = s(16777216), e = s(0); i.ZERO = e; l = s(0, !0); i.UZERO = l; h = s(1); i.ONE = h; it = s(1, !0); i.UONE = it; v = s(-1); i.NEG_ONE = v; b = t(4294967295 | 0, 2147483647, !1); i.MAX_VALUE = b; k = t(4294967295 | 0, 4294967295 | 0, !0); i.MAX_UNSIGNED_VALUE = k; r = t(0, 2147483648 | 0, !1); i.MIN_VALUE = r; n = i.prototype; n.toInt = function () { return this.unsigned ? this.low >>> 0 : this.low }; n.toNumber = function () { return this.unsigned ? (this.high >>> 0) * c + (this.low >>> 0) : this.high * c + (this.low >>> 0) }; n.toString = function (n) { if (n = n || 10, n < 2 || 36 < n) throw RangeError("radix"); if (this.isZero()) return "0"; if (this.isNegative()) { if (this.eq(r)) { var e = f(n), o = this.div(e), c = o.mul(e).sub(this); return o.toString(n) + c.toInt().toString(n) } return (((typeof n === "undefined") || (n === 10)) ? "-" : "") + this.neg().toString(n) } for (var s = f(a(n, 6), this.unsigned), i = this, u = ""; ;) { var h = i.div(s), l = i.sub(h.mul(s)).toInt() >>> 0, t = l.toString(n); if (i = h, i.isZero()) return t + u; while (t.length < 6) t = "0" + t; u = "" + t + u } }; n.getHighBits = function () { return this.high }; n.getHighBitsUnsigned = function () { return this.high >>> 0 }; n.getLowBits = function () { return this.low }; n.getLowBitsUnsigned = function () { return this.low >>> 0 }; n.getNumBitsAbs = function () { var t, n; if (this.isNegative()) return this.eq(r) ? 64 : this.neg().getNumBitsAbs(); for (t = this.high != 0 ? this.high : this.low, n = 31; n > 0; n--) if ((t & 1 << n) != 0) break; return this.high != 0 ? n + 33 : n + 1 }; n.isZero = function () { return this.high === 0 && this.low === 0 }; n.isNegative = function () { return !this.unsigned && this.high < 0 }; n.isPositive = function () { return this.unsigned || this.high >= 0 }; n.isOdd = function () { return (this.low & 1) == 1 }; n.isEven = function () { return (this.low & 1) == 0 }; n.equals = function (n) { return (u(n) || (n = o(n)), this.unsigned !== n.unsigned && this.high >>> 31 == 1 && n.high >>> 31 == 1) ? !1 : this.high === n.high && this.low === n.low }; n.eq = n.equals; n.notEquals = function (n) { return !this.eq(n) }; n.neq = n.notEquals; n.lessThan = function (n) { return this.comp(n) < 0 }; n.lt = n.lessThan; n.lessThanOrEqual = function (n) { return this.comp(n) <= 0 }; n.lte = n.lessThanOrEqual; n.greaterThan = function (n) { return this.comp(n) > 0 }; n.gt = n.greaterThan; n.greaterThanOrEqual = function (n) { return this.comp(n) >= 0 }; n.gte = n.greaterThanOrEqual; n.compare = function (n) { if (u(n) || (n = o(n)), this.eq(n)) return 0; var t = this.isNegative(), i = n.isNegative(); return t && !i ? -1 : !t && i ? 1 : this.unsigned ? n.high >>> 0 > this.high >>> 0 || n.high === this.high && n.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(n).isNegative() ? -1 : 1 }; n.comp = n.compare; n.negate = function () { return !this.unsigned && this.eq(r) ? r : this.not().add(h) }; n.neg = n.negate; n.add = function (n) { u(n) || (n = o(n)); var s = this.high >>> 16, h = this.high & 65535, c = this.low >>> 16, l = this.low & 65535, a = n.high >>> 16, v = n.high & 65535, y = n.low >>> 16, p = n.low & 65535, f = 0, i = 0, r = 0, e = 0; return e += l + p, r += e >>> 16, e &= 65535, r += c + y, i += r >>> 16, r &= 65535, i += h + v, f += i >>> 16, i &= 65535, f += s + a, f &= 65535, t(r << 16 | e, f << 16 | i, this.unsigned) }; n.subtract = function (n) { return u(n) || (n = o(n)), this.add(n.neg()) }; n.sub = n.subtract; n.multiply = function (n) { if (this.isZero() || (u(n) || (n = o(n)), n.isZero())) return e; if (this.eq(r)) return n.isOdd() ? r : e; if (n.eq(r)) return this.isOdd() ? r : e; if (this.isNegative()) return n.isNegative() ? this.neg().mul(n.neg()) : this.neg().mul(n).neg(); if (n.isNegative()) return this.mul(n.neg()).neg(); if (this.lt(tt) && n.lt(tt)) return f(this.toNumber() * n.toNumber(), this.unsigned); var b = this.high >>> 16, p = this.high & 65535, v = this.low >>> 16, c = this.low & 65535, k = n.high >>> 16, w = n.high & 65535, y = n.low >>> 16, l = n.low & 65535, h = 0, i = 0, s = 0, a = 0; return a += c * l, s += a >>> 16, a &= 65535, s += v * l, i += s >>> 16, s &= 65535, s += c * y, i += s >>> 16, s &= 65535, i += p * l, h += i >>> 16, i &= 65535, i += v * y, h += i >>> 16, i &= 65535, i += c * w, h += i >>> 16, i &= 65535, h += b * l + p * y + v * w + c * k, h &= 65535, t(s << 16 | a, h << 16 | i, this.unsigned) }; n.mul = n.multiply; n.divide = function (n) { var t, i, c, p; if (u(n) || (n = o(n)), n.isZero()) throw Error("division by zero"); if (this.isZero()) return this.unsigned ? l : e; if (this.eq(r)) return n.eq(h) || n.eq(v) ? r : n.eq(r) ? h : (p = this.shr(1), t = p.div(n).shl(1), t.eq(e) ? n.isNegative() ? h : v : (i = this.sub(n.mul(t)), t.add(i.div(n)))); if (n.eq(r)) return this.unsigned ? l : e; if (this.isNegative()) return n.isNegative() ? this.neg().div(n.neg()) : this.neg().div(n).neg(); if (n.isNegative()) return this.div(n.neg()).neg(); for (c = e, i = this; i.gte(n) ;) { t = Math.max(1, Math.floor(i.toNumber() / n.toNumber())); for (var w = Math.ceil(Math.log(t) / Math.LN2), b = w <= 48 ? 1 : a(2, w - 48), s = f(t), y = s.mul(n) ; y.isNegative() || y.gt(i) ;) t -= b, s = f(t, this.unsigned), y = s.mul(n); s.isZero() && (s = h); c = c.add(s); i = i.sub(y) } return c }; n.div = n.divide; n.modulo = function (n) { return u(n) || (n = o(n)), this.sub(this.div(n).mul(n)) }; n.mod = n.modulo; n.not = function () { return t(~this.low, ~this.high, this.unsigned) }; n.and = function (n) { return u(n) || (n = o(n)), t(this.low & n.low, this.high & n.high, this.unsigned) }; n.or = function (n) { return u(n) || (n = o(n)), t(this.low | n.low, this.high | n.high, this.unsigned) }; n.xor = function (n) { return u(n) || (n = o(n)), t(this.low ^ n.low, this.high ^ n.high, this.unsigned) }; n.shiftLeft = function (n) { return u(n) && (n = n.toInt()), (n &= 63) == 0 ? this : n < 32 ? t(this.low << n, this.high << n | this.low >>> 32 - n, this.unsigned) : t(0, this.low << n - 32, this.unsigned) }; n.shl = n.shiftLeft; n.shiftRight = function (n) { return u(n) && (n = n.toInt()), (n &= 63) == 0 ? this : n < 32 ? t(this.low >>> n | this.high << 32 - n, this.high >> n, this.unsigned) : t(this.high >> n - 32, this.high >= 0 ? 0 : -1, this.unsigned) }; n.shr = n.shiftRight; n.shiftRightUnsigned = function (n) { var i, r; return u(n) && (n = n.toInt()), n &= 63, n === 0 ? this : (i = this.high, n < 32 ? (r = this.low, t(r >>> n | i << 32 - n, i >>> n, this.unsigned)) : n === 32 ? t(i, 0, this.unsigned) : t(i >>> n - 32, 0, this.unsigned)) }; n.shru = n.shiftRightUnsigned; n.toSigned = function () { return this.unsigned ? t(this.low, this.high, !1) : this }; n.toUnsigned = function () { return this.unsigned ? this : t(this.low, this.high, !0) } })(Bridge.global);

Bridge.Long = function (l) {
    if (this.constructor !== Bridge.Long) {
        return new Bridge.Long(l);
    }

    if (!Bridge.hasValue(l)) {
        l = 0;
    }

    this.T = Bridge.Long;
    this.unsigned = false;
    this.value = Bridge.Long.getValue(l);
}

Bridge.Long.$$name = "Bridge.Long";
Bridge.Long.prototype.$$name = "Bridge.Long";

Bridge.Long.$$inherits = [];
Bridge.Class.addExtend(Bridge.Long, [Bridge.IComparable, Bridge.IFormattable, Bridge.IComparable$1(Bridge.Long), Bridge.IEquatable$1(Bridge.Long)]);

Bridge.Long.instanceOf = function (instance) {
    return instance instanceof Bridge.Long;
};

Bridge.Long.is64Bit = function (instance) {
	return instance instanceof Bridge.Long || instance instanceof Bridge.ULong;
};

Bridge.Long.getDefaultValue = function () {
    return Bridge.Long.Zero;
};

Bridge.Long.getValue = function (l) {
    if (!Bridge.hasValue(l)) {
        return null;
    }

    if (l instanceof Bridge.$Long) {
        return l;
    }

    if (l instanceof Bridge.Long) {
        return l.value;
    }

    if (l instanceof Bridge.ULong) {
        return l.value.toSigned();
    }

    if (Bridge.isArray(l)) {
        return new Bridge.$Long(l[0], l[1]);
    }

    if (Bridge.isString(l)) {
        return Bridge.$Long.fromString(l);
    }

    if (Bridge.isNumber(l)) {
        return Bridge.$Long.fromNumber(l);
    }

    if (l instanceof Bridge.Decimal) {
        return Bridge.$Long.fromString(l.toString());
    }

    return Bridge.$Long.fromValue(l);
};

Bridge.Long.create = function (l) {
    if (!Bridge.hasValue(l)) {
        return null;
    }

    if (l instanceof Bridge.Long) {
        return l;
    }

    return new Bridge.Long(l);
};

Bridge.Long.lift = function (l) {
    if (!Bridge.hasValue(l)) {
        return null;
    }
    return Bridge.Long.create(l);
};

Bridge.Long.toNumber = function (value) {
    if (!value) {
        return null;
    }

    return value.toNumber();
};

Bridge.Long.prototype.toNumberDivided = function (divisor) {
    var integral = this.div(divisor),
        remainder = this.mod(divisor),
        scaledRemainder = remainder.toNumber() / divisor;

    return integral.toNumber() + scaledRemainder;
};

Bridge.Long.prototype.toString = function (format, provider) {
    if (!format && !provider) {
        return this.value.toString();
    }

    if (Bridge.isNumber(format) && !provider) {
        return this.value.toString(format);
    }

    return Bridge.Int.format(this, format, provider);
};

Bridge.Long.prototype.format = function (format, provider) {
    return Bridge.Int.format(this, format, provider);
};

Bridge.Long.prototype.isNegative = function () {
    return this.value.isNegative();
};

Bridge.Long.prototype.abs = function () {
    if (this.T === Bridge.Long && this.eq(Bridge.Long.MinValue)) {
        throw new Bridge.OverflowException();
    }
    return new this.T(this.value.isNegative() ? this.value.neg() : this.value);
};

Bridge.Long.prototype.compareTo = function (l) {
    return this.value.compare(this.T.getValue(l));
};

Bridge.Long.prototype.add = function (l, overflow) {
    var addl = this.T.getValue(l),
        r = new this.T(this.value.add(addl));

    if (overflow) {
        var neg1 = this.value.isNegative(),
            neg2 = addl.isNegative(),
            rneg = r.value.isNegative();

        if ((neg1 && neg2 && !rneg) ||
            (!neg1 && !neg2 && rneg) ||
            (this.T === Bridge.ULong && r.lt(Bridge.ULong.max(this, addl)))) {
            throw new Bridge.OverflowException();
        }
    }

    return r;
};

Bridge.Long.prototype.sub = function (l, overflow) {
    var subl = this.T.getValue(l),
        r = new this.T(this.value.sub(subl));

    if (overflow) {
        var neg1 = this.value.isNegative(),
            neg2 = subl.isNegative(),
            rneg = r.value.isNegative();

        if ((neg1 && !neg2 && !rneg) ||
            (!neg1 && neg2 && rneg) ||
            (this.T === Bridge.ULong && this.value.lt(subl))) {
            throw new Bridge.OverflowException();
        }
    }

    return r;
};

Bridge.Long.prototype.isZero = function () {
    return this.value.isZero();
};

Bridge.Long.prototype.mul = function (l, overflow) {
    var arg = this.T.getValue(l),
        r = new this.T(this.value.mul(arg));

    if (overflow) {
        var s1 = this.sign(),
            s2 = arg.isZero() ? 0 : (arg.isNegative() ? -1 : 1),
            rs = r.sign();

        if (this.T === Bridge.Long) {
            if (this.eq(Bridge.Long.MinValue) || this.eq(Bridge.Long.MaxValue)) {
                if (arg.neq(1) && arg.neq(0)) {
                    throw new Bridge.OverflowException();
                }

                return r;
            }

            if (arg.eq(Bridge.$Long.MIN_VALUE) || arg.eq(Bridge.$Long.MAX_VALUE)) {
                if (this.neq(1) && this.neq(0)) {
                    throw new Bridge.OverflowException();
                }

                return r;
            }

            if ((s1 === -1 && s2 === -1 && rs !== 1) ||
                (s1 === 1 && s2 === 1 && rs !== 1) ||
                (s1 === -1 && s2 === 1 && rs !== -1) ||
                (s1 === 1 && s2 === -1 && rs !== -1)) {
                throw new Bridge.OverflowException();
            }

            var r_abs = r.abs();

            if (r_abs.lt(this.abs()) || r_abs.lt(Bridge.Long(arg).abs())) {
                throw new Bridge.OverflowException();
            }
        } else {
            if (this.eq(Bridge.ULong.MaxValue)) {
                if (arg.neq(1) && arg.neq(0)) {
                    throw new Bridge.OverflowException();
                }

                return r;
            }

            if (arg.eq(Bridge.$Long.MAX_UNSIGNED_VALUE)) {
                if (this.neq(1) && this.neq(0)) {
                    throw new Bridge.OverflowException();
                }

                return r;
            }

            var r_abs = r.abs();

            if (r_abs.lt(this.abs()) || r_abs.lt(Bridge.Long(arg).abs())) {
                throw new Bridge.OverflowException();
            }
        }
    }

    return r;
};

Bridge.Long.prototype.div = function (l) {
    return new this.T(this.value.div(this.T.getValue(l)));
};

Bridge.Long.prototype.mod = function (l) {
    return new this.T(this.value.mod(this.T.getValue(l)));
};

Bridge.Long.prototype.neg = function (overflow) {
    if (overflow && this.T === Bridge.Long && this.eq(Bridge.Long.MinValue)) {
        throw new Bridge.OverflowException();
    }
    return new this.T(this.value.neg());
};

Bridge.Long.prototype.inc = function (overflow) {
    return this.add(1, overflow);
};

Bridge.Long.prototype.dec = function (overflow) {
    return this.sub(1, overflow);
};

Bridge.Long.prototype.sign = function () {
    return this.value.isZero() ? 0 : (this.value.isNegative() ? -1 : 1);
};

Bridge.Long.prototype.clone = function () {
    return new this.T(this);
};

Bridge.Long.prototype.ne = function (l) {
    return this.value.neq(this.T.getValue(l));
};

Bridge.Long.prototype.neq = function (l) {
    return this.value.neq(this.T.getValue(l));
};

Bridge.Long.prototype.eq = function (l) {
    return this.value.eq(this.T.getValue(l));
};

Bridge.Long.prototype.lt = function (l) {
    return this.value.lt(this.T.getValue(l));
};

Bridge.Long.prototype.lte = function (l) {
    return this.value.lte(this.T.getValue(l));
};

Bridge.Long.prototype.gt = function (l) {
    return this.value.gt(this.T.getValue(l));
};

Bridge.Long.prototype.gte = function (l) {
    return this.value.gte(this.T.getValue(l));
};

Bridge.Long.prototype.equals = function (l) {
    return this.value.eq(this.T.getValue(l));
};

Bridge.Long.prototype.equalsT = function (l) {
    return this.equals(l);
};

Bridge.Long.prototype.getHashCode = function () {
    var n = (this.sign() * 397 + this.value.high) | 0;
    n = (n * 397 + this.value.low) | 0;

    return n;
};

Bridge.Long.prototype.toNumber = function () {
    return this.value.toNumber();
};

Bridge.Long.parse = function(str) {
    if (str == null) {
        throw new Bridge.ArgumentNullException("str");
    }

    if (!/^[+-]?[0-9]+$/.test(str)) {
        throw new Bridge.FormatException("Input string was not in a correct format.");
    }

    var result = new Bridge.Long(str);

    if (str !== result.toString()) {
        throw new Bridge.OverflowException();
    }

    return result;
};

Bridge.Long.tryParse = function (str, v) {
    try {
        if (str == null || !/^[+-]?[0-9]+$/.test(str)) {
            v.v = Bridge.Long(Bridge.$Long.ZERO);
            return false;
        }

        v.v = new Bridge.Long(str);

        if (str !== v.v.toString()) {
            v.v = Bridge.Long(Bridge.$Long.ZERO);
            return false;
        }

        return true;
    } catch (e) {
        v.v = Bridge.Long(Bridge.$Long.ZERO);
        return false;
    }
};

Bridge.Long.divRem = function(a, b, result) {
    a = Bridge.Long(a);
    b = Bridge.Long(b);
    var remainder = a.mod(b);
    result.v = remainder;
    return a.sub(remainder).div(b);
};

Bridge.Long.min = function () {
    var values = [],
        min, i, len;

    for (i = 0, len = arguments.length; i < len; i++) {
        values.push(Bridge.Long.getValue(arguments[i]));
    }

    i = 0;
    min = values[0];
    for (; ++i < values.length;) {
        if (values[i].lt(min)) {
            min = values[i];
        }
    }

    return new Bridge.Long(min);
};

Bridge.Long.max = function () {
    var values = [],
        max, i, len;

    for (i = 0, len = arguments.length; i < len; i++) {
        values.push(Bridge.Long.getValue(arguments[i]));
    }

    i = 0;
    max = values[0];
    for (; ++i < values.length;) {
        if (values[i].gt(max)) {
            max = values[i];
        }
    }

    return new Bridge.Long(max);
};

Bridge.Long.prototype.and = function (l) {
    return new this.T(this.value.and(this.T.getValue(l)));
};

Bridge.Long.prototype.not = function () {
    return new this.T(this.value.not());
};

Bridge.Long.prototype.or = function (l) {
    return new this.T(this.value.or(this.T.getValue(l)));
};

Bridge.Long.prototype.shl = function (l) {
    return new this.T(this.value.shl(l));
};

Bridge.Long.prototype.shr = function (l) {
    return new this.T(this.value.shr(l));
};

Bridge.Long.prototype.shru = function (l) {
    return new this.T(this.value.shru(l));
};

Bridge.Long.prototype.xor = function (l) {
    return new this.T(this.value.xor(this.T.getValue(l)));
};

Bridge.Long.check = function (v, tp) {
    if (!v) {
        return null;
    }

    var str, r;
    if (tp === Bridge.Long) {
        if (v instanceof Bridge.Long) {
            return v;
        }

        str = v.value.toString();
        r = new Bridge.Long(str);

        if (str !== r.value.toString()) {
            throw new Bridge.OverflowException();
        }

        return r;
    }

    if (tp === Bridge.ULong) {
        if (v instanceof Bridge.ULong) {
            return v;
        }

        if (v.value.isNegative()) {
            throw new Bridge.OverflowException();
        }
        str = v.value.toString();
        r = new Bridge.ULong(str);

        if (str !== r.value.toString()) {
            throw new Bridge.OverflowException();
        }

        return r;
    }

    return Bridge.Int.check(v.toNumber(), tp);
};

Bridge.Long.clip8 = function(x) {
    return x ? Bridge.Int.sxb(x.toNumber() & 0xff) : null;
};

Bridge.Long.clipu8 = function (x) {
    return x ? x.toNumber() & 0xff : null;
};

Bridge.Long.clip16 = function (x) {
    return x ? Bridge.Int.sxs(x.toNumber() & 0xffff) : null;
};

Bridge.Long.clipu16 = function (x) {
    return x ? x.toNumber() & 0xffff : null;
};

Bridge.Long.clip32 = function (x) {
    return x ? x.toNumber() | 0 : null;
};

Bridge.Long.clipu32 = function (x) {
    return x ? x.toNumber() >>> 0 : null;
};

Bridge.Long.clip64 = function (x) {
    return x ? new Bridge.Long(x.value.toSigned()) : null;
};

Bridge.Long.clipu64 = function (x) {
    return x ? new Bridge.ULong(x.value.toUnsigned()) : null;
};

Bridge.Long.Zero = Bridge.Long(Bridge.$Long.ZERO);
Bridge.Long.MinValue = Bridge.Long(Bridge.$Long.MIN_VALUE);
Bridge.Long.MaxValue = Bridge.Long(Bridge.$Long.MAX_VALUE);


/* ULONG */


Bridge.ULong = function (l) {
    if (this.constructor !== Bridge.ULong) {
        return new Bridge.ULong(l);
    }

    if (!Bridge.hasValue(l)) {
        l = 0;
    }

    this.T = Bridge.ULong;
    this.unsigned = true;
    this.value = Bridge.ULong.getValue(l, true);
}

Bridge.ULong.$$name = "Bridge.ULong";
Bridge.ULong.prototype.$$name = "Bridge.ULong";
Bridge.ULong.$$inherits = [];
Bridge.Class.addExtend(Bridge.ULong, [Bridge.IComparable, Bridge.IFormattable, Bridge.IComparable$1(Bridge.ULong), Bridge.IEquatable$1(Bridge.ULong)]);

Bridge.ULong.instanceOf = function (instance) {
    return instance instanceof Bridge.ULong;
};

Bridge.ULong.getDefaultValue = function () {
    return Bridge.ULong.Zero;
};

Bridge.ULong.getValue = function (l) {
    if (!Bridge.hasValue(l)) {
        return null;
    }

    if (l instanceof Bridge.$Long) {
        return l;
    }

    if (l instanceof Bridge.ULong) {
        return l.value;
    }

    if (l instanceof Bridge.Long) {
        return l.value.toUnsigned();
    }

    if (Bridge.isArray(l)) {
        return new Bridge.$Long(l[0], l[1], true);
    }

    if (Bridge.isString(l)) {
        return Bridge.$Long.fromString(l, true);
    }

    if (Bridge.isNumber(l)) {
        return Bridge.$Long.fromNumber(l, true);
    }

    if (l instanceof Bridge.Decimal) {
        return Bridge.$Long.fromString(l.toString(), true);
    }

    return Bridge.$Long.fromValue(l);
};

Bridge.ULong.create = function (l) {
    if (!Bridge.hasValue(l)) {
        return null;
    }

    if (l instanceof Bridge.ULong) {
        return l;
    }

    return new Bridge.ULong(l);
};

Bridge.ULong.lift = function (l) {
    if (!Bridge.hasValue(l)) {
        return null;
    }
    return Bridge.ULong.create(l);
};

Bridge.ULong.prototype.toString = Bridge.Long.prototype.toString;
Bridge.ULong.prototype.format = Bridge.Long.prototype.format;
Bridge.ULong.prototype.isNegative = Bridge.Long.prototype.isNegative;
Bridge.ULong.prototype.abs = Bridge.Long.prototype.abs;
Bridge.ULong.prototype.compareTo = Bridge.Long.prototype.compareTo;
Bridge.ULong.prototype.add = Bridge.Long.prototype.add;
Bridge.ULong.prototype.sub = Bridge.Long.prototype.sub;
Bridge.ULong.prototype.isZero = Bridge.Long.prototype.isZero;
Bridge.ULong.prototype.mul = Bridge.Long.prototype.mul;
Bridge.ULong.prototype.div = Bridge.Long.prototype.div;
Bridge.ULong.prototype.toNumberDivided = Bridge.Long.prototype.toNumberDivided;
Bridge.ULong.prototype.mod = Bridge.Long.prototype.mod;
Bridge.ULong.prototype.neg = Bridge.Long.prototype.neg;
Bridge.ULong.prototype.inc = Bridge.Long.prototype.inc;
Bridge.ULong.prototype.dec = Bridge.Long.prototype.dec;
Bridge.ULong.prototype.sign = Bridge.Long.prototype.sign;
Bridge.ULong.prototype.clone = Bridge.Long.prototype.clone;
Bridge.ULong.prototype.ne = Bridge.Long.prototype.ne;
Bridge.ULong.prototype.neq = Bridge.Long.prototype.neq;
Bridge.ULong.prototype.eq = Bridge.Long.prototype.eq;
Bridge.ULong.prototype.lt = Bridge.Long.prototype.lt;
Bridge.ULong.prototype.lte = Bridge.Long.prototype.lte;
Bridge.ULong.prototype.gt = Bridge.Long.prototype.gt;
Bridge.ULong.prototype.gte = Bridge.Long.prototype.gte;
Bridge.ULong.prototype.equals = Bridge.Long.prototype.equals;
Bridge.ULong.prototype.equalsT = Bridge.Long.prototype.equalsT;
Bridge.ULong.prototype.getHashCode = Bridge.Long.prototype.getHashCode;
Bridge.ULong.prototype.toNumber = Bridge.Long.prototype.toNumber;

Bridge.ULong.parse = function (str) {
    if (str == null) {
        throw new Bridge.ArgumentNullException("str");
    }

    if (!/^[+-]?[0-9]+$/.test(str)) {
        throw new Bridge.FormatException("Input string was not in a correct format.");
    }

    var result = new Bridge.ULong(str);

    if (result.value.isNegative()) {
        throw new Bridge.OverflowException();
    }

    if (str !== result.toString()) {
        throw new Bridge.OverflowException();
    }

    return result;
};

Bridge.ULong.tryParse = function (str, v) {
    try {
        if (str == null || !/^[+-]?[0-9]+$/.test(str)) {
            v.v = Bridge.ULong(Bridge.$Long.UZERO);
            return false;
        }

        v.v = new Bridge.ULong(str);

        if (v.v.isNegative()) {
            v.v = Bridge.ULong(Bridge.$Long.UZERO);
            return false;
        }

        if (str !== v.v.toString()) {
            v.v = Bridge.ULong(Bridge.$Long.UZERO);
            return false;
        }

        return true;
    } catch (e) {
        v.v = Bridge.ULong(Bridge.$Long.UZERO);
        return false;
    }
};

Bridge.ULong.min = function () {
    var values = [],
        min, i, len;

    for (i = 0, len = arguments.length; i < len; i++) {
        values.push(Bridge.ULong.getValue(arguments[i]));
    }

    i = 0;
    min = values[0];
    for (; ++i < values.length;) {
        if (values[i].lt(min)) {
            min = values[i];
        }
    }

    return new Bridge.ULong(min);
};

Bridge.ULong.max = function () {
    var values = [],
        max, i, len;

    for (i = 0, len = arguments.length; i < len; i++) {
        values.push(Bridge.ULong.getValue(arguments[i]));
    }

    i = 0;
    max = values[0];
    for (; ++i < values.length;) {
        if (values[i].gt(max)) {
            max = values[i];
        }
    }

    return new Bridge.ULong(max);
};

Bridge.ULong.divRem = function (a, b, result) {
    a = Bridge.ULong(a);
    b = Bridge.ULong(b);
    var remainder = a.mod(b);
    result.v = remainder;
    return a.sub(remainder).div(b);
};

Bridge.ULong.prototype.and = Bridge.Long.prototype.and;
Bridge.ULong.prototype.not = Bridge.Long.prototype.not;
Bridge.ULong.prototype.or = Bridge.Long.prototype.or;
Bridge.ULong.prototype.shl = Bridge.Long.prototype.shl;
Bridge.ULong.prototype.shr = Bridge.Long.prototype.shr;
Bridge.ULong.prototype.shru = Bridge.Long.prototype.shru;
Bridge.ULong.prototype.xor = Bridge.Long.prototype.xor;

Bridge.ULong.Zero = Bridge.ULong(Bridge.$Long.UZERO);
Bridge.ULong.MinValue = Bridge.ULong.Zero;
Bridge.ULong.MaxValue = Bridge.ULong(Bridge.$Long.MAX_UNSIGNED_VALUE);