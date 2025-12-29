const reviewsSwiper = new Swiper('.reviews-slider', {
    slidesPerView: 'auto',
    spaceBetween: 26,
    loop: false,

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 203,
        height: 11,
    },

    mousewheel: true,
    observer: true,
    observeParents: true,
});