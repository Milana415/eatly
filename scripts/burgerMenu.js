document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.header__burger');
  const mobileMenu = document.querySelector('.header__mobile-menu');

  if (!burger || !mobileMenu) return;

  burger.addEventListener('click', () => {
    const isExpanded = burger.getAttribute('aria-expanded') === 'true';
    const newState = !isExpanded;

    // Обновляем ARIA
    burger.setAttribute('aria-expanded', newState);
    mobileMenu.setAttribute('aria-expanded', newState);

    // Для hidden="true"/"false" (можно использовать и class)
    mobileMenu.hidden = !newState;
  });

  // Закрытие при клике по ссылке
  mobileMenu.querySelectorAll('.mobile-menu__link').forEach(link => {
    link.addEventListener('click', () => {
      burger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-expanded', 'false');
      mobileMenu.hidden = true;
    });
  });

  // Закрытие при клике вне меню (опционально)
  document.addEventListener('click', (e) => {
    const isClickInside = burger.contains(e.target) || mobileMenu.contains(e.target);
    const isExpanded = burger.getAttribute('aria-expanded') === 'true';

    if (!isClickInside && isExpanded) {
      burger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-expanded', 'false');
      mobileMenu.hidden = true;
    }
  });
});