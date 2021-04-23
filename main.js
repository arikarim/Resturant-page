/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_kabab_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/kabab.jpg */ \"./src/img/kabab.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_kabab_jpg__WEBPACK_IMPORTED_MODULE_2__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  position: relative;\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n\\n\\nli {\\n  font-family: var(--poppins);\\n  list-style: none;\\n  font-weight: bold;\\n  transition: 0.3s ease;\\n  cursor: pointer;\\n}\\n\\n.red {\\n  color: var(--pink);\\n}\\n\\nli:hover {\\n  color: var(--pink);\\n}\\n\\n[data-tab-content] {\\n  display: none;\\n}\\n\\n.active[data-tab-content] {\\n  display: block;\\n}\\n\\n.tab-content h1 {\\n  font-family: var(--fredoka);\\n  font-size: calc(3rem + 2vw);\\n  text-align: center;\\n}\\n\\n\\n.main-row {\\n  background-color: rgba(250, 193, 188, 0.7);\\n\\n  width: 75%;\\n  height: 100%;\\n}\\n\\n.main-food {\\n  background-color: rgba(250, 193, 188, 0.7);\\n\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.contact-row {\\n  background-color: rgba(250, 193, 188, 0.7);\\n\\n  background-size: 70%;\\n  height: 100%;\\n}\\n\\n\\n\\n.red {\\n  color: red;\\n}\\n\\n.image-food {\\n  width: 210px;\\n  height: 210px;\\n  border-radius: 100px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpackk/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpackk/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpackk/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://webpackk/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpackk/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contactPage = (() => {\n  const contentContainer = document.querySelector('#content');\n  const contact = document.createElement('div');\n  contact.classList.add('container-fluid');\n  contact.setAttribute('id', 'contact');\n  contact.setAttribute('data-tab-content', '');\n  contact.innerHTML = `\n  <h1 class='text-center text-light'>Contact Us</h1>\n  <div class='col-10 col-md-6 mx-auto row d-flex flex-column contact-row'>\n    <div class='col-6 mx-auto'>\n      <p class='my-4'>Phone: +964 770 8272458</p>\n      <a href=\"mailto:arikarim146@gmail.com\" class='my-2 text-decoration-none link-dark'>Email: arikarim146@gmail.com</a>\n    </div>\n\n    <div class=\"col-6 mx-auto my-5\">\n        <form onsubmit=\"return false\">\n          <h3><i class=\"\"></i>Message us</h3>\n          <div class=\"\">\n            <span>Name</span><br>\n            <input class='form-control'  type=\"text\" required />\n          </div>\n          <div class=\"my-3\">\n            <span>Email</span><br>\n            <input class='form-control' type=\"text\" required />\n          </div>\n          <div class=\"my-3\">\n            <span>Type your message...</span><br>\n            <textarea class='form-control'  required></textarea>\n          </div>\n          <input class='btn btn-dark my-3' type=\"submit\" value=\"Send\" />\n        </form>\n      </div>\n  </div>`;\n\n  contentContainer.appendChild(contact);\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n//# sourceURL=webpack://webpackk/./src/contact.js?");

/***/ }),

