    // @source Exception.js

    Bridge.define("Bridge.Exception", {
        constructor: function (message, innerException) {
            this.message = message ? message : null;
            this.innerException = innerException ? innerException : null;
            this.errorStack = new Error();
            this.data = new Bridge.Dictionary$2(Object, Object)();
        },

        getMessage: function () {
            return this.message;
        },

        getInnerException: function () {
            return this.innerException;
        },

        getStackTrace: function () {
            return this.errorStack.stack;
        },

        getData: function () {
            return this.data;
        },

        toString: function () {
            return this.getMessage();
        },

        statics: {
            create: function (error) {
                if (Bridge.is(error, Bridge.Exception)) {
                    return error;
                }

                if (error instanceof TypeError) {
                    return new Bridge.NullReferenceException(error.message, new Bridge.ErrorException(error));
                } else if (error instanceof RangeError) {
                    return new Bridge.ArgumentOutOfRangeException(null, error.message, new Bridge.ErrorException(error));
                } else if (error instanceof Error) {
                    return new Bridge.ErrorException(error);
                } else {
                    return new Bridge.Exception(error ? error.toString() : null);
                }
            }
        }
    });

    Bridge.define("Bridge.SystemException", {
        inherits: [Bridge.Exception],

        constructor: function (message, innerException) {
            Bridge.Exception.prototype.$constructor.call(this, message || "System error.", innerException);
        }
    });

    Bridge.define("Bridge.OutOfMemoryException", {
        inherits: [Bridge.SystemException],

        constructor: function (message, innerException) {
            if (!message) {
                message = "Insufficient memory to continue the execution of the program.";
            }

            Bridge.SystemException.prototype.$constructor.call(this, message, innerException);
        }
    });

    Bridge.define("Bridge.IndexOutOfRangeException", {
        inherits: [Bridge.SystemException],

        constructor: function (message, innerException) {
            if (!message) {
                message = "Index was outside the bounds of the array.";
            }

            Bridge.SystemException.prototype.$constructor.call(this, message, innerException);
        }
    });

    Bridge.define("Bridge.TimeoutException", {
        inherits: [Bridge.SystemException],

        constructor: function (message, innerException) {
            if (!message) {
                message = "The operation has timed out.";
            }

            Bridge.SystemException.prototype.$constructor.call(this, message, innerException);
        }
    });

    Bridge.define("Bridge.RegexMatchTimeoutException", {
        inherits: [Bridge.TimeoutException],

        _regexInput: "",
        _regexPattern: "",
        _matchTimeout: null,
        config: {
            init: function () {
                this._matchTimeout = Bridge.TimeSpan.fromTicks(-1);
            }
        },

        constructor: function () {
            Bridge.TimeoutException.prototype.$constructor.call(this);
        },

        constructor$1: function (message) {
            Bridge.TimeoutException.prototype.$constructor.call(this, message);
        },

        constructor$2: function (message, innerException) {
            Bridge.TimeoutException.prototype.$constructor.call(this, message, innerException);
        },

        constructor$3: function (regexInput, regexPattern, matchTimeout) {
            this._regexInput = regexInput;
            this._regexPattern = regexPattern;
            this._matchTimeout = matchTimeout;

            var message = "The RegEx engine has timed out while trying to match a pattern to an input string. This can occur for many reasons, including very large inputs or excessive backtracking caused by nested quantifiers, back-references and other factors.";
            this.constructor$1(message);
        },

        getPattern: function () {
            return this._regexPattern;
        },

        getInput: function () {
            return this._regexInput;
        },

        getMatchTimeout: function () {
            return this._matchTimeout;
        }
    });

    Bridge.define("Bridge.ErrorException", {
        inherits: [Bridge.Exception],

        constructor: function (error) {
            Bridge.Exception.prototype.$constructor.call(this, error.message);
            this.errorStack = error;
            this.error = error;
        },

        getError: function () {
            return this.error;
        }
    });

    Bridge.define("Bridge.ArgumentException", {
        inherits: [Bridge.Exception],

        constructor: function (message, paramName, innerException) {
            Bridge.Exception.prototype.$constructor.call(this, message || "Value does not fall within the expected range.", innerException);
            this.paramName = paramName ? paramName : null;
        },

        getParamName: function () {
            return this.paramName;
        }
    });

    Bridge.define("Bridge.ArgumentNullException", {
        inherits: [Bridge.ArgumentException],

        constructor: function (paramName, message, innerException) {
            if (!message) {
                message = "Value cannot be null.";

                if (paramName) {
                    message += "\nParameter name: " + paramName;
                }
            }

            Bridge.ArgumentException.prototype.$constructor.call(this, message, paramName, innerException);
        }
    });

    Bridge.define("Bridge.ArgumentOutOfRangeException", {
        inherits: [Bridge.ArgumentException],

        constructor: function (paramName, message, innerException, actualValue) {
            if (!message) {
                message = "Value is out of range.";

                if (paramName) {
                    message += "\nParameter name: " + paramName;
                }
            }

            Bridge.ArgumentException.prototype.$constructor.call(this, message, paramName, innerException);

            this.actualValue = actualValue ? actualValue : null;
        },

        getActualValue: function () {
            return this.actualValue;
        }
    });

    Bridge.define("Bridge.CultureNotFoundException", {
        inherits: [Bridge.ArgumentException],

        constructor: function (paramName, invalidCultureName, message, innerException, invalidCultureId) {
            if (!message) {
                message = "Culture is not supported.";

                if (paramName) {
                    message += "\nParameter name: " + paramName;
                }

                if (invalidCultureName) {
                    message += "\n" + invalidCultureName + " is an invalid culture identifier.";
                }
            }

            Bridge.ArgumentException.prototype.$constructor.call(this, message, paramName, innerException);

            this.invalidCultureName = invalidCultureName ? invalidCultureName : null;
            this.invalidCultureId = invalidCultureId ? invalidCultureId : null;
        },

        getInvalidCultureName: function () {
            return this.invalidCultureName;
        },

        getInvalidCultureId: function () {
            return this.invalidCultureId;
        }
    });

    Bridge.define("Bridge.KeyNotFoundException", {
        inherits: [Bridge.Exception],

        constructor: function (message, innerException) {
            Bridge.Exception.prototype.$constructor.call(this, message || "Key not found.", innerException);
        }
    });

    Bridge.define("Bridge.ArithmeticException", {
        inherits: [Bridge.Exception],

        constructor: function (message, innerException) {
            Bridge.Exception.prototype.$constructor.call(this, message || "Overflow or underflow in the arithmetic operation.", innerException);
        }
    });

    Bridge.define("Bridge.DivideByZeroException", {
        inherits: [Bridge.ArithmeticException],

        constructor: function (message, innerException) {
            Bridge.ArithmeticException.prototype.$constructor.call(this, message || "Division by 0.", innerException);
        }
    });

    Bridge.define("Bridge.OverflowException", {
        inherits: [Bridge.ArithmeticException],

        constructor: function (message, innerException) {
            Bridge.ArithmeticException.prototype.$constructor.call(this, message || "Arithmetic operation resulted in an overflow.", innerException);
        }
    });

    Bridge.define("Bridge.FormatException", {
        inherits: [Bridge.Exception],

        constructor: function (message, innerException) {
            Bridge.Exception.prototype.$constructor.call(this, message || "Invalid format.", innerException);
        }
    });

    Bridge.define("Bridge.InvalidCastException", {
        inherits: [Bridge.Exception],

        constructor: function (message, innerException) {
            Bridge.Exception.prototype.$constructor.call(this, message || "The cast is not valid.", innerException);
        }
    });

    Bridge.define("Bridge.InvalidOperationException", {
        inherits: [Bridge.Exception],

        constructor: function (message, innerException) {
            Bridge.Exception.prototype.$constructor.call(this, message || "Operation is not valid due to the current state of the object.", innerException);
        }
    });

    Bridge.define("Bridge.NotImplementedException", {
        inherits: [Bridge.Exception],

        constructor: function (message, innerException) {
            Bridge.Exception.prototype.$constructor.call(this, message || "The method or operation is not implemented.", innerException);
        }
    });

    Bridge.define("Bridge.NotSupportedException", {
        inherits: [Bridge.Exception],

        constructor: function (message, innerException) {
            Bridge.Exception.prototype.$constructor.call(this, message || "Specified method is not supported.", innerException);
        }
    });

    Bridge.define("Bridge.NullReferenceException", {
        inherits: [Bridge.Exception],

        constructor: function (message, innerException) {
            Bridge.Exception.prototype.$constructor.call(this, message || "Object is null.", innerException);
        }
    });

    Bridge.define("Bridge.RankException", {
        inherits: [Bridge.Exception],

        constructor: function (message, innerException) {
            Bridge.Exception.prototype.$constructor.call(this, message || "Attempted to operate on an array with the incorrect number of dimensions.", innerException);
        }
    });

    Bridge.define("Bridge.PromiseException", {
        inherits: [Bridge.Exception],

        constructor: function (args, message, innerException) {
            Bridge.Exception.prototype.$constructor.call(this, message || (args.length && args[0] ? args[0].toString() : "An error occurred"), innerException);
            this.arguments = Bridge.Array.clone(args);
        },

        getArguments: function () {
            return this.arguments;
        }
    });

    Bridge.define("Bridge.OperationCanceledException", {
        inherits: [Bridge.Exception],

        constructor: function (message, token, innerException) {
            Bridge.Exception.prototype.$constructor.call(this, message || "Operation was canceled.", innerException);
            this.cancellationToken = token || Bridge.CancellationToken.none;
        }
    });

    Bridge.define("Bridge.TaskCanceledException", {
        inherits: [Bridge.OperationCanceledException],

        constructor: function (message, task, innerException) {
            Bridge.OperationCanceledException.prototype.$constructor.call(this, message || "A task was canceled.", null, innerException);
            this.task = task || null;
        }
    });

    Bridge.define("Bridge.AggregateException", {
        inherits: [Bridge.Exception],

        constructor: function (message, innerExceptions) {
            this.innerExceptions = new Bridge.ReadOnlyCollection$1(Bridge.Exception)(Bridge.hasValue(innerExceptions) ? Bridge.toArray(innerExceptions) : []);
            Bridge.Exception.prototype.$constructor.call(this, message || 'One or more errors occurred.', this.innerExceptions.items.length ? this.innerExceptions.items[0] : null);
        },

        handle: function (predicate) {
            if (!Bridge.hasValue(predicate)) {
                throw new Bridge.ArgumentNullException("predicate");
            }

            var count = this.innerExceptions.getCount(),
                unhandledExceptions = [];

            for (var i = 0; i < count; i++) {
                if (!predicate(this.innerExceptions.get(i))) {
                    unhandledExceptions.push(this.innerExceptions.get(i));
                }
            }

            if (unhandledExceptions.length > 0) {
                throw new Bridge.AggregateException(this.getMessage(), unhandledExceptions);
            }
        },

        flatten: function () {
            // Initialize a collection to contain the flattened exceptions.
            var flattenedExceptions = new Bridge.List$1(Bridge.Exception)();

            // Create a list to remember all aggregates to be flattened, this will be accessed like a FIFO queue
            var exceptionsToFlatten = new Bridge.List$1(Bridge.AggregateException)();
            exceptionsToFlatten.add(this);
            var nDequeueIndex = 0;

            // Continue removing and recursively flattening exceptions, until there are no more.
            while (exceptionsToFlatten.getCount() > nDequeueIndex) {
                // dequeue one from exceptionsToFlatten
                var currentInnerExceptions = exceptionsToFlatten.getItem(nDequeueIndex++).innerExceptions;

                for (var i = 0; i < currentInnerExceptions.getCount() ; i++) {
                    var currentInnerException = currentInnerExceptions.get(i);

                    if (!Bridge.hasValue(currentInnerException)) {
                        continue;
                    }

                    var currentInnerAsAggregate = Bridge.as(currentInnerException, Bridge.AggregateException);

                    // If this exception is an aggregate, keep it around for later.  Otherwise,
                    // simply add it to the list of flattened exceptions to be returned.
                    if (Bridge.hasValue(currentInnerAsAggregate)) {
                        exceptionsToFlatten.add(currentInnerAsAggregate);
                    }
                    else {
                        flattenedExceptions.add(currentInnerException);
                    }
                }
            }

            return new Bridge.AggregateException(this.getMessage(), flattenedExceptions);
        }
    });

    Bridge.define("Bridge.IndexOutOfRangeException", {
        inherits: [Bridge.SystemException],

        constructor: function (message, innerException) {
            if (!message) {
                message = "Index was outside the bounds of the array.";
            }

            Bridge.SystemException.prototype.$constructor.call(this, message, innerException);
        }
    });
