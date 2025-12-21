document.addEventListener('DOMContentLoaded', function() {
  const flkty = new Flickity('.carousel', {
    wrapAround: false,
    pageDots: false,
    prevNextButtons: true,
    contain: true,
    cellAlign: 'center',
    resize: true
  });

  document.querySelectorAll('.reviews__card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      flkty.resize(); // Flickity пересчитывает размеры ячеек
    });
    card.addEventListener('mouseleave', () => {
      flkty.resize();
    });
  });
});