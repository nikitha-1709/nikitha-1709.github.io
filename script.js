/* =========================================
   TYPING EFFECT
========================================= */

const typingElement = document.getElementById("typing");

const words = [
    "CSE Student",
    "Developer",
    "Tech Enthusiast",
    "Problem Solver"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 55 : 100
    );
}

typeEffect();


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================================
   NAVBAR SHADOW ON SCROLL
========================================= */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 15px 45px rgba(0, 0, 0, 0.35)";

    } else {

        navbar.style.boxShadow =
            "0 20px 60px rgba(0, 0, 0, 0.25)";

    }

});