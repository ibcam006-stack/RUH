// ===============================
// BODY LOAD ANIMATION
// ===============================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// ===============================
// HEADER
// ===============================

const header = document.querySelector(".header");

// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.querySelector(".menu-toggle");

const navbar = document.querySelector(".navbar");

if(menuToggle && navbar){

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("mobile-active");

        // CAMBIAR ICONO

        if(navbar.classList.contains("mobile-active")){

            menuToggle.innerHTML = "✕";

        }else{

            menuToggle.innerHTML = "☰";

        }

    });

}

// ===============================
// HEADER SHOW / HIDE
// ===============================

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.scrollY;

    // HEADER ACTIVO

    if(currentScroll > 20){

        header.classList.add("active");

    }else{

        header.classList.remove("active");

    }

    // HEADER HIDE

    if(currentScroll > 80){

        if(currentScroll > lastScroll){

            header.classList.add("hide");

        }else{

            header.classList.remove("hide");

        }

    }else{

        header.classList.remove("hide");

    }

    lastScroll = currentScroll;

});

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            // CERRAR MENU MOBILE

            if(navbar){

                navbar.classList.remove("mobile-active");

            }

            if(menuToggle){

                menuToggle.innerHTML = "☰";

            }

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ===============================
// HERO IMAGE PARALLAX
// ===============================

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll", () => {

    let scrollPosition = window.scrollY;

    if(heroImage){

        heroImage.style.transform =
        `translateY(${scrollPosition * 0.05}px)`;

    }

});

// ===============================
// REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".news-card, .gallery-item, .apple-card"
);

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
        element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";

        }

    });

};

// ===============================
// INITIAL STYLES
// ===============================

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(60px)";

    element.style.transition = `
    opacity 0.8s ease,
    transform 0.8s ease
    `;

});

// ===============================
// EVENT
// ===============================

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ===============================
// MODALS
// ===============================

const openButtons =
document.querySelectorAll(".open-modal");

const modals =
document.querySelectorAll(".modal");

const closeButtons =
document.querySelectorAll(".close-modal");

// ===============================
// ABRIR MODAL
// ===============================

openButtons.forEach(button => {

    button.addEventListener("click", () => {

        const modalId =
        button.getAttribute("data-modal");

        const modal =
        document.getElementById(modalId);

        if(modal){

            modal.classList.add("active");

            document.body.style.overflow = "hidden";

        }

    });

});

// ===============================
// CERRAR MODAL
// ===============================

closeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const modal = button.closest(".modal");

        modal.classList.remove("active");

        document.body.style.overflow = "auto";

    });

});

// ===============================
// CERRAR CLICK AFUERA
// ===============================

window.addEventListener("click", (e) => {

    modals.forEach(modal => {

        if(e.target === modal){

            modal.classList.remove("active");

            document.body.style.overflow = "auto";

        }

    });

});

// ===============================
// CERRAR CON ESC
// ===============================

window.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        modals.forEach(modal => {

            modal.classList.remove("active");

        });

        document.body.style.overflow = "auto";

    }

});