// Effet fade-in au scroll
window.addEventListener("scroll", () => {
    document.querySelectorAll(".section").forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.75) {
            section.classList.add("fade-in");
        }
    });
});
