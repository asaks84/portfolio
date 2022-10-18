import { fadeIn, fadeOut } from './fadeEffect';

const close = document.querySelector('#modal .close');
const modalWrap = document.querySelector('.modal-wrap');
const portfolio = document.querySelectorAll('.description');

function showModal() {
  fadeIn(modalWrap);
}

function closeModal(e) {
  if (e.target.classList.contains('close')) {
    fadeOut(modalWrap);
  }
}

portfolio.forEach((e) => e.addEventListener('click', showModal));
close.addEventListener('click', closeModal);
modalWrap.addEventListener('click', closeModal);

const carouselDiv = document.querySelector('.carousel');

const slideWidth = 700;
// const threshold = slideWidth / 3;

function shiftSlide(direction) {
  const slideFirst = document.querySelector('.carousel > div:first-child');
  const slideLast = document.querySelector('.carousel > div:last-child');

  if (carouselDiv.classList.contains('transition')) return;

  carouselDiv.classList.add('transition');
  carouselDiv.style.transform = `translateX(${direction * slideWidth}px)`;

  // here is where the magic begins!
  // have to change the background image

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
const next = document.querySelector('i.right');
const prev = document.querySelector('i.left');

next.addEventListener('click', () => {
  shiftSlide(-1);
});

prev.addEventListener('click', () => {
  shiftSlide(1);
});
