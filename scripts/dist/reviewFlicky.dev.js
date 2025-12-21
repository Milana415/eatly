"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var flkty = new Flickity('.carousel', {
    wrapAround: false,
    pageDots: false,
    prevNextButtons: true,
    contain: true,
    cellAlign: 'center',
    resize: true
  });
  document.querySelectorAll('.reviews__card').forEach(function (card) {
    card.addEventListener('mouseenter', function () {
      flkty.resize(); // Flickity пересчитывает размеры ячеек
    });
    card.addEventListener('mouseleave', function () {
      flkty.resize();
    });
  });
});