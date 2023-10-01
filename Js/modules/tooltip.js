export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  // ao passar event na função, consigo acessar o elemento do evento mouseover.
  // O this faz referencia a esse elemento.
  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);

    //Aqui atribuo a constante tooltipBox no objeto onMouseLeave para que o mesmo tenha acesso a essa const.
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    // Apenas quando a função onMouseOver for acionada o evento mouseleave será ativado.
    this.addEventListener("mouseleave", onMouseLeave);
  }

  const onMouseMove = {
    tooltipBox: "",
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    },
  };

  // Utilizei um objeto no lugar de uma função. Se o objeto conter a função "handleEvent()", está será executada no callback do evento. Desta forma consigo iserir o tooltipBox (Que a função não teria acesso por estar fora de seu escopo.)
  const onMouseLeave = {
    tooltipBox: "",
    element: "",
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  // Agora eu pego o element (this) e verifico o texto do aria-label dele.
  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const texto = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = texto;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
