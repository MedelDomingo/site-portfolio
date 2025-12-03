import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import flowbiteReact from "flowbite-react/plugin/vite";

const repoName = "site-portfolio";

export default defineConfig(({ mode }) => {
  if (mode === "development") {
    return {
      plugins: [react(), tailwindcss(), flowbiteReact()],
      base: "/",
    };
  }

  return {
    plugins: [react(), tailwindcss(), flowbiteReact()],
    base: `${repoName}`,
  };
});
