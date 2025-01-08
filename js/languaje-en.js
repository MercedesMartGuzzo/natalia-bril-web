// Configura los botones de cambio de idioma
document.addEventListener("DOMContentLoaded", () => {
    const buttonLanguageES = document.querySelector("#button-language-es");
    const buttonLanguageEN = document.querySelector("#button-language-en");
    const languageButtons = document.querySelector("#language-buttons");

    buttonLanguageES.addEventListener("click", () => {
        localStorage.setItem("language", "es");
        document.location.href = "../index.html";
    });

    buttonLanguageEN.addEventListener("click", () => {
        localStorage.setItem("language", "en");
        document.location.href = "index.html";
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > window.innerHeight) { // 100vh
            languageButtons.classList.remove("show");
        } else {
            languageButtons.classList.add("show");
        }
    });
});