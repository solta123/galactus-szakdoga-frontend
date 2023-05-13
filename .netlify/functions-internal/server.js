var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all3) => {
  for (var name in all3)
    __defProp(target, name, { get: all3[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min_default = "/build/_assets/bootstrap.min-255VSQKL.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: bootstrap_min_default }];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/details.$filename.tsx
var details_filename_exports = {};
__export(details_filename_exports, {
  default: () => DetailsRoute,
  loader: () => loader
});
var import_react3 = require("@remix-run/react"), import_node3 = require("@remix-run/node");

// app/utils/get-cookie.ts
var getCookie = (value, name) => {
  if (!value)
    return null;
  let cookieArr = value.split(";");
  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split("=");
    if (name == cookiePair[0].trim())
      return decodeURIComponent(cookiePair[1]);
  }
  return null;
};

// node_modules/axios/lib/helpers/bind.js
function bind(fn, thisArg) {
  return function() {
    return fn.apply(thisArg, arguments);
  };
}

// node_modules/axios/lib/utils.js
var { toString } = Object.prototype, { getPrototypeOf } = Object, kindOf = ((cache) => (thing) => {
  let str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), kindOfTest = (type) => (type = type.toLowerCase(), (thing) => kindOf(thing) === type), typeOfTest = (type) => (thing) => typeof thing === type, { isArray } = Array, isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
var isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? result = ArrayBuffer.isView(val) : result = val && val.buffer && isArrayBuffer(val.buffer), result;
}
var isString = typeOfTest("string"), isFunction = typeOfTest("function"), isNumber = typeOfTest("number"), isObject = (thing) => thing !== null && typeof thing == "object", isBoolean = (thing) => thing === !0 || thing === !1, isPlainObject = (val) => {
  if (kindOf(val) !== "object")
    return !1;
  let prototype3 = getPrototypeOf(val);
  return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}, isDate = kindOfTest("Date"), isFile = kindOfTest("File"), isBlob = kindOfTest("Blob"), isFileList = kindOfTest("FileList"), isStream = (val) => isObject(val) && isFunction(val.pipe), isFormData = (thing) => {
  let kind;
  return thing && (typeof FormData == "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
  kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
}, isURLSearchParams = kindOfTest("URLSearchParams"), trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = !1 } = {}) {
  if (obj === null || typeof obj > "u")
    return;
  let i, l;
  if (typeof obj != "object" && (obj = [obj]), isArray(obj))
    for (i = 0, l = obj.length; i < l; i++)
      fn.call(null, obj[i], i, obj);
  else {
    let keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj), len = keys.length, key;
    for (i = 0; i < len; i++)
      key = keys[i], fn.call(null, obj[key], key, obj);
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  let keys = Object.keys(obj), i = keys.length, _key;
  for (; i-- > 0; )
    if (_key = keys[i], key === _key.toLowerCase())
      return _key;
  return null;
}
var _global = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  let { caseless } = isContextDefined(this) && this || {}, result = {}, assignValue = (val, key) => {
    let targetKey = caseless && findKey(result, key) || key;
    isPlainObject(result[targetKey]) && isPlainObject(val) ? result[targetKey] = merge(result[targetKey], val) : isPlainObject(val) ? result[targetKey] = merge({}, val) : isArray(val) ? result[targetKey] = val.slice() : result[targetKey] = val;
  };
  for (let i = 0, l = arguments.length; i < l; i++)
    arguments[i] && forEach(arguments[i], assignValue);
  return result;
}
var extend = (a, b, thisArg, { allOwnKeys } = {}) => (forEach(b, (val, key) => {
  thisArg && isFunction(val) ? a[key] = bind(val, thisArg) : a[key] = val;
}, { allOwnKeys }), a), stripBOM = (content) => (content.charCodeAt(0) === 65279 && (content = content.slice(1)), content), inherits = (constructor, superConstructor, props, descriptors2) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2), constructor.prototype.constructor = constructor, Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  }), props && Object.assign(constructor.prototype, props);
}, toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props, i, prop, merged = {};
  if (destObj = destObj || {}, sourceObj == null)
    return destObj;
  do {
    for (props = Object.getOwnPropertyNames(sourceObj), i = props.length; i-- > 0; )
      prop = props[i], (!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop] && (destObj[prop] = sourceObj[prop], merged[prop] = !0);
    sourceObj = filter2 !== !1 && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
}, endsWith = (str, searchString, position) => {
  str = String(str), (position === void 0 || position > str.length) && (position = str.length), position -= searchString.length;
  let lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}, toArray = (thing) => {
  if (!thing)
    return null;
  if (isArray(thing))
    return thing;
  let i = thing.length;
  if (!isNumber(i))
    return null;
  let arr = new Array(i);
  for (; i-- > 0; )
    arr[i] = thing[i];
  return arr;
}, isTypedArray = ((TypedArray) => (thing) => TypedArray && thing instanceof TypedArray)(typeof Uint8Array < "u" && getPrototypeOf(Uint8Array)), forEachEntry = (obj, fn) => {
  let iterator = (obj && obj[Symbol.iterator]).call(obj), result;
  for (; (result = iterator.next()) && !result.done; ) {
    let pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}, matchAll = (regExp, str) => {
  let matches, arr = [];
  for (; (matches = regExp.exec(str)) !== null; )
    arr.push(matches);
  return arr;
}, isHTMLForm = kindOfTest("HTMLFormElement"), toCamelCase = (str) => str.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(m, p1, p2) {
    return p1.toUpperCase() + p2;
  }
), hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype), isRegExp = kindOfTest("RegExp"), reduceDescriptors = (obj, reducer) => {
  let descriptors2 = Object.getOwnPropertyDescriptors(obj), reducedDescriptors = {};
  forEach(descriptors2, (descriptor, name) => {
    reducer(descriptor, name, obj) !== !1 && (reducedDescriptors[name] = descriptor);
  }), Object.defineProperties(obj, reducedDescriptors);
}, freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1)
      return !1;
    let value = obj[name];
    if (isFunction(value)) {
      if (descriptor.enumerable = !1, "writable" in descriptor) {
        descriptor.writable = !1;
        return;
      }
      descriptor.set || (descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      });
    }
  });
}, toObjectSet = (arrayOrString, delimiter) => {
  let obj = {}, define = (arr) => {
    arr.forEach((value) => {
      obj[value] = !0;
    });
  };
  return isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter)), obj;
}, noop = () => {
}, toFiniteNumber = (value, defaultValue) => (value = +value, Number.isFinite(value) ? value : defaultValue), ALPHA = "abcdefghijklmnopqrstuvwxyz", DIGIT = "0123456789", ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}, generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = "", { length } = alphabet;
  for (; size--; )
    str += alphabet[Math.random() * length | 0];
  return str;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
var toJSONObject = (obj) => {
  let stack = new Array(10), visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0)
        return;
      if (!("toJSON" in source)) {
        stack[i] = source;
        let target = isArray(source) ? [] : {};
        return forEach(source, (value, key) => {
          let reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        }), stack[i] = void 0, target;
      }
    }
    return source;
  };
  return visit(obj, 0);
}, isAsyncFn = kindOfTest("AsyncFunction"), isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch), utils_default = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
};

