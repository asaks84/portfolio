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

/***/ 721:
/*!***********************************!*\
  !*** ./src/assets/js/carousel.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getImageSlide": () => (/* binding */ getImageSlide),
/* harmony export */   "shiftSlide": () => (/* binding */ shiftSlide)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ 822);
/* harmony import */ var _portfolioObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolioObj */ 606);



const carouselDiv = _modal__WEBPACK_IMPORTED_MODULE_0__.modal;

const slideWidth = parseFloat(window.getComputedStyle(carouselDiv).width);
const getCarousel = () => document.querySelector('.carousel');

// adjuse size for mobile
function setWidth(slide, num) {
  const elemSlide = slide;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      .test(navigator.userAgent)
  ) {
    elemSlide.style.width = `${slideWidth}px`;
    getCarousel().style.left = `-${slideWidth}px`;
  }
  getCarousel().style.width = `${slideWidth * num}px`;
}

// shift slide
function shiftSlide(direction) {
  const slideFirst = document.querySelector('.carousel > div:first-child');
  const slideLast = document.querySelector('.carousel > div:last-child');

  if (getCarousel().classList.contains('transition')) return;

  getCarousel().classList.add('transition');
  getCarousel().style.transform = `translateX(${direction * slideWidth}px)`;

  setTimeout(() => {
    if (direction === 1) {
      slideFirst.parentNode.insertBefore(slideLast, slideFirst);
    } else if (direction === -1) {
      slideLast.parentNode.append(slideFirst);
    }

    getCarousel().classList.remove('transition');
    getCarousel().style.transform = 'translateX(0px)';
  }, 700);
}

// create image slide
function createSlide(client, image) {
  const folder = `assets/images/portfolio/${client}`;
  const slideDiv = document.createElement('div');
  const value = image.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  setWidth(slideDiv, _portfolioObj__WEBPACK_IMPORTED_MODULE_1__["default"][client].images);
  slideDiv.style.background = `url('${folder}/${value}.jpg') center center/cover`;
  getCarousel().appendChild(slideDiv);
}

// select image slide
function getImageSlide(client) {
  const maxImagePortfolio = _portfolioObj__WEBPACK_IMPORTED_MODULE_1__["default"][client].images;

  for (let i = 1; i <= maxImagePortfolio; i += 1) {
    createSlide(client, i);
  }
}


/***/ }),

/***/ 822:
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearModal": () => (/* binding */ clearModal),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "fillModal": () => (/* binding */ fillModal),
/* harmony export */   "modal": () => (/* binding */ modal),
/* harmony export */   "modalWrap": () => (/* binding */ modalWrap),
/* harmony export */   "showModal": () => (/* binding */ showModal),
/* harmony export */   "toCloseModal": () => (/* binding */ toCloseModal)
/* harmony export */ });
const modalWrap = document.querySelector('.modal-wrap');
const modal = document.querySelector('#modal');

// fill modal

function fillModal(content) {
  modal.appendChild(content);
}

// side functions
const toCloseModal = (e) => e.target.classList.contains('close');

// open modal
function showModal() {
  modalWrap.classList.add('visible');
}

// clear modal
function clearModal() {
  while (modal.firstChild) {
    modal.removeChild(modal.lastChild);
  }
}

// close modal
function closeModal(e) {
  if (toCloseModal(e)) {
    modalWrap.classList.remove('visible');
    clearModal();
  }
}

// modalWrap.addEventListener('click', closeModal);


/***/ }),

/***/ 707:
/*!*****************************************!*\
  !*** ./src/assets/js/portfolioModal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _portfolioObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolioObj */ 606);
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel */ 721);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ 822);




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

// SIDE FUNCTIONS

// validation Object content
// eslint-disable-next-line max-len
const validationObjProp = (Obj, client, Prop) => Object.prototype.hasOwnProperty.call(Obj[client], Prop);

