"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path?8ff8":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fcroissants%2FDesktop%2FCODING%20STUFF%2FCS%20Immersive%2FProject%20Phase%2FOSP%2FZeus%2Fzeus-next-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcroissants%2FDesktop%2FCODING%20STUFF%2FCS%20Immersive%2FProject%20Phase%2FOSP%2FZeus%2Fzeus-next-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fcroissants%2FDesktop%2FCODING%20STUFF%2FCS%20Immersive%2FProject%20Phase%2FOSP%2FZeus%2Fzeus-next-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcroissants%2FDesktop%2FCODING%20STUFF%2FCS%20Immersive%2FProject%20Phase%2FOSP%2FZeus%2Fzeus-next-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_croissants_Desktop_CODING_STUFF_CS_Immersive_Project_Phase_OSP_Zeus_zeus_next_app_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/croissants/Desktop/CODING STUFF/CS Immersive/Project Phase/OSP/Zeus/zeus-next-app/src/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_croissants_Desktop_CODING_STUFF_CS_Immersive_Project_Phase_OSP_Zeus_zeus_next_app_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmNyb2lzc2FudHMlMkZEZXNrdG9wJTJGQ09ESU5HJTIwU1RVRkYlMkZDUyUyMEltbWVyc2l2ZSUyRlByb2plY3QlMjBQaGFzZSUyRk9TUCUyRlpldXMlMkZ6ZXVzLW5leHQtYXBwJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmNyb2lzc2FudHMlMkZEZXNrdG9wJTJGQ09ESU5HJTIwU1RVRkYlMkZDUyUyMEltbWVyc2l2ZSUyRlByb2plY3QlMjBQaGFzZSUyRk9TUCUyRlpldXMlMkZ6ZXVzLW5leHQtYXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2dGO0FBQzdKO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemV1cy1uZXh0LWFwcC8/NzcyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvY3JvaXNzYW50cy9EZXNrdG9wL0NPRElORyBTVFVGRi9DUyBJbW1lcnNpdmUvUHJvamVjdCBQaGFzZS9PU1AvWmV1cy96ZXVzLW5leHQtYXBwL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvY3JvaXNzYW50cy9EZXNrdG9wL0NPRElORyBTVFVGRi9DUyBJbW1lcnNpdmUvUHJvamVjdCBQaGFzZS9PU1AvWmV1cy96ZXVzLW5leHQtYXBwL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fcroissants%2FDesktop%2FCODING%20STUFF%2FCS%20Immersive%2FProject%20Phase%2FOSP%2FZeus%2Fzeus-next-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcroissants%2FDesktop%2FCODING%20STUFF%2FCS%20Immersive%2FProject%20Phase%2FOSP%2FZeus%2Fzeus-next-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);\n/**\n * Next-Auth.js version of the google Oauth\n  params object of authorization which will force the Refresh Token to always be\n  provided on sign in, however this will ask all users to confirm if they wish\n  to grant your application access every time they sign in. This is required as\n  we are not using Zeus database to persist user data for google accounts\n * @param {GoogleProvider} provider\n * \n */ \n\n\ndotenv__WEBPACK_IMPORTED_MODULE_2___default().config();\nconst GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID ?? \"\";\nconst GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET ?? \"\";\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: GOOGLE_CLIENT_ID,\n            clientSecret: GOOGLE_CLIENT_SECRET\n        })\n    ],\n    callbacks: {\n        async signIn ({ account, profile }) {\n            if (account?.accessToken) {\n                console.log(\"signIn\", account, profile);\n                return true;\n            }\n            if (!profile?.email) {\n                throw new Error(\"No account found\");\n            }\n            return true;\n        },\n        async redirect ({ url, baseUrl }) {\n            console.log(\"redirect\", url, baseUrl);\n            return url.startsWith(baseUrl) ? url : baseUrl;\n        },\n        async session ({ session, user }) {\n            console.log(\"session\", session, user);\n            return session;\n        }\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztDQVFDLEdBQ3NFO0FBQ2Y7QUFDNUI7QUFDNUJFLG9EQUFhO0FBRWIsTUFBTUUsbUJBQW9CQyxRQUFRQyxHQUFHLENBQUNGLGdCQUFnQixJQUFJO0FBQzFELE1BQU1HLHVCQUF1QkYsUUFBUUMsR0FBRyxDQUFDQyxvQkFBb0IsSUFBSTtBQUVqRSxNQUFNQyxjQUErQjtJQUNuQ0MsV0FBVztRQUNUUixzRUFBY0EsQ0FBQztZQUNiUyxVQUFVTjtZQUNWTyxjQUFjSjtRQUNoQjtLQUNEO0lBQ0RLLFdBQVc7UUFDVCxNQUFNQyxRQUFPLEVBQUNDLE9BQU8sRUFBRUMsT0FBTyxFQUFDO1lBQzdCLElBQUlELFNBQVNFLGFBQWE7Z0JBQ3hCQyxRQUFRQyxHQUFHLENBQUMsVUFBVUosU0FBU0M7Z0JBQy9CLE9BQU87WUFDVDtZQUNBLElBQUksQ0FBQ0EsU0FBU0ksT0FBTztnQkFDbkIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBQ0EsT0FBTztRQUNUO1FBQ0EsTUFBTUMsVUFBUyxFQUFDQyxHQUFHLEVBQUVDLE9BQU8sRUFBQztZQUMzQk4sUUFBUUMsR0FBRyxDQUFDLFlBQVlJLEtBQUtDO1lBQzdCLE9BQU9ELElBQUlFLFVBQVUsQ0FBQ0QsV0FBV0QsTUFBTUM7UUFDekM7UUFDQSxNQUFNRSxTQUFRLEVBQUNBLE9BQU8sRUFBRUMsSUFBSSxFQUFDO1lBQzNCVCxRQUFRQyxHQUFHLENBQUMsV0FBV08sU0FBU0M7WUFDaEMsT0FBT0Q7UUFDVDtJQUtGO0FBRUY7QUFFQSxNQUFNRSxVQUFVM0IsZ0RBQVFBLENBQUNRO0FBQ2lCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemV1cy1uZXh0LWFwcC8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz8wMDk4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTmV4dC1BdXRoLmpzIHZlcnNpb24gb2YgdGhlIGdvb2dsZSBPYXV0aFxuICBwYXJhbXMgb2JqZWN0IG9mIGF1dGhvcml6YXRpb24gd2hpY2ggd2lsbCBmb3JjZSB0aGUgUmVmcmVzaCBUb2tlbiB0byBhbHdheXMgYmVcbiAgcHJvdmlkZWQgb24gc2lnbiBpbiwgaG93ZXZlciB0aGlzIHdpbGwgYXNrIGFsbCB1c2VycyB0byBjb25maXJtIGlmIHRoZXkgd2lzaFxuICB0byBncmFudCB5b3VyIGFwcGxpY2F0aW9uIGFjY2VzcyBldmVyeSB0aW1lIHRoZXkgc2lnbiBpbi4gVGhpcyBpcyByZXF1aXJlZCBhc1xuICB3ZSBhcmUgbm90IHVzaW5nIFpldXMgZGF0YWJhc2UgdG8gcGVyc2lzdCB1c2VyIGRhdGEgZm9yIGdvb2dsZSBhY2NvdW50c1xuICogQHBhcmFtIHtHb29nbGVQcm92aWRlcn0gcHJvdmlkZXJcbiAqIFxuICovXG5pbXBvcnQgTmV4dEF1dGgsIHsgQWNjb3VudCwgTmV4dEF1dGhPcHRpb25zLCBQcm9maWxlIH0gZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XG5kb3RlbnYuY29uZmlnKCk7XG5cbmNvbnN0IEdPT0dMRV9DTElFTlRfSUQgID0gcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCA/PyBcIlwiO1xuY29uc3QgR09PR0xFX0NMSUVOVF9TRUNSRVQgPSBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCA/PyBcIlwiO1xuXG5jb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNpZ25Jbih7YWNjb3VudCwgcHJvZmlsZX0pIHtcbiAgICAgIGlmIChhY2NvdW50Py5hY2Nlc3NUb2tlbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNpZ25JblwiLCBhY2NvdW50LCBwcm9maWxlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoIXByb2ZpbGU/LmVtYWlsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGFjY291bnQgZm91bmRcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGFzeW5jIHJlZGlyZWN0KHt1cmwsIGJhc2VVcmx9KSB7XG4gICAgICBjb25zb2xlLmxvZyhcInJlZGlyZWN0XCIsIHVybCwgYmFzZVVybCk7XG4gICAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgoYmFzZVVybCkgPyB1cmwgOiBiYXNlVXJsO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7c2Vzc2lvbiwgdXNlcn0pIHtcbiAgICAgIGNvbnNvbGUubG9nKFwic2Vzc2lvblwiLCBzZXNzaW9uLCB1c2VyKTtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gICAgLy8gYXN5bmMgand0KHRva2VuLCB1c2VyLCBhY2NvdW50LCBwcm9maWxlLCBpc05ld1VzZXIpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiand0XCIsIHRva2VuLCB1c2VyLCBhY2NvdW50LCBwcm9maWxlLCBpc05ld1VzZXIpO1xuICAgIC8vICAgcmV0dXJuIHRva2VuO1xuICAgIC8vIH0sXG4gIH0sXG5cbn07XG5cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUfTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsImRvdGVudiIsImNvbmZpZyIsIkdPT0dMRV9DTElFTlRfSUQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwiY2FsbGJhY2tzIiwic2lnbkluIiwiYWNjb3VudCIsInByb2ZpbGUiLCJhY2Nlc3NUb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJlbWFpbCIsIkVycm9yIiwicmVkaXJlY3QiLCJ1cmwiLCJiYXNlVXJsIiwic3RhcnRzV2l0aCIsInNlc3Npb24iLCJ1c2VyIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/dotenv","vendor-chunks/preact","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fcroissants%2FDesktop%2FCODING%20STUFF%2FCS%20Immersive%2FProject%20Phase%2FOSP%2FZeus%2Fzeus-next-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcroissants%2FDesktop%2FCODING%20STUFF%2FCS%20Immersive%2FProject%20Phase%2FOSP%2FZeus%2Fzeus-next-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();