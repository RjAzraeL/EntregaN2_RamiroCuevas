document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sliderItems = document.querySelectorAll('.slider-item');
    let currentIndex = 0;

    function changeSlide() {
        // Ocultar la imagen actual
        sliderItems[currentIndex].classList.remove('active');
        // Calcular el índice de la siguiente imagen
        currentIndex = (currentIndex + 1) % sliderItems.length;
        // Mostrar la siguiente imagen
        sliderItems[currentIndex].classList.add('active');
    }

    // Inicializar el slider
    sliderItems[currentIndex].classList.add('active');
    // Cambiar la imagen cada 2 segundos
    setInterval(changeSlide, 2000);
});