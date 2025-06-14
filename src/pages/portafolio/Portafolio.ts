import "./Portafolio.css";

const portafolioPage = document.querySelector<HTMLDivElement>("#portafolio");

if (portafolioPage) {
  fetch("/src/pages/portafolio/Portafolio.html")
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
