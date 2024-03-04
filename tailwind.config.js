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

    plugins: [
        //
        require('flowbite/plugin'),
        require('flowbite-typography'),
        require('tailwind-scrollbar')({ nocompatible: true }),
    ],
};