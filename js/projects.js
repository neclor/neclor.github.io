const PROJECTS = [
    {
        name: "Ballistic Solutions",
        desc: "Physics library for computing interception times, impact positions, and firing vectors. Solves polynomial equations up to degree 4 analytically. Dual API in GDScript and C#, with full docs and a demo scene.",
        tags: ["C#", "GDScript", "Godot"],
        github: "https://github.com/neclor/ballistic-solutions",
        links: [
            { label: "Asset Library", href: "https://store.godotengine.org/asset/neclor/ballistic-solutions/" },
        ],
    },
    {
        name: "News Aggregator",
        desc: "Aggregates news from RSS feeds, websites, and Telegram channels into a unified feed. Backend in FastAPI with a REST API, web UI, and Telegram bot for push notifications. Fully containerized with Docker Compose; auto-fetches every 10 minutes.",
        tags: ["Python", "FastAPI", "Docker"],
        github: "https://github.com/neclor/news-aggregator",
        links: [
            { label: "Open", href: "https://news.neclor.com" },
        ],
    },
    {
        name: "Netris Remake",
        desc: "A Tetris-like game built in Godot with custom game mechanics and clean architecture.",
        tags: ["GDScript", "Godot"],
        github: "https://github.com/neclor/netris",
        links: [
            { label: "Play", href: "https://netris.neclor.com" },
        ],
    },
    {
        name: "Slovak Alphabet",
        desc: "Interactive Slovak alphabet with audio pronunciation for each letter.",
        tags: ["HTML", "CSS", "JavaScript"],
        github: null,
        links: [
            { label: "Demo", href: "projects/slovak-alphabet/index.html" },
        ],
    },
];

const grid = document.querySelector(".projects-grid");

PROJECTS.forEach(project => {
    const tags = project.tags.map(t => `<span class="tag">${t}</span>`).join("");

    const githubLink = project.github
        ? `<a href="${project.github}" target="_blank" rel="noopener" class="social-link" title="GitHub"><img src="assets/github-mark-white.svg" alt="GitHub"></a>`
        : "";

    const textLinks = project.links
        .map(l => `<a href="${l.href}" target="_blank" rel="noopener" class="project-link">${l.label}</a>`)
        .join("");

    grid.insertAdjacentHTML("beforeend", `
        <div class="project-card">
            <div class="project-card-top">
                <h3 class="project-name">${project.name}</h3>
            </div>
            <p class="project-desc">${project.desc}</p>
            <div class="project-tags">${tags}</div>
            <div class="project-links">${githubLink}${textLinks}</div>
        </div>
    `);
});
