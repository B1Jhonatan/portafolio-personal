const app = document.querySelector<HTMLDivElement>("#app");
const url = window.location.href;

const root: string = "http://localhost:5173/";
const proyecto: string = "http://localhost:5173/proyecto-front";

let fetchUrl: string;

function asignarUrl(): string {
  if (url === root) {
    fetchUrl = "/src/pages/portafolio/Portafolio.html";
  } else if (url === proyecto) {
    fetchUrl = "/src/pages/proyecto/Proyecto-front.html";
  }
  return fetchUrl;
}

if (app) {
  fetch(asignarUrl())
    .then((response: any) => {
      if (!response.ok) {
        throw new Error("No se pudo cargar el HTML");
      }
      return response.text();
    })
    .then((html: any) => {
      app.innerHTML = html;
    })
    .catch((error: any) => {
      console.error("Error al cargar el HTML:", error);
    });
}
