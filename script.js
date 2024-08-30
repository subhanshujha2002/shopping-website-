let currentSlide = 0;

function moveSlider(step) {
    const slider = document.querySelector('.slider');
    const totalSlides = slider.children.length;
    const visibleSlides = 5; // Adjust according to how many products you want to show at once

    currentSlide += step;

    // Wrap around
    if (currentSlide < 0) {
        currentSlide = totalSlides - visibleSlides;
    } else if (currentSlide > totalSlides - visibleSlides) {
        currentSlide = 0;
    }

    const offset = currentSlide * -100 / visibleSlides;
    slider.style.transform = `translateX(${offset}%)`;
}
