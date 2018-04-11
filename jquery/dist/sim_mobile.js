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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/sim_mobile.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nvar utils = __webpack_require__(/*! ./utils.js */ \"./src/js/components/utils.js\");\r\n\r\nvar handler = document.querySelectorAll(\".sim-slider_handler\");\r\n\r\nwindow.slider_startLeft = 0;\r\nwindow.slider_startX = 0;\r\nfor(var i = 0; i < handler.length; i++){\r\n\t\r\n\tif(utils.isPc()){\r\n\t\t\r\n\t\tutils.bind(handler[i], \"mousedown\", function(e){\r\n\t\t\tvar e = e || window.event;\r\n\t\t\tvar totalLen = e.target.parentNode.clientWidth;\r\n\t\t\tslider_startLeft = parseInt(e.target.style.left) * totalLen / 100;\r\n\t\t\tslider_startX = e.clientX;\r\n\t\t});\r\n\t\t\r\n\t\tutils.bind(handler[i], \"mousemove\", function(e){\r\n\t\t\tvar e = e || window.event;\r\n\t\t\tconsole.log(e.clientX)\r\n\t\t\tvar totalLen = e.target.parentNode.clientWidth;\r\n\t\t\tvar dist = slider_startLeft + e.clientX - slider_startX;\r\n\t\t\tdist = dist < 0 ? 0 : dist > totalLen ? totalLen : dist;\r\n\t\t\tvar percent =  parseInt(dist / totalLen * 100);\r\n\t\t\tvar track = e.target.previousElementSibling;\r\n\t\t\ttrack.style.width = percent + '%';\r\n\t    \te.target.style.left = percent + '%';\r\n\t    \te.target.parentNode.parentNode.setAttribute(\"data-value\", percent);\r\n\t    \t\r\n\t    \tvar percentEl = e.target.parentNode.parentNode.nextElementSibling;\r\n\t    \tif(utils.hasClass(percentEl, \"sim-slider_value\")){\r\n\t    \t\tpercentEl.innerText = percent;\r\n\t    \t}\r\n\t    \t\r\n\t    \r\n\t\t});\r\n\t\t\r\n\t\tutils.bind(handler[i], \"mouseup\", function(e){\r\n\t\t\tendCallback(e);\r\n\t\t});\r\n\t\t\r\n\t}else{\r\n\t\t\r\n\t\tutils.bind(handler[i], \"touchstart\", function(e){\r\n\t\t\tvar e = e || window.event;\r\n\t\t\t\r\n\t\t\tvar totalLen = e.target.parentNode.clientWidth;\r\n\t\t\tslider_startLeft = parseInt(e.target.style.left) * totalLen / 100;\r\n\t\t\tslider_startX = e.changedTouches[0].clientX;\r\n\t\t});\r\n\t\t\r\n\t\tutils.bind(handler[i], \"touchmove\", function(e){\r\n\t\t\tvar e = e || window.event;\r\n\t\t\t\r\n\t\t\tvar totalLen = e.target.parentNode.clientWidth;\r\n\t\t\tvar dist = slider_startLeft + e.changedTouches[0].clientX - slider_startX;\r\n\t\t\tdist = dist < 0 ? 0 : dist > totalLen ? totalLen : dist;\r\n\t\t\tvar percent =  parseInt(dist / totalLen * 100);\r\n\t\t\tvar track = e.target.previousElementSibling;\r\n\t\t\ttrack.style.width = percent + '%';\r\n\t    \te.target.style.left = percent + '%';\r\n\t    \te.target.parentNode.parentNode.setAttribute(\"data-value\", percent);\r\n\t    \t\r\n\t    \tvar percentEl = e.target.parentNode.parentNode.nextElementSibling;\r\n\t    \tif(utils.hasClass(percentEl, \"sim-slider_value\")){\r\n\t    \t\tpercentEl.innerText = percent;\r\n\t    \t}\r\n\t    \t\r\n\t    \r\n\t\t});\r\n\t\t\r\n\t\tutils.bind(handler[i], \"touchend\", function(e){\r\n\t\t\tendCallback(e);\r\n\t\t});\r\n\t\t\r\n\t}\r\n\t\r\n\t\r\n}\r\n\r\nvar endCallback = function(e){\r\n\tslider_startLeft = 0;\r\n\tslider_startX = 0;\r\n}\n\n//# sourceURL=webpack:///./src/js/components/slider.js?");

/***/ }),

