// Decimal.js
// A class for handling decimal numbers with JavaScript.
//
// License: MIT (see LICENCE.md)
//
// Instance methods:
//
// Constructor(v) [v: String/Number/Decimal]
// add(another)
// sub(another)
// mul(another)
// div(another)
// compareTo(another)
// isZero()
// toString()
// toFloat()
//
// Class method:
//
// round(obj, digits, mode)
//
// Sample:
//
// var a = new Decimal(0.1);
// var b = a.mul(0.2);  // b <- 0.02
// var c = b.sub(0.3);  // c <- -0.28
// var d = c.div(0.4);  // d <- -0.7
// var str = d.toString();  // str <- "0.7"
// var num = d.toFloat();  // num <- 0.7
//
if (typeof (global) === "undefined") {
    if (typeof (window) !== "undefined")
        global = window;
    else if (typeof (self) !== "undefined")
        global = self;
}
(function (global) {
    Bridge.define('Bridge.Decimal', {
        inherits: [Bridge.IComparable, Bridge.IFormattable],
        statics: {
            constructor: function() {
                Bridge.Decimal.Zero = Bridge.Decimal(0);
                Bridge.Decimal.One = Bridge.Decimal(1);
                Bridge.Decimal.MinusOne = Bridge.Decimal(-1);
            },

            getDefaultValue: function () {
                return Bridge.Decimal(0);
            },

            lift: function (d) {
                return d == null ? null : Bridge.Decimal(d);
            },

            pow: function (n, m) {
                var ret = 1;
                for (var i = 0; i < m; ++i) {
                    ret *= n;
                }
                return ret;
            },

            initConstants: function () {
                var tmp = "\\d{";
                tmp += Bridge.Decimal.decimal_digits_per_word;
                tmp += "}$";
                Bridge.Decimal.regexp_digits = new RegExp(tmp);
                Bridge.Decimal.one_word_zeros = "";
                for (var i = 0; i < Bridge.Decimal.decimal_digits_per_word - 1; ++i) {
                    Bridge.Decimal.one_word_zeros += "0";
                }
                Bridge.Decimal.zeros = "";
                for (var i = 0; i < Bridge.Decimal.decimal_digits - 1; ++i) {
                    Bridge.Decimal.zeros += "0";
                }

                Bridge.Decimal.constants_initialized = true;
            },

            fromData: function (sig, exp, is_minus) {
                var obj = new Bridge.Decimal();
                var orig_len = sig.length;
                var valid_num = Bridge.Decimal.countValidNum(sig);

                obj.exp = (exp < valid_num ? Bridge.Decimal.decimal_digits + exp - valid_num : Bridge.Decimal.decimal_digits);

                obj.is_minus = is_minus;

                if (obj.exp < -1) {
                    throw new Bridge.OverflowException();
                }

                var word_diff = Math.floor((exp - obj.exp + Bridge.Decimal.decimal_digits) /
                                           Bridge.Decimal.decimal_digits_per_word) - Bridge.Decimal.n;
                var digit_diff = exp - obj.exp - (word_diff *
                                                  Bridge.Decimal.decimal_digits_per_word);

                var to_div = Bridge.Decimal.pow(10, digit_diff);
                var to_mul = Bridge.Decimal.pow(10, (Bridge.Decimal.decimal_digits_per_word -
                                              digit_diff));

                for (var i = 0; i < Bridge.Decimal.n; ++i) {
                    var j = i + word_diff;
                    if (j >= 0 && j < orig_len) {
                        obj.sig[i] = Math.floor(sig[j] / to_div);
                    }
                    if (j + 1 >= 0 && j + 1 < orig_len) {
                        obj.sig[i] += (sig[j + 1] * to_mul) % Bridge.Decimal.one_word;
                    }
                }
                if (exp > obj.exp) {
                    var zero_flag = true;
                    for (var i = 0; i < word_diff + 1; ++i) {
                        if (i < word_diff) {
                            if (i && sig[i - 1]) {
                                zero_flag = false;
                            }
                        } else {
                            var last = (sig[i] * to_mul) % Bridge.Decimal.one_word;
                            if (i > 0) {
                                last += Math.floor(sig[i - 1] / to_div);
                                if (sig[i - 1] % to_div) {
                                    zero_flag = false;
                                }
                            }
                            if (last > Bridge.Decimal.one_word / 2) {
                                obj.sig[0] += 1;
                            } else if (last == Bridge.Decimal.one_word / 2) {
                                if (!zero_flag || obj.sig[0] % 2) {
                                    obj.sig[0] += 1;
                                }
                            }
                        }
                    }
                }

                if (obj.isZero()) {
                    obj.is_minus = false;
                }

                return obj;
            },

            round: function (obj, digits, mode) {
                var ret = new Bridge.Decimal(obj);
                var pos = obj.exp - digits;

                if (pos <= 0 || pos > Bridge.Decimal.decimal_digits || obj.isZero()) {
                    return ret;
                }

                var last_word_pos = Math.floor((pos - 1) / Bridge.Decimal.decimal_digits_per_word);
                var last_digit_pos = (pos - 1) % Bridge.Decimal.decimal_digits_per_word;
                var round_word_pos = Math.floor(pos / Bridge.Decimal.decimal_digits_per_word);
                var round_digit_pos = pos % Bridge.Decimal.decimal_digits_per_word;

                var tmp = Bridge.Decimal.pow(10, round_digit_pos);
                var last_digit_is_even = (Math.floor(obj.sig[round_word_pos] / tmp) % 2
                                          == 0);

                var round_up = false;
                var tmp2 = Bridge.Decimal.pow(10, last_digit_pos + 1);

                var zero_flag = true;

                for (var i = 0; i < last_word_pos; ++i) {
                    if (obj.sig[i]) {
                        zero_flag = false;
                        ret.sig[i] = 0;
                    }
                }

                var last_num = obj.sig[last_word_pos] % tmp2;

                if (mode == -2) {
                    round_up = last_num != 0;
                }
                else if (mode >= 0) {
                    if (last_num > tmp2 / 2) {
                        round_up = true;
                    } else if (last_num == tmp2 / 2) {
                        if (!zero_flag || !(last_digit_is_even &&
                                            mode == 0)) {
                            round_up = true;
                        }
                    }
                }

                ret.sig[last_word_pos] -= ret.sig[last_word_pos] % tmp2;

                if (round_up) {
                    ret.sig[round_word_pos] += tmp;
                    while (ret.sig[round_word_pos] == Bridge.Decimal.one_word) {
                        if (round_word_pos == Bridge.Decimal.n - 1) {
                            ret.sig[round_word_pos] /= 10;
                            --ret.exp;
                            break;
                        } else {
                            ret.sig[round_word_pos] = 0;
                        }
                        ++round_word_pos;
                        ++ret.sig[round_word_pos];
                    }
                }

                return ret;
            },
            countValidNum: function (sig) {
                for (var i = sig.length - 1; i >= 0; --i) {
                    var n = Bridge.Decimal.one_word;
                    for (var j = Bridge.Decimal.decimal_digits_per_word - 1; j >= 0; --j) {
                        n /= 10;
                        if (sig[i] >= n) {
                            return i * Bridge.Decimal.decimal_digits_per_word + j + 1;
                        }
                    }
                }

                return 1;
            },
            toInt: function (v) {
                if (!v) {
                    return null;
                }

                var i = Bridge.Int.trunc(v.toFloat());
                if (!Bridge.Int.instanceOf(i)) {
                    throw new Bridge.OverflowException();
                }

                return v;
            },
            min: function (a, b) {
                return a.compareTo(b) < 0 ? a : b;
            },
            max: function (a, b) {
                return a.compareTo(b) > 0 ? a : b;
            },
            tryParse: function (s, provider, v) {
                try {
                    v.v = new Bridge.Decimal(s, provider);
                    return true;
                }
                catch (e) {
                    v.v = new Bridge.Decimal(0);
                    return false;
                }
            },
            word_base: 16,
            decimal_digits_per_word: 7,
            n: 4,
            decimal_digits: 28,
            one_word: 1e7,
            two_words: 1e14
        },

        constructor: function (v, provider) {
            if (!this || this.constructor != Bridge.Decimal)  {
                return new Bridge.Decimal(v);
            }
            if (!v) {
                this.sig = Array(Bridge.Decimal.n);
                for (var i = 0; i < Bridge.Decimal.n; ++i) {
                    this.sig[i] = 0;
                }
                this.exp = 0;
                this.is_minus = false;
                return;
            }

            if (v instanceof Bridge.Decimal) {
                this.sig = v.sig.slice();
                this.exp = v.exp;
                this.is_minus = v.is_minus;
                return;
            }

            provider = provider || Bridge.CultureInfo.getCurrentCulture();
            var nfInfo = provider && provider.getFormat(Bridge.NumberFormatInfo);
            var v_str = "";
            if (typeof v === 'string') {
                v = v.replace(nfInfo ? nfInfo.numberDecimalSeparator : ".", ".");
                if (!/^\s*[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?\s*$/.test(v))
                    throw new Bridge.FormatException();
                v_str = v.replace(/\s/g, '');
            } else {
                v_str = v.toString();
            }

            this.is_minus = false;

            var ch = v_str.charAt(0);
            if (ch == "+" || ch == "-") {
                this.is_minus = (ch == "-");
                v_str = v_str.substring(1);
            }

            var exp = 0;
            var e_pos = v_str.indexOf("e");
            if (e_pos != -1) {
                exp = -parseInt(v_str.substring(e_pos + 1));
                v_str = v_str.substring(0, e_pos);
            }

            var point_pos = v_str.indexOf(".");
            if (point_pos != -1) {
                v_str = v_str.substring(0, point_pos) +
                    v_str.substring(point_pos + 1, v_str.length);
                exp += v_str.length - point_pos;
            }
            v_str = v_str.replace(/^0+/, "");

            var back_zero_count = Bridge.Decimal.decimal_digits -
            (v_str.length > exp ? v_str.length : exp);

            if (back_zero_count > 0) {
                for (var i = 0; i < back_zero_count; ++i) {
                    v_str += "0";
                }
                exp += back_zero_count;
            }

            if (v_str.length - exp > Bridge.Decimal.decimal_digits) {
                throw new Bridge.OverflowException();
            }
            if (v_str.length < Bridge.Decimal.decimal_digits) {
                var tmp = "";
                for (var i = 0; i < (Bridge.Decimal.decimal_digits - v_str.length) ; ++i) {
                    tmp += "0";
                }
                v_str = tmp + v_str;
            }

            this.exp = exp;
            if (exp < -1) {
                throw new Bridge.OverflowException();
            }

            this.sig = Array();
            for (var i = 0; i < Bridge.Decimal.n; ++i) {
                this.sig.unshift(parseFloat(v_str.substring(i * Bridge.Decimal.decimal_digits_per_word, (i + 1) * Bridge.Decimal.decimal_digits_per_word)));
            }

            if (this.isZero()) {
                this.is_minus = false;
            }
        },

        toString: function (format, provider) {
            if (!format && !provider) {
                if (this.isZero()) {
                    return "0";
                }

                if (!Bridge.Decimal.constants_initialized) {
                    Bridge.Decimal.initConstants();
                }

                var str_sig = "";
                for (var i = Bridge.Decimal.n - 1; i >= 0; --i) {
                    (Bridge.Decimal.zeros + this.sig[i]).match(Bridge.Decimal.regexp_digits);
                    str_sig += RegExp.lastMatch;
                }

                if (this.exp > 0) {
                    str_sig = str_sig.substring(0, Bridge.Decimal.decimal_digits - this.exp) +
                    "." + str_sig.substring(Bridge.Decimal.decimal_digits - this.exp);
                    str_sig = str_sig.replace(/\.?0+$/, "");
                }
                str_sig = str_sig.replace(/^0+/, "");

                if (str_sig.charAt(0) == ".") {
                    str_sig = "0" + str_sig;
                }

                if (this.exp == -1) {
                    str_sig += "0";
                }

                return (this.is_minus ? "-" : "") + str_sig;    
            }

            return Bridge.Int.format(this.toFloat(), format, provider);
        },

        toFloat: function () {
            return parseFloat(this.toString());
        },

        format: function (fmt, provider) {
            return this.toString(fmt, provider);
        },

        compareTo: function (another) {
            var another_decimal = (another instanceof Bridge.Decimal ? another :
                                   new Bridge.Decimal(another));
            var this_sign = this.is_minus ? -1 : 1;
            if (this.is_minus != another_decimal.is_minus) {
                return this_sign;
            }
            return this.absCompare(another_decimal) * this_sign;
        },

        absCompare: function (another) {
            var this_is_zero = this.isZero();
            var another_is_zero = another.isZero();
            if (this_is_zero && another_is_zero) {
                return 0;
            }
            if (this_is_zero != another_is_zero) {
                return another_is_zero - this_is_zero;
            }
            var exp_cmp = another.exp - this.exp;
            if (exp_cmp) {
                return exp_cmp;
            }
            for (var i = Bridge.Decimal.n - 1; i >= 0; --i) {
                var sig_cmp = this.sig[i] - another.sig[i];
                if (sig_cmp) {
                    return sig_cmp;
                }
            }
            return 0;
        },

        absAddSub: function (smaller, is_sub) {
            if (smaller.isZero()) {
                return new Bridge.Decimal(this);
            }

            var word_diff = Math.floor((smaller.exp - this.exp) /
                                       Bridge.Decimal.decimal_digits_per_word);
            var mul = Bridge.Decimal.pow(10, ((smaller.exp - this.exp) %
                                       Bridge.Decimal.decimal_digits_per_word));
            var sign = is_sub ? -1 : 1;
            var carry = is_sub ? Bridge.Decimal.one_word : 0;
            var adjustment = is_sub ? Bridge.Decimal.two_words - Bridge.Decimal.one_word : 0;

            var count = Bridge.Decimal.n + word_diff + 1;
            var sig = Array(count);

            for (var i = 0; i < count; ++i) {
                sig[i] = carry + adjustment;

                if (i >= word_diff && i - word_diff < Bridge.Decimal.n) {
                    sig[i] += this.sig[i - word_diff] * mul;
                }

                if (i < Bridge.Decimal.n) {
                    sig[i] += smaller.sig[i] * sign;
                }

                carry = Math.floor(sig[i] / Bridge.Decimal.one_word);
                sig[i] %= Bridge.Decimal.one_word;
            }

            return Bridge.Decimal.fromData(sig, smaller.exp, this.is_minus);
        },
        validWords: function () {
            for (var i = this.sig.length - 1; i >= 0; --i) {
                if (this.sig[i]) {
                    return i + 1;
                }
            }
            return 1;
        },

        addSub: function (another, is_sub) {
            var another_decimal = (another instanceof Bridge.Decimal ? another : new Bridge.Decimal(another));
            var abs_smaller;
            var abs_larger;
            var ret_is_minus;
            var abs_compare = this.absCompare(another_decimal);

            if (abs_compare < 0) {
                abs_smaller = this;
                abs_larger = another_decimal;
                ret_is_minus = (another_decimal.is_minus != is_sub);
            } else {
                abs_smaller = another_decimal;
                abs_larger = this;
                ret_is_minus = this.is_minus;
            }

            var is_abs_sub = (abs_smaller.is_minus == abs_larger.is_minus) == is_sub;
            if (is_abs_sub && abs_compare == 0) {
                return new Bridge.Decimal(0);
            }

            var ret = abs_larger.absAddSub(abs_smaller, is_abs_sub);

            ret.is_minus = ret_is_minus;

            return ret;
        },

        add: function (another) {
            return this.addSub(another, false);
        },

        sub: function (another) {
            return this.addSub(another, true);
        },

        inc: function () {
            return this.addSub(1, false);
        },

        dec: function () {
            return this.addSub(1, true);
        },

        isZero: function () {
            for (var i = 0; i < Bridge.Decimal.n; ++i) {
                if (this.sig[i]) {
                    return false;
                }
            }
            return true;
        },

        mul: function (another) {
            var another_decimal = (another instanceof Bridge.Decimal ? another :
                                   new Bridge.Decimal(another));

            if (this.isZero() || another_decimal.isZero()) {
                return Bridge.Decimal(0);
            }

            var sig = Array(Bridge.Decimal.n * 2);
            for (var i = 0; i < Bridge.Decimal.n * 2; ++i) {
                sig[i] = 0;
            }

            for (var i = 0; i < Bridge.Decimal.n; ++i) {
                for (var j = 0; j < Bridge.Decimal.n; ++j) {
                    var result = sig[i + j] + this.sig[i] * another_decimal.sig[j];
                    sig[i + j] = result % Bridge.Decimal.one_word
                    sig[i + j + 1] += Math.floor(result / Bridge.Decimal.one_word);
                }
            }
            var is_minus = (this.is_minus != another_decimal.is_minus);
            return Bridge.Decimal.fromData(sig, this.exp + another_decimal.exp, is_minus);
        },

        div: function (another) {
            var another_decimal = (another instanceof Bridge.Decimal ? another :
                                   new Bridge.Decimal(another));

            if (another_decimal.isZero()) {
                throw new Bridge.DivideByZeroException();
            }

            var added = Bridge.Decimal.n * 2;
            var this_sig = Array(added);
            for (var i = 0; i < added; ++i) {
                this_sig[i] = 0;
            }
            this_sig = this_sig.concat(this.sig);

            var this_v = this.validWords() + added;
            var another_v = another_decimal.validWords();
            var another_exp = another_decimal.exp;

            var another_sig = another_decimal.sig.slice();
            if (another_v == 1) {
                another_sig.unshift(0);
                ++another_v;
                another_exp += Bridge.Decimal.decimal_digits_per_word;
            }

            var result_len = Bridge.Decimal.n + 2;
            var result_sig = Array(result_len);

            for (var i = 0; i < result_len; ++i) {
                result_sig[i] = 0;
            }

            var result_v = 0;

            for (var i = 0; i < result_len; ++i) {
                var ind = this_v - i - 1;
                var tmp1 = this_sig[ind];

                if (i) {
                    tmp1 += this_sig[ind + 1] * Bridge.Decimal.one_word;
                }

                var result = Math.floor(tmp1 / another_sig[another_v - 1]);

                var tmp2 = ((tmp1 - another_sig[another_v - 1] * result) *
                            Bridge.Decimal.one_word + this_sig[ind - 1] +
                            (Bridge.Decimal.two_words - another_sig[another_v - 2] * result));

                if (tmp2 < Bridge.Decimal.two_words) {
                    result -= Math.floor((Bridge.Decimal.two_words - 1 - tmp2) /
                                         (another_sig[another_v - 1]
                                          * Bridge.Decimal.one_word +
                                          another_sig[another_v - 2])) + 1;
                }

                // multiply and subtract
                var carry = Bridge.Decimal.one_word;
                for (var j = 0; j < another_v + 1; ++j) {
                    var ind2 = (added - i + j -
                                (Bridge.Decimal.n - (this_v - added)) +
                                (Bridge.Decimal.n - another_v));

                    if (ind2 >= this_v) {
                        break;
                    }

                    this_sig[ind2] += (Bridge.Decimal.two_words - Bridge.Decimal.one_word + carry);

                    if (j < another_v) {
                        this_sig[ind2] -= another_sig[j] * result;
                    }

                    carry = Math.floor(this_sig[ind2] / Bridge.Decimal.one_word);
                    this_sig[ind2] %= Bridge.Decimal.one_word;
                }

                if (carry < Bridge.Decimal.one_word) {
                    // subtracted too much, add back
                    result -= 1;
                    carry = 0;

                    for (j = 0; j < another_v; ++j) {
                        var ind2 = this_v - i - another_v + j;
                        this_sig[ind2] += carry + another_sig[j];
                        carry = Math.floor(this_sig[ind2] / Bridge.Decimal.one_word);
                        this_sig[ind2] %= Bridge.Decimal.one_word;
                    }
                }
                result_sig[result_len - 1 - i] = result;

                // increment valid_words of the result
                if (result || result_v) {
                    ++result_v;
                }

                // stop if we've computed enough words
                if (result_v > Bridge.Decimal.n) {
                    break;
                }
            }
            // if the remainder isn't zero, add one to the result
            // in order to prevent an erroneous round off
            for (var i = 0; i < this_sig.length; ++i) {
                if (this_sig[i]) {
                    result_sig[0] += 1;
                    break;
                }
            }

            var result_exp = (this.exp - another_decimal.exp +
                              (another_v - (this_v - added) + Bridge.Decimal.n + 1) *
                              Bridge.Decimal.decimal_digits_per_word);

            return Bridge.Decimal.fromData(result_sig, result_exp,
                                    this.is_minus != another_decimal.is_minus);
        },

        mod: function (other) {
            var a = this.abs(), b = other.abs();
            var r = a.sub(a.div(b).floor().mul(b));
            r.is_minus = this.is_minus;
            return r;
        },

        abs: function () {
            var r = new Bridge.Decimal(this);
            r.is_minus = false;
            return r;
        },

        floor: function () {
            return Bridge.Decimal.round(this, 0, this.is_minus ? -2 : -1);
        },

        ceil: function () {
            return Bridge.Decimal.round(this, 0, this.is_minus ? -1 : -2);
        },

        trunc: function () {
            return Bridge.Decimal.round(this, 0, -1);
        },

        sign: function () {
            return this.isZero() ? 0 : (this.is_minus ? -1 : 1);
        },

        clone: function () {
            return new Bridge.Decimal(this);
        },

        neg: function () {
            var v = new Bridge.Decimal(this);
            v.is_minus = !v.is_minus && !v.isZero();
            return v;
        },

        ne: function (v) {
            return !!this.compareTo(v);
        },

        lt: function (v) {
            return this.compareTo(v) < 0;
        },

        lte: function (v) {
            return this.compareTo(v) <= 0;
        },

        gt: function (v) {
            return this.compareTo(v) > 0;
        },

        gte: function (v) {
            return this.compareTo(v) >= 0;
        },

        equals: function (v) {
            return !this.compareTo(v);
        },

        equalsT: function (v) {
            return !this.compareTo(v);
        },

        getHashCode: function () {
            var n = (this.is_minus * 397 + this.exp) | 0;
            for (var i = 0; i < this.sig.length; i++) {
                n = (n * 397 + this.sig[i]) | 0;
            }
            return n;
        }
    });

    Bridge.Class.addExtend(Bridge.Decimal, [Bridge.IComparable$1(Bridge.Decimal), Bridge.IEquatable$1(Bridge.Decimal)]);
})(global);
