document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');

    if (!burger || !nav) return;

    const toggleNav = () => {
        const isOpen = nav.classList.toggle('is-open');
        burger.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    burger.addEventListener('click', toggleNav);

    nav.addEventListener('click', (e) => {
        if (e.target.closest('a')) {
            nav.classList.remove('is-open');
            burger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('is-open')) {
            toggleNav();
        }
    });
});