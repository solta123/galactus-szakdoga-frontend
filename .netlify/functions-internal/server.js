var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
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

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_exports = {};
__export(assets_manifest_exports, {
  default: () => assets_manifest_default
});
var assets_manifest_default, init_assets_manifest = __esm({
  "server-assets-manifest:@remix-run/dev/assets-manifest"() {
    assets_manifest_default = { version: "95be204a", entry: { module: "/build/entry.client-XYZGG6QL.js", imports: ["/build/_shared/chunk-ASXT2IN2.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-4TXDVKFL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-PLYZFKIK.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/details.$filename": { id: "routes/details.$filename", parentId: "root", path: "details/:filename", index: void 0, caseSensitive: void 0, module: "/build/routes/details.$filename-OMVPBJCV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-Y622HBKC.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-95BE204A.js" };
  }
});

// node_modules/@remix-run/css-bundle/dist/server.js
var require_server = __commonJS({
  "node_modules/@remix-run/css-bundle/dist/server.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var assetsManifest = (init_assets_manifest(), __toCommonJS(assets_manifest_exports));
    function _interopDefaultLegacy(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var assetsManifest__default = /* @__PURE__ */ _interopDefaultLegacy(assetsManifest), cssBundleHref2 = assetsManifest__default.default.cssBundleHref;
    exports.cssBundleHref = cssBundleHref2;
  }
});

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
var import_css_bundle = __toESM(require_server()), import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : []
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/details.$filename.tsx
var details_filename_exports = {};
__export(details_filename_exports, {
  default: () => DetailsRoute,
  loader: () => loader
});
var import_react3 = require("@remix-run/react"), import_node2 = require("@remix-run/node");

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

// app/routes/details.$filename.tsx
var import_axios = __toESM(require("axios")), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
async function loader({ request, params }) {
  var _a;
  if (!getCookie(request.headers.get("Cookie"), "galactusCredentials"))
    return (0, import_node2.redirect)("/login", {
      statusText: "You are not signed in, or your session has expired."
    });
  try {
    return {
      errors: null,
      text: (await import_axios.default.post(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: [
      "Details page for ",
      data == null ? void 0 : data.key
    ] }, void 0, !0, {
      fileName: "app/routes/details.$filename.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: data == null ? void 0 : data.text } }, void 0, !1, {
      fileName: "app/routes/details.$filename.tsx",
      lineNumber: 43,
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
var import_react4 = require("@remix-run/react"), import_node4 = require("@remix-run/node"), import_axios2 = __toESM(require("axios"));

// app/utils/cookie.ts
var import_node3 = require("@remix-run/node"), cookie = (0, import_node3.createCookie)("galactusCredentials", {
  maxAge: 36e3,
  httpOnly: !0,
  secure: !0,
  sameSite: "none",
  path: "/"
});

// app/routes/_index.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
async function loader2({ request }) {
  var _a;
  if (console.log("index loader goes"), console.log(request.headers.get("Cookie")), !getCookie(request.headers.get("Cookie"), "galactusCredentials"))
    return (0, import_node4.redirect)("/login", {
      statusText: "You are not signed in, or your session has expired."
    });
  try {
    return {
      errors: null,
      results: (await import_axios2.default.post(
        "https://jh2jcgeo42rtmhlmmeirhadkla0zgnic.lambda-url.eu-central-1.on.aws/",
        "",
        {
          withCredentials: !0,
          headers: { Cookie: request.headers.get("Cookie") || "" }
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
  return (0, import_node4.redirect)("/login", {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "Galactus \u2014 Test Shape Visualizer" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "submit", children: "Sign out" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 60,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    data.errors ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
      "Error happened during server request: ",
      data.errors
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 65,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "My visualizations:" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: (_a = data == null ? void 0 : data.results) == null ? void 0 : _a.map((element) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: `/details/${element}`, children: element }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 77,
        columnNumber: 21
      }, this) }, element, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 76,
        columnNumber: 19
      }, this)) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 73,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 68,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Login
});
var import_node5 = require("@remix-run/node"), import_react5 = require("@remix-run/react"), import_axios3 = __toESM(require("axios"));
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), streamToString = async (stream) => {
  let chunks = [];
  for await (let chunk of stream)
    chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf-8");
};
async function action2({ request }) {
  var _a;
  let params = await streamToString(request.body), searchParams = new URLSearchParams(params), projectName = searchParams.get("projectName"), password = searchParams.get("password");
  try {
    return (await import_axios3.default.post(
      "https://zomtqtey67kx4jalnwhtmtjoju0hqmbj.lambda-url.eu-central-1.on.aws/",
      JSON.stringify({ projectName, password }),
      { withCredentials: !0 }
    )).data !== "OK" ? {
      errorStatus: "Unknown error response received from server!"
    } : (0, import_node5.redirect)("/", {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Galactus \u2014 Test Shape Visualizer" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Welcome to the page!" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 57,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "projectName", children: "Project name:" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 63,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "text", id: "projectName", name: "projectName", required: !0 }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 64,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 62,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "password", children: "Password:" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 67,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "password", id: "password", name: "password", required: !0 }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 68,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 66,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "submit", value: "Submit", disabled: transition.state === "submitting" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 71,
          columnNumber: 21
        }, this),
        transition.state === "submitting" && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Signing in..." }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 72,
          columnNumber: 59
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this),
      (data == null ? void 0 : data.errorStatus) && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { color: "red" }, children: data.errorStatus }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 74,
        columnNumber: 40
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 53,
    columnNumber: 9
  }, this);
}

// server-entry-module:@remix-run/dev/server-build
init_assets_manifest();
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
/*! Bundled license information:

@remix-run/css-bundle/dist/server.js:
  (**
   * @remix-run/css-bundle v1.16.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=server.js.map
