import { modal } from './modal';
import portfolio from './portfolioObj';
import testUserAgent, { preloadedImages } from './script';

const carouselDiv = modal;

const slideWidth = parseFloat(window.getComputedStyle(carouselDiv).width);
const getCarousel = () => document.querySelector('.carousel');

// adjuse size for mobile
function setWidth(slide, num) {
  const elemSlide = slide;
  if (testUserAgent) {
    elemSlide.style.width = `${slideWidth}px`;
    getCarousel().style.left = `-${slideWidth}px`;
  }
  getCarousel().style.width = `${slideWidth * num}px`;
}

// shift slide
export function shiftSlide(direction) {
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
  setWidth(slideDiv, portfolio[client].images);

  slideDiv.style.background = `url('${preloadedImages[client][image - 1].src}') center center/cover`;
  getCarousel().appendChild(slideDiv);
}

// select image slide
export function getImageSlide(client) {
  const maxImagePortfolio = portfolio[client].images;

  for (let i = 1; i <= maxImagePortfolio; i += 1) {
    createSlide(client, i);
  }
}
