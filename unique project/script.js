
// ======================================
// THE HIDDEN COST OF CONVENIENCE
// JavaScript Functionality
// ======================================


// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("show")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        const icon = menuToggle.querySelector("i");

        icon.classList.replace("fa-xmark", "fa-bars");

    });

});


// 2. DARK / LIGHT MODE

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

// Load previously selected theme

const savedTheme = localStorage.getItem("websiteTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    if (isDark) {

        themeIcon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("websiteTheme", "dark");

    } else {

        themeIcon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("websiteTheme", "light");

    }

});


// 3. SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            revealObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {

    revealObserver.observe(element);

});


// 4. BACK TO TOP BUTTON

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// 5. PROJECT PROGRESS ANIMATION

const progressFill = document.getElementById("progressFill");
const progressPercent = document.getElementById("progressPercent");

const progressValue = 60;

let progressStarted = false;

const progressObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting && !progressStarted) {

            progressStarted = true;

            progressFill.style.width = progressValue + "%";

            let currentValue = 0;

            const counter = setInterval(() => {

                currentValue++;

                progressPercent.textContent = currentValue + "%";

                if (currentValue >= progressValue) {

                    clearInterval(counter);

                }

            }, 20);

            progressObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.3
});

progressObserver.observe(document.querySelector(".progress-container"));


// 6. ACTIVE NAVIGATION LINK

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection = section.getAttribute("id");

        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


// 7. CONSOLE MESSAGE

console.log(
    "Welcome to The Hidden Cost of Convenience Project!"
);

console.log(
    "Website successfully loaded using HTML, CSS and JavaScript."
);
