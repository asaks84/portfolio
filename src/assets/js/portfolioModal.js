// eslint-disable-next-line import/no-cycle
import createPortfolioModal from './portfolioCreateModal';
import portfolio from './portfolioObj';

const modalWrap = document.querySelector('.modal-wrap');
const btnOpen = document.querySelectorAll('.description .btn');
const modal = document.querySelector('#modal');
const slideWidth = parseFloat(window.getComputedStyle(modal).width);

// ADJUST SIZE FOR MOBILE

function setWidth(slide, num) {
  const carouselDiv = modal.querySelector('.carousel');
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      .test(navigator.userAgent)
  ) {
    // eslint-disable-next-line no-param-reassign
    slide.style.width = `${slideWidth}px`;
    carouselDiv.style.left = `-${slideWidth}px`;
  }
  carouselDiv.style.width = `${slideWidth * num}px`;
}

// CLEAR SLIDES
function clearSlides() {
  while (modal.lastElementChild) {
    modal.removeChild(modal.lastChild);
  }
  // const slides = carouselDiv.querySelectorAll('div');
  // slides.forEach((e) => e.remove());
}

// OPEN/CLOSE PORTFOLIO
function showModal() {
  modalWrap.classList.add('visible');
}

// eslint-disable-next-line import/prefer-default-export
export function closeModal(e) {
  if (e.target.classList.contains('close')) {
    modalWrap.classList.remove('visible');
    clearSlides();
  }
}

function hideButton(type) {
  const linksDiv = modal.querySelector('div.links');
  const linkButton = linksDiv.querySelector(`a.${type}`);
  linkButton.classList.remove('visible');
}

// FILL MODAL

// create image slide

function createImageSlide(client, image) {
  const carouselDiv = modal.querySelector('.carousel');
  const folder = `assets/images/portfolio/${client}`;
  const slideDiv = document.createElement('div');
  const value = image.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  setWidth(slideDiv, portfolio[client].images);
  slideDiv.style.background = `url('${folder}/${value}.jpg') center center/cover`;
  carouselDiv.appendChild(slideDiv);
}

// select image slide

function selectBgImage(client) {
  const maxImagePortfolio = portfolio[client].images;

  for (let i = 1; i <= maxImagePortfolio; i += 1) {
    createImageSlide(client, i);
  }
}

// infos

function setLink(link, type) {
  const linksDiv = modal.querySelector('div.links');
  const linkButton = linksDiv.querySelector(`a.${type}`);

  linkButton.href = link;
  linkButton.classList.add('visible');
}
function fillModal(e) {
  const headline = modal.querySelector('.infos h3');
  const tags = modal.querySelector('.infos h6');
  const text = modal.querySelector('.infos p');
  const btn = e.target.dataset.client;
  selectBgImage(btn);
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
function createPortfolioElements(e) {
  createPortfolioModal();
  fillModal(e);
}

btnOpen.forEach((e) => e.addEventListener('click', createPortfolioElements));
btnOpen.forEach((e) => e.addEventListener('touchend', createPortfolioElements));
modalWrap.addEventListener('click', closeModal);

// SHIFT SLIDE

export function shiftSlide(direction) {
  const carouselDiv = modal.querySelector('.carousel');
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
