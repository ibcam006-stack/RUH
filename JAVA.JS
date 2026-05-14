// ===============================
// HEADER EFECTO SCROLL
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(header){

        // EFECTO BACKGROUND
        if(window.scrollY > 50){

            header.classList.add("active");

        }else{

            header.classList.remove("active");

        }

        // OCULTAR HEADER
        if(window.scrollY > 20){

            header.classList.add("hide");

        }else{

            header.classList.remove("hide");

        }

    }

});


// ===============================
// ANIMACIÓN SUAVE AL CARGAR
// ===============================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// ===============================
// MENÚ MOBILE
// ===============================

const menuToggle = document.getElementById("menu-toggle");

const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("mobile-active");

    });

}


// ===============================
// CERRAR MENU AL DAR CLICK
// ===============================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        const targetId = this.getAttribute("href");

        // SCROLL SUAVE
        if(targetId.startsWith("#")){

            e.preventDefault();

            const target = document.querySelector(targetId);

            if(target){

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

        // CERRAR MENU EN MOBILE
        if(window.innerWidth <= 768){

            navbar.classList.remove("mobile-active");

        }

    });

});


// ===============================
// BOTÓN CHAT
// ===============================

const chatButton = document.querySelector(".chat-button");

if (chatButton) {

    chatButton.addEventListener("click", () => {

        alert("Chat próximamente disponible.");

    });

}


// ===============================
// PARALLAX HERO IMAGE
// ===============================

const heroImage = document.querySelector(".hero-image img");

if (heroImage && window.innerWidth > 768) {

    window.addEventListener("scroll", () => {

        const scroll = window.scrollY;

        heroImage.style.transform =
            `translateY(${scroll * 0.08}px)`;

    });

}


// ===============================
// FIREBASE CONFIG
// ===============================

const firebaseConfig = {

    apiKey: "AIzaSyBHWHfkMK8I91rN--EY4Am7LcUDIbIs-lM",

    authDomain: "ruhpixel-11703.firebaseapp.com",

    projectId: "ruhpixel-11703",

    storageBucket: "ruhpixel-11703.firebasestorage.app",

    messagingSenderId: "343356805967",

    appId: "343356805967-e072b0kro6veivf07utoknjr9rgmaqjq.apps.googleusercontent.com",

    measurementId: "G-BBHC5HB7R0"

};


// ===============================
// INICIALIZAR FIREBASE
// ===============================

firebase.initializeApp(firebaseConfig);


// ===============================
// AUTH GOOGLE
// ===============================

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();


// ===============================
// LOGIN GOOGLE
// ===============================

const googleLogin = document.getElementById("google-login");

if (googleLogin) {

    googleLogin.addEventListener("click", () => {

        auth.signInWithPopup(provider)

        .then((result) => {

            const user = result.user;

            console.log(user);

            alert(`Bienvenido ${user.displayName}`);

        })

        .catch((error) => {

            console.log(error);

            alert("Error al iniciar sesión");

        });

    });

}


// ===============================
// DETECTAR USUARIO LOGEADO
// ===============================

auth.onAuthStateChanged((user) => {

    if (user) {

        console.log("Usuario activo:", user.displayName);

        if (googleLogin) {

            googleLogin.innerHTML =
                `Hola, ${user.displayName}`;

        }

    }

});


// ===============================
// EFECTO REVEAL CARDS
// ===============================

const cards = document.querySelectorAll(".article-card");

const revealCards = () => {

    const triggerBottom = window.innerHeight * 0.9;

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom){

            card.style.opacity = "1";

            card.style.transform = "translateY(0px)";

        }

    });

};


// ESTILOS INICIALES

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealCards);

window.addEventListener("load", revealCards);