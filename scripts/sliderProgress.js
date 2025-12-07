document.querySelectorAll('.control__form-divider input[type="range"]').forEach(slider => {
  const updateProgress = () => {
    const percent = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.setProperty('--progress', `${percent}%`);
  };

  slider.addEventListener('input', updateProgress);
  updateProgress();
});