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
  const slideDiv = document.createElement('div');
  setWidth(slideDiv, _portfolioObj__WEBPACK_IMPORTED_MODULE_1__["default"][client].images);

  slideDiv.style.background = `url('${_script__WEBPACK_IMPORTED_MODULE_2__.preloadedImages[client][image - 1].src}') center center/cover`;
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "preloadedImages": () => (/* binding */ preloadedImages)
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
/* harmony import */ var _portfolioObj__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolioObj */ 606);











const preloadedImages = {};

const testUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent,
);

const body = document.querySelector('body');
const loader = document.querySelector('.loader');
body.classList.add('loading');

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img');
  let imagesToLoad = images.length;
  const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
  let numCssLoaded = cssLinks.length;

  function check() {
    if (imagesToLoad === 0 && numCssLoaded === 0) {
      loader.style.opacity = '0';
      loader.addEventListener('transitionend', () => {
        loader.style.display = 'none';
        body.classList.remove('loading');
        body.classList.add('loaded');
      });
    }
  }

  function checkCssLoaded() {
    numCssLoaded -= 1;
    console.log(numCssLoaded);
    check();
  }
  const checkIfAllImagesLoaded = () => {
    imagesToLoad -= 1;
    check();
  };

  cssLinks.forEach((cssLink) => {
    // eslint-disable-next-line no-param-reassign
    cssLink.onload = checkCssLoaded();
  });

  images.forEach((image) => {
    if (image.complete) {
      imagesToLoad -= 1;
    } else {
      image.addEventListener('load', checkIfAllImagesLoaded);
    }
    check();
  });
});

const portfolioDescription = document.querySelectorAll('section div.description');
portfolioDescription.forEach((elem) => elem.addEventListener('transitionend', () => {
  const btn = elem.querySelector('.btn');
  if (parseInt(getComputedStyle(elem).opacity, 10) === 1) {
    btn.style.pointerEvents = 'all';
    return;
  }
  btn.style.pointerEvents = 'none';
}));

function preloadImages() {
  Object.keys(_portfolioObj__WEBPACK_IMPORTED_MODULE_7__["default"]).forEach((client) => {
    preloadedImages[client] = [];
    for (let i = 1; i <= _portfolioObj__WEBPACK_IMPORTED_MODULE_7__["default"][client].images; i += 1) {
      const paddedIndex = String(i).padStart(2, '0');
      const img = new Image();
      img.src = `assets/images/portfolio/${client}/${paddedIndex}.jpg`;
      preloadedImages[client].push(img);
    }
  });
}