// node_modules/axios/lib/core/AxiosError.js
function AxiosError(message, code, config, request, response) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = message, this.name = "AxiosError", code && (this.code = code), config && (this.config = config), request && (this.request = request), response && (this.response = response);
}
utils_default.inherits(AxiosError, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils_default.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var prototype = AxiosError.prototype, descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", { value: !0 });
AxiosError.from = (error, code, config, request, response, customProps) => {
  let axiosError = Object.create(prototype);
  return utils_default.toFlatObject(error, axiosError, function(obj) {
    return obj !== Error.prototype;
  }, (prop) => prop !== "isAxiosError"), AxiosError.call(axiosError, error.message, code, config, request, response), axiosError.cause = error, axiosError.name = error.name, customProps && Object.assign(axiosError, customProps), axiosError;
};
var AxiosError_default = AxiosError;

// node_modules/axios/lib/platform/node/classes/FormData.js
var import_form_data = __toESM(require("form-data"), 1), FormData_default = import_form_data.default;

// node_modules/axios/lib/helpers/toFormData.js
function isVisitable(thing) {
  return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
}
function removeBrackets(key) {
  return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  return path ? path.concat(key).map(function(token, i) {
    return token = removeBrackets(token), !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "") : key;
}
function isFlatArray(arr) {
  return utils_default.isArray(arr) && !arr.some(isVisitable);
}
var predicates = utils_default.toFlatObject(utils_default, {}, null, function(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData(obj, formData, options) {
  if (!utils_default.isObject(obj))
    throw new TypeError("target must be an object");
  formData = formData || new (FormData_default || FormData)(), options = utils_default.toFlatObject(options, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(option, source) {
    return !utils_default.isUndefined(source[option]);
  });
  let metaTokens = options.metaTokens, visitor = options.visitor || defaultVisitor, dots = options.dots, indexes = options.indexes, useBlob = (options.Blob || typeof Blob < "u" && Blob) && utils_default.isSpecCompliantForm(formData);
  if (!utils_default.isFunction(visitor))
    throw new TypeError("visitor must be a function");
  function convertValue(value) {
    if (value === null)
      return "";
    if (utils_default.isDate(value))
      return value.toISOString();
    if (!useBlob && utils_default.isBlob(value))
      throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
    return utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value) ? useBlob && typeof Blob == "function" ? new Blob([value]) : Buffer.from(value) : value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value == "object") {
      if (utils_default.endsWith(key, "{}"))
        key = metaTokens ? key : key.slice(0, -2), value = JSON.stringify(value);
      else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value)))
        return key = removeBrackets(key), arr.forEach(function(el, index) {
          !(utils_default.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === !0 ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        }), !1;
    }
    return isVisitable(value) ? !0 : (formData.append(renderKey(path, key, dots), convertValue(value)), !1);
  }
  let stack = [], exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (!utils_default.isUndefined(value)) {
      if (stack.indexOf(value) !== -1)
        throw Error("Circular reference detected in " + path.join("."));
      stack.push(value), utils_default.forEach(value, function(el, key) {
        (!(utils_default.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils_default.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        )) === !0 && build(el, path ? path.concat(key) : [key]);
      }), stack.pop();
    }
  }
  if (!utils_default.isObject(obj))
    throw new TypeError("data must be an object");
  return build(obj), formData;
}
var toFormData_default = toFormData;

// node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function encode(str) {
  let charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [], params && toFormData_default(params, this, options);
}
var prototype2 = AxiosURLSearchParams.prototype;
prototype2.append = function(name, value) {
  this._pairs.push([name, value]);
};
prototype2.toString = function(encoder) {
  let _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;
  return this._pairs.map(function(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
var AxiosURLSearchParams_default = AxiosURLSearchParams;

// node_modules/axios/lib/helpers/buildURL.js
function encode2(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url2, params, options) {
  if (!params)
    return url2;
  let _encode = options && options.encode || encode2, serializeFn = options && options.serialize, serializedParams;
  if (serializeFn ? serializedParams = serializeFn(params, options) : serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode), serializedParams) {
    let hashmarkIndex = url2.indexOf("#");
    hashmarkIndex !== -1 && (url2 = url2.slice(0, hashmarkIndex)), url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url2;
}

// node_modules/axios/lib/core/InterceptorManager.js
var InterceptorManager = class {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    return this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : !1,
      runWhen: options ? options.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    this.handlers[id] && (this.handlers[id] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils_default.forEach(this.handlers, function(h) {
      h !== null && fn(h);
    });
  }
}, InterceptorManager_default = InterceptorManager;

// node_modules/axios/lib/defaults/transitional.js
var transitional_default = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
};

// node_modules/axios/lib/platform/node/classes/URLSearchParams.js
var import_url = __toESM(require("url"), 1), URLSearchParams_default = import_url.default.URLSearchParams;

// node_modules/axios/lib/platform/node/index.js
var node_default = {
  isNode: !0,
  classes: {
    URLSearchParams: URLSearchParams_default,
    FormData: FormData_default,
    Blob: typeof Blob < "u" && Blob || null
  },
  protocols: ["http", "https", "file", "data"]
};

// node_modules/axios/lib/helpers/toURLEncodedForm.js
function toURLEncodedForm(data, options) {
  return toFormData_default(data, new node_default.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      return node_default.isNode && utils_default.isBuffer(value) ? (this.append(key, value.toString("base64")), !1) : helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

// node_modules/axios/lib/helpers/formDataToJSON.js
function parsePropPath(name) {
  return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => match[0] === "[]" ? "" : match[1] || match[0]);
}
function arrayToObject(arr) {
  let obj = {}, keys = Object.keys(arr), i, len = keys.length, key;
  for (i = 0; i < len; i++)
    key = keys[i], obj[key] = arr[key];
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++], isNumericKey = Number.isFinite(+name), isLast = index >= path.length;
    return name = !name && utils_default.isArray(target) ? target.length : name, isLast ? (utils_default.hasOwnProp(target, name) ? target[name] = [target[name], value] : target[name] = value, !isNumericKey) : ((!target[name] || !utils_default.isObject(target[name])) && (target[name] = []), buildPath(path, value, target[name], index) && utils_default.isArray(target[name]) && (target[name] = arrayToObject(target[name])), !isNumericKey);
  }
  if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
    let obj = {};
    return utils_default.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    }), obj;
  }
  return null;
}
var formDataToJSON_default = formDataToJSON;

// node_modules/axios/lib/defaults/index.js
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": void 0
};
function stringifySafely(rawValue, parser, encoder) {
  if (utils_default.isString(rawValue))
    try {
      return (parser || JSON.parse)(rawValue), utils_default.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError")
        throw e;
    }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional: transitional_default,
  adapter: ["xhr", "http"],
  transformRequest: [function(data, headers) {
    let contentType = headers.getContentType() || "", hasJSONContentType = contentType.indexOf("application/json") > -1, isObjectPayload = utils_default.isObject(data);
    if (isObjectPayload && utils_default.isHTMLForm(data) && (data = new FormData(data)), utils_default.isFormData(data))
      return hasJSONContentType && hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
    if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data))
      return data;
    if (utils_default.isArrayBufferView(data))
      return data.buffer;
    if (utils_default.isURLSearchParams(data))
      return headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), data.toString();
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1)
        return toURLEncodedForm(data, this.formSerializer).toString();
      if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        let _FormData = this.env && this.env.FormData;
        return toFormData_default(
          isFileList2 ? { "files[]": data } : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    return isObjectPayload || hasJSONContentType ? (headers.setContentType("application/json", !1), stringifySafely(data)) : data;
  }],
  transformResponse: [function(data) {
    let transitional2 = this.transitional || defaults.transitional, forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing, JSONRequested = this.responseType === "json";
    if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      let strictJSONParsing = !(transitional2 && transitional2.silentJSONParsing) && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing)
          throw e.name === "SyntaxError" ? AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response) : e;
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: node_default.classes.FormData,
    Blob: node_default.classes.Blob
  },
  validateStatus: function(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
utils_default.forEach(["delete", "get", "head"], function(method) {
  defaults.headers[method] = {};
});
utils_default.forEach(["post", "put", "patch"], function(method) {
  defaults.headers[method] = utils_default.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_default = defaults;

// node_modules/axios/lib/helpers/parseHeaders.js
var ignoreDuplicateOf = utils_default.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), parseHeaders_default = (rawHeaders) => {
  let parsed = {}, key, val, i;
  return rawHeaders && rawHeaders.split(`
`).forEach(function(line) {
    i = line.indexOf(":"), key = line.substring(0, i).trim().toLowerCase(), val = line.substring(i + 1).trim(), !(!key || parsed[key] && ignoreDuplicateOf[key]) && (key === "set-cookie" ? parsed[key] ? parsed[key].push(val) : parsed[key] = [val] : parsed[key] = parsed[key] ? parsed[key] + ", " + val : val);
  }), parsed;
};

// node_modules/axios/lib/core/AxiosHeaders.js
var $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  return value === !1 || value == null ? value : utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  let tokens = /* @__PURE__ */ Object.create(null), tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, match;
  for (; match = tokensRE.exec(str); )
    tokens[match[1]] = match[2];
  return tokens;
}
var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils_default.isFunction(filter2))
    return filter2.call(this, value, header);
  if (isHeaderNameFilter && (value = header), !!utils_default.isString(value)) {
    if (utils_default.isString(filter2))
      return value.indexOf(filter2) !== -1;
    if (utils_default.isRegExp(filter2))
      return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => char.toUpperCase() + str);
}
function buildAccessors(obj, header) {
  let accessorName = utils_default.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: !0
    });
  });
}
var AxiosHeaders = class {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    let self2 = this;
    function setHeader(_value, _header, _rewrite) {
      let lHeader = normalizeHeader(_header);
      if (!lHeader)
        throw new Error("header name must be a non-empty string");
      let key = utils_default.findKey(self2, lHeader);
      (!key || self2[key] === void 0 || _rewrite === !0 || _rewrite === void 0 && self2[key] !== !1) && (self2[key || _header] = normalizeValue(_value));
    }
    let setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    return utils_default.isPlainObject(header) || header instanceof this.constructor ? setHeaders(header, valueOrRewrite) : utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header) ? setHeaders(parseHeaders_default(header), valueOrRewrite) : header != null && setHeader(valueOrRewrite, header, rewrite), this;
  }
  get(header, parser) {
    if (header = normalizeHeader(header), header) {
      let key = utils_default.findKey(this, header);
      if (key) {
        let value = this[key];
        if (!parser)
          return value;
        if (parser === !0)
          return parseTokens(value);
        if (utils_default.isFunction(parser))
          return parser.call(this, value, key);
        if (utils_default.isRegExp(parser))
          return parser.exec(value);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    if (header = normalizeHeader(header), header) {
      let key = utils_default.findKey(this, header);
      return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return !1;
  }
  delete(header, matcher) {
    let self2 = this, deleted = !1;
    function deleteHeader(_header) {
      if (_header = normalizeHeader(_header), _header) {
        let key = utils_default.findKey(self2, _header);
        key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher)) && (delete self2[key], deleted = !0);
      }
    }
    return utils_default.isArray(header) ? header.forEach(deleteHeader) : deleteHeader(header), deleted;
  }
  clear(matcher) {
    let keys = Object.keys(this), i = keys.length, deleted = !1;
    for (; i--; ) {
      let key = keys[i];
      (!matcher || matchHeaderValue(this, this[key], key, matcher, !0)) && (delete this[key], deleted = !0);
    }
    return deleted;
  }
  normalize(format) {
    let self2 = this, headers = {};
    return utils_default.forEach(this, (value, header) => {
      let key = utils_default.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value), delete self2[header];
        return;
      }
      let normalized = format ? formatHeader(header) : String(header).trim();
      normalized !== header && delete self2[header], self2[normalized] = normalizeValue(value), headers[normalized] = !0;
    }), this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    let obj = /* @__PURE__ */ Object.create(null);
    return utils_default.forEach(this, (value, header) => {
      value != null && value !== !1 && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
    }), obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    let computed = new this(first);
    return targets.forEach((target) => computed.set(target)), computed;
  }
  static accessor(header) {
    let accessors = (this[$internals] = this[$internals] = {
      accessors: {}
    }).accessors, prototype3 = this.prototype;
    function defineAccessor(_header) {
      let lHeader = normalizeHeader(_header);
      accessors[lHeader] || (buildAccessors(prototype3, _header), accessors[lHeader] = !0);
    }
    return utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header), this;
  }
};
AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils_default.freezeMethods(AxiosHeaders.prototype);
utils_default.freezeMethods(AxiosHeaders);
var AxiosHeaders_default = AxiosHeaders;

