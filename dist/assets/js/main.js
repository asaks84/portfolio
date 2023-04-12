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

/***/ 837:
/*!***********************************************!*\
  !*** ./src/assets/js/portfolioCreateModal.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _portfolioModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolioModal */ 707);
// eslint-disable-next-line import/no-cycle


function createPortfolioModal() {
  // get HTML reference
  const modal = document.querySelector('#modal');

  // creating carousel elements
  const windows = document.createElement('div');
  const carousel = document.createElement('div');
  const arrowLeft = document.createElement('i');
  const arrowRight = document.createElement('i');

  windows.classList.add('window');
  carousel.classList.add('carousel');
  arrowLeft.classList.add('left', 'mdi', 'mdi-chevron-left-box');
  arrowRight.classList.add('right', 'mdi', 'mdi-chevron-right-box');

  arrowRight.addEventListener('click', () => { (0,_portfolioModal__WEBPACK_IMPORTED_MODULE_0__.shiftSlide)(-1); });
  arrowLeft.addEventListener('click', () => { (0,_portfolioModal__WEBPACK_IMPORTED_MODULE_0__.shiftSlide)(1); });

  windows.appendChild(carousel);
  windows.appendChild(arrowLeft);
  windows.appendChild(arrowRight);

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

  infos.classList.add('infos');
  closeBtn.classList.add('close', 'mdi', 'mdi-close');
  box.classList.add('box');
  links.classList.add('links', 'flex');

  site.classList.add('btn', 'site');
  repo.classList.add('btn', 'repo');

  site.textContent = 'Site';
  repo.textContent = 'Repositório';

  closeBtn.addEventListener('click', _portfolioModal__WEBPACK_IMPORTED_MODULE_0__.closeModal);
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

  modal.appendChild(windows);
  modal.appendChild(infos);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPortfolioModal);


/***/ }),

/***/ 707:
/*!*****************************************!*\
  !*** ./src/assets/js/portfolioModal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "shiftSlide": () => (/* binding */ shiftSlide)
/* harmony export */ });
/* harmony import */ var _portfolioCreateModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolioCreateModal */ 837);
/* harmony import */ var _portfolioObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolioObj */ 606);
// eslint-disable-next-line import/no-cycle



const modalWrap = document.querySelector('.modal-wrap');
const btnOpen = document.querySelectorAll('.description .btn');
const modal = document.querySelector('#modal');
const slideWidth = parseFloat(window.getComputedStyle(modal).width);

// ADJUST SIZE FOR MOBILE

function setWidth(slide, num) {
  const carouselDiv = modal.querySelector('.carousel');
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
  while (modal.lastElementChild) {
    modal.removeChild(modal.lastChild);
  }
  // const slides = carouselDiv.querySelectorAll('div');
  // slides.forEach((e) => e.remove());
}

// OPEN/CLOSE PORTFOLIO
function showModal() {
  modalWrap.classList.add('visible');
}

// eslint-disable-next-line import/prefer-default-export
function closeModal(e) {
  if (e.target.classList.contains('close')) {
    modalWrap.classList.remove('visible');
    clearSlides();
  }
}

function hideButton(type) {
  const linksDiv = modal.querySelector('div.links');
  const linkButton = linksDiv.querySelector(`a.${type}`);
  linkButton.classList.remove('visible');
}

// FILL MODAL

// create image slide

function createImageSlide(client, image) {
  const carouselDiv = modal.querySelector('.carousel');
  const folder = `assets/images/portfolio/${client}`;
  const slideDiv = document.createElement('div');
  const value = image.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  setWidth(slideDiv, _portfolioObj__WEBPACK_IMPORTED_MODULE_1__["default"][client].images);
  slideDiv.style.background = `url('${folder}/${value}.jpg') center center/cover`;
  carouselDiv.appendChild(slideDiv);
}

// select image slide

function selectBgImage(client) {
  const maxImagePortfolio = _portfolioObj__WEBPACK_IMPORTED_MODULE_1__["default"][client].images;

  for (let i = 1; i <= maxImagePortfolio; i += 1) {
    createImageSlide(client, i);
  }
}

// infos

