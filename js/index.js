
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    abrir.style.display = "none";
    cerrar.style.display = "block";
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    abrir.style.display = "block";
    cerrar.style.display = "none";
});


/* const menuLinks = document.querySelectorAll(".nav-list li a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("visible");
        abrir.style.display = "block";
        cerrar.style.display = "none";
    });
}); */


/* SLIDER DE FOTOS */

// script.js
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

// Opcional: Cambiar automáticamente las imágenes cada 5 segundos
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);

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
    
