document.addEventListener('DOMContentLoaded', function () {
    // Animación de entrada al título
    const title = document.querySelector('h2');
    anime({
        targets: title,
        translateY: [-50, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 500
    });

    // Animación de entrada para las secciones
    const sections = document.querySelectorAll('section');
    sections.forEach(function (section, index) {
        anime({
            targets: section,
            translateY: [50, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1000,
            delay: 500 + index * 200
        });
    });

    // Puedes agregar más animaciones aquí según sea necesario
});