preloadImages();
console.log(preloadedImages);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvQG1kaS9mb250L2Nzcy9tYXRlcmlhbGRlc2lnbmljb25zLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuY3NzL2FuaW1hdGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9yZXNldC1jc3MvcmVzZXQuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3NldHMvY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9qcy9hY3RpdmVMaW5rTWVudS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2pzL2Nhcm91c2VsLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3NldHMvanMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9qcy9wYWdlQ29udGVudE1vZGFsLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3NldHMvanMvcG9ydGZvbGlvT2JqLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3NldHMvanMvc2NyaXB0LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3NldHMvanMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IG1lbnVsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtYWlubmF2IGEnKTtcbmNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VjdGlvbicpO1xuXG5mdW5jdGlvbiBjaGFuZ2VNZW51KCkge1xuICBzZWN0aW9ucy5mb3JFYWNoKChlKSA9PiB7XG4gICAgY29uc3QgdG9wID0gd2luZG93LnNjcm9sbFk7XG4gICAgY29uc3Qgb2Zmc2V0ID0gZS5vZmZzZXRUb3A7XG4gICAgY29uc3QgaWQgPSBlLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBjb25zdCBoZWFkZXJoZWlnaHQgPSA1MDtcblxuICAgIGlmICh0b3AgPj0gb2Zmc2V0IC0gaGVhZGVyaGVpZ2h0KSB7XG4gICAgICBtZW51bGlua3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnaHJlZicpID09PSBgIyR7aWR9YCkge1xuICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxud2luZG93Lm9uc2Nyb2xsID0gKCkgPT4gY2hhbmdlTWVudSgpO1xud2luZG93Lm9ubG9hZCA9ICgpID0+IGNoYW5nZU1lbnUoKTtcbiIsImltcG9ydCB7IG1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgcG9ydGZvbGlvIGZyb20gJy4vcG9ydGZvbGlvT2JqJztcbmltcG9ydCB0ZXN0VXNlckFnZW50LCB7IHByZWxvYWRlZEltYWdlcyB9IGZyb20gJy4vc2NyaXB0JztcblxuY29uc3QgY2Fyb3VzZWxEaXYgPSBtb2RhbDtcblxuY29uc3Qgc2xpZGVXaWR0aCA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoY2Fyb3VzZWxEaXYpLndpZHRoKTtcbmNvbnN0IGdldENhcm91c2VsID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsJyk7XG5cbi8vIGFkanVzZSBzaXplIGZvciBtb2JpbGVcbmZ1bmN0aW9uIHNldFdpZHRoKHNsaWRlLCBudW0pIHtcbiAgY29uc3QgZWxlbVNsaWRlID0gc2xpZGU7XG4gIGlmICh0ZXN0VXNlckFnZW50KSB7XG4gICAgZWxlbVNsaWRlLnN0eWxlLndpZHRoID0gYCR7c2xpZGVXaWR0aH1weGA7XG4gICAgZ2V0Q2Fyb3VzZWwoKS5zdHlsZS5sZWZ0ID0gYC0ke3NsaWRlV2lkdGh9cHhgO1xuICB9XG4gIGdldENhcm91c2VsKCkuc3R5bGUud2lkdGggPSBgJHtzbGlkZVdpZHRoICogbnVtfXB4YDtcbn1cblxuLy8gc2hpZnQgc2xpZGVcbmV4cG9ydCBmdW5jdGlvbiBzaGlmdFNsaWRlKGRpcmVjdGlvbikge1xuICBjb25zdCBzbGlkZUZpcnN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsID4gZGl2OmZpcnN0LWNoaWxkJyk7XG4gIGNvbnN0IHNsaWRlTGFzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbCA+IGRpdjpsYXN0LWNoaWxkJyk7XG5cbiAgaWYgKGdldENhcm91c2VsKCkuY2xhc3NMaXN0LmNvbnRhaW5zKCd0cmFuc2l0aW9uJykpIHJldHVybjtcblxuICBnZXRDYXJvdXNlbCgpLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24nKTtcbiAgZ2V0Q2Fyb3VzZWwoKS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2RpcmVjdGlvbiAqIHNsaWRlV2lkdGh9cHgpYDtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICBzbGlkZUZpcnN0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNsaWRlTGFzdCwgc2xpZGVGaXJzdCk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IC0xKSB7XG4gICAgICBzbGlkZUxhc3QucGFyZW50Tm9kZS5hcHBlbmQoc2xpZGVGaXJzdCk7XG4gICAgfVxuXG4gICAgZ2V0Q2Fyb3VzZWwoKS5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2l0aW9uJyk7XG4gICAgZ2V0Q2Fyb3VzZWwoKS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwcHgpJztcbiAgfSwgNzAwKTtcbn1cblxuLy8gY3JlYXRlIGltYWdlIHNsaWRlXG5mdW5jdGlvbiBjcmVhdGVTbGlkZShjbGllbnQsIGltYWdlKSB7XG4gIGNvbnN0IHNsaWRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNldFdpZHRoKHNsaWRlRGl2LCBwb3J0Zm9saW9bY2xpZW50XS5pbWFnZXMpO1xuXG4gIHNsaWRlRGl2LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcke3ByZWxvYWRlZEltYWdlc1tjbGllbnRdW2ltYWdlIC0gMV0uc3JjfScpIGNlbnRlciBjZW50ZXIvY292ZXJgO1xuICBnZXRDYXJvdXNlbCgpLmFwcGVuZENoaWxkKHNsaWRlRGl2KTtcbn1cblxuLy8gc2VsZWN0IGltYWdlIHNsaWRlXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW1hZ2VTbGlkZShjbGllbnQpIHtcbiAgY29uc3QgbWF4SW1hZ2VQb3J0Zm9saW8gPSBwb3J0Zm9saW9bY2xpZW50XS5pbWFnZXM7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbWF4SW1hZ2VQb3J0Zm9saW87IGkgKz0gMSkge1xuICAgIGNyZWF0ZVNsaWRlKGNsaWVudCwgaSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBtb2RhbFdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcCcpO1xuZXhwb3J0IGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJyk7XG5cbmNvbnN0IGJpbmRlciA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCA+IC5iaW5kZXInKTtcblxuLy8gZmlsbCBtb2RhbFxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxNb2RhbChjb250ZW50KSB7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xufVxuXG4vLyBzaWRlIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IHRvQ2xvc2VNb2RhbCA9IChlKSA9PiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlJyk7XG5cbmZ1bmN0aW9uIHNldE1vZGFsV2lkdGgoKSB7XG4gIG1vZGFsLnN0eWxlLndpZHRoID0gYmluZGVyKCkub2Zmc2V0V2lkdGg7XG59XG5cbi8vIG9wZW4gbW9kYWxcbmV4cG9ydCBmdW5jdGlvbiBzaG93TW9kYWwoKSB7XG4gIHNldE1vZGFsV2lkdGgoKTtcbiAgbW9kYWxXcmFwLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbn1cblxuLy8gY2xlYXIgbW9kYWxcbmV4cG9ydCBmdW5jdGlvbiBjbGVhck1vZGFsKCkge1xuICB3aGlsZSAobW9kYWwuZmlyc3RDaGlsZCkge1xuICAgIG1vZGFsLnJlbW92ZUNoaWxkKG1vZGFsLmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuLy8gY2xvc2UgbW9kYWxcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1vZGFsKGUpIHtcbiAgaWYgKHRvQ2xvc2VNb2RhbChlKSkge1xuICAgIG1vZGFsV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgY2xlYXJNb2RhbCgpO1xuICB9XG59XG5cbi8vIG1vZGFsV3JhcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuIiwiaW1wb3J0IHBvcnRmb2xpbyBmcm9tICcuL3BvcnRmb2xpb09iaic7XG5pbXBvcnQgeyBzaGlmdFNsaWRlLCBnZXRJbWFnZVNsaWRlIH0gZnJvbSAnLi9jYXJvdXNlbCc7XG5pbXBvcnQge1xuICBmaWxsTW9kYWwsIHNob3dNb2RhbCwgY2xvc2VNb2RhbCwgbW9kYWxXcmFwLCB0b0Nsb3NlTW9kYWwsXG59IGZyb20gJy4vbW9kYWwnO1xuXG5jb25zdCBidG5Qb3J0Zm9saW9PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BvcnRmb2xpbyAuZGVzY3JpcHRpb24gLmJ0bicpO1xuXG4vLyBjcmVhdGVpbmcgYmluZGVyIGNvbnRlbnRcbmNvbnN0IGJpbmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4vLyBjcmVhdGluZyBjYXJvdXNlbCBlbGVtZW50c1xuY29uc3Qgd2luZG93cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGFycm93TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbmNvbnN0IGFycm93UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5cbi8vIGNyZWF0aW5nIGluZm8gZWxlbWVudHNcbmNvbnN0IGluZm9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbmNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuY29uc3QgaDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpO1xuY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBzaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuY29uc3QgcmVwbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuLy8gU0lERSBGVU5DVElPTlNcblxuLy8gdmFsaWRhdGlvbiBPYmplY3QgY29udGVudFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbmNvbnN0IHZhbGlkYXRpb25PYmpQcm9wID0gKE9iaiwgY2xpZW50LCBQcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoT2JqW2NsaWVudF0sIFByb3ApO1xuXG4vLyBjbGVhciBDYXJvdXNlbFxuZnVuY3Rpb24gY2xlYXJDYXJvdXNlbCgpIHtcbiAgd2hpbGUgKGNhcm91c2VsLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjYXJvdXNlbC5yZW1vdmVDaGlsZChjYXJvdXNlbC5sYXN0Q2hpbGQpO1xuICB9XG4gIG1vZGFsV3JhcC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgY2xlYXJDYXJvdXNlbCk7XG59XG5cbmZ1bmN0aW9uIGV4ZWNDbG9zZU1vZGFsKGUpIHtcbiAgaWYgKHRvQ2xvc2VNb2RhbChlKSkge1xuICAgIG1vZGFsV3JhcC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgY2xlYXJDYXJvdXNlbCk7XG4gICAgY2xvc2VNb2RhbChlKTtcbiAgfVxufVxuXG4vLyBDUkVBVElORyBNT0RBTCBET01cbmZ1bmN0aW9uIGNyZWF0ZVBvcnRmb2xpb01vZGFsKCkge1xuICAvLyBvcmRlcmluZyBDYXJvdXNlbCBlbGVtZW50c1xuICB3aW5kb3dzLmNsYXNzTGlzdC5hZGQoJ3dpbmRvdycpO1xuICBjYXJvdXNlbC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbCcpO1xuICBhcnJvd0xlZnQuY2xhc3NMaXN0LmFkZCgnbGVmdCcsICdtZGknLCAnbWRpLWNoZXZyb24tbGVmdC1ib3gnKTtcbiAgYXJyb3dSaWdodC5jbGFzc0xpc3QuYWRkKCdyaWdodCcsICdtZGknLCAnbWRpLWNoZXZyb24tcmlnaHQtYm94Jyk7XG5cbiAgYXJyb3dSaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc2hpZnRTbGlkZSgtMSk7IH0pO1xuICBhcnJvd0xlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNoaWZ0U2xpZGUoMSk7IH0pO1xuXG4gIHdpbmRvd3MuYXBwZW5kQ2hpbGQoY2Fyb3VzZWwpO1xuICB3aW5kb3dzLmFwcGVuZENoaWxkKGFycm93TGVmdCk7XG4gIHdpbmRvd3MuYXBwZW5kQ2hpbGQoYXJyb3dSaWdodCk7XG5cbiAgLy8gb2RlcmluZyBpbmZvcyBlbGVtZW50c1xuICBpbmZvcy5jbGFzc0xpc3QuYWRkKCdpbmZvcycpO1xuICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZScsICdtZGknLCAnbWRpLWNsb3NlJyk7XG4gIGJveC5jbGFzc0xpc3QuYWRkKCdib3gnKTtcbiAgbGlua3MuY2xhc3NMaXN0LmFkZCgnbGlua3MnLCAnZmxleCcpO1xuXG4gIHNpdGUuY2xhc3NMaXN0LmFkZCgnYnRuJywgJ3NpdGUnKTtcbiAgcmVwby5jbGFzc0xpc3QuYWRkKCdidG4nLCAncmVwbycpO1xuXG4gIHNpdGUudGV4dENvbnRlbnQgPSAnU2l0ZSc7XG4gIHJlcG8udGV4dENvbnRlbnQgPSAnUmVwb3NpdMOzcmlvJztcblxuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4ZWNDbG9zZU1vZGFsKTtcbiAgc2l0ZS5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgcmVwby5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcblxuICBib3guYXBwZW5kQ2hpbGQoaDMpO1xuICBib3guYXBwZW5kQ2hpbGQoaDYpO1xuICBib3guYXBwZW5kQ2hpbGQocGFyYSk7XG4gIGJveC5hcHBlbmRDaGlsZChsaW5rcyk7XG5cbiAgbGlua3MuYXBwZW5kQ2hpbGQoc2l0ZSk7XG4gIGxpbmtzLmFwcGVuZENoaWxkKHJlcG8pO1xuXG4gIGluZm9zLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgaW5mb3MuYXBwZW5kQ2hpbGQoYm94KTtcblxuICBiaW5kZXIuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdiaW5kZXInKTtcblxuICBiaW5kZXIuYXBwZW5kQ2hpbGQod2luZG93cyk7XG4gIGJpbmRlci5hcHBlbmRDaGlsZChpbmZvcyk7XG5cbiAgZmlsbE1vZGFsKGJpbmRlcik7XG59XG5cbi8vIEZJTEwgQ09OVEVOVFxuXG4vLyBpbmZvc1xuZnVuY3Rpb24gc2V0TGluayhsaW5rLCB0eXBlKSB7XG4gIGNvbnN0IGxpbmtCdXR0b24gPSBsaW5rcy5xdWVyeVNlbGVjdG9yKGBhLiR7dHlwZX1gKTtcblxuICBsaW5rQnV0dG9uLmhyZWYgPSBsaW5rO1xuICBsaW5rQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbn1cblxuZnVuY3Rpb24gZmlsbENvbnRlbnQoZSkge1xuICBjb25zdCBjbGllbnRJRCA9IGUudGFyZ2V0LmRhdGFzZXQuY2xpZW50O1xuXG4gIGdldEltYWdlU2xpZGUoY2xpZW50SUQpO1xuXG4gIGgzLnRleHRDb250ZW50ID0gcG9ydGZvbGlvW2NsaWVudElEXS50aXRsZTtcbiAgaDYudGV4dENvbnRlbnQgPSBwb3J0Zm9saW9bY2xpZW50SURdLnRhZ3M7XG4gIHBhcmEudGV4dENvbnRlbnQgPSBwb3J0Zm9saW9bY2xpZW50SURdLnRleHQ7XG5cbiAgaWYgKHZhbGlkYXRpb25PYmpQcm9wKHBvcnRmb2xpbywgY2xpZW50SUQsICdzaXRlJykpIHtcbiAgICBzZXRMaW5rKHBvcnRmb2xpb1tjbGllbnRJRF0uc2l0ZSwgJ3NpdGUnKTtcbiAgfVxuICBpZiAodmFsaWRhdGlvbk9ialByb3AocG9ydGZvbGlvLCBjbGllbnRJRCwgJ3JlcG8nKSkge1xuICAgIHNldExpbmsocG9ydGZvbGlvW2NsaWVudElEXS5yZXBvLCAncmVwbycpO1xuICB9XG5cbiAgc2hvd01vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvcnRmb2xpb0VsZW1lbnRzKGUpIHtcbiAgY3JlYXRlUG9ydGZvbGlvTW9kYWwoKTtcbiAgZmlsbENvbnRlbnQoZSk7XG59XG5cbm1vZGFsV3JhcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4ZWNDbG9zZU1vZGFsKTtcbmJ0blBvcnRmb2xpb09wZW4uZm9yRWFjaCgoZSkgPT4gZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVBvcnRmb2xpb0VsZW1lbnRzKSk7XG5idG5Qb3J0Zm9saW9PcGVuLmZvckVhY2goKGUpID0+IGUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBjcmVhdGVQb3J0Zm9saW9FbGVtZW50cykpO1xuIiwiLy8gVG8gc2F2ZSBpbWFnZXMgdXNlIHRoaXMgcGF0aDogJ2Fzc2V0cy9pbWFnZXMvcG9ydGZvbGlvLzxjbGllbnROYW1lT2JqZWN0Pi8nXG4vLyAwMSB0byAnaW1hZ2VzJyBudW1iZXIgdG8gdXNlIG9uIHNsaWRlclxuXG5jb25zdCBwb3J0Zm9saW8gPSB7XG4gIC8vIFBvcnRmb2xpbyBjb250ZW50XG4gIHJpdmllcmFzOiB7XG4gICAgdGl0bGU6ICdSaXZpZXJhcyBIb3RlbCcsXG4gICAgdGFnczogJyNKYXZhU2NyaXB0ICNIVE1MNSAjQ1NTJyxcbiAgICB0ZXh0OlxuICAgICAgJ0Rlc2Vudm9sdmltZW50byBkbyBjw7NkaWdvIGRvIHNpdGUgZG8gbW90ZWwgUml2aWVyYXMgSG90ZWwuIExheW91dCBwb3IgS2luZyBQcm9wYWdhbmRhLicsXG4gICAgc2l0ZTogJ2h0dHA6Ly93d3cucml2aWVyYXNob3RlbC5jb20uYnInLFxuICAgIGltYWdlczogMyxcbiAgfSxcblxuICBqYWdyYW8xOiB7XG4gICAgdGl0bGU6ICdKYWdyYW8gQnJhemlsJyxcbiAgICB0YWdzOiAnI0phdmFTY3JpcHQgI0hUTUw1ICNDU1MgI1dvcmRQcmVzcycsXG4gICAgdGV4dDogJ0Rlc2Vudm9sdmltZW50byBkbyBzaXRlIGJpbGluZ3VlIHBhcmEgZXhwb3Npw6fDo28gZGUgcHJvZHV0b3MgZGEgZXhwb3J0YWRvcmEgZGUgZnJ1dGFzIEphZ3LDo28gQnJhemlsLiBMYXlvdXQgcG9yIFNlcmdpbyBMaW1hLicsXG4gICAgc2l0ZTogJ2h0dHA6Ly9qYWdyYW9icmF6aWwuY29tJyxcbiAgICBpbWFnZXM6IDMsXG4gIH0sXG5cbiAgamFncmFvMjoge1xuICAgIHRpdGxlOiAnSmFncmFvIEJyYXppbCcsXG4gICAgdGFnczogJyNKYXZhU2NyaXB0ICNIVE1MNSAjQ1NTICNXb3JkUHJlc3MnLFxuICAgIHRleHQ6ICdSZXBhZ2luYcOnw6NvIGRvIHNpdGUgZGEgZW1wcmVzYSBKYWdyYW8gQnJhemlsLiBMYXlvdXQgcG9yIDM2MMK6IEFnw6puY2lhIENyaWF0aXZhLicsXG4gICAgc2l0ZTogJ2h0dHA6Ly9qYWdyYW9icmF6aWwuY29tJyxcbiAgICBpbWFnZXM6IDQsXG4gIH0sXG5cbiAgaXRhdW5hOiB7XG4gICAgdGl0bGU6ICdJdGHDum5hIEFkdmlzb3JzJyxcbiAgICB0YWdzOiAnI0phdmFTY3JpcHQgI0hUTUw1ICNDU1MgI1dlYkRlc2lnbicsXG4gICAgdGV4dDogJ1NpdGUgaW5zdGl0dWNpb25hbCBkYSBlbXByZXNhIEl0YcO6bmEgQWR2aXNvcnMgZG8gUkogZGUgY29uc3R1bHRvcmlhIGZpbmFuY2VpcmEuJyxcbiAgICBzaXRlOiAnaHR0cHM6Ly93d3cuaXRhdW5hY29uc3VsdG9yaWEuY29tLmJyLycsXG4gICAgaW1hZ2VzOiAzLFxuICB9LFxuXG4gIG1hdWFlY29uem86IHtcbiAgICB0aXRsZTogJ01hdWEgJiBDb256bycsXG4gICAgdGFnczogJyNKYXZhU2NyaXB0ICNIVE1MNSAjQ1NTICNXb3JkUHJlc3MnLFxuICAgIHRleHQ6XG4gICAgICAnU2l0ZSBwZW5zYWRvIGUgZGVzZW52b2x2aWRvIGNvbSBvIGludHVpdG8gZGUgY2FwdGHDp8OjbyBkZSBub3ZvcyBjbGllbnRlcyBwYXJhIGEgZW1wcmVzYS4gUGFyYSBhdGluZ2lyIG8gcmVzdWx0YWRvIGRlIGNhcHRhw6fDo28gZGUgY2xpZW50ZXMsIGZpemVtb3MgZGl2ZXJzYXMgbGFuZGluZyBwYWdlcyBkZW50cm8gZG8gc2l0ZSBwYXJhIHF1ZSBjYWRhIHVtYSBwdWRlc3NlIHNlciBkaXZ1bGdhZGEgaW5kaXZpZHVhbG1lbnRlIGp1bnRvIGFvIGJ1c2NhZG9yZXMuIExheW91dCBwb3IgSnVuaW9yIE1lbmRlcy4nLFxuICAgIHNpdGU6ICdodHRwczovL3d3dy5tYXVhZWNvbnpvLmNvbS5ici8nLFxuICAgIGltYWdlczogMyxcbiAgfSxcblxuICBpcmlzOiB7XG4gICAgdGl0bGU6ICdJcmlzIExhYm9yYXRvcmllcycsXG4gICAgdGFnczogJyNIVE1MNSAjQ1NTICNXb3JkUHJlc3MgI1dQLVBsdWdpbnMnLFxuICAgIHRleHQ6XG4gICAgICAnU2l0ZSBkZXNlbnZvbHZpZG8gcGFyYSBhIGVtcHJlc2Egbm9ydGUtYW1lcmljYW5hIGVzcGVjaWFsaXphZGEgZW0gaW5zcGXDp8OjbyBlIHJlbW/Dp8OjbyBkZSBhbWlhbnRvIGUgbW9mb3MgZGVudHJvIGRlIGltw7N2ZWlzLicsXG4gICAgc2l0ZTogJ2h0dHA6Ly93d3cuaXJpc2xhYm9yYXRvcmllcy5jb20vJyxcbiAgICBpbWFnZXM6IDQsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3J0Zm9saW87XG4iLCJpbXBvcnQgJ2FuaW1hdGUuY3NzJztcbmltcG9ydCAncmVzZXQtY3NzJztcbmltcG9ydCAnLi4vY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuLi9pbWFnZXMvZGV2LnBuZyc7XG5cbmltcG9ydCAnQG1kaS9mb250L2Nzcy9tYXRlcmlhbGRlc2lnbmljb25zLm1pbi5jc3MnO1xuXG5pbXBvcnQgJy4vdGhlbWUnO1xuaW1wb3J0ICcuL2FjdGl2ZUxpbmtNZW51JztcbmltcG9ydCBwb3J0Zm9saW8gZnJvbSAnLi9wb3J0Zm9saW9PYmonO1xuXG5leHBvcnQgY29uc3QgcHJlbG9hZGVkSW1hZ2VzID0ge307XG5cbmNvbnN0IHRlc3RVc2VyQWdlbnQgPSAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoXG4gIG5hdmlnYXRvci51c2VyQWdlbnQsXG4pO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpO1xuICBsZXQgaW1hZ2VzVG9Mb2FkID0gaW1hZ2VzLmxlbmd0aDtcbiAgY29uc3QgY3NzTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtcbiAgbGV0IG51bUNzc0xvYWRlZCA9IGNzc0xpbmtzLmxlbmd0aDtcblxuICBmdW5jdGlvbiBjaGVjaygpIHtcbiAgICBpZiAoaW1hZ2VzVG9Mb2FkID09PSAwICYmIG51bUNzc0xvYWRlZCA9PT0gMCkge1xuICAgICAgbG9hZGVyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICBsb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tDc3NMb2FkZWQoKSB7XG4gICAgbnVtQ3NzTG9hZGVkIC09IDE7XG4gICAgY29uc29sZS5sb2cobnVtQ3NzTG9hZGVkKTtcbiAgICBjaGVjaygpO1xuICB9XG4gIGNvbnN0IGNoZWNrSWZBbGxJbWFnZXNMb2FkZWQgPSAoKSA9PiB7XG4gICAgaW1hZ2VzVG9Mb2FkIC09IDE7XG4gICAgY2hlY2soKTtcbiAgfTtcblxuICBjc3NMaW5rcy5mb3JFYWNoKChjc3NMaW5rKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgY3NzTGluay5vbmxvYWQgPSBjaGVja0Nzc0xvYWRlZCgpO1xuICB9KTtcblxuICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbiAgICBpZiAoaW1hZ2UuY29tcGxldGUpIHtcbiAgICAgIGltYWdlc1RvTG9hZCAtPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgY2hlY2tJZkFsbEltYWdlc0xvYWRlZCk7XG4gICAgfVxuICAgIGNoZWNrKCk7XG4gIH0pO1xufSk7XG5cbmNvbnN0IHBvcnRmb2xpb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VjdGlvbiBkaXYuZGVzY3JpcHRpb24nKTtcbnBvcnRmb2xpb0Rlc2NyaXB0aW9uLmZvckVhY2goKGVsZW0pID0+IGVsZW0uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgY29uc3QgYnRuID0gZWxlbS5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XG4gIGlmIChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGVsZW0pLm9wYWNpdHksIDEwKSA9PT0gMSkge1xuICAgIGJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XG4gICAgcmV0dXJuO1xuICB9XG4gIGJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xufSkpO1xuXG5mdW5jdGlvbiBwcmVsb2FkSW1hZ2VzKCkge1xuICBPYmplY3Qua2V5cyhwb3J0Zm9saW8pLmZvckVhY2goKGNsaWVudCkgPT4ge1xuICAgIHByZWxvYWRlZEltYWdlc1tjbGllbnRdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcG9ydGZvbGlvW2NsaWVudF0uaW1hZ2VzOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHBhZGRlZEluZGV4ID0gU3RyaW5nKGkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltZy5zcmMgPSBgYXNzZXRzL2ltYWdlcy9wb3J0Zm9saW8vJHtjbGllbnR9LyR7cGFkZGVkSW5kZXh9LmpwZ2A7XG4gICAgICBwcmVsb2FkZWRJbWFnZXNbY2xpZW50XS5wdXNoKGltZyk7XG4gICAgfVxuICB9KTtcbn1cblxucHJlbG9hZEltYWdlcygpO1xuY29uc29sZS5sb2cocHJlbG9hZGVkSW1hZ2VzKTtcblxuLy8gc2V0IEhSIHdpZHRoXG5cbihmdW5jdGlvbiBzZXRDb250YWN0SFJTdHlsZSgpIHtcbiAgY29uc3QgZGl2SW5mb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uI2NvbnRhY3QgLmluZm9zJyk7XG4gIGNvbnN0IHZlcnRpY2FsTGluZSA9IGRpdkluZm9zLnF1ZXJ5U2VsZWN0b3IoJ2hyJyk7XG4gIGNvbnN0IGRpdkNvbnRhY3RJbmZvID0gZGl2SW5mb3MucXVlcnlTZWxlY3RvcignLmNvbnRhY3RpbmZvJyk7XG4gIGNvbnN0IGZvb3RlciA9IGRpdkluZm9zLnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuXG4gIGlmICh0ZXN0VXNlckFnZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZlcnRpY2FsTGluZS5zdHlsZS53aWR0aCA9IGAke2RpdkluZm9zLm9mZnNldEhlaWdodCArIDIwfXB4YDtcbiAgdmVydGljYWxMaW5lLnN0eWxlLm1hcmdpblRvcCA9IGAke2RpdkluZm9zLm9mZnNldEhlaWdodCAvIDJ9cHhgO1xuICBkaXZDb250YWN0SW5mby5zdHlsZS5tYXJnaW5SaWdodCA9IGAtJHtkaXZJbmZvcy5vZmZzZXRIZWlnaHQgLyAzfXB4YDtcbiAgZm9vdGVyLnN0eWxlLndpZHRoID0gYC0ke2RpdkNvbnRhY3RJbmZvLm9mZnNldFdpZHRofXB4YDtcbiAgZm9vdGVyLnN0eWxlLm1hcmdpbkxlZnQgPSBgLSR7ZGl2SW5mb3Mub2Zmc2V0SGVpZ2h0IC8gM31weGA7XG59KCkpO1xuXG5leHBvcnQgZGVmYXVsdCB0ZXN0VXNlckFnZW50O1xuIiwiKCgpID0+IHtcbiAgZnVuY3Rpb24gc2V0VGhlbWUodGhlbWVOYW1lKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgdGhlbWVOYW1lKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lID0gdGhlbWVOYW1lO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gdG9nZ2xlIGJldHdlZW4gbGlnaHQgYW5kIGRhcmsgdGhlbWVcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIGZ1bmN0aW9uIHRvZ2dsZVRoZW1lKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSA9PT0gJ3RoZW1lLWRhcmsnKSB7XG4gICAgICBzZXRUaGVtZSgnZGVmYXVsdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaGVtZSgnZGFyaycpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSA9PT0gJ3RoZW1lLWRhcmsnKSB7XG4gICAgc2V0VGhlbWUoJ2RhcmsnKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyJykuY2hlY2tlZCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHNldFRoZW1lKCdkZWZhdWx0Jyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlcicpLmNoZWNrZWQgPSB0cnVlO1xuICB9XG59KSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmwgKyBcIi4uLy4uL1wiOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMCxcblx0XCJ2ZW5kb3JzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3BvcnRmb2xpb1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwb3J0Zm9saW9cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyg5NTApKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oNzIwKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9