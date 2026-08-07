const cursor = document.querySelector(".cursor");
const cursorRing = document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
});

function animateCursor() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;

    cursorRing.style.left = ringX + "px";
    cursorRing.style.top = ringY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();


const interactiveElements = document.querySelectorAll(
    "a, button, .project-media, .circle-button"
);

interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {
        cursorRing.style.width = "70px";
        cursorRing.style.height = "70px";
    });

    element.addEventListener("mouseleave", () => {
        cursorRing.style.width = "38px";
        cursorRing.style.height = "38px";
    });

});


const menuButton = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});


document.querySelectorAll(".mobile-menu a").forEach((link) => {

    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

});


const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});


const projectMedia = document.querySelectorAll(".project-media");

projectMedia.forEach((project) => {

    project.addEventListener("mousemove", (e) => {

        const rect = project.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -2;
        const rotateY = ((x - centerX) / centerX) * 2;

        project.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    project.addEventListener("mouseleave", () => {

        project.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});
