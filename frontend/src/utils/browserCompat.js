// Browser Compatibility Utilities
// Ensures the site works across all browsers including older ones

// Polyfill for Object.assign if needed
if (!Object.assign) {
  Object.defineProperty(Object, "assign", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (target) {
      if (target === undefined || target === null) {
        throw new TypeError("Cannot convert undefined or null to object");
      }

      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (Object.prototype.hasOwnProperty.call(source, nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;
    },
  });
}

// Polyfill for Array.from if needed
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === "function" || toStr.call(fn) === "[object Function]";
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    return function from(arrayLike) {
      var C = this;
      var items = Object(arrayLike);

      if (arrayLike == null) {
        throw new TypeError(
          "Array.from requires an array-like object - not null or undefined",
        );
      }

      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== "undefined") {
        if (!isCallable(mapFn)) {
          throw new TypeError(
            "Array.from: when provided, the second argument must be a function",
          );
        }
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      var len = toLength(items.length);
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);
      var k = 0;
      var kValue;

      while (k < len) {
        kValue = items[k];
        if (typeof mapFn === "undefined") {
          A[k] = typeof kValue === "undefined" ? null : kValue;
        } else {
          if (typeof T === "undefined") {
            A[k] =
              typeof mapFn === "function"
                ? mapFn(kValue, k)
                : mapFn.call(T, kValue, k);
          } else {
            A[k] =
              typeof mapFn === "function"
                ? mapFn(kValue, k)
                : mapFn.call(T, kValue, k);
          }
        }
        k += 1;
      }
      A.length = len;
      return A;
    };
  })();
}

// Fetch API polyfill detection
export const fetchSupported = () => {
  return typeof fetch !== "undefined";
};

// Promise polyfill detection
export const promiseSupported = () => {
  return typeof Promise !== "undefined";
};

// Check if browser is supported
export const isBrowserSupported = () => {
  return promiseSupported() && fetchSupported();
};

// Safe console logging that doesn't break on old IE
export const safeLog = (message, data) => {
  if (typeof console !== "undefined" && console.log) {
    if (data) {
      console.log(message, data);
    } else {
      console.log(message);
    }
  }
};

// Safe error handling
export const safeError = (message, error) => {
  if (typeof console !== "undefined" && console.error) {
    if (error) {
      console.error(message, error);
    } else {
      console.error(message);
    }
  }
};
