const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

function updateActiveNav() {
const scrollY = window.scrollY + 100;
let current = "";

sections.forEach(section => {
    if (section.offsetTop <= scrollY) {
        current = section.id;
    }
});

navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
});
}

window.addEventListener("scroll", updateActiveNav, { passive: true });
document.addEventListener("DOMContentLoaded", updateActiveNav);

document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", e => {
        if (e.target.closest(".project-link, .social-link")) return;
        const first = card.querySelector(".project-link");
        if (first) window.open(first.href, first.target || "_self");
    });
});

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
    });
});
