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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "modal": () => (/* binding */ modal),
/* harmony export */   "modalWrap": () => (/* binding */ modalWrap),
/* harmony export */   "showModal": () => (/* binding */ showModal)
/* harmony export */ });
const modalWrap = document.querySelector('.modal-wrap');
const modal = document.querySelector('#modal');

// open modal
function showModal() {
  modalWrap.classList.add('visible');
}

// clear modal
function closeModal() {
  while (modal.firstChild) {
    modal.removeChild(modal.lastChild);
  }
}


/***/ }),

/***/ 707:
/*!*****************************************!*\
  !*** ./src/assets/js/portfolioModal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _portfolioObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolioObj */ 606);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ 822);



const slideWidth = parseFloat(window.getComputedStyle(_modal__WEBPACK_IMPORTED_MODULE_1__.modal).width);
const btnPortfolioOpen = document.querySelectorAll('#portfolio .description .btn');

// creating carousel elements
const windows = document.createElement('div');
const carousel = document.createElement('div');
const arrowLeft = document.createElement('i');
const arrowRight = document.createElement('i');

// creating info elements
const infos = document.createElement('div');
const closeBtn = document.createElement('i');
const box = document.createElement('div');
const h3 = document.createElement('h3');
const h6 = document.createElement('h6');
const para = document.createElement('p');
const links = document.createElement('div');
const site = document.createElement('a');
const repo = document.createElement('a');

// SHIFT SLIDE
function shiftSlide(direction) {
  const slideFirst = document.querySelector('.carousel > div:first-child');
  const slideLast = document.querySelector('.carousel > div:last-child');

  if (carousel.classList.contains('transition')) return;

  carousel.classList.add('transition');
  carousel.style.transform = `translateX(${direction * slideWidth}px)`;

  setTimeout(() => {
    if (direction === 1) {
      slideFirst.parentNode.insertBefore(slideLast, slideFirst);
    } else if (direction === -1) {
      slideLast.parentNode.append(slideFirst);
    }

    carousel.classList.remove('transition');
    carousel.style.transform = 'translateX(0px)';
  }, 700);
}

// SIDE FUNCTIONS

// clear Carousel and close Modal
function cleanContent() {
  while (carousel.lastElementChild) {
    carousel.removeChild(carousel.lastChild);
  }
  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)();
  _modal__WEBPACK_IMPORTED_MODULE_1__.modalWrap.removeEventListener('transitionend', cleanContent);
}

function clearCarousel(e) {
  if (e.target.classList.contains('close')) {
    _modal__WEBPACK_IMPORTED_MODULE_1__.modalWrap.addEventListener('transitionend', cleanContent);
    _modal__WEBPACK_IMPORTED_MODULE_1__.modalWrap.classList.remove('visible');
  }
}

// adjuse size for mobile
function setWidth(slide, num) {
  const elemSlide = slide;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      .test(navigator.userAgent)
  ) {
    elemSlide.style.width = `${slideWidth}px`;
    carousel.style.left = `-${slideWidth}px`;
  }
  carousel.style.width = `${slideWidth * num}px`;
}

function hideButton(type) {
  const linkButton = links.querySelector(`a.${type}`);
  linkButton.classList.remove('visible');
}

// CREATING MODAL DOM
function createPortfolioModal() {
  // ordering Carousel images

  windows.classList.add('window');
  carousel.classList.add('carousel');
  arrowLeft.classList.add('left', 'mdi', 'mdi-chevron-left-box');
  arrowRight.classList.add('right', 'mdi', 'mdi-chevron-right-box');

  arrowRight.addEventListener('click', () => { shiftSlide(-1); });
  arrowLeft.addEventListener('click', () => { shiftSlide(1); });

  windows.appendChild(carousel);
  windows.appendChild(arrowLeft);
  windows.appendChild(arrowRight);

  // odering infos
  infos.classList.add('infos');
  closeBtn.classList.add('close', 'mdi', 'mdi-close');
  box.classList.add('box');
  links.classList.add('links', 'flex');

  site.classList.add('btn', 'site');
  repo.classList.add('btn', 'repo');

  site.textContent = 'Site';
  repo.textContent = 'Repositório';

  closeBtn.addEventListener('click', clearCarousel);
  site.setAttribute('target', '_blank');
  repo.setAttribute('target', '_blank');

  box.appendChild(h3);
  box.appendChild(h6);
  box.appendChild(para);
  box.appendChild(links);

  links.appendChild(site);
  links.appendChild(repo);

  infos.appendChild(closeBtn);
  infos.appendChild(box);

  _modal__WEBPACK_IMPORTED_MODULE_1__.modal.appendChild(windows);
  _modal__WEBPACK_IMPORTED_MODULE_1__.modal.appendChild(infos);
}