// node_modules/axios/lib/core/transformData.js
function transformData(fns, response) {
  let config = this || defaults_default, context = response || config, headers = AxiosHeaders_default.from(context.headers), data = context.data;
  return utils_default.forEach(fns, function(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
  }), headers.normalize(), data;
}

// node_modules/axios/lib/cancel/isCancel.js
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

// node_modules/axios/lib/cancel/CanceledError.js
function CanceledError(message, config, request) {
  AxiosError_default.call(this, message ?? "canceled", AxiosError_default.ERR_CANCELED, config, request), this.name = "CanceledError";
}
utils_default.inherits(CanceledError, AxiosError_default, {
  __CANCEL__: !0
});
var CanceledError_default = CanceledError;

// node_modules/axios/lib/core/settle.js
function settle(resolve, reject, response) {
  let validateStatus2 = response.config.validateStatus;
  !response.status || !validateStatus2 || validateStatus2(response.status) ? resolve(response) : reject(new AxiosError_default(
    "Request failed with status code " + response.status,
    [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
    response.config,
    response.request,
    response
  ));
}

// node_modules/axios/lib/helpers/isAbsoluteURL.js
function isAbsoluteURL(url2) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
}

// node_modules/axios/lib/helpers/combineURLs.js
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

// node_modules/axios/lib/core/buildFullPath.js
function buildFullPath(baseURL, requestedURL) {
  return baseURL && !isAbsoluteURL(requestedURL) ? combineURLs(baseURL, requestedURL) : requestedURL;
}

// node_modules/axios/lib/adapters/http.js
var import_proxy_from_env = require("proxy-from-env"), import_http = __toESM(require("http"), 1), import_https = __toESM(require("https"), 1), import_util2 = __toESM(require("util"), 1), import_follow_redirects = __toESM(require("follow-redirects"), 1), import_zlib = __toESM(require("zlib"), 1);

// node_modules/axios/lib/env/data.js
var VERSION = "1.4.0";

// node_modules/axios/lib/helpers/parseProtocol.js
function parseProtocol(url2) {
  let match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url2);
  return match && match[1] || "";
}

// node_modules/axios/lib/helpers/fromDataURI.js
var DATA_URL_PATTERN = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
function fromDataURI(uri, asBlob, options) {
  let _Blob = options && options.Blob || node_default.classes.Blob, protocol = parseProtocol(uri);
  if (asBlob === void 0 && _Blob && (asBlob = !0), protocol === "data") {
    uri = protocol.length ? uri.slice(protocol.length + 1) : uri;
    let match = DATA_URL_PATTERN.exec(uri);
    if (!match)
      throw new AxiosError_default("Invalid URL", AxiosError_default.ERR_INVALID_URL);
    let mime = match[1], isBase64 = match[2], body = match[3], buffer = Buffer.from(decodeURIComponent(body), isBase64 ? "base64" : "utf8");
    if (asBlob) {
      if (!_Blob)
        throw new AxiosError_default("Blob is not supported", AxiosError_default.ERR_NOT_SUPPORT);
      return new _Blob([buffer], { type: mime });
    }
    return buffer;
  }
  throw new AxiosError_default("Unsupported protocol " + protocol, AxiosError_default.ERR_NOT_SUPPORT);
}

// node_modules/axios/lib/adapters/http.js
var import_stream4 = __toESM(require("stream"), 1);

// node_modules/axios/lib/helpers/AxiosTransformStream.js
var import_stream = __toESM(require("stream"), 1);

// node_modules/axios/lib/helpers/throttle.js
function throttle(fn, freq) {
  let timestamp = 0, threshold = 1e3 / freq, timer = null;
  return function(force, args) {
    let now = Date.now();
    if (force || now - timestamp > threshold)
      return timer && (clearTimeout(timer), timer = null), timestamp = now, fn.apply(null, args);
    timer || (timer = setTimeout(() => (timer = null, timestamp = Date.now(), fn.apply(null, args)), threshold - (now - timestamp)));
  };
}
var throttle_default = throttle;

