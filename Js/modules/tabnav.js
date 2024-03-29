export default function tabInit() {
  const animais = document.querySelectorAll(".animais-lista li");
  const animaisDescricao = document.querySelectorAll(
    "[data-tab='content'] section"
  );

  if (animais.length && animaisDescricao.length) {
    animaisDescricao[0].classList.add("ativo");

    function activeTab(index) {
      animaisDescricao.forEach((section) => {
        section.classList.remove("ativo");
      });
      const animeDirection = animaisDescricao[index].dataset.anime;
      animaisDescricao[index].classList.add("ativo", animeDirection);
    }

    animais.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
