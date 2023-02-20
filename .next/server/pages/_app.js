module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ \"./theme/index.js\");\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/reset.css */ \"./styles/reset.css\");\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/al7861/Desktop/money-hub/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst Body = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  background-color: ${props => props.theme.colors.white.default};\n  height: 100vh;\n`;\nconst NavBar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  background-color: ${props => props.theme.colors.white.default};\n  height: 58px;\n  margin-top: auto;\n  box-shadow: 0 -4px 4px ${props => props.theme.colors.neutral[200]};\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n`;\nconst Sidebar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  background-color: ${props => props.theme.colors.neutral[900]};\n  width: 25%;\n  display: none;\n`;\nconst Page = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  box-shadow: 0 -4px 4px ${props => props.theme.colors.neutral[200]};\n  position: relative;\n  height: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width:  ${props => props.theme.breakpoints.l}px) {\n    flex-direction: row;\n\n    ${Sidebar} {\n      display: block;\n    }\n\n    ${NavBar} {\n      display: none;\n    }\n  }\n`;\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding-bottom: 100px;\n`;\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    theme: _theme__WEBPACK_IMPORTED_MODULE_2__[\"theme\"],\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Body, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Page, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Sidebar, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Content, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 9\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(NavBar, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQm9keSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJjb2xvcnMiLCJ3aGl0ZSIsImRlZmF1bHQiLCJOYXZCYXIiLCJuZXV0cmFsIiwiU2lkZWJhciIsIlBhZ2UiLCJicmVha3BvaW50cyIsImwiLCJDb250ZW50IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxJQUFJLEdBQUdDLHdEQUFNLENBQUNDLEdBQUk7QUFDeEIsc0JBQXVCQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxLQUFuQixDQUF5QkMsT0FBUTtBQUNsRTtBQUNBLENBSEE7QUFJQSxNQUFNQyxNQUFNLEdBQUdQLHdEQUFNLENBQUNDLEdBQUk7QUFDMUIsc0JBQXVCQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxLQUFuQixDQUF5QkMsT0FBUTtBQUNsRTtBQUNBO0FBQ0EsMkJBQTRCSixLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CSSxPQUFuQixDQUEyQixHQUEzQixDQUFnQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVEE7QUFVQSxNQUFNQyxPQUFPLEdBQUdULHdEQUFNLENBQUNDLEdBQUk7QUFDM0Isc0JBQXVCQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CSSxPQUFuQixDQUEyQixHQUEzQixDQUFnQztBQUNqRTtBQUNBO0FBQ0EsQ0FKQTtBQUtBLE1BQU1FLElBQUksR0FBR1Ysd0RBQU0sQ0FBQ0MsR0FBSTtBQUN4QiwyQkFBNEJDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJJLE9BQW5CLENBQTJCLEdBQTNCLENBQWdDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXlCTixLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZUSxXQUFaLENBQXdCQyxDQUFFO0FBQzdEO0FBQ0E7QUFDQSxNQUFNSCxPQUFRO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsTUFBTUYsTUFBTztBQUNiO0FBQ0E7QUFDQTtBQUNBLENBcEJBO0FBcUJBLE1BQU1NLE9BQU8sR0FBR2Isd0RBQU0sQ0FBQ0MsR0FBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTEE7O0FBT0EsU0FBU2EsR0FBVCxDQUFhO0FBQUNDLFdBQUQ7QUFBWUM7QUFBWixDQUFiLEVBQXFDO0FBQ25DLHNCQUNFLHFFQUFDLCtEQUFEO0FBQWUsU0FBSyxFQUFFYiw0Q0FBdEI7QUFBQSwyQkFDRSxxRUFBQyxJQUFEO0FBQUEsNkJBQ0EscUVBQUMsSUFBRDtBQUFBLGdDQUNFLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLE9BQUQ7QUFBQSxpQ0FDQSxxRUFBQyxTQUFELG9CQUFlYSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBS0UscUVBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDs7QUFFY0Ysa0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwge1RoZW1lUHJvdmlkZXJ9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5cbmltcG9ydCB7dGhlbWV9IGZyb20gXCIuLi90aGVtZVwiXG5pbXBvcnQgXCIuLi9zdHlsZXMvcmVzZXQuY3NzXCJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiXG5cbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlLmRlZmF1bHR9O1xuICBoZWlnaHQ6IDEwMHZoO1xuYFxuY29uc3QgTmF2QmFyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZS5kZWZhdWx0fTtcbiAgaGVpZ2h0OiA1OHB4O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBib3gtc2hhZG93OiAwIC00cHggNHB4ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubmV1dHJhbFsyMDBdfTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuYFxuY29uc3QgU2lkZWJhciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubmV1dHJhbFs5MDBdfTtcbiAgd2lkdGg6IDI1JTtcbiAgZGlzcGxheTogbm9uZTtcbmBcbmNvbnN0IFBhZ2UgPSBzdHlsZWQuZGl2YFxuICBib3gtc2hhZG93OiAwIC00cHggNHB4ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubmV1dHJhbFsyMDBdfTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5sfXB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICR7U2lkZWJhcn0ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgJHtOYXZCYXJ9IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5gXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG5gXG5cbmZ1bmN0aW9uIEFwcCh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KSB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxCb2R5PlxuICAgICAgPFBhZ2U+XG4gICAgICAgIDxTaWRlYmFyIC8+XG4gICAgICAgIDxDb250ZW50PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgPE5hdkJhciAvPlxuICAgICAgPC9QYWdlPlxuICAgIDwvQm9keT5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globals.css\n");

