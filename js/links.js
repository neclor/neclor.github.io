const LINKS = {
  github: "https://github.com/neclor",
  itchio: "https://neclordev.itch.io",
  email: "mailto:contact@neclor.com",
};

document.querySelectorAll("[data-link]").forEach(el => {
  const href = LINKS[el.dataset.link];
  if (href) el.href = href;
});
