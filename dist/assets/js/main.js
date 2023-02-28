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

/***/ 294:
/*!*****************************************!*\
  !*** ./src/assets/js/activeLinkMenu.js ***!
  \*****************************************/
/***/ (() => {

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

window.onscroll = () => changeMenu();
window.onload = () => changeMenu();


/***/ }),

/***/ 822:
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _portfolioObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolioObj */ 606);


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

function hideButton(type) {
  const linkButton = linksDiv.querySelector(`a.${type}`);
  linkButton.classList.remove('visible');
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
  slideDiv.style.background = `url('assets/images/portfolio/${client}/${value}.jpg') center center/cover`;
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// To save images use this path: 'assets/images/portfolio/<clientNameObject>/'
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
    images: 4,
  },

  itauna: {
    title: 'Itaúna Advisors',
    tags: '#JavaScript #HTML5 #CSS #WebDesign',
    text: 'Site institucional da empresa Itaúna Advisors do RJ de constultoria financeira.',
    site: 'https://www.itaunaconsultoria.com.br/',
    images: 3,
  },

  mauaeconzo: {
    title: 'Maua & Conzo',
    tags: '#JavaScript #HTML5 #CSS #WordPress',
    text:
      'Site pensado e desenvolvido com o intuito de captação de novos clientes para a empresa. Para atingir o resultado de captação de clientes, fizemos diversas landing pages dentro do site para que cada uma pudesse ser divulgada individualmente junto ao buscadores. Layout por Junior Mendes.',
    site: 'https://www.mauaeconzo.com.br/',
    images: 5,
  },

  iris: {
    title: 'Iris Laboratories',
    tags: '#HTML5 #CSS #WordPress #WP-Plugins',
    text:
      'Site desenvolvido para a empresa norte-americana especializada em inspeção e remoção de amianto e mofos dentro de imóveis.',
    site: 'http://www.irislaboratories.com/',
    images: 4,
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (portfolio);


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
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme */ 675);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_theme__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _activeLinkMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activeLinkMenu */ 294);
/* harmony import */ var _activeLinkMenu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_activeLinkMenu__WEBPACK_IMPORTED_MODULE_6__);










const body = document.querySelector('body');
body.classList.add('loading');

(function startLoader() {
  const loader = document.querySelector('.loader');
  loader.style.opacity = '0';
  window.addEventListener('load', () => {
    loader.addEventListener('transitionend', () => {
      loader.style.display = 'none';
      body.classList.remove('loading');
      body.classList.add('loaded');
    });
  });
}());


/***/ }),

/***/ 675:
/*!********************************!*\
  !*** ./src/assets/js/theme.js ***!
  \********************************/