/***/ "./src/js/components/utils.js":
/*!************************************!*\
  !*** ./src/js/components/utils.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//工具类-公共方法类\r\n;(function(){\r\n\t\r\n    var Utils = function(){\r\n    \t\r\n    };\r\n    \r\n    //iframe下载文件\r\n    Utils.prototype.download = function(filepath){\r\n\t\tlet iframe = document.getElementById(\"downloadframe\");\r\n\t\tif (iframe) {\r\n\t\t\tiframe.src = filepath;\r\n\t\t} else {\r\n\t\t\tiframe = document.createElement(\"iframe\");\r\n\t\t\tiframe.src = filepath;\r\n\t\t\tiframe.style.display = \"none\";\r\n\t\t\tiframe.id = \"downloadframe\";\r\n\t\t\tdocument.body.appendChild(iframe);\r\n\t\t}\r\n\t}\r\n    \r\n    //获取IE版本\r\n    Utils.prototype.getIEVersion = function(){\r\n\t\tlet ua = navigator.userAgent, matches, tridentMap = {'4': 8, '5': 9, '6': 10, '7': 11};\r\n\t\tmatches = ua.match(/MSIE (\\d+)/i);\r\n\t\tif (matches && matches[1]) {\r\n\t\t\treturn +matches[1];\r\n\t\t}\r\n\t\tmatches = ua.match(/Trident\\/(\\d+)/i);\r\n\t\tif (matches && matches[1]) {\r\n\t\t\treturn tridentMap[matches[1]] || null;\r\n\t\t}\r\n\t\treturn null;\r\n\t}\r\n    \r\n    //是否是PC端\r\n    Utils.prototype.isPc = function(){  \r\n        var userAgentInfo = navigator.userAgent;  \r\n        var Agents = new Array(\"Android\", \"iPhone\", \"SymbianOS\", \"Windows Phone\", \"iPad\", \"iPod\");  \r\n        var flag = true;  \r\n        for (var v = 0; v < Agents.length; v++) {  \r\n            if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  \r\n        }  \r\n        return flag;  \r\n    }\r\n    \r\n    //是否是微信客户端\r\n    Utils.prototype.isWx = function(){\r\n    \tvar ua = navigator.userAgent.toLowerCase(); \r\n        if(ua.match(/MicroMessenger/i) == \"micromessenger\") { \r\n            return true; \r\n         } else { \r\n            return false; \r\n        }\r\n    }\r\n    \r\n    //去掉2边空格\r\n    Utils.prototype.trim = function(str){\r\n\t\tstr = typeof str === 'string' ? str : '';\r\n\t\treturn str.trim\r\n\t\t\t? str.trim()\r\n\t\t\t: str.replace(/^\\s|\\s$/g, '');\r\n\t}\r\n    \r\n    //原生js仿jquery的一些方法\r\n    //hide(dom); \r\n    Utils.prototype.hide = function(el){\r\n    \tel.style.display = \"none\";\r\n    }\r\n    //show(dom) \r\n    Utils.prototype.show = function(el){\r\n    \tel.style.display = \"block\"; \r\n    }\r\n    //attr()\r\n    Utils.prototype.attr = function(el){\r\n    \tif(arguments.length == 2){ \r\n\t\t\treturn el.getAttribute(arguments[1]); \r\n\t\t}else if(arguments.length == 3){ \r\n\t\t\tel.setAttribute(arguments[1], arguments[2]);\r\n\t\t}\r\n    }\r\n    //val() \r\n    Utils.prototype.val = function(el){ \r\n    \tif(arguments.length == 1){ \r\n    \t\treturn el.value; \r\n    \t}else if(arguments.length == 2){ \r\n    \t\tel.value = arguments[1]; \r\n    \t} \r\n    } \r\n    //html() \r\n    Utils.prototype.html = function(el){ \r\n    \tif(arguments.length == 1){ \r\n    \t\treturn el.innerHTML; \r\n    \t}else if(arguments.length == 2){ \r\n    \t\tel.innerHTML = arguments[1]; \r\n    \t} \r\n    }\r\n    //append() \r\n    Utils.prototype.append = function(el, newEl){ \r\n    \tel.innerHTML += newEl; \r\n    } \r\n    //prepend() \r\n    Utils.prototype.prepend = function(el, newEl){ \r\n    \tel.innerHTML = newEl + el.innerHTML; \r\n    } \r\n    //after() \r\n    Utils.prototype.after = function(el, newEl){ \r\n    \tel.outerHTML += newEl; \r\n    } \r\n    //before() \r\n    Utils.prototype.before = function(el, newEl){ \r\n    \tel.outerHTML = newEl + el.outerHTML; \r\n    }\r\n    //replaceWith() \r\n    Utils.prototype.replaceWith = function(el, newEl){ \r\n    \tel.outerHTML = newEl; \r\n    }\r\n    //hasClass() \r\n    Utils.prototype.hasClass = function(el, cName){ \r\n    \treturn !!el.className.match( new RegExp( \"(\\\\s|^)\" + cName + \"(\\\\s|$)\") ); \r\n    } \r\n    //addClass() \r\n    Utils.prototype.addClass = function(el, cName){ \r\n    \tif( !this.hasClass(el, cName) ){ \r\n    \t\tel.className += \" \" + cName; \r\n    \t} \r\n    } \r\n    //removeClass() \r\n    Utils.prototype.removeClass = function(el, cName){ \r\n    \tif( this.hasClass(el, cName) ){ \r\n    \t\tel.className = el.className.replace( new RegExp( \"(\\\\s|^)\" + cName + \"(\\\\s|$)\" ),\" \" ); \r\n    \t} \r\n    }\r\n    /*\r\n      \tid或class选择器$(\"elem\") \r\n     \t返回的结果或结果集包含的是htmlDOM，并非jquery的对象\r\n     \tfor(var i = 0; i < utils.$(\".cls\").length; i++){\r\n     \t\tvar el = utils.$(\".cls\")[i];\r\n     \t}\r\n    */\r\n    \r\n    Utils.prototype.$ = function(strExpr){ \r\n\t\tvar idExpr = /^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]*))$/; \r\n\t\tvar classExpr = /^(?:\\s*(<[\\w\\W]+>)[^>]*|.([\\w-]*))$/; \r\n\t\tif(idExpr.test(strExpr)){ \r\n\t\t\tvar idMatch = idExpr.exec(strExpr); \r\n\t\t\treturn document.getElementById(idMatch[2]); \r\n\t\t}else if(classExpr.test(strExpr)){ \r\n\t\t\tvar classMatch = classExpr.exec(strExpr); \r\n\t\t\tvar allElement = document.getElementsByTagName(\"*\"); \r\n\t\t\tvar ClassMatch = []; \r\n\t\t\tfor(var i=0,l=allElement.length; i<l; i++){ \r\n\t\t\t\tif(allElement[i].className.match( new RegExp( \"(\\\\s|^)\" + classMatch[2] + \"(\\\\s|$)\") )){ \r\n\t\t\t\t\tClassMatch.push(allElement[i]); \r\n\t\t\t\t} \r\n\t\t\t} \r\n\t\t\treturn ClassMatch; \r\n\t\t} \r\n\t}\r\n    \r\n    //原生绑定事件\r\n    Utils.prototype.bind = function(el, eventName, fn){\r\n    \tif(window.attachEvent){ \r\n    \t\tel.attachEvent(\"on\" + eventName, fn); \r\n    \t}else{  \r\n    \t\tel.addEventListener(eventName, fn, false); \r\n    \t}\r\n    }\r\n    \r\n    //对象OBJECT操作\r\n    Utils.prototype.extend = function(obj){\r\n    \tvar length = arguments.length;\r\n    \tif (length < 2 || obj == null) return obj;\r\n    \tfor (var index = 1; index < length; index++) {\r\n    \t\tvar source = arguments[index],\r\n    \t\tkeys = this.allKeys(source),\r\n    \t\tl = keys.length;\r\n    \t\tfor (var i = 0; i < l; i++) {\r\n    \t\t\tvar key = keys[i];\r\n    \t\t\t//if (!1 || obj[key] === void 0) obj[key] = source[key];\r\n    \t\t\tif (true) obj[key] = source[key];\r\n    \t\t}\r\n    \t}\r\n  \t    return obj;\r\n    }\r\n    \r\n    Utils.prototype.isObject = function(obj){\r\n    \tvar type = typeof obj;\r\n        return type === 'function' || type === 'object' && !!obj;\r\n    }\r\n    \r\n    Utils.prototype.allKeys = function(obj){\r\n    \tif (!this.isObject(obj)) return [];\r\n        var keys = [];\r\n        for (var key in obj) keys.push(key);\r\n        // Ahem, IE < 9.\r\n        //if (hasEnumBug) collectNonEnumProps(obj, keys);\r\n        return keys;\r\n    }\r\n    \r\n    \r\n\tmodule.exports = new Utils();\r\n\t\r\n\t\r\n}());\n\n//# sourceURL=webpack:///./src/js/components/utils.js?");

/***/ }),

/***/ "./src/js/sim_mobile.js":
/*!******************************!*\
  !*** ./src/js/sim_mobile.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval(";(function(window, $){\r\n\t\r\n\t__webpack_require__(/*! ./../less/sim_mobile.less */ \"./src/less/sim_mobile.less\");\r\n\t\r\n    __webpack_require__(/*! ./components/slider.js */ \"./src/js/components/slider.js\");\r\n    \r\n\t\r\n}(window, jQuery));\r\n\n\n//# sourceURL=webpack:///./src/js/sim_mobile.js?");

/***/ }),

/***/ "./src/less/sim_mobile.less":
/*!**********************************!*\
  !*** ./src/less/sim_mobile.less ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/less/sim_mobile.less?");

/***/ })

/******/ });