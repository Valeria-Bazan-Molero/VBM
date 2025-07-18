const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Opcional: cerrar menú al hacer click fuera (si quieres)
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
    menu.classList.remove('show');
  }
});

// Carrusel automático
const carouselImages = document.querySelectorAll('.carousel img');
let currentIndex = 0;

function showNextImage() {
  carouselImages[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % carouselImages.length;
  carouselImages[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // cambia cada 3 segundos
