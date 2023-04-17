export const modalWrap = document.querySelector('.modal-wrap');
export const modal = document.querySelector('#modal');

// fill modal

export function fillModal(content) {
  modal.appendChild(content);
}

// side functions
export const toCloseModal = (e) => e.target.classList.contains('close');

// open modal
export function showModal() {
  modalWrap.classList.add('visible');
}

// clear modal
export function clearModal() {
  while (modal.firstChild) {
    modal.removeChild(modal.lastChild);
  }
}

// close modal
export function closeModal(e) {
  if (toCloseModal(e)) {
    modalWrap.classList.remove('visible');
    clearModal();
  }
}

// modalWrap.addEventListener('click', closeModal);
