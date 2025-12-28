"use strict";

var swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: false,
  centeredSlides: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return "<span class=\"".concat(className, "\" role=\"button\" aria-label=\"\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0441\u043B\u0430\u0439\u0434\u0443 ").concat(index + 1, "\"></span>");
    }
  },
  keyboard: {
    enabled: true
  },
  autoplay: {
    delay: 7000,
    pauseOnMouseEnter: true
  },
  a11y: true
});