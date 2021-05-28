const burger = document.querySelector('.icon-burger');
const nav = document.querySelector('.menu-list')

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('nav_open');
});