/***/ "./src/food.js":
/*!*********************!*\
  !*** ./src/food.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_kababb_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/kababb.jpg */ \"./src/img/kababb.jpg\");\n/* harmony import */ var _img_kuba_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/kuba.jpg */ \"./src/img/kuba.jpg\");\n/* harmony import */ var _img_sarupe_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/sarupe.jpeg */ \"./src/img/sarupe.jpeg\");\n/* harmony import */ var _img_yaprax_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/yaprax.png */ \"./src/img/yaprax.png\");\n\n\n\n\n\nconst foodpage = (() => {\n  const contentContainer = document.querySelector('#content');\n  const food = document.createElement('div');\n  food.classList.add('container-fluid');\n  food.setAttribute('id', 'menu');\n  food.setAttribute('data-tab-content', '');\n\n  food.innerHTML = `\n  <div class='row mt-3 main-food'>\n    <div class='col-12 col-md-6 d-flex py-3'>\n      <div id='img1' class='col-6 image-food  img1'>\n        \n      </div>\n      <div class='col-6 mx-2'>\n        <h3 class='text-center'>KABAB</h3>\n        <p>Kebabs are various cooked meat dishes with their origins in Middle Eastern cuisine. Numerous variants are popular around the world. In many parts of Asia, the Muslim world, and in Indian English and the languages of the Middle East, a kebab is any of a wide variety of grilled meat dishes. </p>\n      </div>\n    </div>\n\n    <div class='col-12 col-md-6 d-flex py-3'>\n      <div id='img2' class='col-6 image-food  img1'>\n        \n      </div>\n      <div class='col-6 mx-2'>\n        <h3 class='text-center'>KUBA</h3>\n        <p>Kuba is a family of dishes based on spiced ground meat, onions, and grain, popular in Middle Eastern cuisine. In Levantine cuisine, kibbeh is usually made by pounding bulgur wheat together with meat into a fine paste and forming it into balls with toasted pine nuts and spices </p>\n      </div>\n    </div>\n\n    <div class='col-12 col-md-6 d-flex py-3'>\n      <div id='img3' class='col-6 image-food  img1'>\n        \n      </div>\n      <div class='col-6 mx-2'>\n        <h3 class='text-center'>Yaprakh</h3>\n        <p>Yaprax(Dolma-as it is called in many countries) is a favorite Middle Eastern dish. It is made up of grape leaves,pepper,zucchini,eggplant,onions and tomatoes filled with spiced up rice. Well, this kind of one of the many types of Yaprax/Dolma.</p>\n      </div>\n    </div>\n\n    <div class='col-12 col-md-6 d-flex py-3'>\n      <div id='img4' class='col-6 image-food  img1'>\n        \n      </div>\n      <div class='col-6 mx-2'>\n        <h3 class='text-center'>Sarupe</h3>\n        <p>Pacha (Sarupe in Kurdish) is a traditional dish made out of sheep skin filled with spiced rice, especially popular in the wintertime. “It was around 2:30 in the morning when four people came to our restaurant to eat pacha.</p>\n      </div>\n    </div>\n  </div>`;\n  contentContainer.appendChild(food);\n\n  const img1 = new Image();\n  img1.src = _img_kababb_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  img1.classList.add('image-food');\n  const img11 = document.getElementById('img1');\n  img11.appendChild(img1);\n\n  const img2 = new Image();\n  img2.src = _img_kuba_jpg__WEBPACK_IMPORTED_MODULE_1__;\n  img2.classList.add('image-food');\n  const img22 = document.getElementById('img2');\n  img22.appendChild(img2);\n\n  const img3 = new Image();\n  img3.src = _img_yaprax_png__WEBPACK_IMPORTED_MODULE_3__;\n  img3.classList.add('image-food');\n  const img33 = document.getElementById('img3');\n  img33.appendChild(img3);\n\n  const img4 = new Image();\n  img4.src = _img_sarupe_jpeg__WEBPACK_IMPORTED_MODULE_2__;\n  img4.classList.add('image-food');\n  const img44 = document.getElementById('img4');\n  img44.appendChild(img4);\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foodpage);\n\n//# sourceURL=webpack://webpackk/./src/food.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ (() => {

