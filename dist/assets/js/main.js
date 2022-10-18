/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 173:
/*!****************************************************************!*\
  !*** ./node_modules/@mdi/font/css/materialdesignicons.min.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 560:
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 412:
/*!******************************************!*\
  !*** ./node_modules/reset-css/reset.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 891:
/*!***********************************!*\
  !*** ./src/assets/css/style.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 822:
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ (() => {

const close = document.querySelector('#modal .close');
const modalWrap = document.querySelector('.modal-wrap');
const btnOpen = document.querySelectorAll('.description .btn');
const carouselWindow = document.querySelector('#modal');
const divSlide = document.querySelectorAll('.carousel div');
const carouselDiv = document.querySelector('.carousel');

const slideWidth = parseFloat(window.getComputedStyle(carouselWindow).width);

function setWidth() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    )
  ) {
    divSlide.forEach((e) => { e.style.width = `${slideWidth}px`; });
    carouselDiv.style.left = `-${slideWidth}px`;
  }
}

setWidth();

// OPEN/CLOSE PORTFOLIO
function showModal() {
  modalWrap.classList.add('visible');
}

function closeModal(e) {
  if (e.target.classList.contains('close')) {
    modalWrap.classList.remove('visible');
  }
}
btnOpen.forEach((e) => e.addEventListener('click', showModal));
btnOpen.forEach((e) => e.addEventListener('touchend', showModal));
close.addEventListener('click', closeModal);
modalWrap.addEventListener('click', closeModal);

function shiftSlide(direction) {
  const slideFirst = document.querySelector('.carousel > div:first-child');
  const slideLast = document.querySelector('.carousel > div:last-child');

  if (carouselDiv.classList.contains('transition')) return;

  carouselDiv.classList.add('transition');
  carouselDiv.style.transform = `translateX(${direction * slideWidth}px)`;

  // here is where the magic begins!
  // have to change the background image

  setTimeout(() => {
    if (direction === 1) {
      slideFirst.parentNode.insertBefore(slideLast, slideFirst);
    } else if (direction === -1) {
      slideLast.parentNode.append(slideFirst);
    }
    carouselDiv.classList.remove('transition');
    carouselDiv.style.transform = 'translateX(0px)';
  }, 700);
}
const next = document.querySelector('i.right');
const prev = document.querySelector('i.left');

next.addEventListener('click', () => {
  shiftSlide(-1);
});

prev.addEventListener('click', () => {
  shiftSlide(1);
});


/***/ }),

/***/ 950:
/*!*********************************!*\
  !*** ./src/assets/js/script.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animate.css */ 560);
/* harmony import */ var reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reset-css */ 412);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/style.scss */ 891);
/* harmony import */ var _images_dev_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/dev.png */ 688);
/* harmony import */ var _mdi_font_css_materialdesignicons_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/font/css/materialdesignicons.min.css */ 173);







// group of functions to set a given theme/color-scheme
(() => {
  function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }

  // function to toggle between light and dark theme
  // eslint-disable-next-line no-unused-vars
  function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('default');
    } else {
      setTheme('dark');
    }
  }

  // Immediately invoked function to set the theme on initial load
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('dark');
    document.getElementById('slider').checked = false;
  } else {
    setTheme('default');
    document.getElementById('slider').checked = true;
  }
})();

// menu active link

const menulinks = document.querySelectorAll('#mainnav a');
const sections = document.querySelectorAll('section');

function changeMenu() {
  sections.forEach((e) => {
    const top = window.scrollY;
    const offset = e.offsetTop;
    const id = e.getAttribute('id');
    const headerheight = 50;

    if (top >= offset - headerheight) {
      menulinks.forEach((item) => {
        item.parentElement.classList.remove('active');
        if (item.getAttribute('href') === `#${id}`) {
          item.parentElement.classList.add('active');
        }
      });
    }
  });
}

function startLoader() {
  const loader = document.querySelector('.loader');
  loader.style.right = '0';

  window.addEventListener('DOMContentLoaded', () => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 750);
  });
}
startLoader();

