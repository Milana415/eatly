"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.header__burger');
  var mobileMenu = document.querySelector('.header__mobile-menu');
  if (!burger || !mobileMenu) return;
  burger.addEventListener('click', function () {
    var isExpanded = burger.getAttribute('aria-expanded') === 'true';
    var newState = !isExpanded; // Обновляем ARIA

    burger.setAttribute('aria-expanded', newState);
    mobileMenu.setAttribute('aria-expanded', newState); // Для hidden="true"/"false" (можно использовать и class)

    mobileMenu.hidden = !newState;
  }); // Закрытие при клике по ссылке

  mobileMenu.querySelectorAll('.mobile-menu__link').forEach(function (link) {
    link.addEventListener('click', function () {
      burger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-expanded', 'false');
      mobileMenu.hidden = true;
    });
  }); // Закрытие при клике вне меню (опционально)

  document.addEventListener('click', function (e) {
    var isClickInside = burger.contains(e.target) || mobileMenu.contains(e.target);
    var isExpanded = burger.getAttribute('aria-expanded') === 'true';

    if (!isClickInside && isExpanded) {
      burger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-expanded', 'false');
      mobileMenu.hidden = true;
    }
  });
});