import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });

export default defineConfig(() => {
  const rootPath = path.resolve(process.cwd());
  const srcPath = `${rootPath}/src`;
  const compPath = `${srcPath}/components`;

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "~": rootPath,
        "@": srcPath,
        c: compPath,
      },
    },
  };
});
