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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9AbWRpL2ZvbnQvY3NzL21hdGVyaWFsZGVzaWduaWNvbnMubWluLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5jc3MvYW5pbWF0ZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3Jlc2V0LWNzcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL2FjdGl2ZUxpbmtNZW51LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3NldHMvanMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9qcy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL3BhZ2VDb250ZW50TW9kYWwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9qcy9wb3J0Zm9saW9PYmouanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9qcy90aGVtZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgbWVudWxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21haW5uYXYgYScpO1xuY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWN0aW9uJyk7XG5cbmZ1bmN0aW9uIGNoYW5nZU1lbnUoKSB7XG4gIHNlY3Rpb25zLmZvckVhY2goKGUpID0+IHtcbiAgICBjb25zdCB0b3AgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBjb25zdCBvZmZzZXQgPSBlLm9mZnNldFRvcDtcbiAgICBjb25zdCBpZCA9IGUuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGNvbnN0IGhlYWRlcmhlaWdodCA9IDUwO1xuXG4gICAgaWYgKHRvcCA+PSBvZmZzZXQgLSBoZWFkZXJoZWlnaHQpIHtcbiAgICAgIG1lbnVsaW5rcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgaWYgKGl0ZW0uZ2V0QXR0cmlidXRlKCdocmVmJykgPT09IGAjJHtpZH1gKSB7XG4gICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG53aW5kb3cub25zY3JvbGwgPSAoKSA9PiBjaGFuZ2VNZW51KCk7XG53aW5kb3cub25sb2FkID0gKCkgPT4gY2hhbmdlTWVudSgpO1xuIiwiaW1wb3J0IHsgbW9kYWwgfSBmcm9tICcuL21vZGFsJztcbmltcG9ydCBwb3J0Zm9saW8gZnJvbSAnLi9wb3J0Zm9saW9PYmonO1xuXG5jb25zdCBjYXJvdXNlbERpdiA9IG1vZGFsO1xuXG5jb25zdCBzbGlkZVdpZHRoID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjYXJvdXNlbERpdikud2lkdGgpO1xuY29uc3QgZ2V0Q2Fyb3VzZWwgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwnKTtcblxuLy8gYWRqdXNlIHNpemUgZm9yIG1vYmlsZVxuZnVuY3Rpb24gc2V0V2lkdGgoc2xpZGUsIG51bSkge1xuICBjb25zdCBlbGVtU2xpZGUgPSBzbGlkZTtcbiAgaWYgKFxuICAgIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2lcbiAgICAgIC50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpXG4gICkge1xuICAgIGVsZW1TbGlkZS5zdHlsZS53aWR0aCA9IGAke3NsaWRlV2lkdGh9cHhgO1xuICAgIGdldENhcm91c2VsKCkuc3R5bGUubGVmdCA9IGAtJHtzbGlkZVdpZHRofXB4YDtcbiAgfVxuICBnZXRDYXJvdXNlbCgpLnN0eWxlLndpZHRoID0gYCR7c2xpZGVXaWR0aCAqIG51bX1weGA7XG59XG5cbi8vIHNoaWZ0IHNsaWRlXG5leHBvcnQgZnVuY3Rpb24gc2hpZnRTbGlkZShkaXJlY3Rpb24pIHtcbiAgY29uc3Qgc2xpZGVGaXJzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbCA+IGRpdjpmaXJzdC1jaGlsZCcpO1xuICBjb25zdCBzbGlkZUxhc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwgPiBkaXY6bGFzdC1jaGlsZCcpO1xuXG4gIGlmIChnZXRDYXJvdXNlbCgpLmNsYXNzTGlzdC5jb250YWlucygndHJhbnNpdGlvbicpKSByZXR1cm47XG5cbiAgZ2V0Q2Fyb3VzZWwoKS5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uJyk7XG4gIGdldENhcm91c2VsKCkuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtkaXJlY3Rpb24gKiBzbGlkZVdpZHRofXB4KWA7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgc2xpZGVGaXJzdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzbGlkZUxhc3QsIHNsaWRlRmlyc3QpO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAtMSkge1xuICAgICAgc2xpZGVMYXN0LnBhcmVudE5vZGUuYXBwZW5kKHNsaWRlRmlyc3QpO1xuICAgIH1cblxuICAgIGdldENhcm91c2VsKCkuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNpdGlvbicpO1xuICAgIGdldENhcm91c2VsKCkuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMHB4KSc7XG4gIH0sIDcwMCk7XG59XG5cbi8vIGNyZWF0ZSBpbWFnZSBzbGlkZVxuZnVuY3Rpb24gY3JlYXRlU2xpZGUoY2xpZW50LCBpbWFnZSkge1xuICBjb25zdCBmb2xkZXIgPSBgYXNzZXRzL2ltYWdlcy9wb3J0Zm9saW8vJHtjbGllbnR9YDtcbiAgY29uc3Qgc2xpZGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdmFsdWUgPSBpbWFnZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XG4gICAgbWluaW11bUludGVnZXJEaWdpdHM6IDIsXG4gICAgdXNlR3JvdXBpbmc6IGZhbHNlLFxuICB9KTtcblxuICBzZXRXaWR0aChzbGlkZURpdiwgcG9ydGZvbGlvW2NsaWVudF0uaW1hZ2VzKTtcbiAgc2xpZGVEaXYuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJyR7Zm9sZGVyfS8ke3ZhbHVlfS5qcGcnKSBjZW50ZXIgY2VudGVyL2NvdmVyYDtcbiAgZ2V0Q2Fyb3VzZWwoKS5hcHBlbmRDaGlsZChzbGlkZURpdik7XG59XG5cbi8vIHNlbGVjdCBpbWFnZSBzbGlkZVxuZXhwb3J0IGZ1bmN0aW9uIGdldEltYWdlU2xpZGUoY2xpZW50KSB7XG4gIGNvbnN0IG1heEltYWdlUG9ydGZvbGlvID0gcG9ydGZvbGlvW2NsaWVudF0uaW1hZ2VzO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IG1heEltYWdlUG9ydGZvbGlvOyBpICs9IDEpIHtcbiAgICBjcmVhdGVTbGlkZShjbGllbnQsIGkpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgbW9kYWxXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXAnKTtcbmV4cG9ydCBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpO1xuXG5jb25zdCBiaW5kZXIgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwgPiAuYmluZGVyJyk7XG5cbi8vIGZpbGwgbW9kYWxcbmV4cG9ydCBmdW5jdGlvbiBmaWxsTW9kYWwoY29udGVudCkge1xuICBtb2RhbC5hcHBlbmRDaGlsZChjb250ZW50KTtcbn1cblxuLy8gc2lkZSBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCB0b0Nsb3NlTW9kYWwgPSAoZSkgPT4gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbG9zZScpO1xuXG5mdW5jdGlvbiBzZXRNb2RhbFdpZHRoKCkge1xuICBtb2RhbC5zdHlsZS53aWR0aCA9IGJpbmRlcigpLm9mZnNldFdpZHRoO1xufVxuXG4vLyBvcGVuIG1vZGFsXG5leHBvcnQgZnVuY3Rpb24gc2hvd01vZGFsKCkge1xuICBzZXRNb2RhbFdpZHRoKCk7XG4gIG1vZGFsV3JhcC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG59XG5cbi8vIGNsZWFyIG1vZGFsXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJNb2RhbCgpIHtcbiAgd2hpbGUgKG1vZGFsLmZpcnN0Q2hpbGQpIHtcbiAgICBtb2RhbC5yZW1vdmVDaGlsZChtb2RhbC5sYXN0Q2hpbGQpO1xuICB9XG59XG5cbi8vIGNsb3NlIG1vZGFsXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VNb2RhbChlKSB7XG4gIGlmICh0b0Nsb3NlTW9kYWwoZSkpIHtcbiAgICBtb2RhbFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIGNsZWFyTW9kYWwoKTtcbiAgfVxufVxuXG4vLyBtb2RhbFdyYXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbiIsImltcG9ydCBwb3J0Zm9saW8gZnJvbSAnLi9wb3J0Zm9saW9PYmonO1xuaW1wb3J0IHsgc2hpZnRTbGlkZSwgZ2V0SW1hZ2VTbGlkZSB9IGZyb20gJy4vY2Fyb3VzZWwnO1xuaW1wb3J0IHtcbiAgZmlsbE1vZGFsLCBzaG93TW9kYWwsIGNsb3NlTW9kYWwsIG1vZGFsV3JhcCwgdG9DbG9zZU1vZGFsLFxufSBmcm9tICcuL21vZGFsJztcblxuY29uc3QgYnRuUG9ydGZvbGlvT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwb3J0Zm9saW8gLmRlc2NyaXB0aW9uIC5idG4nKTtcblxuLy8gY3JlYXRlaW5nIGJpbmRlciBjb250ZW50XG5jb25zdCBiaW5kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuLy8gY3JlYXRpbmcgY2Fyb3VzZWwgZWxlbWVudHNcbmNvbnN0IHdpbmRvd3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBhcnJvd0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5jb25zdCBhcnJvd1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuXG4vLyBjcmVhdGluZyBpbmZvIGVsZW1lbnRzXG5jb25zdCBpbmZvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5jb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbmNvbnN0IGg2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKTtcbmNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3Qgc2l0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbmNvbnN0IHJlcG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbi8vIFNJREUgRlVOQ1RJT05TXG5cbi8vIHZhbGlkYXRpb24gT2JqZWN0IGNvbnRlbnRcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5jb25zdCB2YWxpZGF0aW9uT2JqUHJvcCA9IChPYmosIGNsaWVudCwgUHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKE9ialtjbGllbnRdLCBQcm9wKTtcblxuLy8gY2xlYXIgQ2Fyb3VzZWxcbmZ1bmN0aW9uIGNsZWFyQ2Fyb3VzZWwoKSB7XG4gIHdoaWxlIChjYXJvdXNlbC5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgY2Fyb3VzZWwucmVtb3ZlQ2hpbGQoY2Fyb3VzZWwubGFzdENoaWxkKTtcbiAgfVxuICBtb2RhbFdyYXAucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGNsZWFyQ2Fyb3VzZWwpO1xufVxuXG5mdW5jdGlvbiBleGVjQ2xvc2VNb2RhbChlKSB7XG4gIGlmICh0b0Nsb3NlTW9kYWwoZSkpIHtcbiAgICBtb2RhbFdyYXAuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGNsZWFyQ2Fyb3VzZWwpO1xuICAgIGNsb3NlTW9kYWwoZSk7XG4gIH1cbn1cblxuLy8gQ1JFQVRJTkcgTU9EQUwgRE9NXG5mdW5jdGlvbiBjcmVhdGVQb3J0Zm9saW9Nb2RhbCgpIHtcbiAgLy8gb3JkZXJpbmcgQ2Fyb3VzZWwgZWxlbWVudHNcbiAgd2luZG93cy5jbGFzc0xpc3QuYWRkKCd3aW5kb3cnKTtcbiAgY2Fyb3VzZWwuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWwnKTtcbiAgYXJyb3dMZWZ0LmNsYXNzTGlzdC5hZGQoJ2xlZnQnLCAnbWRpJywgJ21kaS1jaGV2cm9uLWxlZnQtYm94Jyk7XG4gIGFycm93UmlnaHQuY2xhc3NMaXN0LmFkZCgncmlnaHQnLCAnbWRpJywgJ21kaS1jaGV2cm9uLXJpZ2h0LWJveCcpO1xuXG4gIGFycm93UmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNoaWZ0U2xpZGUoLTEpOyB9KTtcbiAgYXJyb3dMZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBzaGlmdFNsaWRlKDEpOyB9KTtcblxuICB3aW5kb3dzLmFwcGVuZENoaWxkKGNhcm91c2VsKTtcbiAgd2luZG93cy5hcHBlbmRDaGlsZChhcnJvd0xlZnQpO1xuICB3aW5kb3dzLmFwcGVuZENoaWxkKGFycm93UmlnaHQpO1xuXG4gIC8vIG9kZXJpbmcgaW5mb3MgZWxlbWVudHNcbiAgaW5mb3MuY2xhc3NMaXN0LmFkZCgnaW5mb3MnKTtcbiAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnY2xvc2UnLCAnbWRpJywgJ21kaS1jbG9zZScpO1xuICBib3guY2xhc3NMaXN0LmFkZCgnYm94Jyk7XG4gIGxpbmtzLmNsYXNzTGlzdC5hZGQoJ2xpbmtzJywgJ2ZsZXgnKTtcblxuICBzaXRlLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdzaXRlJyk7XG4gIHJlcG8uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ3JlcG8nKTtcblxuICBzaXRlLnRleHRDb250ZW50ID0gJ1NpdGUnO1xuICByZXBvLnRleHRDb250ZW50ID0gJ1JlcG9zaXTDs3Jpbyc7XG5cbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleGVjQ2xvc2VNb2RhbCk7XG4gIHNpdGUuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gIHJlcG8uc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG5cbiAgYm94LmFwcGVuZENoaWxkKGgzKTtcbiAgYm94LmFwcGVuZENoaWxkKGg2KTtcbiAgYm94LmFwcGVuZENoaWxkKHBhcmEpO1xuICBib3guYXBwZW5kQ2hpbGQobGlua3MpO1xuXG4gIGxpbmtzLmFwcGVuZENoaWxkKHNpdGUpO1xuICBsaW5rcy5hcHBlbmRDaGlsZChyZXBvKTtcblxuICBpbmZvcy5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gIGluZm9zLmFwcGVuZENoaWxkKGJveCk7XG5cbiAgYmluZGVyLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnYmluZGVyJyk7XG5cbiAgYmluZGVyLmFwcGVuZENoaWxkKHdpbmRvd3MpO1xuICBiaW5kZXIuYXBwZW5kQ2hpbGQoaW5mb3MpO1xuXG4gIGZpbGxNb2RhbChiaW5kZXIpO1xufVxuXG4vLyBGSUxMIENPTlRFTlRcblxuLy8gaW5mb3NcbmZ1bmN0aW9uIHNldExpbmsobGluaywgdHlwZSkge1xuICBjb25zdCBsaW5rQnV0dG9uID0gbGlua3MucXVlcnlTZWxlY3RvcihgYS4ke3R5cGV9YCk7XG5cbiAgbGlua0J1dHRvbi5ocmVmID0gbGluaztcbiAgbGlua0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG59XG5cbmZ1bmN0aW9uIGZpbGxDb250ZW50KGUpIHtcbiAgY29uc3QgY2xpZW50SUQgPSBlLnRhcmdldC5kYXRhc2V0LmNsaWVudDtcblxuICBnZXRJbWFnZVNsaWRlKGNsaWVudElEKTtcblxuICBoMy50ZXh0Q29udGVudCA9IHBvcnRmb2xpb1tjbGllbnRJRF0udGl0bGU7XG4gIGg2LnRleHRDb250ZW50ID0gcG9ydGZvbGlvW2NsaWVudElEXS50YWdzO1xuICBwYXJhLnRleHRDb250ZW50ID0gcG9ydGZvbGlvW2NsaWVudElEXS50ZXh0O1xuXG4gIGlmICh2YWxpZGF0aW9uT2JqUHJvcChwb3J0Zm9saW8sIGNsaWVudElELCAnc2l0ZScpKSB7XG4gICAgc2V0TGluayhwb3J0Zm9saW9bY2xpZW50SURdLnNpdGUsICdzaXRlJyk7XG4gIH1cbiAgaWYgKHZhbGlkYXRpb25PYmpQcm9wKHBvcnRmb2xpbywgY2xpZW50SUQsICdyZXBvJykpIHtcbiAgICBzZXRMaW5rKHBvcnRmb2xpb1tjbGllbnRJRF0ucmVwbywgJ3JlcG8nKTtcbiAgfVxuXG4gIHNob3dNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQb3J0Zm9saW9FbGVtZW50cyhlKSB7XG4gIGNyZWF0ZVBvcnRmb2xpb01vZGFsKCk7XG4gIGZpbGxDb250ZW50KGUpO1xufVxuXG5tb2RhbFdyYXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleGVjQ2xvc2VNb2RhbCk7XG5idG5Qb3J0Zm9saW9PcGVuLmZvckVhY2goKGUpID0+IGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVQb3J0Zm9saW9FbGVtZW50cykpO1xuYnRuUG9ydGZvbGlvT3Blbi5mb3JFYWNoKChlKSA9PiBlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgY3JlYXRlUG9ydGZvbGlvRWxlbWVudHMpKTtcbiIsIi8vIFRvIHNhdmUgaW1hZ2VzIHVzZSB0aGlzIHBhdGg6ICdhc3NldHMvaW1hZ2VzL3BvcnRmb2xpby88Y2xpZW50TmFtZU9iamVjdD4vJ1xuLy8gMDEgdG8gJ2ltYWdlcycgbnVtYmVyIHRvIHVzZSBvbiBzbGlkZXJcblxuY29uc3QgcG9ydGZvbGlvID0ge1xuICAvLyBQb3J0Zm9saW8gY29udGVudFxuICByaXZpZXJhczoge1xuICAgIHRpdGxlOiAnUml2aWVyYXMgSG90ZWwnLFxuICAgIHRhZ3M6ICcjSmF2YVNjcmlwdCAjSFRNTDUgI0NTUycsXG4gICAgdGV4dDpcbiAgICAgICdEZXNlbnZvbHZpbWVudG8gZG8gY8OzZGlnbyBkbyBzaXRlIGRvIG1vdGVsIFJpdmllcmFzIEhvdGVsLiBMYXlvdXQgcG9yIEtpbmcgUHJvcGFnYW5kYS4nLFxuICAgIHNpdGU6ICdodHRwOi8vd3d3LnJpdmllcmFzaG90ZWwuY29tLmJyJyxcbiAgICBpbWFnZXM6IDMsXG4gIH0sXG5cbiAgamFncmFvMToge1xuICAgIHRpdGxlOiAnSmFncmFvIEJyYXppbCcsXG4gICAgdGFnczogJyNKYXZhU2NyaXB0ICNIVE1MNSAjQ1NTICNXb3JkUHJlc3MnLFxuICAgIHRleHQ6ICdEZXNlbnZvbHZpbWVudG8gZG8gc2l0ZSBiaWxpbmd1ZSBwYXJhIGV4cG9zacOnw6NvIGRlIHByb2R1dG9zIGRhIGV4cG9ydGFkb3JhIGRlIGZydXRhcyBKYWdyw6NvIEJyYXppbC4gTGF5b3V0IHBvciBTZXJnaW8gTGltYS4nLFxuICAgIHNpdGU6ICdodHRwOi8vamFncmFvYnJhemlsLmNvbScsXG4gICAgaW1hZ2VzOiAzLFxuICB9LFxuXG4gIGphZ3JhbzI6IHtcbiAgICB0aXRsZTogJ0phZ3JhbyBCcmF6aWwnLFxuICAgIHRhZ3M6ICcjSmF2YVNjcmlwdCAjSFRNTDUgI0NTUyAjV29yZFByZXNzJyxcbiAgICB0ZXh0OiAnUmVwYWdpbmHDp8OjbyBkbyBzaXRlIGRhIGVtcHJlc2EgSmFncmFvIEJyYXppbC4gTGF5b3V0IHBvciAzNjDCuiBBZ8OqbmNpYSBDcmlhdGl2YS4nLFxuICAgIHNpdGU6ICdodHRwOi8vamFncmFvYnJhemlsLmNvbScsXG4gICAgaW1hZ2VzOiA0LFxuICB9LFxuXG4gIGl0YXVuYToge1xuICAgIHRpdGxlOiAnSXRhw7puYSBBZHZpc29ycycsXG4gICAgdGFnczogJyNKYXZhU2NyaXB0ICNIVE1MNSAjQ1NTICNXZWJEZXNpZ24nLFxuICAgIHRleHQ6ICdTaXRlIGluc3RpdHVjaW9uYWwgZGEgZW1wcmVzYSBJdGHDum5hIEFkdmlzb3JzIGRvIFJKIGRlIGNvbnN0dWx0b3JpYSBmaW5hbmNlaXJhLicsXG4gICAgc2l0ZTogJ2h0dHBzOi8vd3d3Lml0YXVuYWNvbnN1bHRvcmlhLmNvbS5ici8nLFxuICAgIGltYWdlczogMyxcbiAgfSxcblxuICBtYXVhZWNvbnpvOiB7XG4gICAgdGl0bGU6ICdNYXVhICYgQ29uem8nLFxuICAgIHRhZ3M6ICcjSmF2YVNjcmlwdCAjSFRNTDUgI0NTUyAjV29yZFByZXNzJyxcbiAgICB0ZXh0OlxuICAgICAgJ1NpdGUgcGVuc2FkbyBlIGRlc2Vudm9sdmlkbyBjb20gbyBpbnR1aXRvIGRlIGNhcHRhw6fDo28gZGUgbm92b3MgY2xpZW50ZXMgcGFyYSBhIGVtcHJlc2EuIFBhcmEgYXRpbmdpciBvIHJlc3VsdGFkbyBkZSBjYXB0YcOnw6NvIGRlIGNsaWVudGVzLCBmaXplbW9zIGRpdmVyc2FzIGxhbmRpbmcgcGFnZXMgZGVudHJvIGRvIHNpdGUgcGFyYSBxdWUgY2FkYSB1bWEgcHVkZXNzZSBzZXIgZGl2dWxnYWRhIGluZGl2aWR1YWxtZW50ZSBqdW50byBhbyBidXNjYWRvcmVzLiBMYXlvdXQgcG9yIEp1bmlvciBNZW5kZXMuJyxcbiAgICBzaXRlOiAnaHR0cHM6Ly93d3cubWF1YWVjb256by5jb20uYnIvJyxcbiAgICBpbWFnZXM6IDMsXG4gIH0sXG5cbiAgaXJpczoge1xuICAgIHRpdGxlOiAnSXJpcyBMYWJvcmF0b3JpZXMnLFxuICAgIHRhZ3M6ICcjSFRNTDUgI0NTUyAjV29yZFByZXNzICNXUC1QbHVnaW5zJyxcbiAgICB0ZXh0OlxuICAgICAgJ1NpdGUgZGVzZW52b2x2aWRvIHBhcmEgYSBlbXByZXNhIG5vcnRlLWFtZXJpY2FuYSBlc3BlY2lhbGl6YWRhIGVtIGluc3Blw6fDo28gZSByZW1vw6fDo28gZGUgYW1pYW50byBlIG1vZm9zIGRlbnRybyBkZSBpbcOzdmVpcy4nLFxuICAgIHNpdGU6ICdodHRwOi8vd3d3LmlyaXNsYWJvcmF0b3JpZXMuY29tLycsXG4gICAgaW1hZ2VzOiA0LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9ydGZvbGlvO1xuIiwiaW1wb3J0ICdhbmltYXRlLmNzcyc7XG5pbXBvcnQgJ3Jlc2V0LWNzcyc7XG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi4vaW1hZ2VzL2Rldi5wbmcnO1xuXG5pbXBvcnQgJ0BtZGkvZm9udC9jc3MvbWF0ZXJpYWxkZXNpZ25pY29ucy5taW4uY3NzJztcblxuaW1wb3J0ICcuL3RoZW1lJztcbmltcG9ydCAnLi9hY3RpdmVMaW5rTWVudSc7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XG5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbG9hZGVyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gIGxvYWRlci5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XG4gIH0pO1xufSk7XG4iLCIoKCkgPT4ge1xuICBmdW5jdGlvbiBzZXRUaGVtZSh0aGVtZU5hbWUpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCB0aGVtZU5hbWUpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgPSB0aGVtZU5hbWU7XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byB0b2dnbGUgYmV0d2VlbiBsaWdodCBhbmQgZGFyayB0aGVtZVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgZnVuY3Rpb24gdG9nZ2xlVGhlbWUoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpID09PSAndGhlbWUtZGFyaycpIHtcbiAgICAgIHNldFRoZW1lKCdkZWZhdWx0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRoZW1lKCdkYXJrJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpID09PSAndGhlbWUtZGFyaycpIHtcbiAgICBzZXRUaGVtZSgnZGFyaycpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXInKS5jaGVja2VkID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgc2V0VGhlbWUoJ2RlZmF1bHQnKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyJykuY2hlY2tlZCA9IHRydWU7XG4gIH1cbn0pKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybCArIFwiLi4vLi4vXCI7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwLFxuXHRcInZlbmRvcnNcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcG9ydGZvbGlvXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3BvcnRmb2xpb1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKDk1MCkpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyg3MjApKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=