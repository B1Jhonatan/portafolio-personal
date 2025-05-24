const footerContainer = document.querySelector<HTMLDivElement>("#footer");

if (footerContainer) {
  fetch("/src/components/footer/Footer.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se pudo cargar el header");
      }
      return response.text();
    })
    .then((html) => {
      footerContainer.innerHTML = html;
    })
    .catch((error) => {
      console.error("Error al cargar el header:", error);
    });
}