function setLink(link, type) {
  const linksDiv = modal.querySelector('div.links');
  const linkButton = linksDiv.querySelector(`a.${type}`);

  linkButton.href = link;
  linkButton.classList.add('visible');
}
function fillModal(e) {
  const headline = modal.querySelector('.infos h3');
  const tags = modal.querySelector('.infos h6');
  const text = modal.querySelector('.infos p');
  const btn = e.target.dataset.client;
  selectBgImage(btn);
  headline.textContent = _portfolioObj__WEBPACK_IMPORTED_MODULE_1__["default"][btn].title;
  tags.textContent = _portfolioObj__WEBPACK_IMPORTED_MODULE_1__["default"][btn].tags;
  text.textContent = _portfolioObj__WEBPACK_IMPORTED_MODULE_1__["default"][btn].text;

  if (Object.prototype.hasOwnProperty.call(_portfolioObj__WEBPACK_IMPORTED_MODULE_1__["default"][btn], 'site')) {
    setLink(_portfolioObj__WEBPACK_IMPORTED_MODULE_1__["default"][btn].site, 'site');
  } else hideButton('site');
  if (Object.prototype.hasOwnProperty.call(_portfolioObj__WEBPACK_IMPORTED_MODULE_1__["default"][btn], 'repo')) {
    setLink(_portfolioObj__WEBPACK_IMPORTED_MODULE_1__["default"][btn].repo, 'repo');
  } else hideButton('repo');

  showModal(e);
}
function createPortfolioElements(e) {
  (0,_portfolioCreateModal__WEBPACK_IMPORTED_MODULE_0__["default"])();
  fillModal(e);
}

btnOpen.forEach((e) => e.addEventListener('click', createPortfolioElements));
btnOpen.forEach((e) => e.addEventListener('touchend', createPortfolioElements));
modalWrap.addEventListener('click', closeModal);

// SHIFT SLIDE

