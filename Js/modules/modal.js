export default function initModal() {
  const modalContainer = document.querySelector('[data-modal="container"]');
  const btnAbrir = document.querySelector('[data-modal="abrir"]');
  const btnfechar = document.querySelector('[data-modal="fechar"]');

  function toggleModal(event) {
    event.preventDefault();
    modalContainer.classList.toggle("ativo");
  }

  function cliqueForaModal(event) {
    if (event.target === this) {
      modalContainer.classList.remove("ativo");
    }
  }

  function cliqueEsc(e) {
    if (e.key == "Escape") {
      modalContainer.classList.remove("ativo");
    }
  }

  btnAbrir.addEventListener("click", toggleModal);
  btnfechar.addEventListener("click", toggleModal);
  modalContainer.addEventListener("click", cliqueForaModal);
  document.addEventListener("keyup", cliqueEsc);
}
