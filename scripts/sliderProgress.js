document.querySelectorAll('input[type="range"]').forEach(slider => {
  const updateProgress = () => {
    const min = parseFloat(slider.min) || 0;
    const max = parseFloat(slider.max) || 100;
    const value = parseFloat(slider.value) || 0;
    const percent = ((value - min) / (max - min)) * 100;
    slider.style.setProperty('--progress', `${percent}%`);
  };

  slider.addEventListener('input', updateProgress);
  updateProgress();
});