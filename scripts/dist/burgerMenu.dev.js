"use strict";

var burger = document.getElementById('burger');
var nav = document.querySelector('.header__nav');
var overlay = document.getElementById('overlay');

if (burger && nav && overlay) {
  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    nav.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.classList.toggle('lock');
  });
  overlay.addEventListener('click', function () {
    burger.classList.remove('active');
    nav.classList.remove('open');
    overlay.classList.remove('active');
    document.body.classList.remove('lock');
  });
}