// script.js
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
