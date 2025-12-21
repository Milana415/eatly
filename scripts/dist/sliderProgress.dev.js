"use strict";

document.querySelectorAll('input[type="range"]').forEach(function (slider) {
  var updateProgress = function updateProgress() {
    var min = parseFloat(slider.min) || 0;
    var max = parseFloat(slider.max) || 100;
    var value = parseFloat(slider.value) || 0;
    var percent = (value - min) / (max - min) * 100;
    slider.style.setProperty('--progress', "".concat(percent, "%"));
  };

  slider.addEventListener('input', updateProgress);
  updateProgress();
});