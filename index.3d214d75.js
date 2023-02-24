// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8BXtR":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _cgSelect = require("cg-select");
var _cgSelectDefault = parcelHelpers.interopDefault(_cgSelect);
// import { newCustomTheme } from './src/themeTest';
var _example = require("./src/example");
var _constructor = require("./src/constructor/constructor");
// ------------------------------Обычный селект--------------------
const dropdown = new (0, _cgSelectDefault.default)({
    selector: ".cg-dropdown_one",
    placeholder: "Choose a car",
    label: "EXAMPLE",
    items: [
        "BMW",
        {
            id: "213sade",
            title: "Opel",
            value: 1
        },
        "Mersedes",
        "MAN",
        "Ferari"
    ],
    styles: {
        head: {
            width: "830px"
        },
        list: {
            width: "824px"
        }
    }
});
// dropdown.on('clear', function (e) {
//   console.log(`this state: ${e}`);
// });
const droptheme = new (0, _cgSelectDefault.default)({
    selector: ".cg-dropdown_theme",
    placeholder: "Choose a car",
    items: [
        "BMW",
        {
            id: "213sade",
            title: "Opel",
            value: 1
        },
        "Mersedes",
        "MAN",
        "Ferari"
    ],
    styles: {
        head: {
            width: "830px"
        },
        list: {
            width: "824px"
        }
    },
    theme: "dark"
});
// ------------------------------NativeSelect-----------------------
const dropdownNativeSelect = new (0, _cgSelectDefault.default)({
    selector: ".cg-dropdown_selectNative",
    placeholder: "Choose a car",
    nativeSelectMode: true,
    items: [
        "BMW",
        {
            id: "213sade",
            title: "Opel",
            value: 1
        },
        "Mersedes",
        "MAN",
        "Ferari",
        "Kamaz",
        "Ural"
    ],
    styles: {
        head: {
            width: "830px"
        },
        list: {
            width: "824px"
        }
    },
    theme: "dark"
});
// ------------------------------listDisplayMode--------------------
const dropdownlistDisplayMode = new (0, _cgSelectDefault.default)({
    selector: ".cg-dropdown_listDisplayMode",
    placeholder: "Choose a car",
    listDisplayMode: true,
    items: [
        "BMW",
        {
            id: "213sade",
            title: "Opel",
            value: 1
        },
        "Mersedes",
        "MAN",
        "Ferari"
    ],
    styles: {
        head: {
            width: "830px"
        },
        list: {
            width: "824px"
        }
    }
});
// --------------------------------Категории--------------------------
const dropdown4 = new (0, _cgSelectDefault.default)({
    selector: ".cg-dropdown_categories",
    placeholder: "Choose region",
    searchMode: true,
    items: [
        {
            category: "Russia",
            categoryItems: [
                {
                    id: "28qwds",
                    title: "Москва",
                    value: 0
                },
                ,
                "Ростов-на-дону",
                "Саратов",
                "Волгоград",
                "Донецк"
            ]
        },
        {
            category: "USA",
            categoryItems: [
                "Alabama",
                "Texas",
                "Colorado",
                "Klirens",
                "Los-Angeles"
            ]
        },
        {
            category: "France",
            categoryItems: [
                "Paris"
            ]
        }
    ],
    styles: {
        head: {
            width: "830px"
        },
        list: {
            width: "824px"
        },
        placeholder: {
            maxWidth: "500px "
        }
    },
    multiselect: true,
    multiselectTag: true
});
//----------------управление с помощью кнопок----------------------------------
const dropdownBtn = new (0, _cgSelectDefault.default)({
    selector: ".cg-dropdown_usedBtn",
    placeholder: "Choose a car",
    searchMode: true,
    items: [
        "BMW",
        {
            id: "213sade",
            title: "Opel",
            value: 1
        },
        "Mersedes",
        "MAN",
        "max"
    ],
    styles: {
        head: {
            width: "830px",
            color: "black",
            backgroundColor: "rgb(176 223 167)"
        },
        list: {
            width: "824px",
            color: "black",
            backgroundColor: "rgb(176 223 167)"
        },
        caret: {
            borderTop: "6px solid black"
        },
        search: {
            backgroundColor: "#d7ffff",
            borderRadius: "5px",
            borderBottom: "none",
            width: "95%",
            color: "black"
        }
    },
    multiselect: true
});
const buttonOpen = document.querySelector(".button__open");
const buttonClose = document.querySelector(".button__close");
dropdownBtn.buttonControl(buttonOpen, "open");
dropdownBtn.buttonControl(buttonClose, "close");
//-------------------------Функция Disabled----------------------------------
const dropdownDisabled = new (0, _cgSelectDefault.default)({
    selector: ".cg-dropdown_checkboxDisable",
    placeholder: "Choose a car",
    searchMode: true,
    items: [
        "BMW",
        {
            id: "213sade",
            title: "Opel",
            value: 1
        },
        "Mersedes",
        "MAN",
        "max"
    ],
    styles: {
        head: {
            width: "830px"
        },
        list: {
            width: "824px"
        },
        placeholder: {
            maxWidth: "500px "
        }
    },
    multiselect: true
});
dropdownDisabled.disabled(true);
let chbox = document.getElementById("checkboxDisable");
chbox.addEventListener("click", ()=>{
    if (chbox.checked == true) dropdownDisabled.disabled(false);
    else dropdownDisabled.disabled(true);
});
// ------------------------------URL--------------------
const dropdown3 = new (0, _cgSelectDefault.default)({
    selector: ".cg-dropdown_three",
    placeholder: "URL",
    url: "https://jsonplaceholder.typicode.com/todos",
    searchMode: true,
    darkTheme: false,
    language: "ru",
    styles: {
        head: {
            width: "830px"
        },
        list: {
            width: "824px"
        }
    },
    multiselect: true
});

},{"cg-select":"5OIlO","./src/example":"jG7A6","./src/constructor/constructor":"45m1U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5OIlO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cgSelect = require("./src/cg-select");
exports.default = (0, _cgSelect.CGSelect);

},{"./src/cg-select":"9GdpM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9GdpM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @class Class Description ICgSelect
 * @description This class implements the functionality of a custom select, with customization capabilities.
 * @author Ovsyanikov Maxim
 */ parcelHelpers.export(exports, "CGSelect", ()=>CGSelect);
var _createElement = require("./components/create-element/create-element");
var _utils = require("./components/utils/utils");
var _language = require("./language/language");
var _mainScss = require("./main.scss");
var _theme = require("./components/theme/theme");
class CGSelect {
    /**
   * Array of indexes of selected elements.
   * @type {number[]}
   */ indexes = [];
    /**
   * @param {ICgSelect} setting Object accepting select settings.
   * @constructor ICgSelect class constructor.
   * @description The constructor takes an object and renders the select.
   * @example
   * options = {
   *  selector: 'Unique selector',
      selected: 'Selected item',
      placeholder: '...',
      label: '...'
      items: [string|number|object],
      theme: string,
      searchMode: true/false,
      closeOnSelect:  true/false,
      nativeSelectMode: true/false,
      listDisplayMode: true/false,
      language: 'ru/en',
      styles: {
        head: {
          background: '...',
        },
        list: {...},
        chips: {...},
        carriage: {...},
        placeholder: {...},
        label: {..},
      },
      event: '...',
      url: 'http/...',
      multiselect: true/false,
      multiselectTag: true/false,
   * } 
   */ constructor(setting){
        this.init(setting);
        this.render();
        this.closeSelectClick();
        this.initEvent();
    }
    //Getters
    /**
   * @returns {string[] | string} Returns the selected element(s) as an array / element / null.
   * @description Getter returning the selected element(s) of the select.
   */ get value() {
        return this.selectedItems ?? null;
    }
    /**
   * @returns {number | number[]} Returns the indices of the selected element(s) as an array / empty array.
   * @description A getter that returns the indexes of the selected element(s) of the select.
   */ get indexesOf() {
        return this.indexes ?? [];
    }
    /**
   * Private method for initializing an instance of the ICgSelect class.
   * @method init
   * @member
   * @private
   * @param {ISgSelect} setting passed select settings.
   * @description Private method. General initialization of the select. Obtaining tinctures and converting select elements.
   * @example
   *  {
        selector: '.cg-dropdown_one',
        placeholder: 'Choose a car',
        items: [
          'BMW',
          {
            id: '213sade',
            title: 'Opel',
            value: 1,
          },
          'Mersedes',
          'MAN',
          'max',
        ],
        multiselect: true,
        multiselectTag: true,
      }
   */ init(setting) {
        const { items , multiselect , multiselectTag , url , selector , listDisplayMode , nativeSelectMode , searchMode , language , styles , label , event , selected , placeholder , theme  } = setting;
        this.options = setting;
        this.multiselect = multiselect;
        this.multiselectTag = multiselectTag;
        this.url = url;
        this.selector = selector;
        this.items = items;
        this.searchMode = searchMode;
        this.language = language;
        this.nativeSelectMode = nativeSelectMode;
        this.listDisplayMode = listDisplayMode;
        this.styles = styles;
        this.label = label;
        this.event = event;
        this.selected = selected;
        this.placeholder = placeholder;
        this.theme = theme;
        const elem = document.querySelector(this.selector);
        this.element = elem;
        this.element?.addEventListener("click", (e)=>{
            e.preventDefault();
            this.open();
        });
        this.items = [];
        if (this.url && !items) {
            this.renderUrl();
            return;
        }
        if (this.label) {
            const labelItem = document.createElement("h1");
            const textLabel = document.createTextNode(this.label);
            labelItem.appendChild(textLabel);
            labelItem.classList.add("label");
            this.element.insertAdjacentElement("beforebegin", labelItem);
        }
        items.forEach((dataItem, index)=>{
            let itemInputs = {
                ItemValue: dataItem,
                category: dataItem.category,
                categoryItems: dataItem.categoryItems
            };
            if (itemInputs.category && itemInputs.categoryItems) {
                this.category = itemInputs.category;
                this.items.push(this.category);
                itemInputs.categoryItems.forEach((categoryItem, indexCategory)=>{
                    this.items.push((0, _utils.getFormatItem)(categoryItem, indexCategory));
                });
            } else this.items.push((0, _utils.getFormatItem)(itemInputs.ItemValue, index));
        });
    }
    /**
   * @private
   * @method render
   * @param {string} select  optional element. Passed to the initSelected.
   * @description Render elements in select.
   */ render(select) {
        const random = Math.random().toString(36).substring(2, 10);
        if (select || select && this.styles) {
            this.initSelected(select);
            (0, _utils.customStyles)(this.element, this.styles);
        } else this.initSelected();
        const ulList = document.createElement("ul");
        const nativeSelect = (0, _createElement.createNativeSelect)();
        let inputSearch;
        let textNode;
        this.randomId = random;
        ulList.classList.add("list");
        ulList.classList.add("classicList");
        if (this.styles) (0, _utils.customStylesFormat)(this.styles.list, ulList);
        if (this.searchMode) {
            if (this.language === "ru") inputSearch = (0, _createElement.createInputSearch)(random, (0, _language.ru).placeholder);
            else inputSearch = (0, _createElement.createInputSearch)(random, (0, _language.en).placeholder);
            (0, _utils.customStylesFormat)(this.styles?.search, inputSearch);
            ulList.appendChild(inputSearch);
        }
        this.element?.appendChild(ulList);
        this.items.forEach((dataItem)=>{
            this.element?.appendChild(nativeSelect);
            const liItem = document.createElement("li");
            const nativeOption = (0, _createElement.createNativeSelectOption)();
            const strongItem = document.createElement("strong");
            liItem.classList.add("list__item");
            strongItem.classList.add("category");
            if (this.multiselect) {
                const checkBox = document.createElement("input");
                checkBox.type = "checkbox";
                checkBox.setAttribute("id", `chbox-${dataItem.id}`);
                liItem.appendChild(checkBox);
                if (this.multiselectTag) checkBox.classList.add("displayHide");
                nativeSelect.setAttribute("multiple", "multiple");
            }
            if (dataItem.title) {
                nativeOption.text = dataItem.title;
                nativeOption.value = dataItem.title;
                textNode = document.createTextNode(dataItem.title);
                nativeSelect.appendChild(nativeOption);
                liItem.appendChild(textNode);
                ulList.appendChild(liItem);
            } else {
                // Для отрисовки категорий
                textNode = document.createTextNode(dataItem);
                strongItem.appendChild(textNode);
                ulList.appendChild(strongItem);
            }
        });
        this.items.filter((item, index)=>{
            if (typeof item !== "object") this.items.splice(index, 1);
            return item;
        });
        this.list = this.element.querySelector(".list");
        this.carriage = this.element.querySelector(".caret");
        if (this.theme) (0, _theme.changeTheme)(this.element, this.theme);
        if (this.nativeSelectMode === true) this.selectMode(this.nativeSelectMode);
        if (this.listDisplayMode) this.displayMode(this.listDisplayMode);
        this.addOptionsBehaviour();
    }
    /**
   * @private
   * @method renderUrl
   * @description Rendering elements in the select passed from the URL and setting them up.
   */ async renderUrl() {
        const response = await fetch(this.url);
        const dataUrl = await response.json();
        const nativeSelect = (0, _createElement.createNativeSelect)();
        dataUrl.forEach((dataItem, index)=>{
            const item = {
                id: dataItem.id,
                title: dataItem.title,
                value: index
            };
            const ulUrl = this.element.querySelector(".list");
            const nativeOption = (0, _createElement.createNativeSelectOption)();
            const liUrl = document.createElement("li");
            const textUrl = document.createTextNode(item.title);
            if (this.multiselect) {
                const checkBox = document.createElement("input");
                checkBox.type = "checkbox";
                if (this.multiselectTag) checkBox.classList.add("displayHide");
                checkBox.setAttribute("id", `chbox-${item.id}`);
                nativeSelect.setAttribute("multiple", "multiple");
                liUrl.appendChild(checkBox);
            }
            liUrl.classList.add("list__item");
            nativeOption.value = item.title;
            nativeOption.text = item.title;
            nativeSelect.appendChild(nativeOption);
            liUrl.appendChild(textUrl);
            ulUrl.appendChild(liUrl);
            this.items.push(item);
        });
        this.element.appendChild(nativeSelect);
        this.items.filter((item, index)=>{
            if (typeof item !== "object") this.items.splice(index, 1);
            return item;
        });
        this.addOptionsBehaviour();
    }
    /**
   * @method initSelected
   * @param {string} select optional element. Used in the selectedIndex method.
   * @description Renders and styles the select.
   * @private
   */ initSelected(select) {
        if (this.selected) (0, _utils.createSelected)(this.element, this.selected);
        else if (this.placeholder) (0, _utils.createSelected)(this.element, this.placeholder);
        else if (this.language && this.language === "ru") (0, _utils.createSelected)(this.element, (0, _language.ru).selectPlaceholder);
        else (0, _utils.createSelected)(this.element, (0, _language.en).selectPlaceholder);
        if (select) (0, _utils.createSelected)(this.element, select, this.styles);
        if (this.styles) (0, _utils.customStyles)(this.element, this.styles);
    }
    /**
   * @private
   * @description Opens and closes the list by the passed event.
   * @method initEvent
   */ initEvent() {
        if (this.event) {
            if (this.event === "mouseenter") {
                this.element.addEventListener(this.event, ()=>{
                    this.open();
                });
                this.element.addEventListener("mouseleave", ()=>{
                    this.close();
                });
            }
        }
    }
    /**
   * @private
   * @param {boolean} oneClick optional parameter passed from the buttonControl function.
   * @description Opens a list to select an element.
   * @method open
   */ open(oneClick) {
        if (oneClick === true) {
            this.list.classList.add("open");
            this.carriage.classList.add("caret_rotate");
        } else {
            this.list.classList.toggle("open");
            this.carriage.classList.toggle("caret_rotate");
        }
    }
    /**
   * @private
   * @description Closes the list.
   * @method close
   */ close() {
        this.list?.classList.remove("open");
        this.carriage?.classList.remove("caret_rotate");
    }
    /**
   * @private
   * @description Closes the list on click outside of an element.
   * @method closeSelectClick
   */ closeSelectClick() {
        const dropdown = document.querySelector(`${this.options.selector}`);
        document.addEventListener("click", (e)=>{
            const withinBoundaries = e.composedPath().includes(dropdown);
            if (!withinBoundaries) {
                if (this.buttonAction) return;
                else this.close();
            }
        });
    }
    /**
   * @private
   * @description A method that implements the selection of elements in different modes.
   * @method addOptionsBehaviour
   */ addOptionsBehaviour() {
        const options = this.element?.querySelectorAll(".list__item");
        const select = this.element?.querySelector(".selected");
        const nativeOption = this.element.querySelectorAll(".nativeSelect__nativeOption");
        let selectedItemsClear = {
            placeholder: this.placeholder,
            selected: this.selected,
            theme: this.theme
        };
        const ulMultipul = document.createElement("ul");
        if (this.multiselect) {
            this.selectedItems = [];
            ulMultipul.classList.add("multiselect-tag");
            select?.classList.add("overflow-hidden");
        }
        if (this.searchMode) this.searchModeSelect(this.randomId);
        options?.forEach((option, index)=>{
            option.addEventListener("click", (event)=>{
                if (Array.isArray(this.selectedItems)) selectedItemsClear = {
                    placeholder: this.placeholder,
                    selected: this.selected,
                    selectedItems: this.selectedItems,
                    indexes: this.indexes,
                    multiselectTag: this.multiselectTag
                };
                const item = this.items[index];
                const checkIndex = this.indexes.indexOf(index);
                if (this.closeOnSelect == false || this.multiselect) {
                    event.stopPropagation();
                    event.preventDefault();
                }
                if (this.multiselect) {
                    option.classList.toggle("active");
                    const checkBox = option.querySelector('input[type="checkbox"]');
                    if (checkBox) {
                        if (!(event.target instanceof HTMLInputElement)) checkBox.checked = !checkBox.checked;
                        if (checkIndex == -1) {
                            this.indexes.push(index);
                            (0, _utils.nativeOptionMultiple)(nativeOption, item.title, true);
                            select.textContent = "";
                            if (this.multiselectTag) {
                                if (Array.isArray(this.selectedItems)) {
                                    const dataBreadCrumb = {
                                        option: this.options,
                                        element: this.element,
                                        indexes: this.indexes,
                                        selectedItems: this.selectedItems
                                    };
                                    this.selectedItems.push(item.title);
                                    select.appendChild(ulMultipul);
                                    ulMultipul.appendChild((0, _createElement.createBreadCrumb)(dataBreadCrumb, item.title, index, item.id));
                                }
                            } else if (Array.isArray(this.selectedItems)) {
                                this.selectedItems.push(item.title);
                                select.innerText = this.selectedItems.join(",");
                            }
                        } else {
                            if (this.multiselectTag) {
                                const tagItem = document.getElementById(`tag-${index}-${item.id}`);
                                ulMultipul.removeChild(tagItem);
                            }
                            if (Array.isArray(this.selectedItems)) {
                                this.selectedItems.splice(checkIndex, 1);
                                this.indexes.splice(checkIndex, 1);
                                (0, _utils.nativeOptionMultiple)(nativeOption, item.title, false);
                            }
                        }
                        if (!this.selectedItems.length) (0, _utils.getSelectText)(selectedItemsClear, select);
                        else {
                            if (this.multiselectTag) select.appendChild(ulMultipul);
                            else if (Array.isArray(this.selectedItems)) select.innerText = this.selectedItems.join(",");
                        }
                    }
                } else {
                    select.textContent = item.title;
                    this.selectedItems = item.title;
                    (0, _utils.nativeOptionOrdinary)(nativeOption, item.title);
                    options.forEach((option)=>{
                        option.classList.remove("active");
                    });
                    option.classList.add("active");
                }
                (0, _utils.clearSelect)(select, this.element, selectedItemsClear);
            });
        });
    }
    /**
   * @private
   * @param {boolean} nativeSelectMode parameter responsible for adding native select.
   * @description Changes the display of the select on mobile devices.
   * @method selectMode
   */ selectMode(nativeSelectMode) {
        let win = window.outerWidth;
        if (nativeSelectMode === true) {
            const select = this.element.querySelector(".cg-select");
            const list = this.element.querySelector(".list");
            const nativeSelect = this.element.querySelector(".nativeSelect");
            if (win < 576) {
                select.classList.add("displayHide");
                list.classList.add("displayHide");
                nativeSelect.classList.add("nativeSelectActive");
            } else if (win > 576) {
                select.classList.remove("displayHide");
                list.classList.remove("displayHide");
                nativeSelect.classList.remove("nativeSelectActive");
                nativeSelect.classList.add("displayHide");
            }
        } else return;
    }
    /**
   * @description The method that implements the search for elements in the select.
   * @private
   * @param {string} random unique value for input element.
   * @method searchMode
   */ searchModeSelect(random) {
        const input = this.element.querySelector(`#searchSelect-${random}`);
        const searchSelect = this.element.querySelectorAll(".list__item");
        const result = document.createElement("p");
        let textNode;
        if (this.language && this.language === "ru") textNode = document.createTextNode(`${(0, _language.ru).textInListSearch}`);
        else textNode = document.createTextNode(`${(0, _language.en).textInListSearch}`);
        result.appendChild(textNode);
        result.classList.add("displayHide");
        result.classList.add("noRezult");
        input.parentElement.appendChild(result);
        input.addEventListener("click", (e)=>{
            e.stopPropagation();
        });
        if (input instanceof HTMLInputElement) input.oninput = function() {
            let valueSearch = input.value.trim().toLowerCase();
            let anyMatch = false;
            if (valueSearch != "") {
                searchSelect.forEach((elem)=>{
                    let isMatching = new RegExp(valueSearch, "gi").test(elem.textContent);
                    anyMatch = anyMatch || isMatching;
                    if (elem.textContent.toLowerCase().search(valueSearch) == -1) elem.classList.add("displayHide");
                    else elem.classList.remove("displayHide");
                });
                result.classList.toggle("displayHide", anyMatch);
            } else searchSelect.forEach((elem)=>{
                elem.classList.remove("displayHide");
                result.classList.add("displayHide");
            });
        };
    }
    /**
   * @private
   * @param {boolean} listDisplayMode parameter responsible for displaying the selection in the form of a modal window.
   * @description Changes the display of a sheet with a selection as a modal window.
   * @method displayMode
   */ displayMode(listDisplayMode) {
        if (listDisplayMode) {
            const modal = document.createElement("div");
            const body = document.querySelector("body");
            const list = this.list;
            modal.appendChild(list);
            this.element.appendChild(modal);
            this.element.addEventListener("click", ()=>{
                modal.classList.toggle("modal");
                list.classList.toggle("listModal");
                body.classList.toggle("overflowHide");
            });
        } else return;
    }
    // Public methods
    /**
   * @param {number} numberItem returned element number.
   * @returns {HTMLElement} returns a reference to the selected HTML element.
   * @method getElement
   */ getElement(numberItem) {
        if (numberItem > this.items.length) return;
        return this.items[numberItem];
    }
    /**
   * @param {ILanguage} language the object in which the fields for connecting the language are located has two mandatory fields placeholder, textInListSearch, selectPlaceholder.
   * @description a method that allows you to change the placeholder in the search and the text that is displayed if there is no result.
   * @method addLanguage
   */ addLanguage(language) {
        const { placeholder , textInListSearch , selectPlaceholder  } = language;
        const select = this.element.querySelector(".selected");
        const textNodeSelect = document.createTextNode(selectPlaceholder);
        select.appendChild(textNodeSelect);
        if (this.searchMode) {
            const search = this.element.querySelector(".inputSearch");
            const textNoRezult = this.element.querySelector(".noRezult");
            const textNode = document.createTextNode(textInListSearch);
            search.setAttribute("placeholder", placeholder);
            search.setAttribute("placeholder", placeholder);
            textNoRezult.textContent = "";
            textNoRezult.appendChild(textNode);
        }
    }
    /**
   * @param {HTMLInputElement} button - HTML button.
   * @param {string} method - open/close method.
   * @description A method that allows you to open / close the select using buttons.
   * @method buttonControl
   */ buttonControl(button, method) {
        if (this.listDisplayMode) return;
        this.buttonAction = button;
        button.addEventListener("click", ()=>{
            if (method.toLowerCase() === "open") this.open(true);
            else if (method.toLowerCase() === "close") this.close();
            else return;
        });
    }
    /**
   * @param {boolean} value - Passed parameter to add the disabled attribute.
   * @description A method that allows you to toggle the state of the disabled select.
   * @method disabled
   */ disabled(value) {
        const select = this.element.querySelector(".cg-select");
        const nativeSelect = this.element.querySelector(".nativeSelect");
        if (value === true) {
            this.element.setAttribute("disabled", "true");
            nativeSelect.setAttribute("disabled", "true");
            select.classList.add("disabled");
        } else {
            this.element.removeAttribute("disabled");
            nativeSelect.removeAttribute("disabled");
            select.classList.remove("disabled");
        }
    }
    /**
   * @param {string | IItems} item added element.
   * @description adds the given element to the end of the list and redraws the list. Cannot be used when passing elements with categories.
   * @method addItem
   */ addItem(item) {
        if (this.category) {
            console.log("can`t add item to category");
            return;
        }
        if (!item) return false;
        const index = this.items.length;
        this.items.push((0, _utils.getFormatItem)(item, index));
        this.render();
    }
    /**
   * @param {number} index the index of the element to be removed.
   * @description removes the element by index from the list and redraws it. Cannot be used when passing elements with categories.
   * @method deleteItem
   */ deleteItem(index) {
        if (this.category) {
            console.log("can`t add item to category");
            return;
        }
        const item = this.items[index];
        this.items.splice(index, 1);
        this.render();
    }
    /**
   * @description removes all elements from the list and redraws it.
   * @method deleteItemAll
   */ deleteItemAll() {
        this.items.splice(0, this.items.length);
        this.render();
    }
    /**
   * @param {number} index the index of the selected element.
   * @description selects the element that will be initially rendered in the select.
   * @method selectIndex
   */ selectIndex(index) {
        if (this.category) {
            console.log("can`t add item to category");
            return;
        }
        const options = this.element.querySelectorAll(".list__item");
        if (index > options.length) return;
        const select = options[index].innerText;
        this.render(select);
    }
    /**
   * @description Method for tracking the actions of the select, you can pass a callback
   * @param state select state.
   * @param callback
   * @method on
   */ on(state, callback) {
        const options = this.element?.querySelectorAll(".list__item");
        let value = "";
        switch(state){
            case "select":
                options?.forEach((option)=>{
                    option.addEventListener("click", ()=>{
                        console.log("option:select", option.textContent);
                        value = option.textContent;
                        callback(state, value);
                    });
                });
                break;
            case "close":
                this.element.addEventListener("click", ()=>{
                    console.log("list:close", this.list.classList.contains("close"));
                });
                callback(state);
                break;
            case "open":
                this.element.addEventListener("click", ()=>{
                    console.log("list:open", this.list.classList.contains("open"));
                });
                callback(state);
                break;
            case "clear":
                this.element.addEventListener("click", ()=>{
                    const svgIcon = this.element?.querySelector(".svg-icon");
                    svgIcon?.addEventListener("click", ()=>{
                        console.log("list:clear", svgIcon.classList.contains("svg-clear"));
                    });
                });
                callback(state);
                break;
        }
    }
}

},{"./components/create-element/create-element":"dZ75K","./components/utils/utils":"cJ5LY","./language/language":"93kuc","./main.scss":"jMkU3","./components/theme/theme":"jvYNX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dZ75K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The method that creates the native select.
 * @returns {HTMLSelectElement} Returns the created native select.
 */ parcelHelpers.export(exports, "createNativeSelect", ()=>createNativeSelect);
/**
 * The method that creates Options for the native select.
 * @returns {HTMLOptionElement} Returns the generated Options of the native select.
 */ parcelHelpers.export(exports, "createNativeSelectOption", ()=>createNativeSelectOption);
/**
 * The method that creates and is responsible for the behavior of the chips.
 * @param {ICreateBreadCrumb} data an object that contains settings and select elements.
 * @param {string} title the name of the selected element to draw chips.
 * @param {number} index index of the selected item to draw chips.
 * @param {string} id unique id of the selected element.
 * @returns {HTMLElement} returns the generated HTMLElement chips item.
 */ parcelHelpers.export(exports, "createBreadCrumb", ()=>createBreadCrumb);
/**
 * The method that creates a search for elements in the select.
 * @param {string} random unique value for input element.
 * @param {string} lenguage text in specific language passed from language.ts file
 * @returns {HTMLInputElement} Returns the rendered input element.
 */ parcelHelpers.export(exports, "createInputSearch", ()=>createInputSearch);
var _utils = require("../utils/utils");
function createNativeSelect() {
    const nativeSelect = document.createElement("select");
    nativeSelect.setAttribute("name", "dataSelect");
    nativeSelect.classList.add("nativeSelect");
    return nativeSelect;
}
function createNativeSelectOption() {
    const nativeOption = document.createElement("option");
    nativeOption.classList.add("nativeSelect__nativeOption");
    return nativeOption;
}
function createBreadCrumb(data, title, index, id) {
    const { element , option , indexes , selectedItems  } = data;
    const { placeholder , styles  } = option;
    const selected = element?.querySelector(".selected");
    const nativeOption = element.querySelectorAll(".nativeSelect__nativeOption");
    const liChip = document.createElement("li");
    const textNode = document.createTextNode(title);
    const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svgIcon.setAttribute("viewBox", "0 0 10 10");
    path1.setAttribute("d", "M3,7 L7,3");
    path2.setAttribute("d", "M3,3 L7,7");
    liChip.setAttribute("id", `tag-${index}-${id}`);
    svgIcon.classList.add("svg-icon");
    svgIcon.appendChild(path1);
    svgIcon.appendChild(path2);
    liChip.appendChild(textNode);
    liChip.appendChild(svgIcon);
    if (styles) {
        const { chips  } = styles;
        (0, _utils.customStylesFormat)(chips, liChip);
    }
    svgIcon.addEventListener("click", (event)=>{
        event.preventDefault();
        event.stopPropagation();
        (0, _utils.nativeOptionMultiple)(nativeOption, title, false);
        const deleteIcon = indexes.indexOf(index);
        let checkBox;
        indexes.splice(deleteIcon, 1);
        selectedItems.splice(deleteIcon, 1);
        if (id) checkBox = document.getElementById(`chbox-${id}`);
        else checkBox = document.getElementById(`chbox-${index}`);
        checkBox.checked = false;
        checkBox.parentElement.classList.remove("active");
        if (!selectedItems.length) selected.innerText = placeholder;
        liChip.parentElement.removeChild(liChip);
    });
    return liChip;
}
function createInputSearch(random, lenguage) {
    const inputSearch = document.createElement("input");
    inputSearch.type = "text";
    inputSearch.classList.add("inputSearch");
    inputSearch.setAttribute("id", `searchSelect-${random}`);
    if (lenguage) inputSearch.setAttribute("placeholder", `${lenguage}`);
    else inputSearch.setAttribute("placeholder", "Search...");
    inputSearch.addEventListener("click", (e)=>{
        e.preventDefault();
    });
    return inputSearch;
}

},{"../utils/utils":"cJ5LY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cJ5LY":[function(require,module,exports) {
/**
 * Utils module
 * @module Utils
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Converting each item obtained from the Items field;
 * @param {any} dataItem received element passed when creating the select.
 * @param {number} index index of this element.
 * @returns {IItems} returns the formed object
 */ parcelHelpers.export(exports, "getFormatItem", ()=>getFormatItem);
/**
 * Insert initial select text (before selection)
 * @param {ITextSelect} data the object in which the title of the select is located.
 * @param {HTMLElement | null | undefined} select select element where title will be inserted.
 * @returns {HTMLElement} returns the generated select element.
 */ parcelHelpers.export(exports, "getSelectText", ()=>getSelectText);
/**
 * Checking if item contains the specified properties.
 * @param {object} item element to be checked against a certain structure.
 * @returns {boolean} returns true/false if item contains the specified properties.
 */ parcelHelpers.export(exports, "checkItemStruct", ()=>checkItemStruct);
/**
 * Creating an Item Selector Button.
 * @param {HTMLElement} element instantiated class CgSelect.
 * @param {string} content placeholer passed from select settings.
 * @param {object} styles optional parameter. The object in which the settings for customizing parts of the select are located.
 */ parcelHelpers.export(exports, "createSelected", ()=>createSelected);
/**
 * Creating a clear select button, with a single selection.
 * @param {HTMLElement} select place in the select that will be reassigned to ''.
 * @param {Element} element class instance CgSelect.
 * @param {ISelectedItems} dataSelectText the text that is rendered in the select.
 */ parcelHelpers.export(exports, "clearSelect", ()=>clearSelect);
/**
 * Behavior of a native (single) select when choosing a custom one.
 * @param {NodeList} element NodeList native select.
 * @param {any} item selected element in custom select.
 */ parcelHelpers.export(exports, "nativeOptionOrdinary", ()=>nativeOptionOrdinary);
/**
 * The behavior of the native (Multiple) select when choosing in a custom one.
 * @param {NodeListOf<Element> | undefined} element NodeList of native select.
 * @param {string} item selected element in custom select.
 * @param {boolean} condition a special flag that adds / removes attributes from the native select.
 */ parcelHelpers.export(exports, "nativeOptionMultiple", ()=>nativeOptionMultiple);
/**
 * Finding and styling elements derived from the styles instance CgSelect
 * @param {Element} element instantiated class CgSelect.
 * @param {object} styles object in which there are settings for customizing parts of the select.
 */ parcelHelpers.export(exports, "customStyles", ()=>customStyles);
/**
 * Generic Method for Styling a Select.
 * @param {object} elemOption an object obtained from the styles object from which we get the styles key-value.
 * @param {HTMLElement} selector  HTMLElement subject to customization.
 */ parcelHelpers.export(exports, "customStylesFormat", ()=>customStylesFormat);
function getFormatItem(dataItem, index) {
    const random = Math.random().toString(36).substring(2, 10);
    let item;
    if (checkItemStruct(dataItem)) return dataItem;
    else {
        item = {
            id: random,
            title: dataItem,
            value: index
        };
        return item;
    }
}
function getSelectText(data, select) {
    const { placeholder , selected  } = data;
    if (placeholder) select.innerText = placeholder;
    else if (selected) select.innerText = selected;
    else select.innerText = "Select...";
    return select;
}
function checkItemStruct(item) {
    if (item && typeof item !== "object") return false;
    return item.hasOwnProperty("id") && item.hasOwnProperty("title") && item.hasOwnProperty("value");
}
function createSelected(element, content, styles) {
    const select = document.createElement("div");
    const selected = document.createElement("p");
    const caret = document.createElement("div");
    select.classList.add("cg-select");
    select.classList.add("classicSelect");
    selected.classList.add("selected");
    caret.classList.add("caret");
    select.appendChild(selected);
    select.appendChild(caret);
    if (content) {
        const text = document.createTextNode(content);
        selected.appendChild(text);
        element.innerHTML = "";
        element?.insertAdjacentElement("afterbegin", select);
    } else if (styles) {
        customStyles(element, styles);
        select.setAttribute("style", `${styles}`);
        selected.setAttribute("style", `${styles}`);
        caret.setAttribute("style", `${styles}`);
    }
}
function clearSelect(select, element, dataSelectText) {
    const { selectedItems , indexes , theme , multiselectTag  } = dataSelectText;
    const options = element.querySelectorAll(".list__item");
    const nativeOption = element.querySelectorAll(".nativeSelect__nativeOption");
    const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const checkBox = element.querySelectorAll("li input");
    svgIcon.setAttribute("viewBox", "0 0 10 10");
    path1.setAttribute("d", "M2,8 L8,2");
    path2.setAttribute("d", "M2,2 L8,8");
    svgIcon.appendChild(path1);
    svgIcon.appendChild(path2);
    if (multiselectTag && multiselectTag == true) return;
    switch(theme){
        case "dark":
            path1.classList.add("pathWhite");
            path2.classList.add("pathWhite");
            break;
        case "white":
            path1.classList.add("pathBlack");
            path2.classList.add("pathBlack");
            break;
        default:
            path1.classList.add("pathWhite");
            path2.classList.add("pathWhite");
            break;
    }
    svgIcon.classList.add("svg-icon");
    svgIcon.classList.add("svg-clear");
    select.appendChild(svgIcon);
    svgIcon.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();
        select.innerText = "";
        nativeOption.forEach((option)=>{
            option.removeAttribute("selected");
        });
        if (Array.isArray(selectedItems)) {
            selectedItems.splice(0);
            indexes.splice(0);
        }
        checkBox.forEach((item)=>{
            if (item instanceof HTMLInputElement) item.checked = false;
        });
        getSelectText(dataSelectText, select);
        options.forEach((option)=>{
            option.classList.remove("active");
        });
    });
}
function nativeOptionOrdinary(element, item) {
    element.forEach((option)=>{
        option.removeAttribute("selected");
        if (option.textContent === item) option.setAttribute("selected", "selected");
    });
}
function nativeOptionMultiple(element, item, condition) {
    element.forEach((option)=>{
        if (condition == true) {
            if (option.textContent === item) option.setAttribute("selected", "selected");
        } else if (condition == false) {
            if (option.textContent === item) option.removeAttribute("selected");
        } else return;
    });
}
function customStyles(element, styles) {
    const cgSelect = element.querySelector(".cg-select");
    const caretSelect = element.querySelector(".caret");
    const placeholderSelect = element.querySelector(".selected");
    const lableItem = element.parentElement.querySelector("h1.label");
    customStylesFormat(styles.head, cgSelect);
    customStylesFormat(styles.caret, caretSelect);
    customStylesFormat(styles.lable, lableItem);
    if (placeholderSelect) customStylesFormat(styles.placeholder, placeholderSelect);
}
function customStylesFormat(elemOption, selector) {
    if (elemOption) Object.entries(elemOption).forEach(([key, value])=>{
        selector.style[key] = value;
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"93kuc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ru", ()=>ru);
parcelHelpers.export(exports, "en", ()=>en);
const ru = {
    selectPlaceholder: "Выберите элемент...",
    placeholder: "Поиск...",
    textInListSearch: "Совпадений нет..."
};
const en = {
    selectPlaceholder: "Select element...",
    placeholder: "Search...",
    textInListSearch: "No matches..."
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jMkU3":[function() {},{}],"jvYNX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "changeTheme", ()=>changeTheme);
function changeTheme(element, theme) {
    const select = element.querySelector(".cg-select");
    const caret = element.querySelector(".caret");
    const list = element.querySelector("ul.list");
    const search = element.querySelector(".inputSearch");
    const path = element.querySelectorAll(".pathWhite");
    const nativeSelect = element.querySelector(".nativeSelect");
    select.classList.remove("classicSelect");
    list.classList.remove("classicList");
    path.forEach((elem)=>{
        elem.classList.remove("pathBlack");
        elem.classList.remove("pathWhite");
    });
    if (typeof theme === "string") switch(theme){
        case "dark":
            select.classList.add("selectDark");
            list.classList.add("listDark");
            nativeSelect?.classList.add("listDark");
            path.forEach((elem)=>{
                elem.classList.add("pathWhite");
            });
            break;
        case "white":
            select.classList.add("selectWhite");
            caret.classList.add("caretWhite");
            list.classList.add("listWhite");
            nativeSelect?.classList.add("listWhite");
            path.forEach((elem)=>{
                elem.classList.add("pathBlack");
            });
            if (search) search.classList.add("inputWhite");
            break;
        default:
            select.classList.add("classicSelect");
            list.classList.add("classicList");
            break;
    }
    else {
        select.classList.add(`${theme.styles.head}`);
        list.classList.add(`${theme.styles.list}`);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jG7A6":[function(require,module,exports) {
const firstBtn = document.getElementById("first");
const codeFirst = document.getElementById("codeFirst");
const secondBtn = document.getElementById("second");
const codeSecond = document.getElementById("codeSecond");
const thirdBtn = document.getElementById("third");
const codeThird = document.getElementById("codeThird");
const fourthBtn = document.getElementById("fourth");
const codeFourth = document.getElementById("codeFourth");
const fifthBtn = document.getElementById("fifth");
const codeFifth = document.getElementById("codeFifth");
const six = document.getElementById("six");
const codeSix = document.getElementById("codeSix");
const Native = document.getElementById("Native");
const codeNative = document.getElementById("codeNative");
firstBtn.addEventListener("click", ()=>{
    codeFirst.classList.toggle("active");
});
secondBtn.addEventListener("click", ()=>{
    codeSecond.classList.toggle("active");
});
thirdBtn.addEventListener("click", ()=>{
    codeThird.classList.toggle("active");
});
fourthBtn.addEventListener("click", ()=>{
    codeFourth.classList.toggle("active");
});
fifthBtn.addEventListener("click", ()=>{
    codeFifth.classList.toggle("active");
});
six.addEventListener("click", ()=>{
    codeSix.classList.toggle("active");
});
Native.addEventListener("click", ()=>{
    codeNative.classList.toggle("active");
});

},{}],"45m1U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _cgSelect = require("cg-select");
var _cgSelectDefault = parcelHelpers.interopDefault(_cgSelect);
const body = new (0, _cgSelectDefault.default)({
    selector: ".body",
    placeholder: "Select element to style",
    items: [
        "head",
        "list",
        "placeholder",
        "caret",
        "search"
    ]
});
let head = "";
let list = "";
let placeholder = "";
let caret = "";
let valueSelect = "";
const textarea = document.querySelector("#styles");
const renderBtn = document.querySelector(".render");
body.on("select", (e, value)=>{
    valueSelect = value;
    textarea.value = "";
    textarea.removeAttribute("disabled");
    getValueSelect(valueSelect);
});
function getValueSelect(value) {
    textarea.onkeyup = function() {
        switch(value){
            case "head":
                // ввод стилей
                head = textarea.value;
                break;
            case "list":
                list = textarea.value;
                break;
            case "placeholder":
                placeholder = textarea.value;
                break;
            case "caret":
                caret = textarea.value;
                break;
            case "search":
                search = textarea.value;
                break;
            default:
                break;
        }
    };
}
renderBtn.addEventListener("click", ()=>{
    const select = new (0, _cgSelectDefault.default)({
        selector: ".select",
        placeholder: "Choose a car",
        label: "Exemple select",
        items: [
            "BMW",
            {
                id: "213sade",
                title: "Opel",
                value: 1
            },
            "Mersedes",
            "MAN",
            "Ferari"
        ],
        searchMode: true,
        multiselect: true,
        multiselectTag: true
    });
    const drop = document.querySelector(".select");
    let headSelect = drop.querySelector(".cg-select");
    let listSelect = drop.querySelector(".list");
    let placeholderSelect = drop.querySelector(".selected");
    let caretSelect = drop.querySelector(".caret");
    let searchSelect = drop.querySelector(".inputSearch");
    headSelect.setAttribute("style", head);
    listSelect.setAttribute("style", list);
    placeholderSelect.setAttribute("style", placeholder);
    caretSelect.setAttribute("style", caret);
    searchSelect.setAttribute("style", search);
});

},{"cg-select":"5OIlO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8BXtR","bB7Pu"], "bB7Pu", "parcelRequire1ca4")

//# sourceMappingURL=index.3d214d75.js.map
