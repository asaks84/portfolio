import { fadeIn, fadeOut } from './fadeEffect';

// const carousel = document.querySelector('.carousel');
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
modalWrap.addEventListener('click', closeModal, { capture: true });

// function shiftSlide(direction) {
//   if (carousel.hasClass('transition')) return;
//   dragEnd = dragStart;
//   $(document).off('mouseup');
//   carousel
//     .off('mousemove')
//     .addClass('transition')
//     .css('transform', `translateX(${direction * slideWidth}px)`);
//   setTimeout(() => {
//     if (direction === 1) {
//       $('.slide:first').before($('.slide:last'));
//     } else if (direction === -1) {
//       $('.slide:last').after($('.slide:first'));
//     }
//     carousel.removeClass('transition');
//     carousel.css('transform', 'translateX(0px)');
//   }, 700);
// }
