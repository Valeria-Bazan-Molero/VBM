const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('mouseenter', () => {
  menu.classList.add('show');
});

menuToggle.addEventListener('mouseleave', () => {
  // Con delay para que el usuario pueda mover el cursor al menú
  setTimeout(() => {
    if (!menu.matches(':hover') && !menuToggle.matches(':hover')) {
      menu.classList.remove('show');
    }
  }, 200);
});

menu.addEventListener('mouseleave', () => {
  menu.classList.remove('show');
});

menu.addEventListener('mouseenter', () => {
  menu.classList.add('show');
});

// Carrusel automático
const carouselImages = document.querySelectorAll('.carousel img');
let currentIndex = 0;

function showNextImage() {
  carouselImages[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % carouselImages.length;
  carouselImages[currentIndex].classList.add('active');
}

setInterval(showNextImage, 4000); // Cambia cada 4 segundos

if (carouselImages.length > 0) {
  showImage(currentIndex);
  setInterval(nextImage, 4000); // Cambia cada 4 segundos
}
