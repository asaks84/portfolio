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

const binder = () => document.querySelector('#modal > .binder');

// fill modal
function fillModal(content) {
  modal.appendChild(content);
}

// side functions
const toCloseModal = (e) => e.target.classList.contains('close');

function setModalWidth() {
  modal.style.width = binder().offsetWidth;
}

// open modal
function showModal() {
  setModalWidth();
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

/***/ 720:
/*!*******************************************!*\
  !*** ./src/assets/js/pageContentModal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _portfolioObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolioObj */ 606);
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel */ 721);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ 822);




const btnPortfolioOpen = document.querySelectorAll('#portfolio .description .btn');

// createing binder content
const binder = document.createElement('div');

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

  binder.classList.add('flex', 'binder');

  binder.appendChild(windows);
  binder.appendChild(infos);

  (0,_modal__WEBPACK_IMPORTED_MODULE_2__.fillModal)(binder);
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

  (0,_modal__WEBPACK_IMPORTED_MODULE_2__.showModal)();
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__(720)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL21haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsR0FBRztBQUNqRDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QmdDO0FBQ087O0FBRXZDLG9CQUFvQix5Q0FBSzs7QUFFekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixXQUFXO0FBQzFDLG1DQUFtQyxXQUFXO0FBQzlDO0FBQ0EsaUNBQWlDLGlCQUFpQjtBQUNsRDs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdEQUFnRCx1QkFBdUI7O0FBRXZFO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QyxPQUFPO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxxQkFBcUIscURBQVM7QUFDOUIsc0NBQXNDLE9BQU8sR0FBRyxNQUFNO0FBQ3REO0FBQ0E7O0FBRUE7QUFDTztBQUNQLDRCQUE0QixxREFBUzs7QUFFckMsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRU87QUFDQTs7QUFFUDs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDdUM7QUFDZ0I7QUFHdEM7O0FBRWpCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUVBQTZCO0FBQy9COztBQUVBO0FBQ0EsTUFBTSxvREFBWTtBQUNsQixJQUFJLDhEQUEwQjtBQUM5QixJQUFJLGtEQUFVO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0MscURBQVUsT0FBTztBQUNoRSw4Q0FBOEMscURBQVUsTUFBTTs7QUFFOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFLGlEQUFTO0FBQ1g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QyxLQUFLOztBQUVuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxFQUFFLHdEQUFhOztBQUVmLG1CQUFtQixxREFBUztBQUM1QixtQkFBbUIscURBQVM7QUFDNUIscUJBQXFCLHFEQUFTOztBQUU5Qix3QkFBd0IscURBQVM7QUFDakMsWUFBWSxxREFBUztBQUNyQjtBQUNBLHdCQUF3QixxREFBUztBQUNqQyxZQUFZLHFEQUFTO0FBQ3JCOztBQUVBLEVBQUUsaURBQVM7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4REFBMEI7QUFDMUI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pESjtBQUNGO0FBQ1E7QUFDQTs7QUFFd0I7O0FBRWxDO0FBQ1M7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7QUNyQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9AbWRpL2ZvbnQvY3NzL21hdGVyaWFsZGVzaWduaWNvbnMubWluLmNzcz83NDdhIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmNzcy9hbmltYXRlLmNzcz9hN2U3Iiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9yZXNldC1jc3MvcmVzZXQuY3NzPzEwZjciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuc2Nzcz84N2ZiIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3NldHMvanMvYWN0aXZlTGlua01lbnUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9qcy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL21vZGFsLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3NldHMvanMvcGFnZUNvbnRlbnRNb2RhbC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL3BvcnRmb2xpb09iai5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL3RoZW1lLmpzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBtZW51bGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbWFpbm5hdiBhJyk7XG5jb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24nKTtcblxuZnVuY3Rpb24gY2hhbmdlTWVudSgpIHtcbiAgc2VjdGlvbnMuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGNvbnN0IHRvcCA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGNvbnN0IG9mZnNldCA9IGUub2Zmc2V0VG9wO1xuICAgIGNvbnN0IGlkID0gZS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgY29uc3QgaGVhZGVyaGVpZ2h0ID0gNTA7XG5cbiAgICBpZiAodG9wID49IG9mZnNldCAtIGhlYWRlcmhlaWdodCkge1xuICAgICAgbWVudWxpbmtzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSA9PT0gYCMke2lkfWApIHtcbiAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbndpbmRvdy5vbnNjcm9sbCA9ICgpID0+IGNoYW5nZU1lbnUoKTtcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiBjaGFuZ2VNZW51KCk7XG4iLCJpbXBvcnQgeyBtb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IHBvcnRmb2xpbyBmcm9tICcuL3BvcnRmb2xpb09iaic7XG5cbmNvbnN0IGNhcm91c2VsRGl2ID0gbW9kYWw7XG5cbmNvbnN0IHNsaWRlV2lkdGggPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNhcm91c2VsRGl2KS53aWR0aCk7XG5jb25zdCBnZXRDYXJvdXNlbCA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbCcpO1xuXG4vLyBhZGp1c2Ugc2l6ZSBmb3IgbW9iaWxlXG5mdW5jdGlvbiBzZXRXaWR0aChzbGlkZSwgbnVtKSB7XG4gIGNvbnN0IGVsZW1TbGlkZSA9IHNsaWRlO1xuICBpZiAoXG4gICAgL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaVxuICAgICAgLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudClcbiAgKSB7XG4gICAgZWxlbVNsaWRlLnN0eWxlLndpZHRoID0gYCR7c2xpZGVXaWR0aH1weGA7XG4gICAgZ2V0Q2Fyb3VzZWwoKS5zdHlsZS5sZWZ0ID0gYC0ke3NsaWRlV2lkdGh9cHhgO1xuICB9XG4gIGdldENhcm91c2VsKCkuc3R5bGUud2lkdGggPSBgJHtzbGlkZVdpZHRoICogbnVtfXB4YDtcbn1cblxuLy8gc2hpZnQgc2xpZGVcbmV4cG9ydCBmdW5jdGlvbiBzaGlmdFNsaWRlKGRpcmVjdGlvbikge1xuICBjb25zdCBzbGlkZUZpcnN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsID4gZGl2OmZpcnN0LWNoaWxkJyk7XG4gIGNvbnN0IHNsaWRlTGFzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbCA+IGRpdjpsYXN0LWNoaWxkJyk7XG5cbiAgaWYgKGdldENhcm91c2VsKCkuY2xhc3NMaXN0LmNvbnRhaW5zKCd0cmFuc2l0aW9uJykpIHJldHVybjtcblxuICBnZXRDYXJvdXNlbCgpLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24nKTtcbiAgZ2V0Q2Fyb3VzZWwoKS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2RpcmVjdGlvbiAqIHNsaWRlV2lkdGh9cHgpYDtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICBzbGlkZUZpcnN0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNsaWRlTGFzdCwgc2xpZGVGaXJzdCk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IC0xKSB7XG4gICAgICBzbGlkZUxhc3QucGFyZW50Tm9kZS5hcHBlbmQoc2xpZGVGaXJzdCk7XG4gICAgfVxuXG4gICAgZ2V0Q2Fyb3VzZWwoKS5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2l0aW9uJyk7XG4gICAgZ2V0Q2Fyb3VzZWwoKS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwcHgpJztcbiAgfSwgNzAwKTtcbn1cblxuLy8gY3JlYXRlIGltYWdlIHNsaWRlXG5mdW5jdGlvbiBjcmVhdGVTbGlkZShjbGllbnQsIGltYWdlKSB7XG4gIGNvbnN0IGZvbGRlciA9IGBhc3NldHMvaW1hZ2VzL3BvcnRmb2xpby8ke2NsaWVudH1gO1xuICBjb25zdCBzbGlkZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB2YWx1ZSA9IGltYWdlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcbiAgICBtaW5pbXVtSW50ZWdlckRpZ2l0czogMixcbiAgICB1c2VHcm91cGluZzogZmFsc2UsXG4gIH0pO1xuXG4gIHNldFdpZHRoKHNsaWRlRGl2LCBwb3J0Zm9saW9bY2xpZW50XS5pbWFnZXMpO1xuICBzbGlkZURpdi5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgnJHtmb2xkZXJ9LyR7dmFsdWV9LmpwZycpIGNlbnRlciBjZW50ZXIvY292ZXJgO1xuICBnZXRDYXJvdXNlbCgpLmFwcGVuZENoaWxkKHNsaWRlRGl2KTtcbn1cblxuLy8gc2VsZWN0IGltYWdlIHNsaWRlXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW1hZ2VTbGlkZShjbGllbnQpIHtcbiAgY29uc3QgbWF4SW1hZ2VQb3J0Zm9saW8gPSBwb3J0Zm9saW9bY2xpZW50XS5pbWFnZXM7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbWF4SW1hZ2VQb3J0Zm9saW87IGkgKz0gMSkge1xuICAgIGNyZWF0ZVNsaWRlKGNsaWVudCwgaSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBtb2RhbFdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcCcpO1xuZXhwb3J0IGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJyk7XG5cbmNvbnN0IGJpbmRlciA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCA+IC5iaW5kZXInKTtcblxuLy8gZmlsbCBtb2RhbFxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxNb2RhbChjb250ZW50KSB7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xufVxuXG4vLyBzaWRlIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IHRvQ2xvc2VNb2RhbCA9IChlKSA9PiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlJyk7XG5cbmZ1bmN0aW9uIHNldE1vZGFsV2lkdGgoKSB7XG4gIG1vZGFsLnN0eWxlLndpZHRoID0gYmluZGVyKCkub2Zmc2V0V2lkdGg7XG59XG5cbi8vIG9wZW4gbW9kYWxcbmV4cG9ydCBmdW5jdGlvbiBzaG93TW9kYWwoKSB7XG4gIHNldE1vZGFsV2lkdGgoKTtcbiAgbW9kYWxXcmFwLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbn1cblxuLy8gY2xlYXIgbW9kYWxcbmV4cG9ydCBmdW5jdGlvbiBjbGVhck1vZGFsKCkge1xuICB3aGlsZSAobW9kYWwuZmlyc3RDaGlsZCkge1xuICAgIG1vZGFsLnJlbW92ZUNoaWxkKG1vZGFsLmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuLy8gY2xvc2UgbW9kYWxcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1vZGFsKGUpIHtcbiAgaWYgKHRvQ2xvc2VNb2RhbChlKSkge1xuICAgIG1vZGFsV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgY2xlYXJNb2RhbCgpO1xuICB9XG59XG5cbi8vIG1vZGFsV3JhcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuIiwiaW1wb3J0IHBvcnRmb2xpbyBmcm9tICcuL3BvcnRmb2xpb09iaic7XG5pbXBvcnQgeyBzaGlmdFNsaWRlLCBnZXRJbWFnZVNsaWRlIH0gZnJvbSAnLi9jYXJvdXNlbCc7XG5pbXBvcnQge1xuICBmaWxsTW9kYWwsIHNob3dNb2RhbCwgY2xvc2VNb2RhbCwgbW9kYWxXcmFwLCB0b0Nsb3NlTW9kYWwsXG59IGZyb20gJy4vbW9kYWwnO1xuXG5jb25zdCBidG5Qb3J0Zm9saW9PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BvcnRmb2xpbyAuZGVzY3JpcHRpb24gLmJ0bicpO1xuXG4vLyBjcmVhdGVpbmcgYmluZGVyIGNvbnRlbnRcbmNvbnN0IGJpbmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4vLyBjcmVhdGluZyBjYXJvdXNlbCBlbGVtZW50c1xuY29uc3Qgd2luZG93cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGFycm93TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbmNvbnN0IGFycm93UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5cbi8vIGNyZWF0aW5nIGluZm8gZWxlbWVudHNcbmNvbnN0IGluZm9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbmNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuY29uc3QgaDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpO1xuY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBzaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuY29uc3QgcmVwbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuLy8gU0lERSBGVU5DVElPTlNcblxuLy8gdmFsaWRhdGlvbiBPYmplY3QgY29udGVudFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbmNvbnN0IHZhbGlkYXRpb25PYmpQcm9wID0gKE9iaiwgY2xpZW50LCBQcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoT2JqW2NsaWVudF0sIFByb3ApO1xuXG4vLyBjbGVhciBDYXJvdXNlbFxuZnVuY3Rpb24gY2xlYXJDYXJvdXNlbCgpIHtcbiAgd2hpbGUgKGNhcm91c2VsLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjYXJvdXNlbC5yZW1vdmVDaGlsZChjYXJvdXNlbC5sYXN0Q2hpbGQpO1xuICB9XG4gIG1vZGFsV3JhcC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgY2xlYXJDYXJvdXNlbCk7XG59XG5cbmZ1bmN0aW9uIGV4ZWNDbG9zZU1vZGFsKGUpIHtcbiAgaWYgKHRvQ2xvc2VNb2RhbChlKSkge1xuICAgIG1vZGFsV3JhcC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgY2xlYXJDYXJvdXNlbCk7XG4gICAgY2xvc2VNb2RhbChlKTtcbiAgfVxufVxuXG4vLyBDUkVBVElORyBNT0RBTCBET01cbmZ1bmN0aW9uIGNyZWF0ZVBvcnRmb2xpb01vZGFsKCkge1xuICAvLyBvcmRlcmluZyBDYXJvdXNlbCBlbGVtZW50c1xuICB3aW5kb3dzLmNsYXNzTGlzdC5hZGQoJ3dpbmRvdycpO1xuICBjYXJvdXNlbC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbCcpO1xuICBhcnJvd0xlZnQuY2xhc3NMaXN0LmFkZCgnbGVmdCcsICdtZGknLCAnbWRpLWNoZXZyb24tbGVmdC1ib3gnKTtcbiAgYXJyb3dSaWdodC5jbGFzc0xpc3QuYWRkKCdyaWdodCcsICdtZGknLCAnbWRpLWNoZXZyb24tcmlnaHQtYm94Jyk7XG5cbiAgYXJyb3dSaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc2hpZnRTbGlkZSgtMSk7IH0pO1xuICBhcnJvd0xlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNoaWZ0U2xpZGUoMSk7IH0pO1xuXG4gIHdpbmRvd3MuYXBwZW5kQ2hpbGQoY2Fyb3VzZWwpO1xuICB3aW5kb3dzLmFwcGVuZENoaWxkKGFycm93TGVmdCk7XG4gIHdpbmRvd3MuYXBwZW5kQ2hpbGQoYXJyb3dSaWdodCk7XG5cbiAgLy8gb2RlcmluZyBpbmZvcyBlbGVtZW50c1xuICBpbmZvcy5jbGFzc0xpc3QuYWRkKCdpbmZvcycpO1xuICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZScsICdtZGknLCAnbWRpLWNsb3NlJyk7XG4gIGJveC5jbGFzc0xpc3QuYWRkKCdib3gnKTtcbiAgbGlua3MuY2xhc3NMaXN0LmFkZCgnbGlua3MnLCAnZmxleCcpO1xuXG4gIHNpdGUuY2xhc3NMaXN0LmFkZCgnYnRuJywgJ3NpdGUnKTtcbiAgcmVwby5jbGFzc0xpc3QuYWRkKCdidG4nLCAncmVwbycpO1xuXG4gIHNpdGUudGV4dENvbnRlbnQgPSAnU2l0ZSc7XG4gIHJlcG8udGV4dENvbnRlbnQgPSAnUmVwb3NpdMOzcmlvJztcblxuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4ZWNDbG9zZU1vZGFsKTtcbiAgc2l0ZS5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgcmVwby5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcblxuICBib3guYXBwZW5kQ2hpbGQoaDMpO1xuICBib3guYXBwZW5kQ2hpbGQoaDYpO1xuICBib3guYXBwZW5kQ2hpbGQocGFyYSk7XG4gIGJveC5hcHBlbmRDaGlsZChsaW5rcyk7XG5cbiAgbGlua3MuYXBwZW5kQ2hpbGQoc2l0ZSk7XG4gIGxpbmtzLmFwcGVuZENoaWxkKHJlcG8pO1xuXG4gIGluZm9zLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgaW5mb3MuYXBwZW5kQ2hpbGQoYm94KTtcblxuICBiaW5kZXIuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdiaW5kZXInKTtcblxuICBiaW5kZXIuYXBwZW5kQ2hpbGQod2luZG93cyk7XG4gIGJpbmRlci5hcHBlbmRDaGlsZChpbmZvcyk7XG5cbiAgZmlsbE1vZGFsKGJpbmRlcik7XG59XG5cbi8vIEZJTEwgQ09OVEVOVFxuXG4vLyBpbmZvc1xuZnVuY3Rpb24gc2V0TGluayhsaW5rLCB0eXBlKSB7XG4gIGNvbnN0IGxpbmtCdXR0b24gPSBsaW5rcy5xdWVyeVNlbGVjdG9yKGBhLiR7dHlwZX1gKTtcblxuICBsaW5rQnV0dG9uLmhyZWYgPSBsaW5rO1xuICBsaW5rQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbn1cblxuZnVuY3Rpb24gZmlsbENvbnRlbnQoZSkge1xuICBjb25zdCBjbGllbnRJRCA9IGUudGFyZ2V0LmRhdGFzZXQuY2xpZW50O1xuXG4gIGdldEltYWdlU2xpZGUoY2xpZW50SUQpO1xuXG4gIGgzLnRleHRDb250ZW50ID0gcG9ydGZvbGlvW2NsaWVudElEXS50aXRsZTtcbiAgaDYudGV4dENvbnRlbnQgPSBwb3J0Zm9saW9bY2xpZW50SURdLnRhZ3M7XG4gIHBhcmEudGV4dENvbnRlbnQgPSBwb3J0Zm9saW9bY2xpZW50SURdLnRleHQ7XG5cbiAgaWYgKHZhbGlkYXRpb25PYmpQcm9wKHBvcnRmb2xpbywgY2xpZW50SUQsICdzaXRlJykpIHtcbiAgICBzZXRMaW5rKHBvcnRmb2xpb1tjbGllbnRJRF0uc2l0ZSwgJ3NpdGUnKTtcbiAgfVxuICBpZiAodmFsaWRhdGlvbk9ialByb3AocG9ydGZvbGlvLCBjbGllbnRJRCwgJ3JlcG8nKSkge1xuICAgIHNldExpbmsocG9ydGZvbGlvW2NsaWVudElEXS5yZXBvLCAncmVwbycpO1xuICB9XG5cbiAgc2hvd01vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvcnRmb2xpb0VsZW1lbnRzKGUpIHtcbiAgY3JlYXRlUG9ydGZvbGlvTW9kYWwoKTtcbiAgZmlsbENvbnRlbnQoZSk7XG59XG5cbm1vZGFsV3JhcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4ZWNDbG9zZU1vZGFsKTtcbmJ0blBvcnRmb2xpb09wZW4uZm9yRWFjaCgoZSkgPT4gZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVBvcnRmb2xpb0VsZW1lbnRzKSk7XG5idG5Qb3J0Zm9saW9PcGVuLmZvckVhY2goKGUpID0+IGUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBjcmVhdGVQb3J0Zm9saW9FbGVtZW50cykpO1xuIiwiLy8gVG8gc2F2ZSBpbWFnZXMgdXNlIHRoaXMgcGF0aDogJ2Fzc2V0cy9pbWFnZXMvcG9ydGZvbGlvLzxjbGllbnROYW1lT2JqZWN0Pi8nXG4vLyAwMSB0byAnaW1hZ2VzJyBudW1iZXIgdG8gdXNlIG9uIHNsaWRlclxuXG5jb25zdCBwb3J0Zm9saW8gPSB7XG4gIC8vIFBvcnRmb2xpbyBjb250ZW50XG4gIHJpdmllcmFzOiB7XG4gICAgdGl0bGU6ICdSaXZpZXJhcyBIb3RlbCcsXG4gICAgdGFnczogJyNKYXZhU2NyaXB0ICNIVE1MNSAjQ1NTJyxcbiAgICB0ZXh0OlxuICAgICAgJ0Rlc2Vudm9sdmltZW50byBkbyBjw7NkaWdvIGRvIHNpdGUgZG8gbW90ZWwgUml2aWVyYXMgSG90ZWwuIExheW91dCBwb3IgS2luZyBQcm9wYWdhbmRhLicsXG4gICAgc2l0ZTogJ2h0dHA6Ly93d3cucml2aWVyYXNob3RlbC5jb20uYnInLFxuICAgIGltYWdlczogMyxcbiAgfSxcblxuICBqYWdyYW8xOiB7XG4gICAgdGl0bGU6ICdKYWdyYW8gQnJhemlsJyxcbiAgICB0YWdzOiAnI0phdmFTY3JpcHQgI0hUTUw1ICNDU1MgI1dvcmRQcmVzcycsXG4gICAgdGV4dDogJ0Rlc2Vudm9sdmltZW50byBkbyBzaXRlIGJpbGluZ3VlIHBhcmEgZXhwb3Npw6fDo28gZGUgcHJvZHV0b3MgZGEgZXhwb3J0YWRvcmEgZGUgZnJ1dGFzIEphZ3LDo28gQnJhemlsLiBMYXlvdXQgcG9yIFNlcmdpbyBMaW1hLicsXG4gICAgc2l0ZTogJ2h0dHA6Ly9qYWdyYW9icmF6aWwuY29tJyxcbiAgICBpbWFnZXM6IDMsXG4gIH0sXG5cbiAgamFncmFvMjoge1xuICAgIHRpdGxlOiAnSmFncmFvIEJyYXppbCcsXG4gICAgdGFnczogJyNKYXZhU2NyaXB0ICNIVE1MNSAjQ1NTICNXb3JkUHJlc3MnLFxuICAgIHRleHQ6ICdSZXBhZ2luYcOnw6NvIGRvIHNpdGUgZGEgZW1wcmVzYSBKYWdyYW8gQnJhemlsLiBMYXlvdXQgcG9yIDM2MMK6IEFnw6puY2lhIENyaWF0aXZhLicsXG4gICAgc2l0ZTogJ2h0dHA6Ly9qYWdyYW9icmF6aWwuY29tJyxcbiAgICBpbWFnZXM6IDQsXG4gIH0sXG5cbiAgaXRhdW5hOiB7XG4gICAgdGl0bGU6ICdJdGHDum5hIEFkdmlzb3JzJyxcbiAgICB0YWdzOiAnI0phdmFTY3JpcHQgI0hUTUw1ICNDU1MgI1dlYkRlc2lnbicsXG4gICAgdGV4dDogJ1NpdGUgaW5zdGl0dWNpb25hbCBkYSBlbXByZXNhIEl0YcO6bmEgQWR2aXNvcnMgZG8gUkogZGUgY29uc3R1bHRvcmlhIGZpbmFuY2VpcmEuJyxcbiAgICBzaXRlOiAnaHR0cHM6Ly93d3cuaXRhdW5hY29uc3VsdG9yaWEuY29tLmJyLycsXG4gICAgaW1hZ2VzOiAzLFxuICB9LFxuXG4gIG1hdWFlY29uem86IHtcbiAgICB0aXRsZTogJ01hdWEgJiBDb256bycsXG4gICAgdGFnczogJyNKYXZhU2NyaXB0ICNIVE1MNSAjQ1NTICNXb3JkUHJlc3MnLFxuICAgIHRleHQ6XG4gICAgICAnU2l0ZSBwZW5zYWRvIGUgZGVzZW52b2x2aWRvIGNvbSBvIGludHVpdG8gZGUgY2FwdGHDp8OjbyBkZSBub3ZvcyBjbGllbnRlcyBwYXJhIGEgZW1wcmVzYS4gUGFyYSBhdGluZ2lyIG8gcmVzdWx0YWRvIGRlIGNhcHRhw6fDo28gZGUgY2xpZW50ZXMsIGZpemVtb3MgZGl2ZXJzYXMgbGFuZGluZyBwYWdlcyBkZW50cm8gZG8gc2l0ZSBwYXJhIHF1ZSBjYWRhIHVtYSBwdWRlc3NlIHNlciBkaXZ1bGdhZGEgaW5kaXZpZHVhbG1lbnRlIGp1bnRvIGFvIGJ1c2NhZG9yZXMuIExheW91dCBwb3IgSnVuaW9yIE1lbmRlcy4nLFxuICAgIHNpdGU6ICdodHRwczovL3d3dy5tYXVhZWNvbnpvLmNvbS5ici8nLFxuICAgIGltYWdlczogMyxcbiAgfSxcblxuICBpcmlzOiB7XG4gICAgdGl0bGU6ICdJcmlzIExhYm9yYXRvcmllcycsXG4gICAgdGFnczogJyNIVE1MNSAjQ1NTICNXb3JkUHJlc3MgI1dQLVBsdWdpbnMnLFxuICAgIHRleHQ6XG4gICAgICAnU2l0ZSBkZXNlbnZvbHZpZG8gcGFyYSBhIGVtcHJlc2Egbm9ydGUtYW1lcmljYW5hIGVzcGVjaWFsaXphZGEgZW0gaW5zcGXDp8OjbyBlIHJlbW/Dp8OjbyBkZSBhbWlhbnRvIGUgbW9mb3MgZGVudHJvIGRlIGltw7N2ZWlzLicsXG4gICAgc2l0ZTogJ2h0dHA6Ly93d3cuaXJpc2xhYm9yYXRvcmllcy5jb20vJyxcbiAgICBpbWFnZXM6IDQsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3J0Zm9saW87XG4iLCJpbXBvcnQgJ2FuaW1hdGUuY3NzJztcbmltcG9ydCAncmVzZXQtY3NzJztcbmltcG9ydCAnLi4vY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuLi9pbWFnZXMvZGV2LnBuZyc7XG5cbmltcG9ydCAnQG1kaS9mb250L2Nzcy9tYXRlcmlhbGRlc2lnbmljb25zLm1pbi5jc3MnO1xuXG5pbXBvcnQgJy4vdGhlbWUnO1xuaW1wb3J0ICcuL2FjdGl2ZUxpbmtNZW51JztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKTtcbmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBsb2FkZXIuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgbG9hZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdsb2FkZWQnKTtcbiAgfSk7XG59KTtcbiIsIigoKSA9PiB7XG4gIGZ1bmN0aW9uIHNldFRoZW1lKHRoZW1lTmFtZSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIHRoZW1lTmFtZSk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZSA9IHRoZW1lTmFtZTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIHRvZ2dsZSBiZXR3ZWVuIGxpZ2h0IGFuZCBkYXJrIHRoZW1lXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBmdW5jdGlvbiB0b2dnbGVUaGVtZSgpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgPT09ICd0aGVtZS1kYXJrJykge1xuICAgICAgc2V0VGhlbWUoJ2RlZmF1bHQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGhlbWUoJ2RhcmsnKTtcbiAgICB9XG4gIH1cblxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgPT09ICd0aGVtZS1kYXJrJykge1xuICAgIHNldFRoZW1lKCdkYXJrJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlcicpLmNoZWNrZWQgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBzZXRUaGVtZSgnZGVmYXVsdCcpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXInKS5jaGVja2VkID0gdHJ1ZTtcbiAgfVxufSkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi8uLi9cIjsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDAsXG5cdFwidmVuZG9yc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwb3J0Zm9saW9cIl0gPSBzZWxmW1wid2VicGFja0NodW5rcG9ydGZvbGlvXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oOTUwKSkpXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKDcyMCkpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==