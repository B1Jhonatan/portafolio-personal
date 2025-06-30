const app = document.querySelector<HTMLDivElement>("#app");

const currentOrigin = window.location.origin;
const currentPath = window.location.pathname;
const currentHash = window.location.hash;
const pathWithHash = `${currentPath}${currentHash}`;

const roots: string[] = [
  "/",
  "/#perfil",
  "/#contacto",
  "/#tecnologias",
  "/#proyectos",
  "/#habilidades",
];

const proyecto = "/proyecto-front";

function asignarUrl(): string {
  if (roots.includes(pathWithHash)) {
    return `/src/pages/portafolio/Portafolio.html${currentHash}`;
  } else if (currentPath === proyecto) {
    return "/src/pages/proyecto/Proyecto-front.html";
  }
  return "";
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

      setTimeout(() => {
        const targetElement = document.querySelector(currentHash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    })
    .catch((error: any) => {
      console.error("Error al cargar el HTML:", error);
    });
}
