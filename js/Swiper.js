var swiper = new Swiper('.swiper', {
    slidesPerView: 6,
    spaceBetween: 0,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        992: {
            slidesPerView: 6,
            spaceBetween: 0,
        },
        740:{
            slidesPerView: 3,
        },
        500:{
            slidesPerView: 2,
        },
        100:{
            slidesPerView: 1,
        }
}});