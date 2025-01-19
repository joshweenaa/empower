let currentIndex = 0; // Start with the first image
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Function to move to the next slide
function showNextSlide() {
   currentIndex = (currentIndex + 1) % totalItems; // Loop back to first slide after last
   const offset = -currentIndex * 100; // Calculate offset based on current index
   carousel.style.transform = `translateX(${offset}%)`; // Move carousel
}

// Automatically move to the next slide every 3 seconds
setInterval(showNextSlide, 3000);
