const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Para escritorio: mostrar menú al pasar el cursor
menuToggle.addEventListener('mouseenter', () => {
  menu.classList.add('show');
});

menuToggle.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!menu.matches(':hover') && !menuToggle.matches(':hover')) {
      menu.classList.remove('show');
    }
  }, 200);
});

menu.addEventListener('mouseenter', () => {
  menu.classList.add('show');
});

menu.addEventListener('mouseleave', () => {
  menu.classList.remove('show');
});

// Para móvil: abrir/cerrar menú al click en icono
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Opcional: cerrar menú al clicar en un enlace (para móviles)
const menuLinks = menu.querySelectorAll('a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('show');
  });
});

// Carrusel automático (si usas el método con imágenes con clase active)
const carouselImages = document.querySelectorAll('.carousel img');
let currentIndex = 0;

function showNextImage() {
  carouselImages[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % carouselImages.length;
  carouselImages[currentIndex].classList.add('active');
}

setInterval(showNextImage, 4000); // Cambia cada 4 segundos
