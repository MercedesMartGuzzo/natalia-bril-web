const dImg = document.querySelector("#d-img");
/*  const portadaDocencia = document.querySelector("#portada-docencia"); */

window.addEventListener("scroll", () => {
   let move = window.scrollY;

   dImg.style.top = move * .2 + "px";
   /*  portadaDocencia.style.bottom =scroll * .3 + "px" ;   */
})






