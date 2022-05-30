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

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions.js */ \"./src/js/modules/functions.js\");\n\r\n\r\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();\r\n\r\n$(function() {\r\n\t//* --- Fixed Menu --- *//\r\n\t$(window).on('scroll', function() {\r\n\t\tlet scroll = $(window).scrollTop();\r\n\t\tif (scroll < 700) {\r\n\t\t  $(\".header__wrapper\").removeClass(\"fixed\");\r\n\t\t} else {\r\n\t\t\t$(\".header__wrapper\").addClass(\"fixed\");\r\n\t\t}\r\n\t});\r\n\r\n\t//* --- Slider --- *//\r\n\t$('.guests__slider').slick({\r\n\t\tdots: false,\r\n\t\tinfinite: true,\r\n\t\tslidesToShow: 2,\r\n\t\tvariableWidth: true,\r\n\t\tresponsive: [\r\n\t\t\t{\r\n\t\t\t\tbreakpoint: 480,\r\n\t\t\t\tsettings: {\r\n\t\t\t\t\tslidesToShow: 1,\r\n\t\t\t\t\tslidesToScroll: 1,\r\n\t\t\t\t\tvariableWidth: false,\r\n\t\t\t\t}\r\n\t\t\t}\t\r\n\t\t]\r\n\r\n\t});\r\n\r\n\t$('.slick-arrow').on('click', function() {\r\n\t\tlet next = $('.slick-current').next().next();\r\n\t\tvar prev = $('.slick-current').prev();\r\n\r\n\t\t$('.slick-active').removeClass('another');\r\n        next.addClass('another');\r\n\t});\r\n\r\n\t//* --- Burger --- *//\r\n\tconst burger = document.querySelector('.header__burger');\r\n\tconst burgerBtn = document.querySelector('.btn');\r\n\tconst burgerMenu = document.querySelector('.nav');\r\n\tconst burgerList = [burger, burgerBtn, burgerMenu];\r\n\tburger.addEventListener('click', () => {\r\n\t\tburgerList.forEach((e) => {\r\n\t\t\te.classList.toggle('active');\r\n\t\t})\r\n\t\t\r\n\t\t// Anchor crossing\r\n\t\tfor (let i = 0; i < burgerList.length; i++) {\r\n\t\t\tif (burgerList[i].classList.contains('active')) {\r\n\t\t\t\tdocument.body.style.overflow = 'hidden';\r\n\t\t\t\tdocument.documentElement.style.scrollBehavior = 'auto';\r\n\t\t\t} else {\r\n\t\t\t\tdocument.body.style.overflow = 'auto';\t\r\n\t\t\t\tdocument.documentElement.style.scrollBehavior = 'smooth';\r\n\t\t\t}\r\n\t\t}\r\n\t});\r\n\r\n\t// Anchor crossing\r\n\tconst navLinks = document.querySelectorAll('.nav__link');\r\n\tnavLinks.forEach((navLink) => {\r\n\t\tnavLink.addEventListener('click', (e) => {\r\n\t\t\tdocument.body.style.overflow = 'auto';\t\r\n\t\t\tsetTimeout(() => {\r\n\t\t\t\tdocument.documentElement.style.scrollBehavior = 'smooth';\t\r\n\t\t\t}, 1000);\r\n\t\t});\r\n\t});\r\n});\n\n//# sourceURL=webpack://createx/./src/js/main.js?");

    /***/ }),
    
    /***/ "./src/js/modules/functions.js":
    /*!*************************************!*\
      !*** ./src/js/modules/functions.js ***!
      \*************************************/
    /***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isWebp\": () => (/* binding */ isWebp)\n/* harmony export */ });\nfunction isWebp() {\r\n    // \r\n    function testWebP(callback) {\r\n        let webP = new Image();\r\n        webP.onload = webP.onerror = function () {\r\n            callback(webP.height == 2);\r\n        };\r\n        webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n    }\r\n        \r\n    testWebP(function (support) {\r\n        if (support == true) {\r\n            document.querySelector('body').classList.add('webp');\r\n        } else {\r\n            document.querySelector('body').classList.add('no-webp');\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack://createx/./src/js/modules/functions.js?");
    
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
    /******/ 			// no module.id needed
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
    /************************************************************************/
    /******/ 	
    /******/ 	// startup
    /******/ 	// Load entry module and return exports
    /******/ 	// This entry module can't be inlined because the eval devtool is used.
    /******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
    /******/ 	
    /******/ })()
    ;