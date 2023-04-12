export const modalWrap = document.querySelector('.modal-wrap');
export const modal = document.querySelector('#modal');

// open modal
export function showModal() {
  modalWrap.classList.add('visible');
}

// clear modal
export function closeModal() {
  while (modal.firstChild) {
    modal.removeChild(modal.lastChild);
  }
}