// node_modules/axios/lib/helpers/speedometer.js
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  let bytes = new Array(samplesCount), timestamps = new Array(samplesCount), head = 0, tail = 0, firstSampleTS;
  return min = min !== void 0 ? min : 1e3, function(chunkLength) {
    let now = Date.now(), startedAt = timestamps[tail];
    firstSampleTS || (firstSampleTS = now), bytes[head] = chunkLength, timestamps[head] = now;
    let i = tail, bytesCount = 0;
    for (; i !== head; )
      bytesCount += bytes[i++], i = i % samplesCount;
    if (head = (head + 1) % samplesCount, head === tail && (tail = (tail + 1) % samplesCount), now - firstSampleTS < min)
      return;
    let passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
var speedometer_default = speedometer;

// node_modules/axios/lib/helpers/AxiosTransformStream.js
var kInternals = Symbol("internals"), AxiosTransformStream = class extends import_stream.default.Transform {
  constructor(options) {
    options = utils_default.toFlatObject(options, {
      maxRate: 0,
      chunkSize: 64 * 1024,
      minChunkSize: 100,
      timeWindow: 500,
      ticksRate: 2,
      samplesCount: 15
    }, null, (prop, source) => !utils_default.isUndefined(source[prop])), super({
      readableHighWaterMark: options.chunkSize
    });
    let self2 = this, internals = this[kInternals] = {
      length: options.length,
      timeWindow: options.timeWindow,
      ticksRate: options.ticksRate,
      chunkSize: options.chunkSize,
      maxRate: options.maxRate,
      minChunkSize: options.minChunkSize,
      bytesSeen: 0,
      isCaptured: !1,
      notifiedBytesLoaded: 0,
      ts: Date.now(),
      bytes: 0,
      onReadCallback: null
    }, _speedometer = speedometer_default(internals.ticksRate * options.samplesCount, internals.timeWindow);
    this.on("newListener", (event) => {
      event === "progress" && (internals.isCaptured || (internals.isCaptured = !0));
    });
    let bytesNotified = 0;
    internals.updateProgress = throttle_default(function() {
      let totalBytes = internals.length, bytesTransferred = internals.bytesSeen, progressBytes = bytesTransferred - bytesNotified;
      if (!progressBytes || self2.destroyed)
        return;
      let rate = _speedometer(progressBytes);
      bytesNotified = bytesTransferred, process.nextTick(() => {
        self2.emit("progress", {
          loaded: bytesTransferred,
          total: totalBytes,
          progress: totalBytes ? bytesTransferred / totalBytes : void 0,
          bytes: progressBytes,
          rate: rate || void 0,
          estimated: rate && totalBytes && bytesTransferred <= totalBytes ? (totalBytes - bytesTransferred) / rate : void 0
        });
      });
    }, internals.ticksRate);
    let onFinish = () => {
      internals.updateProgress(!0);
    };
    this.once("end", onFinish), this.once("error", onFinish);
  }
  _read(size) {
    let internals = this[kInternals];
    return internals.onReadCallback && internals.onReadCallback(), super._read(size);
  }
  _transform(chunk, encoding, callback) {
    let self2 = this, internals = this[kInternals], maxRate = internals.maxRate, readableHighWaterMark = this.readableHighWaterMark, timeWindow = internals.timeWindow, divider = 1e3 / timeWindow, bytesThreshold = maxRate / divider, minChunkSize = internals.minChunkSize !== !1 ? Math.max(internals.minChunkSize, bytesThreshold * 0.01) : 0;
    function pushChunk(_chunk, _callback) {
      let bytes = Buffer.byteLength(_chunk);
      internals.bytesSeen += bytes, internals.bytes += bytes, internals.isCaptured && internals.updateProgress(), self2.push(_chunk) ? process.nextTick(_callback) : internals.onReadCallback = () => {
        internals.onReadCallback = null, process.nextTick(_callback);
      };
    }
    let transformChunk = (_chunk, _callback) => {
      let chunkSize = Buffer.byteLength(_chunk), chunkRemainder = null, maxChunkSize = readableHighWaterMark, bytesLeft, passed = 0;
      if (maxRate) {
        let now = Date.now();
        (!internals.ts || (passed = now - internals.ts) >= timeWindow) && (internals.ts = now, bytesLeft = bytesThreshold - internals.bytes, internals.bytes = bytesLeft < 0 ? -bytesLeft : 0, passed = 0), bytesLeft = bytesThreshold - internals.bytes;
      }
      if (maxRate) {
        if (bytesLeft <= 0)
          return setTimeout(() => {
            _callback(null, _chunk);
          }, timeWindow - passed);
        bytesLeft < maxChunkSize && (maxChunkSize = bytesLeft);
      }
      maxChunkSize && chunkSize > maxChunkSize && chunkSize - maxChunkSize > minChunkSize && (chunkRemainder = _chunk.subarray(maxChunkSize), _chunk = _chunk.subarray(0, maxChunkSize)), pushChunk(_chunk, chunkRemainder ? () => {
        process.nextTick(_callback, null, chunkRemainder);
      } : _callback);
    };
    transformChunk(chunk, function transformNextChunk(err, _chunk) {
      if (err)
        return callback(err);
      _chunk ? transformChunk(_chunk, transformNextChunk) : callback(null);
    });
  }
  setLength(length) {
    return this[kInternals].length = +length, this;
  }
}, AxiosTransformStream_default = AxiosTransformStream;

// node_modules/axios/lib/adapters/http.js
var import_events = __toESM(require("events"), 1);

// node_modules/axios/lib/helpers/formDataToStream.js
var import_util = require("util"), import_stream2 = require("stream");

// node_modules/axios/lib/helpers/readBlob.js
var { asyncIterator } = Symbol, readBlob = async function* (blob) {
  blob.stream ? yield* blob.stream() : blob.arrayBuffer ? yield await blob.arrayBuffer() : blob[asyncIterator] ? yield* blob[asyncIterator]() : yield blob;
}, readBlob_default = readBlob;

// node_modules/axios/lib/helpers/formDataToStream.js
var BOUNDARY_ALPHABET = utils_default.ALPHABET.ALPHA_DIGIT + "-_", textEncoder = new import_util.TextEncoder(), CRLF = `\r
`, CRLF_BYTES = textEncoder.encode(CRLF), CRLF_BYTES_COUNT = 2, FormDataPart = class {
  constructor(name, value) {
    let { escapeName } = this.constructor, isStringValue = utils_default.isString(value), headers = `Content-Disposition: form-data; name="${escapeName(name)}"${!isStringValue && value.name ? `; filename="${escapeName(value.name)}"` : ""}${CRLF}`;
    isStringValue ? value = textEncoder.encode(String(value).replace(/\r?\n|\r\n?/g, CRLF)) : headers += `Content-Type: ${value.type || "application/octet-stream"}${CRLF}`, this.headers = textEncoder.encode(headers + CRLF), this.contentLength = isStringValue ? value.byteLength : value.size, this.size = this.headers.byteLength + this.contentLength + CRLF_BYTES_COUNT, this.name = name, this.value = value;
  }
  async *encode() {
    yield this.headers;
    let { value } = this;
    utils_default.isTypedArray(value) ? yield value : yield* readBlob_default(value), yield CRLF_BYTES;
  }
  static escapeName(name) {
    return String(name).replace(/[\r\n"]/g, (match) => ({
      "\r": "%0D",
      "\n": "%0A",
      '"': "%22"
    })[match]);
  }
}, formDataToStream = (form, headersHandler, options) => {
  let {
    tag = "form-data-boundary",
    size = 25,
    boundary = tag + "-" + utils_default.generateString(size, BOUNDARY_ALPHABET)
  } = options || {};
  if (!utils_default.isFormData(form))
    throw TypeError("FormData instance required");
  if (boundary.length < 1 || boundary.length > 70)
    throw Error("boundary must be 10-70 characters long");
  let boundaryBytes = textEncoder.encode("--" + boundary + CRLF), footerBytes = textEncoder.encode("--" + boundary + "--" + CRLF + CRLF), contentLength = footerBytes.byteLength, parts = Array.from(form.entries()).map(([name, value]) => {
    let part = new FormDataPart(name, value);
    return contentLength += part.size, part;
  });
  contentLength += boundaryBytes.byteLength * parts.length, contentLength = utils_default.toFiniteNumber(contentLength);
  let computedHeaders = {
    "Content-Type": `multipart/form-data; boundary=${boundary}`
  };
  return Number.isFinite(contentLength) && (computedHeaders["Content-Length"] = contentLength), headersHandler && headersHandler(computedHeaders), import_stream2.Readable.from(async function* () {
    for (let part of parts)
      yield boundaryBytes, yield* part.encode();
    yield footerBytes;
  }());
}, formDataToStream_default = formDataToStream;

// node_modules/axios/lib/helpers/ZlibHeaderTransformStream.js
var import_stream3 = __toESM(require("stream"), 1), ZlibHeaderTransformStream = class extends import_stream3.default.Transform {
  __transform(chunk, encoding, callback) {
    this.push(chunk), callback();
  }
  _transform(chunk, encoding, callback) {
    if (chunk.length !== 0 && (this._transform = this.__transform, chunk[0] !== 120)) {
      let header = Buffer.alloc(2);
      header[0] = 120, header[1] = 156, this.push(header, encoding);
    }
    this.__transform(chunk, encoding, callback);
  }
}, ZlibHeaderTransformStream_default = ZlibHeaderTransformStream;

// node_modules/axios/lib/helpers/callbackify.js
var callbackify = (fn, reducer) => utils_default.isAsyncFn(fn) ? function(...args) {
  let cb = args.pop();
  fn.apply(this, args).then((value) => {
    try {
      reducer ? cb(null, ...reducer(value)) : cb(null, value);
    } catch (err) {
      cb(err);
    }
  }, cb);
} : fn, callbackify_default = callbackify;