// clear Carousel
function clearCarousel() {
  while (carousel.lastElementChild) {
    carousel.removeChild(carousel.lastChild);
  }
  _modal__WEBPACK_IMPORTED_MODULE_2__.modalWrap.removeEventListener('transitionend', clearCarousel);
}

function execCloseModal(e) {
  if ((0,_modal__WEBPACK_IMPORTED_MODULE_2__.toCloseModal)(e)) {
    _modal__WEBPACK_IMPORTED_MODULE_2__.modalWrap.addEventListener('transitionend', clearCarousel);
    (0,_modal__WEBPACK_IMPORTED_MODULE_2__.closeModal)(e);
  }
}

// CREATING MODAL DOM
function createPortfolioModal() {
  // ordering Carousel elements
  windows.classList.add('window');
  carousel.classList.add('carousel');
  arrowLeft.classList.add('left', 'mdi', 'mdi-chevron-left-box');
  arrowRight.classList.add('right', 'mdi', 'mdi-chevron-right-box');

  arrowRight.addEventListener('click', () => { (0,_carousel__WEBPACK_IMPORTED_MODULE_1__.shiftSlide)(-1); });
  arrowLeft.addEventListener('click', () => { (0,_carousel__WEBPACK_IMPORTED_MODULE_1__.shiftSlide)(1); });

  windows.appendChild(carousel);
  windows.appendChild(arrowLeft);
  windows.appendChild(arrowRight);

  // odering infos elements
  infos.classList.add('infos');
  closeBtn.classList.add('close', 'mdi', 'mdi-close');
  box.classList.add('box');
  links.classList.add('links', 'flex');

  site.classList.add('btn', 'site');
  repo.classList.add('btn', 'repo');

  site.textContent = 'Site';
  repo.textContent = 'Repositório';

  closeBtn.addEventListener('click', execCloseModal);
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

  (0,_modal__WEBPACK_IMPORTED_MODULE_2__.fillModal)(windows);
  (0,_modal__WEBPACK_IMPORTED_MODULE_2__.fillModal)(infos);
}

// FILL CONTENT

// infos
function setLink(link, type) {
  const linkButton = links.querySelector(`a.${type}`);

  linkButton.href = link;
  linkButton.classList.add('visible');
}

