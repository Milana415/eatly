"use strict";

var reviewsSwiper = new Swiper('.reviews-slider', {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    hide: false
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});