// node_modules/axios/lib/adapters/http.js
var zlibOptions = {
  flush: import_zlib.default.constants.Z_SYNC_FLUSH,
  finishFlush: import_zlib.default.constants.Z_SYNC_FLUSH
}, brotliOptions = {
  flush: import_zlib.default.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: import_zlib.default.constants.BROTLI_OPERATION_FLUSH
}, isBrotliSupported = utils_default.isFunction(import_zlib.default.createBrotliDecompress), { http: httpFollow, https: httpsFollow } = import_follow_redirects.default, isHttps = /https:?/, supportedProtocols = node_default.protocols.map((protocol) => protocol + ":");
function dispatchBeforeRedirect(options) {
  options.beforeRedirects.proxy && options.beforeRedirects.proxy(options), options.beforeRedirects.config && options.beforeRedirects.config(options);
}
function setProxy(options, configProxy, location) {
  let proxy = configProxy;
  if (!proxy && proxy !== !1) {
    let proxyUrl = (0, import_proxy_from_env.getProxyForUrl)(location);
    proxyUrl && (proxy = new URL(proxyUrl));
  }
  if (proxy) {
    if (proxy.username && (proxy.auth = (proxy.username || "") + ":" + (proxy.password || "")), proxy.auth) {
      (proxy.auth.username || proxy.auth.password) && (proxy.auth = (proxy.auth.username || "") + ":" + (proxy.auth.password || ""));
      let base64 = Buffer.from(proxy.auth, "utf8").toString("base64");
      options.headers["Proxy-Authorization"] = "Basic " + base64;
    }
    options.headers.host = options.hostname + (options.port ? ":" + options.port : "");
    let proxyHost = proxy.hostname || proxy.host;
    options.hostname = proxyHost, options.host = proxyHost, options.port = proxy.port, options.path = location, proxy.protocol && (options.protocol = proxy.protocol.includes(":") ? proxy.protocol : `${proxy.protocol}:`);
  }
  options.beforeRedirects.proxy = function(redirectOptions) {
    setProxy(redirectOptions, configProxy, redirectOptions.href);
  };
}
var isHttpAdapterSupported = typeof process < "u" && utils_default.kindOf(process) === "process", wrapAsync = (asyncExecutor) => new Promise((resolve, reject) => {
  let onDone, isDone, done = (value, isRejected) => {
    isDone || (isDone = !0, onDone && onDone(value, isRejected));
  }, _resolve = (value) => {
    done(value), resolve(value);
  }, _reject = (reason) => {
    done(reason, !0), reject(reason);
  };
  asyncExecutor(_resolve, _reject, (onDoneHandler) => onDone = onDoneHandler).catch(_reject);
}), http_default = isHttpAdapterSupported && function(config) {
  return wrapAsync(async function(resolve, reject, onDone) {
    let { data, lookup, family } = config, { responseType, responseEncoding } = config, method = config.method.toUpperCase(), isDone, rejected = !1, req;
    lookup && utils_default.isAsyncFn(lookup) && (lookup = callbackify_default(lookup, (entry2) => {
      if (utils_default.isString(entry2))
        entry2 = [entry2, entry2.indexOf(".") < 0 ? 6 : 4];
      else if (!utils_default.isArray(entry2))
        throw new TypeError("lookup async function must return an array [ip: string, family: number]]");
      return entry2;
    }));
    let emitter = new import_events.default(), onFinished = () => {
      config.cancelToken && config.cancelToken.unsubscribe(abort), config.signal && config.signal.removeEventListener("abort", abort), emitter.removeAllListeners();
    };
    onDone((value, isRejected) => {
      isDone = !0, isRejected && (rejected = !0, onFinished());
    });
    function abort(reason) {
      emitter.emit("abort", !reason || reason.type ? new CanceledError_default(null, config, req) : reason);
    }
    emitter.once("abort", reject), (config.cancelToken || config.signal) && (config.cancelToken && config.cancelToken.subscribe(abort), config.signal && (config.signal.aborted ? abort() : config.signal.addEventListener("abort", abort)));
    let fullPath = buildFullPath(config.baseURL, config.url), parsed = new URL(fullPath, "http://localhost"), protocol = parsed.protocol || supportedProtocols[0];
    if (protocol === "data:") {
      let convertedData;
      if (method !== "GET")
        return settle(resolve, reject, {
          status: 405,
          statusText: "method not allowed",
          headers: {},
          config
        });
      try {
        convertedData = fromDataURI(config.url, responseType === "blob", {
          Blob: config.env && config.env.Blob
        });
      } catch (err) {
        throw AxiosError_default.from(err, AxiosError_default.ERR_BAD_REQUEST, config);
      }
      return responseType === "text" ? (convertedData = convertedData.toString(responseEncoding), (!responseEncoding || responseEncoding === "utf8") && (convertedData = utils_default.stripBOM(convertedData))) : responseType === "stream" && (convertedData = import_stream4.default.Readable.from(convertedData)), settle(resolve, reject, {
        data: convertedData,
        status: 200,
        statusText: "OK",
        headers: new AxiosHeaders_default(),
        config
      });
    }
    if (supportedProtocols.indexOf(protocol) === -1)
      return reject(new AxiosError_default(
        "Unsupported protocol " + protocol,
        AxiosError_default.ERR_BAD_REQUEST,
        config
      ));
    let headers = AxiosHeaders_default.from(config.headers).normalize();
    headers.set("User-Agent", "axios/" + VERSION, !1);
    let onDownloadProgress = config.onDownloadProgress, onUploadProgress = config.onUploadProgress, maxRate = config.maxRate, maxUploadRate, maxDownloadRate;
    if (utils_default.isSpecCompliantForm(data)) {
      let userBoundary = headers.getContentType(/boundary=([-_\w\d]{10,70})/i);
      data = formDataToStream_default(data, (formHeaders) => {
        headers.set(formHeaders);
      }, {
        tag: `axios-${VERSION}-boundary`,
        boundary: userBoundary && userBoundary[1] || void 0
      });
    } else if (utils_default.isFormData(data) && utils_default.isFunction(data.getHeaders)) {
      if (headers.set(data.getHeaders()), !headers.hasContentLength())
        try {
          let knownLength = await import_util2.default.promisify(data.getLength).call(data);
          Number.isFinite(knownLength) && knownLength >= 0 && headers.setContentLength(knownLength);
        } catch {
        }
    } else if (utils_default.isBlob(data))
      data.size && headers.setContentType(data.type || "application/octet-stream"), headers.setContentLength(data.size || 0), data = import_stream4.default.Readable.from(readBlob_default(data));
    else if (data && !utils_default.isStream(data)) {
      if (!Buffer.isBuffer(data))
        if (utils_default.isArrayBuffer(data))
          data = Buffer.from(new Uint8Array(data));
        else if (utils_default.isString(data))
          data = Buffer.from(data, "utf-8");
        else
          return reject(new AxiosError_default(
            "Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",
            AxiosError_default.ERR_BAD_REQUEST,
            config
          ));
      if (headers.setContentLength(data.length, !1), config.maxBodyLength > -1 && data.length > config.maxBodyLength)
        return reject(new AxiosError_default(
          "Request body larger than maxBodyLength limit",
          AxiosError_default.ERR_BAD_REQUEST,
          config
        ));
    }
    let contentLength = utils_default.toFiniteNumber(headers.getContentLength());
    utils_default.isArray(maxRate) ? (maxUploadRate = maxRate[0], maxDownloadRate = maxRate[1]) : maxUploadRate = maxDownloadRate = maxRate, data && (onUploadProgress || maxUploadRate) && (utils_default.isStream(data) || (data = import_stream4.default.Readable.from(data, { objectMode: !1 })), data = import_stream4.default.pipeline([data, new AxiosTransformStream_default({
      length: contentLength,
      maxRate: utils_default.toFiniteNumber(maxUploadRate)
    })], utils_default.noop), onUploadProgress && data.on("progress", (progress) => {
      onUploadProgress(Object.assign(progress, {
        upload: !0
      }));
    }));
    let auth;
    if (config.auth) {
      let username = config.auth.username || "", password = config.auth.password || "";
      auth = username + ":" + password;
    }
    if (!auth && parsed.username) {
      let urlUsername = parsed.username, urlPassword = parsed.password;
      auth = urlUsername + ":" + urlPassword;
    }
    auth && headers.delete("authorization");
    let path;
    try {
      path = buildURL(
        parsed.pathname + parsed.search,
        config.params,
        config.paramsSerializer
      ).replace(/^\?/, "");
    } catch (err) {
      let customErr = new Error(err.message);
      return customErr.config = config, customErr.url = config.url, customErr.exists = !0, reject(customErr);
    }
    headers.set(
      "Accept-Encoding",
      "gzip, compress, deflate" + (isBrotliSupported ? ", br" : ""),
      !1
    );
    let options = {
      path,
      method,
      headers: headers.toJSON(),
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth,
      protocol,
      family,
      lookup,
      beforeRedirect: dispatchBeforeRedirect,
      beforeRedirects: {}
    };
    config.socketPath ? options.socketPath = config.socketPath : (options.hostname = parsed.hostname, options.port = parsed.port, setProxy(options, config.proxy, protocol + "//" + parsed.hostname + (parsed.port ? ":" + parsed.port : "") + options.path));
    let transport, isHttpsRequest = isHttps.test(options.protocol);
    if (options.agent = isHttpsRequest ? config.httpsAgent : config.httpAgent, config.transport ? transport = config.transport : config.maxRedirects === 0 ? transport = isHttpsRequest ? import_https.default : import_http.default : (config.maxRedirects && (options.maxRedirects = config.maxRedirects), config.beforeRedirect && (options.beforeRedirects.config = config.beforeRedirect), transport = isHttpsRequest ? httpsFollow : httpFollow), config.maxBodyLength > -1 ? options.maxBodyLength = config.maxBodyLength : options.maxBodyLength = 1 / 0, config.insecureHTTPParser && (options.insecureHTTPParser = config.insecureHTTPParser), req = transport.request(options, function(res) {
      if (req.destroyed)
        return;
      let streams = [res], responseLength = +res.headers["content-length"];
      if (onDownloadProgress) {
        let transformStream = new AxiosTransformStream_default({
          length: utils_default.toFiniteNumber(responseLength),
          maxRate: utils_default.toFiniteNumber(maxDownloadRate)
        });
        onDownloadProgress && transformStream.on("progress", (progress) => {
          onDownloadProgress(Object.assign(progress, {
            download: !0
          }));
        }), streams.push(transformStream);
      }
      let responseStream = res, lastRequest = res.req || req;
      if (config.decompress !== !1 && res.headers["content-encoding"])
        switch ((method === "HEAD" || res.statusCode === 204) && delete res.headers["content-encoding"], res.headers["content-encoding"]) {
          case "gzip":
          case "x-gzip":
          case "compress":
          case "x-compress":
            streams.push(import_zlib.default.createUnzip(zlibOptions)), delete res.headers["content-encoding"];
            break;
          case "deflate":
            streams.push(new ZlibHeaderTransformStream_default()), streams.push(import_zlib.default.createUnzip(zlibOptions)), delete res.headers["content-encoding"];
            break;
          case "br":
            isBrotliSupported && (streams.push(import_zlib.default.createBrotliDecompress(brotliOptions)), delete res.headers["content-encoding"]);
        }
      responseStream = streams.length > 1 ? import_stream4.default.pipeline(streams, utils_default.noop) : streams[0];
      let offListeners = import_stream4.default.finished(responseStream, () => {
        offListeners(), onFinished();
      }), response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: new AxiosHeaders_default(res.headers),
        config,
        request: lastRequest
      };
      if (responseType === "stream")
        response.data = responseStream, settle(resolve, reject, response);
      else {
        let responseBuffer = [], totalResponseBytes = 0;
        responseStream.on("data", function(chunk) {
          responseBuffer.push(chunk), totalResponseBytes += chunk.length, config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength && (rejected = !0, responseStream.destroy(), reject(new AxiosError_default(
            "maxContentLength size of " + config.maxContentLength + " exceeded",
            AxiosError_default.ERR_BAD_RESPONSE,
            config,
            lastRequest
          )));
        }), responseStream.on("aborted", function() {
          if (rejected)
            return;
          let err = new AxiosError_default(
            "maxContentLength size of " + config.maxContentLength + " exceeded",
            AxiosError_default.ERR_BAD_RESPONSE,
            config,
            lastRequest
          );
          responseStream.destroy(err), reject(err);
        }), responseStream.on("error", function(err) {
          req.destroyed || reject(AxiosError_default.from(err, null, config, lastRequest));
        }), responseStream.on("end", function() {
          try {
            let responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
            responseType !== "arraybuffer" && (responseData = responseData.toString(responseEncoding), (!responseEncoding || responseEncoding === "utf8") && (responseData = utils_default.stripBOM(responseData))), response.data = responseData;
          } catch (err) {
            reject(AxiosError_default.from(err, null, config, response.request, response));
          }
          settle(resolve, reject, response);
        });
      }
      emitter.once("abort", (err) => {
        responseStream.destroyed || (responseStream.emit("error", err), responseStream.destroy());
      });
    }), emitter.once("abort", (err) => {
      reject(err), req.destroy(err);
    }), req.on("error", function(err) {
      reject(AxiosError_default.from(err, null, config, req));
    }), req.on("socket", function(socket) {
      socket.setKeepAlive(!0, 1e3 * 60);
    }), config.timeout) {
      let timeout = parseInt(config.timeout, 10);
      if (isNaN(timeout)) {
        reject(new AxiosError_default(
          "error trying to parse `config.timeout` to int",
          AxiosError_default.ERR_BAD_OPTION_VALUE,
          config,
          req
        ));
        return;
      }
      req.setTimeout(timeout, function() {
        if (isDone)
          return;
        let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded", transitional2 = config.transitional || transitional_default;
        config.timeoutErrorMessage && (timeoutErrorMessage = config.timeoutErrorMessage), reject(new AxiosError_default(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
          config,
          req
        )), abort();
      });
    }
    if (utils_default.isStream(data)) {
      let ended = !1, errored = !1;
      data.on("end", () => {
        ended = !0;
      }), data.once("error", (err) => {
        errored = !0, req.destroy(err);
      }), data.on("close", () => {
        !ended && !errored && abort(new CanceledError_default("Request stream has been aborted", config, req));
      }), data.pipe(req);
    } else
      req.end(data);
  });
};

