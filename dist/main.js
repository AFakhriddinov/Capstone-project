/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: whitesmoke;\\r\\n}\\r\\n\\r\\n#items {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto auto;\\r\\n  width: 70%;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.row {\\r\\n  margin: auto;\\r\\n  margin-top: 40px;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  color: rgb(22, 20, 20);\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.numOfLikes {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.fa {\\r\\n  font-size: 24px;\\r\\n  color: blue;\\r\\n  cursor: pointer;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.likesCount {\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  font-size: larger;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.buttons {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.button {\\r\\n  height: 35px;\\r\\n  width: 150px;\\r\\n  margin: 10px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  margin-top: 50px;\\r\\n\\r\\n  /* border-top: thin solid black; */\\r\\n  background-color: lightgray;\\r\\n}\\r\\n\\r\\nfooter h3 {\\r\\n  padding: 30px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.page-header {\\r\\n  display: flex;\\r\\n  list-style: none;\\r\\n  gap: 200px;\\r\\n}\\r\\n\\r\\n.movies-header {\\r\\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\\r\\n  font-size: large;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  overflow: scroll;\\r\\n  overflow-x: hidden;\\r\\n  display: none;\\r\\n  flex-direction: column;\\r\\n  background: rgb(219, 216, 216);\\r\\n  width: 900px;\\r\\n  height: 650px;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n}\\r\\n\\r\\n.close {\\r\\n  width: 30px;\\r\\n  margin-left: auto;\\r\\n  padding: 20px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.popImg {\\r\\n  width: 300px;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  margin-top: -50px;\\r\\n}\\r\\n\\r\\n.name,\\r\\n.genres {\\r\\n  margin-top: 5px;\\r\\n  text-align: center;\\r\\n  color: rgb(0, 55, 55);\\r\\n}\\r\\n\\r\\n.bold {\\r\\n  font-weight: bolder;\\r\\n  font-size: 20px;\\r\\n  color: rgb(0, 0, 78);\\r\\n}\\r\\n\\r\\n.summary {\\r\\n  width: 70%;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.commentContainer {\\r\\n  font-weight: 1000;\\r\\n  font-size: large;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.commentsContainer {\\r\\n  margin: auto;\\r\\n  margin-top: 7px;\\r\\n}\\r\\n\\r\\n.flexForm {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.username {\\r\\n  width: 200px;\\r\\n  height: 25px;\\r\\n  margin-top: 10px;\\r\\n  font-size: 17px;\\r\\n  border-radius: 2px;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.message {\\r\\n  padding-bottom: 105px;\\r\\n  width: 200px;\\r\\n  border-radius: 2px;\\r\\n  border: none;\\r\\n  font-size: 17px;\\r\\n}\\r\\n\\r\\n.submit {\\r\\n  width: 100px;\\r\\n  height: 27px;\\r\\n  border-radius: 2px;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n  font-size: 17px;\\r\\n  color: white;\\r\\n  background-color: green;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n.movieId {\\r\\n  visibility: hidden;\\r\\n}\\r\\n\\r\\n.userComment {\\r\\n  margin-left: 10px;\\r\\n}\\r\\n\\r\\n.commenterName {\\r\\n  font-weight: bold;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayItems.js */ \"./src/modules/displayItems.js\");\n/* harmony import */ var _modules_addLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addLikes.js */ \"./src/modules/addLikes.js\");\n/* harmony import */ var _modules_countItems_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/countItems.js */ \"./src/modules/countItems.js\");\n/* harmony import */ var _modules_displayPopup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/displayPopup.js */ \"./src/modules/displayPopup.js\");\n\n\n\n\n\n\nwindow.addEventListener('load', (event) => {\n  (0,_modules_displayItems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_modules_addLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_modules_countItems_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\n\nwindow.setTimeout(_modules_displayPopup_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], 1700);\n\n\n//# sourceURL=webpack://capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/addLikes.js":
/*!*********************************!*\
  !*** ./src/modules/addLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst involvementApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\nconst involvementApiKey = 'DQ1WY7tbkUIhRnRaIdyZ';\nconst items = document.querySelector('#items');\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {\n  const likeCounterAPI = await fetch(\n    `${involvementApiUrl}${involvementApiKey}/likes/`,\n  )\n    .then((response) => response.json())\n    .then((data) => data);\n\n  const likesCounter = items.querySelectorAll('.likesCount');\n  likesCounter.forEach((likeCounter) => {\n    const likesId = likeCounter.getAttribute('data-id');\n    const element = likeCounter;\n    likeCounterAPI.forEach((likeAPI) => {\n      if (likesId === likeAPI.item_id) {\n        element.innerHTML = likeAPI.likes;\n      }\n    });\n  });\n  // To add or Create like when Heart is pressed\n  const likesButton = items.querySelectorAll('.icons');\n  likesButton.forEach((likeButton) => {\n    likeButton.addEventListener('click', (e) => {\n      // eslint-disable-next-line max-len\n      const targetCounter = e.target.nextElementSibling.children[0].innerText;\n      // eslint-disable-next-line max-len\n      e.target.nextElementSibling.children[0].innerText = +targetCounter + 1;\n      fetch(`${involvementApiUrl}${involvementApiKey}/likes/`, {\n        method: 'POST',\n        body: JSON.stringify({\n          item_id: likeButton.getAttribute('data-id'),\n        }),\n        headers: {\n          'Content-type': 'application/json; charset=UTF-8',\n        },\n      });\n    });\n  });\n});\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/addLikes.js?");

/***/ }),

