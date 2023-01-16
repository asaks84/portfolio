const menulinks = document.querySelectorAll('#mainnav a');
const sections = document.querySelectorAll('section');

function changeMenu() {
  sections.forEach((e) => {
    const top = window.scrollY;
    const offset = e.offsetTop;
    const id = e.getAttribute('id');
    const headerheight = 50;

    if (top >= offset - headerheight) {
      menulinks.forEach((item) => {
        item.parentElement.classList.remove('active');
        if (item.getAttribute('href') === `#${id}`) {
          item.parentElement.classList.add('active');
        }
      });
    }
  });
}

window.onscroll = () => changeMenu();
window.onload = () => changeMenu();
