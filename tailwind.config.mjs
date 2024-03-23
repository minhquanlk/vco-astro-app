/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        //
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './node_modules/flowbite/**/*.{js,tsx}',
    ],

    darkMode: 'class',

    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#ffeaea',
                    100: '#ffc1c3',
                    200: '#bfdbfe',
                    300: '#ff999d',
                    400: '#f76b71',
                    500: '#f43e46',
                    600: '#ec1c24',
                    700: '#d7181f',
                    800: '#bc1b21',
                    900: '#991e23',
                },
            },
            fontFamily: {
                sans: [
                    'Inter',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                    'system-ui',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'Noto Sans',
                    'sans-serif',
                    'Apple Color Emoji',
                    'Segoe UI Emoji',
                    'Segoe UI Symbol',
                    'Noto Color Emoji',
                ],
                body: [
                    'Inter',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                    'system-ui',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'Noto Sans',
                    'sans-serif',
                    'Apple Color Emoji',
                    'Segoe UI Emoji',
                    'Segoe UI Symbol',
                    'Noto Color Emoji',
                ],
                mono: [
                    'ui-monospace',
                    'SFMono-Regular',
                    'Menlo',
                    'Monaco',
                    'Consolas',
                    'Liberation Mono',
                    'Courier New',
                    'monospace',
                ],
            },
            transitionProperty: {
                width: 'width',
            },
            textDecoration: ['active'],
            minWidth: {
                kanban: '28rem',
            },
        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
            'msm': { 'max': '639px' },
        }
    },

    safelist: [
        // In Markdown (README…)
        'justify-evenly',
        'overflow-hidden',
        'rounded-md',

        // From the Hugo Dashboard
        'w-64',
        'w-1/2',
        'rounded-l-lg',
        'rounded-r-lg',
        'bg-gray-200',
        'grid-cols-4',
        'grid-cols-7',
        'h-6',
        'leading-6',
        'h-9',
        'leading-9',
        'shadow-lg',
        'bg-opacity-50',
        'dark:bg-opacity-80',

        // For Astro one
        'grid',
    ],
    spacing: {
        4.5: '18px',
    },
    typography: ({ theme }) => ({
        DEFAULT: {
            css: {
                '--tw-prose-invert-headings': theme('colors.white.dark'),
                '--tw-prose-invert-links': theme('colors.white.dark'),
                h1: { fontSize: '40px', marginBottom: '0.5rem', marginTop: 0 },
                h2: { fontSize: '32px', marginBottom: '0.5rem', marginTop: 0 },
                h3: { fontSize: '28px', marginBottom: '0.5rem', marginTop: 0 },
                h4: { fontSize: '24px', marginBottom: '0.5rem', marginTop: 0 },
                h5: { fontSize: '20px', marginBottom: '0.5rem', marginTop: 0 },
                h6: { fontSize: '16px', marginBottom: '0.5rem', marginTop: 0 },
                p: { marginBottom: '0.5rem' },
                li: { margin: 0 },
                img: { margin: 0 },
            },
        },
    }),
    plugins: [
        //
        require('flowbite/plugin'),
        require('flowbite-typography'),
        require('tailwind-scrollbar')({ nocompatible: true }),
    ],
};