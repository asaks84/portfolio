const close = document.querySelector('#modal .close');
const modalWrap = document.querySelector('.modal-wrap');
const btnOpen = document.querySelectorAll('.description .btn');
const carouselWindow = document.querySelector('#modal');
const divSlide = document.querySelectorAll('.carousel div');
const carouselDiv = document.querySelector('.carousel');

const slideWidth = parseFloat(window.getComputedStyle(carouselWindow).width);

function setWidth() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    )
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
btnOpen.forEach((e) => e.addEventListener('click', showModal));
btnOpen.forEach((e) => e.addEventListener('touchend', showModal));
close.addEventListener('click', closeModal);
modalWrap.addEventListener('click', closeModal);

// SHIFT SLIDE

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
