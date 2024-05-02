import { Application } from '@splinetool/runtime';

document.addEventListener('DOMContentLoaded', function () {
    const pantallaAncho = window.innerWidth;

    // if (pantallaAncho > 1200) {
        setTimeout(function () {
            document.querySelector(".loader").style.display = "none";
            document.querySelector(".contenedor__animacion").style.display = "block";
        }, 3000);
    // }


    // Posicionar el spline dependiendo el tamaño de la pantalla
    function agregarSpline() {
        var contenedorPadre;

        // Determina el contenedor padre según el tamaño de la pantalla
        if (pantallaAncho > 1200) {
            contenedorPadre = document.querySelector(".contenedorSpline-pc");
        } else {
            contenedorPadre = document.querySelector(".contenedorSpline-mobile");
        }

        // Verifica si ya existe un elemento .splineContainer dentro del contenedor padre
        var elementoExistente = contenedorPadre.querySelector(".splineContainer");

        // Si no existe un elemento .splineContainer, crea uno y agrégalo al contenedor padre
        if (!elementoExistente) {
            var divElemento = document.createElement("div");
            divElemento.classList.add("splineContainer");
            var canvasElemento = document.createElement("canvas");
            canvasElemento.id = "canvas3d";
            divElemento.appendChild(canvasElemento);
            contenedorPadre.appendChild(divElemento);

            if (pantallaAncho > 1200) {
                crearSplinePC();
            } else {
                crearSplineMobile();
            }
        }
    }

    // Llama a la función para agregar el elemento al cargar la página
    agregarSpline();

    function agregarSpline2() {
        var contenedorPadre2;

        // Determina el contenedor padre según el tamaño de la pantalla
            contenedorPadre2 = document.querySelector(".contenedorSpline2");
            // contenedorPadre = document.querySelector(".contenedorSpline-mobile");

        // Verifica si ya existe un elemento .splineContainer dentro del contenedor padre
        var elementoExistente2 = contenedorPadre2.querySelector(".splineContainer2");

        // Si no existe un elemento .splineContainer, crea uno y agrégalo al contenedor padre

        if (!elementoExistente2) {
            var divElemento = document.createElement("div");
            divElemento.classList.add("splineContainer2");
            var canvasElemento = document.createElement("canvas");
            canvasElemento.id = "canvas3d2";
            divElemento.appendChild(canvasElemento);
            contenedorPadre2.appendChild(divElemento);

            if (pantallaAncho > 768) {
                crearSpline2PC();
            } else {
                crearSpline2Mobile();
            }
        }
    }

    function quitarSpline2() {

         const contenedorPadre2 = document.querySelector(".contenedorSpline2");
         const elementoExistente2 = contenedorPadre2.querySelector(".splineContainer2");

        // Si no existe un elemento .splineContainer, crea uno y agrégalo al contenedor padre

        if (elementoExistente2) {
            // Borrar splineContainer2
            elementoExistente2.remove();
        }
    }
    
    agregarSpline2();

    function crearSplinePC() {
        // Spline
        const canvas = document.getElementById('canvas3d');
        const app = new Application(canvas);
        app.load('https://prod.spline.design/NZdRNBMIvCemhcFR/scene.splinecode');
    }

    function crearSpline2PC() {
        const canvas = document.getElementById('canvas3d2');
        const app = new Application(canvas);
        app.load('https://prod.spline.design/DtZm9UqylFzQkmEq/scene.splinecode');
    }

    function crearSpline2Mobile() {
        const canvas = document.getElementById('canvas3d2');
        const app = new Application(canvas);
        app.load('https://prod.spline.design/Miyin8xZVsgPs6vr/scene.splinecode');
    }

    function crearSplineMobile() {
        // Spline
        const canvas = document.getElementById('canvas3d');
        const app = new Application(canvas);
        app.load('https://prod.spline.design/fIHzAOLsqkF9L5qI/scene.splinecode');
    }


    var navbarToggler = document.querySelector('.navbar-toggler');
    var header = document.querySelector('header');

    highlightNavLink();
    headerBackground();


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
        var tecnologias = document.getElementById('tecnologias');
        var wordpress = document.getElementById('wordpress');
        var splineContainer = document.querySelector('.splineContainer');

        // Obtener las coordenadas de la sección de tecnologias
        var tecnologiasRect = tecnologias.getBoundingClientRect();
        var wordpressRect = wordpress.getBoundingClientRect();

        // Verificar si la parte superior de la sección de tecnologias está en la parte superior de la ventana
        if (tecnologiasRect.top <= 0) {
            // alert(tecnologiasRect.top)
            splineContainer.style.display = 'none';
        } else {
            splineContainer.style.display = 'block';
        }


        /* if (wordpressRect.top <= 0) {
            console.log('wp');
            agregarSpline2();
        } else {
            quitarSpline2();
        }  */
        
    }

    const swipeElements = document.querySelectorAll('.swipe');

    function hideSwipeAfterDelay(element) {
        var rect = element.getBoundingClientRect();
        var bottomEdgeOfViewport = window.innerHeight || document.documentElement.clientHeight;

        if (rect.bottom <= bottomEdgeOfViewport) {
            setTimeout(function () {
                element.classList.add('hidden');
                setTimeout(function () {
                    element.style.display = 'none';
                }, 1000);
            }, 3000);
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
        agregarElementoSegunTamaño();
    });

    window.addEventListener('scroll', function () {
        highlightNavLink();
        headerBackground();
        ocultarSpline();
        swipeElements.forEach(function (swipeElement) {
            if (swipeElement.style.display !== 'none')
                hideSwipeAfterDelay(swipeElement);
        });
    });


    // Gsap
    var windowWidth = window.innerWidth;

    window.addEventListener("resize", function () {
        if (window.innerWidth !== windowWidth) {
            windowWidth = window.innerWidth;
            location.reload();
        }
    });

    gsap.registerPlugin(ScrollTrigger);

    const naveFuego = document.querySelector(".nave-fuego");

    // Desktop
    if (window.matchMedia("(min-width: 1200px)").matches) {
        const tlPC = gsap.timeline({
            scrollTrigger: {
                trigger: ".contenedor__animacion",
                start: "top top",
                end: "100% 100%",
                scrub: true,
            },
        });

        // Movimiento
        tlPC.to(naveFuego, {
            y: 2000,
            duration: 4,
            scale: .8
        });

        // Rotar
        tlPC.to(naveFuego, {
            rotation: 90,
            duration: 4,
        }, "-=2");

        // Movimiento
        tlPC.to(naveFuego, {
            duration: 4,
            scale: 2,
            x: -1800,
        }, "-=2");

        // Rotar
        tlPC.to(naveFuego, {
            rotation: -20,
            duration: 4,
        }, "-=2");

        // Movimiento
        tlPC.to(naveFuego, {
            duration: 4,
            y: 4400,
        }, "-=2");
    }

    // Tablet
    // if (window.matchMedia("(min-width: 768px) and (max-width: 1199px)").matches) {
    //     const tlTablet = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".contenedor__animacion",
    //             // pin: true,
    //             // markers: true,
    //             start: "top top", // start toma como referencia al contenedor seleccionado
    //             end: "100% 100%", // end toma como referencia al contenedor padre del contenedor seleccionado
    //             scrub: true,
    //         },
    //     });

    //     tlTablet.to(naveFuego, {
    //         scale: 2,
    //         y: "4000px",
    //         duration: 8,
    //     });
    // }

    // // Mobile
    // if (window.matchMedia("(max-width: 767px)").matches) {
    //     const tlMobile = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".contenedor__animacion",
    //             // pin: true,
    //             // markers: true,
    //             start: "top top", // start toma como referencia al contenedor seleccionado
    //             end: "100% 100%", // end toma como referencia al contenedor padre del contenedor seleccionado
    //             scrub: true,
    //         },
    //     });

    //     tlMobile.to(naveFuego, {
    //         scale: 2,
    //         y: "5000px",
    //         duration: 8,
    //     });
    // }
})