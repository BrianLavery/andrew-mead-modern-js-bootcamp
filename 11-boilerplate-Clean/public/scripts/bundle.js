/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n/* harmony import */ var _scream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scream */ \"./src/scream.js\");\n// Can name our default function by any name - we're grabbing by default\n\n\nconsole.log('index.js');\nconsole.log(Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[\"add\"])(32, 3));\nconsole.log(Object(_scream__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_utilities__WEBPACK_IMPORTED_MODULE_0__[\"myName\"]));\nconsole.log(Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(10)); // Guiding rules\n// If a file has one major export, e.g. a class then could use default\n// But there is no real rule\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scream.js":
/*!***********************!*\
  !*** ./src/scream.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return scream; });\nvar scream = function scream(string) {\n  return \"\".concat(string.toUpperCase(), \"!\");\n};\n\n\n\n//# sourceURL=webpack:///./src/scream.js?");

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/*! exports provided: firstAdd, firstMyName, add, myName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firstAdd\", function() { return firstAdd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firstMyName\", function() { return firstMyName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myName\", function() { return myName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return square; });\n// 2 styles of export\n// 1. Named exports - can have as many as need\n// 2. Default export - each file can choose to have at most one\n// FIRST APPROACH TO EXPORTING\nvar firstAdd = function firstAdd(a, b) {\n  return a + b;\n};\nvar firstMyName = 'Andrew';\n\nvar firstSquare = function firstSquare(x) {\n  return x * x;\n}; // export default firstSquare\n// SECOND APPROACH TO EXPORTING\n\n\nvar add = function add(a, b) {\n  return a + b;\n};\n\nvar myName = 'Flight';\n\nvar square = function square(x) {\n  return x * x;\n};\n\n\n\n//# sourceURL=webpack:///./src/utilities.js?");

/***/ })

/******/ });