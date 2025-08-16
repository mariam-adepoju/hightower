const toggleBtn = document.querySelector(".nav-menu-btn")
const nav = document.querySelector("nav")
toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("open")
})
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        450: {
            slidesPerView: 2
        },
        900: {
            slidesPerView: 3
        },
    }

})
