// eslint-disable-next-line import/no-cycle
import { shiftSlide, closeModal } from './portfolioModal';

function createPortfolioModal() {
  // get HTML reference
  const modal = document.querySelector('#modal');

  // creating carousel elements
  const windows = document.createElement('div');
  const carousel = document.createElement('div');
  const arrowLeft = document.createElement('i');
  const arrowRight = document.createElement('i');

  windows.classList.add('window');
  carousel.classList.add('carousel');
  arrowLeft.classList.add('left', 'mdi', 'mdi-chevron-left-box');
  arrowRight.classList.add('right', 'mdi', 'mdi-chevron-right-box');

  arrowRight.addEventListener('click', () => { shiftSlide(-1); });
  arrowLeft.addEventListener('click', () => { shiftSlide(1); });

  windows.appendChild(carousel);
  windows.appendChild(arrowLeft);
  windows.appendChild(arrowRight);

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

  infos.classList.add('infos');
  closeBtn.classList.add('close', 'mdi', 'mdi-close');
  box.classList.add('box');
  links.classList.add('links', 'flex');

  site.classList.add('btn', 'site');
  repo.classList.add('btn', 'repo');

  site.textContent = 'Site';
  repo.textContent = 'Repositório';

  closeBtn.addEventListener('click', closeModal);
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

export default createPortfolioModal;
