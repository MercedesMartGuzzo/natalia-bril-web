
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const menuItems = document.querySelectorAll(".nav a");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    abrir.style.display = "none";
    cerrar.style.display = "block";
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");

    setTimeout(() => {
        cerrar.style.display = "none";
        abrir.style.display = "block";
    }, 1000); // Coincide con la duración de la transición en el CSS
});

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        nav.classList.remove("visible");

        // Usamos un setTimeout para sincronizar la desaparición del botón de cerrar con el menú
        setTimeout(() => {
            cerrar.style.display = "none";
            abrir.style.display = "block";
        }, 1000); // Coincide con la duración de la transición
    });
});






/* SLIDER DE FOTOS */
/* const swiper=  new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
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
        swiper.slideTo(index + 1); // Mover slider al índice correspondiente
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
}); */
/* 
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

let currentIndex = 0;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});


setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000); */
/* 
document.addEventListener('DOMContentLoaded', () => {
    const toggleIcons = document.querySelectorAll('.toggle-icon');
    const paragraphs = document.querySelectorAll('.english');

    toggleIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const currentParagraph = icon.closest('.english');
            const isOpen = currentParagraph.classList.toggle('open');

            // Close all other paragraphs except the current one
            paragraphs.forEach(paragraph => {
                if (paragraph !== currentParagraph && paragraph.classList.contains('open')) {
                    paragraph.classList.remove('open');
                }
            });

            // Adjust scroll to ensure the expanded paragraph is in view
            if (isOpen) {
                setTimeout(() => {
                    const title = currentParagraph.querySelector('h4');
                    const rect = title.getBoundingClientRect();
                    window.scrollTo({
                        top: window.scrollY + rect.top - 63,
                        behavior: 'smooth'
                    });
                }, 500);
            }
        });
    });
}); 
 */
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los elementos que deseas animar
    const elements = document.querySelectorAll('.fade-in');

    // Crear el observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.05// 10% del elemento visible
    });

    // Observar todos los elementos seleccionados
    elements.forEach(element => {
        observer.observe(element);
    });
});



document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los elementos que deseas animar
    const elements = document.querySelectorAll('.fade-in1');

    // Crear el observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.20// 10% del elemento visible
    });

    // Observar todos los elementos seleccionados
    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los elementos que deseas animar
    const elements = document.querySelectorAll('.fade-in2');

    // Crear el observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.20// 10% del elemento visible
    });

    // Observar todos los elementos seleccionados
    elements.forEach(element => {
        observer.observe(element);
    });
});

/* EFECTO PARALLAX */
const portadaImg = document.querySelector("#portada-img");
/*  const portadaTitulo = document.querySelector("#portada-titulo");  */


window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    portadaImg.style.top = scroll * .3 + "px";
    /*    portadaTitulo.style.bottom =-scroll + "px";   */

})

