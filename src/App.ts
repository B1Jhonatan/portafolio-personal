const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  fetch("/src/pages/portafolio/Portafolio.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se pudo cargar el header");
      }
      return response.text();
    })
    .then((html) => {
      app.innerHTML = html;
    })
    .catch((error) => {
      console.error("Error al cargar el header:", error);
    });
}
