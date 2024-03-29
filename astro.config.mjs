import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx"; // https://astro.build/config

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://baltacmihai.github.io",
  base: "/componentui",
  integrations: [mdx({}), react()],
});
