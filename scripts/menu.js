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

document.addEventListener('DOMContentLoaded', () => {
  const contents = document.getElementById('contents').offsetTop - document.getElementById('contents').offsetHeight - 350;
  const about = document.getElementById('about').offsetTop + 600;
  document.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos < contents) {
      document.getElementById('content-cc').style.color = '#272a31';
      document.getElementById('challenge-cc').style.color = '#272a31';
      document.getElementById('about-cc').style.color = '#272a31';
    } else if (scrollPos >= contents && scrollPos < 1200) {
      document.getElementById('content-cc').style.color = '#ec5242';
      document.getElementById('challenge-cc').style.color = '#272a31';
      document.getElementById('about-cc').style.color = '#272a31';
    } else if (scrollPos >= 1200 && scrollPos < about) {
      document.getElementById('challenge-cc').style.color = '#ec5242';
      document.getElementById('content-cc').style.color = '#272a31';
      document.getElementById('about-cc').style.color = '#272a31';
    } else if (scrollPos >= about) {
      document.getElementById('about-cc').style.color = '#ec5242';
      document.getElementById('content-cc').style.color = '#272a31';
      document.getElementById('challenge-cc').style.color = '#272a31';
    }
  });
});