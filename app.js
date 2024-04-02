import { Application } from '@splinetool/runtime';

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/51CcjNugRAUcYV3e/scene.splinecode');

    var navbarToggler = document.querySelector('.navbar-toggler');
    var header = document.querySelector('header');

    highlightNavLink();
    headerBackground();
    ocultarSpline();

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
        var ariaExpanded = navbarToggler.getAttribute('aria-expanded');
        if (window.scrollY === 0 && ariaExpanded === "false") {
            header.classList.remove('headerBlack');
        } else {
            header.classList.add('headerBlack');
        }
    }

    function ocultarSpline() {
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
    }

    navbarToggler.addEventListener('click', function () {
        if (window.scrollY === 0) {
            if (!navbarToggler.classList.contains('collapsed')) {
                header.classList.add('headerBlack');
            } else {
                header.classList.remove('headerBlack');
            }
        }
    });

    window.addEventListener('resize', function () {
        highlightNavLink();
    });

    window.addEventListener('scroll', function () {
        highlightNavLink();
        headerBackground();
        ocultarSpline();
    });
})