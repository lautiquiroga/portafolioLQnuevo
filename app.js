import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/51CcjNugRAUcYV3e/scene.splinecode');

// Función para agregar o quitar la clase 'active' según la posición de la ventana
function highlightNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const top = section.offsetTop - 100;
        const bottom = top + section.clientHeight;
        const id = section.getAttribute('id');

        if (window.scrollY >= top && window.scrollY <= bottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === id) {
                    link.classList.add('active');
                }
            });
        }
    });
}

function headerBackground() {
    var header = document.querySelector('header');
    if (window.scrollY === 0) {
        header.style.backgroundColor = 'transparent';
        header.style.backdropFilter = 'none';
    } else {
        header.style.backgroundColor = 'rgba(13, 13, 13, 0.742)';
        header.style.backdropFilter = 'blur(2px)';
    }
}


if (window.innerWidth > 768) {
    window.addEventListener('scroll', function () {
        highlightNavLink();
        headerBackground();
    });
}

window.addEventListener('scroll', function () {
    // Obtener el contenedor de proyectos y el contenedor con la clase splineContainer
    var proyectos = document.getElementById('proyectos');
    var splineContainer = document.querySelector('.splineContainer');

    // Obtener las coordenadas de la sección de proyectos
    var proyectosRect = proyectos.getBoundingClientRect();

    // Verificar si la parte superior de la sección de proyectos está en la parte superior de la ventana
    if (proyectosRect.top <= 0) {
        // Ocultar el contenedor con la clase splineContainer
        splineContainer.style.display = 'none';
    } else {
        // Mostrar el contenedor con la clase splineContainer
        splineContainer.style.display = 'block';
    }
});
