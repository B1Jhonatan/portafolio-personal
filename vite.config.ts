import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/", // Si tu app está en la raíz (https://tudominio.com/)
  // O usa './' si tienes problemas con rutas relativas:
  // base: './',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
