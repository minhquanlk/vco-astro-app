import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import react from "@astrojs/react";
import dotenv from 'dotenv';
dotenv.config();
import sitemap from "@astrojs/sitemap";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
    site: `http://localhost:${process.env.PORT}`,
    // site: `https://courses.vcogroup.vn`,
    output: "server",
    adapter: node({
        mode: "middleware"
    }),
    server: {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "X-Requested-With",
        }
    },
    i18n: {
        defaultLocale: "vi",
        locales: ["en", "vi"],
        routing: {
            prefixDefaultLocale: false,
        },

    },
    integrations: [sitemap(), tailwind(), react(), preact({ include: ['**/preact/*'] })]
});