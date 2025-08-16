const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        540: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
    }

})
