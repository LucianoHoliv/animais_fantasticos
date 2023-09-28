export default function accordionInit() {
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