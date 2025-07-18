const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Mostrar y ocultar menú al hacer click en móvil/tablet
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Opcional: cerrar menú si se hace click fuera
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
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

setInterval(showNextImage, 4000); // Cambia cada 4 segundos
