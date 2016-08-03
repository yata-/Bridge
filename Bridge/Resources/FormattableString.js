    Bridge.define('System.FormattableString', {
        inherits: [System.IFormattable],
        format: function (_, provider) {
            return this.fmt(provider);
        },

        toString: function () {
            return this.fmt(System.Globalization.CultureInfo.getCurrentCulture());
        }            
    });

    Bridge.define('System.FormattableStringImpl', {
        inherits: [System.FormattableString],

        constructor: function (format, args) {
            this._format = format;
            this._args = args;
        },

        fmt: function (provider) {
            return System.String.formatProvider.apply(System.String, [provider, this._format].concat(this._args));
		},
		getArgumentCount: function () {
			return this._args.length;
		},
		getFormat: function () {
			return this._format;
		},
		getArgument: function (i) {
			return this._args[i];
		},
		getArguments: function () {
			return this._args;
		}
    });

    Bridge.define('System.FormattableStringFactory', {
        statics: {
            create: function (fmt, args) {
                return new System.FormattableStringImpl(fmt, args);
            }
        }        
    });