"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.header__burger');
  var nav = document.querySelector('.header__nav');
  if (!burger || !nav) return;

  var toggleNav = function toggleNav() {
    var isOpen = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  burger.addEventListener('click', toggleNav);
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      toggleNav();
    }
  });
});