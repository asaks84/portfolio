export function fadeOut(disable, dontRemove) {
  // Created a function displayNone to use on eventListner insted of anonnymous function
  // so this way I can use the removeEventListner.
  // Then removing the eventListner. This solved the problem with displayNone
  // auto change without calling fadeOut().

  const displayNone = function () {
    disable.classList.add('displayNone');
    disable.removeEventListener('transitionend', displayNone);
  };

  disable.classList.remove('visible');
  disable.classList.add('hidden');

  if (dontRemove !== true) {
    disable.addEventListener('transitionend', displayNone);
  }
}

export function fadeIn(enable) {
  if (enable.classList.contains('displayNone')) {
    enable.classList.remove('displayNone');
  }
  setTimeout(() => {
    enable.classList.remove('hidden');
    enable.classList.add('visible');
  }, 10);
}
