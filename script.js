function tabInit() {
  const animais = document.querySelectorAll(".animais-lista li");
  const animaisDescricao = document.querySelectorAll(
    ".animais-descricao section"
  );

  if (animais.length && animaisDescricao.length) {
    animaisDescricao[0].classList.add("ativo");

    function activeTab(index) {
      animaisDescricao.forEach((section) => {
        section.classList.remove("ativo");
      });
      animaisDescricao[index].classList.add("ativo");
    }

    animais.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

tabInit();

function accordionInit() {
  const perguntaFaq = document.querySelectorAll(".js-accordion dt");

  if (perguntaFaq.length) {
    perguntaFaq[0].classList.add("ativo");
    perguntaFaq[0].nextElementSibling.classList.add("ativo");

    function accordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    perguntaFaq.forEach((item) => {
      item.addEventListener("click", accordion);
    });
  }
}

accordionInit();

function scrollSuaveInit() {
  const linksInternos = document.querySelectorAll('.js-nav a[href^="#"]');

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

scrollSuaveInit();

function AnimaScrollInit() {
  const section = document.querySelectorAll(".js-AnimaScroll");

  if (section.length) {
    const MetadeJanela = window.innerHeight * 0.6;

    function AnimaScroll() {
      section.forEach((item) => {
        let topo = item.getBoundingClientRect().top - MetadeJanela;

        if (topo < 0) {
          item.classList.add("ativo");
        } else {
          item.classList.remove("ativo");
        }
      });
    }

    AnimaScroll();

    window.addEventListener("scroll", AnimaScroll);
  }
}
AnimaScrollInit();
