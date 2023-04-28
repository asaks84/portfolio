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
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script */ 950);




const carouselDiv = _modal__WEBPACK_IMPORTED_MODULE_0__.modal;

const slideWidth = parseFloat(window.getComputedStyle(carouselDiv).width);
const getCarousel = () => document.querySelector('.carousel');

// adjuse size for mobile
function setWidth(slide, num) {
  const elemSlide = slide;
  if (_script__WEBPACK_IMPORTED_MODULE_2__["default"]) {
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animate.css */ 560);
/* harmony import */ var reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reset-css */ 412);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/style.scss */ 891);
/* harmony import */ var _images_dev_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/dev.png */ 688);
/* harmony import */ var _mdi_font_css_materialdesignicons_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/font/css/materialdesignicons.min.css */ 173);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme */ 675);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_theme__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _activeLinkMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activeLinkMenu */ 294);
/* harmony import */ var _activeLinkMenu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_activeLinkMenu__WEBPACK_IMPORTED_MODULE_6__);










const testUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
  .test(navigator.userAgent);

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

// set HR width

(function setContactHRStyle() {
  const divInfos = document.querySelector('section#contact .infos');
  const verticalLine = divInfos.querySelector('hr');
  const divContactInfo = divInfos.querySelector('.contactinfo');
  const footer = divInfos.querySelector('footer');

  if (testUserAgent) {
    return;
  }
  verticalLine.style.width = `${divInfos.offsetHeight + 20}px`;
  verticalLine.style.marginTop = `${divInfos.offsetHeight / 2}px`;
  divContactInfo.style.marginRight = `-${divInfos.offsetHeight / 3}px`;
  footer.style.width = `-${divContactInfo.offsetWidth}px`;
  footer.style.marginLeft = `-${divInfos.offsetHeight / 3}px`;
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testUserAgent);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9AbWRpL2ZvbnQvY3NzL21hdGVyaWFsZGVzaWduaWNvbnMubWluLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5jc3MvYW5pbWF0ZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3Jlc2V0LWNzcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL2FjdGl2ZUxpbmtNZW51LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3NldHMvanMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9qcy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL3BhZ2VDb250ZW50TW9kYWwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9qcy9wb3J0Zm9saW9PYmouanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9qcy90aGVtZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgbWVudWxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21haW5uYXYgYScpO1xuY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWN0aW9uJyk7XG5cbmZ1bmN0aW9uIGNoYW5nZU1lbnUoKSB7XG4gIHNlY3Rpb25zLmZvckVhY2goKGUpID0+IHtcbiAgICBjb25zdCB0b3AgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBjb25zdCBvZmZzZXQgPSBlLm9mZnNldFRvcDtcbiAgICBjb25zdCBpZCA9IGUuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGNvbnN0IGhlYWRlcmhlaWdodCA9IDUwO1xuXG4gICAgaWYgKHRvcCA+PSBvZmZzZXQgLSBoZWFkZXJoZWlnaHQpIHtcbiAgICAgIG1lbnVsaW5rcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgaWYgKGl0ZW0uZ2V0QXR0cmlidXRlKCdocmVmJykgPT09IGAjJHtpZH1gKSB7XG4gICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG53aW5kb3cub25zY3JvbGwgPSAoKSA9PiBjaGFuZ2VNZW51KCk7XG53aW5kb3cub25sb2FkID0gKCkgPT4gY2hhbmdlTWVudSgpO1xuIiwiaW1wb3J0IHsgbW9kYWwgfSBmcm9tICcuL21vZGFsJztcbmltcG9ydCBwb3J0Zm9saW8gZnJvbSAnLi9wb3J0Zm9saW9PYmonO1xuaW1wb3J0IHRlc3RVc2VyQWdlbnQgZnJvbSAnLi9zY3JpcHQnO1xuXG5jb25zdCBjYXJvdXNlbERpdiA9IG1vZGFsO1xuXG5jb25zdCBzbGlkZVdpZHRoID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjYXJvdXNlbERpdikud2lkdGgpO1xuY29uc3QgZ2V0Q2Fyb3VzZWwgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwnKTtcblxuLy8gYWRqdXNlIHNpemUgZm9yIG1vYmlsZVxuZnVuY3Rpb24gc2V0V2lkdGgoc2xpZGUsIG51bSkge1xuICBjb25zdCBlbGVtU2xpZGUgPSBzbGlkZTtcbiAgaWYgKHRlc3RVc2VyQWdlbnQpIHtcbiAgICBlbGVtU2xpZGUuc3R5bGUud2lkdGggPSBgJHtzbGlkZVdpZHRofXB4YDtcbiAgICBnZXRDYXJvdXNlbCgpLnN0eWxlLmxlZnQgPSBgLSR7c2xpZGVXaWR0aH1weGA7XG4gIH1cbiAgZ2V0Q2Fyb3VzZWwoKS5zdHlsZS53aWR0aCA9IGAke3NsaWRlV2lkdGggKiBudW19cHhgO1xufVxuXG4vLyBzaGlmdCBzbGlkZVxuZXhwb3J0IGZ1bmN0aW9uIHNoaWZ0U2xpZGUoZGlyZWN0aW9uKSB7XG4gIGNvbnN0IHNsaWRlRmlyc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwgPiBkaXY6Zmlyc3QtY2hpbGQnKTtcbiAgY29uc3Qgc2xpZGVMYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsID4gZGl2Omxhc3QtY2hpbGQnKTtcblxuICBpZiAoZ2V0Q2Fyb3VzZWwoKS5jbGFzc0xpc3QuY29udGFpbnMoJ3RyYW5zaXRpb24nKSkgcmV0dXJuO1xuXG4gIGdldENhcm91c2VsKCkuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbicpO1xuICBnZXRDYXJvdXNlbCgpLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7ZGlyZWN0aW9uICogc2xpZGVXaWR0aH1weClgO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmIChkaXJlY3Rpb24gPT09IDEpIHtcbiAgICAgIHNsaWRlRmlyc3QucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2xpZGVMYXN0LCBzbGlkZUZpcnN0KTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gLTEpIHtcbiAgICAgIHNsaWRlTGFzdC5wYXJlbnROb2RlLmFwcGVuZChzbGlkZUZpcnN0KTtcbiAgICB9XG5cbiAgICBnZXRDYXJvdXNlbCgpLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zaXRpb24nKTtcbiAgICBnZXRDYXJvdXNlbCgpLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDBweCknO1xuICB9LCA3MDApO1xufVxuXG4vLyBjcmVhdGUgaW1hZ2Ugc2xpZGVcbmZ1bmN0aW9uIGNyZWF0ZVNsaWRlKGNsaWVudCwgaW1hZ2UpIHtcbiAgY29uc3QgZm9sZGVyID0gYGFzc2V0cy9pbWFnZXMvcG9ydGZvbGlvLyR7Y2xpZW50fWA7XG4gIGNvbnN0IHNsaWRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHZhbHVlID0gaW1hZ2UudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge1xuICAgIG1pbmltdW1JbnRlZ2VyRGlnaXRzOiAyLFxuICAgIHVzZUdyb3VwaW5nOiBmYWxzZSxcbiAgfSk7XG5cbiAgc2V0V2lkdGgoc2xpZGVEaXYsIHBvcnRmb2xpb1tjbGllbnRdLmltYWdlcyk7XG4gIHNsaWRlRGl2LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcke2ZvbGRlcn0vJHt2YWx1ZX0uanBnJykgY2VudGVyIGNlbnRlci9jb3ZlcmA7XG4gIGdldENhcm91c2VsKCkuYXBwZW5kQ2hpbGQoc2xpZGVEaXYpO1xufVxuXG4vLyBzZWxlY3QgaW1hZ2Ugc2xpZGVcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbWFnZVNsaWRlKGNsaWVudCkge1xuICBjb25zdCBtYXhJbWFnZVBvcnRmb2xpbyA9IHBvcnRmb2xpb1tjbGllbnRdLmltYWdlcztcblxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBtYXhJbWFnZVBvcnRmb2xpbzsgaSArPSAxKSB7XG4gICAgY3JlYXRlU2xpZGUoY2xpZW50LCBpKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IG1vZGFsV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13cmFwJyk7XG5leHBvcnQgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKTtcblxuY29uc3QgYmluZGVyID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsID4gLmJpbmRlcicpO1xuXG4vLyBmaWxsIG1vZGFsXG5leHBvcnQgZnVuY3Rpb24gZmlsbE1vZGFsKGNvbnRlbnQpIHtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY29udGVudCk7XG59XG5cbi8vIHNpZGUgZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgdG9DbG9zZU1vZGFsID0gKGUpID0+IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xvc2UnKTtcblxuZnVuY3Rpb24gc2V0TW9kYWxXaWR0aCgpIHtcbiAgbW9kYWwuc3R5bGUud2lkdGggPSBiaW5kZXIoKS5vZmZzZXRXaWR0aDtcbn1cblxuLy8gb3BlbiBtb2RhbFxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNb2RhbCgpIHtcbiAgc2V0TW9kYWxXaWR0aCgpO1xuICBtb2RhbFdyYXAuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xufVxuXG4vLyBjbGVhciBtb2RhbFxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyTW9kYWwoKSB7XG4gIHdoaWxlIChtb2RhbC5maXJzdENoaWxkKSB7XG4gICAgbW9kYWwucmVtb3ZlQ2hpbGQobW9kYWwubGFzdENoaWxkKTtcbiAgfVxufVxuXG4vLyBjbG9zZSBtb2RhbFxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTW9kYWwoZSkge1xuICBpZiAodG9DbG9zZU1vZGFsKGUpKSB7XG4gICAgbW9kYWxXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICBjbGVhck1vZGFsKCk7XG4gIH1cbn1cblxuLy8gbW9kYWxXcmFwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG4iLCJpbXBvcnQgcG9ydGZvbGlvIGZyb20gJy4vcG9ydGZvbGlvT2JqJztcbmltcG9ydCB7IHNoaWZ0U2xpZGUsIGdldEltYWdlU2xpZGUgfSBmcm9tICcuL2Nhcm91c2VsJztcbmltcG9ydCB7XG4gIGZpbGxNb2RhbCwgc2hvd01vZGFsLCBjbG9zZU1vZGFsLCBtb2RhbFdyYXAsIHRvQ2xvc2VNb2RhbCxcbn0gZnJvbSAnLi9tb2RhbCc7XG5cbmNvbnN0IGJ0blBvcnRmb2xpb09wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcG9ydGZvbGlvIC5kZXNjcmlwdGlvbiAuYnRuJyk7XG5cbi8vIGNyZWF0ZWluZyBiaW5kZXIgY29udGVudFxuY29uc3QgYmluZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbi8vIGNyZWF0aW5nIGNhcm91c2VsIGVsZW1lbnRzXG5jb25zdCB3aW5kb3dzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgYXJyb3dMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuY29uc3QgYXJyb3dSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcblxuLy8gY3JlYXRpbmcgaW5mbyBlbGVtZW50c1xuY29uc3QgaW5mb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5jb25zdCBoNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2Jyk7XG5jb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuY29uc3QgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHNpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5jb25zdCByZXBvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4vLyBTSURFIEZVTkNUSU9OU1xuXG4vLyB2YWxpZGF0aW9uIE9iamVjdCBjb250ZW50XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuY29uc3QgdmFsaWRhdGlvbk9ialByb3AgPSAoT2JqLCBjbGllbnQsIFByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChPYmpbY2xpZW50XSwgUHJvcCk7XG5cbi8vIGNsZWFyIENhcm91c2VsXG5mdW5jdGlvbiBjbGVhckNhcm91c2VsKCkge1xuICB3aGlsZSAoY2Fyb3VzZWwubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIGNhcm91c2VsLnJlbW92ZUNoaWxkKGNhcm91c2VsLmxhc3RDaGlsZCk7XG4gIH1cbiAgbW9kYWxXcmFwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBjbGVhckNhcm91c2VsKTtcbn1cblxuZnVuY3Rpb24gZXhlY0Nsb3NlTW9kYWwoZSkge1xuICBpZiAodG9DbG9zZU1vZGFsKGUpKSB7XG4gICAgbW9kYWxXcmFwLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBjbGVhckNhcm91c2VsKTtcbiAgICBjbG9zZU1vZGFsKGUpO1xuICB9XG59XG5cbi8vIENSRUFUSU5HIE1PREFMIERPTVxuZnVuY3Rpb24gY3JlYXRlUG9ydGZvbGlvTW9kYWwoKSB7XG4gIC8vIG9yZGVyaW5nIENhcm91c2VsIGVsZW1lbnRzXG4gIHdpbmRvd3MuY2xhc3NMaXN0LmFkZCgnd2luZG93Jyk7XG4gIGNhcm91c2VsLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsJyk7XG4gIGFycm93TGVmdC5jbGFzc0xpc3QuYWRkKCdsZWZ0JywgJ21kaScsICdtZGktY2hldnJvbi1sZWZ0LWJveCcpO1xuICBhcnJvd1JpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0JywgJ21kaScsICdtZGktY2hldnJvbi1yaWdodC1ib3gnKTtcblxuICBhcnJvd1JpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBzaGlmdFNsaWRlKC0xKTsgfSk7XG4gIGFycm93TGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc2hpZnRTbGlkZSgxKTsgfSk7XG5cbiAgd2luZG93cy5hcHBlbmRDaGlsZChjYXJvdXNlbCk7XG4gIHdpbmRvd3MuYXBwZW5kQ2hpbGQoYXJyb3dMZWZ0KTtcbiAgd2luZG93cy5hcHBlbmRDaGlsZChhcnJvd1JpZ2h0KTtcblxuICAvLyBvZGVyaW5nIGluZm9zIGVsZW1lbnRzXG4gIGluZm9zLmNsYXNzTGlzdC5hZGQoJ2luZm9zJyk7XG4gIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJywgJ21kaScsICdtZGktY2xvc2UnKTtcbiAgYm94LmNsYXNzTGlzdC5hZGQoJ2JveCcpO1xuICBsaW5rcy5jbGFzc0xpc3QuYWRkKCdsaW5rcycsICdmbGV4Jyk7XG5cbiAgc2l0ZS5jbGFzc0xpc3QuYWRkKCdidG4nLCAnc2l0ZScpO1xuICByZXBvLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdyZXBvJyk7XG5cbiAgc2l0ZS50ZXh0Q29udGVudCA9ICdTaXRlJztcbiAgcmVwby50ZXh0Q29udGVudCA9ICdSZXBvc2l0w7NyaW8nO1xuXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhlY0Nsb3NlTW9kYWwpO1xuICBzaXRlLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICByZXBvLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuXG4gIGJveC5hcHBlbmRDaGlsZChoMyk7XG4gIGJveC5hcHBlbmRDaGlsZChoNik7XG4gIGJveC5hcHBlbmRDaGlsZChwYXJhKTtcbiAgYm94LmFwcGVuZENoaWxkKGxpbmtzKTtcblxuICBsaW5rcy5hcHBlbmRDaGlsZChzaXRlKTtcbiAgbGlua3MuYXBwZW5kQ2hpbGQocmVwbyk7XG5cbiAgaW5mb3MuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICBpbmZvcy5hcHBlbmRDaGlsZChib3gpO1xuXG4gIGJpbmRlci5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2JpbmRlcicpO1xuXG4gIGJpbmRlci5hcHBlbmRDaGlsZCh3aW5kb3dzKTtcbiAgYmluZGVyLmFwcGVuZENoaWxkKGluZm9zKTtcblxuICBmaWxsTW9kYWwoYmluZGVyKTtcbn1cblxuLy8gRklMTCBDT05URU5UXG5cbi8vIGluZm9zXG5mdW5jdGlvbiBzZXRMaW5rKGxpbmssIHR5cGUpIHtcbiAgY29uc3QgbGlua0J1dHRvbiA9IGxpbmtzLnF1ZXJ5U2VsZWN0b3IoYGEuJHt0eXBlfWApO1xuXG4gIGxpbmtCdXR0b24uaHJlZiA9IGxpbms7XG4gIGxpbmtCdXR0b24uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xufVxuXG5mdW5jdGlvbiBmaWxsQ29udGVudChlKSB7XG4gIGNvbnN0IGNsaWVudElEID0gZS50YXJnZXQuZGF0YXNldC5jbGllbnQ7XG5cbiAgZ2V0SW1hZ2VTbGlkZShjbGllbnRJRCk7XG5cbiAgaDMudGV4dENvbnRlbnQgPSBwb3J0Zm9saW9bY2xpZW50SURdLnRpdGxlO1xuICBoNi50ZXh0Q29udGVudCA9IHBvcnRmb2xpb1tjbGllbnRJRF0udGFncztcbiAgcGFyYS50ZXh0Q29udGVudCA9IHBvcnRmb2xpb1tjbGllbnRJRF0udGV4dDtcblxuICBpZiAodmFsaWRhdGlvbk9ialByb3AocG9ydGZvbGlvLCBjbGllbnRJRCwgJ3NpdGUnKSkge1xuICAgIHNldExpbmsocG9ydGZvbGlvW2NsaWVudElEXS5zaXRlLCAnc2l0ZScpO1xuICB9XG4gIGlmICh2YWxpZGF0aW9uT2JqUHJvcChwb3J0Zm9saW8sIGNsaWVudElELCAncmVwbycpKSB7XG4gICAgc2V0TGluayhwb3J0Zm9saW9bY2xpZW50SURdLnJlcG8sICdyZXBvJyk7XG4gIH1cblxuICBzaG93TW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUG9ydGZvbGlvRWxlbWVudHMoZSkge1xuICBjcmVhdGVQb3J0Zm9saW9Nb2RhbCgpO1xuICBmaWxsQ29udGVudChlKTtcbn1cblxubW9kYWxXcmFwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhlY0Nsb3NlTW9kYWwpO1xuYnRuUG9ydGZvbGlvT3Blbi5mb3JFYWNoKChlKSA9PiBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlUG9ydGZvbGlvRWxlbWVudHMpKTtcbmJ0blBvcnRmb2xpb09wZW4uZm9yRWFjaCgoZSkgPT4gZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGNyZWF0ZVBvcnRmb2xpb0VsZW1lbnRzKSk7XG4iLCIvLyBUbyBzYXZlIGltYWdlcyB1c2UgdGhpcyBwYXRoOiAnYXNzZXRzL2ltYWdlcy9wb3J0Zm9saW8vPGNsaWVudE5hbWVPYmplY3Q+Lydcbi8vIDAxIHRvICdpbWFnZXMnIG51bWJlciB0byB1c2Ugb24gc2xpZGVyXG5cbmNvbnN0IHBvcnRmb2xpbyA9IHtcbiAgLy8gUG9ydGZvbGlvIGNvbnRlbnRcbiAgcml2aWVyYXM6IHtcbiAgICB0aXRsZTogJ1JpdmllcmFzIEhvdGVsJyxcbiAgICB0YWdzOiAnI0phdmFTY3JpcHQgI0hUTUw1ICNDU1MnLFxuICAgIHRleHQ6XG4gICAgICAnRGVzZW52b2x2aW1lbnRvIGRvIGPDs2RpZ28gZG8gc2l0ZSBkbyBtb3RlbCBSaXZpZXJhcyBIb3RlbC4gTGF5b3V0IHBvciBLaW5nIFByb3BhZ2FuZGEuJyxcbiAgICBzaXRlOiAnaHR0cDovL3d3dy5yaXZpZXJhc2hvdGVsLmNvbS5icicsXG4gICAgaW1hZ2VzOiAzLFxuICB9LFxuXG4gIGphZ3JhbzE6IHtcbiAgICB0aXRsZTogJ0phZ3JhbyBCcmF6aWwnLFxuICAgIHRhZ3M6ICcjSmF2YVNjcmlwdCAjSFRNTDUgI0NTUyAjV29yZFByZXNzJyxcbiAgICB0ZXh0OiAnRGVzZW52b2x2aW1lbnRvIGRvIHNpdGUgYmlsaW5ndWUgcGFyYSBleHBvc2nDp8OjbyBkZSBwcm9kdXRvcyBkYSBleHBvcnRhZG9yYSBkZSBmcnV0YXMgSmFncsOjbyBCcmF6aWwuIExheW91dCBwb3IgU2VyZ2lvIExpbWEuJyxcbiAgICBzaXRlOiAnaHR0cDovL2phZ3Jhb2JyYXppbC5jb20nLFxuICAgIGltYWdlczogMyxcbiAgfSxcblxuICBqYWdyYW8yOiB7XG4gICAgdGl0bGU6ICdKYWdyYW8gQnJhemlsJyxcbiAgICB0YWdzOiAnI0phdmFTY3JpcHQgI0hUTUw1ICNDU1MgI1dvcmRQcmVzcycsXG4gICAgdGV4dDogJ1JlcGFnaW5hw6fDo28gZG8gc2l0ZSBkYSBlbXByZXNhIEphZ3JhbyBCcmF6aWwuIExheW91dCBwb3IgMzYwwrogQWfDqm5jaWEgQ3JpYXRpdmEuJyxcbiAgICBzaXRlOiAnaHR0cDovL2phZ3Jhb2JyYXppbC5jb20nLFxuICAgIGltYWdlczogNCxcbiAgfSxcblxuICBpdGF1bmE6IHtcbiAgICB0aXRsZTogJ0l0YcO6bmEgQWR2aXNvcnMnLFxuICAgIHRhZ3M6ICcjSmF2YVNjcmlwdCAjSFRNTDUgI0NTUyAjV2ViRGVzaWduJyxcbiAgICB0ZXh0OiAnU2l0ZSBpbnN0aXR1Y2lvbmFsIGRhIGVtcHJlc2EgSXRhw7puYSBBZHZpc29ycyBkbyBSSiBkZSBjb25zdHVsdG9yaWEgZmluYW5jZWlyYS4nLFxuICAgIHNpdGU6ICdodHRwczovL3d3dy5pdGF1bmFjb25zdWx0b3JpYS5jb20uYnIvJyxcbiAgICBpbWFnZXM6IDMsXG4gIH0sXG5cbiAgbWF1YWVjb256bzoge1xuICAgIHRpdGxlOiAnTWF1YSAmIENvbnpvJyxcbiAgICB0YWdzOiAnI0phdmFTY3JpcHQgI0hUTUw1ICNDU1MgI1dvcmRQcmVzcycsXG4gICAgdGV4dDpcbiAgICAgICdTaXRlIHBlbnNhZG8gZSBkZXNlbnZvbHZpZG8gY29tIG8gaW50dWl0byBkZSBjYXB0YcOnw6NvIGRlIG5vdm9zIGNsaWVudGVzIHBhcmEgYSBlbXByZXNhLiBQYXJhIGF0aW5naXIgbyByZXN1bHRhZG8gZGUgY2FwdGHDp8OjbyBkZSBjbGllbnRlcywgZml6ZW1vcyBkaXZlcnNhcyBsYW5kaW5nIHBhZ2VzIGRlbnRybyBkbyBzaXRlIHBhcmEgcXVlIGNhZGEgdW1hIHB1ZGVzc2Ugc2VyIGRpdnVsZ2FkYSBpbmRpdmlkdWFsbWVudGUganVudG8gYW8gYnVzY2Fkb3Jlcy4gTGF5b3V0IHBvciBKdW5pb3IgTWVuZGVzLicsXG4gICAgc2l0ZTogJ2h0dHBzOi8vd3d3Lm1hdWFlY29uem8uY29tLmJyLycsXG4gICAgaW1hZ2VzOiAzLFxuICB9LFxuXG4gIGlyaXM6IHtcbiAgICB0aXRsZTogJ0lyaXMgTGFib3JhdG9yaWVzJyxcbiAgICB0YWdzOiAnI0hUTUw1ICNDU1MgI1dvcmRQcmVzcyAjV1AtUGx1Z2lucycsXG4gICAgdGV4dDpcbiAgICAgICdTaXRlIGRlc2Vudm9sdmlkbyBwYXJhIGEgZW1wcmVzYSBub3J0ZS1hbWVyaWNhbmEgZXNwZWNpYWxpemFkYSBlbSBpbnNwZcOnw6NvIGUgcmVtb8Onw6NvIGRlIGFtaWFudG8gZSBtb2ZvcyBkZW50cm8gZGUgaW3Ds3ZlaXMuJyxcbiAgICBzaXRlOiAnaHR0cDovL3d3dy5pcmlzbGFib3JhdG9yaWVzLmNvbS8nLFxuICAgIGltYWdlczogNCxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvcnRmb2xpbztcbiIsImltcG9ydCAnYW5pbWF0ZS5jc3MnO1xuaW1wb3J0ICdyZXNldC1jc3MnO1xuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4uL2ltYWdlcy9kZXYucG5nJztcblxuaW1wb3J0ICdAbWRpL2ZvbnQvY3NzL21hdGVyaWFsZGVzaWduaWNvbnMubWluLmNzcyc7XG5cbmltcG9ydCAnLi90aGVtZSc7XG5pbXBvcnQgJy4vYWN0aXZlTGlua01lbnUnO1xuXG5jb25zdCB0ZXN0VXNlckFnZW50ID0gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaVxuICAudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKTtcbmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBsb2FkZXIuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgbG9hZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdsb2FkZWQnKTtcbiAgfSk7XG59KTtcblxuLy8gc2V0IEhSIHdpZHRoXG5cbihmdW5jdGlvbiBzZXRDb250YWN0SFJTdHlsZSgpIHtcbiAgY29uc3QgZGl2SW5mb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uI2NvbnRhY3QgLmluZm9zJyk7XG4gIGNvbnN0IHZlcnRpY2FsTGluZSA9IGRpdkluZm9zLnF1ZXJ5U2VsZWN0b3IoJ2hyJyk7XG4gIGNvbnN0IGRpdkNvbnRhY3RJbmZvID0gZGl2SW5mb3MucXVlcnlTZWxlY3RvcignLmNvbnRhY3RpbmZvJyk7XG4gIGNvbnN0IGZvb3RlciA9IGRpdkluZm9zLnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuXG4gIGlmICh0ZXN0VXNlckFnZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZlcnRpY2FsTGluZS5zdHlsZS53aWR0aCA9IGAke2RpdkluZm9zLm9mZnNldEhlaWdodCArIDIwfXB4YDtcbiAgdmVydGljYWxMaW5lLnN0eWxlLm1hcmdpblRvcCA9IGAke2RpdkluZm9zLm9mZnNldEhlaWdodCAvIDJ9cHhgO1xuICBkaXZDb250YWN0SW5mby5zdHlsZS5tYXJnaW5SaWdodCA9IGAtJHtkaXZJbmZvcy5vZmZzZXRIZWlnaHQgLyAzfXB4YDtcbiAgZm9vdGVyLnN0eWxlLndpZHRoID0gYC0ke2RpdkNvbnRhY3RJbmZvLm9mZnNldFdpZHRofXB4YDtcbiAgZm9vdGVyLnN0eWxlLm1hcmdpbkxlZnQgPSBgLSR7ZGl2SW5mb3Mub2Zmc2V0SGVpZ2h0IC8gM31weGA7XG59KCkpO1xuXG5leHBvcnQgZGVmYXVsdCB0ZXN0VXNlckFnZW50O1xuIiwiKCgpID0+IHtcbiAgZnVuY3Rpb24gc2V0VGhlbWUodGhlbWVOYW1lKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgdGhlbWVOYW1lKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lID0gdGhlbWVOYW1lO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gdG9nZ2xlIGJldHdlZW4gbGlnaHQgYW5kIGRhcmsgdGhlbWVcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIGZ1bmN0aW9uIHRvZ2dsZVRoZW1lKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSA9PT0gJ3RoZW1lLWRhcmsnKSB7XG4gICAgICBzZXRUaGVtZSgnZGVmYXVsdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaGVtZSgnZGFyaycpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSA9PT0gJ3RoZW1lLWRhcmsnKSB7XG4gICAgc2V0VGhlbWUoJ2RhcmsnKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyJykuY2hlY2tlZCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHNldFRoZW1lKCdkZWZhdWx0Jyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlcicpLmNoZWNrZWQgPSB0cnVlO1xuICB9XG59KSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmwgKyBcIi4uLy4uL1wiOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMCxcblx0XCJ2ZW5kb3JzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3BvcnRmb2xpb1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwb3J0Zm9saW9cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyg5NTApKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oNzIwKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9