// FILL MODAL

// create image slide
function createImageSlide(client, image) {
  const folder = `assets/images/portfolio/${client}`;
  const slideDiv = document.createElement('div');
  const value = image.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  setWidth(slideDiv, _portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"][client].images);
  slideDiv.style.background = `url('${folder}/${value}.jpg') center center/cover`;
  carousel.appendChild(slideDiv);
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
  const linkButton = links.querySelector(`a.${type}`);

  linkButton.href = link;
  linkButton.classList.add('visible');
}

function fillModal(e) {
  const btn = e.target.dataset.client;

  selectBgImage(btn);

  h6.textContent = _portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"][btn].title;
  h3.textContent = _portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"][btn].tags;
  para.textContent = _portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"][btn].text;

  if (Object.prototype.hasOwnProperty.call(_portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"][btn], 'site')) {
    setLink(_portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"][btn].site, 'site');
  } else hideButton('site');
  if (Object.prototype.hasOwnProperty.call(_portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"][btn], 'repo')) {
    setLink(_portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"][btn].repo, 'repo');
  } else hideButton('repo');

  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.showModal)(e);
}

function createPortfolioElements(e) {
  createPortfolioModal();
  fillModal(e);
}

_modal__WEBPACK_IMPORTED_MODULE_1__.modalWrap.addEventListener('click', clearCarousel);
btnPortfolioOpen.forEach((e) => e.addEventListener('click', createPortfolioElements));
btnPortfolioOpen.forEach((e) => e.addEventListener('touchend', createPortfolioElements));


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

  jagrao1: {
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
    images: 3,
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
const loader = document.querySelector('.loader');
body.classList.add('loading');

document.addEventListener('DOMContentLoaded', () => {
  loader.style.opacity = '0';
  loader.addEventListener('transitionend', () => {
    loader.style.display = 'none';
    body.classList.remove('loading');
    body.classList.add('loaded');
  });
});


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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__(707)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9AbWRpL2ZvbnQvY3NzL21hdGVyaWFsZGVzaWduaWNvbnMubWluLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5jc3MvYW5pbWF0ZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3Jlc2V0LWNzcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL2FjdGl2ZUxpbmtNZW51LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3NldHMvanMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9qcy9wb3J0Zm9saW9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL3BvcnRmb2xpb09iai5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL3RoZW1lLmpzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBtZW51bGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbWFpbm5hdiBhJyk7XHJcbmNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VjdGlvbicpO1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlTWVudSgpIHtcclxuICBzZWN0aW9ucy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICBjb25zdCB0b3AgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgIGNvbnN0IG9mZnNldCA9IGUub2Zmc2V0VG9wO1xyXG4gICAgY29uc3QgaWQgPSBlLmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgIGNvbnN0IGhlYWRlcmhlaWdodCA9IDUwO1xyXG5cclxuICAgIGlmICh0b3AgPj0gb2Zmc2V0IC0gaGVhZGVyaGVpZ2h0KSB7XHJcbiAgICAgIG1lbnVsaW5rcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnaHJlZicpID09PSBgIyR7aWR9YCkge1xyXG4gICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbndpbmRvdy5vbnNjcm9sbCA9ICgpID0+IGNoYW5nZU1lbnUoKTtcclxud2luZG93Lm9ubG9hZCA9ICgpID0+IGNoYW5nZU1lbnUoKTtcclxuIiwiZXhwb3J0IGNvbnN0IG1vZGFsV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13cmFwJyk7XG5leHBvcnQgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKTtcblxuLy8gb3BlbiBtb2RhbFxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNb2RhbCgpIHtcbiAgbW9kYWxXcmFwLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbn1cblxuLy8gY2xlYXIgbW9kYWxcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICB3aGlsZSAobW9kYWwuZmlyc3RDaGlsZCkge1xuICAgIG1vZGFsLnJlbW92ZUNoaWxkKG1vZGFsLmxhc3RDaGlsZCk7XG4gIH1cbn1cbiIsImltcG9ydCBwb3J0Zm9saW8gZnJvbSAnLi9wb3J0Zm9saW9PYmonO1xuaW1wb3J0IHtcbiAgbW9kYWwsIHNob3dNb2RhbCwgY2xvc2VNb2RhbCwgbW9kYWxXcmFwLFxufSBmcm9tICcuL21vZGFsJztcblxuY29uc3Qgc2xpZGVXaWR0aCA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUobW9kYWwpLndpZHRoKTtcbmNvbnN0IGJ0blBvcnRmb2xpb09wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcG9ydGZvbGlvIC5kZXNjcmlwdGlvbiAuYnRuJyk7XG5cbi8vIGNyZWF0aW5nIGNhcm91c2VsIGVsZW1lbnRzXG5jb25zdCB3aW5kb3dzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgYXJyb3dMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuY29uc3QgYXJyb3dSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcblxuLy8gY3JlYXRpbmcgaW5mbyBlbGVtZW50c1xuY29uc3QgaW5mb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5jb25zdCBoNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2Jyk7XG5jb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuY29uc3QgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHNpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5jb25zdCByZXBvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4vLyBTSElGVCBTTElERVxuZnVuY3Rpb24gc2hpZnRTbGlkZShkaXJlY3Rpb24pIHtcbiAgY29uc3Qgc2xpZGVGaXJzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbCA+IGRpdjpmaXJzdC1jaGlsZCcpO1xuICBjb25zdCBzbGlkZUxhc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwgPiBkaXY6bGFzdC1jaGlsZCcpO1xuXG4gIGlmIChjYXJvdXNlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3RyYW5zaXRpb24nKSkgcmV0dXJuO1xuXG4gIGNhcm91c2VsLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24nKTtcbiAgY2Fyb3VzZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtkaXJlY3Rpb24gKiBzbGlkZVdpZHRofXB4KWA7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgc2xpZGVGaXJzdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzbGlkZUxhc3QsIHNsaWRlRmlyc3QpO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAtMSkge1xuICAgICAgc2xpZGVMYXN0LnBhcmVudE5vZGUuYXBwZW5kKHNsaWRlRmlyc3QpO1xuICAgIH1cblxuICAgIGNhcm91c2VsLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zaXRpb24nKTtcbiAgICBjYXJvdXNlbC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwcHgpJztcbiAgfSwgNzAwKTtcbn1cblxuLy8gU0lERSBGVU5DVElPTlNcblxuLy8gY2xlYXIgQ2Fyb3VzZWwgYW5kIGNsb3NlIE1vZGFsXG5mdW5jdGlvbiBjbGVhbkNvbnRlbnQoKSB7XG4gIHdoaWxlIChjYXJvdXNlbC5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgY2Fyb3VzZWwucmVtb3ZlQ2hpbGQoY2Fyb3VzZWwubGFzdENoaWxkKTtcbiAgfVxuICBjbG9zZU1vZGFsKCk7XG4gIG1vZGFsV3JhcC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgY2xlYW5Db250ZW50KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDYXJvdXNlbChlKSB7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlJykpIHtcbiAgICBtb2RhbFdyYXAuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGNsZWFuQ29udGVudCk7XG4gICAgbW9kYWxXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgfVxufVxuXG4vLyBhZGp1c2Ugc2l6ZSBmb3IgbW9iaWxlXG5mdW5jdGlvbiBzZXRXaWR0aChzbGlkZSwgbnVtKSB7XG4gIGNvbnN0IGVsZW1TbGlkZSA9IHNsaWRlO1xuICBpZiAoXG4gICAgL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaVxuICAgICAgLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudClcbiAgKSB7XG4gICAgZWxlbVNsaWRlLnN0eWxlLndpZHRoID0gYCR7c2xpZGVXaWR0aH1weGA7XG4gICAgY2Fyb3VzZWwuc3R5bGUubGVmdCA9IGAtJHtzbGlkZVdpZHRofXB4YDtcbiAgfVxuICBjYXJvdXNlbC5zdHlsZS53aWR0aCA9IGAke3NsaWRlV2lkdGggKiBudW19cHhgO1xufVxuXG5mdW5jdGlvbiBoaWRlQnV0dG9uKHR5cGUpIHtcbiAgY29uc3QgbGlua0J1dHRvbiA9IGxpbmtzLnF1ZXJ5U2VsZWN0b3IoYGEuJHt0eXBlfWApO1xuICBsaW5rQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbn1cblxuLy8gQ1JFQVRJTkcgTU9EQUwgRE9NXG5mdW5jdGlvbiBjcmVhdGVQb3J0Zm9saW9Nb2RhbCgpIHtcbiAgLy8gb3JkZXJpbmcgQ2Fyb3VzZWwgaW1hZ2VzXG5cbiAgd2luZG93cy5jbGFzc0xpc3QuYWRkKCd3aW5kb3cnKTtcbiAgY2Fyb3VzZWwuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWwnKTtcbiAgYXJyb3dMZWZ0LmNsYXNzTGlzdC5hZGQoJ2xlZnQnLCAnbWRpJywgJ21kaS1jaGV2cm9uLWxlZnQtYm94Jyk7XG4gIGFycm93UmlnaHQuY2xhc3NMaXN0LmFkZCgncmlnaHQnLCAnbWRpJywgJ21kaS1jaGV2cm9uLXJpZ2h0LWJveCcpO1xuXG4gIGFycm93UmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNoaWZ0U2xpZGUoLTEpOyB9KTtcbiAgYXJyb3dMZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBzaGlmdFNsaWRlKDEpOyB9KTtcblxuICB3aW5kb3dzLmFwcGVuZENoaWxkKGNhcm91c2VsKTtcbiAgd2luZG93cy5hcHBlbmRDaGlsZChhcnJvd0xlZnQpO1xuICB3aW5kb3dzLmFwcGVuZENoaWxkKGFycm93UmlnaHQpO1xuXG4gIC8vIG9kZXJpbmcgaW5mb3NcbiAgaW5mb3MuY2xhc3NMaXN0LmFkZCgnaW5mb3MnKTtcbiAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnY2xvc2UnLCAnbWRpJywgJ21kaS1jbG9zZScpO1xuICBib3guY2xhc3NMaXN0LmFkZCgnYm94Jyk7XG4gIGxpbmtzLmNsYXNzTGlzdC5hZGQoJ2xpbmtzJywgJ2ZsZXgnKTtcblxuICBzaXRlLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdzaXRlJyk7XG4gIHJlcG8uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ3JlcG8nKTtcblxuICBzaXRlLnRleHRDb250ZW50ID0gJ1NpdGUnO1xuICByZXBvLnRleHRDb250ZW50ID0gJ1JlcG9zaXTDs3Jpbyc7XG5cbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhckNhcm91c2VsKTtcbiAgc2l0ZS5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgcmVwby5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcblxuICBib3guYXBwZW5kQ2hpbGQoaDMpO1xuICBib3guYXBwZW5kQ2hpbGQoaDYpO1xuICBib3guYXBwZW5kQ2hpbGQocGFyYSk7XG4gIGJveC5hcHBlbmRDaGlsZChsaW5rcyk7XG5cbiAgbGlua3MuYXBwZW5kQ2hpbGQoc2l0ZSk7XG4gIGxpbmtzLmFwcGVuZENoaWxkKHJlcG8pO1xuXG4gIGluZm9zLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgaW5mb3MuYXBwZW5kQ2hpbGQoYm94KTtcblxuICBtb2RhbC5hcHBlbmRDaGlsZCh3aW5kb3dzKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoaW5mb3MpO1xufVxuXG4vLyBGSUxMIE1PREFMXG5cbi8vIGNyZWF0ZSBpbWFnZSBzbGlkZVxuZnVuY3Rpb24gY3JlYXRlSW1hZ2VTbGlkZShjbGllbnQsIGltYWdlKSB7XG4gIGNvbnN0IGZvbGRlciA9IGBhc3NldHMvaW1hZ2VzL3BvcnRmb2xpby8ke2NsaWVudH1gO1xuICBjb25zdCBzbGlkZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB2YWx1ZSA9IGltYWdlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcbiAgICBtaW5pbXVtSW50ZWdlckRpZ2l0czogMixcbiAgICB1c2VHcm91cGluZzogZmFsc2UsXG4gIH0pO1xuXG4gIHNldFdpZHRoKHNsaWRlRGl2LCBwb3J0Zm9saW9bY2xpZW50XS5pbWFnZXMpO1xuICBzbGlkZURpdi5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgnJHtmb2xkZXJ9LyR7dmFsdWV9LmpwZycpIGNlbnRlciBjZW50ZXIvY292ZXJgO1xuICBjYXJvdXNlbC5hcHBlbmRDaGlsZChzbGlkZURpdik7XG59XG5cbi8vIHNlbGVjdCBpbWFnZSBzbGlkZVxuXG5mdW5jdGlvbiBzZWxlY3RCZ0ltYWdlKGNsaWVudCkge1xuICBjb25zdCBtYXhJbWFnZVBvcnRmb2xpbyA9IHBvcnRmb2xpb1tjbGllbnRdLmltYWdlcztcblxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBtYXhJbWFnZVBvcnRmb2xpbzsgaSArPSAxKSB7XG4gICAgY3JlYXRlSW1hZ2VTbGlkZShjbGllbnQsIGkpO1xuICB9XG59XG5cbi8vIGluZm9zXG5mdW5jdGlvbiBzZXRMaW5rKGxpbmssIHR5cGUpIHtcbiAgY29uc3QgbGlua0J1dHRvbiA9IGxpbmtzLnF1ZXJ5U2VsZWN0b3IoYGEuJHt0eXBlfWApO1xuXG4gIGxpbmtCdXR0b24uaHJlZiA9IGxpbms7XG4gIGxpbmtCdXR0b24uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xufVxuXG5mdW5jdGlvbiBmaWxsTW9kYWwoZSkge1xuICBjb25zdCBidG4gPSBlLnRhcmdldC5kYXRhc2V0LmNsaWVudDtcblxuICBzZWxlY3RCZ0ltYWdlKGJ0bik7XG5cbiAgaDYudGV4dENvbnRlbnQgPSBwb3J0Zm9saW9bYnRuXS50aXRsZTtcbiAgaDMudGV4dENvbnRlbnQgPSBwb3J0Zm9saW9bYnRuXS50YWdzO1xuICBwYXJhLnRleHRDb250ZW50ID0gcG9ydGZvbGlvW2J0bl0udGV4dDtcblxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBvcnRmb2xpb1tidG5dLCAnc2l0ZScpKSB7XG4gICAgc2V0TGluayhwb3J0Zm9saW9bYnRuXS5zaXRlLCAnc2l0ZScpO1xuICB9IGVsc2UgaGlkZUJ1dHRvbignc2l0ZScpO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBvcnRmb2xpb1tidG5dLCAncmVwbycpKSB7XG4gICAgc2V0TGluayhwb3J0Zm9saW9bYnRuXS5yZXBvLCAncmVwbycpO1xuICB9IGVsc2UgaGlkZUJ1dHRvbigncmVwbycpO1xuXG4gIHNob3dNb2RhbChlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUG9ydGZvbGlvRWxlbWVudHMoZSkge1xuICBjcmVhdGVQb3J0Zm9saW9Nb2RhbCgpO1xuICBmaWxsTW9kYWwoZSk7XG59XG5cbm1vZGFsV3JhcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyQ2Fyb3VzZWwpO1xuYnRuUG9ydGZvbGlvT3Blbi5mb3JFYWNoKChlKSA9PiBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlUG9ydGZvbGlvRWxlbWVudHMpKTtcbmJ0blBvcnRmb2xpb09wZW4uZm9yRWFjaCgoZSkgPT4gZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGNyZWF0ZVBvcnRmb2xpb0VsZW1lbnRzKSk7XG4iLCIvLyBUbyBzYXZlIGltYWdlcyB1c2UgdGhpcyBwYXRoOiAnYXNzZXRzL2ltYWdlcy9wb3J0Zm9saW8vPGNsaWVudE5hbWVPYmplY3Q+Lydcbi8vIDAxIHRvICdpbWFnZXMnIG51bWJlciB0byB1c2Ugb24gc2xpZGVyXG5cbmNvbnN0IHBvcnRmb2xpbyA9IHtcbiAgLy8gUG9ydGZvbGlvIGNvbnRlbnRcbiAgcml2aWVyYXM6IHtcbiAgICB0aXRsZTogJ1JpdmllcmFzIEhvdGVsJyxcbiAgICB0YWdzOiAnI0phdmFTY3JpcHQgI0hUTUw1ICNDU1MnLFxuICAgIHRleHQ6XG4gICAgICAnRGVzZW52b2x2aW1lbnRvIGRvIGPDs2RpZ28gZG8gc2l0ZSBkbyBtb3RlbCBSaXZpZXJhcyBIb3RlbC4gTGF5b3V0IHBvciBLaW5nIFByb3BhZ2FuZGEuJyxcbiAgICBzaXRlOiAnaHR0cDovL3d3dy5yaXZpZXJhc2hvdGVsLmNvbS5icicsXG4gICAgaW1hZ2VzOiAzLFxuICB9LFxuXG4gIGphZ3JhbzE6IHtcbiAgICB0aXRsZTogJ0phZ3JhbyBCcmF6aWwnLFxuICAgIHRhZ3M6ICcjSmF2YVNjcmlwdCAjSFRNTDUgI0NTUyAjV29yZFByZXNzJyxcbiAgICB0ZXh0OiAnRGVzZW52b2x2aW1lbnRvIGRvIHNpdGUgYmlsaW5ndWUgcGFyYSBleHBvc2nDp8OjbyBkZSBwcm9kdXRvcyBkYSBleHBvcnRhZG9yYSBkZSBmcnV0YXMgSmFncsOjbyBCcmF6aWwuIExheW91dCBwb3IgU2VyZ2lvIExpbWEuJyxcbiAgICBzaXRlOiAnaHR0cDovL2phZ3Jhb2JyYXppbC5jb20nLFxuICAgIGltYWdlczogMyxcbiAgfSxcblxuICBqYWdyYW8yOiB7XG4gICAgdGl0bGU6ICdKYWdyYW8gQnJhemlsJyxcbiAgICB0YWdzOiAnI0phdmFTY3JpcHQgI0hUTUw1ICNDU1MgI1dvcmRQcmVzcycsXG4gICAgdGV4dDogJ1JlcGFnaW5hw6fDo28gZG8gc2l0ZSBkYSBlbXByZXNhIEphZ3JhbyBCcmF6aWwuIExheW91dCBwb3IgMzYwwrogQWfDqm5jaWEgQ3JpYXRpdmEuJyxcbiAgICBzaXRlOiAnaHR0cDovL2phZ3Jhb2JyYXppbC5jb20nLFxuICAgIGltYWdlczogNCxcbiAgfSxcblxuICBpdGF1bmE6IHtcbiAgICB0aXRsZTogJ0l0YcO6bmEgQWR2aXNvcnMnLFxuICAgIHRhZ3M6ICcjSmF2YVNjcmlwdCAjSFRNTDUgI0NTUyAjV2ViRGVzaWduJyxcbiAgICB0ZXh0OiAnU2l0ZSBpbnN0aXR1Y2lvbmFsIGRhIGVtcHJlc2EgSXRhw7puYSBBZHZpc29ycyBkbyBSSiBkZSBjb25zdHVsdG9yaWEgZmluYW5jZWlyYS4nLFxuICAgIHNpdGU6ICdodHRwczovL3d3dy5pdGF1bmFjb25zdWx0b3JpYS5jb20uYnIvJyxcbiAgICBpbWFnZXM6IDMsXG4gIH0sXG5cbiAgbWF1YWVjb256bzoge1xuICAgIHRpdGxlOiAnTWF1YSAmIENvbnpvJyxcbiAgICB0YWdzOiAnI0phdmFTY3JpcHQgI0hUTUw1ICNDU1MgI1dvcmRQcmVzcycsXG4gICAgdGV4dDpcbiAgICAgICdTaXRlIHBlbnNhZG8gZSBkZXNlbnZvbHZpZG8gY29tIG8gaW50dWl0byBkZSBjYXB0YcOnw6NvIGRlIG5vdm9zIGNsaWVudGVzIHBhcmEgYSBlbXByZXNhLiBQYXJhIGF0aW5naXIgbyByZXN1bHRhZG8gZGUgY2FwdGHDp8OjbyBkZSBjbGllbnRlcywgZml6ZW1vcyBkaXZlcnNhcyBsYW5kaW5nIHBhZ2VzIGRlbnRybyBkbyBzaXRlIHBhcmEgcXVlIGNhZGEgdW1hIHB1ZGVzc2Ugc2VyIGRpdnVsZ2FkYSBpbmRpdmlkdWFsbWVudGUganVudG8gYW8gYnVzY2Fkb3Jlcy4gTGF5b3V0IHBvciBKdW5pb3IgTWVuZGVzLicsXG4gICAgc2l0ZTogJ2h0dHBzOi8vd3d3Lm1hdWFlY29uem8uY29tLmJyLycsXG4gICAgaW1hZ2VzOiAzLFxuICB9LFxuXG4gIGlyaXM6IHtcbiAgICB0aXRsZTogJ0lyaXMgTGFib3JhdG9yaWVzJyxcbiAgICB0YWdzOiAnI0hUTUw1ICNDU1MgI1dvcmRQcmVzcyAjV1AtUGx1Z2lucycsXG4gICAgdGV4dDpcbiAgICAgICdTaXRlIGRlc2Vudm9sdmlkbyBwYXJhIGEgZW1wcmVzYSBub3J0ZS1hbWVyaWNhbmEgZXNwZWNpYWxpemFkYSBlbSBpbnNwZcOnw6NvIGUgcmVtb8Onw6NvIGRlIGFtaWFudG8gZSBtb2ZvcyBkZW50cm8gZGUgaW3Ds3ZlaXMuJyxcbiAgICBzaXRlOiAnaHR0cDovL3d3dy5pcmlzbGFib3JhdG9yaWVzLmNvbS8nLFxuICAgIGltYWdlczogNCxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvcnRmb2xpbztcbiIsImltcG9ydCAnYW5pbWF0ZS5jc3MnO1xuaW1wb3J0ICdyZXNldC1jc3MnO1xuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4uL2ltYWdlcy9kZXYucG5nJztcblxuaW1wb3J0ICdAbWRpL2ZvbnQvY3NzL21hdGVyaWFsZGVzaWduaWNvbnMubWluLmNzcyc7XG5cbmltcG9ydCAnLi90aGVtZSc7XG5pbXBvcnQgJy4vYWN0aXZlTGlua01lbnUnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGxvYWRlci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICBsb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICBsb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICB9KTtcbn0pO1xuIiwiKCgpID0+IHtcclxuICBmdW5jdGlvbiBzZXRUaGVtZSh0aGVtZU5hbWUpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIHRoZW1lTmFtZSk7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lID0gdGhlbWVOYW1lO1xyXG4gIH1cclxuXHJcbiAgLy8gZnVuY3Rpb24gdG8gdG9nZ2xlIGJldHdlZW4gbGlnaHQgYW5kIGRhcmsgdGhlbWVcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuICBmdW5jdGlvbiB0b2dnbGVUaGVtZSgpIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSA9PT0gJ3RoZW1lLWRhcmsnKSB7XHJcbiAgICAgIHNldFRoZW1lKCdkZWZhdWx0Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUaGVtZSgnZGFyaycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpID09PSAndGhlbWUtZGFyaycpIHtcclxuICAgIHNldFRoZW1lKCdkYXJrJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyJykuY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXRUaGVtZSgnZGVmYXVsdCcpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlcicpLmNoZWNrZWQgPSB0cnVlO1xyXG4gIH1cclxufSkoKTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmwgKyBcIi4uLy4uL1wiOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMCxcblx0XCJ2ZW5kb3JzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3BvcnRmb2xpb1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwb3J0Zm9saW9cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyg5NTApKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oNzA3KSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9