import { defineConfig } from "vite";
import { resolve } from "node:path";
import { readFileSync } from "node:fs";

const staticFiles = ["styles.css", "script.js", "about.html", "programs.html", "who-we-serve.html", "voices.html", "contact.html"];

export default defineConfig({
  server: { host: "0.0.0.0" },
  plugins: [
    {
      name: "copy-static-website-pages",
      generateBundle() {
        for (const file of staticFiles) {
          this.emitFile({ type: "asset", fileName: file, source: readFileSync(resolve(process.cwd(), file)) });
        }
      },
    },
  ],
});
