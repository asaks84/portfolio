/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 173:
/*!****************************************************************!*\
  !*** ./node_modules/@mdi/font/css/materialdesignicons.min.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 560:
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 412:
/*!******************************************!*\
  !*** ./node_modules/reset-css/reset.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 891:
/*!***********************************!*\
  !*** ./src/assets/css/style.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 822:
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _portfolioObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolioObj */ 606);
// import portfolio from './portfolioObj';



const close = document.querySelector('#modal .close');
const modalWrap = document.querySelector('.modal-wrap');
const btnOpen = document.querySelectorAll('.description .btn');
const modal = document.querySelector('#modal');
const carouselDiv = modal.querySelector('.carousel');
const next = modal.querySelector('i.right');
const prev = modal.querySelector('i.left');
const headline = modal.querySelector('.infos h3');
const tags = modal.querySelector('.infos h6');
const text = modal.querySelector('.infos p');
const linksDiv = modal.querySelector('div.links');

const slideWidth = parseFloat(window.getComputedStyle(modal).width);

// ADJUST SIZE FOR MOBILE

function setWidth(slide, num) {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      .test(navigator.userAgent)
  ) {
    // eslint-disable-next-line no-param-reassign
    slide.style.width = `${slideWidth}px`;
    carouselDiv.style.left = `-${slideWidth}px`;
  }
  carouselDiv.style.width = `${slideWidth * num}px`;
}

// CLEAR SLIDES
function clearSlides() {
  const slides = carouselDiv.querySelectorAll('div');
  slides.forEach((e) => e.remove());
}

// OPEN/CLOSE PORTFOLIO

function showModal() {
  modalWrap.classList.add('visible');
}

function closeModal(e) {
  if (e.target.classList.contains('close')) {
    modalWrap.classList.remove('visible');
    clearSlides();
  }
}

// FILL MODAL

// create image slide

