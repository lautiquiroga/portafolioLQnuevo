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

// Evento para llamar a la función cuando se desplaza la ventana
window.addEventListener('scroll', highlightNavLink);

