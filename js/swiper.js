const swiper2 = new Swiper(".slider2", {

    breakpoints: {
        // when window width is >= 320px
        100: {
            slidesPerView: 1
        },
        // when window width is >= 480px
        575: {
            slidesPerView: 2
        },
        // when window width is >= 640px
        900: {
            slidesPerView: 3
        }
    },

    spaceBetween: 30,
    loop: true,
    grabCursor: true,

    pagination: {
        el: ".slider2 .swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: '.slider2 .swiper-button-next',
        prevEl: '.slider2 .swiper-button-prev',
    }

});


// Inicializar Swiper