function createImageSlide(client, image) {
  const slideDiv = document.createElement('div');
  const value = image.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  setWidth(slideDiv, _portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"][client].images);
  slideDiv.style.background = `url('assets/images/protfolio/${client}/${value}.jpg') center center/cover`;
  carouselDiv.appendChild(slideDiv);
}

// select image slide

function selectBgImage(client) {
  const maxImagePortfolio = _portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"][client].images;

  for (let i = 1; i <= maxImagePortfolio; i += 1) {
    createImageSlide(client, i);
  }
}

// infos

function hideButton(type) {
  const linkButton = linksDiv.querySelector(`a.${type}`);
  linkButton.classList.remove('visible');
}

function setLink(link, type) {
  const linkButton = linksDiv.querySelector(`a.${type}`);

  linkButton.href = link;
  linkButton.classList.add('visible');
}
function fillModal(e) {
  const btn = e.target.dataset.client;
  selectBgImage(btn);
  headline.textContent = _portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"][btn].title;
  tags.textContent = _portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"][btn].tags;
  text.textContent = _portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"][btn].text;

  if (Object.prototype.hasOwnProperty.call(_portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"][btn], 'site')) {
    setLink(_portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"][btn].site, 'site');
  } else hideButton('site');
  if (Object.prototype.hasOwnProperty.call(_portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"][btn], 'repo')) {
    setLink(_portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"][btn].repo, 'repo');
  } else hideButton('repo');

  showModal(e);
}

btnOpen.forEach((e) => e.addEventListener('click', fillModal));
btnOpen.forEach((e) => e.addEventListener('touchend', fillModal));
close.addEventListener('click', closeModal);
modalWrap.addEventListener('click', closeModal);

// SHIFT SLIDE

function shiftSlide(direction) {
  const slideFirst = document.querySelector('.carousel > div:first-child');
  const slideLast = document.querySelector('.carousel > div:last-child');

  if (carouselDiv.classList.contains('transition')) return;

  carouselDiv.classList.add('transition');
  carouselDiv.style.transform = `translateX(${direction * slideWidth}px)`;

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

next.addEventListener('click', () => { shiftSlide(-1); });
prev.addEventListener('click', () => { shiftSlide(1); });


/***/ }),

/***/ 606:
/*!***************************************!*\
  !*** ./src/assets/js/portfolioObj.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// To save images use this path: 'assets/images/portfolio/<clientNameObject>/'
// 00.jpg to portfolio screen
// 01 to 'images' number to use on slider

const portfolio = {
  // Portfolio content

  rivieras: {
    title: 'Rivieras Hotel',
    tags: '#JavaScript #HTML5 #CSS',
    text:
      'Desenvolvimento do código do site do motel Rivieras Hotel. Layout por King Propaganda.',
    site: 'http://www.rivierashotel.com.br',
    images: 3,
  },

  jagrao: {
    title: 'Jagrao Brazil',
    tags: '#JavaScript #HTML5 #CSS #WordPress',
    text: 'Desenvolvimento do site bilingue para exposição de produtos da exportadora de frutas Jagrão Brazil. Layout por Sergio Lima.',
    site: 'http://jagraobrazil.com',
    images: 3,
  },

  jagrao2: {
    title: 'Jagrao Brazil',
    tags: '#JavaScript #HTML5 #CSS #WordPress',
    text: 'Repaginação do site da empresa Jagrao Brazil. Layout por 360º Agência Criativa.',
    site: 'http://jagraobrazil.com',
    images: 5,
  },

  itauna: {
    title: 'Itaúna Advisors',
    tags: '#JavaScript #HTML5 #CSS #WebDesign',
    text: 'Site institucional da empresa Itaúna Advisors do RJ de constultoria financeira.',
    site: 'https://www.itaunaconsultoria.com.br/',
    images: 5,
  },

  mauaeconzo: {
    title: 'Maua & Conzo',
    tags: '#JavaScript #HTML5 #CSS #WordPress',
    text:
      'Site pensado e desenvolvido com o intuito de captação de novos clientes para a empresa. Para atingir o resultado de captação de clientes, fizemos diversas landing pages dentro do site para que cada uma pudesse ser divulgada individualmente junto ao buscadores. Layout por Junior Mendes.',
    site: 'https://www.mauaeconzo.com.br/',
    images: 5,
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (portfolio);


/***/ }),

/***/ 950:
/*!*********************************!*\
  !*** ./src/assets/js/script.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVqREE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL0BtZGkvZm9udC9jc3MvbWF0ZXJpYWxkZXNpZ25pY29ucy5taW4uY3NzPzc0N2EiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuY3NzL2FuaW1hdGUuY3NzP2E3ZTciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3Jlc2V0LWNzcy9yZXNldC5jc3M/MTBmNyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5zY3NzPzg3ZmIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9qcy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL3BvcnRmb2xpb09iai5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBpbXBvcnQgcG9ydGZvbGlvIGZyb20gJy4vcG9ydGZvbGlvT2JqJztcblxuaW1wb3J0IHBvcnRmb2xpbyBmcm9tICcuL3BvcnRmb2xpb09iaic7XG5cbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsIC5jbG9zZScpO1xuY29uc3QgbW9kYWxXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXAnKTtcbmNvbnN0IGJ0bk9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVzY3JpcHRpb24gLmJ0bicpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKTtcbmNvbnN0IGNhcm91c2VsRGl2ID0gbW9kYWwucXVlcnlTZWxlY3RvcignLmNhcm91c2VsJyk7XG5jb25zdCBuZXh0ID0gbW9kYWwucXVlcnlTZWxlY3RvcignaS5yaWdodCcpO1xuY29uc3QgcHJldiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2kubGVmdCcpO1xuY29uc3QgaGVhZGxpbmUgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuaW5mb3MgaDMnKTtcbmNvbnN0IHRhZ3MgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuaW5mb3MgaDYnKTtcbmNvbnN0IHRleHQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuaW5mb3MgcCcpO1xuY29uc3QgbGlua3NEaXYgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdkaXYubGlua3MnKTtcblxuY29uc3Qgc2xpZGVXaWR0aCA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUobW9kYWwpLndpZHRoKTtcblxuLy8gQURKVVNUIFNJWkUgRk9SIE1PQklMRVxuXG5mdW5jdGlvbiBzZXRXaWR0aChzbGlkZSwgbnVtKSB7XG4gIGlmIChcbiAgICAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pXG4gICAgICAudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KVxuICApIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBzbGlkZS5zdHlsZS53aWR0aCA9IGAke3NsaWRlV2lkdGh9cHhgO1xuICAgIGNhcm91c2VsRGl2LnN0eWxlLmxlZnQgPSBgLSR7c2xpZGVXaWR0aH1weGA7XG4gIH1cbiAgY2Fyb3VzZWxEaXYuc3R5bGUud2lkdGggPSBgJHtzbGlkZVdpZHRoICogbnVtfXB4YDtcbn1cblxuLy8gQ0xFQVIgU0xJREVTXG5mdW5jdGlvbiBjbGVhclNsaWRlcygpIHtcbiAgY29uc3Qgc2xpZGVzID0gY2Fyb3VzZWxEaXYucXVlcnlTZWxlY3RvckFsbCgnZGl2Jyk7XG4gIHNsaWRlcy5mb3JFYWNoKChlKSA9PiBlLnJlbW92ZSgpKTtcbn1cblxuLy8gT1BFTi9DTE9TRSBQT1JURk9MSU9cblxuZnVuY3Rpb24gc2hvd01vZGFsKCkge1xuICBtb2RhbFdyYXAuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKGUpIHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xvc2UnKSkge1xuICAgIG1vZGFsV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgY2xlYXJTbGlkZXMoKTtcbiAgfVxufVxuXG4vLyBGSUxMIE1PREFMXG5cbi8vIGNyZWF0ZSBpbWFnZSBzbGlkZVxuXG5mdW5jdGlvbiBjcmVhdGVJbWFnZVNsaWRlKGNsaWVudCwgaW1hZ2UpIHtcbiAgY29uc3Qgc2xpZGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdmFsdWUgPSBpbWFnZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XG4gICAgbWluaW11bUludGVnZXJEaWdpdHM6IDIsXG4gICAgdXNlR3JvdXBpbmc6IGZhbHNlLFxuICB9KTtcbiAgc2V0V2lkdGgoc2xpZGVEaXYsIHBvcnRmb2xpb1tjbGllbnRdLmltYWdlcyk7XG4gIHNsaWRlRGl2LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCdhc3NldHMvaW1hZ2VzL3Byb3Rmb2xpby8ke2NsaWVudH0vJHt2YWx1ZX0uanBnJykgY2VudGVyIGNlbnRlci9jb3ZlcmA7XG4gIGNhcm91c2VsRGl2LmFwcGVuZENoaWxkKHNsaWRlRGl2KTtcbn1cblxuLy8gc2VsZWN0IGltYWdlIHNsaWRlXG5cbmZ1bmN0aW9uIHNlbGVjdEJnSW1hZ2UoY2xpZW50KSB7XG4gIGNvbnN0IG1heEltYWdlUG9ydGZvbGlvID0gcG9ydGZvbGlvW2NsaWVudF0uaW1hZ2VzO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IG1heEltYWdlUG9ydGZvbGlvOyBpICs9IDEpIHtcbiAgICBjcmVhdGVJbWFnZVNsaWRlKGNsaWVudCwgaSk7XG4gIH1cbn1cblxuLy8gaW5mb3NcblxuZnVuY3Rpb24gaGlkZUJ1dHRvbih0eXBlKSB7XG4gIGNvbnN0IGxpbmtCdXR0b24gPSBsaW5rc0Rpdi5xdWVyeVNlbGVjdG9yKGBhLiR7dHlwZX1gKTtcbiAgbGlua0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG59XG5cbmZ1bmN0aW9uIHNldExpbmsobGluaywgdHlwZSkge1xuICBjb25zdCBsaW5rQnV0dG9uID0gbGlua3NEaXYucXVlcnlTZWxlY3RvcihgYS4ke3R5cGV9YCk7XG5cbiAgbGlua0J1dHRvbi5ocmVmID0gbGluaztcbiAgbGlua0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG59XG5mdW5jdGlvbiBmaWxsTW9kYWwoZSkge1xuICBjb25zdCBidG4gPSBlLnRhcmdldC5kYXRhc2V0LmNsaWVudDtcbiAgc2VsZWN0QmdJbWFnZShidG4pO1xuICBoZWFkbGluZS50ZXh0Q29udGVudCA9IHBvcnRmb2xpb1tidG5dLnRpdGxlO1xuICB0YWdzLnRleHRDb250ZW50ID0gcG9ydGZvbGlvW2J0bl0udGFncztcbiAgdGV4dC50ZXh0Q29udGVudCA9IHBvcnRmb2xpb1tidG5dLnRleHQ7XG5cbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwb3J0Zm9saW9bYnRuXSwgJ3NpdGUnKSkge1xuICAgIHNldExpbmsocG9ydGZvbGlvW2J0bl0uc2l0ZSwgJ3NpdGUnKTtcbiAgfSBlbHNlIGhpZGVCdXR0b24oJ3NpdGUnKTtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwb3J0Zm9saW9bYnRuXSwgJ3JlcG8nKSkge1xuICAgIHNldExpbmsocG9ydGZvbGlvW2J0bl0ucmVwbywgJ3JlcG8nKTtcbiAgfSBlbHNlIGhpZGVCdXR0b24oJ3JlcG8nKTtcblxuICBzaG93TW9kYWwoZSk7XG59XG5cbmJ0bk9wZW4uZm9yRWFjaCgoZSkgPT4gZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZpbGxNb2RhbCkpO1xuYnRuT3Blbi5mb3JFYWNoKChlKSA9PiBlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZmlsbE1vZGFsKSk7XG5jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xubW9kYWxXcmFwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG5cbi8vIFNISUZUIFNMSURFXG5cbmZ1bmN0aW9uIHNoaWZ0U2xpZGUoZGlyZWN0aW9uKSB7XG4gIGNvbnN0IHNsaWRlRmlyc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwgPiBkaXY6Zmlyc3QtY2hpbGQnKTtcbiAgY29uc3Qgc2xpZGVMYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsID4gZGl2Omxhc3QtY2hpbGQnKTtcblxuICBpZiAoY2Fyb3VzZWxEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCd0cmFuc2l0aW9uJykpIHJldHVybjtcblxuICBjYXJvdXNlbERpdi5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uJyk7XG4gIGNhcm91c2VsRGl2LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7ZGlyZWN0aW9uICogc2xpZGVXaWR0aH1weClgO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmIChkaXJlY3Rpb24gPT09IDEpIHtcbiAgICAgIHNsaWRlRmlyc3QucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2xpZGVMYXN0LCBzbGlkZUZpcnN0KTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gLTEpIHtcbiAgICAgIHNsaWRlTGFzdC5wYXJlbnROb2RlLmFwcGVuZChzbGlkZUZpcnN0KTtcbiAgICB9XG5cbiAgICBjYXJvdXNlbERpdi5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2l0aW9uJyk7XG4gICAgY2Fyb3VzZWxEaXYuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMHB4KSc7XG4gIH0sIDcwMCk7XG59XG5cbm5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNoaWZ0U2xpZGUoLTEpOyB9KTtcbnByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNoaWZ0U2xpZGUoMSk7IH0pO1xuIiwiLy8gVG8gc2F2ZSBpbWFnZXMgdXNlIHRoaXMgcGF0aDogJ2Fzc2V0cy9pbWFnZXMvcG9ydGZvbGlvLzxjbGllbnROYW1lT2JqZWN0Pi8nXG4vLyAwMC5qcGcgdG8gcG9ydGZvbGlvIHNjcmVlblxuLy8gMDEgdG8gJ2ltYWdlcycgbnVtYmVyIHRvIHVzZSBvbiBzbGlkZXJcblxuY29uc3QgcG9ydGZvbGlvID0ge1xuICAvLyBQb3J0Zm9saW8gY29udGVudFxuXG4gIHJpdmllcmFzOiB7XG4gICAgdGl0bGU6ICdSaXZpZXJhcyBIb3RlbCcsXG4gICAgdGFnczogJyNKYXZhU2NyaXB0ICNIVE1MNSAjQ1NTJyxcbiAgICB0ZXh0OlxuICAgICAgJ0Rlc2Vudm9sdmltZW50byBkbyBjw7NkaWdvIGRvIHNpdGUgZG8gbW90ZWwgUml2aWVyYXMgSG90ZWwuIExheW91dCBwb3IgS2luZyBQcm9wYWdhbmRhLicsXG4gICAgc2l0ZTogJ2h0dHA6Ly93d3cucml2aWVyYXNob3RlbC5jb20uYnInLFxuICAgIGltYWdlczogMyxcbiAgfSxcblxuICBqYWdyYW86IHtcbiAgICB0aXRsZTogJ0phZ3JhbyBCcmF6aWwnLFxuICAgIHRhZ3M6ICcjSmF2YVNjcmlwdCAjSFRNTDUgI0NTUyAjV29yZFByZXNzJyxcbiAgICB0ZXh0OiAnRGVzZW52b2x2aW1lbnRvIGRvIHNpdGUgYmlsaW5ndWUgcGFyYSBleHBvc2nDp8OjbyBkZSBwcm9kdXRvcyBkYSBleHBvcnRhZG9yYSBkZSBmcnV0YXMgSmFncsOjbyBCcmF6aWwuIExheW91dCBwb3IgU2VyZ2lvIExpbWEuJyxcbiAgICBzaXRlOiAnaHR0cDovL2phZ3Jhb2JyYXppbC5jb20nLFxuICAgIGltYWdlczogMyxcbiAgfSxcblxuICBqYWdyYW8yOiB7XG4gICAgdGl0bGU6ICdKYWdyYW8gQnJhemlsJyxcbiAgICB0YWdzOiAnI0phdmFTY3JpcHQgI0hUTUw1ICNDU1MgI1dvcmRQcmVzcycsXG4gICAgdGV4dDogJ1JlcGFnaW5hw6fDo28gZG8gc2l0ZSBkYSBlbXByZXNhIEphZ3JhbyBCcmF6aWwuIExheW91dCBwb3IgMzYwwrogQWfDqm5jaWEgQ3JpYXRpdmEuJyxcbiAgICBzaXRlOiAnaHR0cDovL2phZ3Jhb2JyYXppbC5jb20nLFxuICAgIGltYWdlczogNSxcbiAgfSxcblxuICBpdGF1bmE6IHtcbiAgICB0aXRsZTogJ0l0YcO6bmEgQWR2aXNvcnMnLFxuICAgIHRhZ3M6ICcjSmF2YVNjcmlwdCAjSFRNTDUgI0NTUyAjV2ViRGVzaWduJyxcbiAgICB0ZXh0OiAnU2l0ZSBpbnN0aXR1Y2lvbmFsIGRhIGVtcHJlc2EgSXRhw7puYSBBZHZpc29ycyBkbyBSSiBkZSBjb25zdHVsdG9yaWEgZmluYW5jZWlyYS4nLFxuICAgIHNpdGU6ICdodHRwczovL3d3dy5pdGF1bmFjb25zdWx0b3JpYS5jb20uYnIvJyxcbiAgICBpbWFnZXM6IDUsXG4gIH0sXG5cbiAgbWF1YWVjb256bzoge1xuICAgIHRpdGxlOiAnTWF1YSAmIENvbnpvJyxcbiAgICB0YWdzOiAnI0phdmFTY3JpcHQgI0hUTUw1ICNDU1MgI1dvcmRQcmVzcycsXG4gICAgdGV4dDpcbiAgICAgICdTaXRlIHBlbnNhZG8gZSBkZXNlbnZvbHZpZG8gY29tIG8gaW50dWl0byBkZSBjYXB0YcOnw6NvIGRlIG5vdm9zIGNsaWVudGVzIHBhcmEgYSBlbXByZXNhLiBQYXJhIGF0aW5naXIgbyByZXN1bHRhZG8gZGUgY2FwdGHDp8OjbyBkZSBjbGllbnRlcywgZml6ZW1vcyBkaXZlcnNhcyBsYW5kaW5nIHBhZ2VzIGRlbnRybyBkbyBzaXRlIHBhcmEgcXVlIGNhZGEgdW1hIHB1ZGVzc2Ugc2VyIGRpdnVsZ2FkYSBpbmRpdmlkdWFsbWVudGUganVudG8gYW8gYnVzY2Fkb3Jlcy4gTGF5b3V0IHBvciBKdW5pb3IgTWVuZGVzLicsXG4gICAgc2l0ZTogJ2h0dHBzOi8vd3d3Lm1hdWFlY29uem8uY29tLmJyLycsXG4gICAgaW1hZ2VzOiA1LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9ydGZvbGlvO1xuIiwiaW1wb3J0ICdhbmltYXRlLmNzcyc7XG5pbXBvcnQgJ3Jlc2V0LWNzcyc7XG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi4vaW1hZ2VzL2Rldi5wbmcnO1xuXG5pbXBvcnQgJ0BtZGkvZm9udC9jc3MvbWF0ZXJpYWxkZXNpZ25pY29ucy5taW4uY3NzJztcblxuLy8gZ3JvdXAgb2YgZnVuY3Rpb25zIHRvIHNldCBhIGdpdmVuIHRoZW1lL2NvbG9yLXNjaGVtZVxuKCgpID0+IHtcbiAgZnVuY3Rpb24gc2V0VGhlbWUodGhlbWVOYW1lKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgdGhlbWVOYW1lKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lID0gdGhlbWVOYW1lO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gdG9nZ2xlIGJldHdlZW4gbGlnaHQgYW5kIGRhcmsgdGhlbWVcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIGZ1bmN0aW9uIHRvZ2dsZVRoZW1lKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSA9PT0gJ3RoZW1lLWRhcmsnKSB7XG4gICAgICBzZXRUaGVtZSgnZGVmYXVsdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaGVtZSgnZGFyaycpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEltbWVkaWF0ZWx5IGludm9rZWQgZnVuY3Rpb24gdG8gc2V0IHRoZSB0aGVtZSBvbiBpbml0aWFsIGxvYWRcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpID09PSAndGhlbWUtZGFyaycpIHtcbiAgICBzZXRUaGVtZSgnZGFyaycpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXInKS5jaGVja2VkID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgc2V0VGhlbWUoJ2RlZmF1bHQnKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyJykuY2hlY2tlZCA9IHRydWU7XG4gIH1cbn0pKCk7XG5cbi8vIG1lbnUgYWN0aXZlIGxpbmtcblxuY29uc3QgbWVudWxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21haW5uYXYgYScpO1xuY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWN0aW9uJyk7XG5cbmZ1bmN0aW9uIGNoYW5nZU1lbnUoKSB7XG4gIHNlY3Rpb25zLmZvckVhY2goKGUpID0+IHtcbiAgICBjb25zdCB0b3AgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBjb25zdCBvZmZzZXQgPSBlLm9mZnNldFRvcDtcbiAgICBjb25zdCBpZCA9IGUuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGNvbnN0IGhlYWRlcmhlaWdodCA9IDUwO1xuXG4gICAgaWYgKHRvcCA+PSBvZmZzZXQgLSBoZWFkZXJoZWlnaHQpIHtcbiAgICAgIG1lbnVsaW5rcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgaWYgKGl0ZW0uZ2V0QXR0cmlidXRlKCdocmVmJykgPT09IGAjJHtpZH1gKSB7XG4gICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdGFydExvYWRlcigpIHtcbiAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xuICBsb2FkZXIuc3R5bGUucmlnaHQgPSAnMCc7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgbG9hZGVyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9LCA3NTApO1xuICB9KTtcbn1cbnN0YXJ0TG9hZGVyKCk7XG5cbi8vIGZ1bmN0aW9uIGNsaWNrQ2hhbmdlTWVudShlKSB7XG4vLyAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51bGlua3MubGVuZ3RoOyBpICs9IDEpIHtcbi8vICAgICBtZW51bGlua3NbaV0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbi8vICAgICBpZiAobWVudWxpbmtzW2ldID09PSBlLnRhcmdldCkge1xuLy8gICAgICAgbWVudWxpbmtzW2ldLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIG1lbnVsaW5rcy5mb3JFYWNoKChlKSA9PiBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tDaGFuZ2VNZW51KSk7XG5cbndpbmRvdy5vbnNjcm9sbCA9ICgpID0+IGNoYW5nZU1lbnUoKTtcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiBjaGFuZ2VNZW51KCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmwgKyBcIi4uLy4uL1wiOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMCxcblx0XCJ2ZW5kb3JzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3BvcnRmb2xpb1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwb3J0Zm9saW9cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyg5NTApKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oODIyKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9