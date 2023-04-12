import portfolio from './portfolioObj';
import {
  modal, showModal, closeModal, modalWrap,
} from './modal';

const slideWidth = parseFloat(window.getComputedStyle(modal).width);
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

// SHIFT SLIDE
function shiftSlide(direction) {
  const slideFirst = document.querySelector('.carousel > div:first-child');
  const slideLast = document.querySelector('.carousel > div:last-child');

  if (carousel.classList.contains('transition')) return;

  carousel.classList.add('transition');
  carousel.style.transform = `translateX(${direction * slideWidth}px)`;

  setTimeout(() => {
    if (direction === 1) {
      slideFirst.parentNode.insertBefore(slideLast, slideFirst);
    } else if (direction === -1) {
      slideLast.parentNode.append(slideFirst);
    }

    carousel.classList.remove('transition');
    carousel.style.transform = 'translateX(0px)';
  }, 700);
}

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

// adjuse size for mobile
function setWidth(slide, num) {
  const elemSlide = slide;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      .test(navigator.userAgent)
  ) {
    elemSlide.style.width = `${slideWidth}px`;
    carousel.style.left = `-${slideWidth}px`;
  }
  carousel.style.width = `${slideWidth * num}px`;
}

function hideButton(type) {
  const linkButton = links.querySelector(`a.${type}`);
  linkButton.classList.remove('visible');
}

// CREATING MODAL DOM
function createPortfolioModal() {
  // ordering Carousel images

  windows.classList.add('window');
  carousel.classList.add('carousel');
  arrowLeft.classList.add('left', 'mdi', 'mdi-chevron-left-box');
  arrowRight.classList.add('right', 'mdi', 'mdi-chevron-right-box');

  arrowRight.addEventListener('click', () => { shiftSlide(-1); });
  arrowLeft.addEventListener('click', () => { shiftSlide(1); });

  windows.appendChild(carousel);
  windows.appendChild(arrowLeft);
  windows.appendChild(arrowRight);

  // odering infos
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

// FILL MODAL

// create image slide
function createImageSlide(client, image) {
  const folder = `assets/images/portfolio/${client}`;
  const slideDiv = document.createElement('div');
  const value = image.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  setWidth(slideDiv, portfolio[client].images);
  slideDiv.style.background = `url('${folder}/${value}.jpg') center center/cover`;
  carousel.appendChild(slideDiv);
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
  const linkButton = links.querySelector(`a.${type}`);

  linkButton.href = link;
  linkButton.classList.add('visible');
}

function fillModal(e) {
  const btn = e.target.dataset.client;

  selectBgImage(btn);

  h6.textContent = portfolio[btn].title;
  h3.textContent = portfolio[btn].tags;
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