/***/ (() => {

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

  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('dark');
    document.getElementById('slider').checked = false;
  } else {
    setTheme('default');
    document.getElementById('slider').checked = true;
  }
})();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVqREE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL0BtZGkvZm9udC9jc3MvbWF0ZXJpYWxkZXNpZ25pY29ucy5taW4uY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmNzcy9hbmltYXRlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvcmVzZXQtY3NzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3NldHMvanMvYWN0aXZlTGlua01lbnUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9qcy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL3BvcnRmb2xpb09iai5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL3RoZW1lLmpzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBtZW51bGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbWFpbm5hdiBhJyk7XHJcbmNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VjdGlvbicpO1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlTWVudSgpIHtcclxuICBzZWN0aW9ucy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICBjb25zdCB0b3AgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgIGNvbnN0IG9mZnNldCA9IGUub2Zmc2V0VG9wO1xyXG4gICAgY29uc3QgaWQgPSBlLmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgIGNvbnN0IGhlYWRlcmhlaWdodCA9IDUwO1xyXG5cclxuICAgIGlmICh0b3AgPj0gb2Zmc2V0IC0gaGVhZGVyaGVpZ2h0KSB7XHJcbiAgICAgIG1lbnVsaW5rcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnaHJlZicpID09PSBgIyR7aWR9YCkge1xyXG4gICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbndpbmRvdy5vbnNjcm9sbCA9ICgpID0+IGNoYW5nZU1lbnUoKTtcclxud2luZG93Lm9ubG9hZCA9ICgpID0+IGNoYW5nZU1lbnUoKTtcclxuIiwiaW1wb3J0IHBvcnRmb2xpbyBmcm9tICcuL3BvcnRmb2xpb09iaic7XHJcblxyXG5jb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCAuY2xvc2UnKTtcclxuY29uc3QgbW9kYWxXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXAnKTtcclxuY29uc3QgYnRuT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXNjcmlwdGlvbiAuYnRuJyk7XHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJyk7XHJcbmNvbnN0IGNhcm91c2VsRGl2ID0gbW9kYWwucXVlcnlTZWxlY3RvcignLmNhcm91c2VsJyk7XHJcbmNvbnN0IG5leHQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdpLnJpZ2h0Jyk7XHJcbmNvbnN0IHByZXYgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdpLmxlZnQnKTtcclxuY29uc3QgaGVhZGxpbmUgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuaW5mb3MgaDMnKTtcclxuY29uc3QgdGFncyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5pbmZvcyBoNicpO1xyXG5jb25zdCB0ZXh0ID0gbW9kYWwucXVlcnlTZWxlY3RvcignLmluZm9zIHAnKTtcclxuY29uc3QgbGlua3NEaXYgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdkaXYubGlua3MnKTtcclxuXHJcbmNvbnN0IHNsaWRlV2lkdGggPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG1vZGFsKS53aWR0aCk7XHJcblxyXG4vLyBBREpVU1QgU0laRSBGT1IgTU9CSUxFXHJcblxyXG5mdW5jdGlvbiBzZXRXaWR0aChzbGlkZSwgbnVtKSB7XHJcbiAgaWYgKFxyXG4gICAgL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaVxyXG4gICAgICAudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KVxyXG4gICkge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICBzbGlkZS5zdHlsZS53aWR0aCA9IGAke3NsaWRlV2lkdGh9cHhgO1xyXG4gICAgY2Fyb3VzZWxEaXYuc3R5bGUubGVmdCA9IGAtJHtzbGlkZVdpZHRofXB4YDtcclxuICB9XHJcbiAgY2Fyb3VzZWxEaXYuc3R5bGUud2lkdGggPSBgJHtzbGlkZVdpZHRoICogbnVtfXB4YDtcclxufVxyXG5cclxuLy8gQ0xFQVIgU0xJREVTXHJcbmZ1bmN0aW9uIGNsZWFyU2xpZGVzKCkge1xyXG4gIGNvbnN0IHNsaWRlcyA9IGNhcm91c2VsRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xyXG4gIHNsaWRlcy5mb3JFYWNoKChlKSA9PiBlLnJlbW92ZSgpKTtcclxufVxyXG5cclxuLy8gT1BFTi9DTE9TRSBQT1JURk9MSU9cclxuXHJcbmZ1bmN0aW9uIHNob3dNb2RhbCgpIHtcclxuICBtb2RhbFdyYXAuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZU1vZGFsKGUpIHtcclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbG9zZScpKSB7XHJcbiAgICBtb2RhbFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgY2xlYXJTbGlkZXMoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVCdXR0b24odHlwZSkge1xyXG4gIGNvbnN0IGxpbmtCdXR0b24gPSBsaW5rc0Rpdi5xdWVyeVNlbGVjdG9yKGBhLiR7dHlwZX1gKTtcclxuICBsaW5rQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxufVxyXG5cclxuLy8gRklMTCBNT0RBTFxyXG5cclxuLy8gY3JlYXRlIGltYWdlIHNsaWRlXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVJbWFnZVNsaWRlKGNsaWVudCwgaW1hZ2UpIHtcclxuICBjb25zdCBzbGlkZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHZhbHVlID0gaW1hZ2UudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge1xyXG4gICAgbWluaW11bUludGVnZXJEaWdpdHM6IDIsXHJcbiAgICB1c2VHcm91cGluZzogZmFsc2UsXHJcbiAgfSk7XHJcbiAgc2V0V2lkdGgoc2xpZGVEaXYsIHBvcnRmb2xpb1tjbGllbnRdLmltYWdlcyk7XHJcbiAgc2xpZGVEaXYuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJ2Fzc2V0cy9pbWFnZXMvcG9ydGZvbGlvLyR7Y2xpZW50fS8ke3ZhbHVlfS5qcGcnKSBjZW50ZXIgY2VudGVyL2NvdmVyYDtcclxuICBjYXJvdXNlbERpdi5hcHBlbmRDaGlsZChzbGlkZURpdik7XHJcbn1cclxuXHJcbi8vIHNlbGVjdCBpbWFnZSBzbGlkZVxyXG5cclxuZnVuY3Rpb24gc2VsZWN0QmdJbWFnZShjbGllbnQpIHtcclxuICBjb25zdCBtYXhJbWFnZVBvcnRmb2xpbyA9IHBvcnRmb2xpb1tjbGllbnRdLmltYWdlcztcclxuXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbWF4SW1hZ2VQb3J0Zm9saW87IGkgKz0gMSkge1xyXG4gICAgY3JlYXRlSW1hZ2VTbGlkZShjbGllbnQsIGkpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gaW5mb3NcclxuXHJcbmZ1bmN0aW9uIHNldExpbmsobGluaywgdHlwZSkge1xyXG4gIGNvbnN0IGxpbmtCdXR0b24gPSBsaW5rc0Rpdi5xdWVyeVNlbGVjdG9yKGBhLiR7dHlwZX1gKTtcclxuXHJcbiAgbGlua0J1dHRvbi5ocmVmID0gbGluaztcclxuICBsaW5rQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxufVxyXG5mdW5jdGlvbiBmaWxsTW9kYWwoZSkge1xyXG4gIGNvbnN0IGJ0biA9IGUudGFyZ2V0LmRhdGFzZXQuY2xpZW50O1xyXG4gIHNlbGVjdEJnSW1hZ2UoYnRuKTtcclxuICBoZWFkbGluZS50ZXh0Q29udGVudCA9IHBvcnRmb2xpb1tidG5dLnRpdGxlO1xyXG4gIHRhZ3MudGV4dENvbnRlbnQgPSBwb3J0Zm9saW9bYnRuXS50YWdzO1xyXG4gIHRleHQudGV4dENvbnRlbnQgPSBwb3J0Zm9saW9bYnRuXS50ZXh0O1xyXG5cclxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBvcnRmb2xpb1tidG5dLCAnc2l0ZScpKSB7XHJcbiAgICBzZXRMaW5rKHBvcnRmb2xpb1tidG5dLnNpdGUsICdzaXRlJyk7XHJcbiAgfSBlbHNlIGhpZGVCdXR0b24oJ3NpdGUnKTtcclxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBvcnRmb2xpb1tidG5dLCAncmVwbycpKSB7XHJcbiAgICBzZXRMaW5rKHBvcnRmb2xpb1tidG5dLnJlcG8sICdyZXBvJyk7XHJcbiAgfSBlbHNlIGhpZGVCdXR0b24oJ3JlcG8nKTtcclxuXHJcbiAgc2hvd01vZGFsKGUpO1xyXG59XHJcblxyXG5idG5PcGVuLmZvckVhY2goKGUpID0+IGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmaWxsTW9kYWwpKTtcclxuYnRuT3Blbi5mb3JFYWNoKChlKSA9PiBlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZmlsbE1vZGFsKSk7XHJcbmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XHJcbm1vZGFsV3JhcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xyXG5cclxuLy8gU0hJRlQgU0xJREVcclxuXHJcbmZ1bmN0aW9uIHNoaWZ0U2xpZGUoZGlyZWN0aW9uKSB7XHJcbiAgY29uc3Qgc2xpZGVGaXJzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbCA+IGRpdjpmaXJzdC1jaGlsZCcpO1xyXG4gIGNvbnN0IHNsaWRlTGFzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbCA+IGRpdjpsYXN0LWNoaWxkJyk7XHJcblxyXG4gIGlmIChjYXJvdXNlbERpdi5jbGFzc0xpc3QuY29udGFpbnMoJ3RyYW5zaXRpb24nKSkgcmV0dXJuO1xyXG5cclxuICBjYXJvdXNlbERpdi5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uJyk7XHJcbiAgY2Fyb3VzZWxEaXYuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtkaXJlY3Rpb24gKiBzbGlkZVdpZHRofXB4KWA7XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gMSkge1xyXG4gICAgICBzbGlkZUZpcnN0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNsaWRlTGFzdCwgc2xpZGVGaXJzdCk7XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgc2xpZGVMYXN0LnBhcmVudE5vZGUuYXBwZW5kKHNsaWRlRmlyc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcm91c2VsRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zaXRpb24nKTtcclxuICAgIGNhcm91c2VsRGl2LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDBweCknO1xyXG4gIH0sIDcwMCk7XHJcbn1cclxuXHJcbm5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNoaWZ0U2xpZGUoLTEpOyB9KTtcclxucHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc2hpZnRTbGlkZSgxKTsgfSk7XHJcbiIsIi8vIFRvIHNhdmUgaW1hZ2VzIHVzZSB0aGlzIHBhdGg6ICdhc3NldHMvaW1hZ2VzL3BvcnRmb2xpby88Y2xpZW50TmFtZU9iamVjdD4vJ1xuLy8gMDEgdG8gJ2ltYWdlcycgbnVtYmVyIHRvIHVzZSBvbiBzbGlkZXJcblxuY29uc3QgcG9ydGZvbGlvID0ge1xuICAvLyBQb3J0Zm9saW8gY29udGVudFxuICByaXZpZXJhczoge1xuICAgIHRpdGxlOiAnUml2aWVyYXMgSG90ZWwnLFxuICAgIHRhZ3M6ICcjSmF2YVNjcmlwdCAjSFRNTDUgI0NTUycsXG4gICAgdGV4dDpcbiAgICAgICdEZXNlbnZvbHZpbWVudG8gZG8gY8OzZGlnbyBkbyBzaXRlIGRvIG1vdGVsIFJpdmllcmFzIEhvdGVsLiBMYXlvdXQgcG9yIEtpbmcgUHJvcGFnYW5kYS4nLFxuICAgIHNpdGU6ICdodHRwOi8vd3d3LnJpdmllcmFzaG90ZWwuY29tLmJyJyxcbiAgICBpbWFnZXM6IDMsXG4gIH0sXG5cbiAgamFncmFvOiB7XG4gICAgdGl0bGU6ICdKYWdyYW8gQnJhemlsJyxcbiAgICB0YWdzOiAnI0phdmFTY3JpcHQgI0hUTUw1ICNDU1MgI1dvcmRQcmVzcycsXG4gICAgdGV4dDogJ0Rlc2Vudm9sdmltZW50byBkbyBzaXRlIGJpbGluZ3VlIHBhcmEgZXhwb3Npw6fDo28gZGUgcHJvZHV0b3MgZGEgZXhwb3J0YWRvcmEgZGUgZnJ1dGFzIEphZ3LDo28gQnJhemlsLiBMYXlvdXQgcG9yIFNlcmdpbyBMaW1hLicsXG4gICAgc2l0ZTogJ2h0dHA6Ly9qYWdyYW9icmF6aWwuY29tJyxcbiAgICBpbWFnZXM6IDMsXG4gIH0sXG5cbiAgamFncmFvMjoge1xuICAgIHRpdGxlOiAnSmFncmFvIEJyYXppbCcsXG4gICAgdGFnczogJyNKYXZhU2NyaXB0ICNIVE1MNSAjQ1NTICNXb3JkUHJlc3MnLFxuICAgIHRleHQ6ICdSZXBhZ2luYcOnw6NvIGRvIHNpdGUgZGEgZW1wcmVzYSBKYWdyYW8gQnJhemlsLiBMYXlvdXQgcG9yIDM2MMK6IEFnw6puY2lhIENyaWF0aXZhLicsXG4gICAgc2l0ZTogJ2h0dHA6Ly9qYWdyYW9icmF6aWwuY29tJyxcbiAgICBpbWFnZXM6IDQsXG4gIH0sXG5cbiAgaXRhdW5hOiB7XG4gICAgdGl0bGU6ICdJdGHDum5hIEFkdmlzb3JzJyxcbiAgICB0YWdzOiAnI0phdmFTY3JpcHQgI0hUTUw1ICNDU1MgI1dlYkRlc2lnbicsXG4gICAgdGV4dDogJ1NpdGUgaW5zdGl0dWNpb25hbCBkYSBlbXByZXNhIEl0YcO6bmEgQWR2aXNvcnMgZG8gUkogZGUgY29uc3R1bHRvcmlhIGZpbmFuY2VpcmEuJyxcbiAgICBzaXRlOiAnaHR0cHM6Ly93d3cuaXRhdW5hY29uc3VsdG9yaWEuY29tLmJyLycsXG4gICAgaW1hZ2VzOiAzLFxuICB9LFxuXG4gIG1hdWFlY29uem86IHtcbiAgICB0aXRsZTogJ01hdWEgJiBDb256bycsXG4gICAgdGFnczogJyNKYXZhU2NyaXB0ICNIVE1MNSAjQ1NTICNXb3JkUHJlc3MnLFxuICAgIHRleHQ6XG4gICAgICAnU2l0ZSBwZW5zYWRvIGUgZGVzZW52b2x2aWRvIGNvbSBvIGludHVpdG8gZGUgY2FwdGHDp8OjbyBkZSBub3ZvcyBjbGllbnRlcyBwYXJhIGEgZW1wcmVzYS4gUGFyYSBhdGluZ2lyIG8gcmVzdWx0YWRvIGRlIGNhcHRhw6fDo28gZGUgY2xpZW50ZXMsIGZpemVtb3MgZGl2ZXJzYXMgbGFuZGluZyBwYWdlcyBkZW50cm8gZG8gc2l0ZSBwYXJhIHF1ZSBjYWRhIHVtYSBwdWRlc3NlIHNlciBkaXZ1bGdhZGEgaW5kaXZpZHVhbG1lbnRlIGp1bnRvIGFvIGJ1c2NhZG9yZXMuIExheW91dCBwb3IgSnVuaW9yIE1lbmRlcy4nLFxuICAgIHNpdGU6ICdodHRwczovL3d3dy5tYXVhZWNvbnpvLmNvbS5ici8nLFxuICAgIGltYWdlczogNSxcbiAgfSxcblxuICBpcmlzOiB7XG4gICAgdGl0bGU6ICdJcmlzIExhYm9yYXRvcmllcycsXG4gICAgdGFnczogJyNIVE1MNSAjQ1NTICNXb3JkUHJlc3MgI1dQLVBsdWdpbnMnLFxuICAgIHRleHQ6XG4gICAgICAnU2l0ZSBkZXNlbnZvbHZpZG8gcGFyYSBhIGVtcHJlc2Egbm9ydGUtYW1lcmljYW5hIGVzcGVjaWFsaXphZGEgZW0gaW5zcGXDp8OjbyBlIHJlbW/Dp8OjbyBkZSBhbWlhbnRvIGUgbW9mb3MgZGVudHJvIGRlIGltw7N2ZWlzLicsXG4gICAgc2l0ZTogJ2h0dHA6Ly93d3cuaXJpc2xhYm9yYXRvcmllcy5jb20vJyxcbiAgICBpbWFnZXM6IDQsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3J0Zm9saW87XG4iLCJpbXBvcnQgJ2FuaW1hdGUuY3NzJztcclxuaW1wb3J0ICdyZXNldC1jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5zY3NzJztcclxuaW1wb3J0ICcuLi9pbWFnZXMvZGV2LnBuZyc7XHJcblxyXG5pbXBvcnQgJ0BtZGkvZm9udC9jc3MvbWF0ZXJpYWxkZXNpZ25pY29ucy5taW4uY3NzJztcclxuXHJcbmltcG9ydCAnLi90aGVtZSc7XHJcbmltcG9ydCAnLi9hY3RpdmVMaW5rTWVudSc7XHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKTtcclxuXHJcbihmdW5jdGlvbiBzdGFydExvYWRlcigpIHtcclxuICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XHJcbiAgbG9hZGVyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICBsb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcclxuICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0oKSk7XHJcbiIsIigoKSA9PiB7XHJcbiAgZnVuY3Rpb24gc2V0VGhlbWUodGhlbWVOYW1lKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCB0aGVtZU5hbWUpO1xyXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZSA9IHRoZW1lTmFtZTtcclxuICB9XHJcblxyXG4gIC8vIGZ1bmN0aW9uIHRvIHRvZ2dsZSBiZXR3ZWVuIGxpZ2h0IGFuZCBkYXJrIHRoZW1lXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbiAgZnVuY3Rpb24gdG9nZ2xlVGhlbWUoKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgPT09ICd0aGVtZS1kYXJrJykge1xyXG4gICAgICBzZXRUaGVtZSgnZGVmYXVsdCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGhlbWUoJ2RhcmsnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSA9PT0gJ3RoZW1lLWRhcmsnKSB7XHJcbiAgICBzZXRUaGVtZSgnZGFyaycpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlcicpLmNoZWNrZWQgPSBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgc2V0VGhlbWUoJ2RlZmF1bHQnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXInKS5jaGVja2VkID0gdHJ1ZTtcclxuICB9XHJcbn0pKCk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi8uLi9cIjsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDAsXG5cdFwidmVuZG9yc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwb3J0Zm9saW9cIl0gPSBzZWxmW1wid2VicGFja0NodW5rcG9ydGZvbGlvXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oOTUwKSkpXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKDgyMikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==