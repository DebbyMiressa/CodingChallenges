/* eslint-disable linebreak-style */
const hamburgerbtn = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navMenu');
const closebtn = document.querySelector('#close');
const menuItem = document.querySelectorAll('.nav-link');
const all = document.querySelector('body');

function openMenu() {
  navMenu.classList.remove('close-menu');
  navMenu.classList.add('open-menu');
}

function closeMenu() {
  navMenu.classList.remove('open-menu');
  navMenu.classList.add('close-menu');
  all.style.filter = 'blur(0)';
}

hamburgerbtn.addEventListener('click', openMenu);
closebtn.addEventListener('click', closeMenu);

menuItem.forEach((item) => {
  item.addEventListener('click', closeMenu);
});
