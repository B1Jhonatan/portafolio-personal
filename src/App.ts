const app = document.querySelector<HTMLDivElement>("#app");

const url = window.location.href;
const hashUrl = window.location.hash;

const roots: string[] = [
  "http://localhost:5173/",
  "http://localhost:5173/#perfil",
  "http://localhost:5173/#contacto",
  "http://localhost:5173/#tecnologias",
  "http://localhost:5173/#proyectos",
  "http://localhost:5173/#habilidades",
];

const proyecto: string = "http://localhost:5173/proyecto-front";

let fetchUrl: string;

function asignarUrl(): string {
  if (roots.includes(url)) {
    fetchUrl = `/src/pages/portafolio/Portafolio.html${hashUrl}`;
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
