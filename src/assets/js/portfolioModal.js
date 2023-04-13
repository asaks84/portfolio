import portfolio from './portfolioObj';
import {
  modal, showModal, closeModal, modalWrap,
} from './modal';
import { shiftSlide, getImageSlide } from './carousel';

const btnPortfolioOpen = document.querySelectorAll('#portfolio .description .btn');

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

// clear Carousel and close Modal
function cleanContent() {
  while (carousel.lastElementChild) {
    carousel.removeChild(carousel.lastChild);
  }
  closeModal();
  modalWrap.removeEventListener('transitionend', cleanContent);
}

function clearCarousel(e) {
  if (e.target.classList.contains('close')) {
    modalWrap.addEventListener('transitionend', cleanContent);
    modalWrap.classList.remove('visible');
  }
}

function hideButton(type) {
  const linkButton = links.querySelector(`a.${type}`);
  linkButton.classList.remove('visible');
}

// CREATING MODAL DOM
function createPortfolioModal() {
  // ordering Carousel elements
  windows.classList.add('window');
  carousel.classList.add('carousel');
  arrowLeft.classList.add('left', 'mdi', 'mdi-chevron-left-box');
  arrowRight.classList.add('right', 'mdi', 'mdi-chevron-right-box');

  arrowRight.addEventListener('click', () => { shiftSlide(-1); });
  arrowLeft.addEventListener('click', () => { shiftSlide(1); });

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

  closeBtn.addEventListener('click', clearCarousel);
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

  modal.appendChild(windows);
  modal.appendChild(infos);
}

// FILL CONTENT

// infos
function setLink(link, type) {
  const linkButton = links.querySelector(`a.${type}`);

  linkButton.href = link;
  linkButton.classList.add('visible');
}

function fillModal(e) {
  const btn = e.target.dataset.client;

  getImageSlide(btn);

  h3.textContent = portfolio[btn].title;
  h6.textContent = portfolio[btn].tags;
  para.textContent = portfolio[btn].text;

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

modalWrap.addEventListener('click', clearCarousel);
btnPortfolioOpen.forEach((e) => e.addEventListener('click', createPortfolioElements));
btnPortfolioOpen.forEach((e) => e.addEventListener('touchend', createPortfolioElements));
