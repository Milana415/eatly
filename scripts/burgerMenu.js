const burger = document.getElementById('burger');
const nav = document.querySelector('.header__nav');
const overlay = document.getElementById('overlay');

if (burger && nav && overlay) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.classList.toggle('lock');
  });

  overlay.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('open');
    overlay.classList.remove('active');
    document.body.classList.remove('lock');
  });
}
