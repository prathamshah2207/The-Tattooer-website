let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    items.forEach((item) => {
        item.classList.remove('active');
    });

    items[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % 5;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % 5;
    showSlide(currentIndex);
}

showSlide(currentIndex);
const slideInterval = 3000;
setInterval(nextSlide, slideInterval);