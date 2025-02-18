/* EFECTO PARALLAX PORTADA */
const dImg = document.querySelector("#d-img");

window.addEventListener("scroll", () => {
   let move = window.scrollY;
   dImg.style.top = move * .3 + "px";
})


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
      threshold: 0.09// 10% del elemento visible
   });

   // Observar todos los elementos seleccionados
   elements.forEach(element => {
      observer.observe(element);
   });
});

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

/* boton desplegable  audio-objetivos*/
document.addEventListener('DOMContentLoaded', () => {
   const toggleIcon = document.getElementById('toggle-icon');
   const toggleParagraph = document.getElementById('toggle-paragraph');

   toggleIcon.addEventListener('click', () => {
      if (toggleParagraph.classList.contains('show')) {
         toggleParagraph.classList.remove('show');
         setTimeout(() => {
            toggleParagraph.style.display = 'none';
            toggleIcon.textContent = 'Ver más'; // Cambia el texto a "Ver más"
         }, 500); // Tiempo de la transición en milisegundos
      } else {
         toggleParagraph.style.display = 'block';
         setTimeout(() => {
            toggleParagraph.classList.add('show');
            toggleIcon.textContent = 'Ver menos'; // Cambia el texto a "Ver menos"
         }, 10); // Pequeño retraso para permitir que el display: block; se aplique
      }
   });
});


// Selecciona el párrafo

const parrafo = document.querySelector('.audio-parrafo2');

// Aplica la animación con GSAP para cambiar los colores
gsap.to(parrafo, {
   backgroundColor: "#33404f",
   color: "#ffffff", 
   duration: 3, 
   repeat: -1, 
   yoyo: true, 
   ease: "power1.inOut",
  x:5,
});



