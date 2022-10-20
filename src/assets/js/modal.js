// import portfolio from './portfolioObj';

import portfolio from './portfolioObj';

const close = document.querySelector('#modal .close');
const modalWrap = document.querySelector('.modal-wrap');
const btnOpen = document.querySelectorAll('.description .btn');
const carouselWindow = document.querySelector('#modal');
const divSlide = document.querySelectorAll('.carousel div');
const carouselDiv = document.querySelector('.carousel');
const next = document.querySelector('i.right');
const prev = document.querySelector('i.left');
const headline = carouselWindow.querySelector('.infos h3');
const tags = carouselWindow.querySelector('.infos h6');
const text = carouselWindow.querySelector('.infos p');
const linksDiv = carouselWindow.querySelector('div.links');

const slideWidth = parseFloat(window.getComputedStyle(carouselWindow).width);

// ADJUST SIZE FOR MOBILE

function setWidth() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      .test(navigator.userAgent)
  ) {
    divSlide.forEach((e) => { e.style.width = `${slideWidth}px`; });
    carouselDiv.style.left = `-${slideWidth}px`;
  }
}

setWidth();

// OPEN/CLOSE PORTFOLIO

function showModal() {
  modalWrap.classList.add('visible');
}

function closeModal(e) {
  if (e.target.classList.contains('close')) {
    modalWrap.classList.remove('visible');
  }
}

// FILL MODAL

// infos

function hideButton(type) {
  const linkButton = linksDiv.querySelector(`a.${type}`);
  linkButton.classList.remove('visible');
}

function setLink(link, type) {
  const linkButton = linksDiv.querySelector(`a.${type}`);

  linkButton.href = link;
  linkButton.classList.add('visible');
}
function fillModal(e) {
  const btn = e.target.dataset.client;

  headline.textContent = portfolio[btn].title;
  tags.textContent = portfolio[btn].tags;
  text.textContent = portfolio[btn].text;

  if (Object.prototype.hasOwnProperty.call(portfolio[btn], 'site')) {
    setLink(portfolio[btn].site, 'site');
  } else hideButton('site');
  if (Object.prototype.hasOwnProperty.call(portfolio[btn], 'repo')) {
    setLink(portfolio[btn].repo, 'repo');
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
