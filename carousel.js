const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.slide');
let current = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${current * 100}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
    current = (current + 1) % slides.length;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    updateCarousel();
});

setInterval(() => {
    current = (current + 1) % slides.length;
    updateCarousel();
}, 4000);
