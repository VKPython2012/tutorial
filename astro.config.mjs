// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://guileless-pasca-1cd7d0.netlify.app/",
  integrations: [preact()]
});