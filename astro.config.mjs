import { defineConfig } from 'astro/config';
// Use Vercel Edge Functions (Recommended)
import vercel from '@astrojs/vercel/edge';
// Can also use Serverless Functions
// import vercel from '@astrojs/vercel/serverless';
// Or a completely static build
// import vercel from '@astrojs/vercel/static';
import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  experimental: {
    assets: true
  },
  adapter: vercel({
    imageService: true
  }),
  integrations: [sanity({
    projectId: 'h8zbt27a',
    dataset: 'production',
    // Set useCdn to false if you're building statically.
    useCdn: false,
  }), react()]
});