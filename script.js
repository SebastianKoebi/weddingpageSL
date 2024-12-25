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

// Funktion zum Ändern der Slides
function changeSlide(n) {
    const slides = document.querySelectorAll(".slide");
    slideIndex += n;

    // Wenn über das letzte Bild hinausgegangen wird, zurück zum ersten
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    // Wenn vor das erste Bild gewechselt wird, zum letzten springen
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    showSlide(slideIndex);
}

// Funktion zum Anzeigen eines spezifischen Slides
function showSlide(index) {
    const slides = document.querySelectorAll(".slide");

    // Alle Slides ausblenden
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    // Nur das aktuelle Slide anzeigen
    slides[index].style.display = "block";
}

// Automatische Slideshow alle 5 Sekunden
function autoSlide() {
    changeSlide(1); // Zum nächsten Slide wechseln
    setTimeout(autoSlide, 5000); // Wiederholung nach 5 Sekunden
}

// Start der Slideshow
document.addEventListener("DOMContentLoaded", () => {
    showSlide(slideIndex); // Zeige das erste Bild
    autoSlide(); // Start der automatischen Rotation
});
