const headerContainer = document.querySelector<HTMLDivElement>("#header");

if (headerContainer) {
  fetch("/components-static/header-static/Header.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se pudo cargar el header");
      }
      return response.text();
    })
    .then((html) => {
      headerContainer.innerHTML = html;
    })
    .catch((error) => {
      console.error("Error al cargar el header:", error);
    });
}