eval("const headerPage = (() => {\n  // container\n  const contentContainer = document.querySelector('#content');\n\n  const header = document.createElement('header');\n  header.innerHTML = `\n  <nav class='d-flex justify-content-between bg-dark p-3'>\n    <h2 class='text-light'>Kurdish Food</h2>\n    <a href=\"#\" class=\"hamburger\">\n      <span class=\"line line1\"></span>\n      <span class=\"line line2\"></span>\n      <span class=\"line line3\"></span>\n    </a>\n    <ul class=\"list-unstyled d-flex text-light\">\n      <li data-tab-target=\"#home\" class=\"tab red mx-3\">Home</li>\n      <li id='menuu' data-tab-target=\"#menu\" class=\"tab mx-3\">Menu</li>\n      <li data-tab-target=\"#contact\" class=\"tab mx-3\">Contact us</li>\n    </ul>\n</nav>`;\n\n  contentContainer.appendChild(header);\n})();\n\n//# sourceURL=webpack://webpackk/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderHome = (() => {\n  // container ===>\n  const container = document.getElementById('content');\n\n  const home = document.createElement('div');\n  home.classList.add('tab-content');\n\n  home.classList.add('tab-content');\n  home.innerHTML = `\n  <div id=\"home\" class=\"active\" data-tab-content>\n    <div class='container position-relative'>\n      <div class='row col-6 mt-5 mx-auto main-row py-5'>\n        <h1 class='py-5 text-center'>Kurdistan Resturant</h1>\n        <h4 class='text-center'>Come and tase some delicious local foods</h4>\n      </div>\n    </div>\n  </div>`;\n\n  container.appendChild(home);\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);\n\n//# sourceURL=webpack://webpackk/./src/home.js?");

/***/ }),

/***/ "./src/img/kabab.jpg":
/*!***************************!*\
  !*** ./src/img/kabab.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e9e5df9694b2f6e59226.jpg\";\n\n//# sourceURL=webpack://webpackk/./src/img/kabab.jpg?");

/***/ }),

/***/ "./src/img/kababb.jpg":
/*!****************************!*\
  !*** ./src/img/kababb.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"bf9329fdd3204cb3ca11.jpg\";\n\n//# sourceURL=webpack://webpackk/./src/img/kababb.jpg?");

/***/ }),

/***/ "./src/img/kuba.jpg":
/*!**************************!*\
  !*** ./src/img/kuba.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"4ef9da2625c6a7f0ae1b.jpg\";\n\n//# sourceURL=webpack://webpackk/./src/img/kuba.jpg?");

/***/ }),

/***/ "./src/img/sarupe.jpeg":
/*!*****************************!*\
  !*** ./src/img/sarupe.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a8d72f1dfba2861c5372.jpeg\";\n\n//# sourceURL=webpack://webpackk/./src/img/sarupe.jpeg?");

/***/ }),

/***/ "./src/img/yaprax.png":
/*!****************************!*\
  !*** ./src/img/yaprax.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7bce89db50ef7db3c684.png\";\n\n//# sourceURL=webpack://webpackk/./src/img/yaprax.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food */ \"./src/food.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\n// function bottons() {\n//   const header = document.getElementById('header');\n//   const food = document.getElementById('menuu');\n\n//   header.addEventListener('click', headerPage);\n//   food.addEventListener('click', foodpage);\n// }\n// init();\n\n// function init() {\n//   headerPage();\n//   bottons();\n// }\n\nconst tabs = document.querySelectorAll('[data-tab-target]');\nconst tabContents = document.querySelectorAll('[data-tab-content]');\nconst burger = document.querySelector('.hamburger');\n\n// Hamburger menu\nburger.addEventListener('click', () => {\n  document.querySelector('ul').classList.toggle('active');\n  burger.classList.toggle('toggle');\n});\n\n// Navigation tabs\ntabs.forEach((tab) => tab.addEventListener('click', () => {\n  const target = document.querySelector(tab.dataset.tabTarget);\n  tabContents.forEach((tabContent) => {\n    tabContent.classList.remove('active');\n  });\n  tabs.forEach((tab) => {\n    tab.classList.remove('red');\n  });\n  tab.classList.add('red');\n  target.classList.add('active');\n}));\n\ndocument.querySelector('.main-row').addEventListener('click', () => {\n  document.querySelector('[data-tab-target=\"#menu\"]').classList.add('red');\n});\n\ndocument.querySelector('[type=\"submit\"]').addEventListener('click', () => {\n  document.querySelector('form').reset();\n});\n\n\n//# sourceURL=webpack://webpackk/./src/index.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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