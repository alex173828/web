import style from './style.scss';

// mobile__menu
var nav__button_hamburger = document.getElementById('nav__button_hamburger');
var header__nav = document.getElementById('menu');
var nav__link_header = document.getElementsByClassName('nav__link_header');

nav__button_hamburger.addEventListener('click', function() {
  if (nav__button_hamburger.classList.contains('is-active')) {
    nav__button_hamburger.classList.remove('is-active');
    header__nav.classList.remove('header__nav_active');
  } else {
    nav__button_hamburger.classList.add('is-active');
    header__nav.classList.add('header__nav_active');
  }
});

// dropdown__list
var dropdown__button = document.getElementById('dropdown__button');
var dropdown__list = document.getElementById('dropdown__list');

dropdown__button.addEventListener('click', function() {
  if (dropdown__list.classList.contains('nav__list_header_dropdown_active')) {
    dropdown__list.classList.remove('nav__list_header_dropdown_active');
  } else {
    dropdown__list.classList.add('nav__list_header_dropdown_active');
  }
})
