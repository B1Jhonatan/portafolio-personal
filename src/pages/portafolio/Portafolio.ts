import "./Portafolio.css";

const portafolioPage = document.querySelector<HTMLDivElement>("#app");

if (portafolioPage) {
  fetch("/components-static/portafolio-static/Portafolio.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se pudo cargar el header");
      }
      return response.text();
    })
    .then((html) => {
      portafolioPage.innerHTML = html;
    })
    .catch((error) => {
      console.error("Error al cargar el header:", error);
    });
}
