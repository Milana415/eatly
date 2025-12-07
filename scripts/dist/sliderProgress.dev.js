"use strict";

document.querySelectorAll('.control__form-divider input[type="range"]').forEach(function (slider) {
  var updateProgress = function updateProgress() {
    var percent = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.setProperty('--progress', "".concat(percent, "%"));
  };

  slider.addEventListener('input', updateProgress);
  updateProgress();
});