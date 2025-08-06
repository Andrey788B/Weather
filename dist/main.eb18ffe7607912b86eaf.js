/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./picturies/rainy-bg.jpg":
/*!********************************!*\
  !*** ./picturies/rainy-bg.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5df8a5c7dcda04cc3f1e.jpg";

/***/ }),

/***/ "./picturies/summer-bg.jpg":
/*!*********************************!*\
  !*** ./picturies/summer-bg.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a318dfda9223c9b6bcc1.jpg";

/***/ }),

/***/ "./picturies/winter-bg.jpg":
/*!*********************************!*\
  !*** ./picturies/winter-bg.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "032cb68ed96890ac0c3b.jpg";

/***/ }),

/***/ "./sounds/rain.mp3":
/*!*************************!*\
  !*** ./sounds/rain.mp3 ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7ee8a84e7ecf1112c27.mp3";

/***/ }),

/***/ "./sounds/summer.mp3":
/*!***************************!*\
  !*** ./sounds/summer.mp3 ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba837e3ecc073286cbc4.mp3";

/***/ }),

/***/ "./sounds/winter.mp3":
/*!***************************!*\
  !*** ./sounds/winter.mp3 ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24f5c09b90641ef35477.mp3";

/***/ }),

/***/ "./styles/scss/main.scss":
/*!*******************************!*\
  !*** ./styles/scss/main.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/scss/main.scss */ "./styles/scss/main.scss");
/* harmony import */ var _sounds_summer_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sounds/summer.mp3 */ "./sounds/summer.mp3");
/* harmony import */ var _sounds_rain_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sounds/rain.mp3 */ "./sounds/rain.mp3");
/* harmony import */ var _sounds_winter_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sounds/winter.mp3 */ "./sounds/winter.mp3");
/* harmony import */ var _src_picturies_summer_bg_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/picturies/summer-bg.jpg */ "./picturies/summer-bg.jpg");
/* harmony import */ var _src_picturies_rainy_bg_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/picturies/rainy-bg.jpg */ "./picturies/rainy-bg.jpg");
/* harmony import */ var _src_picturies_winter_bg_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/picturies/winter-bg.jpg */ "./picturies/winter-bg.jpg");










const sounds = {
  forest: new Audio(_sounds_summer_mp3__WEBPACK_IMPORTED_MODULE_1__),
  rain: new Audio(_sounds_rain_mp3__WEBPACK_IMPORTED_MODULE_2__),
  snow: new Audio(_sounds_winter_mp3__WEBPACK_IMPORTED_MODULE_3__),
};

const backgrounds = {
  forest: _src_picturies_summer_bg_jpg__WEBPACK_IMPORTED_MODULE_4__,
  rain: _src_picturies_rainy_bg_jpg__WEBPACK_IMPORTED_MODULE_5__,
  snow: _src_picturies_winter_bg_jpg__WEBPACK_IMPORTED_MODULE_6__,
};

Object.values(sounds).forEach(audio => {
  audio.loop = true
  audio.volume = 0.5
})

let current = {
  name: null,
  isPlaying: false,
}

const cards = document.querySelectorAll('.Card')
const volumeSlider = document.getElementById('volumeSlider')
const body = document.body

cards.forEach(card => {
  card.addEventListener('click', () => {
    const soundName = card.dataset.sound
    const bg = backgrounds[soundName]

    if (current.name && current.name !== soundName) {
      sounds[current.name].pause()
      sounds[current.name].currentTime = 0
    }

    if (current.name === soundName && current.isPlaying) {
      sounds[soundName].pause()
      current.isPlaying = false
    } else {
      sounds[soundName].play()
      current = { name: soundName, isPlaying: true }
      body.style.backgroundImage = `url('${bg}')`
    }
  })
})

