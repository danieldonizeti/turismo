let currentSlide = 0;
const slides = document.querySelectorAll(".slides img");
const totalSlides = slides.length;

document.querySelector(".next").addEventListener("click", () => {
    nextSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
    prevSlide();
});

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Iniciar o banner
setInterval(nextSlide, 5000);
showSlide(currentSlide);
