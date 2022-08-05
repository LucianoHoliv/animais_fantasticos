function ativaNavMenu() {
  // Selecionar todas as li do menu de imagens
  // Selecionar todas as section com descrição dos aniamis
  const animaisMenu = document.querySelectorAll(".js-menuTab li");
  const animaisTexto = document.querySelectorAll(".js-tabText section");

  if (animaisMenu.length && animaisTexto.length) {
    animaisTexto[0].classList.add("ativo");

    function ativarTab(index) {
      animaisTexto.forEach((section) => {
        section.classList.remove("ativo");
      });
      animaisTexto[index].classList.add("ativo");
    }

    animaisMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        ativarTab(index);
      });
    });
  }
}

ativaNavMenu();

function AtivaFaqList() {
  const FaqList = document.querySelectorAll(".js-accordionList dt");
  if (FaqList.length) {
    FaqList[0].classList.add("ativo");
    FaqList[0].nextElementSibling.classList.add("ativo");

    function ativarLista() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    FaqList.forEach((item) => {
      item.addEventListener("click", ativarLista);
    });
  }
}

AtivaFaqList();

function ativaAnimarScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const metadeTela = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((item) => {
        const sectionTopo = item.getBoundingClientRect().top - metadeTela;
        if (sectionTopo < 0) item.classList.add("ativo");
        else item.classList.remove("ativo");
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

ativaAnimarScroll();
