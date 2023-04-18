import portfolio from './portfolioObj';
import { shiftSlide, getImageSlide } from './carousel';
import {
  fillModal, showModal, closeModal, modalWrap, toCloseModal,
} from './modal';

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
  modalWrap.removeEventListener('transitionend', clearCarousel);
}

function execCloseModal(e) {
  if (toCloseModal(e)) {
    modalWrap.addEventListener('transitionend', clearCarousel);
    closeModal(e);
  }
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

  fillModal(binder);
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

  getImageSlide(clientID);

  h3.textContent = portfolio[clientID].title;
  h6.textContent = portfolio[clientID].tags;
  para.textContent = portfolio[clientID].text;

  if (validationObjProp(portfolio, clientID, 'site')) {
    setLink(portfolio[clientID].site, 'site');
  }
  if (validationObjProp(portfolio, clientID, 'repo')) {
    setLink(portfolio[clientID].repo, 'repo');
  }

  showModal();
}

function createPortfolioElements(e) {
  createPortfolioModal();
  fillContent(e);
}

modalWrap.addEventListener('click', execCloseModal);
btnPortfolioOpen.forEach((e) => e.addEventListener('click', createPortfolioElements));
btnPortfolioOpen.forEach((e) => e.addEventListener('touchend', createPortfolioElements));
