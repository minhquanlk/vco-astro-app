import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import react from "@astrojs/react";
import dotenv from 'dotenv';
dotenv.config();
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: `courses.vcogroup.vn`,
    output: "server",
    adapter: node({
        mode: "middleware"
    }),
    integrations: [
        sitemap(),
        tailwind(),
        react()
    ],
});