function shiftSlide(direction) {
  const carouselDiv = modal.querySelector('.carousel');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvQG1kaS9mb250L2Nzcy9tYXRlcmlhbGRlc2lnbmljb25zLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuY3NzL2FuaW1hdGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9yZXNldC1jc3MvcmVzZXQuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3NldHMvY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9qcy9hY3RpdmVMaW5rTWVudS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL3BvcnRmb2xpb0NyZWF0ZU1vZGFsLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3NldHMvanMvcG9ydGZvbGlvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9qcy9wb3J0Zm9saW9PYmouanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9qcy90aGVtZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgbWVudWxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21haW5uYXYgYScpO1xyXG5jb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24nKTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZU1lbnUoKSB7XHJcbiAgc2VjdGlvbnMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgY29uc3QgdG9wID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICBjb25zdCBvZmZzZXQgPSBlLm9mZnNldFRvcDtcclxuICAgIGNvbnN0IGlkID0gZS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICBjb25zdCBoZWFkZXJoZWlnaHQgPSA1MDtcclxuXHJcbiAgICBpZiAodG9wID49IG9mZnNldCAtIGhlYWRlcmhlaWdodCkge1xyXG4gICAgICBtZW51bGlua3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSA9PT0gYCMke2lkfWApIHtcclxuICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG53aW5kb3cub25zY3JvbGwgPSAoKSA9PiBjaGFuZ2VNZW51KCk7XHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiBjaGFuZ2VNZW51KCk7XHJcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCB7IHNoaWZ0U2xpZGUsIGNsb3NlTW9kYWwgfSBmcm9tICcuL3BvcnRmb2xpb01vZGFsJztcblxuZnVuY3Rpb24gY3JlYXRlUG9ydGZvbGlvTW9kYWwoKSB7XG4gIC8vIGdldCBIVE1MIHJlZmVyZW5jZVxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpO1xuXG4gIC8vIGNyZWF0aW5nIGNhcm91c2VsIGVsZW1lbnRzXG4gIGNvbnN0IHdpbmRvd3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYXJyb3dMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjb25zdCBhcnJvd1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuXG4gIHdpbmRvd3MuY2xhc3NMaXN0LmFkZCgnd2luZG93Jyk7XG4gIGNhcm91c2VsLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsJyk7XG4gIGFycm93TGVmdC5jbGFzc0xpc3QuYWRkKCdsZWZ0JywgJ21kaScsICdtZGktY2hldnJvbi1sZWZ0LWJveCcpO1xuICBhcnJvd1JpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0JywgJ21kaScsICdtZGktY2hldnJvbi1yaWdodC1ib3gnKTtcblxuICBhcnJvd1JpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBzaGlmdFNsaWRlKC0xKTsgfSk7XG4gIGFycm93TGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc2hpZnRTbGlkZSgxKTsgfSk7XG5cbiAgd2luZG93cy5hcHBlbmRDaGlsZChjYXJvdXNlbCk7XG4gIHdpbmRvd3MuYXBwZW5kQ2hpbGQoYXJyb3dMZWZ0KTtcbiAgd2luZG93cy5hcHBlbmRDaGlsZChhcnJvd1JpZ2h0KTtcblxuICAvLyBjcmVhdGluZyBpbmZvIGVsZW1lbnRzXG4gIGNvbnN0IGluZm9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjb25zdCBoNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2Jyk7XG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHNpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IHJlcG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgaW5mb3MuY2xhc3NMaXN0LmFkZCgnaW5mb3MnKTtcbiAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnY2xvc2UnLCAnbWRpJywgJ21kaS1jbG9zZScpO1xuICBib3guY2xhc3NMaXN0LmFkZCgnYm94Jyk7XG4gIGxpbmtzLmNsYXNzTGlzdC5hZGQoJ2xpbmtzJywgJ2ZsZXgnKTtcblxuICBzaXRlLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdzaXRlJyk7XG4gIHJlcG8uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ3JlcG8nKTtcblxuICBzaXRlLnRleHRDb250ZW50ID0gJ1NpdGUnO1xuICByZXBvLnRleHRDb250ZW50ID0gJ1JlcG9zaXTDs3Jpbyc7XG5cbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbiAgc2l0ZS5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgcmVwby5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcblxuICBib3guYXBwZW5kQ2hpbGQoaDMpO1xuICBib3guYXBwZW5kQ2hpbGQoaDYpO1xuICBib3guYXBwZW5kQ2hpbGQocGFyYSk7XG4gIGJveC5hcHBlbmRDaGlsZChsaW5rcyk7XG5cbiAgbGlua3MuYXBwZW5kQ2hpbGQoc2l0ZSk7XG4gIGxpbmtzLmFwcGVuZENoaWxkKHJlcG8pO1xuXG4gIGluZm9zLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgaW5mb3MuYXBwZW5kQ2hpbGQoYm94KTtcblxuICBtb2RhbC5hcHBlbmRDaGlsZCh3aW5kb3dzKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoaW5mb3MpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQb3J0Zm9saW9Nb2RhbDtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCBjcmVhdGVQb3J0Zm9saW9Nb2RhbCBmcm9tICcuL3BvcnRmb2xpb0NyZWF0ZU1vZGFsJztcbmltcG9ydCBwb3J0Zm9saW8gZnJvbSAnLi9wb3J0Zm9saW9PYmonO1xuXG5jb25zdCBtb2RhbFdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcCcpO1xuY29uc3QgYnRuT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXNjcmlwdGlvbiAuYnRuJyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpO1xuY29uc3Qgc2xpZGVXaWR0aCA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUobW9kYWwpLndpZHRoKTtcblxuLy8gQURKVVNUIFNJWkUgRk9SIE1PQklMRVxuXG5mdW5jdGlvbiBzZXRXaWR0aChzbGlkZSwgbnVtKSB7XG4gIGNvbnN0IGNhcm91c2VsRGl2ID0gbW9kYWwucXVlcnlTZWxlY3RvcignLmNhcm91c2VsJyk7XG4gIGlmIChcbiAgICAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pXG4gICAgICAudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KVxuICApIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBzbGlkZS5zdHlsZS53aWR0aCA9IGAke3NsaWRlV2lkdGh9cHhgO1xuICAgIGNhcm91c2VsRGl2LnN0eWxlLmxlZnQgPSBgLSR7c2xpZGVXaWR0aH1weGA7XG4gIH1cbiAgY2Fyb3VzZWxEaXYuc3R5bGUud2lkdGggPSBgJHtzbGlkZVdpZHRoICogbnVtfXB4YDtcbn1cblxuLy8gQ0xFQVIgU0xJREVTXG5mdW5jdGlvbiBjbGVhclNsaWRlcygpIHtcbiAgd2hpbGUgKG1vZGFsLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBtb2RhbC5yZW1vdmVDaGlsZChtb2RhbC5sYXN0Q2hpbGQpO1xuICB9XG4gIC8vIGNvbnN0IHNsaWRlcyA9IGNhcm91c2VsRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xuICAvLyBzbGlkZXMuZm9yRWFjaCgoZSkgPT4gZS5yZW1vdmUoKSk7XG59XG5cbi8vIE9QRU4vQ0xPU0UgUE9SVEZPTElPXG5mdW5jdGlvbiBzaG93TW9kYWwoKSB7XG4gIG1vZGFsV3JhcC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gY2xvc2VNb2RhbChlKSB7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlJykpIHtcbiAgICBtb2RhbFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIGNsZWFyU2xpZGVzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGlkZUJ1dHRvbih0eXBlKSB7XG4gIGNvbnN0IGxpbmtzRGl2ID0gbW9kYWwucXVlcnlTZWxlY3RvcignZGl2LmxpbmtzJyk7XG4gIGNvbnN0IGxpbmtCdXR0b24gPSBsaW5rc0Rpdi5xdWVyeVNlbGVjdG9yKGBhLiR7dHlwZX1gKTtcbiAgbGlua0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG59XG5cbi8vIEZJTEwgTU9EQUxcblxuLy8gY3JlYXRlIGltYWdlIHNsaWRlXG5cbmZ1bmN0aW9uIGNyZWF0ZUltYWdlU2xpZGUoY2xpZW50LCBpbWFnZSkge1xuICBjb25zdCBjYXJvdXNlbERpdiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbCcpO1xuICBjb25zdCBmb2xkZXIgPSBgYXNzZXRzL2ltYWdlcy9wb3J0Zm9saW8vJHtjbGllbnR9YDtcbiAgY29uc3Qgc2xpZGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdmFsdWUgPSBpbWFnZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XG4gICAgbWluaW11bUludGVnZXJEaWdpdHM6IDIsXG4gICAgdXNlR3JvdXBpbmc6IGZhbHNlLFxuICB9KTtcblxuICBzZXRXaWR0aChzbGlkZURpdiwgcG9ydGZvbGlvW2NsaWVudF0uaW1hZ2VzKTtcbiAgc2xpZGVEaXYuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJyR7Zm9sZGVyfS8ke3ZhbHVlfS5qcGcnKSBjZW50ZXIgY2VudGVyL2NvdmVyYDtcbiAgY2Fyb3VzZWxEaXYuYXBwZW5kQ2hpbGQoc2xpZGVEaXYpO1xufVxuXG4vLyBzZWxlY3QgaW1hZ2Ugc2xpZGVcblxuZnVuY3Rpb24gc2VsZWN0QmdJbWFnZShjbGllbnQpIHtcbiAgY29uc3QgbWF4SW1hZ2VQb3J0Zm9saW8gPSBwb3J0Zm9saW9bY2xpZW50XS5pbWFnZXM7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbWF4SW1hZ2VQb3J0Zm9saW87IGkgKz0gMSkge1xuICAgIGNyZWF0ZUltYWdlU2xpZGUoY2xpZW50LCBpKTtcbiAgfVxufVxuXG4vLyBpbmZvc1xuXG5mdW5jdGlvbiBzZXRMaW5rKGxpbmssIHR5cGUpIHtcbiAgY29uc3QgbGlua3NEaXYgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdkaXYubGlua3MnKTtcbiAgY29uc3QgbGlua0J1dHRvbiA9IGxpbmtzRGl2LnF1ZXJ5U2VsZWN0b3IoYGEuJHt0eXBlfWApO1xuXG4gIGxpbmtCdXR0b24uaHJlZiA9IGxpbms7XG4gIGxpbmtCdXR0b24uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xufVxuZnVuY3Rpb24gZmlsbE1vZGFsKGUpIHtcbiAgY29uc3QgaGVhZGxpbmUgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuaW5mb3MgaDMnKTtcbiAgY29uc3QgdGFncyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5pbmZvcyBoNicpO1xuICBjb25zdCB0ZXh0ID0gbW9kYWwucXVlcnlTZWxlY3RvcignLmluZm9zIHAnKTtcbiAgY29uc3QgYnRuID0gZS50YXJnZXQuZGF0YXNldC5jbGllbnQ7XG4gIHNlbGVjdEJnSW1hZ2UoYnRuKTtcbiAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBwb3J0Zm9saW9bYnRuXS50aXRsZTtcbiAgdGFncy50ZXh0Q29udGVudCA9IHBvcnRmb2xpb1tidG5dLnRhZ3M7XG4gIHRleHQudGV4dENvbnRlbnQgPSBwb3J0Zm9saW9bYnRuXS50ZXh0O1xuXG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocG9ydGZvbGlvW2J0bl0sICdzaXRlJykpIHtcbiAgICBzZXRMaW5rKHBvcnRmb2xpb1tidG5dLnNpdGUsICdzaXRlJyk7XG4gIH0gZWxzZSBoaWRlQnV0dG9uKCdzaXRlJyk7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocG9ydGZvbGlvW2J0bl0sICdyZXBvJykpIHtcbiAgICBzZXRMaW5rKHBvcnRmb2xpb1tidG5dLnJlcG8sICdyZXBvJyk7XG4gIH0gZWxzZSBoaWRlQnV0dG9uKCdyZXBvJyk7XG5cbiAgc2hvd01vZGFsKGUpO1xufVxuZnVuY3Rpb24gY3JlYXRlUG9ydGZvbGlvRWxlbWVudHMoZSkge1xuICBjcmVhdGVQb3J0Zm9saW9Nb2RhbCgpO1xuICBmaWxsTW9kYWwoZSk7XG59XG5cbmJ0bk9wZW4uZm9yRWFjaCgoZSkgPT4gZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVBvcnRmb2xpb0VsZW1lbnRzKSk7XG5idG5PcGVuLmZvckVhY2goKGUpID0+IGUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBjcmVhdGVQb3J0Zm9saW9FbGVtZW50cykpO1xubW9kYWxXcmFwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG5cbi8vIFNISUZUIFNMSURFXG5cbmV4cG9ydCBmdW5jdGlvbiBzaGlmdFNsaWRlKGRpcmVjdGlvbikge1xuICBjb25zdCBjYXJvdXNlbERpdiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbCcpO1xuICBjb25zdCBzbGlkZUZpcnN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsID4gZGl2OmZpcnN0LWNoaWxkJyk7XG4gIGNvbnN0IHNsaWRlTGFzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbCA+IGRpdjpsYXN0LWNoaWxkJyk7XG5cbiAgaWYgKGNhcm91c2VsRGl2LmNsYXNzTGlzdC5jb250YWlucygndHJhbnNpdGlvbicpKSByZXR1cm47XG5cbiAgY2Fyb3VzZWxEaXYuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbicpO1xuICBjYXJvdXNlbERpdi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2RpcmVjdGlvbiAqIHNsaWRlV2lkdGh9cHgpYDtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICBzbGlkZUZpcnN0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNsaWRlTGFzdCwgc2xpZGVGaXJzdCk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IC0xKSB7XG4gICAgICBzbGlkZUxhc3QucGFyZW50Tm9kZS5hcHBlbmQoc2xpZGVGaXJzdCk7XG4gICAgfVxuXG4gICAgY2Fyb3VzZWxEaXYuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNpdGlvbicpO1xuICAgIGNhcm91c2VsRGl2LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDBweCknO1xuICB9LCA3MDApO1xufVxuIiwiLy8gVG8gc2F2ZSBpbWFnZXMgdXNlIHRoaXMgcGF0aDogJ2Fzc2V0cy9pbWFnZXMvcG9ydGZvbGlvLzxjbGllbnROYW1lT2JqZWN0Pi8nXG4vLyAwMSB0byAnaW1hZ2VzJyBudW1iZXIgdG8gdXNlIG9uIHNsaWRlclxuXG5jb25zdCBwb3J0Zm9saW8gPSB7XG4gIC8vIFBvcnRmb2xpbyBjb250ZW50XG4gIHJpdmllcmFzOiB7XG4gICAgdGl0bGU6ICdSaXZpZXJhcyBIb3RlbCcsXG4gICAgdGFnczogJyNKYXZhU2NyaXB0ICNIVE1MNSAjQ1NTJyxcbiAgICB0ZXh0OlxuICAgICAgJ0Rlc2Vudm9sdmltZW50byBkbyBjw7NkaWdvIGRvIHNpdGUgZG8gbW90ZWwgUml2aWVyYXMgSG90ZWwuIExheW91dCBwb3IgS2luZyBQcm9wYWdhbmRhLicsXG4gICAgc2l0ZTogJ2h0dHA6Ly93d3cucml2aWVyYXNob3RlbC5jb20uYnInLFxuICAgIGltYWdlczogMyxcbiAgfSxcblxuICBqYWdyYW8xOiB7XG4gICAgdGl0bGU6ICdKYWdyYW8gQnJhemlsJyxcbiAgICB0YWdzOiAnI0phdmFTY3JpcHQgI0hUTUw1ICNDU1MgI1dvcmRQcmVzcycsXG4gICAgdGV4dDogJ0Rlc2Vudm9sdmltZW50byBkbyBzaXRlIGJpbGluZ3VlIHBhcmEgZXhwb3Npw6fDo28gZGUgcHJvZHV0b3MgZGEgZXhwb3J0YWRvcmEgZGUgZnJ1dGFzIEphZ3LDo28gQnJhemlsLiBMYXlvdXQgcG9yIFNlcmdpbyBMaW1hLicsXG4gICAgc2l0ZTogJ2h0dHA6Ly9qYWdyYW9icmF6aWwuY29tJyxcbiAgICBpbWFnZXM6IDMsXG4gIH0sXG5cbiAgamFncmFvMjoge1xuICAgIHRpdGxlOiAnSmFncmFvIEJyYXppbCcsXG4gICAgdGFnczogJyNKYXZhU2NyaXB0ICNIVE1MNSAjQ1NTICNXb3JkUHJlc3MnLFxuICAgIHRleHQ6ICdSZXBhZ2luYcOnw6NvIGRvIHNpdGUgZGEgZW1wcmVzYSBKYWdyYW8gQnJhemlsLiBMYXlvdXQgcG9yIDM2MMK6IEFnw6puY2lhIENyaWF0aXZhLicsXG4gICAgc2l0ZTogJ2h0dHA6Ly9qYWdyYW9icmF6aWwuY29tJyxcbiAgICBpbWFnZXM6IDQsXG4gIH0sXG5cbiAgaXRhdW5hOiB7XG4gICAgdGl0bGU6ICdJdGHDum5hIEFkdmlzb3JzJyxcbiAgICB0YWdzOiAnI0phdmFTY3JpcHQgI0hUTUw1ICNDU1MgI1dlYkRlc2lnbicsXG4gICAgdGV4dDogJ1NpdGUgaW5zdGl0dWNpb25hbCBkYSBlbXByZXNhIEl0YcO6bmEgQWR2aXNvcnMgZG8gUkogZGUgY29uc3R1bHRvcmlhIGZpbmFuY2VpcmEuJyxcbiAgICBzaXRlOiAnaHR0cHM6Ly93d3cuaXRhdW5hY29uc3VsdG9yaWEuY29tLmJyLycsXG4gICAgaW1hZ2VzOiAzLFxuICB9LFxuXG4gIG1hdWFlY29uem86IHtcbiAgICB0aXRsZTogJ01hdWEgJiBDb256bycsXG4gICAgdGFnczogJyNKYXZhU2NyaXB0ICNIVE1MNSAjQ1NTICNXb3JkUHJlc3MnLFxuICAgIHRleHQ6XG4gICAgICAnU2l0ZSBwZW5zYWRvIGUgZGVzZW52b2x2aWRvIGNvbSBvIGludHVpdG8gZGUgY2FwdGHDp8OjbyBkZSBub3ZvcyBjbGllbnRlcyBwYXJhIGEgZW1wcmVzYS4gUGFyYSBhdGluZ2lyIG8gcmVzdWx0YWRvIGRlIGNhcHRhw6fDo28gZGUgY2xpZW50ZXMsIGZpemVtb3MgZGl2ZXJzYXMgbGFuZGluZyBwYWdlcyBkZW50cm8gZG8gc2l0ZSBwYXJhIHF1ZSBjYWRhIHVtYSBwdWRlc3NlIHNlciBkaXZ1bGdhZGEgaW5kaXZpZHVhbG1lbnRlIGp1bnRvIGFvIGJ1c2NhZG9yZXMuIExheW91dCBwb3IgSnVuaW9yIE1lbmRlcy4nLFxuICAgIHNpdGU6ICdodHRwczovL3d3dy5tYXVhZWNvbnpvLmNvbS5ici8nLFxuICAgIGltYWdlczogMyxcbiAgfSxcblxuICBpcmlzOiB7XG4gICAgdGl0bGU6ICdJcmlzIExhYm9yYXRvcmllcycsXG4gICAgdGFnczogJyNIVE1MNSAjQ1NTICNXb3JkUHJlc3MgI1dQLVBsdWdpbnMnLFxuICAgIHRleHQ6XG4gICAgICAnU2l0ZSBkZXNlbnZvbHZpZG8gcGFyYSBhIGVtcHJlc2Egbm9ydGUtYW1lcmljYW5hIGVzcGVjaWFsaXphZGEgZW0gaW5zcGXDp8OjbyBlIHJlbW/Dp8OjbyBkZSBhbWlhbnRvIGUgbW9mb3MgZGVudHJvIGRlIGltw7N2ZWlzLicsXG4gICAgc2l0ZTogJ2h0dHA6Ly93d3cuaXJpc2xhYm9yYXRvcmllcy5jb20vJyxcbiAgICBpbWFnZXM6IDQsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3J0Zm9saW87XG4iLCJpbXBvcnQgJ2FuaW1hdGUuY3NzJztcbmltcG9ydCAncmVzZXQtY3NzJztcbmltcG9ydCAnLi4vY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuLi9pbWFnZXMvZGV2LnBuZyc7XG5cbmltcG9ydCAnQG1kaS9mb250L2Nzcy9tYXRlcmlhbGRlc2lnbmljb25zLm1pbi5jc3MnO1xuXG5pbXBvcnQgJy4vdGhlbWUnO1xuaW1wb3J0ICcuL2FjdGl2ZUxpbmtNZW51JztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKTtcbmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBsb2FkZXIuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgbG9hZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdsb2FkZWQnKTtcbiAgfSk7XG59KTtcbiIsIigoKSA9PiB7XHJcbiAgZnVuY3Rpb24gc2V0VGhlbWUodGhlbWVOYW1lKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCB0aGVtZU5hbWUpO1xyXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZSA9IHRoZW1lTmFtZTtcclxuICB9XHJcblxyXG4gIC8vIGZ1bmN0aW9uIHRvIHRvZ2dsZSBiZXR3ZWVuIGxpZ2h0IGFuZCBkYXJrIHRoZW1lXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbiAgZnVuY3Rpb24gdG9nZ2xlVGhlbWUoKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgPT09ICd0aGVtZS1kYXJrJykge1xyXG4gICAgICBzZXRUaGVtZSgnZGVmYXVsdCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGhlbWUoJ2RhcmsnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSA9PT0gJ3RoZW1lLWRhcmsnKSB7XHJcbiAgICBzZXRUaGVtZSgnZGFyaycpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlcicpLmNoZWNrZWQgPSBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgc2V0VGhlbWUoJ2RlZmF1bHQnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXInKS5jaGVja2VkID0gdHJ1ZTtcclxuICB9XHJcbn0pKCk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi8uLi9cIjsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDAsXG5cdFwidmVuZG9yc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwb3J0Zm9saW9cIl0gPSBzZWxmW1wid2VicGFja0NodW5rcG9ydGZvbGlvXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oOTUwKSkpXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKDcwNykpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==