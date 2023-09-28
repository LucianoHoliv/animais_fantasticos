export default function tabInit() {
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