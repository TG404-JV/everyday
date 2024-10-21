// JavaScript for Carousel
const carousel = document.querySelector('.carousel-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', () => {
    carousel.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

rightArrow.addEventListener('click', () => {
    carousel.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});