/***/ }),

/***/ "./styles/reset.css":
/*!**************************!*\
  !*** ./styles/reset.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9yZXNldC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/reset.css\n");

/***/ }),

/***/ "./theme/index.js":
/*!************************!*\
  !*** ./theme/index.js ***!
  \************************/
/*! exports provided: generateShades, theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateShades\", function() { return generateShades; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"theme\", function() { return theme; });\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color */ \"color\");\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_0__);\n\nconst generateShades = hex => ({\n  default: hex,\n  contrast: color__WEBPACK_IMPORTED_MODULE_0___default()(hex).negate().hex(),\n  dark: color__WEBPACK_IMPORTED_MODULE_0___default()(hex).darken(0.3).hex(),\n  light: color__WEBPACK_IMPORTED_MODULE_0___default()(hex).lighten(0.8).hex()\n});\nconst theme = {\n  fonts: {\n    body: `\"sans-serif\"`\n  },\n  colors: {\n    primary: generateShades(\"#01a5b8\"),\n    highlight: {\n      text: '#006b57',\n      background: \"#c2f7e1\"\n    },\n    neutral: {\n      default: \"#9e9e9e\",\n      100: \"#f7f7f7\",\n      200: \"#e1e1e1\",\n      300: \"#cfcfcf\",\n      400: \"#b1b1b1\",\n      500: \"#9e9e9e\",\n      600: \"#7e7e7e\",\n      700: \"#626262\",\n      800: \"#515151\",\n      900: \"#3b3b3b\",\n      1000: \"#222222\"\n    },\n    white: {\n      default: \"#fff\"\n    }\n  },\n  typography: {\n    xs: {\n      fontSize: \"12px\",\n      lineHeight: 1.7\n    },\n    s: {\n      fontSize: \"14px\",\n      lineHeight: 1.6\n    },\n    m: {\n      fontSize: \"16px\",\n      lineHeight: 1.6\n    },\n    l: {\n      fontSize: \"18px\",\n      lineHeight: 1.5\n    },\n    xl: {\n      fontSize: \"20px\",\n      lineHeight: 1.4\n    },\n    \"2xl\": {\n      fontSize: \"24px\",\n      lineHeight: 1.3\n    },\n    \"3xl\": {\n      fontSize: \"30px\",\n      lineHeight: 1.2\n    },\n    \"4xl\": {\n      fontSize: \"36px\",\n      lineHeight: 1.2\n    },\n    \"5xl\": {\n      fontSize: \"48px\",\n      lineHeight: 1.1\n    }\n  },\n  space: {\n    xs: \"4px\",\n    s: \"8px\",\n    m: \"16px\",\n    l: \"32px\",\n    xl: \"64px\"\n  },\n  breakpoints: {\n    xxs: 375,\n    xs: 425,\n    s: 768,\n    m: 900,\n    l: 1024,\n    xl: 1300,\n    xxl: 1400,\n    xxxl: 1600\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZS9pbmRleC5qcz80YmQyIl0sIm5hbWVzIjpbImdlbmVyYXRlU2hhZGVzIiwiaGV4IiwiZGVmYXVsdCIsImNvbnRyYXN0IiwiQ29sb3IiLCJuZWdhdGUiLCJkYXJrIiwiZGFya2VuIiwibGlnaHQiLCJsaWdodGVuIiwidGhlbWUiLCJmb250cyIsImJvZHkiLCJjb2xvcnMiLCJwcmltYXJ5IiwiaGlnaGxpZ2h0IiwidGV4dCIsImJhY2tncm91bmQiLCJuZXV0cmFsIiwid2hpdGUiLCJ0eXBvZ3JhcGh5IiwieHMiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJzIiwibSIsImwiLCJ4bCIsInNwYWNlIiwiYnJlYWtwb2ludHMiLCJ4eHMiLCJ4eGwiLCJ4eHhsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxjQUFjLEdBQUlDLEdBQUQsS0FBVTtBQUN0Q0MsU0FBTyxFQUFFRCxHQUQ2QjtBQUV0Q0UsVUFBUSxFQUFFQyw0Q0FBSyxDQUFDSCxHQUFELENBQUwsQ0FBV0ksTUFBWCxHQUFvQkosR0FBcEIsRUFGNEI7QUFHdENLLE1BQUksRUFBRUYsNENBQUssQ0FBQ0gsR0FBRCxDQUFMLENBQVdNLE1BQVgsQ0FBa0IsR0FBbEIsRUFBdUJOLEdBQXZCLEVBSGdDO0FBSXRDTyxPQUFLLEVBQUVKLDRDQUFLLENBQUNILEdBQUQsQ0FBTCxDQUFXUSxPQUFYLENBQW1CLEdBQW5CLEVBQXdCUixHQUF4QjtBQUorQixDQUFWLENBQXZCO0FBT0EsTUFBTVMsS0FBSyxHQUFHO0FBQ25CQyxPQUFLLEVBQUU7QUFDTEMsUUFBSSxFQUFHO0FBREYsR0FEWTtBQUluQkMsUUFBTSxFQUFFO0FBQ05DLFdBQU8sRUFBRWQsY0FBYyxDQUFDLFNBQUQsQ0FEakI7QUFFTmUsYUFBUyxFQUFFO0FBQ1RDLFVBQUksRUFBRSxTQURHO0FBRVRDLGdCQUFVLEVBQUU7QUFGSCxLQUZMO0FBTU5DLFdBQU8sRUFBRTtBQUNQaEIsYUFBTyxFQUFFLFNBREY7QUFFUCxXQUFLLFNBRkU7QUFHUCxXQUFLLFNBSEU7QUFJUCxXQUFLLFNBSkU7QUFLUCxXQUFLLFNBTEU7QUFNUCxXQUFLLFNBTkU7QUFPUCxXQUFLLFNBUEU7QUFRUCxXQUFLLFNBUkU7QUFTUCxXQUFLLFNBVEU7QUFVUCxXQUFLLFNBVkU7QUFXUCxZQUFNO0FBWEMsS0FOSDtBQW1CTmlCLFNBQUssRUFBRTtBQUNMakIsYUFBTyxFQUFFO0FBREo7QUFuQkQsR0FKVztBQTJCbkJrQixZQUFVLEVBQUU7QUFDVkMsTUFBRSxFQUFFO0FBQ0ZDLGNBQVEsRUFBRSxNQURSO0FBRUZDLGdCQUFVLEVBQUU7QUFGVixLQURNO0FBS1ZDLEtBQUMsRUFBRTtBQUNERixjQUFRLEVBQUUsTUFEVDtBQUVEQyxnQkFBVSxFQUFFO0FBRlgsS0FMTztBQVNWRSxLQUFDLEVBQUU7QUFDREgsY0FBUSxFQUFFLE1BRFQ7QUFFREMsZ0JBQVUsRUFBRTtBQUZYLEtBVE87QUFhVkcsS0FBQyxFQUFFO0FBQ0RKLGNBQVEsRUFBRSxNQURUO0FBRURDLGdCQUFVLEVBQUU7QUFGWCxLQWJPO0FBaUJWSSxNQUFFLEVBQUU7QUFDRkwsY0FBUSxFQUFFLE1BRFI7QUFFRkMsZ0JBQVUsRUFBRTtBQUZWLEtBakJNO0FBcUJWLFdBQU87QUFDTEQsY0FBUSxFQUFFLE1BREw7QUFFTEMsZ0JBQVUsRUFBRTtBQUZQLEtBckJHO0FBeUJWLFdBQU87QUFDTEQsY0FBUSxFQUFFLE1BREw7QUFFTEMsZ0JBQVUsRUFBRTtBQUZQLEtBekJHO0FBNkJWLFdBQU87QUFDTEQsY0FBUSxFQUFFLE1BREw7QUFFTEMsZ0JBQVUsRUFBRTtBQUZQLEtBN0JHO0FBaUNWLFdBQU87QUFDTEQsY0FBUSxFQUFFLE1BREw7QUFFTEMsZ0JBQVUsRUFBRTtBQUZQO0FBakNHLEdBM0JPO0FBaUVuQkssT0FBSyxFQUFFO0FBQ0xQLE1BQUUsRUFBRSxLQURDO0FBRUxHLEtBQUMsRUFBRSxLQUZFO0FBR0xDLEtBQUMsRUFBRSxNQUhFO0FBSUxDLEtBQUMsRUFBRSxNQUpFO0FBS0xDLE1BQUUsRUFBRTtBQUxDLEdBakVZO0FBd0VuQkUsYUFBVyxFQUFFO0FBQ1hDLE9BQUcsRUFBRSxHQURNO0FBRVhULE1BQUUsRUFBRSxHQUZPO0FBR1hHLEtBQUMsRUFBRSxHQUhRO0FBSVhDLEtBQUMsRUFBRSxHQUpRO0FBS1hDLEtBQUMsRUFBRSxJQUxRO0FBTVhDLE1BQUUsRUFBRSxJQU5PO0FBT1hJLE9BQUcsRUFBRSxJQVBNO0FBUVhDLFFBQUksRUFBRTtBQVJLO0FBeEVNLENBQWQiLCJmaWxlIjoiLi90aGVtZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2xvciBmcm9tIFwiY29sb3JcIlxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVTaGFkZXMgPSAoaGV4KSA9PiAoe1xuICBkZWZhdWx0OiBoZXgsXG4gIGNvbnRyYXN0OiBDb2xvcihoZXgpLm5lZ2F0ZSgpLmhleCgpLFxuICBkYXJrOiBDb2xvcihoZXgpLmRhcmtlbigwLjMpLmhleCgpLFxuICBsaWdodDogQ29sb3IoaGV4KS5saWdodGVuKDAuOCkuaGV4KCksXG59KVxuXG5leHBvcnQgY29uc3QgdGhlbWUgPSB7XG4gIGZvbnRzOiB7XG4gICAgYm9keTogYFwic2Fucy1zZXJpZlwiYCxcbiAgfSxcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeTogZ2VuZXJhdGVTaGFkZXMoXCIjMDFhNWI4XCIpLFxuICAgIGhpZ2hsaWdodDoge1xuICAgICAgdGV4dDogJyMwMDZiNTcnLFxuICAgICAgYmFja2dyb3VuZDogXCIjYzJmN2UxXCIsXG4gICAgfSxcbiAgICBuZXV0cmFsOiB7XG4gICAgICBkZWZhdWx0OiBcIiM5ZTllOWVcIixcbiAgICAgIDEwMDogXCIjZjdmN2Y3XCIsXG4gICAgICAyMDA6IFwiI2UxZTFlMVwiLFxuICAgICAgMzAwOiBcIiNjZmNmY2ZcIixcbiAgICAgIDQwMDogXCIjYjFiMWIxXCIsXG4gICAgICA1MDA6IFwiIzllOWU5ZVwiLFxuICAgICAgNjAwOiBcIiM3ZTdlN2VcIixcbiAgICAgIDcwMDogXCIjNjI2MjYyXCIsXG4gICAgICA4MDA6IFwiIzUxNTE1MVwiLFxuICAgICAgOTAwOiBcIiMzYjNiM2JcIixcbiAgICAgIDEwMDA6IFwiIzIyMjIyMlwiLFxuICAgIH0sXG4gICAgd2hpdGU6IHtcbiAgICAgIGRlZmF1bHQ6IFwiI2ZmZlwiLFxuICAgIH0sXG4gIH0sXG4gIHR5cG9ncmFwaHk6IHtcbiAgICB4czoge1xuICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgICAgbGluZUhlaWdodDogMS43LFxuICAgIH0sXG4gICAgczoge1xuICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgbGluZUhlaWdodDogMS42LFxuICAgIH0sXG4gICAgbToge1xuICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgICAgbGluZUhlaWdodDogMS42LFxuICAgIH0sXG4gICAgbDoge1xuICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgbGluZUhlaWdodDogMS41LFxuICAgIH0sXG4gICAgeGw6IHtcbiAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcbiAgICB9LFxuICAgIFwiMnhsXCI6IHtcbiAgICAgIGZvbnRTaXplOiBcIjI0cHhcIixcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMyxcbiAgICB9LFxuICAgIFwiM3hsXCI6IHtcbiAgICAgIGZvbnRTaXplOiBcIjMwcHhcIixcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICB9LFxuICAgIFwiNHhsXCI6IHtcbiAgICAgIGZvbnRTaXplOiBcIjM2cHhcIixcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICB9LFxuICAgIFwiNXhsXCI6IHtcbiAgICAgIGZvbnRTaXplOiBcIjQ4cHhcIixcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMSxcbiAgICB9LFxuICB9LFxuICBzcGFjZToge1xuICAgIHhzOiBcIjRweFwiLFxuICAgIHM6IFwiOHB4XCIsXG4gICAgbTogXCIxNnB4XCIsXG4gICAgbDogXCIzMnB4XCIsXG4gICAgeGw6IFwiNjRweFwiLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIHh4czogMzc1LFxuICAgIHhzOiA0MjUsXG4gICAgczogNzY4LFxuICAgIG06IDkwMCxcbiAgICBsOiAxMDI0LFxuICAgIHhsOiAxMzAwLFxuICAgIHh4bDogMTQwMCxcbiAgICB4eHhsOiAxNjAwLFxuICB9LFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./theme/index.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "color":
/*!************************!*\
  !*** external "color" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"color\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2xvclwiPzQ3NmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2xvclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///color\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });