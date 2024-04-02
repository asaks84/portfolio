import 'animate.css';
import 'reset-css';
import '../css/style.scss';
import '../images/dev.png';

import '@mdi/font/css/materialdesignicons.min.css';

import './theme';
import './activeLinkMenu';
import portfolio from './portfolioObj';

export const preloadedImages = {};

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
  Object.keys(portfolio).forEach((client) => {
    preloadedImages[client] = [];
    for (let i = 1; i <= portfolio[client].images; i += 1) {
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

export default testUserAgent;