// node_modules/axios/lib/helpers/cookies.js
var cookies_default = node_default.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(name, value, expires, path, domain, secure) {
        let cookie2 = [];
        cookie2.push(name + "=" + encodeURIComponent(value)), utils_default.isNumber(expires) && cookie2.push("expires=" + new Date(expires).toGMTString()), utils_default.isString(path) && cookie2.push("path=" + path), utils_default.isString(domain) && cookie2.push("domain=" + domain), secure === !0 && cookie2.push("secure"), document.cookie = cookie2.join("; ");
      },
      read: function(name) {
        let match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove: function(name) {
        this.write(name, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var isURLSameOrigin_default = node_default.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    let msie = /(msie|trident)/i.test(navigator.userAgent), urlParsingNode = document.createElement("a"), originURL;
    function resolveURL(url2) {
      let href = url2;
      return msie && (urlParsingNode.setAttribute("href", href), href = urlParsingNode.href), urlParsingNode.setAttribute("href", href), {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
      };
    }
    return originURL = resolveURL(window.location.href), function(requestURL) {
      let parsed = utils_default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);

// node_modules/axios/lib/adapters/xhr.js
function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0, _speedometer = speedometer_default(50, 250);
  return (e) => {
    let loaded = e.loaded, total = e.lengthComputable ? e.total : void 0, progressBytes = loaded - bytesNotified, rate = _speedometer(progressBytes), inRange = loaded <= total;
    bytesNotified = loaded;
    let data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate || void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e
    };
    data[isDownloadStream ? "download" : "upload"] = !0, listener(data);
  };
}
var isXHRAdapterSupported = typeof XMLHttpRequest < "u", xhr_default = isXHRAdapterSupported && function(config) {
  return new Promise(function(resolve, reject) {
    let requestData = config.data, requestHeaders = AxiosHeaders_default.from(config.headers).normalize(), responseType = config.responseType, onCanceled;
    function done() {
      config.cancelToken && config.cancelToken.unsubscribe(onCanceled), config.signal && config.signal.removeEventListener("abort", onCanceled);
    }
    utils_default.isFormData(requestData) && (node_default.isStandardBrowserEnv || node_default.isStandardBrowserWebWorkerEnv ? requestHeaders.setContentType(!1) : requestHeaders.setContentType("multipart/form-data;", !1));
    let request = new XMLHttpRequest();
    if (config.auth) {
      let username = config.auth.username || "", password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
      requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
    }
    let fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), !0), request.timeout = config.timeout;
    function onloadend() {
      if (!request)
        return;
      let responseHeaders = AxiosHeaders_default.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      ), response = {
        data: !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function(value) {
        resolve(value), done();
      }, function(err) {
        reject(err), done();
      }, response), request = null;
    }
    if ("onloadend" in request ? request.onloadend = onloadend : request.onreadystatechange = function() {
      !request || request.readyState !== 4 || request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0) || setTimeout(onloadend);
    }, request.onabort = function() {
      request && (reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request)), request = null);
    }, request.onerror = function() {
      reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request)), request = null;
    }, request.ontimeout = function() {
      let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded", transitional2 = config.transitional || transitional_default;
      config.timeoutErrorMessage && (timeoutErrorMessage = config.timeoutErrorMessage), reject(new AxiosError_default(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
        config,
        request
      )), request = null;
    }, node_default.isStandardBrowserEnv) {
      let xsrfValue = (config.withCredentials || isURLSameOrigin_default(fullPath)) && config.xsrfCookieName && cookies_default.read(config.xsrfCookieName);
      xsrfValue && requestHeaders.set(config.xsrfHeaderName, xsrfValue);
    }
    requestData === void 0 && requestHeaders.setContentType(null), "setRequestHeader" in request && utils_default.forEach(requestHeaders.toJSON(), function(val, key) {
      request.setRequestHeader(key, val);
    }), utils_default.isUndefined(config.withCredentials) || (request.withCredentials = !!config.withCredentials), responseType && responseType !== "json" && (request.responseType = config.responseType), typeof config.onDownloadProgress == "function" && request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, !0)), typeof config.onUploadProgress == "function" && request.upload && request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress)), (config.cancelToken || config.signal) && (onCanceled = (cancel) => {
      request && (reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel), request.abort(), request = null);
    }, config.cancelToken && config.cancelToken.subscribe(onCanceled), config.signal && (config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled)));
    let protocol = parseProtocol(fullPath);
    if (protocol && node_default.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
      return;
    }
    request.send(requestData || null);
  });
};

