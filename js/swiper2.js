/* SLIDER DE FOTOS */
const swiper1 = new Swiper('.slider1', {
    loop: true,
    navigation: {
        nextEl: '.slider1 .swiper-button-next',
        prevEl: '.slider1 .swiper-button-prev',
    },
    pagination: {
        el: '.slider1 .swiper-pagination',
        clickable: true,
    },
});

// Modal y grilla
const photoGrid = document.querySelector('.photo-grid');
const modal = document.querySelector('#photo-modal');
const closeModal = document.querySelector('#close-modal');

// Al hacer clic en una foto de la grilla
photoGrid.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const index = parseInt(e.target.dataset.index, 10); // Obtener índice de la imagen
        swiper1.slideTo(index + 1); // Mover slider al índice correspondiente
        modal.classList.add('active'); // Mostrar modal
    }
});

// Cerrar modal
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Cerrar modal al hacer clic fuera del slider
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
}); 