var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
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
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
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
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
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
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_jsx_runtime2 = require("react/jsx-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Galactus - Test shape visualizer",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// app/routes/details/$filename.tsx
var filename_exports = {};
__export(filename_exports, {
  default: () => DetailsRoute,
  loader: () => loader
});
var import_react3 = require("@remix-run/react"), import_node2 = require("@remix-run/node");

// app/utils/get-cookie.ts
var getCookie = (value, name) => {
  let cookieArr = value.split(";");
  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split("=");
    if (name == cookiePair[0].trim())
      return decodeURIComponent(cookiePair[1]);
  }
  return null;
};

// app/routes/details/$filename.tsx
var import_axios = __toESM(require("axios")), import_jsx_runtime3 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("h1", { children: [
      "Details page for ",
      data == null ? void 0 : data.key
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { dangerouslySetInnerHTML: { __html: data == null ? void 0 : data.text } })
  ] });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
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

// app/routes/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
async function loader2({ request }) {
  var _a;
  if (!getCookie(request.headers.get("Cookie"), "galactusCredentials"))
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
        expires: new Date(0)
      })
    }
  });
}
function Index() {
  var _a;
  let data = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", { children: "Galactus \u2014 Test Shape Visualizer" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { type: "submit", children: "Sign out" }) }) }),
    data.errors ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
      "Error happened during server request: ",
      data.errors
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "My visualizations:" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ul", { children: (_a = data == null ? void 0 : data.results) == null ? void 0 : _a.map((element) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Link, { to: `/details/${element}`, children: element }) }, element)) })
    ] })
  ] });
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Login
});
var import_node5 = require("@remix-run/node"), import_react5 = require("@remix-run/react"), import_axios3 = __toESM(require("axios"));
var import_jsx_runtime5 = require("react/jsx-runtime"), streamToString = async (stream) => {
  let chunks = [];
  for await (let chunk of stream)
    chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf-8");
};
async function action2({ request }) {
  var _a;
  let params = await streamToString(request.body), searchParams = new URLSearchParams(params), projectName = searchParams.get("projectName"), password = searchParams.get("password");
  try {
    let response = await import_axios3.default.post(
      "https://zomtqtey67kx4jalnwhtmtjoju0hqmbj.lambda-url.eu-central-1.on.aws/",
      JSON.stringify({ projectName, password }),
      { withCredentials: !0 }
    );
    return console.log(response.data), response.data !== "OK" ? {
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
  let data = (0, import_react5.useActionData)(), transition = (0, import_react5.useTransition)();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { children: "Galactus \u2014 Test Shape Visualizer" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "Welcome to the page!" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react5.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", { htmlFor: "projectName", children: "Project name:" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", { type: "text", id: "projectName", name: "projectName", required: !0 })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", { htmlFor: "password", children: "Password:" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", { type: "password", id: "password", name: "password", required: !0 })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", { type: "submit", value: "Submit", disabled: transition.state === "submitting" }),
        transition.state === "submitting" && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: "Signing in..." })
      ] }),
      (data == null ? void 0 : data.errorStatus) && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: { color: "red" }, children: data.errorStatus })
    ] })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "d6637fe3", entry: { module: "/build/entry.client-3BOZVKQW.js", imports: ["/build/_shared/chunk-4FNY77SM.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-XPPBAB5R.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/details/$filename": { id: "routes/details/$filename", parentId: "root", path: "details/:filename", index: void 0, caseSensitive: void 0, module: "/build/routes/details/$filename-VBCGXERM.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-SAE33KE2.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-JP2KTOEN.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-D6637FE3.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/details/$filename": {
    id: "routes/details/$filename",
    parentId: "root",
    path: "details/:filename",
    index: void 0,
    caseSensitive: void 0,
    module: filename_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
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
