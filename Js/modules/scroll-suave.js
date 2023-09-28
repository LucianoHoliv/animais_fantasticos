export default function scrollSuaveInit() {
  const linksInternos = document.querySelectorAll(
    '[data-anime="smooth-scroll"] a[href^="#"]'
  );

  function scrollSuave(link) {
    link.preventDefault();
    const href = link.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollSuave);
  });
}