// node_modules/axios/lib/adapters/adapters.js
var knownAdapters = {
  http: http_default,
  xhr: xhr_default
};
utils_default.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
var adapters_default = {
  getAdapter: (adapters) => {
    adapters = utils_default.isArray(adapters) ? adapters : [adapters];
    let { length } = adapters, nameOrAdapter, adapter;
    for (let i = 0; i < length && (nameOrAdapter = adapters[i], !(adapter = utils_default.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter)); i++)
      ;
    if (!adapter)
      throw adapter === !1 ? new AxiosError_default(
        `Adapter ${nameOrAdapter} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        utils_default.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`
      );
    if (!utils_default.isFunction(adapter))
      throw new TypeError("adapter is not a function");
    return adapter;
  },
  adapters: knownAdapters
};

// node_modules/axios/lib/core/dispatchRequest.js
function throwIfCancellationRequested(config) {
  if (config.cancelToken && config.cancelToken.throwIfRequested(), config.signal && config.signal.aborted)
    throw new CanceledError_default(null, config);
}
function dispatchRequest(config) {
  return throwIfCancellationRequested(config), config.headers = AxiosHeaders_default.from(config.headers), config.data = transformData.call(
    config,
    config.transformRequest
  ), ["post", "put", "patch"].indexOf(config.method) !== -1 && config.headers.setContentType("application/x-www-form-urlencoded", !1), adapters_default.getAdapter(config.adapter || defaults_default.adapter)(config).then(function(response) {
    return throwIfCancellationRequested(config), response.data = transformData.call(
      config,
      config.transformResponse,
      response
    ), response.headers = AxiosHeaders_default.from(response.headers), response;
  }, function(reason) {
    return isCancel(reason) || (throwIfCancellationRequested(config), reason && reason.response && (reason.response.data = transformData.call(
      config,
      config.transformResponse,
      reason.response
    ), reason.response.headers = AxiosHeaders_default.from(reason.response.headers))), Promise.reject(reason);
  });
}

// node_modules/axios/lib/core/mergeConfig.js
var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? thing.toJSON() : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  let config = {};
  function getMergedValue(target, source, caseless) {
    return utils_default.isPlainObject(target) && utils_default.isPlainObject(source) ? utils_default.merge.call({ caseless }, target, source) : utils_default.isPlainObject(source) ? utils_default.merge({}, source) : utils_default.isArray(source) ? source.slice() : source;
  }
  function mergeDeepProperties(a, b, caseless) {
    if (utils_default.isUndefined(b)) {
      if (!utils_default.isUndefined(a))
        return getMergedValue(void 0, a, caseless);
    } else
      return getMergedValue(a, b, caseless);
  }
  function valueFromConfig2(a, b) {
    if (!utils_default.isUndefined(b))
      return getMergedValue(void 0, b);
  }
  function defaultToConfig2(a, b) {
    if (utils_default.isUndefined(b)) {
      if (!utils_default.isUndefined(a))
        return getMergedValue(void 0, a);
    } else
      return getMergedValue(void 0, b);
  }
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2)
      return getMergedValue(a, b);
    if (prop in config1)
      return getMergedValue(void 0, a);
  }
  let mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), !0)
  };
  return utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), function(prop) {
    let merge2 = mergeMap[prop] || mergeDeepProperties, configValue = merge2(config1[prop], config2[prop], prop);
    utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  }), config;
}

// node_modules/axios/lib/helpers/validator.js
var validators = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
  validators[type] = function(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators.transitional = function(validator, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator === !1)
      throw new AxiosError_default(
        formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
        AxiosError_default.ERR_DEPRECATED
      );
    return version && !deprecatedWarnings[opt] && (deprecatedWarnings[opt] = !0, console.warn(
      formatMessage(
        opt,
        " has been deprecated since v" + version + " and will be removed in the near future"
      )
    )), validator ? validator(value, opt, opts) : !0;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options != "object")
    throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
  let keys = Object.keys(options), i = keys.length;
  for (; i-- > 0; ) {
    let opt = keys[i], validator = schema[opt];
    if (validator) {
      let value = options[opt], result = value === void 0 || validator(value, opt, options);
      if (result !== !0)
        throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (allowUnknown !== !0)
      throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
  }
}
var validator_default = {
  assertOptions,
  validators
};