/***/ "./src/modules/countItems.js":
/*!***********************************!*\
  !*** ./src/modules/countItems.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countItems = async (itemCount, elementHtml) => {\n  if (itemCount === 0 || itemCount === null) {\n    elementHtml.innerHTML = '(0)';\n  } else {\n    elementHtml.innerHTML = ` (${itemCount})`;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countItems);\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/countItems.js?");

/***/ }),

/***/ "./src/modules/displayItems.js":
/*!*************************************!*\
  !*** ./src/modules/displayItems.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"moviesArray\": () => (/* binding */ moviesArray)\n/* harmony export */ });\n/* harmony import */ var _countItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countItems.js */ \"./src/modules/countItems.js\");\n\n\nconst items = document.querySelector('#items');\n\nconst url = 'https://api.tvmaze.com/shows';\nconst moviesArray = [];\nlet counter = 0;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {\n  const response = await fetch(url);\n  const itemData = await response.json();\n\n  itemData.forEach((data) => {\n    if (data.id >= 204 && data.id <= 209) {\n      counter += 1;\n      moviesArray.push(data);\n      items.innerHTML += `\n        <div class=\"row\">\n            <img src=\"${data.image.medium}\"/>\n            <h1>${data.name}</h1>\n            <i data-id=\"${data.id}\" class=\"fa icons\">&#xf087;</i>\n            <div class=\"numOfLikes\">\n              <p class=\"likesCount likes\" data-id=\"${data.id}\">0</p>\n              <p class=\"likes\">likes</p>\n            </div>\n            <div class=\"buttons\">\n                <button type=\"submit\" class=\"comment button\">Comments</button>\n                <br>\n                <button type=\"submit\" class=\"reserve button\">Reservations</button>\n            </div>\n        </div>`;\n    }\n  });\n  const itemHtml = document.querySelector('.itemCount');\n  (0,_countItems_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(counter, itemHtml);\n});\n\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/displayItems.js?");

/***/ }),

