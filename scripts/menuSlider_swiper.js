const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    centeredSlides: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}" role="button" aria-label="Перейти к слайду ${index + 1}"></span>`;
        }
    },
    keyboard: {
        enabled: true
    },

    autoplay: {
        delay: 7000,
        pauseOnMouseEnter: true,
    },

    a11y: true,
});