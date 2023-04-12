import 'animate.css';
import 'reset-css';
import '../css/style.scss';
import '../images/dev.png';

import '@mdi/font/css/materialdesignicons.min.css';

import './theme';
import './activeLinkMenu';

const body = document.querySelector('body');
const loader = document.querySelector('.loader');
body.classList.add('loading');

document.addEventListener('DOMContentLoaded', () => {
  loader.style.opacity = '0';
  loader.addEventListener('transitionend', () => {
    loader.style.display = 'none';
    body.classList.remove('loading');
    body.classList.add('loaded');
  });
});