// node_modules/axios/lib/core/Axios.js
var validators2 = validator_default.validators, Axios = class {
  constructor(instanceConfig) {
    this.defaults = instanceConfig, this.interceptors = {
      request: new InterceptorManager_default(),
      response: new InterceptorManager_default()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    typeof configOrUrl == "string" ? (config = config || {}, config.url = configOrUrl) : config = configOrUrl || {}, config = mergeConfig(this.defaults, config);
    let { transitional: transitional2, paramsSerializer, headers } = config;
    transitional2 !== void 0 && validator_default.assertOptions(transitional2, {
      silentJSONParsing: validators2.transitional(validators2.boolean),
      forcedJSONParsing: validators2.transitional(validators2.boolean),
      clarifyTimeoutError: validators2.transitional(validators2.boolean)
    }, !1), paramsSerializer != null && (utils_default.isFunction(paramsSerializer) ? config.paramsSerializer = {
      serialize: paramsSerializer
    } : validator_default.assertOptions(paramsSerializer, {
      encode: validators2.function,
      serialize: validators2.function
    }, !0)), config.method = (config.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders;
    contextHeaders = headers && utils_default.merge(
      headers.common,
      headers[config.method]
    ), contextHeaders && utils_default.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (method) => {
        delete headers[method];
      }
    ), config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
    let requestInterceptorChain = [], synchronousRequestInterceptors = !0;
    this.interceptors.request.forEach(function(interceptor) {
      typeof interceptor.runWhen == "function" && interceptor.runWhen(config) === !1 || (synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous, requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected));
    });
    let responseInterceptorChain = [];
    this.interceptors.response.forEach(function(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise, i = 0, len;
    if (!synchronousRequestInterceptors) {
      let chain = [dispatchRequest.bind(this), void 0];
      for (chain.unshift.apply(chain, requestInterceptorChain), chain.push.apply(chain, responseInterceptorChain), len = chain.length, promise = Promise.resolve(config); i < len; )
        promise = promise.then(chain[i++], chain[i++]);
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    for (i = 0; i < len; ) {
      let onFulfilled = requestInterceptorChain[i++], onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    for (i = 0, len = responseInterceptorChain.length; i < len; )
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    let fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
};
utils_default.forEach(["delete", "get", "head", "options"], function(method) {
  Axios.prototype[method] = function(url2, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url: url2,
      data: (config || {}).data
    }));
  };
});
utils_default.forEach(["post", "put", "patch"], function(method) {
  function generateHTTPMethod(isForm) {
    return function(url2, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: url2,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod(), Axios.prototype[method + "Form"] = generateHTTPMethod(!0);
});
var Axios_default = Axios;

// node_modules/axios/lib/cancel/CancelToken.js
var CancelToken = class {
  constructor(executor) {
    if (typeof executor != "function")
      throw new TypeError("executor must be a function.");
    let resolvePromise;
    this.promise = new Promise(function(resolve) {
      resolvePromise = resolve;
    });
    let token = this;
    this.promise.then((cancel) => {
      if (!token._listeners)
        return;
      let i = token._listeners.length;
      for (; i-- > 0; )
        token._listeners[i](cancel);
      token._listeners = null;
    }), this.promise.then = (onfulfilled) => {
      let _resolve, promise = new Promise((resolve) => {
        token.subscribe(resolve), _resolve = resolve;
      }).then(onfulfilled);
      return promise.cancel = function() {
        token.unsubscribe(_resolve);
      }, promise;
    }, executor(function(message, config, request) {
      token.reason || (token.reason = new CanceledError_default(message, config, request), resolvePromise(token.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(listener) : this._listeners = [listener];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(listener) {
    if (!this._listeners)
      return;
    let index = this._listeners.indexOf(listener);
    index !== -1 && this._listeners.splice(index, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    return {
      token: new CancelToken(function(c) {
        cancel = c;
      }),
      cancel
    };
  }
}, CancelToken_default = CancelToken;

// node_modules/axios/lib/helpers/spread.js
function spread(callback) {
  return function(arr) {
    return callback.apply(null, arr);
  };
}

// node_modules/axios/lib/helpers/isAxiosError.js
function isAxiosError(payload) {
  return utils_default.isObject(payload) && payload.isAxiosError === !0;
}

// node_modules/axios/lib/helpers/HttpStatusCode.js
var HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
var HttpStatusCode_default = HttpStatusCode;

// node_modules/axios/lib/axios.js
function createInstance(defaultConfig) {
  let context = new Axios_default(defaultConfig), instance = bind(Axios_default.prototype.request, context);
  return utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: !0 }), utils_default.extend(instance, context, null, { allOwnKeys: !0 }), instance.create = function(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  }, instance;
}
var axios = createInstance(defaults_default);
axios.Axios = Axios_default;
axios.CanceledError = CanceledError_default;
axios.CancelToken = CancelToken_default;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData_default;
axios.AxiosError = AxiosError_default;
axios.Cancel = axios.CanceledError;
axios.all = function(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders_default;
axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.HttpStatusCode = HttpStatusCode_default;
axios.default = axios;
var axios_default = axios;

// node_modules/axios/index.js
var {
  Axios: Axios2,
  AxiosError: AxiosError2,
  CanceledError: CanceledError2,
  isCancel: isCancel2,
  CancelToken: CancelToken2,
  VERSION: VERSION2,
  all: all2,
  Cancel,
  isAxiosError: isAxiosError2,
  spread: spread2,
  toFormData: toFormData2,
  AxiosHeaders: AxiosHeaders2,
  HttpStatusCode: HttpStatusCode2,
  formToJSON,
  mergeConfig: mergeConfig2
} = axios_default;

// app/routes/details.$filename.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
async function loader({ request, params }) {
  var _a;
  if (!getCookie(request.headers.get("Cookie"), "galactusCredentials"))
    return (0, import_node3.redirect)("/login", {
      statusText: "You are not signed in, or your session has expired."
    });
  try {
    return {
      errors: null,
      text: (await axios_default.post(
        "https://t766bh2wwhlbxwsoj3nedgcm340bnmgk.lambda-url.eu-central-1.on.aws/",
        params.filename,
        {
          withCredentials: !0,
          headers: { Cookie: request.headers.get("Cookie") || "" }
        }
      )).data,
      key: params.filename
    };
  } catch (error) {
    return {
      errors: ((_a = error.response) == null ? void 0 : _a.data) || "Unknown error occured!",
      text: null,
      key: params.filename
    };
  }
}
function DetailsRoute() {
  let data = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "navbar bg-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container-fluid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "navbar-brand text-light", href: "#", children: "Galactus \u2014 Test Shape Visualizer" }, void 0, !1, {
      fileName: "app/routes/details.$filename.tsx",
      lineNumber: 44,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/details.$filename.tsx",
      lineNumber: 43,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/details.$filename.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "badge bg-secondary", children: [
      "Details page for ",
      data == null ? void 0 : data.key
    ] }, void 0, !0, {
      fileName: "app/routes/details.$filename.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: data == null ? void 0 : data.text } }, void 0, !1, {
      fileName: "app/routes/details.$filename.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/details.$filename.tsx",
    lineNumber: 41,
    columnNumber: 9
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  action: () => action,
  default: () => Index,
  loader: () => loader2
});
var import_react4 = require("@remix-run/react"), import_node5 = require("@remix-run/node");

// app/utils/cookie.ts
var import_node4 = require("@remix-run/node"), cookie = (0, import_node4.createCookie)("galactusCredentials", {
  maxAge: 36e3,
  httpOnly: !0,
  // secure: true,
  // sameSite: 'none',
  path: "/"
});

// app/routes/_index.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
async function loader2({ request }) {
  var _a;
  if (!getCookie(request.headers.get("Cookie"), "galactusCredentials"))
    return (0, import_node5.redirect)("/login", {
      statusText: "You are not signed in, or your session has expired."
    });
  try {
    return {
      errors: null,
      results: (await axios_default.post(
        "https://jh2jcgeo42rtmhlmmeirhadkla0zgnic.lambda-url.eu-central-1.on.aws/",
        "",
        {
          withCredentials: !0,
          headers: { Cookie: request.headers.get("Cookie") }
        }
      )).data
    };
  } catch (error) {
    return {
      errors: ((_a = error.response) == null ? void 0 : _a.data) || "Unknown error occured!",
      results: null
    };
  }
}
async function action() {
  return (0, import_node5.redirect)("/login", {
    headers: {
      "Set-Cookie": await cookie.serialize("", {
        expires: /* @__PURE__ */ new Date(0)
      })
    }
  });
}
function Index() {
  var _a;
  let data = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { className: "navbar bg-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container-fluid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { className: "navbar-brand text-light", href: "#", children: "Galactus \u2014 Test Shape Visualizer" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Form, { method: "post", className: "d-flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "btn btn-ternary text-light", type: "submit", children: "Sign out" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 55,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    data.errors ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "alert alert-danger", role: "alert", children: [
      "Error happened during server request: ",
      data.errors
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 61,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "badge bg-secondary", children: "My visualizations" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "list-group", children: (_a = data == null ? void 0 : data.results) == null ? void 0 : _a.map((element) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { className: "list-group-item list-group-item-action", to: `/details/${element}`, children: element }, element, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 72,
        columnNumber: 19
      }, this)) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 64,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Login
});
var import_node6 = require("@remix-run/node"), import_react5 = require("@remix-run/react");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), streamToString = async (stream4) => {
  let chunks = [];
  for await (let chunk of stream4)
    chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf-8");
};
async function action2({ request }) {
  var _a;
  let params = await streamToString(request.body), searchParams = new URLSearchParams(params), projectName = searchParams.get("projectName"), password = searchParams.get("password");
  try {
    return (await axios_default.post(
      "https://zomtqtey67kx4jalnwhtmtjoju0hqmbj.lambda-url.eu-central-1.on.aws/",
      JSON.stringify({ projectName, password }),
      { withCredentials: !0 }
    )).data !== "OK" ? {
      errorStatus: "Unknown error response received from server!"
    } : (0, import_node6.redirect)("/", {
      headers: {
        "Set-Cookie": await cookie.serialize({
          galactusCredentials: JSON.stringify({ projectName, password })
        })
      }
    });
  } catch (error) {
    return {
      errorStatus: ((_a = error.response) == null ? void 0 : _a.data) || "Unknown error occured!"
    };
  }
}
function Login() {
  let data = (0, import_react5.useActionData)(), transition = (0, import_react5.useNavigation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("nav", { className: "navbar bg-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "container-fluid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { className: "navbar-brand text-light", href: "#", children: "Galactus \u2014 Test Shape Visualizer" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 56,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 55,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "badge bg-secondary", children: "Welcome to the page!" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 60,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Form, { method: "post", children: [
      (data == null ? void 0 : data.errorStatus) && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "alert alert-danger", role: "alert", children: data.errorStatus }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 63,
        columnNumber: 39
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "input-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "projectName", className: "form-label", children: "Project name" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 68,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "text", className: "form-control", id: "projectName", name: "projectName", required: !0 }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 69,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 67,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 66,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "input-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "password", className: "form-label", children: "Password" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 74,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "password", className: "form-control", id: "password", name: "password", required: !0 }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 75,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 73,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 72,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "submit", value: "Submit", className: "btn btn-primary", disabled: transition.state === "submitting" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 79,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 78,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: transition.state === "submitting" && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "spinner-border", role: "status", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "visually-hidden", children: "Loading..." }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 83,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 82,
        columnNumber: 59
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 81,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 62,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 53,
    columnNumber: 9
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "8e023463", entry: { module: "/build/entry.client-XYZGG6QL.js", imports: ["/build/_shared/chunk-ASXT2IN2.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-QXYIZQPI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-OUZZUZDY.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/details.$filename": { id: "routes/details.$filename", parentId: "root", path: "details/:filename", index: void 0, caseSensitive: void 0, module: "/build/routes/details.$filename-Z4CWXKMQ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-VBPBLH47.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-8E023463.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/details.$filename": {
    id: "routes/details.$filename",
    parentId: "root",
    path: "details/:filename",
    index: void 0,
    caseSensitive: void 0,
    module: details_filename_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
