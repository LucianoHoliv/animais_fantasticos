export default function AnimaScrollInit() {
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
  