// ===============================
// HEADER EFECTO SCROLL
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (header) {

        if (window.scrollY > 50) {

            header.classList.add("active");

        } else {

            header.classList.remove("active");

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
// BOTÓN CHAT
// ===============================

const chatButton = document.querySelector(".chat-button");

if (chatButton) {

    chatButton.addEventListener("click", () => {

        alert("Chat próximamente disponible.");

    });

}


// ===============================
// SCROLL SUAVE NAVBAR
// ===============================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        const targetId = this.getAttribute("href");

        if(targetId.startsWith("#")){

            e.preventDefault();

            const target = document.querySelector(targetId);

            if(target){

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});


// ===============================
// PARALLAX HERO IMAGE
// ===============================

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

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

    appId: "1:343356805967:web:df1b3df923dcb7b1f4eb3a",

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