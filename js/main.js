const sections = ["about", "portfolio", "resume", "contact"];
const navLinks = document.querySelectorAll(".nav a");

function onScroll() {
    const scrollY = window.scrollY + 100;

    let current = "";

    sections.forEach(
        id => {
            const section = document.getElementById(id);
            if (section && section.offsetTop <= scrollY) {
                current = id;
            }
        }
    );

    navLinks.forEach(
        link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        }
    );
}

window.addEventListener("scroll", onScroll);

document.addEventListener("DOMContentLoaded", onScroll);

document.querySelectorAll("a[href^='#']").forEach(
    anchor => {
        anchor.addEventListener("click",
            function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
            }
        );
    }
);