volumeSlider.addEventListener('input', () => {
  if (current.name) {
    sounds[current.name].volume = volumeSlider.value
  }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lYjE4ZmZlNzYwNzkxMmI4NmVhZi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJrQztBQUNsQztBQUMrQztBQUNKO0FBQ0U7QUFDN0M7QUFDeUQ7QUFDSDtBQUNDO0FBQ3ZEO0FBQ0E7QUFDQSxvQkFBb0IsK0NBQVc7QUFDL0Isa0JBQWtCLDZDQUFTO0FBQzNCLGtCQUFrQiwrQ0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxVQUFVLHlEQUFRO0FBQ2xCLFFBQVEsd0RBQU07QUFDZCxRQUFRLHlEQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esa0JBQWtCO0FBQ2xCLDJDQUEyQyxHQUFHO0FBQzlDO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3Njc3MvbWFpbi5zY3NzP2VkOTAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4uL3N0eWxlcy9zY3NzL21haW4uc2Nzcyc7XHJcblxyXG5pbXBvcnQgZm9yZXN0U291bmQgZnJvbSAnLi4vc291bmRzL3N1bW1lci5tcDMnO1xyXG5pbXBvcnQgcmFpblNvdW5kIGZyb20gJy4uL3NvdW5kcy9yYWluLm1wMyc7XHJcbmltcG9ydCBzbm93U291bmQgZnJvbSAnLi4vc291bmRzL3dpbnRlci5tcDMnO1xyXG5cclxuaW1wb3J0IGZvcmVzdEJnIGZyb20gJy4uLy4uL3NyYy9waWN0dXJpZXMvc3VtbWVyLWJnLmpwZyc7XHJcbmltcG9ydCByYWluQmcgZnJvbSAnLi4vLi4vc3JjL3BpY3R1cmllcy9yYWlueS1iZy5qcGcnO1xyXG5pbXBvcnQgc25vd0JnIGZyb20gJy4uLy4uL3NyYy9waWN0dXJpZXMvd2ludGVyLWJnLmpwZyc7XHJcblxyXG5jb25zdCBzb3VuZHMgPSB7XHJcbiAgZm9yZXN0OiBuZXcgQXVkaW8oZm9yZXN0U291bmQpLFxyXG4gIHJhaW46IG5ldyBBdWRpbyhyYWluU291bmQpLFxyXG4gIHNub3c6IG5ldyBBdWRpbyhzbm93U291bmQpLFxyXG59O1xyXG5cclxuY29uc3QgYmFja2dyb3VuZHMgPSB7XHJcbiAgZm9yZXN0OiBmb3Jlc3RCZyxcclxuICByYWluOiByYWluQmcsXHJcbiAgc25vdzogc25vd0JnLFxyXG59O1xyXG5cclxuT2JqZWN0LnZhbHVlcyhzb3VuZHMpLmZvckVhY2goYXVkaW8gPT4ge1xyXG4gIGF1ZGlvLmxvb3AgPSB0cnVlXHJcbiAgYXVkaW8udm9sdW1lID0gMC41XHJcbn0pXHJcblxyXG5sZXQgY3VycmVudCA9IHtcclxuICBuYW1lOiBudWxsLFxyXG4gIGlzUGxheWluZzogZmFsc2UsXHJcbn1cclxuXHJcbmNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkNhcmQnKVxyXG5jb25zdCB2b2x1bWVTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9sdW1lU2xpZGVyJylcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHlcclxuXHJcbmNhcmRzLmZvckVhY2goY2FyZCA9PiB7XHJcbiAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IHNvdW5kTmFtZSA9IGNhcmQuZGF0YXNldC5zb3VuZFxyXG4gICAgY29uc3QgYmcgPSBiYWNrZ3JvdW5kc1tzb3VuZE5hbWVdXHJcblxyXG4gICAgaWYgKGN1cnJlbnQubmFtZSAmJiBjdXJyZW50Lm5hbWUgIT09IHNvdW5kTmFtZSkge1xyXG4gICAgICBzb3VuZHNbY3VycmVudC5uYW1lXS5wYXVzZSgpXHJcbiAgICAgIHNvdW5kc1tjdXJyZW50Lm5hbWVdLmN1cnJlbnRUaW1lID0gMFxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXJyZW50Lm5hbWUgPT09IHNvdW5kTmFtZSAmJiBjdXJyZW50LmlzUGxheWluZykge1xyXG4gICAgICBzb3VuZHNbc291bmROYW1lXS5wYXVzZSgpXHJcbiAgICAgIGN1cnJlbnQuaXNQbGF5aW5nID0gZmFsc2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNvdW5kc1tzb3VuZE5hbWVdLnBsYXkoKVxyXG4gICAgICBjdXJyZW50ID0geyBuYW1lOiBzb3VuZE5hbWUsIGlzUGxheWluZzogdHJ1ZSB9XHJcbiAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtiZ30nKWBcclxuICAgIH1cclxuICB9KVxyXG59KVxyXG5cclxudm9sdW1lU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gIGlmIChjdXJyZW50Lm5hbWUpIHtcclxuICAgIHNvdW5kc1tjdXJyZW50Lm5hbWVdLnZvbHVtZSA9IHZvbHVtZVNsaWRlci52YWx1ZVxyXG4gIH1cclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=