// Mostrar y ocultar menú al hacer click en el icono
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Para que el menú no desaparezca al clicar en un enlace
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    menu.classList.remove('show');
  }
});

// Cerrar menú si se hace click fuera
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
    menu.classList.remove('show');
  }
});

// Carrusel automático
const carouselImages = document.querySelectorAll('.carousel img');
let currentIndex = 0;

function showImage(index) {
  carouselImages.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  showImage(currentIndex);
}

if (carouselImages.length > 0) {
  showImage(currentIndex);
  setInterval(nextImage, 4000); // Cambia cada 4 segundos
}
