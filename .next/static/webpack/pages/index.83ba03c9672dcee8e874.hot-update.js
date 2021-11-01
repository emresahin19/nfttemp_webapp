"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Parallax/Parallax.js":
/*!*****************************************!*\
  !*** ./components/Parallax/Parallax.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Parallax; }\n/* harmony export */ });\n/* harmony import */ var _home_dnc_nfttemp_webapp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _styles_jss_style_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/jss/style.js */ \"./styles/jss/style.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/dnc/nfttemp_webapp/components/Parallax/Parallax.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_dnc_nfttemp_webapp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.makeStyles)(_styles_jss_style_js__WEBPACK_IMPORTED_MODULE_4__.default);\nfunction Parallax(props) {\n  _s();\n\n  var _classNames;\n\n  var filter = props.filter,\n      className = props.className,\n      children = props.children,\n      style = props.style,\n      image = props.image,\n      small = props.small,\n      responsive = props.responsive;\n  var classes = useStyles();\n  var parallaxClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classNames = {}, (0,_home_dnc_nfttemp_webapp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_classNames, classes.parallax, true), (0,_home_dnc_nfttemp_webapp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_classNames, classes.filter, filter), (0,_home_dnc_nfttemp_webapp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_classNames, classes.small, small), (0,_home_dnc_nfttemp_webapp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_classNames, classes.parallaxResponsive, responsive), (0,_home_dnc_nfttemp_webapp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_classNames, className, className !== undefined), _classNames));\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: parallaxClasses,\n    style: _objectSpread(_objectSpread({}, style), {}, {\n      backgroundImage: \"url(\" + image + \")\",\n      transform: \"translate3d(0,\" + props.scrolly / 3 + \"px,0)\"\n    }),\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Parallax, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Parallax;\nParallax.propTypes = {\n  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),\n  filter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),\n  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),\n  style: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),\n  image: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),\n  small: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),\n  // this will add a min-height of 660px on small screens\n  responsive: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Parallax\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhcmFsbGF4L1BhcmFsbGF4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1LLFNBQVMsR0FBR0Ysb0VBQVUsQ0FBQ0MseURBQUQsQ0FBNUI7QUFFZSxTQUFTRSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBOztBQUV0QyxNQUNFQyxNQURGLEdBUUlELEtBUkosQ0FDRUMsTUFERjtBQUFBLE1BRUVDLFNBRkYsR0FRSUYsS0FSSixDQUVFRSxTQUZGO0FBQUEsTUFHRUMsUUFIRixHQVFJSCxLQVJKLENBR0VHLFFBSEY7QUFBQSxNQUlFQyxLQUpGLEdBUUlKLEtBUkosQ0FJRUksS0FKRjtBQUFBLE1BS0VDLEtBTEYsR0FRSUwsS0FSSixDQUtFSyxLQUxGO0FBQUEsTUFNRUMsS0FORixHQVFJTixLQVJKLENBTUVNLEtBTkY7QUFBQSxNQU9FQyxVQVBGLEdBUUlQLEtBUkosQ0FPRU8sVUFQRjtBQVNBLE1BQU1DLE9BQU8sR0FBR1YsU0FBUyxFQUF6QjtBQUNBLE1BQU1XLGVBQWUsR0FBR2YsaURBQVUsMktBQy9CYyxPQUFPLENBQUNFLFFBRHVCLEVBQ1osSUFEWSwwSkFFL0JGLE9BQU8sQ0FBQ1AsTUFGdUIsRUFFZEEsTUFGYywwSkFHL0JPLE9BQU8sQ0FBQ0YsS0FIdUIsRUFHZkEsS0FIZSwwSkFJL0JFLE9BQU8sQ0FBQ0csa0JBSnVCLEVBSUZKLFVBSkUsMEpBSy9CTCxTQUwrQixFQUtuQkEsU0FBUyxLQUFLVSxTQUxLLGdCQUFsQztBQU9BLHNCQUNFO0FBQ0UsYUFBUyxFQUFFSCxlQURiO0FBRUUsU0FBSyxrQ0FDQUwsS0FEQTtBQUVIUyxNQUFBQSxlQUFlLEVBQUUsU0FBU1IsS0FBVCxHQUFpQixHQUYvQjtBQUdIUyxNQUFBQSxTQUFTLEVBQUUsbUJBQW1CZCxLQUFLLENBQUNlLE9BQU4sR0FBYyxDQUFqQyxHQUFxQztBQUg3QyxNQUZQO0FBQUEsY0FRR1o7QUFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDs7R0EvQnVCSjtVQVdORDs7O0tBWE1DO0FBaUN4QkEsUUFBUSxDQUFDaUIsU0FBVCxHQUFxQjtBQUNuQmQsRUFBQUEsU0FBUyxFQUFFUCwwREFEUTtBQUVuQk0sRUFBQUEsTUFBTSxFQUFFTix3REFGVztBQUduQlEsRUFBQUEsUUFBUSxFQUFFUix3REFIUztBQUluQlMsRUFBQUEsS0FBSyxFQUFFVCwwREFKWTtBQUtuQlUsRUFBQUEsS0FBSyxFQUFFViwwREFMWTtBQU1uQlcsRUFBQUEsS0FBSyxFQUFFWCx3REFOWTtBQU9uQjtBQUNBWSxFQUFBQSxVQUFVLEVBQUVaLHdEQUFjdUI7QUFSUCxDQUFyQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BhcmFsbGF4L1BhcmFsbGF4LmpzPzY3NjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvanNzL3N0eWxlLmpzXCJcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJhbGxheChwcm9wcykge1xuICBcbiAgY29uc3Qge1xuICAgIGZpbHRlcixcbiAgICBjbGFzc05hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgc3R5bGUsXG4gICAgaW1hZ2UsXG4gICAgc21hbGwsXG4gICAgcmVzcG9uc2l2ZSxcbiAgfSA9IHByb3BzO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHBhcmFsbGF4Q2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLnBhcmFsbGF4XTogdHJ1ZSxcbiAgICBbY2xhc3Nlcy5maWx0ZXJdOiBmaWx0ZXIsXG4gICAgW2NsYXNzZXMuc21hbGxdOiBzbWFsbCxcbiAgICBbY2xhc3Nlcy5wYXJhbGxheFJlc3BvbnNpdmVdOiByZXNwb25zaXZlLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUgIT09IHVuZGVmaW5lZCxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtwYXJhbGxheENsYXNzZXN9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGltYWdlICsgXCIpXCIsXG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUzZCgwLFwiICsgcHJvcHMuc2Nyb2xseS8zICsgXCJweCwwKVwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblBhcmFsbGF4LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaWx0ZXI6IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHN0eWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc21hbGw6IFByb3BUeXBlcy5ib29sLFxuICAvLyB0aGlzIHdpbGwgYWRkIGEgbWluLWhlaWdodCBvZiA2NjBweCBvbiBzbWFsbCBzY3JlZW5zXG4gIHJlc3BvbnNpdmU6IFByb3BUeXBlcy5ib29sLFxufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNsYXNzTmFtZXMiLCJQcm9wVHlwZXMiLCJtYWtlU3R5bGVzIiwic3R5bGVzIiwidXNlU3R5bGVzIiwiUGFyYWxsYXgiLCJwcm9wcyIsImZpbHRlciIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwic3R5bGUiLCJpbWFnZSIsInNtYWxsIiwicmVzcG9uc2l2ZSIsImNsYXNzZXMiLCJwYXJhbGxheENsYXNzZXMiLCJwYXJhbGxheCIsInBhcmFsbGF4UmVzcG9uc2l2ZSIsInVuZGVmaW5lZCIsImJhY2tncm91bmRJbWFnZSIsInRyYW5zZm9ybSIsInNjcm9sbHkiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwibm9kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Parallax/Parallax.js\n");

/***/ })

});