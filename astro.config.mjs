import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://docstools.dev",
  integrations: [robotsTxt()],
  output: "server",
});
