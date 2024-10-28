const dImg = document.querySelector("#d-img");
/*  const portadaDocencia = document.querySelector("#portada-docencia"); */

window.addEventListener("scroll", () => {
   let move = window.scrollY;

   dImg.style.top = move * .3 + "px";
   /*  portadaDocencia.style.bottom =scroll * .3 + "px" ;   */
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