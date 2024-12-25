document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".language-button");
    const sections = document.querySelectorAll("[data-lang]");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const lang = button.id === "btn-de" ? "de" : "pt";

            // Setze aktiven Button
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Zeige nur die Inhalte der gewählten Sprache
            sections.forEach(section => {
                if (section.getAttribute("data-lang") === lang) {
                    section.style.display = "block";
                } else {
                    section.style.display = "none";
                }
            });
        });
    });
});

let slideIndex = 0;
showSlides(slideIndex);

// Nächste/Vorherige Steuerung
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Automatische Slideshow
function showSlides(n) {
    const slides = document.querySelectorAll(".slide");
    if (n >= slides.length) {
        slideIndex = 0;
    } 
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex].style.display = "block";
}

// Starten der automatischen Slideshow
setInterval(() => {
    changeSlide(1);
}, 5000); // 5 Sekunden pro Bild
