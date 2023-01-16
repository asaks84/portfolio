import 'animate.css';
import 'reset-css';
import '../css/style.scss';
import '../images/dev.png';

import '@mdi/font/css/materialdesignicons.min.css';

import './theme';
import './activeLinkMenu';

const body = document.querySelector('body');
body.classList.add('loading');

(function startLoader() {
  const loader = document.querySelector('.loader');
  loader.style.opacity = '0';
  window.addEventListener('load', () => {
    loader.addEventListener('transitionend', () => {
      loader.style.display = 'none';
      body.classList.remove('loading');
      body.classList.add('loaded');
    });
  });
}());
