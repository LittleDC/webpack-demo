/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n// async function getComponent() {\r\n//   const element = document.createElement('div');\r\n//   const { default:_ } = await import('lodash');\r\n\r\n//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');\r\n\r\n//   return element;\r\n// }\r\n\r\n// getComponent().then((component) => {\r\n//   document.body.appendChild(component);\r\n// });\r\n\r\n\r\n\r\nfunction component() {\r\n  const element = document.createElement('div');\r\n  const button = document.createElement('button');\r\n  const br = document.createElement('br');\r\n\r\n  button.innerHTML = 'Click me and look at the console!';\r\n  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Hello', 'webpack'], ' ');\r\n  element.appendChild(br);\r\n  element.appendChild(button);\r\n\r\n  // Note that because a network request is involved, some indication\r\n  // of loading would need to be shown in a production-level site/app.\r\n  button.onclick = e => __webpack_require__.e(/*! import() | print */ \"print\").then(__webpack_require__.bind(__webpack_require__, /*! ./print */ \"./src/print.js\")).then(module => {\r\n    const print = module.default;\r\n\r\n    print();\r\n  });\r\n\r\n  return element;\r\n}\r\n\r\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);