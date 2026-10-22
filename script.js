
const projetos = document.querySelectorAll(".projeto");

if ("IntersectionObserver" in window) {
  const observador = new IntersectionObserver((itens) => {
    itens.forEach((item) => {
      if (item.isIntersecting) {
        item.target.classList.add("aparecer");
        observador.unobserve(item.target);
      }
    });
  }, {
    threshold: 0.12
  });

  projetos.forEach((projeto) => {
    projeto.classList.add("animar");
    observador.observe(projeto);
  });
}
