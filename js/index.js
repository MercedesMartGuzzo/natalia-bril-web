
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
    }, 1000);
});
/* Cada vez q hago click en un iten la nav cierra */
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        nav.classList.remove("visible");

        setTimeout(() => {
            cerrar.style.display = "none";
            abrir.style.display = "block";
        }, 1000);
    });
});

/* EFECTO FADE-IN */

document.addEventListener('DOMContentLoaded', function () { 
    const elements = document.querySelectorAll('.fade-in');

    // Crear el observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.05
    });

    // Observar todos los elementos seleccionados
    elements.forEach(element => {
        observer.observe(element);
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in1');

    // Crear el observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.20
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
        threshold: 0.20
    });

    // Observar todos los elementos seleccionados
    elements.forEach(element => {
        observer.observe(element);
    });
});

/* EFECTO PARALLAX */
const portadaImg = document.querySelector("#portada-img");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    portadaImg.style.top = scroll * .3 + "px";   
})

/* boton footer */

document.addEventListener("DOMContentLoaded", () => {
    const btnFooter = document.querySelector("#arriba");
    const footer = document.querySelector("#footer");

    // Evento de clic para scroll hacia arriba
    btnFooter.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Evento de scroll para mostrar/ocultar el botón del footer
    window.addEventListener("scroll", () => {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (footerRect.top <= windowHeight && footerRect.bottom >= 0) {
            btnFooter.classList.add("show");
        } else {
            btnFooter.classList.remove("show");
        }
    });
});