function fillContent(e) {
  const clientID = e.target.dataset.client;

  (0,_carousel__WEBPACK_IMPORTED_MODULE_1__.getImageSlide)(clientID);

  h3.textContent = _portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"][clientID].title;
  h6.textContent = _portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"][clientID].tags;
  para.textContent = _portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"][clientID].text;

  if (validationObjProp(_portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"], clientID, 'site')) {
    setLink(_portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"][clientID].site, 'site');
  }
  if (validationObjProp(_portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"], clientID, 'repo')) {
    setLink(_portfolioObj__WEBPACK_IMPORTED_MODULE_0__["default"][clientID].repo, 'repo');
  }

  (0,_modal__WEBPACK_IMPORTED_MODULE_2__.showModal)(e);
}

function createPortfolioElements(e) {
  createPortfolioModal();
  fillContent(e);
}

_modal__WEBPACK_IMPORTED_MODULE_2__.modalWrap.addEventListener('click', execCloseModal);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9AbWRpL2ZvbnQvY3NzL21hdGVyaWFsZGVzaWduaWNvbnMubWluLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5jc3MvYW5pbWF0ZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3Jlc2V0LWNzcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL2FjdGl2ZUxpbmtNZW51LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3NldHMvanMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9qcy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL3BvcnRmb2xpb01vZGFsLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3NldHMvanMvcG9ydGZvbGlvT2JqLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3NldHMvanMvc2NyaXB0LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3NldHMvanMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IG1lbnVsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtYWlubmF2IGEnKTtcbmNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VjdGlvbicpO1xuXG5mdW5jdGlvbiBjaGFuZ2VNZW51KCkge1xuICBzZWN0aW9ucy5mb3JFYWNoKChlKSA9PiB7XG4gICAgY29uc3QgdG9wID0gd2luZG93LnNjcm9sbFk7XG4gICAgY29uc3Qgb2Zmc2V0ID0gZS5vZmZzZXRUb3A7XG4gICAgY29uc3QgaWQgPSBlLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBjb25zdCBoZWFkZXJoZWlnaHQgPSA1MDtcblxuICAgIGlmICh0b3AgPj0gb2Zmc2V0IC0gaGVhZGVyaGVpZ2h0KSB7XG4gICAgICBtZW51bGlua3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnaHJlZicpID09PSBgIyR7aWR9YCkge1xuICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxud2luZG93Lm9uc2Nyb2xsID0gKCkgPT4gY2hhbmdlTWVudSgpO1xud2luZG93Lm9ubG9hZCA9ICgpID0+IGNoYW5nZU1lbnUoKTtcbiIsImltcG9ydCB7IG1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgcG9ydGZvbGlvIGZyb20gJy4vcG9ydGZvbGlvT2JqJztcblxuY29uc3QgY2Fyb3VzZWxEaXYgPSBtb2RhbDtcblxuY29uc3Qgc2xpZGVXaWR0aCA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoY2Fyb3VzZWxEaXYpLndpZHRoKTtcbmNvbnN0IGdldENhcm91c2VsID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsJyk7XG5cbi8vIGFkanVzZSBzaXplIGZvciBtb2JpbGVcbmZ1bmN0aW9uIHNldFdpZHRoKHNsaWRlLCBudW0pIHtcbiAgY29uc3QgZWxlbVNsaWRlID0gc2xpZGU7XG4gIGlmIChcbiAgICAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pXG4gICAgICAudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KVxuICApIHtcbiAgICBlbGVtU2xpZGUuc3R5bGUud2lkdGggPSBgJHtzbGlkZVdpZHRofXB4YDtcbiAgICBnZXRDYXJvdXNlbCgpLnN0eWxlLmxlZnQgPSBgLSR7c2xpZGVXaWR0aH1weGA7XG4gIH1cbiAgZ2V0Q2Fyb3VzZWwoKS5zdHlsZS53aWR0aCA9IGAke3NsaWRlV2lkdGggKiBudW19cHhgO1xufVxuXG4vLyBzaGlmdCBzbGlkZVxuZXhwb3J0IGZ1bmN0aW9uIHNoaWZ0U2xpZGUoZGlyZWN0aW9uKSB7XG4gIGNvbnN0IHNsaWRlRmlyc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwgPiBkaXY6Zmlyc3QtY2hpbGQnKTtcbiAgY29uc3Qgc2xpZGVMYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsID4gZGl2Omxhc3QtY2hpbGQnKTtcblxuICBpZiAoZ2V0Q2Fyb3VzZWwoKS5jbGFzc0xpc3QuY29udGFpbnMoJ3RyYW5zaXRpb24nKSkgcmV0dXJuO1xuXG4gIGdldENhcm91c2VsKCkuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbicpO1xuICBnZXRDYXJvdXNlbCgpLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7ZGlyZWN0aW9uICogc2xpZGVXaWR0aH1weClgO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmIChkaXJlY3Rpb24gPT09IDEpIHtcbiAgICAgIHNsaWRlRmlyc3QucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2xpZGVMYXN0LCBzbGlkZUZpcnN0KTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gLTEpIHtcbiAgICAgIHNsaWRlTGFzdC5wYXJlbnROb2RlLmFwcGVuZChzbGlkZUZpcnN0KTtcbiAgICB9XG5cbiAgICBnZXRDYXJvdXNlbCgpLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zaXRpb24nKTtcbiAgICBnZXRDYXJvdXNlbCgpLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDBweCknO1xuICB9LCA3MDApO1xufVxuXG4vLyBjcmVhdGUgaW1hZ2Ugc2xpZGVcbmZ1bmN0aW9uIGNyZWF0ZVNsaWRlKGNsaWVudCwgaW1hZ2UpIHtcbiAgY29uc3QgZm9sZGVyID0gYGFzc2V0cy9pbWFnZXMvcG9ydGZvbGlvLyR7Y2xpZW50fWA7XG4gIGNvbnN0IHNsaWRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHZhbHVlID0gaW1hZ2UudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge1xuICAgIG1pbmltdW1JbnRlZ2VyRGlnaXRzOiAyLFxuICAgIHVzZUdyb3VwaW5nOiBmYWxzZSxcbiAgfSk7XG5cbiAgc2V0V2lkdGgoc2xpZGVEaXYsIHBvcnRmb2xpb1tjbGllbnRdLmltYWdlcyk7XG4gIHNsaWRlRGl2LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcke2ZvbGRlcn0vJHt2YWx1ZX0uanBnJykgY2VudGVyIGNlbnRlci9jb3ZlcmA7XG4gIGdldENhcm91c2VsKCkuYXBwZW5kQ2hpbGQoc2xpZGVEaXYpO1xufVxuXG4vLyBzZWxlY3QgaW1hZ2Ugc2xpZGVcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbWFnZVNsaWRlKGNsaWVudCkge1xuICBjb25zdCBtYXhJbWFnZVBvcnRmb2xpbyA9IHBvcnRmb2xpb1tjbGllbnRdLmltYWdlcztcblxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBtYXhJbWFnZVBvcnRmb2xpbzsgaSArPSAxKSB7XG4gICAgY3JlYXRlU2xpZGUoY2xpZW50LCBpKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IG1vZGFsV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13cmFwJyk7XG5leHBvcnQgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKTtcblxuLy8gZmlsbCBtb2RhbFxuXG5leHBvcnQgZnVuY3Rpb24gZmlsbE1vZGFsKGNvbnRlbnQpIHtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY29udGVudCk7XG59XG5cbi8vIHNpZGUgZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgdG9DbG9zZU1vZGFsID0gKGUpID0+IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xvc2UnKTtcblxuLy8gb3BlbiBtb2RhbFxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNb2RhbCgpIHtcbiAgbW9kYWxXcmFwLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbn1cblxuLy8gY2xlYXIgbW9kYWxcbmV4cG9ydCBmdW5jdGlvbiBjbGVhck1vZGFsKCkge1xuICB3aGlsZSAobW9kYWwuZmlyc3RDaGlsZCkge1xuICAgIG1vZGFsLnJlbW92ZUNoaWxkKG1vZGFsLmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuLy8gY2xvc2UgbW9kYWxcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1vZGFsKGUpIHtcbiAgaWYgKHRvQ2xvc2VNb2RhbChlKSkge1xuICAgIG1vZGFsV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgY2xlYXJNb2RhbCgpO1xuICB9XG59XG5cbi8vIG1vZGFsV3JhcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuIiwiaW1wb3J0IHBvcnRmb2xpbyBmcm9tICcuL3BvcnRmb2xpb09iaic7XG5pbXBvcnQgeyBzaGlmdFNsaWRlLCBnZXRJbWFnZVNsaWRlIH0gZnJvbSAnLi9jYXJvdXNlbCc7XG5pbXBvcnQge1xuICBmaWxsTW9kYWwsIHNob3dNb2RhbCwgY2xvc2VNb2RhbCwgbW9kYWxXcmFwLCB0b0Nsb3NlTW9kYWwsXG59IGZyb20gJy4vbW9kYWwnO1xuXG5jb25zdCBidG5Qb3J0Zm9saW9PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BvcnRmb2xpbyAuZGVzY3JpcHRpb24gLmJ0bicpO1xuXG4vLyBjcmVhdGluZyBjYXJvdXNlbCBlbGVtZW50c1xuY29uc3Qgd2luZG93cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGFycm93TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbmNvbnN0IGFycm93UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5cbi8vIGNyZWF0aW5nIGluZm8gZWxlbWVudHNcbmNvbnN0IGluZm9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbmNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuY29uc3QgaDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpO1xuY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBzaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuY29uc3QgcmVwbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuLy8gU0lERSBGVU5DVElPTlNcblxuLy8gdmFsaWRhdGlvbiBPYmplY3QgY29udGVudFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbmNvbnN0IHZhbGlkYXRpb25PYmpQcm9wID0gKE9iaiwgY2xpZW50LCBQcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoT2JqW2NsaWVudF0sIFByb3ApO1xuXG4vLyBjbGVhciBDYXJvdXNlbFxuZnVuY3Rpb24gY2xlYXJDYXJvdXNlbCgpIHtcbiAgd2hpbGUgKGNhcm91c2VsLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjYXJvdXNlbC5yZW1vdmVDaGlsZChjYXJvdXNlbC5sYXN0Q2hpbGQpO1xuICB9XG4gIG1vZGFsV3JhcC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgY2xlYXJDYXJvdXNlbCk7XG59XG5cbmZ1bmN0aW9uIGV4ZWNDbG9zZU1vZGFsKGUpIHtcbiAgaWYgKHRvQ2xvc2VNb2RhbChlKSkge1xuICAgIG1vZGFsV3JhcC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgY2xlYXJDYXJvdXNlbCk7XG4gICAgY2xvc2VNb2RhbChlKTtcbiAgfVxufVxuXG4vLyBDUkVBVElORyBNT0RBTCBET01cbmZ1bmN0aW9uIGNyZWF0ZVBvcnRmb2xpb01vZGFsKCkge1xuICAvLyBvcmRlcmluZyBDYXJvdXNlbCBlbGVtZW50c1xuICB3aW5kb3dzLmNsYXNzTGlzdC5hZGQoJ3dpbmRvdycpO1xuICBjYXJvdXNlbC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbCcpO1xuICBhcnJvd0xlZnQuY2xhc3NMaXN0LmFkZCgnbGVmdCcsICdtZGknLCAnbWRpLWNoZXZyb24tbGVmdC1ib3gnKTtcbiAgYXJyb3dSaWdodC5jbGFzc0xpc3QuYWRkKCdyaWdodCcsICdtZGknLCAnbWRpLWNoZXZyb24tcmlnaHQtYm94Jyk7XG5cbiAgYXJyb3dSaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc2hpZnRTbGlkZSgtMSk7IH0pO1xuICBhcnJvd0xlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNoaWZ0U2xpZGUoMSk7IH0pO1xuXG4gIHdpbmRvd3MuYXBwZW5kQ2hpbGQoY2Fyb3VzZWwpO1xuICB3aW5kb3dzLmFwcGVuZENoaWxkKGFycm93TGVmdCk7XG4gIHdpbmRvd3MuYXBwZW5kQ2hpbGQoYXJyb3dSaWdodCk7XG5cbiAgLy8gb2RlcmluZyBpbmZvcyBlbGVtZW50c1xuICBpbmZvcy5jbGFzc0xpc3QuYWRkKCdpbmZvcycpO1xuICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZScsICdtZGknLCAnbWRpLWNsb3NlJyk7XG4gIGJveC5jbGFzc0xpc3QuYWRkKCdib3gnKTtcbiAgbGlua3MuY2xhc3NMaXN0LmFkZCgnbGlua3MnLCAnZmxleCcpO1xuXG4gIHNpdGUuY2xhc3NMaXN0LmFkZCgnYnRuJywgJ3NpdGUnKTtcbiAgcmVwby5jbGFzc0xpc3QuYWRkKCdidG4nLCAncmVwbycpO1xuXG4gIHNpdGUudGV4dENvbnRlbnQgPSAnU2l0ZSc7XG4gIHJlcG8udGV4dENvbnRlbnQgPSAnUmVwb3NpdMOzcmlvJztcblxuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4ZWNDbG9zZU1vZGFsKTtcbiAgc2l0ZS5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgcmVwby5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcblxuICBib3guYXBwZW5kQ2hpbGQoaDMpO1xuICBib3guYXBwZW5kQ2hpbGQoaDYpO1xuICBib3guYXBwZW5kQ2hpbGQocGFyYSk7XG4gIGJveC5hcHBlbmRDaGlsZChsaW5rcyk7XG5cbiAgbGlua3MuYXBwZW5kQ2hpbGQoc2l0ZSk7XG4gIGxpbmtzLmFwcGVuZENoaWxkKHJlcG8pO1xuXG4gIGluZm9zLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgaW5mb3MuYXBwZW5kQ2hpbGQoYm94KTtcblxuICBmaWxsTW9kYWwod2luZG93cyk7XG4gIGZpbGxNb2RhbChpbmZvcyk7XG59XG5cbi8vIEZJTEwgQ09OVEVOVFxuXG4vLyBpbmZvc1xuZnVuY3Rpb24gc2V0TGluayhsaW5rLCB0eXBlKSB7XG4gIGNvbnN0IGxpbmtCdXR0b24gPSBsaW5rcy5xdWVyeVNlbGVjdG9yKGBhLiR7dHlwZX1gKTtcblxuICBsaW5rQnV0dG9uLmhyZWYgPSBsaW5rO1xuICBsaW5rQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbn1cblxuZnVuY3Rpb24gZmlsbENvbnRlbnQoZSkge1xuICBjb25zdCBjbGllbnRJRCA9IGUudGFyZ2V0LmRhdGFzZXQuY2xpZW50O1xuXG4gIGdldEltYWdlU2xpZGUoY2xpZW50SUQpO1xuXG4gIGgzLnRleHRDb250ZW50ID0gcG9ydGZvbGlvW2NsaWVudElEXS50aXRsZTtcbiAgaDYudGV4dENvbnRlbnQgPSBwb3J0Zm9saW9bY2xpZW50SURdLnRhZ3M7XG4gIHBhcmEudGV4dENvbnRlbnQgPSBwb3J0Zm9saW9bY2xpZW50SURdLnRleHQ7XG5cbiAgaWYgKHZhbGlkYXRpb25PYmpQcm9wKHBvcnRmb2xpbywgY2xpZW50SUQsICdzaXRlJykpIHtcbiAgICBzZXRMaW5rKHBvcnRmb2xpb1tjbGllbnRJRF0uc2l0ZSwgJ3NpdGUnKTtcbiAgfVxuICBpZiAodmFsaWRhdGlvbk9ialByb3AocG9ydGZvbGlvLCBjbGllbnRJRCwgJ3JlcG8nKSkge1xuICAgIHNldExpbmsocG9ydGZvbGlvW2NsaWVudElEXS5yZXBvLCAncmVwbycpO1xuICB9XG5cbiAgc2hvd01vZGFsKGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQb3J0Zm9saW9FbGVtZW50cyhlKSB7XG4gIGNyZWF0ZVBvcnRmb2xpb01vZGFsKCk7XG4gIGZpbGxDb250ZW50KGUpO1xufVxuXG5tb2RhbFdyYXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleGVjQ2xvc2VNb2RhbCk7XG5idG5Qb3J0Zm9saW9PcGVuLmZvckVhY2goKGUpID0+IGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVQb3J0Zm9saW9FbGVtZW50cykpO1xuYnRuUG9ydGZvbGlvT3Blbi5mb3JFYWNoKChlKSA9PiBlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgY3JlYXRlUG9ydGZvbGlvRWxlbWVudHMpKTtcbiIsIi8vIFRvIHNhdmUgaW1hZ2VzIHVzZSB0aGlzIHBhdGg6ICdhc3NldHMvaW1hZ2VzL3BvcnRmb2xpby88Y2xpZW50TmFtZU9iamVjdD4vJ1xuLy8gMDEgdG8gJ2ltYWdlcycgbnVtYmVyIHRvIHVzZSBvbiBzbGlkZXJcblxuY29uc3QgcG9ydGZvbGlvID0ge1xuICAvLyBQb3J0Zm9saW8gY29udGVudFxuICByaXZpZXJhczoge1xuICAgIHRpdGxlOiAnUml2aWVyYXMgSG90ZWwnLFxuICAgIHRhZ3M6ICcjSmF2YVNjcmlwdCAjSFRNTDUgI0NTUycsXG4gICAgdGV4dDpcbiAgICAgICdEZXNlbnZvbHZpbWVudG8gZG8gY8OzZGlnbyBkbyBzaXRlIGRvIG1vdGVsIFJpdmllcmFzIEhvdGVsLiBMYXlvdXQgcG9yIEtpbmcgUHJvcGFnYW5kYS4nLFxuICAgIHNpdGU6ICdodHRwOi8vd3d3LnJpdmllcmFzaG90ZWwuY29tLmJyJyxcbiAgICBpbWFnZXM6IDMsXG4gIH0sXG5cbiAgamFncmFvMToge1xuICAgIHRpdGxlOiAnSmFncmFvIEJyYXppbCcsXG4gICAgdGFnczogJyNKYXZhU2NyaXB0ICNIVE1MNSAjQ1NTICNXb3JkUHJlc3MnLFxuICAgIHRleHQ6ICdEZXNlbnZvbHZpbWVudG8gZG8gc2l0ZSBiaWxpbmd1ZSBwYXJhIGV4cG9zacOnw6NvIGRlIHByb2R1dG9zIGRhIGV4cG9ydGFkb3JhIGRlIGZydXRhcyBKYWdyw6NvIEJyYXppbC4gTGF5b3V0IHBvciBTZXJnaW8gTGltYS4nLFxuICAgIHNpdGU6ICdodHRwOi8vamFncmFvYnJhemlsLmNvbScsXG4gICAgaW1hZ2VzOiAzLFxuICB9LFxuXG4gIGphZ3JhbzI6IHtcbiAgICB0aXRsZTogJ0phZ3JhbyBCcmF6aWwnLFxuICAgIHRhZ3M6ICcjSmF2YVNjcmlwdCAjSFRNTDUgI0NTUyAjV29yZFByZXNzJyxcbiAgICB0ZXh0OiAnUmVwYWdpbmHDp8OjbyBkbyBzaXRlIGRhIGVtcHJlc2EgSmFncmFvIEJyYXppbC4gTGF5b3V0IHBvciAzNjDCuiBBZ8OqbmNpYSBDcmlhdGl2YS4nLFxuICAgIHNpdGU6ICdodHRwOi8vamFncmFvYnJhemlsLmNvbScsXG4gICAgaW1hZ2VzOiA0LFxuICB9LFxuXG4gIGl0YXVuYToge1xuICAgIHRpdGxlOiAnSXRhw7puYSBBZHZpc29ycycsXG4gICAgdGFnczogJyNKYXZhU2NyaXB0ICNIVE1MNSAjQ1NTICNXZWJEZXNpZ24nLFxuICAgIHRleHQ6ICdTaXRlIGluc3RpdHVjaW9uYWwgZGEgZW1wcmVzYSBJdGHDum5hIEFkdmlzb3JzIGRvIFJKIGRlIGNvbnN0dWx0b3JpYSBmaW5hbmNlaXJhLicsXG4gICAgc2l0ZTogJ2h0dHBzOi8vd3d3Lml0YXVuYWNvbnN1bHRvcmlhLmNvbS5ici8nLFxuICAgIGltYWdlczogMyxcbiAgfSxcblxuICBtYXVhZWNvbnpvOiB7XG4gICAgdGl0bGU6ICdNYXVhICYgQ29uem8nLFxuICAgIHRhZ3M6ICcjSmF2YVNjcmlwdCAjSFRNTDUgI0NTUyAjV29yZFByZXNzJyxcbiAgICB0ZXh0OlxuICAgICAgJ1NpdGUgcGVuc2FkbyBlIGRlc2Vudm9sdmlkbyBjb20gbyBpbnR1aXRvIGRlIGNhcHRhw6fDo28gZGUgbm92b3MgY2xpZW50ZXMgcGFyYSBhIGVtcHJlc2EuIFBhcmEgYXRpbmdpciBvIHJlc3VsdGFkbyBkZSBjYXB0YcOnw6NvIGRlIGNsaWVudGVzLCBmaXplbW9zIGRpdmVyc2FzIGxhbmRpbmcgcGFnZXMgZGVudHJvIGRvIHNpdGUgcGFyYSBxdWUgY2FkYSB1bWEgcHVkZXNzZSBzZXIgZGl2dWxnYWRhIGluZGl2aWR1YWxtZW50ZSBqdW50byBhbyBidXNjYWRvcmVzLiBMYXlvdXQgcG9yIEp1bmlvciBNZW5kZXMuJyxcbiAgICBzaXRlOiAnaHR0cHM6Ly93d3cubWF1YWVjb256by5jb20uYnIvJyxcbiAgICBpbWFnZXM6IDMsXG4gIH0sXG5cbiAgaXJpczoge1xuICAgIHRpdGxlOiAnSXJpcyBMYWJvcmF0b3JpZXMnLFxuICAgIHRhZ3M6ICcjSFRNTDUgI0NTUyAjV29yZFByZXNzICNXUC1QbHVnaW5zJyxcbiAgICB0ZXh0OlxuICAgICAgJ1NpdGUgZGVzZW52b2x2aWRvIHBhcmEgYSBlbXByZXNhIG5vcnRlLWFtZXJpY2FuYSBlc3BlY2lhbGl6YWRhIGVtIGluc3Blw6fDo28gZSByZW1vw6fDo28gZGUgYW1pYW50byBlIG1vZm9zIGRlbnRybyBkZSBpbcOzdmVpcy4nLFxuICAgIHNpdGU6ICdodHRwOi8vd3d3LmlyaXNsYWJvcmF0b3JpZXMuY29tLycsXG4gICAgaW1hZ2VzOiA0LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9ydGZvbGlvO1xuIiwiaW1wb3J0ICdhbmltYXRlLmNzcyc7XG5pbXBvcnQgJ3Jlc2V0LWNzcyc7XG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi4vaW1hZ2VzL2Rldi5wbmcnO1xuXG5pbXBvcnQgJ0BtZGkvZm9udC9jc3MvbWF0ZXJpYWxkZXNpZ25pY29ucy5taW4uY3NzJztcblxuaW1wb3J0ICcuL3RoZW1lJztcbmltcG9ydCAnLi9hY3RpdmVMaW5rTWVudSc7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XG5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbG9hZGVyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gIGxvYWRlci5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XG4gIH0pO1xufSk7XG4iLCIoKCkgPT4ge1xyXG4gIGZ1bmN0aW9uIHNldFRoZW1lKHRoZW1lTmFtZSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgdGhlbWVOYW1lKTtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgPSB0aGVtZU5hbWU7XHJcbiAgfVxyXG5cclxuICAvLyBmdW5jdGlvbiB0byB0b2dnbGUgYmV0d2VlbiBsaWdodCBhbmQgZGFyayB0aGVtZVxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gIGZ1bmN0aW9uIHRvZ2dsZVRoZW1lKCkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpID09PSAndGhlbWUtZGFyaycpIHtcclxuICAgICAgc2V0VGhlbWUoJ2RlZmF1bHQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFRoZW1lKCdkYXJrJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgPT09ICd0aGVtZS1kYXJrJykge1xyXG4gICAgc2V0VGhlbWUoJ2RhcmsnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXInKS5jaGVja2VkID0gZmFsc2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNldFRoZW1lKCdkZWZhdWx0Jyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgfVxyXG59KSgpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybCArIFwiLi4vLi4vXCI7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwLFxuXHRcInZlbmRvcnNcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcG9ydGZvbGlvXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3BvcnRmb2xpb1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKDk1MCkpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyg3MDcpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=