import ScrollReveal from 'scrollreveal';

// Función para las animaciones de ScrollReveal
const scrollAnimation = () => {
  const sr = ScrollReveal({
    origin: 'top', // Cambiado a 'bottom' para que las animaciones se activen cuando se desplaza hacia abajo
    distance: '60px', // Reducido para que la animación comience antes de que el elemento esté completamente visible
    duration: 2500, // Reducido el tiempo de animación para hacerlo más rápido
    delay: 400, // Añadido un pequeño retraso para un mejor efecto
    easing: 'cubic-bezier(0.5, 0, 0, 1)', // Cambiado a una curva de aceleración para hacer la animación más natural
    reset: false // Reiniciar la animación en cada desplazamiento
  });

  // Aplicar animaciones a los elementos específicos
sr.reveal(`.home-social, .favorite-container. sponsor-container. footer`)
sr.reveal(`.home-title span:nth-child(1)`, {origin: 'left', opacity: 1})
sr.reveal(`.home-title span:nth-child(3)`, {origin: 'right', opacity: 1})
sr.reveal(`.home-tooltip, .home-button, .model-button`, {origin: 'bottom'})
sr.reveal(`.about-data`, {origin: 'left'})
sr.reveal(`.about-img, .model-tooltip`, {origin: 'right'})
};

export default scrollAnimation;