// function clickChangeMenu(e) {
//   console.log(e.target);
//   for (let i = 0; i < menulinks.length; i += 1) {
//     menulinks[i].parentElement.classList.remove('active');
//     if (menulinks[i] === e.target) {
//       menulinks[i].parentElement.classList.add('active');
//     }
//   }
// }

// menulinks.forEach((e) => e.addEventListener('click', clickChangeMenu));

window.onscroll = () => changeMenu();
window.onload = () => changeMenu();


/***/ }),

/***/ 688:
/*!***********************************!*\
  !*** ./src/assets/images/dev.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/dev.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0,
/******/ 			"vendors": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__(950)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__(822)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b2R1bGVzL0BtZGkvZm9udC9jc3MvbWF0ZXJpYWxkZXNpZ25pY29ucy5taW4uY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmNzcy9hbmltYXRlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvcmVzZXQtY3NzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3NldHMvanMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsIC5jbG9zZScpO1xuY29uc3QgbW9kYWxXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXAnKTtcbmNvbnN0IGJ0bk9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVzY3JpcHRpb24gLmJ0bicpO1xuY29uc3QgY2Fyb3VzZWxXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKTtcbmNvbnN0IGRpdlNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsIGRpdicpO1xuY29uc3QgY2Fyb3VzZWxEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwnKTtcblxuY29uc3Qgc2xpZGVXaWR0aCA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoY2Fyb3VzZWxXaW5kb3cpLndpZHRoKTtcblxuZnVuY3Rpb24gc2V0V2lkdGgoKSB7XG4gIGlmIChcbiAgICAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoXG4gICAgICBuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgIClcbiAgKSB7XG4gICAgZGl2U2xpZGUuZm9yRWFjaCgoZSkgPT4geyBlLnN0eWxlLndpZHRoID0gYCR7c2xpZGVXaWR0aH1weGA7IH0pO1xuICAgIGNhcm91c2VsRGl2LnN0eWxlLmxlZnQgPSBgLSR7c2xpZGVXaWR0aH1weGA7XG4gIH1cbn1cblxuc2V0V2lkdGgoKTtcblxuLy8gT1BFTi9DTE9TRSBQT1JURk9MSU9cbmZ1bmN0aW9uIHNob3dNb2RhbCgpIHtcbiAgbW9kYWxXcmFwLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbChlKSB7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlJykpIHtcbiAgICBtb2RhbFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICB9XG59XG5idG5PcGVuLmZvckVhY2goKGUpID0+IGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TW9kYWwpKTtcbmJ0bk9wZW4uZm9yRWFjaCgoZSkgPT4gZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHNob3dNb2RhbCkpO1xuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbm1vZGFsV3JhcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuXG5mdW5jdGlvbiBzaGlmdFNsaWRlKGRpcmVjdGlvbikge1xuICBjb25zdCBzbGlkZUZpcnN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsID4gZGl2OmZpcnN0LWNoaWxkJyk7XG4gIGNvbnN0IHNsaWRlTGFzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbCA+IGRpdjpsYXN0LWNoaWxkJyk7XG5cbiAgaWYgKGNhcm91c2VsRGl2LmNsYXNzTGlzdC5jb250YWlucygndHJhbnNpdGlvbicpKSByZXR1cm47XG5cbiAgY2Fyb3VzZWxEaXYuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbicpO1xuICBjYXJvdXNlbERpdi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2RpcmVjdGlvbiAqIHNsaWRlV2lkdGh9cHgpYDtcblxuICAvLyBoZXJlIGlzIHdoZXJlIHRoZSBtYWdpYyBiZWdpbnMhXG4gIC8vIGhhdmUgdG8gY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGltYWdlXG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgc2xpZGVGaXJzdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzbGlkZUxhc3QsIHNsaWRlRmlyc3QpO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAtMSkge1xuICAgICAgc2xpZGVMYXN0LnBhcmVudE5vZGUuYXBwZW5kKHNsaWRlRmlyc3QpO1xuICAgIH1cbiAgICBjYXJvdXNlbERpdi5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2l0aW9uJyk7XG4gICAgY2Fyb3VzZWxEaXYuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMHB4KSc7XG4gIH0sIDcwMCk7XG59XG5jb25zdCBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaS5yaWdodCcpO1xuY29uc3QgcHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2kubGVmdCcpO1xuXG5uZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBzaGlmdFNsaWRlKC0xKTtcbn0pO1xuXG5wcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBzaGlmdFNsaWRlKDEpO1xufSk7XG4iLCJpbXBvcnQgJ2FuaW1hdGUuY3NzJztcbmltcG9ydCAncmVzZXQtY3NzJztcbmltcG9ydCAnLi4vY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuLi9pbWFnZXMvZGV2LnBuZyc7XG5cbmltcG9ydCAnQG1kaS9mb250L2Nzcy9tYXRlcmlhbGRlc2lnbmljb25zLm1pbi5jc3MnO1xuXG4vLyBncm91cCBvZiBmdW5jdGlvbnMgdG8gc2V0IGEgZ2l2ZW4gdGhlbWUvY29sb3Itc2NoZW1lXG4oKCkgPT4ge1xuICBmdW5jdGlvbiBzZXRUaGVtZSh0aGVtZU5hbWUpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCB0aGVtZU5hbWUpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgPSB0aGVtZU5hbWU7XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byB0b2dnbGUgYmV0d2VlbiBsaWdodCBhbmQgZGFyayB0aGVtZVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgZnVuY3Rpb24gdG9nZ2xlVGhlbWUoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpID09PSAndGhlbWUtZGFyaycpIHtcbiAgICAgIHNldFRoZW1lKCdkZWZhdWx0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRoZW1lKCdkYXJrJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gSW1tZWRpYXRlbHkgaW52b2tlZCBmdW5jdGlvbiB0byBzZXQgdGhlIHRoZW1lIG9uIGluaXRpYWwgbG9hZFxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgPT09ICd0aGVtZS1kYXJrJykge1xuICAgIHNldFRoZW1lKCdkYXJrJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlcicpLmNoZWNrZWQgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBzZXRUaGVtZSgnZGVmYXVsdCcpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXInKS5jaGVja2VkID0gdHJ1ZTtcbiAgfVxufSkoKTtcblxuLy8gbWVudSBhY3RpdmUgbGlua1xuXG5jb25zdCBtZW51bGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbWFpbm5hdiBhJyk7XG5jb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24nKTtcblxuZnVuY3Rpb24gY2hhbmdlTWVudSgpIHtcbiAgc2VjdGlvbnMuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGNvbnN0IHRvcCA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGNvbnN0IG9mZnNldCA9IGUub2Zmc2V0VG9wO1xuICAgIGNvbnN0IGlkID0gZS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgY29uc3QgaGVhZGVyaGVpZ2h0ID0gNTA7XG5cbiAgICBpZiAodG9wID49IG9mZnNldCAtIGhlYWRlcmhlaWdodCkge1xuICAgICAgbWVudWxpbmtzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSA9PT0gYCMke2lkfWApIHtcbiAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0TG9hZGVyKCkge1xuICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XG4gIGxvYWRlci5zdHlsZS5yaWdodCA9ICcwJztcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBsb2FkZXIuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0sIDc1MCk7XG4gIH0pO1xufVxuc3RhcnRMb2FkZXIoKTtcblxuLy8gZnVuY3Rpb24gY2xpY2tDaGFuZ2VNZW51KGUpIHtcbi8vICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVsaW5rcy5sZW5ndGg7IGkgKz0gMSkge1xuLy8gICAgIG1lbnVsaW5rc1tpXS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuLy8gICAgIGlmIChtZW51bGlua3NbaV0gPT09IGUudGFyZ2V0KSB7XG4vLyAgICAgICBtZW51bGlua3NbaV0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gbWVudWxpbmtzLmZvckVhY2goKGUpID0+IGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NoYW5nZU1lbnUpKTtcblxud2luZG93Lm9uc2Nyb2xsID0gKCkgPT4gY2hhbmdlTWVudSgpO1xud2luZG93Lm9ubG9hZCA9ICgpID0+IGNoYW5nZU1lbnUoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybCArIFwiLi4vLi4vXCI7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwLFxuXHRcInZlbmRvcnNcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcG9ydGZvbGlvXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3BvcnRmb2xpb1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKDk1MCkpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyg4MjIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=