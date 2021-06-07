const burger = document.querySelector('.icon-burger');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.menu-list');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('nav_open');
  nav.classList.toggle('nav_open');
});