/***/ "./src/modules/displayPopup.js":
/*!*************************************!*\
  !*** ./src/modules/displayPopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayItems.js */ \"./src/modules/displayItems.js\");\n\n\nconst displayComment = async (ID, cmnt) => {\n  const result = await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DQ1WY7tbkUIhRnRaIdyZ/comments?item_id=${ID}`,\n  );\n  let commentsArray = [];\n  const commentsData = await result.json();\n  const commentsContainer = document.querySelectorAll('.commentsContainer');\n  // const commentsCount = document.querySelectorAll(\".commentsCount\");\n  commentsData.forEach((commentsdatum) => {\n    commentsArray += `<p>[${commentsdatum.creation_date}]&nbsp;&nbsp;<span class=\"commenterName\">${commentsdatum.username}</span> : ${commentsdatum.comment}</p>`;\n  });\n  // commentsCount[cmnt].innerHTML = commentsData.length;\n  commentsContainer[cmnt].innerHTML = commentsArray;\n};\n\nconst popup = async () => {\n  const body = document.querySelector('body');\n  const popupElement = document.createElement('div');\n  let county = 0;\n  _displayItems_js__WEBPACK_IMPORTED_MODULE_0__.moviesArray.forEach((movie) => {\n    const moviePopup = `\n      <div class=\"popup\">\n          <img class=\"close\" onclick=\"this.parentNode.style.display = 'none';\" src=\"https://static.vecteezy.com/system/resources/thumbnails/020/048/793/small/x-transparent-background-free-png.png\">\n          <img class=\"popImg\" src=\"${movie.image.original}\">\n          <h1 class=\"name\">${movie.name}</h1>\n          <h4 class=\"genres\"><span class=\"bold\"> Movie genres:</span> ${movie.genres.join(\n    ', ',\n  )}</h4>\n          <div class=\"summary\">${movie.summary}</div>\n          <div class=\"commentContainer\">\n          &nbsp;Comments&nbsp;[<span class=\"commentsCount\">0</span>]\n          </div>\n          <div class=\"commentsContainer\">\n          </div><br>\n          <form class=\"flexForm\">\n              <div class=\"commentTitle\" align=\"center\">\n              Add a comment\n              </div>\n              <input type=\"text\" class=\"username\" placeholder=\"Your name\"><br>\n              <input type=\"text\" class=\"message\" placeholder=\"Your message\"><br>\n              <button class=\"submit\" type=\"button\">Submit</button>\n              <div class=\"movieId\">${movie.id}</div>\n          </form>\n      </div>\n      `;\n    displayComment(`\"${movie.id}\"`, county);\n\n    county += 1;\n    popupElement.innerHTML += moviePopup;\n  });\n  body.appendChild(popupElement);\n};\n\nwindow.setTimeout(() => {\n  const commentBtn = document.querySelectorAll('.comment');\n\n  for (let i = 0; i < commentBtn.length; i += 1) {\n    commentBtn[i].addEventListener('click', () => {\n      document.querySelectorAll('.popup')[i].style.display = 'flex';\n    });\n  }\n}, 2000);\n\nconst submitComment = async (item1, user1, ID) => {\n  const count = 0;\n  // eslint-disable-next-line\n    const response = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DQ1WY7tbkUIhRnRaIdyZ/comments/',\n    {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({\n        item_id: `\"${ID}\"`,\n        username: item1,\n        comment: user1,\n      }),\n    },\n  );\n\n  _displayItems_js__WEBPACK_IMPORTED_MODULE_0__.moviesArray.forEach((movie) => {\n    displayComment(`\"${movie.id}\"`, count);\n    // count += 1;\n  });\n};\n\nwindow.setTimeout(() => {\n  const submitBtns = document.querySelectorAll('.submit');\n  submitBtns.forEach((submitBtn) => {\n    submitBtn.addEventListener('click', (e) => {\n      submitComment(\n        // eslint-disable-next-line\n          e.target.previousElementSibling.previousElementSibling\n          .previousElementSibling.previousElementSibling.value,\n        e.target.previousElementSibling.previousElementSibling.value,\n        e.target.nextElementSibling.innerHTML,\n      );\n    });\n  });\n}, 2000);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);\n\n//# sourceURL=webpack://capstone-project/./src/modules/displayPopup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;