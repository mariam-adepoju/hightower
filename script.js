const toggleBtn = document.querySelector(".nav-menu-btn")
const nav = document.querySelector("nav")
const links = nav.querySelectorAll("a")
toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("open")
})
links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open")
    })
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
ScrollReveal({
    reset: false,
    distance: '60px',
    duration: 2000,
    delay: 200,
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});

ScrollReveal().reveal('.header-content p', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.header-content h1', { delay: 1000, origin: 'left' });
ScrollReveal().reveal('.header-btns', { delay: 1500, origin: 'bottom' });
ScrollReveal().reveal('.header-image', { delay: 50, origin: 'right' });

ScrollReveal().reveal('.destination-card', { interval: 500, origin: 'bottom', scale: 0.95 });

ScrollReveal().reveal('.showcase-image', {
    origin: 'left',
    distance: '80px'
});
ScrollReveal().reveal('.showcase-content h4', {
    delay: 500,
    origin: 'top'
});
ScrollReveal().reveal('.showcase-content p', {
    delay: 1000,
    origin: 'bottom'
});
ScrollReveal().reveal('.showcase-btn', {
    delay: 1500,
    origin: 'bottom',
});

ScrollReveal().reveal('.banner-card', {
    interval: 500,
    origin: 'bottom',
    scale: 0.95
});

ScrollReveal().reveal('.discover-card', {
    interval: 500,
    scale: 0.95
});